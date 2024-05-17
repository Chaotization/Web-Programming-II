"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ships/page/[page]",{

/***/ "./pages/ships/page/[page].jsx":
/*!*************************************!*\
  !*** ./pages/ships/page/[page].jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Launches; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Card,CardContent,CardMedia,Grid,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Card,CardContent,CardMedia,Grid,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _public_img_No_image_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/public/img/No_image.jpg */ \"./public/img/No_image.jpg\");\n/* harmony import */ var _components_pagination_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/pagination.jsx */ \"./components/pagination.jsx\");\n/* harmony import */ var next_image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image.js */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Launches(param) {\n    let { initialData, initialPage, totalPages } = param;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialPage);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initialData);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchPageData(page + 1);\n    }, [\n        page\n    ]);\n    const fetchPageData = async (apiPage)=>{\n        setLoading(true);\n        const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"https://api.spacexdata.com/v4/ships/query\", {\n            query: {},\n            options: {\n                page: apiPage,\n                limit: 10\n            }\n        });\n        setData(res.data);\n        setLoading(false);\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n            variant: \"h4\",\n            align: \"center\",\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n            lineNumber: 33,\n            columnNumber: 16\n        }, this);\n    }\n    const regex = /(<([^>]+)>)/gi;\n    const calculateGridSize = ()=>{\n        const cardWidth = 12 / 5;\n        return {\n            xs: 12,\n            sm: 6,\n            md: 4,\n            lg: cardWidth,\n            xl: cardWidth\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Ships\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex min-h-screen flex-col items-center justify-center p-10 bg-gray-100 relative overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container mx-auto px-4 py-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-3xl font-bold mb-4\",\n                            children: \"Ship List:\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                            container: true,\n                            spacing: 4,\n                            justifyContent: \"center\",\n                            children: data.docs.map((ship, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n                                    item: true,\n                                    ...calculateGridSize(),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(motion.div, {\n                                        initial: {\n                                            opacity: 0,\n                                            y: 50\n                                        },\n                                        animate: {\n                                            opacity: 1,\n                                            y: 0\n                                        },\n                                        transition: {\n                                            duration: 0.5,\n                                            delay: index * 0.1\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Card, {\n                                            elevation: 3,\n                                            className: \"rounded-lg overflow-hidden shadow-lg\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"relative h-72\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image_js__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                                        src: ship.image ? ship.image : _public_img_No_image_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                                        layout: \"responsive\",\n                                                        objectFit: \"cover\",\n                                                        width: 500,\n                                                        height: 500,\n                                                        alt: ship.name\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                                                        lineNumber: 60,\n                                                        columnNumber: 45\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.CardContent, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                            variant: \"h5\",\n                                                            component: \"div\",\n                                                            children: ship.name\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                                                            lineNumber: 70,\n                                                            columnNumber: 45\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                                            variant: \"body2\",\n                                                            color: \"text.secondary\",\n                                                            children: ship.home_port ? ship.home_port.replace(regex, \"\").substring(0, 100) + \"...\" : \"No details available\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                                                            lineNumber: 71,\n                                                            columnNumber: 45\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 41\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                                    component: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                                                    href: \"/ships/\".concat(ship.id),\n                                                    variant: \"contained\",\n                                                    children: \"More Info\"\n                                                }, void 0, false, {\n                                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 41\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, this)\n                                }, ship.id, false, {\n                                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this),\n                        totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Card_CardContent_CardMedia_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                            className: \"page-box\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pagination_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                basePath: \"/ships\",\n                                currentPage: page,\n                                totalPages: totalPages\n                            }, void 0, false, {\n                                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                                lineNumber: 83,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                            lineNumber: 82,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\CS\\\\554\\\\hw\\\\hw7\\\\pages\\\\ships\\\\page\\\\[page].jsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Launches, \"XFQULTRRvXm1Lu1BOiVbCc1Zvo4=\");\n_c = Launches;\nvar _c;\n$RefreshReg$(_c, \"Launches\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxrREFBSUE7b0RBQUU0RSxNQUFNLFVBQWtCLE9BQVJ6QixLQUFLMEIsRUFBRTtvREFBSTlDLFNBQVE7OERBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQXZCcEVvQixLQUFLMEIsRUFBRTs7Ozs7Ozs7Ozt3QkE2QjlCNUQsYUFBYSxtQkFDViw4REFBQ2QsMEhBQUdBOzRCQUFDd0MsV0FBVTtzQ0FDWCw0RUFBQ2hDLGtFQUFVQTtnQ0FBQ21FLFVBQVM7Z0NBQVNDLGFBQWE3RDtnQ0FBTUQsWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96RjtHQWhGd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NoaXBzL3BhZ2UvW3BhZ2VdLmpzeD9iNDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCb3gsIEJ1dHRvbiwgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRNZWRpYSwgR3JpZCwgVHlwb2dyYXBoeX0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IG5vSW1nIGZyb20gJ0AvcHVibGljL2ltZy9Ob19pbWFnZS5qcGcnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2luYXRpb24uanN4XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZS5qc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXVuY2hlcyh7IGluaXRpYWxEYXRhLCBpbml0aWFsUGFnZSwgdG90YWxQYWdlcyB9KSB7XHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShpbml0aWFsUGFnZSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaFBhZ2VEYXRhKHBhZ2UgKyAxKTtcclxuICAgIH0sIFtwYWdlXSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hQYWdlRGF0YSA9IGFzeW5jIChhcGlQYWdlKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92NC9zaGlwcy9xdWVyeScsIHtcclxuICAgICAgICAgICAgcXVlcnk6IHt9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiBhcGlQYWdlLFxyXG4gICAgICAgICAgICAgICAgbGltaXQ6IDEwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXREYXRhKHJlcy5kYXRhKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgYWxpZ249XCJjZW50ZXJcIj5Mb2FkaW5nLi4uPC9UeXBvZ3JhcGh5PjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWdleCA9IC8oPChbXj5dKyk+KS9naTtcclxuICAgIGNvbnN0IGNhbGN1bGF0ZUdyaWRTaXplID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IDEyIC8gNTtcclxuICAgICAgICByZXR1cm4ge3hzOiAxMiwgc206IDYsIG1kOiA0LCBsZzogY2FyZFdpZHRoLCB4bDogY2FyZFdpZHRofTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5TaGlwczwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMTAgYmctZ3JheS0xMDAgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgbWItNFwiPlNoaXAgTGlzdDo8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs0fSBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5kb2NzLm1hcCgoc2hpcCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0ga2V5PXtzaGlwLmlkfSB7Li4uY2FsY3VsYXRlR3JpZFNpemUoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDAsIHk6IDUwfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17e29wYWNpdHk6IDEsIHk6IDB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7ZHVyYXRpb246IDAuNSwgZGVsYXk6IGluZGV4ICogMC4xfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGVsZXZhdGlvbj17M30gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzaGlwLmltYWdlID8gc2hpcC5pbWFnZSA6IG5vSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtzaGlwLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImRpdlwiPntzaGlwLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dC5zZWNvbmRhcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NoaXAuaG9tZV9wb3J0ID8gc2hpcC5ob21lX3BvcnQucmVwbGFjZShyZWdleCwgJycpLnN1YnN0cmluZygwLCAxMDApICsgJy4uLicgOiAnTm8gZGV0YWlscyBhdmFpbGFibGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbXBvbmVudD17TGlua30gaHJlZj17YC9zaGlwcy8ke3NoaXAuaWR9YH0gdmFyaWFudD1cImNvbnRhaW5lZFwiPk1vcmUgSW5mbzwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3RvdGFsUGFnZXMgPiAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9J3BhZ2UtYm94Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIGJhc2VQYXRoPVwiL3NoaXBzXCIgY3VycmVudFBhZ2U9e3BhZ2V9IHRvdGFsUGFnZXM9e3RvdGFsUGFnZXN9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHBhcmFtcy5wYWdlLCAxMCkgfHwgMDtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGlwc0J5UGFnZShwYWdlKTtcclxuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBkYXRhLnRvdGFsUGFnZXMgLSAxO1xyXG5cclxuICAgIGlmIChwYWdlID4gdG90YWxQYWdlcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBpbml0aWFsRGF0YTogZGF0YSxcclxuICAgICAgICAgICAgaW5pdGlhbFBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgICAgIHRvdGFsUGFnZXM6IHRvdGFsUGFnZXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6IDg2NDAwXHJcbiAgICB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRTaGlwc0J5UGFnZShwYWdlKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3Y0L3NoaXBzL3F1ZXJ5Jywge1xyXG4gICAgICAgIHF1ZXJ5OiB7fSxcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgICAgIGxpbWl0OiAxMFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTaGlwcygpO1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChkYXRhLmxlbmd0aCAvIDEwKTtcclxuICAgIGNvbnN0IHBhdGhzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogdG90YWxQYWdlcyB9LCAoXywgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgcGFyYW1zOiB7IHBhZ2U6IGluZGV4LnRvU3RyaW5nKCkgfVxyXG4gICAgfSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6ICdibG9ja2luZydcclxuICAgIH07XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFNoaXBzKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnNwYWNleGRhdGEuY29tL3Y0L3NoaXBzJyk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJveCIsIkJ1dHRvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRNZWRpYSIsIkdyaWQiLCJUeXBvZ3JhcGh5Iiwibm9JbWciLCJQYWdpbmF0aW9uIiwiSW1hZ2UiLCJIZWFkIiwiTGF1bmNoZXMiLCJpbml0aWFsRGF0YSIsImluaXRpYWxQYWdlIiwidG90YWxQYWdlcyIsInBhZ2UiLCJzZXRQYWdlIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoUGFnZURhdGEiLCJhcGlQYWdlIiwicmVzIiwicG9zdCIsInF1ZXJ5Iiwib3B0aW9ucyIsImxpbWl0IiwidmFyaWFudCIsImFsaWduIiwicmVnZXgiLCJjYWxjdWxhdGVHcmlkU2l6ZSIsImNhcmRXaWR0aCIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMyIsImNvbnRhaW5lciIsInNwYWNpbmciLCJqdXN0aWZ5Q29udGVudCIsImRvY3MiLCJtYXAiLCJzaGlwIiwiaW5kZXgiLCJpdGVtIiwibW90aW9uIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiZWxldmF0aW9uIiwic3JjIiwiaW1hZ2UiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm5hbWUiLCJjb21wb25lbnQiLCJjb2xvciIsImhvbWVfcG9ydCIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCJocmVmIiwiaWQiLCJiYXNlUGF0aCIsImN1cnJlbnRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/ships/page/[page].jsx\n"));

/***/ })

});