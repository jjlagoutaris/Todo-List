/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\n  position: absolute;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  min-width: 25rem;\\n  background-color: white;\\n  border: 1px solid black;\\n  padding: 10px;\\n}\\n.container label,\\n.container textarea {\\n  font-size: 0.8rem;\\n  letter-spacing: 1px;\\n}\\n.container textarea {\\n  padding: 10px;\\n  max-width: 100%;\\n  line-height: 1.5;\\n  border-radius: 5px;\\n  border: 1px solid #ccc;\\n  box-shadow: 1px 1px 1px #999;\\n}\\n.container label {\\n  display: block;\\n  margin-bottom: 10px;\\n}\\n.container input[type=text] {\\n  padding: 2px;\\n}\\n.container .btns {\\n  display: flex;\\n  gap: 5px;\\n}\\n.container .btns .submitBtn, .container .btns .cancelBtn {\\n  background-color: #a3c9bc;\\n  max-width: 50px;\\n  padding: 10px;\\n}\\n.container .btns .submitBtn:hover, .container .btns .cancelBtn:hover {\\n  cursor: pointer;\\n  background-color: white;\\n}\\n.container .btns .cancelBtn {\\n  background-color: red;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Coming Soon\\\", cursive;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  justify-content: flex-start;\\n  background-color: rgba(255, 72, 0, 0.8);\\n  color: white;\\n  font-size: 2.5rem;\\n  font-weight: 900;\\n  gap: 1rem;\\n  width: 100%;\\n}\\n#header .logo {\\n  max-height: 5rem;\\n  padding: 5px;\\n}\\n\\n#content {\\n  display: grid;\\n  grid-template-columns: 1fr 6fr;\\n  height: 100vh;\\n}\\n#content .sidebar {\\n  font-size: 1.5rem;\\n  padding: 10px;\\n  background-color: rgba(255, 72, 0, 0.5);\\n}\\n#content .sidebar ul {\\n  text-align: center;\\n  list-style-type: none;\\n}\\n#content .sidebar ul .link {\\n  padding: 10px;\\n}\\n#content .sidebar ul .link a {\\n  text-decoration: none;\\n  color: black;\\n  text-shadow: 1px 1px white;\\n}\\n#content .todoList {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: center;\\n  gap: 10px;\\n  background-color: rgba(255, 72, 0, 0.1);\\n}\\n#content .todoList table {\\n  min-width: 800px;\\n  max-width: 1200px;\\n}\\n#content .todoList table .titles {\\n  font-size: 1.5rem;\\n  font-family: \\\"Times New Roman\\\", Times, serif;\\n}\\n#content .todoList table .titles:hover {\\n  box-shadow: none;\\n}\\n#content .todoList table .titles .dueDate {\\n  text-align: right;\\n}\\n#content .todoList table .titles .projName {\\n  text-align: left;\\n}\\n#content .todoList table .titles th {\\n  padding: 10px 0;\\n}\\n#content .todoList table tr:hover, #content .todoList table tr.createdRow:hover {\\n  box-shadow: 0 0 5px 5px;\\n}\\n#content .todoList table tr td, #content .todoList table tr.createdRow td {\\n  vertical-align: middle;\\n  max-width: 600px;\\n  padding: 10px;\\n}\\n#content .todoList table tr .column1, #content .todoList table tr.createdRow .column1 {\\n  font-size: 1.5rem;\\n}\\n#content .todoList table tr .column2, #content .todoList table tr.createdRow .column2 {\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: center;\\n  gap: 10px;\\n  font-size: 1.3rem;\\n}\\n#content .todoList .addToDoBtn {\\n  cursor: pointer;\\n}\\n\\ni {\\n  cursor: pointer;\\n}\\n\\n.fa-arrow-down, .fa-calendar, .fa-exclamation {\\n  margin-left: 10px;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n#modal, #editModal {\\n  top: 35%;\\n  left: 40%;\\n  max-width: 50ch;\\n  padding: 10px;\\n}\\n#modal > *, #editModal > * {\\n  margin: 0 0 0.5rem 0;\\n}\\n#modal::backdrop, #editModal::backdrop {\\n  background: rgba(0, 0, 0, 0.4);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _js_addToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/addToDo */ \"./src/js/addToDo.js\");\n/* harmony import */ var _js_documentParts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/documentParts */ \"./src/js/documentParts.js\");\n/* harmony import */ var _js_addListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/addListeners */ \"./src/js/addListeners.js\");\n\n\n\n\n\n(0,_js_addListeners__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/js/addListeners.js":
/*!********************************!*\
  !*** ./src/js/addListeners.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _documentParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentParts */ \"./src/js/documentParts.js\");\n/* harmony import */ var _defaultProj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultProj */ \"./src/js/defaultProj.js\");\n/* harmony import */ var _addToDo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addToDo */ \"./src/js/addToDo.js\");\n/* harmony import */ var _createEditModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createEditModal */ \"./src/js/createEditModal.js\");\n/* harmony import */ var _dateFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dateFilter */ \"./src/js/dateFilter.js\");\n\n\n\n\n\n\nconst addEventListeners = () => {\n    // remove toDo\n    const trashBtns = document.querySelectorAll('.fa-trash-can');\n    for (let i = 0; i < trashBtns.length; i++) {\n        trashBtns[i].addEventListener('click', deleteToDo);\n    }\n    // mark complete\n    const uncheckedBoxes = document.querySelectorAll('.fa-square');\n    for (let i = 0; i < uncheckedBoxes.length; i++) {\n        uncheckedBoxes[i].addEventListener('click', completeToDo);\n    }\n    // mark incomplete\n    const checkedBoxes = document.querySelectorAll('.fa-square-check');\n    for (let i = 0; i < checkedBoxes.length; i++) {\n        checkedBoxes[i].addEventListener('click', undoToDoCompletion);\n    }\n    // edit toDo modal\n    const editModalBtns = document.querySelectorAll('.fa-pen-to-square');\n    for (let i = 0; i < editModalBtns.length; i++) {\n        editModalBtns[i].addEventListener('click', instantiateEditModal);\n    }\n    // const editModalSubmitBtns = document.querySelectorAll('.fa-check');\n    // if(editModalSubmitBtns.length > 0){\n    //     for(let i = 0; i < editModalSubmitBtns.length; i++){\n    //         editModalSubmitBtns[i].addEventListener('click', instantiateEditModal.submitEditModal);\n    //     }\n    // }\n    // create toDo modal\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToDoBtn.addEventListener('click', instantiateCreationModal);\n}\n\nconst deleteToDo = (e) => {\n    const item = e.target;\n    const todo = item.parentElement.parentElement;\n    todo.remove();\n\n    const removeFromArray = () => {\n        let targetIndex = todo.getAttribute('data-index');\n        for (let i = 0; i < _defaultProj__WEBPACK_IMPORTED_MODULE_1__.listOfProjects[_defaultProj__WEBPACK_IMPORTED_MODULE_1__.currentProjectIndex].arr.length; i++) {\n            if (_defaultProj__WEBPACK_IMPORTED_MODULE_1__.listOfProjects[_defaultProj__WEBPACK_IMPORTED_MODULE_1__.currentProjectIndex].arr[i].getID() == targetIndex) {\n                _defaultProj__WEBPACK_IMPORTED_MODULE_1__.listOfProjects[_defaultProj__WEBPACK_IMPORTED_MODULE_1__.currentProjectIndex].removeFromList(i);\n            }\n        }\n    };\n\n    removeFromArray();\n}\n\nconst completeToDo = (e) => {\n    const item = e.target;\n    const todo = item.parentElement.parentElement;\n    todo.classList.add('completed');\n    const innerHTML = todo.innerHTML;\n    todo.innerHTML = innerHTML.replace('<i class=\"fa-regular fa-square\"></i>', '<i class=\"fa-regular fa-square-check\"></i>');\n    addEventListeners();\n};\n\nconst undoToDoCompletion = (e) => {\n    const item = e.target;\n    const todo = item.parentElement.parentElement;\n    todo.classList.remove('completed');\n    const innerHTML = todo.innerHTML;\n    todo.innerHTML = innerHTML.replace('<i class=\"fa-regular fa-square-check\"></i>', '<i class=\"fa-regular fa-square\"></i>');\n    addEventListeners();\n}\n\nconst instantiateEditModal = (e) => {\n\n    const item = e.target;\n    const todo = item.parentElement.parentElement;\n    const targetIndex = todo.getAttribute('data-index');\n    const shortHand = _defaultProj__WEBPACK_IMPORTED_MODULE_1__.listOfProjects[_defaultProj__WEBPACK_IMPORTED_MODULE_1__.currentProjectIndex];\n\n    const getToDoInfo = () => {\n        for (let i = 0; i < shortHand.arr.length; i++) {\n            if (shortHand.arr[i].getID() == targetIndex) {\n                let name = shortHand.arr[i].getTitle();  \n                let description = shortHand.arr[i].getDescription();\n                let dueDate = shortHand.arr[i].getDueDate();\n                let priority = shortHand.arr[i].getPriority();\n                return {name, description, dueDate, priority};\n            }\n        }\n    };\n\n    const toDoInfo = getToDoInfo();\n    const form = (0,_createEditModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(toDoInfo.name, toDoInfo.description,\n        toDoInfo.dueDate, toDoInfo.priority);\n\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].body.appendChild(form.newModal);\n    form.newModal.showModal();\n\n    const submitEditBtn = document.querySelector('.submitEditBtn');\n    const cancelEditBtn = document.querySelector('.cancelEditBtn');\n\n    cancelEditBtn.addEventListener('click', function cancelEditModal(e) {\n        e.preventDefault();\n        form.newModal.close();\n        _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].body.removeChild(form.newModal);\n        addEventListeners(); \n    });\n\n    submitEditBtn.addEventListener('click', function submitEditModal(e){\n        e.preventDefault();\n        for (let i = 0; i < shortHand.arr.length; i++) {\n            if (shortHand.arr[i].getID() == targetIndex) {\n                // update arr\n                shortHand.arr[i].setTitle(form.taskName.value);\n                shortHand.arr[i].setDescription(form.taskDescription.value);\n                shortHand.arr[i].setDueDate(form.taskDueDate.value);\n                shortHand.arr[i].setPriority(form.taskPriority.value);\n                // update table\n                todo.children[0].innerHTML = `<i class=\"fa-regular fa-square\"></i> ${form.taskName.value}`;\n                if (form.taskDueDate.value !== '') {\n                    let filteredDueDate = (0,_dateFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(form.taskDueDate.value.replace('T', ' '.replace(/-/g, '/')));\n                    todo.children[1].innerHTML = `${filteredDueDate} <i class=\"fa-regular fa-pen-to-square\"></i><i class=\"fa-regular fa-trash-can\"></i>`;\n                }\n                else {\n                    todo.children[1].innerHTML = `<i class=\"fa-regular fa-pen-to-square\"></i><i class=\"fa-regular fa-trash-can\"></i>`;\n                }\n            }\n        }\n        _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].body.removeChild(form.newModal);\n        addEventListeners();   \n    });\n};\n\nconst instantiateCreationModal = () => {\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal.showModal();\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modalCancelBtn.addEventListener('click', function cancelCreationModal () {\n        _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modal.close();\n    });\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].modalSubmitBtn.addEventListener('click', _addToDo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    addEventListeners();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEventListeners); \n\n//# sourceURL=webpack://todo-list/./src/js/addListeners.js?");

