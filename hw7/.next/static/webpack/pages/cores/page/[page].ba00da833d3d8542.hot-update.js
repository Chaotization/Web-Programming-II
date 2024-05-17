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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Launches; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Card,CardContent,CircularProgress,Grid,Typography!=!@mui/material */ \"__barrel_optimize__?names=Button,Card,CardContent,CircularProgress,Grid,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/pagination */ \"./components/pagination.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Launches(param) {\n    let { initialData, initialPage, totalPages } = param;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialPage);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialData);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchPageData(page + 1);\n    }, [\n        page\n    ]);\n    const fetchPageData = async (apiPage)=>{\n        setLoading(true);\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"https://api.spacexdata.com/v4/cores/query\", {\n                query: {},\n                options: {\n                    page: apiPage,\n                    limit: 10\n                }\n            });\n            setData(res.data);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        } finally{\n            setLoading(false);\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-center h-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {}, void 0, false, {\n                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this);\n    }\n    const calculateGridSize = ()=>{\n        const cardWidth = 12 / 5;\n        return {\n            xs: 12,\n            sm: 6,\n            md: 4,\n            lg: cardWidth,\n            xl: cardWidth\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Cores\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 relative overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4 py-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-3xl font-bold mb-4\",\n                            children: \"Core List:\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                            container: true,\n                            spacing: 4,\n                            justifyContent: \"center\",\n                            children: data.docs.map((core, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                    item: true,\n                                    ...calculateGridSize(),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                        initial: {\n                                            opacity: 0,\n                                            y: 50\n                                        },\n                                        animate: {\n                                            opacity: 1,\n                                            y: 0\n                                        },\n                                        transition: {\n                                            duration: 0.5,\n                                            delay: index * 0.1\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                            className: \"rounded-lg overflow-hidden shadow-lg\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {\n                                                className: \"p-4 flex flex-col justify-between\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                                variant: \"h5\",\n                                                                component: \"div\",\n                                                                className: \"font-bold text-xl mb-2\",\n                                                                children: core.serial\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                                lineNumber: 69,\n                                                                columnNumber: 49\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                                variant: \"body2\",\n                                                                color: \"text.secondary\",\n                                                                children: core.status\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                                lineNumber: 71,\n                                                                columnNumber: 49\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                        lineNumber: 68,\n                                                        columnNumber: 45\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"mt-4\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardContent_CircularProgress_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                            href: \"/launches/\".concat(launch.id),\n                                                            variant: \"contained\",\n                                                            fullWidth: true,\n                                                            children: \"More Info\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 49\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 41\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 33\n                                    }, this)\n                                }, core.id, false, {\n                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this),\n                        totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                basePath: \"/cores\",\n                                currentPage: page,\n                                totalPages: totalPages\n                            }, void 0, false, {\n                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                                lineNumber: 87,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                            lineNumber: 86,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\cores\\\\page\\\\[page].jsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Launches, \"XFQULTRRvXm1Lu1BOiVbCc1Zvo4=\");\n_c = Launches;\nvar _c;\n$RefreshReg$(_c, \"Launches\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtzQ0FDWCw0RUFBQ3ZCLDhEQUFVQTtnQ0FBQzBELFVBQVM7Z0NBQVNDLGFBQWFwRDtnQ0FBTUQsWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96RjtHQXJGd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvcmVzL3BhZ2UvW3BhZ2VdLmpzeD84MTc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0J1dHRvbiwgQ2FyZCwgQ2FyZENvbnRlbnQsIENpcmN1bGFyUHJvZ3Jlc3MsIEdyaWQsIFR5cG9ncmFwaHl9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICdAL2NvbXBvbmVudHMvcGFnaW5hdGlvbic7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF1bmNoZXMoe2luaXRpYWxEYXRhLCBpbml0aWFsUGFnZSwgdG90YWxQYWdlc30pIHtcclxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKGluaXRpYWxQYWdlKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoUGFnZURhdGEocGFnZSArIDEpO1xyXG4gICAgfSwgW3BhZ2VdKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaFBhZ2VEYXRhID0gYXN5bmMgKGFwaVBhZ2UpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3Y0L2NvcmVzL3F1ZXJ5Jywge1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHt9LFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2U6IGFwaVBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDEwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXREYXRhKHJlcy5kYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBoLXNjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbGN1bGF0ZUdyaWRTaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IDEyIC8gNTtcclxuICAgICAgICByZXR1cm4ge3hzOiAxMiwgc206IDYsIG1kOiA0LCBsZzogY2FyZFdpZHRoLCB4bDogY2FyZFdpZHRofTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Db3JlczwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPG1haW5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTEwIGJnLWdyYXktMTAwIHJlbGF0aXZlIG92ZXJmbG93LWhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTRcIj5Db3JlIExpc3Q6PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGEuZG9jcy5tYXAoKGNvcmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGtleT17Y29yZS5pZH0gey4uLmNhbGN1bGF0ZUdyaWRTaXplKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3tvcGFjaXR5OiAwLCB5OiA1MH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OiAxLCB5OiAwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e2R1cmF0aW9uOiAwLjUsIGRlbGF5OiBpbmRleCAqIDAuMX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yXCI+e2NvcmUuc2VyaWFsfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPntjb3JlLnN0YXR1c308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHJlZj17YC9sYXVuY2hlcy8ke2xhdW5jaC5pZH1gfSB2YXJpYW50PVwiY29udGFpbmVkXCIgZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3RhbFBhZ2VzID4gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBiYXNlUGF0aD1cIi9jb3Jlc1wiIGN1cnJlbnRQYWdlPXtwYWdlfSB0b3RhbFBhZ2VzPXt0b3RhbFBhZ2VzfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XHJcbiAgICBjb25zdCBwYWdlID0gcGFyc2VJbnQocGFyYW1zLnBhZ2UsIDEwKSB8fCAwO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldENvcmVzQnlQYWdlKHBhZ2UpO1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IGRhdGEudG90YWxQYWdlcyAtIDE7XHJcblxyXG4gICAgaWYgKHBhZ2UgPiB0b3RhbFBhZ2VzIHx8IHBhZ2UgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGluaXRpYWxEYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBpbml0aWFsUGFnZTogcGFnZSxcclxuICAgICAgICAgICAgdG90YWxQYWdlczogdG90YWxQYWdlc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogODY0MDBcclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENvcmVzQnlQYWdlKHBhZ2UpIHtcclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3Y0L2NvcmVzL3F1ZXJ5Jywge1xyXG4gICAgICAgIHF1ZXJ5OiB7fSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgICAgIGxpbWl0OiAxMFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDb3JlcygpO1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIDEwKTtcclxuICAgIGNvbnN0IHBhdGhzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiB0b3RhbFBhZ2VzfSwgKF8sIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIHBhcmFtczoge3BhZ2U6IGluZGV4LnRvU3RyaW5nKCl9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJ1xyXG4gICAgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29yZXMoKSB7XHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3Y0L2NvcmVzJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDaXJjdWxhclByb2dyZXNzIiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJQYWdpbmF0aW9uIiwibW90aW9uIiwiSGVhZCIsIkxhdW5jaGVzIiwiaW5pdGlhbERhdGEiLCJpbml0aWFsUGFnZSIsInRvdGFsUGFnZXMiLCJwYWdlIiwic2V0UGFnZSIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFBhZ2VEYXRhIiwiYXBpUGFnZSIsInJlcyIsInBvc3QiLCJxdWVyeSIsIm9wdGlvbnMiLCJsaW1pdCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImNhbGN1bGF0ZUdyaWRTaXplIiwiY2FyZFdpZHRoIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInRpdGxlIiwibWFpbiIsImgzIiwiY29udGFpbmVyIiwic3BhY2luZyIsImp1c3RpZnlDb250ZW50IiwiZG9jcyIsIm1hcCIsImNvcmUiLCJpbmRleCIsIml0ZW0iLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJ2YXJpYW50IiwiY29tcG9uZW50Iiwic2VyaWFsIiwiY29sb3IiLCJzdGF0dXMiLCJocmVmIiwibGF1bmNoIiwiaWQiLCJmdWxsV2lkdGgiLCJiYXNlUGF0aCIsImN1cnJlbnRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/cores/page/[page].jsx\n"));

/***/ })

});