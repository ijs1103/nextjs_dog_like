"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    _s();\n    var DOG_URL = \"https://dogs-api.nomadcoders.workers.dev\";\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DOG_URL), data = ref.data, mutate = ref.mutate, error = ref.error;\n    var toggleLike = function() {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                width: \"300\",\n                height: \"300\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    auto: true,\n                    src: data === null || data === void 0 ? void 0 : data.url,\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"/Users/lj/Documents/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173\\u110F\\u1169\\u1103\\u1165/nextjs_dog_like/pages/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/lj/Documents/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173\\u110F\\u1169\\u1103\\u1165/nextjs_dog_like/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"New Dog\"\n            }, void 0, false, {\n                fileName: \"/Users/lj/Documents/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173\\u110F\\u1169\\u1103\\u1165/nextjs_dog_like/pages/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: toggleLike,\n                children: \"Like\"\n            }, void 0, false, {\n                fileName: \"/Users/lj/Documents/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173\\u110F\\u1169\\u1103\\u1165/nextjs_dog_like/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n}, \"MBjjql4lnepiJcmnnCIZwE0laGY=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUN5Qjs7QUFNekIsK0RBQWUsY0FBTTs7SUFDbkIsSUFBTUMsT0FBTyxHQUFHLDBDQUEwQztJQUMxRCxJQUFnQ0QsR0FBZSxHQUFmQSwrQ0FBTSxDQUFDQyxPQUFPLENBQUMsRUFBdkNDLElBQUksR0FBb0JGLEdBQWUsQ0FBdkNFLElBQUksRUFBRUMsTUFBTSxHQUFZSCxHQUFlLENBQWpDRyxNQUFNLEVBQUVDLEtBQUssR0FBS0osR0FBZSxDQUF6QkksS0FBSztJQUszQixJQUFNQyxVQUFVLEdBQUcsV0FBTSxFQUV4QjtJQUNELHFCQUNFOzswQkFDRSw4REFBQ0MsT0FBSztnQkFBQ0MsS0FBSyxFQUFDLEtBQUs7Z0JBQUNDLE1BQU0sRUFBQyxLQUFLOzBCQUM3Qiw0RUFBQ0MsUUFBTTtvQkFBQ0MsSUFBSTtvQkFBQ0MsR0FBRyxFQUFFVCxJQUFJLGFBQUpBLElBQUksV0FBSyxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLElBQUksQ0FBRVUsR0FBRztvQkFBRUMsSUFBSSxFQUFDLFdBQVc7Ozs7O3lCQUFHOzs7OztxQkFDMUM7MEJBQ1IsOERBQUNDLFFBQU07MEJBQUMsU0FBTzs7Ozs7cUJBQVM7MEJBQ3hCLDhEQUFDQSxRQUFNO2dCQUFDQyxPQUFPLEVBQUVWLFVBQVU7MEJBQUUsTUFBSTs7Ozs7cUJBQVM7O29CQUN6QyxDQUNIO0NBRUg7O1FBbEJpQ0wsMkNBQU07O0lBa0J0QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5pbnRlcmZhY2UgSVJlc3BvbnNlIHtcbiAgaXNMaWtlZDogYm9vbGVhbjtcbiAgdXJsOiBzdHJpbmc7XG59XG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IERPR19VUkwgPSAnaHR0cHM6Ly9kb2dzLWFwaS5ub21hZGNvZGVycy53b3JrZXJzLmRldic7XG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlLCBlcnJvciB9ID0gdXNlU1dSKERPR19VUkwpO1xuICBcbiAgXG5cblxuICBjb25zdCB0b2dnbGVMaWtlID0gKCkgPT4ge1xuXG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDx2aWRlbyB3aWR0aD1cIjMwMFwiIGhlaWdodD1cIjMwMFwiPlxuICAgICAgICA8c291cmNlIGF1dG8gc3JjPXtkYXRhPy51cmx9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgPC92aWRlbz5cbiAgICAgIDxidXR0b24+TmV3IERvZzwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVMaWtlfT5MaWtlPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG5cbn07XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiRE9HX1VSTCIsImRhdGEiLCJtdXRhdGUiLCJlcnJvciIsInRvZ2dsZUxpa2UiLCJ2aWRlbyIsIndpZHRoIiwiaGVpZ2h0Iiwic291cmNlIiwiYXV0byIsInNyYyIsInVybCIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});