/***/ }),

/***/ "./src/js/addToDo.js":
/*!***************************!*\
  !*** ./src/js/addToDo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _documentParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentParts */ \"./src/js/documentParts.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n/* harmony import */ var _defaultProj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultProj */ \"./src/js/defaultProj.js\");\n/* harmony import */ var _dateFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dateFilter */ \"./src/js/dateFilter.js\");\n/* harmony import */ var _addListeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addListeners */ \"./src/js/addListeners.js\");\n\n\n\n\n\n\nconst addToDoToTable = () => {\n\n    const makeRow = () => {\n        const tr = document.createElement('tr');\n        tr.classList.add('createdRow');\n        tr.setAttribute('data-index', `${_documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toDoCounter}`);\n        const td1 = document.createElement('td');\n        const td2 = document.createElement('td');\n        td1.classList.add('column1');\n        td2.classList.add('column2');\n\n        td1.innerHTML += `<i class=\"fa-regular fa-square\"></i> ${createTaskName.value}`;\n        if (createTaskDueDate.value !== '') {\n            let filteredDueDate = (0,_dateFilter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(createTaskDueDate.value.replace('T', ' '.replace(/-/g, '/')));\n            td2.innerHTML = `${filteredDueDate} <i class=\"fa-regular fa-pen-to-square\"></i><i class=\"fa-regular fa-trash-can\"></i>`;\n        }\n        else {\n            td2.innerHTML = `<i class=\"fa-regular fa-pen-to-square\"></i><i class=\"fa-regular fa-trash-can\"></i>`;\n        }\n\n        tr.appendChild(td1);\n        tr.appendChild(td2);\n\n        return tr;\n    };\n\n    const row = makeRow();\n\n    // create an object to store the values and push into defaultProj later\n    let toDoObj = (0,_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(createTaskName.value, createTaskDescription.value, createTaskDueDate.value,\n        createTaskPriority.value, _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toDoCounter);\n    \n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toDoCounter++;\n\n    _defaultProj__WEBPACK_IMPORTED_MODULE_2__.listOfProjects[_defaultProj__WEBPACK_IMPORTED_MODULE_2__.currentProjectIndex].addToList(toDoObj);\n\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.appendChild(row);\n    (0,_addListeners__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addToDoToTable);\n\n\n//# sourceURL=webpack://todo-list/./src/js/addToDo.js?");

