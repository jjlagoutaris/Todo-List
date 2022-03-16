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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/checkbox-blank-outline.png */ \"./src/img/checkbox-blank-outline.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/checkbox-marked-outline.png */ \"./src/img/checkbox-marked-outline.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/notebook-edit.png */ \"./src/img/notebook-edit.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/trash-can-outline.png */ \"./src/img/trash-can-outline.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Coming Soon\\\", cursive;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  justify-content: flex-start;\\n  background-color: rgba(255, 72, 0, 0.8);\\n  color: white;\\n  font-size: 1.2rem;\\n  font-weight: 900;\\n  gap: 1rem;\\n  width: 100%;\\n}\\n#header .logo {\\n  max-height: 3rem;\\n  padding: 10px;\\n}\\n\\n#content {\\n  display: grid;\\n  grid-template-columns: 1fr 6fr;\\n  height: 100vh;\\n}\\n#content .sidebar {\\n  padding: 10px;\\n  background-color: rgba(255, 72, 0, 0.5);\\n}\\n#content .sidebar ul {\\n  text-align: center;\\n  list-style-type: none;\\n}\\n#content .sidebar ul .link {\\n  padding: 10px;\\n}\\n#content .sidebar ul .link a {\\n  text-decoration: none;\\n  color: black;\\n  text-shadow: 1px 1px white;\\n}\\n#content .todoList {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  gap: 20px;\\n  padding: 10px;\\n  background-color: rgba(255, 72, 0, 0.2);\\n}\\n#content .todoList table {\\n  width: 800px;\\n}\\n#content .todoList table .titles {\\n  font-size: 1.6rem;\\n  text-align: left;\\n  font-family: \\\"Times New Roman\\\", Times, serif;\\n}\\n#content .todoList table .dueDate {\\n  text-align: right;\\n}\\n#content .todoList table th {\\n  padding: 10px;\\n}\\n#content .todoList table td {\\n  font-size: 1.4rem;\\n  padding: 10px;\\n  border-bottom: 0.1px dashed black;\\n}\\n#content .todoList .addToDoBtn {\\n  cursor: pointer;\\n}\\n\\n.column1::before {\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  cursor: pointer;\\n  vertical-align: middle;\\n  margin-right: 10px;\\n}\\n\\n.column1Checked::before {\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  cursor: pointer;\\n  vertical-align: middle;\\n  margin-right: 10px;\\n}\\n\\n.column2 {\\n  text-align: right;\\n}\\n.column2::after {\\n  margin-left: 10px;\\n  content: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \")url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  cursor: pointer;\\n  vertical-align: middle;\\n}\\n\\n.container {\\n  position: absolute;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  min-width: 25rem;\\n  background-color: white;\\n  border: 1px solid black;\\n  padding: 10px;\\n}\\n.container label,\\n.container textarea {\\n  font-size: 0.8rem;\\n  letter-spacing: 1px;\\n}\\n.container textarea {\\n  padding: 10px;\\n  max-width: 100%;\\n  line-height: 1.5;\\n  border-radius: 5px;\\n  border: 1px solid #ccc;\\n  box-shadow: 1px 1px 1px #999;\\n}\\n.container label {\\n  display: block;\\n  margin-bottom: 10px;\\n}\\n.container input[type=text] {\\n  padding: 2px;\\n}\\n.container .btns {\\n  display: flex;\\n  gap: 5px;\\n}\\n.container .btns .submitBtn, .container .btns .cancelBtn {\\n  background-color: #a3c9bc;\\n  max-width: 50px;\\n  padding: 10px;\\n}\\n.container .btns .submitBtn:hover, .container .btns .cancelBtn:hover {\\n  cursor: pointer;\\n  background-color: white;\\n}\\n.container .btns .cancelBtn {\\n  background-color: red;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

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

