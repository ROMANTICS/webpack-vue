/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgetting_started_using_a_configuration"] = self["webpackChunkgetting_started_using_a_configuration"] || []).push([["indexb"],{

/***/ "./src/component/b.js":
/*!****************************!*\
  !*** ./src/component/b.js ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = { b: 'b' };\r\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/component/b.js?");

/***/ }),

/***/ "./src/component/component.js":
/*!************************************!*\
  !*** ./src/component/component.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ component)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\r\nfunction component(arr) {\r\n  const element = document.createElement('div');\r\n\r\n  // Lodash, now imported by this script\r\n  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(arr, '</br>');\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/component/component.js?");

/***/ }),

/***/ "./src/pages/indexb/indexb.js":
/*!************************************!*\
  !*** ./src/pages/indexb/indexb.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/component */ \"./src/component/component.js\");\nconst b = __webpack_require__(/*! ../../component/b */ \"./src/component/b.js\");\r\n\r\n\r\ndocument.body.appendChild((0,_component_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['Hello', 'webpack', b.b]));\r\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/pages/indexb/indexb.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./src/pages/indexb/indexb.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);