/***/ }),

/***/ "./src/js/createEditModal.js":
/*!***********************************!*\
  !*** ./src/js/createEditModal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createEditModal = (name, description, dueDate, priority) => {\n    \n    const newModal = document.createElement('dialog');\n    newModal.classList.add('editModal');\n    newModal.setAttribute('id', 'editModal');\n\n    const editModalHeader = document.createElement('h2');\n    editModalHeader.textContent = 'Edit Task';\n\n    const editModalForm = document.createElement('form');\n    editModalForm.classList.add('editForm');\n    editModalForm.setAttribute('method', 'dialog');\n\n    const taskNameDiv = document.createElement('div');\n    const taskName = document.createElement('input');\n    const taskNameLabel = document.createElement('label');\n    taskName.setAttribute('type', 'text');\n    taskName.setAttribute('name', 'taskName');\n    taskName.setAttribute('id', 'taskName');\n    taskName.setAttribute('placeholder', 'Take out the trash');\n    taskName.setAttribute('value', name);\n    taskNameLabel.setAttribute('for', 'taskName');\n    taskNameLabel.textContent = 'Title';\n    taskNameDiv.appendChild(taskNameLabel);\n    taskNameDiv.appendChild(taskName);\n\n    const taskDescriptionDiv = document.createElement('div');\n    const taskDescription = document.createElement('textarea');\n    const taskDescriptionLabel = document.createElement('label');\n    taskDescription.setAttribute('name', 'taskDescription');\n    taskDescription.setAttribute('id', 'taskDescription');\n    taskDescription.setAttribute('placeholder', 'I avoid the acumulation of trash by performing the sacred art of removing said trash...');\n    taskDescription.setAttribute('value', description);\n    taskDescriptionLabel.setAttribute('for', 'taskDescription');\n    taskDescriptionLabel.textContent = 'Description';\n    taskDescriptionDiv.appendChild(taskDescriptionLabel);\n    taskDescriptionDiv.appendChild(taskDescription);\n\n    const taskDueDateDiv = document.createElement('div');\n    const taskDueDate = document.createElement('input');\n    const taskDueDateLabel = document.createElement('label');\n    taskDueDate.setAttribute('type', 'datetime-local');\n    taskDueDate.setAttribute('name', 'taskDueDate');\n    taskDueDate.setAttribute('id', 'taskDueDate');\n    taskDueDate.setAttribute('value', dueDate);\n    taskDueDateLabel.setAttribute('for', 'taskDueDate');\n    taskDueDateLabel.textContent = 'Due Date';\n    taskDueDateDiv.appendChild(taskDueDateLabel);\n    taskDueDateDiv.appendChild(taskDueDate);\n\n    const taskPriorityDiv = document.createElement('div');\n    const taskPriority = document.createElement('select');\n    const taskPriorityLabel = document.createElement('label');\n    taskPriority.setAttribute('name', 'taskPriority');\n    taskPriority.setAttribute('id', 'taskPriority');\n    taskPriorityLabel.setAttribute('for', 'taskPriority');\n    taskPriorityLabel.textContent = 'Priority';\n    const highPriority = document.createElement('option');\n    highPriority.textContent = 'High';\n    const normalPriority = document.createElement('option');\n    normalPriority.textContent = 'Normal';\n    const lowPriority = document.createElement('option');\n    lowPriority.textContent = 'Low';\n    taskPriority.setAttribute('value', priority);\n    taskPriority.appendChild(highPriority);\n    taskPriority.appendChild(normalPriority);\n    taskPriority.appendChild(lowPriority);\n    taskPriorityDiv.appendChild(taskPriorityLabel);\n    taskPriorityDiv.appendChild(taskPriority);\n\n    const btns = document.createElement('div');\n    btns.classList.add('btns');\n    const submitBtn = document.createElement('button');\n    submitBtn.innerHTML = `<i class=\"fa-solid fa-check\"></i>`;\n    submitBtn.classList.add('submitEditBtn');\n    const cancelBtn = document.createElement('button');\n    cancelBtn.innerHTML = `<i class=\"fa-solid fa-ban\"></i>`;\n    cancelBtn.classList.add('cancelEditBtn');\n    btns.appendChild(submitBtn);\n    btns.appendChild(cancelBtn);\n\n    newModal.appendChild(editModalHeader);\n    editModalForm.appendChild(taskNameDiv);\n    editModalForm.appendChild(taskDescriptionDiv);\n    editModalForm.appendChild(taskDueDateDiv);\n    editModalForm.appendChild(taskPriorityDiv);\n    editModalForm.appendChild(btns);\n    newModal.appendChild(editModalForm);\n\n    return {newModal, editModalForm, taskName, taskDueDate, taskPriority, \n        taskDescription, submitBtn, cancelBtn};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEditModal);\n\n//# sourceURL=webpack://todo-list/./src/js/createEditModal.js?");

/***/ }),

