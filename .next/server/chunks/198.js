"use strict";
exports.id = 198;
exports.ids = [198];
exports.modules = {

/***/ 198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const slideIn = styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes`
0% {
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
100% {
  -webkit-transform: scale(1);
  transform: scale(1);
}
`;
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  animation: ${slideIn} 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  display: grid;
  grid-template-columns: 38% 20% 5% 37%;
  gap: 10px 10px;
  background:${({ theme  })=>theme.toggleBook};
  padding: 2rem 0.188rem 1.625rem 1.688rem;
  border: solid 1px ${({ theme  })=>theme.body};
  border-radius: 4px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  font-weight: bold;
  color: var(--black);
  transition: background 0.40s linear;

  > .first {
    font-family: var(--font-2);
    > p {
      opacity: 0.5;
      font-family: var(--font-1);
      font-size: 0.875rem;
      letter-spacing: normal;
      margin-bottom: 0.25rem;
      color: ${({ theme  })=>theme.text};
      transition: color 0.40s linear;
    }
    > h2 {
      font-size: 1.375rem;
      letter-spacing: -0.2px;
      color: ${({ theme  })=>theme.text};
      transition: color 0.40s linear;
    }
    > span {
      font-size: 0.875rem;
      font-weight: 300;
      color: var(--accent-color);
    }
    .buttons {
      margin-top: 1.313rem;
      > button {
        border: none;
        background:${({ theme  })=>theme.toggleBook};
        margin: 0.188rem 0.938rem 0.125rem 0;
        font-family:var(--font-2);
        font-size: 0.875rem;
        font-weight: 300;
        color: var(--accent-color);
        cursor: pointer;
        transition: background 0.40s linear;
        @media (max-width: 650px){
          margin-top: 5px;
        }
      }
      > span {
        width: 0.125rem;
        height: 1.5rem;
        margin: 0.75rem 1.063rem 0 0.438rem;
        border: solid 1px var(--neutral-color-1);
        background:  var(--neutral-color-1);
        @media (max-width: 650px){
          display: none;
        }
      }
      @media (max-width: 650px){
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
    }
    @media (max-width: 650px){
      grid-row: 1/3;
      margin-top: 30px;
    }
  }
  > .chapter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: var(--font-2);
    font-weight: 300;
    color: ${({ theme  })=>theme.text};
    transition: color 0.40s linear;
    > p {
      margin: 0.063rem 3.625rem 0 0;
      opacity: 0.5;
      font-size: 0.813rem;
    }
    > span {
      margin: 0.438rem 6.813rem 0.25rem 0;
      font-size: 1rem;
      letter-spacing: -0.4px;
    }
    > div {
      margin-top: 1.438rem;
    }
    @media (max-width: 768px){

    }
  }
  > .progress {
    display: flex;
    align-items: center;
    font-weight: normal;
    color: ${({ theme  })=>theme.text};
    transition: color 0.40s linear;
    > div:nth-of-type(2) {
      margin-left: 1.313rem;
      > p {
        font-size: 2rem;
        @media (max-width: 450px){
         font-size: 1rem
        }
      }
      > span {
        font-size: 0.875rem;
        opacity: 0.5;
      }
    }
  }
  > span {
    width: 0.125rem;
    height: 4.375rem;
    margin-top: 1.125rem;
    background:  var(--neutral-color-1);
    border: solid 1px var(--neutral-color-1);
    @media (max-width: 650px){
    display: none;
  }
  }
  @media (max-width: 768px){
    grid-template-columns: 38% 20% 5% 37%;
  }
  @media (max-width: 650px){
    grid-template-columns: 50% 50%;
    padding: 10px 15px;
  }
`;
const Invoice = ({ buyerPAN , sellerPAN , invoiceAmount , invoiceDate , id  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
        class: "shadow-lg bg-white",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            class: "bg-blue-100 border text-left px-2 py-2",
                            children: "BuyerPAN"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            class: "bg-blue-100 border text-left px-2 py-2",
                            children: "SellerPAN"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            class: "bg-blue-100 border text-left px-2 py-2",
                            children: "InvoiceAmount"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                            class: "bg-blue-100 border text-left px-2 py-2",
                            children: "InvoiceDate"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                            class: "border px-2 py-2",
                            children: [
                                buyerPAN,
                                " "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            class: "border px-2 py-2",
                            children: sellerPAN
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                            class: "border px-2 py-2",
                            children: invoiceAmount
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                            class: "border px-2 py-2",
                            children: [
                                invoiceDate,
                                " "
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
Invoice.propTypes = {
    buyerPAN: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    sellerPAN: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    invoiceAmount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    invoiceDate: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Invoice);


/***/ })

};
;