/***/ "./src/addToDo.js":
/*!************************!*\
  !*** ./src/addToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _documentParts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentParts */ \"./src/documentParts.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _defaultProj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultProj */ \"./src/defaultProj.js\");\n\n\n// import Project from './project';\n\n\n\nconst getToDoInfo = _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToDoBtn.addEventListener('click', () => {\n\n    let container = document.createElement('div');\n    container.classList.add('container');\n\n    let taskNameDiv = document.createElement('div');\n    let taskName = document.createElement('input');\n    let taskNameLabel = document.createElement('label');\n    taskName.setAttribute('type', 'text');\n    taskName.setAttribute('name', 'taskName');\n    taskName.setAttribute('id', 'taskName');\n    taskName.setAttribute('placeholder', 'Take out the trash');\n    taskNameLabel.setAttribute('for', 'taskName');\n    taskNameLabel.textContent = 'Title';\n    taskNameDiv.appendChild(taskNameLabel);\n    taskNameDiv.appendChild(taskName);\n\n    let taskDescriptionDiv = document.createElement('div');\n    let taskDescription = document.createElement('textarea');\n    let taskDescriptionLabel = document.createElement('label');\n    taskDescription.setAttribute('type', 'text');\n    taskDescription.setAttribute('name', 'taskDescription');\n    taskDescription.setAttribute('id', 'taskDescription');\n    taskDescription.setAttribute('placeholder', 'I avoid the acumulation of trash by performing the sacred art of removing said trash...');\n    taskDescriptionLabel.setAttribute('for', 'taskDescription');\n    taskDescriptionLabel.textContent = 'Description';\n    taskDescriptionDiv.appendChild(taskDescriptionLabel);\n    taskDescriptionDiv.appendChild(taskDescription);\n\n    let taskDueDateDiv = document.createElement('div');\n    let taskDueDate = document.createElement('input');\n    let taskDueDateLabel = document.createElement('label');\n    taskDueDate.setAttribute('type', 'datetime-local');\n    taskDueDate.setAttribute('name', 'taskDueDate');\n    taskDueDate.setAttribute('id', 'taskDueDate');\n    taskDueDateLabel.setAttribute('for', 'taskDueDate');\n    taskDueDateLabel.textContent = 'Due Date';\n    taskDueDateDiv.appendChild(taskDueDateLabel);\n    taskDueDateDiv.appendChild(taskDueDate);\n\n    let taskPriorityDiv = document.createElement('div');\n    let taskPriority = document.createElement('select');\n    let taskPriorityLabel = document.createElement('label');\n    taskPriority.setAttribute('name', 'taskPriority');\n    taskPriority.setAttribute('id', 'taskPriority');\n    taskPriorityLabel.setAttribute('for', 'taskPriority');\n    taskPriorityLabel.textContent = 'Priority';\n    let highPriority = document.createElement('option');\n    highPriority.textContent = 'High';\n    let normalPriority = document.createElement('option');\n    normalPriority.textContent = 'Normal';\n    let lowPriority = document.createElement('option');\n    lowPriority.textContent = 'Low';\n    taskPriority.appendChild(highPriority);\n    taskPriority.appendChild(normalPriority);\n    taskPriority.appendChild(lowPriority);\n    taskPriorityDiv.appendChild(taskPriorityLabel);\n    taskPriorityDiv.appendChild(taskPriority);\n\n    let btns = document.createElement('div');\n    btns.classList.add('btns');\n    let submitBtn = document.createElement('button');\n    submitBtn.innerHTML = `<i class=\"fa-solid fa-check\"></i>`;\n    submitBtn.classList.add('submitBtn');\n    let cancelBtn = document.createElement('button');\n    cancelBtn.innerHTML = `<i class=\"fa-solid fa-ban\"></i>`;\n    cancelBtn.classList.add('cancelBtn');\n    btns.appendChild(submitBtn);\n    btns.appendChild(cancelBtn);\n\n    let taskID = _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toDoCounter;\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toDoCounter++; // if submitted ++\n\n    container.appendChild(taskNameDiv);\n    container.appendChild(taskDueDateDiv);\n    container.appendChild(taskPriorityDiv);\n    container.appendChild(taskDescriptionDiv);\n    container.appendChild(btns);\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.appendChild(container);\n\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toDoList.removeChild(_documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToDoBtn);\n\n    submitBtn.addEventListener('click', addToDoToTable);\n    cancelBtn.addEventListener('click', cancelNewToDo);\n\n    return {taskName, taskDescription, taskPriority, taskDueDate, taskID};\n});\n\n    // let dtl = document.querySelector('#dtl');\n    // let filter_dtl = dtl.value.replace('T', '  ').replace(/-/g, '/');\n\nconst addToDoToTable = () => {\n    let tr = document.createElement('tr');\n    let td1 = document.createElement('td');\n    let td2 = document.createElement('td');\n    td1.classList.add('column1');\n    td2.classList.add('column2');\n\n    let toDoObj = (0,_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskName.value, taskDescription.value, taskDueDate.value, \n        taskPriority.value, _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toDoCounter);\n\n    td1.textContent = taskName.value;\n    let filteredDueDate = taskDueDate.value.replace('T', ' '.replace(/-/g, '/'));\n    filteredDueDate = dateFilter(filteredDueDate);\n    td2.textContent = filteredDueDate;\n\n    tr.appendChild(td1);\n    tr.appendChild(td2);\n\n    _defaultProj__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addToList(toDoObj);\n\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.removeChild(_documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.lastChild);\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.appendChild(tr);\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toDoList.appendChild(_documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToDoBtn);\n};\n\nconst cancelNewToDo = () => {\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.removeChild(_documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].table.lastChild);\n    _documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toDoList.appendChild(_documentParts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToDoBtn);\n};\n// 2022-03-16 03:52\nconst dateFilter = (date) => {\n    let splitTimeAndDate = date.split(' ');\n    let splitDate = splitTimeAndDate[0].split('-');\n    let splitTime = splitTimeAndDate[1].split(':');\n    let fixedHour = 0;\n    if(splitTime[0] >= 0 && splitTime[0] < 12){\n        fixedHour = splitTime[0]+ ':' + splitTime[1]+'AM';\n    }\n    else{\n        fixedHour = splitTime[0]+ ':' + splitTime[1]+'PM';  \n    }\n    let fixedDate = splitDate[1] + '/' + splitDate[2] + '/' + splitDate[0];\n    let fixedTimeAndDate =  fixedDate + ' @ ' + fixedHour;\n    return fixedTimeAndDate;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getToDoInfo });\n\n//# sourceURL=webpack://todo-list/./src/addToDo.js?");

