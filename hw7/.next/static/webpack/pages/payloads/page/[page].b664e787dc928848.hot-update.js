"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/payloads/page/[page]",{

/***/ "./pages/payloads/page/[page].jsx":
/*!****************************************!*\
  !*** ./pages/payloads/page/[page].jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Launches; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_CardContent_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,CardContent,Grid,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Card,CardContent,Grid,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_pagination_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/pagination.jsx */ \"./components/pagination.jsx\");\n/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head.js */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Launches(param) {\n    let { initialData, initialPage, totalPages } = param;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialPage);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialData);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchPageData(page + 1);\n    }, [\n        page\n    ]);\n    const fetchPageData = async (apiPage)=>{\n        setLoading(true);\n        const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"https://api.spacexdata.com/v4/payloads/query\", {\n            query: {},\n            options: {\n                page: apiPage,\n                limit: 10\n            }\n        });\n        setData(res.data);\n        setLoading(false);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n            variant: \"h4\",\n            align: \"center\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n            lineNumber: 32,\n            columnNumber: 16\n        }, this);\n    }\n    const calculateGridSize = ()=>{\n        const cardWidth = 12 / 5;\n        return {\n            xs: 12,\n            sm: 6,\n            md: 4,\n            lg: cardWidth,\n            xl: cardWidth\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head_js__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Payloads\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 relative overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4 py-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-3xl font-bold mb-4\",\n                            children: \"Payload List:\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                            container: true,\n                            spacing: 4,\n                            justifyContent: \"center\",\n                            children: data.docs.map((payload, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                                    item: true,\n                                    ...calculateGridSize(),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                                        initial: {\n                                            opacity: 0,\n                                            y: 50\n                                        },\n                                        animate: {\n                                            opacity: 1,\n                                            y: 0\n                                        },\n                                        transition: {\n                                            duration: 0.5,\n                                            delay: index * 0.1\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Card, {\n                                            className: \"rounded-lg overflow-hidden shadow-lg p-6\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.CardContent, {\n                                                    className: \"p-6 flex flex-col justify-between\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                                variant: \"h5\",\n                                                                component: \"div\",\n                                                                children: payload.name\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                                                lineNumber: 60,\n                                                                columnNumber: 49\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                                                                variant: \"body2\",\n                                                                color: \"text.secondary\",\n                                                                children: payload.type\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                                                lineNumber: 61,\n                                                                columnNumber: 49\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                    component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                                                    href: \"/payloads/\".concat(payload.id),\n                                                    variant: \"contained\",\n                                                    fullWidth: true,\n                                                    children: \"More Info\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 41\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, this)\n                                }, payload.id, false, {\n                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this),\n                        totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                            className: \"mt-5 flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                basePath: \"/payloads\",\n                                currentPage: page,\n                                totalPages: totalPages\n                            }, void 0, false, {\n                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                lineNumber: 76,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Launches, \"XFQULTRRvXm1Lu1BOiVbCc1Zvo4=\");\n_c = Launches;\nvar _c;\n$RefreshReg$(_c, \"Launches\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTFFd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BheWxvYWRzL3BhZ2UvW3BhZ2VdLmpzeD80OTNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Qm94LCBCdXR0b24sIENhcmQsIENhcmRDb250ZW50LCBHcmlkLCBUeXBvZ3JhcGh5fSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2luYXRpb24uanN4XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWQuanNcIjtcclxuaW1wb3J0IHttb3Rpb259IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXVuY2hlcyh7aW5pdGlhbERhdGEsIGluaXRpYWxQYWdlLCB0b3RhbFBhZ2VzfSkge1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoaW5pdGlhbFBhZ2UpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hQYWdlRGF0YShwYWdlICsgMSk7XHJcbiAgICB9LCBbcGFnZV0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoUGFnZURhdGEgPSBhc3luYyAoYXBpUGFnZSkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvcGF5bG9hZHMvcXVlcnknLCB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7fSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcGFnZTogYXBpUGFnZSxcclxuICAgICAgICAgICAgICAgIGxpbWl0OiAxMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+TG9hZGluZy4uLjwvVHlwb2dyYXBoeT47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlR3JpZFNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gMTIgLyA1O1xyXG4gICAgICAgIHJldHVybiB7eHM6IDEyLCBzbTogNiwgbWQ6IDQsIGxnOiBjYXJkV2lkdGgsIHhsOiBjYXJkV2lkdGh9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPlBheWxvYWRzPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8bWFpblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMTAgYmctZ3JheS0xMDAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlBheWxvYWQgTGlzdDo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kb2NzLm1hcCgocGF5bG9hZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtwYXlsb2FkLmlkfSB7Li4uY2FsY3VsYXRlR3JpZFNpemUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDAsIHk6IDUwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6IDEsIHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuNSwgZGVsYXk6IGluZGV4ICogMC4xfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1sZyBwLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9XCJwLTYgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj57cGF5bG9hZC5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BheWxvYWQudHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSBocmVmPXtgL3BheWxvYWRzLyR7cGF5bG9hZC5pZH1gfSB2YXJpYW50PVwiY29udGFpbmVkXCIgZnVsbFdpZHRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vcmUgSW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB7dG90YWxQYWdlcyA+IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0nbXQtNSBmbGV4IGp1c3RpZnktY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGJhc2VQYXRoPVwiL3BheWxvYWRzXCIgY3VycmVudFBhZ2U9e3BhZ2V9IHRvdGFsUGFnZXM9e3RvdGFsUGFnZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBwYXJzZUludChwYXJhbXMucGFnZSwgMTApIHx8IDA7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UGF5bG9hZHNCeVBhZ2UocGFnZSk7XHJcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gZGF0YS50b3RhbFBhZ2VzIC0gMTtcclxuXHJcbiAgICBpZiAocGFnZSA+IHRvdGFsUGFnZXMgfHwgcGFnZSA8IDApIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgaW5pdGlhbERhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGluaXRpYWxQYWdlOiBwYWdlLFxyXG4gICAgICAgICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZhbGlkYXRlOiA4NjQwMFxyXG4gICAgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bG9hZHNCeVBhZ2UocGFnZSkge1xyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvcGF5bG9hZHMvcXVlcnknLCB7XHJcbiAgICAgICAgcXVlcnk6IHt9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGFnZTogcGFnZSArIDEsXHJcbiAgICAgICAgICAgIGxpbWl0OiAxMFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQYXlsb2FkcygpO1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIDEwKTtcclxuICAgIGNvbnN0IHBhdGhzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiB0b3RhbFBhZ2VzfSwgKF8sIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIHBhcmFtczoge3BhZ2U6IGluZGV4LnRvU3RyaW5nKCl9XHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJ1xyXG4gICAgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bG9hZHMoKSB7XHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3Y0L3BheWxvYWRzJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiUGFnaW5hdGlvbiIsIkhlYWQiLCJtb3Rpb24iLCJMYXVuY2hlcyIsImluaXRpYWxEYXRhIiwiaW5pdGlhbFBhZ2UiLCJ0b3RhbFBhZ2VzIiwicGFnZSIsInNldFBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hQYWdlRGF0YSIsImFwaVBhZ2UiLCJyZXMiLCJwb3N0IiwicXVlcnkiLCJvcHRpb25zIiwibGltaXQiLCJ2YXJpYW50IiwiYWxpZ24iLCJjYWxjdWxhdGVHcmlkU2l6ZSIsImNhcmRXaWR0aCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsImNvbnRhaW5lciIsInNwYWNpbmciLCJqdXN0aWZ5Q29udGVudCIsImRvY3MiLCJtYXAiLCJwYXlsb2FkIiwiaW5kZXgiLCJpdGVtIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiY29tcG9uZW50IiwibmFtZSIsImNvbG9yIiwidHlwZSIsImhyZWYiLCJpZCIsImZ1bGxXaWR0aCIsImJhc2VQYXRoIiwiY3VycmVudFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/payloads/page/[page].jsx\n"));

/***/ })

});