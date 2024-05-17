"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cores/page/[page]",{

/***/ "./pages/cores/page/[page].jsx":
/*!*************************************!*\
  !*** ./pages/cores/page/[page].jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Launches; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Card,CardContent,CircularProgress,Grid,Typography!=!@mui/material */ \"__barrel_optimize__?names=Button,Card,CardContent,CircularProgress,Grid,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/pagination */ \"./components/pagination.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Launches(param) {\n    let { initialData, initialPage, totalPages } = param;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialPage);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialData);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchPageData(page + 1);\n    }, [\n        page\n    ]);\n    const fetchPageData = async (apiPage)=>{\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://api.spacexdata.com/v4/cores/query\", {\n                query: {},\n                options: {\n                    page: apiPage,\n                    limit: 10\n                }\n            });\n            setData(res.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.CircularProgress, {}, void 0, false, {\n                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, this);\n    }\n    const calculateGridSize = ()=>{\n        const cardWidth = 12 / 5;\n        return {\n            xs: 12,\n            sm: 6,\n            md: 4,\n            lg: cardWidth,\n            xl: cardWidth\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 relative overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                    container: true,\n                    spacing: 4,\n                    justifyContent: \"center\",\n                    children: data.docs.map((core, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                            item: true,\n                            ...calculateGridSize(),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                                initial: {\n                                    opacity: 0,\n                                    y: 50\n                                },\n                                animate: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                transition: {\n                                    duration: 0.5,\n                                    delay: index * 0.1\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Card, {\n                                    className: \"rounded-lg overflow-hidden shadow-lg\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.CardContent, {\n                                        className: \"p-4 flex flex-col justify-between\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                                        variant: \"h5\",\n                                                        component: \"div\",\n                                                        className: \"font-bold text-xl mb-2\",\n                                                        children: core.serial\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                                                        variant: \"body2\",\n                                                        color: \"text.secondary\",\n                                                        children: core.status\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                        lineNumber: 63,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mt-4\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                                    component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                                                    href: \"/cores/\".concat(core.id),\n                                                    variant: \"contained\",\n                                                    className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full\",\n                                                    children: \"More Info\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 45\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 41\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 37\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 33\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                lineNumber: 54,\n                                columnNumber: 29\n                            }, this)\n                        }, core.id, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                            lineNumber: 53,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this),\n                totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        basePath: \"/cores\",\n                        currentPage: page,\n                        totalPages: totalPages\n                    }, void 0, false, {\n                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                        lineNumber: 78,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                    lineNumber: 77,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(Launches, \"XFQULTRRvXm1Lu1BOiVbCc1Zvo4=\");\n_c = Launches;\nvar _c;\n$RefreshReg$(_c, \"Launches\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBTXJGO0dBNUV3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29yZXMvcGFnZS9bcGFnZV0uanN4PzgxNzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBDYXJkQ29udGVudCwgQ2lyY3VsYXJQcm9ncmVzcywgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF1bmNoZXMoeyBpbml0aWFsRGF0YSwgaW5pdGlhbFBhZ2UsIHRvdGFsUGFnZXMgfSkge1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoaW5pdGlhbFBhZ2UpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hQYWdlRGF0YShwYWdlICsgMSk7XHJcbiAgICB9LCBbcGFnZV0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoUGFnZURhdGEgPSBhc3luYyAoYXBpUGFnZSkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvY29yZXMvcXVlcnknLCB7XHJcbiAgICAgICAgICAgICAgICBxdWVyeToge30sXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZTogYXBpUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogMTBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNldERhdGEocmVzLmRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGF0ZUdyaWRTaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IDEyIC8gNTtcclxuICAgICAgICByZXR1cm4geyB4czogMTIsIHNtOiA2LCBtZDogNCwgbGc6IGNhcmRXaWR0aCwgeGw6IGNhcmRXaWR0aCB9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTEwIGJnLWdyYXktMTAwIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktOFwiPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RhdGEuZG9jcy5tYXAoKGNvcmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtjb3JlLmlkfSB7Li4uY2FsY3VsYXRlR3JpZFNpemUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNTAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiBpbmRleCAqIDAuMSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPVwicC00IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTJcIj57Y29yZS5zZXJpYWx9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj57Y29yZS5zdGF0dXN9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gaHJlZj17YC9jb3Jlcy8ke2NvcmUuaWR9YH0gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIHt0b3RhbFBhZ2VzID4gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gYmFzZVBhdGg9XCIvY29yZXNcIiBjdXJyZW50UGFnZT17cGFnZX0gdG90YWxQYWdlcz17dG90YWxQYWdlc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBwYWdlID0gcGFyc2VJbnQocGFyYW1zLnBhZ2UsIDEwKSB8fCAwO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENvcmVzQnlQYWdlKHBhZ2UpO1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IGRhdGEudG90YWxQYWdlcyAtIDE7XHJcblxyXG4gICAgaWYgKHBhZ2UgPiB0b3RhbFBhZ2VzIHx8IHBhZ2UgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGluaXRpYWxEYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBpbml0aWFsUGFnZTogcGFnZSxcclxuICAgICAgICAgICAgdG90YWxQYWdlczogdG90YWxQYWdlc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogODY0MDBcclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvcmVzQnlQYWdlKHBhZ2UpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvY29yZXMvcXVlcnknLCB7XHJcbiAgICAgICAgcXVlcnk6IHt9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICAgICAgbGltaXQ6IDEwXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENvcmVzKCk7XHJcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGRhdGEubGVuZ3RoIC8gMTApO1xyXG4gICAgY29uc3QgcGF0aHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0b3RhbFBhZ2VzIH0sIChfLCBpbmRleCkgPT4gKHtcclxuICAgICAgICBwYXJhbXM6IHsgcGFnZTogaW5kZXgudG9TdHJpbmcoKSB9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJ1xyXG4gICAgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29yZXMoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvY29yZXMnKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlBhZ2luYXRpb24iLCJtb3Rpb24iLCJMYXVuY2hlcyIsImluaXRpYWxEYXRhIiwiaW5pdGlhbFBhZ2UiLCJ0b3RhbFBhZ2VzIiwicGFnZSIsInNldFBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hQYWdlRGF0YSIsImFwaVBhZ2UiLCJyZXMiLCJwb3N0IiwicXVlcnkiLCJvcHRpb25zIiwibGltaXQiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjYWxjdWxhdGVHcmlkU2l6ZSIsImNhcmRXaWR0aCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJtYWluIiwiY29udGFpbmVyIiwic3BhY2luZyIsImp1c3RpZnlDb250ZW50IiwiZG9jcyIsIm1hcCIsImNvcmUiLCJpbmRleCIsIml0ZW0iLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ2YXJpYW50IiwiY29tcG9uZW50Iiwic2VyaWFsIiwiY29sb3IiLCJzdGF0dXMiLCJocmVmIiwiaWQiLCJiYXNlUGF0aCIsImN1cnJlbnRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cores/page/[page].jsx\n"));

/***/ })

});