/***/ }),

/***/ "./src/defaultProj.js":
/*!****************************!*\
  !*** ./src/defaultProj.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nlet defaultProj = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Default\", \"The default grouping for To Dos\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultProj);\n\n//# sourceURL=webpack://todo-list/./src/defaultProj.js?");

/***/ }),

/***/ "./src/documentParts.js":
/*!******************************!*\
  !*** ./src/documentParts.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst body = document.querySelector('body');\nconst todaysProjects = document.querySelector('.today');\nconst thisWeeksProjects = document.querySelector('.week');\nconst categories = document.querySelector('.categories');\nconst toDoList = document.querySelector('.todoList');\nconst table = document.querySelector('table');\nconst tableTitle = document.querySelector('.titles.projName');\nconst tableDueDate = document.querySelector('.titles.dueDate');\nconst addToDoBtn = document.querySelector('.addToDoBtn');\nconst toDoCounter = 0;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({body, todaysProjects, thisWeeksProjects, categories, \ntoDoList, table, tableTitle, tableDueDate, addToDoBtn, toDoCounter});\n\n//# sourceURL=webpack://todo-list/./src/documentParts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _addToDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addToDo */ \"./src/addToDo.js\");\n/* harmony import */ var _documentParts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./documentParts */ \"./src/documentParts.js\");\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Project = (title, description) => {\n\n    let arr = [];\n\n    const getTitle = () => title;\n    const getDescription = () => description;\n    \n    const setTitle = (newTitle) => title = newTitle; \n    const setDescription = (newDescription) => description = newDescription;\n\n    const addToList = (list) => arr.push(list);\n\n    return {getTitle, getDescription, setTitle, setDescription, arr, addToList};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Todo = (title, description, dueDate, priority, id) => {\n    \n    const getTitle = () => title;\n    const getDescription = () => description;\n    const getDueDate = () => dueDate;\n    const getPriority = () => priority;\n    const getID = () => id;\n\n    const setTitle = (newTitle) => title = newTitle; \n    const setDescription = (newDescription) => description = newDescription;\n    const setDueDate = (newDueDate) => dueDate = newDueDate;\n    const setPriority = (newPriority) => priority = newPriority;\n    const setID = (newID) => id = newID;\n\n    return {getTitle, getDescription, getDueDate, getPriority, getID, setTitle, setDescription, setDueDate, setPriority, setID};\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/img/checkbox-blank-outline.png":
/*!********************************************!*\
  !*** ./src/img/checkbox-blank-outline.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"82e2b22e4af409bea76a.png\";\n\n//# sourceURL=webpack://todo-list/./src/img/checkbox-blank-outline.png?");

/***/ }),

/***/ "./src/img/checkbox-marked-outline.png":
/*!*********************************************!*\
  !*** ./src/img/checkbox-marked-outline.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4ba35f3d2fe55155785.png\";\n\n//# sourceURL=webpack://todo-list/./src/img/checkbox-marked-outline.png?");

/***/ }),

/***/ "./src/img/notebook-edit.png":
/*!***********************************!*\
  !*** ./src/img/notebook-edit.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ff0380ecece85e44ed81.png\";\n\n//# sourceURL=webpack://todo-list/./src/img/notebook-edit.png?");

/***/ }),

/***/ "./src/img/trash-can-outline.png":
/*!***************************************!*\
  !*** ./src/img/trash-can-outline.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"753eee692765f33cb6f8.png\";\n\n//# sourceURL=webpack://todo-list/./src/img/trash-can-outline.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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