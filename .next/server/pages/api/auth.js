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
exports.id = "pages/api/auth";
exports.ids = ["pages/api/auth"];
exports.modules = {

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "(api)/./lib/client.js":
/*!***********************!*\
  !*** ./lib/client.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabaseClient\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SUPABASE_URL = \"https://obpwaaschwgaquuobtvi.supabase.co\";\nconst SUPBASE_ANON_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9icHdhYXNjaHdnYXF1dW9idHZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU2MDkyMzQsImV4cCI6MjAwMTE4NTIzNH0.CecdhorHW2NTQMSh3FOeKjYcCEXl8k_-G-sDO5V7fgs\";\nconst client = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(SUPABASE_URL, SUPBASE_ANON_KEY);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxRDtBQUVyRCxNQUFNQyxZQUFZLEdBQUdDLDBDQUFvQztBQUN6RCxNQUFNRyxnQkFBZ0IsR0FBR0gsa05BQXlDO0FBRWxFLE1BQU1LLE1BQU0sR0FBR1AsbUVBQVksQ0FBQ0MsWUFBWSxFQUFFSSxnQkFBZ0IsQ0FBQztBQUV2QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fYXBwLy4vbGliL2NsaWVudC5qcz9lNjlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAc3VwYWJhc2Uvc3VwYWJhc2UtanNcIjtcblxuY29uc3QgU1VQQUJBU0VfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMO1xuY29uc3QgU1VQQkFTRV9BTk9OX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZO1xuXG5jb25zdCBjbGllbnQgPSBjcmVhdGVDbGllbnQoU1VQQUJBU0VfVVJMLCBTVVBCQVNFX0FOT05fS0VZKTtcblxuZXhwb3J0IHsgY2xpZW50IGFzIHN1cGFiYXNlQ2xpZW50IH07XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiU1VQQUJBU0VfVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsIlNVUEJBU0VfQU5PTl9LRVkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsImNsaWVudCIsInN1cGFiYXNlQ2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/client.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth.js":
/*!***************************!*\
  !*** ./pages/api/auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/client */ \"(api)/./lib/client.js\");\n\nfunction handler(req, res) {\n    _lib_client__WEBPACK_IMPORTED_MODULE_0__.supabaseClient.auth.api.setAuthCookie(req, res);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRDtBQUVuQyxTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDSCw4RUFBcUMsQ0FBQ0UsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztBQUNsRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19hcHAvLi9wYWdlcy9hcGkvYXV0aC5qcz81YWRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN1cGFiYXNlQ2xpZW50IH0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBzdXBhYmFzZUNsaWVudC5hdXRoLmFwaS5zZXRBdXRoQ29va2llKHJlcSwgcmVzKTtcbn1cbiJdLCJuYW1lcyI6WyJzdXBhYmFzZUNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJhdXRoIiwiYXBpIiwic2V0QXV0aENvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth.js"));
module.exports = __webpack_exports__;

})();