/***/ "./src/js/dateFilter.js":
/*!******************************!*\
  !*** ./src/js/dateFilter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 2022-03-16 03:52 => 03/16/2022 @ 03:52 AM\nconst dateFilter = (date) => {\n    let splitTimeAndDate = date.split(' ');\n    let splitDate = splitTimeAndDate[0].split('-');\n    let splitTime = splitTimeAndDate[1].split(':');\n    let fixedHour = 0;\n    if(splitTime[0] >= 0 && splitTime[0] < 12){\n        fixedHour = splitTime[0]+ ':' + splitTime[1]+'AM';\n    }\n    else{\n        fixedHour = splitTime[0]+ ':' + splitTime[1]+'PM';  \n    }\n    let fixedDate = splitDate[1] + '/' + splitDate[2] + '/' + splitDate[0];\n    let fixedTimeAndDate =  fixedDate + ' @ ' + fixedHour;\n    return fixedTimeAndDate;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dateFilter);\n\n//# sourceURL=webpack://todo-list/./src/js/dateFilter.js?");

/***/ }),

/***/ "./src/js/defaultProj.js":
/*!*******************************!*\
  !*** ./src/js/defaultProj.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"currentProjectIndex\": () => (/* binding */ currentProjectIndex),\n/* harmony export */   \"defaultProj\": () => (/* binding */ defaultProj),\n/* harmony export */   \"listOfProjects\": () => (/* binding */ listOfProjects)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n\n\nconst listOfProjects = [];\nlet currentProjectIndex = 0;\nconst defaultProj = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Default\", \"The default grouping for To Dos\", 0);\nlistOfProjects.push(defaultProj);\n\n\n\n//# sourceURL=webpack://todo-list/./src/js/defaultProj.js?");

