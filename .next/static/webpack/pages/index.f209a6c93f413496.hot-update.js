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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var _Users_lj_Documents_nextjs_dog_like_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_lj_Documents_nextjs_dog_like_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_lj_Documents_nextjs_dog_like_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n    //const { data, mutate, error } = useSWR<IResponse>('/api/getDog');\n    var DOG_URL = \"https://dogs-api.nomadcoders.workers.dev\";\n    var getNewdog = function() {\n        var _ref = _asyncToGenerator(_Users_lj_Documents_nextjs_dog_like_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var res;\n            return _Users_lj_Documents_nextjs_dog_like_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"https://dogs-api.nomadcoders.workers.dev/\", {\n                            method: \"GET\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 2:\n                        res = _ctx.sent;\n                        console.log(res);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function getNewdog() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var toggleLike = function() {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return getNewdog();\n                },\n                children: \"New Dog\"\n            }, void 0, false, {\n                fileName: \"/Users/lj/Documents/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173\\u110F\\u1169\\u1103\\u1165/nextjs_dog_like/pages/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: toggleLike,\n                children: \"Like\"\n            }, void 0, false, {\n                fileName: \"/Users/lj/Documents/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173\\u110F\\u1169\\u1103\\u1165/nextjs_dog_like/pages/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQU8xQiw2QkFBZSxzQ0FBTTtJQUNuQixtRUFBbUU7SUFDbkUsSUFBTUMsT0FBTyxHQUFHLDBDQUEwQztJQUUxRCxJQUFNQyxTQUFTO21CQUFHLG9MQUFZO2dCQUV0QkMsR0FBRzs7Ozs7K0JBQVNDLEtBQUssQ0FBQywyQ0FBMkMsRUFBQzs0QkFDbEVDLE1BQU0sRUFBRSxLQUFLOzRCQUNiQyxPQUFPLEVBQUU7Z0NBQ1AsY0FBYyxFQUFFLGtCQUFrQjs2QkFDbkM7eUJBQ0YsQ0FBQzs7d0JBTElILEdBQUcsWUFLUDt3QkFDRkksT0FBTyxDQUFDQyxHQUFHLENBQUNMLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7U0FDbEI7d0JBVEtELFNBQVM7OztPQVNkO0lBQ0QsSUFBTU8sVUFBVSxHQUFHLFdBQU0sRUFFeEI7SUFDRCxxQkFDRTs7MEJBQ0UsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTVQsU0FBUyxFQUFFO2lCQUFBOzBCQUFFLFNBQU87Ozs7O3FCQUFTOzBCQUNwRCw4REFBQ1EsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFRixVQUFVOzBCQUFFLE1BQUk7Ozs7O3FCQUFTOztvQkFDekMsQ0FDSDtDQUVILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmludGVyZmFjZSBJUmVzcG9uc2Uge1xuICBpc0xpa2VkOiBib29sZWFuO1xuICB1cmw6IHN0cmluZztcbn1cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgLy9jb25zdCB7IGRhdGEsIG11dGF0ZSwgZXJyb3IgfSA9IHVzZVNXUjxJUmVzcG9uc2U+KCcvYXBpL2dldERvZycpO1xuICBjb25zdCBET0dfVVJMID0gJ2h0dHBzOi8vZG9ncy1hcGkubm9tYWRjb2RlcnMud29ya2Vycy5kZXYnO1xuICBcbiAgY29uc3QgZ2V0TmV3ZG9nID0gYXN5bmMgKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2RvZ3MtYXBpLm5vbWFkY29kZXJzLndvcmtlcnMuZGV2Lycse1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlTGlrZSA9ICgpID0+IHtcblxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE5ld2RvZygpfT5OZXcgRG9nPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUxpa2V9Pkxpa2U8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcblxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRPR19VUkwiLCJnZXROZXdkb2ciLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwidG9nZ2xlTGlrZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});