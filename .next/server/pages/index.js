"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (()=>{\n    const DOG_URL = \"https://dogs-api.nomadcoders.workers.dev\";\n    const { data , mutate , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DOG_URL);\n    const onClick = ()=>{\n        mutate();\n    };\n    const toggleLike = ()=>{\n        if (!data) return;\n        mutate({\n            ...data,\n            isLiked: !data.isLiked\n        }, false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                width: 500,\n                height: 500,\n                src: data === null || data === void 0 ? void 0 : data.url,\n                autoPlay: true,\n                controls: true,\n                muted: true\n            }, void 0, false, {\n                fileName: \"/Users/lj/Documents/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173\\u110F\\u1169\\u1103\\u1165/nextjs_dog_like/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    \"width\": \"500px\",\n                    \"display\": \"flex\",\n                    \"marginTop\": \"30px\",\n                    \"justifyContent\": \"space-between\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClick,\n                        children: \"New Dog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lj/Documents/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173\\u110F\\u1169\\u1103\\u1165/nextjs_dog_like/pages/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleLike,\n                        children: (data === null || data === void 0 ? void 0 : data.isLiked) ? \"Like\" : \"UnLike\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lj/Documents/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173\\u110F\\u1169\\u1103\\u1165/nextjs_dog_like/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lj/Documents/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173\\u110F\\u1169\\u1103\\u1165/nextjs_dog_like/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBRXpCLGlFQUFlLElBQU07SUFDbkIsTUFBTUMsT0FBTyxHQUFHLDBDQUEwQztJQUMxRCxNQUFNLEVBQUVDLElBQUksR0FBRUMsTUFBTSxHQUFFQyxLQUFLLEdBQUUsR0FBR0osK0NBQU0sQ0FBQ0MsT0FBTyxDQUFDO0lBQy9DLE1BQU1JLE9BQU8sR0FBRyxJQUFNO1FBQ3BCRixNQUFNLEVBQUUsQ0FBQztLQUNWO0lBQ0QsTUFBTUcsVUFBVSxHQUFHLElBQU07UUFDdkIsSUFBRyxDQUFDSixJQUFJLEVBQUUsT0FBTztRQUNqQkMsTUFBTSxDQUFDO1lBQUMsR0FBR0QsSUFBSTtZQUFFSyxPQUFPLEVBQUUsQ0FBQ0wsSUFBSSxDQUFDSyxPQUFPO1NBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNsRDtJQUNELHFCQUNFOzswQkFDRSw4REFBQ0MsT0FBSztnQkFBQ0MsS0FBSyxFQUFFLEdBQUc7Z0JBQUVDLE1BQU0sRUFBRSxHQUFHO2dCQUFFQyxHQUFHLEVBQUVULElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFVSxHQUFHO2dCQUFFQyxRQUFRO2dCQUFDQyxRQUFRO2dCQUFDQyxLQUFLOzs7Ozt5QkFBRzswQkFDMUUsOERBQUNDLEtBQUc7Z0JBQUNDLEtBQUssRUFBRTtvQkFBQyxPQUFPLEVBQUUsT0FBTztvQkFBRSxTQUFTLEVBQUUsTUFBTTtvQkFBRSxXQUFXLEVBQUUsTUFBTTtvQkFBRSxnQkFBZ0IsRUFBRSxlQUFlO2lCQUFDOztrQ0FDdkcsOERBQUNDLFFBQU07d0JBQUNiLE9BQU8sRUFBRUEsT0FBTztrQ0FBRSxTQUFPOzs7OztpQ0FBUztrQ0FDMUMsOERBQUNhLFFBQU07d0JBQUNiLE9BQU8sRUFBRUMsVUFBVTtrQ0FBR0osQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQVMsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxJQUFJLENBQUVLLE9BQU8sSUFBRyxNQUFNLEdBQUcsUUFBUTs7Ozs7aUNBQVU7Ozs7Ozt5QkFDckU7O29CQUNMLENBQ0g7Q0FFSCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXN3ci8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IERPR19VUkwgPSAnaHR0cHM6Ly9kb2dzLWFwaS5ub21hZGNvZGVycy53b3JrZXJzLmRldic7XG4gIGNvbnN0IHsgZGF0YSwgbXV0YXRlLCBlcnJvciB9ID0gdXNlU1dSKERPR19VUkwpO1xuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIG11dGF0ZSgpO1xuICB9O1xuICBjb25zdCB0b2dnbGVMaWtlID0gKCkgPT4ge1xuICAgIGlmKCFkYXRhKSByZXR1cm47XG4gICAgbXV0YXRlKHsuLi5kYXRhLCBpc0xpa2VkOiAhZGF0YS5pc0xpa2VkfSwgZmFsc2UpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8dmlkZW8gd2lkdGg9ezUwMH0gaGVpZ2h0PXs1MDB9IHNyYz17ZGF0YT8udXJsfSBhdXRvUGxheSBjb250cm9scyBtdXRlZCAvPlxuICAgICAgPGRpdiBzdHlsZT17eyd3aWR0aCc6ICc1MDBweCcsICdkaXNwbGF5JzogJ2ZsZXgnLCAnbWFyZ2luVG9wJzogJzMwcHgnLCAnanVzdGlmeUNvbnRlbnQnOiAnc3BhY2UtYmV0d2Vlbid9fT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT5OZXcgRG9nPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlTGlrZX0+e2RhdGE/LmlzTGlrZWQgPyAnTGlrZScgOiAnVW5MaWtlJ308L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xuXG59O1xuIl0sIm5hbWVzIjpbInVzZVNXUiIsIkRPR19VUkwiLCJkYXRhIiwibXV0YXRlIiwiZXJyb3IiLCJvbkNsaWNrIiwidG9nZ2xlTGlrZSIsImlzTGlrZWQiLCJ2aWRlbyIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwidXJsIiwiYXV0b1BsYXkiLCJjb250cm9scyIsIm11dGVkIiwiZGl2Iiwic3R5bGUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();