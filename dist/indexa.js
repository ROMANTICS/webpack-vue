"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgetting_started_using_a_configuration"] = self["webpackChunkgetting_started_using_a_configuration"] || []).push([["indexa"],{

/***/ "./src/ts/a.ts":
/*!*********************!*\
  !*** ./src/ts/a.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b */ \"./src/ts/b.ts\");\n\nconst justine = {\n    name: 'Justine',\n    age: 18,\n};\nconst isJustineAnAdult = (0,_b__WEBPACK_IMPORTED_MODULE_0__.isAdult)(justine);\nconsole.log(isJustineAnAdult);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isJustineAnAdult);\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/ts/a.ts?");

/***/ }),

/***/ "./src/ts/b.ts":
/*!*********************!*\
  !*** ./src/ts/b.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isAdult: () => (/* binding */ isAdult)\n/* harmony export */ });\nfunction isAdult(user) {\n    return user.age >= 18;\n}\n\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/ts/b.ts?");

/***/ }),

/***/ "./src/component/a.js":
/*!****************************!*\
  !*** ./src/component/a.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ a: 'a' });\r\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/component/a.js?");

/***/ }),

/***/ "./src/component/component.js":
/*!************************************!*\
  !*** ./src/component/component.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ component)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\r\nfunction component(arr) {\r\n  const element = document.createElement('div');\r\n\r\n  // Lodash, now imported by this script\r\n  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(arr, '</br>');\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/component/component.js?");

/***/ }),

/***/ "./src/pages/indexa/indexa.js":
/*!************************************!*\
  !*** ./src/pages/indexa/indexa.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/a */ \"./src/component/a.js\");\n/* harmony import */ var _component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/component */ \"./src/component/component.js\");\n/* harmony import */ var _ts_a__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ts/a */ \"./src/ts/a.ts\");\n\r\n\r\n\r\n\r\ndocument.body.appendChild(\r\n  (0,_component_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(['Hello', 'webpack', _component_a__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a, _ts_a__WEBPACK_IMPORTED_MODULE_2__[\"default\"]])\r\n);\r\n\n\n//# sourceURL=webpack://getting-started-using-a-configuration/./src/pages/indexa/indexa.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_exec__("./src/pages/indexa/indexa.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);