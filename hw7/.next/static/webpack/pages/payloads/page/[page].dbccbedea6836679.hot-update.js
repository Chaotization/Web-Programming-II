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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Launches; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,CardContent,CardMedia,Grid,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Card,CardContent,CardMedia,Grid,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _public_img_No_image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/img/No_image.jpg */ \"./public/img/No_image.jpg\");\n/* harmony import */ var _components_pagination_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/pagination.jsx */ \"./components/pagination.jsx\");\n/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head.js */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Launches(param) {\n    let { initialData, initialPage, totalPages } = param;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialPage);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialData);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchPageData(page + 1);\n    }, [\n        page\n    ]);\n    const fetchPageData = async (apiPage)=>{\n        setLoading(true);\n        const res = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(\"https://api.spacexdata.com/v4/payloads/query\", {\n            query: {},\n            options: {\n                page: apiPage,\n                limit: 10\n            }\n        });\n        setData(res.data);\n        setLoading(false);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n            variant: \"h4\",\n            align: \"center\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n            lineNumber: 33,\n            columnNumber: 16\n        }, this);\n    }\n    const calculateGridSize = ()=>{\n        return {\n            xs: 12,\n            sm: 6,\n            md: 4,\n            lg: 3,\n            xl: 2\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head_js__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Payloads\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"min-h-screen p-10 bg-gray-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto py-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-3xl font-bold mb-4\",\n                            children: \"Payload List:\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                            container: true,\n                            spacing: 4,\n                            justifyContent: \"center\",\n                            children: data.docs.map((payload, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                                    item: true,\n                                    ...calculateGridSize(),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                        initial: {\n                                            opacity: 0,\n                                            y: 50\n                                        },\n                                        animate: {\n                                            opacity: 1,\n                                            y: 0\n                                        },\n                                        transition: {\n                                            duration: 0.5,\n                                            delay: index * 0.1\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                                            className: \"card-list\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardContent, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                                                            variant: \"h5\",\n                                                            component: \"div\",\n                                                            children: payload.name\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                                            lineNumber: 58,\n                                                            columnNumber: 45\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                                                            variant: \"body2\",\n                                                            color: \"text.secondary\",\n                                                            children: payload.type\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                                            lineNumber: 59,\n                                                            columnNumber: 45\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                                    component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                                                    href: \"/payloads/\".concat(payload.id),\n                                                    variant: \"contained\",\n                                                    children: \"More Info\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 41\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 33\n                                    }, this)\n                                }, payload.id, false, {\n                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, this),\n                        totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            className: \"mt-5 flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                basePath: \"/payloads\",\n                                currentPage: page,\n                                totalPages: totalPages\n                            }, void 0, false, {\n                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                                lineNumber: 73,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                            lineNumber: 72,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\payloads\\\\page\\\\[page].jsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Launches, \"XFQULTRRvXm1Lu1BOiVbCc1Zvo4=\");\n_c = Launches;\nvar _c;\n$RefreshReg$(_c, \"Launches\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L1twYWdlXS5qc3g/NDkzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Qm94LCBCdXR0b24sIENhcmQsIENhcmRDb250ZW50LCBDYXJkTWVkaWEsIEdyaWQsIFR5cG9ncmFwaHl9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBub0ltZyBmcm9tICdAL3B1YmxpYy9pbWcvTm9faW1hZ2UuanBnJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIkAvY29tcG9uZW50cy9wYWdpbmF0aW9uLmpzeFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkLmpzXCI7XHJcbmltcG9ydCB7bW90aW9ufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF1bmNoZXMoeyBpbml0aWFsRGF0YSwgaW5pdGlhbFBhZ2UsIHRvdGFsUGFnZXMgfSkge1xyXG4gICAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoaW5pdGlhbFBhZ2UpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hQYWdlRGF0YShwYWdlICsgMSk7XHJcbiAgICB9LCBbcGFnZV0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoUGFnZURhdGEgPSBhc3luYyAoYXBpUGFnZSkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvcGF5bG9hZHMvcXVlcnknLCB7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7fSxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgcGFnZTogYXBpUGFnZSxcclxuICAgICAgICAgICAgICAgIGxpbWl0OiAxMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0RGF0YShyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2FkaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGFsaWduPVwiY2VudGVyXCI+TG9hZGluZy4uLjwvVHlwb2dyYXBoeT47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FsY3VsYXRlR3JpZFNpemUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHt4czogMTIsIHNtOiA2LCBtZDogNCwgbGc6IDMsIHhsOiAyfTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5QYXlsb2FkczwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIHAtMTAgYmctZ3JheS0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlBheWxvYWQgTGlzdDo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kb2NzLm1hcCgocGF5bG9hZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtwYXlsb2FkLmlkfSB7Li4uY2FsY3VsYXRlR3JpZFNpemUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDAsIHk6IDUwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6IDEsIHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuNSwgZGVsYXk6IGluZGV4ICogMC4xfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0nY2FyZC1saXN0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJkaXZcIj57cGF5bG9hZC5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHQuc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXlsb2FkLnR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29tcG9uZW50PXtMaW5rfSBocmVmPXtgL3BheWxvYWRzLyR7cGF5bG9hZC5pZH1gfSB2YXJpYW50PVwiY29udGFpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9yZSBJbmZvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3RhbFBhZ2VzID4gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdtdC01IGZsZXgganVzdGlmeS1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gYmFzZVBhdGg9XCIvcGF5bG9hZHNcIiBjdXJyZW50UGFnZT17cGFnZX0gdG90YWxQYWdlcz17dG90YWxQYWdlc30vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCBwYWdlID0gcGFyc2VJbnQocGFyYW1zLnBhZ2UsIDEwKSB8fCAwO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFBheWxvYWRzQnlQYWdlKHBhZ2UpO1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IGRhdGEudG90YWxQYWdlcyAtIDE7XHJcblxyXG4gICAgaWYgKHBhZ2UgPiB0b3RhbFBhZ2VzIHx8IHBhZ2UgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGluaXRpYWxEYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBpbml0aWFsUGFnZTogcGFnZSxcclxuICAgICAgICAgICAgdG90YWxQYWdlczogdG90YWxQYWdlc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogODY0MDBcclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBheWxvYWRzQnlQYWdlKHBhZ2UpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cHM6Ly9hcGkuc3BhY2V4ZGF0YS5jb20vdjQvcGF5bG9hZHMvcXVlcnknLCB7XHJcbiAgICAgICAgcXVlcnk6IHt9LFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcGFnZTogcGFnZSArIDEsXHJcbiAgICAgICAgICAgIGxpbWl0OiAxMFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRQYXlsb2FkcygpO1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIDEwKTtcclxuICAgIGNvbnN0IHBhdGhzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdG90YWxQYWdlcyB9LCAoXywgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgcGFyYW1zOiB7IHBhZ2U6IGluZGV4LnRvU3RyaW5nKCkgfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZydcclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFBheWxvYWRzKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3Y0L3BheWxvYWRzJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIkdyaWQiLCJUeXBvZ3JhcGh5Iiwibm9JbWciLCJQYWdpbmF0aW9uIiwiSGVhZCIsIm1vdGlvbiIsIkxhdW5jaGVzIiwiaW5pdGlhbERhdGEiLCJpbml0aWFsUGFnZSIsInRvdGFsUGFnZXMiLCJwYWdlIiwic2V0UGFnZSIsImRhdGEiLCJzZXREYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaFBhZ2VEYXRhIiwiYXBpUGFnZSIsInJlcyIsInBvc3QiLCJxdWVyeSIsIm9wdGlvbnMiLCJsaW1pdCIsInZhcmlhbnQiLCJhbGlnbiIsImNhbGN1bGF0ZUdyaWRTaXplIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInRpdGxlIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImgzIiwiY29udGFpbmVyIiwic3BhY2luZyIsImp1c3RpZnlDb250ZW50IiwiZG9jcyIsIm1hcCIsInBheWxvYWQiLCJpbmRleCIsIml0ZW0iLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJjb21wb25lbnQiLCJuYW1lIiwiY29sb3IiLCJ0eXBlIiwiaHJlZiIsImlkIiwiYmFzZVBhdGgiLCJjdXJyZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/payloads/page/[page].jsx\n"));

/***/ })

});