/***/ }),

/***/ "./src/js/documentParts.js":
/*!*********************************!*\
  !*** ./src/js/documentParts.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst body = document.querySelector('body');\nconst todaysProjects = document.querySelector('.today');\nconst thisWeeksProjects = document.querySelector('.week');\nconst categories = document.querySelector('.categories');\nconst toDoList = document.querySelector('.todoList');\nconst table = document.querySelector('table');\nconst tableTitle = document.querySelector('.titles.projName');\nconst tableDueDate = document.querySelector('.titles.dueDate');\nconst addToDoBtn = document.querySelector('.addToDoBtn');\nconst modal = document.querySelector('#modal');\nconst editModal = document.querySelector('#editModal');\nconst creationModalTaskName = document.querySelector('.taskName');\nconst creationModalTaskDescription = document.querySelector('.taskDescription');\nconst creationModalTaskDueDate = document.querySelector('.taskDueDate');\nconst creationModalTaskPriority = document.querySelector('.taskPriority');\nconst modalCancelBtn = document.querySelector('.createModalCancelBtn');\nconst modalSubmitBtn = document.querySelector('.createModalSubmitBtn');\nconst toDoCounter = 0;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ body, todaysProjects, thisWeeksProjects, categories, \ntoDoList, table, tableTitle, tableDueDate, addToDoBtn, toDoCounter, modal, \ncreationModalTaskName, creationModalTaskDescription, creationModalTaskDueDate,\ncreationModalTaskPriority, editModal, modalCancelBtn, modalSubmitBtn });\n\n//# sourceURL=webpack://todo-list/./src/js/documentParts.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Project = (title, description, index) => {\n\n    let arr = [];\n\n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getIndex = () => index;\n    \n    const setTitle = (newTitle) => title = newTitle; \n    const setDescription = (newDescription) => description = newDescription;\n    const setIndex = (newIndex) => index = newIndex;\n\n    const addToList = (obj) => arr.push(obj);\n    const removeFromList = (index) => {\n        if(index > -1){\n            arr.splice(index, 1);\n        }\n    }\n\n    return {getTitle, getDescription, getIndex, setTitle, \n        setDescription, setIndex, arr, addToList, removeFromList};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/js/project.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Todo = (title, description, dueDate, priority, id) => {\n    \n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getPriority = () => priority;\n    const getID = () => id;\n\n    const setTitle = (newTitle) => title = newTitle; \n    const setDescription = (newDescription) => description = newDescription;\n    const setDueDate = (newDueDate) => dueDate = newDueDate;\n    const setPriority = (newPriority) => priority = newPriority;\n    const setID = (newID) => id = newID;\n\n    return {getTitle, getDescription, getDueDate, getPriority, getID, setTitle, setDescription, setDueDate, setPriority, setID};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/js/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;