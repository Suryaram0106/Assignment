import { useState, useEffect } from 'react';
import { InvoiceRecordContractAddress } from '../config.js';
import {ethers} from 'ethers';
import InvoiceRecord from '../utils/InvoiceRecord.json'
import Invoice from './components/Invoice';




declare var window: any
declare var error: any

function Home () {


  interface invoices {
    buyerPAN: string;
    sellerPAN: string;
    invoiceAmount: string;
    invoiceDate: string;
    id: string;
  }

  	const [currentAccount, setCurrentAccount] = useState('')
    const [correctNetwork, setCorrectNetwork] = useState(false)

    const [txError, setTxError] = useState(null)


    const [invoices, setInvoices] = useState<Array<invoices>>([]);
    const [buyerPAN, setbuyerPAN] = useState('');
    const [sellerPAN, setsellerPAN] = useState('');
    const [invoiceAmount, setinvoiceAmount] = useState('');
    const [invoiceDate, setinvoiceDate] = useState('');
    const [id, setId] = useState('');
   

    

  // Calls Metamask to connect wallet on clicking Connect Wallet button
	const connectWallet = async () => {
		try {
			const { ethereum } = window

			if (!ethereum) {
				console.log('Metamask not detected')
				return
			}
			let chainId = await ethereum.request({ method: 'eth_chainId'})
			console.log('Connected to chain:' + chainId)

			const polygonChainId = '0x80001'

			if (chainId !== polygonChainId) {
				alert('You are not connected to the Polygon Mumbai Testnet!')
				return
			}

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

			console.log('Found account', accounts[0])
			setCurrentAccount(accounts[0])
		} catch (error) {
			console.log('Error connecting to metamask', error)
		}
	}

  // Checks if wallet is connected to the correct network
const checkCorrectNetwork = async () => {
  const { ethereum } = window
  let chainId = await ethereum.request({ method: 'eth_chainId' })
  console.log('Connected to chain:' + chainId)

  const polygonChainId = '0x80001'

  if (chainId !== polygonChainId) {
    setCorrectNetwork(false)
  } else {
    setCorrectNetwork(true)
  }
}

const getInvoiceByBuyerPAN = async() => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const InvoiceRecordContract = new ethers.Contract(
          InvoiceRecordContractAddress,
          InvoiceRecord.abi,
          signer
        )

        let records = await InvoiceRecordContract.getInvoiceByBuyerPAN(buyerPAN)
        console.log(buyerPAN);
        setInvoices(records);

      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
      //setTxError(error.message)
    }
  }

  const getAllInvoice = async() => {
    try {
      const { ethereum } = window

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const InvoiceRecordContract = new ethers.Contract(
          InvoiceRecordContractAddress,
          InvoiceRecord.abi,
          signer
        )

        let records = await InvoiceRecordContract.getInvoiceList()
        console.log(buyerPAN);
        setInvoices(records);

      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
      //setTxError(error.message)
    }
  }
  

const submitRecord = async () => {
  let invoice = {
      'buyerPAN': buyerPAN,
      'sellerPAN': sellerPAN,
      'invoiceAmount': invoiceAmount,
      'invoiceDate': invoiceDate,
      'id': id

  };

  try {
    const { ethereum } = window

    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum)
      const signer = provider.getSigner()
      const InvoiceRecordContract = new ethers.Contract(
        InvoiceRecordContractAddress,
        InvoiceRecord.abi,
        signer
      )

      let InvoiceTx = await InvoiceRecordContract.addRecord(invoice.buyerPAN, invoice.sellerPAN, invoice.invoiceAmount, invoice.invoiceDate);

      console.log(InvoiceTx);
    } else {
      console.log("Ethereum object doesn't exist!")
    }
  } catch (error) {
    console.log('Error Submitting new Record', error)
    //setTxError(error.message)
  }
};

  return (
    <div className='flex flex-col items-center bg-[#ffffff] text-[#6a50aa] min-h-screen'>
  <div className='trasition hover:rotate-180 hover:scale-105 transition duration-500 ease-in-out'>
  </div>
  <h2 className='text-3xl font-bold mb-20 mt-12'>
    
    Invoice Ledger
  </h2>
 
  {currentAccount === '' ? (
    <button
    className='text-2xl font-bold py-3 px-12 bg-[#b7ddc0] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
    onClick={connectWallet}
    >
    Connect Wallet
    </button>
    ) : correctNetwork ? (
      <h4 className='text-3xl font-bold mb-20 mt-12'>
        Wallet Connected
      </h4>
    ) : (
    <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
    <div>----------------------------------------</div>
    <div>Please connect to the Polygon Mumbai Testnet</div>
    <div>----------------------------------------</div>
    </div>
    )}

<div>

  <div className='text-xl font-semibold mb-20 mt-4'>
      <input className='text-xl font-bold mb-2 mt-1' type="text" placeholder="Enter Buyer PAN" value={buyerPAN} onChange={(e) => setbuyerPAN(e.target.value)} />
      <br/>
      <input className='text-xl font-bold mb-2 mt-1' type="text" placeholder="Enter Seller PAN" value={sellerPAN} onChange={(e) => setsellerPAN(e.target.value)} />
      <br/>
      <input className='text-xl font-bold mb-2 mt-1' type="text" placeholder="Enter Invoice Amount" value={invoiceAmount} onChange={(e) => setinvoiceAmount(e.target.value)} />
      <br/>
      <input className='text-xl font-bold mb-2 mt-1' type="text" placeholder="Enter Invoice Date" value={invoiceDate} onChange={(e) => setinvoiceDate(e.target.value)} />
      <br/>
      <button className='text-xl font-bold py-3 px-12 bg-[#ffd75f] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
      onClick={submitRecord} >
        Add Invoice
      </button>
</div>
    <div className='text-xl font-semibold mb-20 mt-4'>
    <input className='text-xl font-bold mb-2 mt-1' type="text" placeholder="Enter Buyer PAN" value={buyerPAN} onChange={(e) => setbuyerPAN(e.target.value)} />
      <br/> 
     <button className='text-xl font-bold py-3 px-12 bg-[#ffd75f] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
     onClick={getInvoiceByBuyerPAN} >
       View Invoices By BuyerPAN
     </button>
      
     <br/>
     
     <br/>
     <button className='text-xl font-bold py-3 px-12 bg-[#ffd75f] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
     onClick={getAllInvoice} >
       View Invoice Ledger
     </button>
     
     {invoices.map((rec) => (
       <Invoice

         key={rec.id}
         id={parseInt(rec.id)}
         buyerPAN={rec.buyerPAN}
         sellerPAN={rec.sellerPAN}
         invoiceAmount={parseInt(rec.invoiceAmount).toString()}
         invoiceDate={rec.invoiceDate}
        
       
       />
     ))}
   </div>
  </div>
  </div>
  
  )
}

//NextPage();

export default Home