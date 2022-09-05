/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    background-color: lightskyblue;\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\n::placeholder {\n    color: black;\n  }\n\np{\n    margin: 0;\n}\n\nheader{\n    color: black;\n    text-align: center;\n}\n\n.title{ \n    margin-bottom: 0px;\n}\n\n.createbtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    font-size: 15px;\n    padding: 10px;\n    margin: 15px;\n}\n\n#main {\n    min-height: 100vh;\n    width: 100%;\n    background-color: #ffffff;\n    border-radius: 8% 0 0 0;\n    margin: 0;\n    margin-bottom: 10px;\n    margin-top: 20px;\n}\n\n.folders {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n\n}\n\n\n.to-dos {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 70vh;\n    max-height: 90vh;\n    width: 60vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.add-folder{\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    text-align: center;\n    margin: 0px 50px;\n    margin-top: 50px;\n    font-size: 20px;\n    height: auto;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.folder-container{\n    display: flex;\n    flex-direction: column;\n}\n\ninput{\n    margin: 0;\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n}\n\n#task, #duedate, #urgency{\n    background-color: white;\n}\n\n#task, #duedate, #urgency{\n    margin: 15px;\n}\n\n#task{\n    width: 20vw;\n}\n\n#duedate{\n    width: 20vw;\n}\n\n#urgency{\n    width: 15vw;\n}\n\n#foldername{\n    background-color: white;\n    margin: 15px;\n}\n\n\n#add-todos{\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 15px;\n}\n\n\n.todobtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    padding: 0px;\n    font-size: 15px;\n    width: 5vw;\n    margin: 15px;\n    height: 5vh;\n}\n\n#urgency{\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n\n}\n\nbutton{\n    cursor: pointer;\n}\n\n\n\n.tasks-container{\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n}\n\n.task{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n}\n\n.folder{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    \n}\n\n.folder:hover{\n    border: 2px solid lightskyblue;\n}\n\n.folder-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.delete-img{\n    margin-left: auto;\n    display: block;\n    width: 2vw;\n    height: 20px;\n    margin-top: 2.5px;\n}\n\n.task-details{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 50%;\n    margin-left: auto; \n}\n\n.task-date{\n    width: 30%;\n    font-size: 18px;\n    margin: auto;\n\n}\n\n.task-urgency{\n    font-size: 18px;\n    width: 30%;\n    margin: auto 5px;\n}\n\n.edit-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n}\n\n.task-name{\n    margin: auto 0;\n    text-align: left;\n}\n\n.task-delete-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n\n}\n\n.task{\n    display: flex;\n    background-color: white;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n}\n\n.task-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.blur{\n    filter: blur(12px);\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\nbody {\n    background-color: lightskyblue;\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\n::placeholder {\n    color: black;\n  }\n\np{\n    margin: 0;\n}\n\nheader{\n    color: black;\n    text-align: center;\n}\n\n.title{ \n    margin-bottom: 0px;\n}\n\n.createbtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    font-size: 15px;\n    padding: 10px;\n    margin: 15px;\n}\n\n#main {\n    min-height: 100vh;\n    width: 100%;\n    background-color: #ffffff;\n    border-radius: 8% 0 0 0;\n    margin: 0;\n    margin-bottom: 10px;\n    margin-top: 20px;\n}\n\n.folders {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n\n}\n\n\n.to-dos {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 70vh;\n    max-height: 90vh;\n    width: 60vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.add-folder{\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    text-align: center;\n    margin: 0px 50px;\n    margin-top: 50px;\n    font-size: 20px;\n    height: auto;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.folder-container{\n    display: flex;\n    flex-direction: column;\n}\n\ninput{\n    margin: 0;\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n}\n\n#task, #duedate, #urgency{\n    background-color: white;\n}\n\n#task, #duedate, #urgency{\n    margin: 15px;\n}\n\n#task{\n    width: 20vw;\n}\n\n#duedate{\n    width: 20vw;\n}\n\n#urgency{\n    width: 15vw;\n}\n\n#foldername{\n    background-color: white;\n    margin: 15px;\n}\n\n\n#add-todos{\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 15px;\n}\n\n\n.todobtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    padding: 0px;\n    font-size: 15px;\n    width: 5vw;\n    margin: 15px;\n    height: 5vh;\n}\n\n#urgency{\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n\n}\n\nbutton{\n    cursor: pointer;\n}\n\n\n\n.tasks-container{\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n}\n\n.task{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n}\n\n.folder{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    \n}\n\n.folder:hover{\n    border: 2px solid lightskyblue;\n}\n\n.folder-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.delete-img{\n    margin-left: auto;\n    display: block;\n    width: 2vw;\n    height: 20px;\n    margin-top: 2.5px;\n}\n\n.task-details{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 50%;\n    margin-left: auto; \n}\n\n.task-date{\n    width: 30%;\n    font-size: 18px;\n    margin: auto;\n\n}\n\n.task-urgency{\n    font-size: 18px;\n    width: 30%;\n    margin: auto 5px;\n}\n\n.edit-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n}\n\n.task-name{\n    margin: auto 0;\n    text-align: left;\n}\n\n.task-delete-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n\n}\n\n.task{\n    display: flex;\n    background-color: white;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n}\n\n.task-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.blur{\n    filter: blur(12px);\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/imgs/delete.png":
/*!*****************************!*\
  !*** ./src/imgs/delete.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/delete.png");

/***/ }),

/***/ "./src/imgs/edit.png":
/*!***************************!*\
  !*** ./src/imgs/edit.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/edit.png");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
/* harmony import */ var _src_imgs_delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/imgs/delete.png */ "./src/imgs/delete.png");
/* harmony import */ var _src_imgs_edit_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/imgs/edit.png */ "./src/imgs/edit.png");



function task(){
    //Selection
    let addBtn = document.querySelector('.todobtn')
    let taskName = document.querySelector('#task')
    let taskDate = document.querySelector('#duedate')
    let urgency = document.querySelector('#urgency')
    let mainTasksDiv = document.querySelector('.tasks')
    let main = document.getElementById('main')


    //eventListeners
    addBtn.addEventListener('click', () => {
        appendTask()
    })
    //delete Button eventlistener
    mainTasksDiv.addEventListener('click', function (e) {
        if (e.target.classList.contains('task-delete-img')){
            e.target.parentElement.parentElement.remove()
        }
    })
    //edit Button eventlistener
    mainTasksDiv.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-img')){
            main.classList.add('blur')
        }
    })


    mainTasksDiv.addEventListener('mouseover', () => {toggleTasks()})
    


    //Functions
    function appendTask() {
        //Input Validation
        if (taskName.value === '' || taskDate.value === ''){
            alert("Please enter the missing fields")
            return
        }
        //creating task
        else{
            let task = createTask(taskName.value, taskDate.value, urgency.value)
            //console.log(urgency.value)
            let newTaskDiv = document.createElement('div')
            removeTaskSelectedClass()
            newTaskDiv.classList.add("task-selected")
            mainTasksDiv.append(newTaskDiv);
            //Adding P-tag with the name of the task
            let taskNamePTag = document.createElement('p')
            taskNamePTag.innerHTML = task.taskName
            taskNamePTag.classList.add('task-name')
            newTaskDiv.appendChild(taskNamePTag)
            //Adding the details div
            let detailsDiv = document.createElement('div')
            detailsDiv.classList.add('task-details')
            newTaskDiv.append(detailsDiv)
            //Adding date 
            let dueDatePTag = document.createElement('p')
            dueDatePTag.innerHTML = taskDate.value
            dueDatePTag.classList.add('task-date')
            detailsDiv.append(dueDatePTag)
            //Adding Urgency
            let taskUrgency = document.createElement('p')
            taskUrgency.innerHTML = task.urgency
            detailsDiv.append(taskUrgency)
            taskUrgency.classList.add('task-urgency')
            //Adding the delete image
            let deleteBtnImg = document.createElement('img')
            deleteBtnImg.src = _src_imgs_delete_png__WEBPACK_IMPORTED_MODULE_0__["default"]
            deleteBtnImg.classList.add('task-delete-img')
            detailsDiv.append(deleteBtnImg)
            //Adding Edit button
            let editBtnImg = document.createElement('img')
            editBtnImg.src = _src_imgs_edit_png__WEBPACK_IMPORTED_MODULE_1__["default"]
            editBtnImg.classList.add('task-delete-img')
            detailsDiv.append(editBtnImg)
        }
    }

    function createTask(taskName, dueDate, urgency){
        return {
            taskName: taskName,
            dueDate: dueDate,
            urgency: urgency,

            getTaskName() {
                return taskName
            },

            getDueDate(){
                return dueDate
            },

            getUrgency(){
                return urgency
            }
        }
    }

    function removeTaskSelectedClass(){
        const divs = Array.from(document.getElementsByClassName('task-selected'))
        divs.forEach(div => {
        div.classList.remove('task-selected')
        div.classList.add('task')
    }) 
    }

    function toggleTasks(){
        let tasks = mainTasksDiv.children;
        for (let i = 0; i<tasks.length; i++){
            let task = tasks[i];
            console.log(task)
            task.onclick = () => {
               removeTaskSelectedClass()
               task.classList.add("task-selected")
            }    
        } 
    }

    function blurActive(){
        let blur = document.querySelector('.blur')
        blur.classList.toggle('active')
    }

   








}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _src_imgs_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/imgs/delete.png */ "./src/imgs/delete.png");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");




//Selectors
let createFolderBtn = document.querySelector('.createbtn')
let folderName = document.getElementById('Foldername')
let mainFolderDiv = document.querySelector('.folders')
let deleteBtnImg = document.querySelector('.delete-img')
let tasksSection = document.querySelector('.to-dos')





//EventListerners
createFolderBtn.addEventListener('click', () => {appendNewFolder()})
mainFolderDiv.addEventListener('mouseover', () => {toggleFolders()})
mainFolderDiv.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-img')){
        e.target.parentElement.remove()
    }
})

window.onload = function(){
    setInterval((0,_tasks__WEBPACK_IMPORTED_MODULE_2__.task)(), 1000);
 };


 //Functions
function appendNewFolder(){
    if (folderName.value === '') {
        alert('The folder must have a name')
        return
    }else {
        let folder = createFolder(folderName.value)
        let newFolderDiv = document.createElement('div')
        removeFolderSelectedClass()
        newFolderDiv.classList.add("folder-selected")
        mainFolderDiv.append(newFolderDiv);
        //Adding P-tag with the name of the folder
        let folderNamePTag = document.createElement('p')
        folderNamePTag.innerHTML = folder.folderName
        newFolderDiv.appendChild(folderNamePTag)
        //Adding the delete image
        let deleteBtnImg = document.createElement('img')
        deleteBtnImg.src = _src_imgs_delete_png__WEBPACK_IMPORTED_MODULE_1__["default"]
        deleteBtnImg.classList.add('delete-img')
        newFolderDiv.append(deleteBtnImg) 
}
}


function toggleFolders(){
    let folders = mainFolderDiv.children;
    for (let i = 0; i<folders.length; i++){
        let folder = folders[i];
        folder.onclick = () => {
           removeFolderSelectedClass()
           folder.classList.add("folder-selected")
        }    
    } 
}

function removeFolderSelectedClass(){
    const divs = Array.from(document.getElementsByClassName('folder-selected'))
    divs.forEach(div => {
    div.classList.remove('folder-selected')
    div.classList.add('folder')
}) 
}

function createFolder(folderName){
    return {
        folderName: folderName,
        getFolderName() {
            return folderName;
        }
    }
}




























})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLFFBQVEsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFX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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzJCO0FBQ2pCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0EsaURBQWlELGtCQUFrQjtBQUNuRSxtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGdCQUFnQiw0Q0FBSTtBQUNwQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDREQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9zcmMvaW1ncy9kZWxldGUucG5nIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vc3JjL2ltZ3MvZWRpdC5wbmciLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICB9XFxuXFxucHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGV7IFxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi5jcmVhdGVidG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4jbWFpbiB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogOCUgMCAwIDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmZvbGRlcnMge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDY0LCA2OCwgMjAxLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW46IDIwcHggNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxufVxcblxcblxcbi50by1kb3Mge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDY0LCA2OCwgMjAxLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW46IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogNjB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLmFkZC1mb2xkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDBweCA1MHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmZvbGRlci1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuI3Rhc2ssICNkdWVkYXRlLCAjdXJnZW5jeXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiN0YXNrLCAjZHVlZGF0ZSwgI3VyZ2VuY3l7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuI3Rhc2t7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4jZHVlZGF0ZXtcXG4gICAgd2lkdGg6IDIwdnc7XFxufVxcblxcbiN1cmdlbmN5e1xcbiAgICB3aWR0aDogMTV2dztcXG59XFxuXFxuI2ZvbGRlcm5hbWV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDE1cHg7XFxufVxcblxcblxcbiNhZGQtdG9kb3N7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBtYXJnaW46IDE1cHg7XFxufVxcblxcblxcbi50b2RvYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgd2lkdGg6IDV2dztcXG4gICAgbWFyZ2luOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDV2aDtcXG59XFxuXFxuI3VyZ2VuY3l7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG5cXG59XFxuXFxuYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbi50YXNrcy1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNjQsIDY4LCAyMDEsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG1hcmdpbjogMjBweCA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMzBweCA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb2xkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMzBweCA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNjQsIDY4LCAyMDEsIDAuMik7XFxuICAgIFxcbn1cXG5cXG4uZm9sZGVyOmhvdmVye1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodHNreWJsdWU7XFxufVxcblxcbi5mb2xkZXItc2VsZWN0ZWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgbWFyZ2luOiAzMHB4IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCByZ2IoMTM1LCAyMDYsIDI1MCwwLjIpOyBcXG59XFxuXFxuLmRlbGV0ZS1pbWd7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDJ2dztcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyLjVweDtcXG59XFxuXFxuLnRhc2stZGV0YWlsc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87IFxcbn1cXG5cXG4udGFzay1kYXRle1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG5cXG59XFxuXFxuLnRhc2stdXJnZW5jeXtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtYXJnaW46IGF1dG8gNXB4O1xcbn1cXG5cXG4uZWRpdC1pbWd7XFxuICAgIG1hcmdpbjogYXV0byA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMnZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxufVxcblxcbi50YXNrLW5hbWV7XFxuICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udGFzay1kZWxldGUtaW1ne1xcbiAgICBtYXJnaW46IGF1dG8gNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDJ2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcblxcbn1cXG5cXG4udGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMzBweCAyNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG59XFxuXFxuLnRhc2stc2VsZWN0ZWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgbWFyZ2luOiAzMHB4IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCByZ2IoMTM1LCAyMDYsIDI1MCwwLjIpOyBcXG59XFxuXFxuLmJsdXJ7XFxuICAgIGZpbHRlcjogYmx1cigxMnB4KTtcXG59XFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUY7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdEQUFnRDtJQUNoRCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNo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Z0Q7QUFDcEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbnB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxleyBcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4uY3JlYXRlYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDglIDAgMCAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5mb2xkZXJzIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG5cXG4udG8tZG9zIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogNzB2aDtcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5hZGQtZm9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHggNTBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5mb2xkZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbiN0YXNrLCAjZHVlZGF0ZSwgI3VyZ2VuY3l7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGFzaywgI2R1ZWRhdGUsICN1cmdlbmN5e1xcbiAgICBtYXJnaW46IDE1cHg7XFxufVxcblxcbiN0YXNre1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuI2R1ZWRhdGV7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4jdXJnZW5jeXtcXG4gICAgd2lkdGg6IDE1dnc7XFxufVxcblxcbiNmb2xkZXJuYW1le1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG5cXG4jYWRkLXRvZG9ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG5cXG4udG9kb2J0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgaGVpZ2h0OiA1dmg7XFxufVxcblxcbiN1cmdlbmN5e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuXFxufVxcblxcbmJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4udGFza3MtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDY0LCA2OCwgMjAxLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW46IDIwcHggNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDMwcHggNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDMwcHggNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDY0LCA2OCwgMjAxLCAwLjIpO1xcbiAgICBcXG59XFxuXFxuLmZvbGRlcjpob3ZlcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRza3libHVlO1xcbn1cXG5cXG4uZm9sZGVyLXNlbGVjdGVke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIG1hcmdpbjogMzBweCA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggcmdiKDEzNSwgMjA2LCAyNTAsMC4yKTsgXFxufVxcblxcbi5kZWxldGUtaW1ne1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAydnc7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMi41cHg7XFxufVxcblxcbi50YXNrLWRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcXG59XFxuXFxuLnRhc2stZGF0ZXtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuXFxufVxcblxcbi50YXNrLXVyZ2VuY3l7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcXG59XFxuXFxuLmVkaXQtaW1ne1xcbiAgICBtYXJnaW46IGF1dG8gNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDJ2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udGFzay1uYW1le1xcbiAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWltZ3tcXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAydnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG5cXG59XFxuXFxuLnRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDMwcHggMjVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNjQsIDY4LCAyMDEsIDAuMik7XFxufVxcblxcbi50YXNrLXNlbGVjdGVke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIG1hcmdpbjogMzBweCAyNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggcmdiKDEzNSwgMjA2LCAyNTAsMC4yKTsgXFxufVxcblxcbi5ibHVye1xcbiAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2RlbGV0ZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2VkaXQucG5nXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBkZWxldGVJbWFnZSBmcm9tICcuLi9zcmMvaW1ncy9kZWxldGUucG5nJ1xuaW1wb3J0IGVkaXRJbWFnZSBmcm9tICcuLi9zcmMvaW1ncy9lZGl0LnBuZydcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2soKXtcbiAgICAvL1NlbGVjdGlvblxuICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2J0bicpXG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKVxuICAgIGxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJylcbiAgICBsZXQgdXJnZW5jeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cmdlbmN5JylcbiAgICBsZXQgbWFpblRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcblxuXG4gICAgLy9ldmVudExpc3RlbmVyc1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYXBwZW5kVGFzaygpXG4gICAgfSlcbiAgICAvL2RlbGV0ZSBCdXR0b24gZXZlbnRsaXN0ZW5lclxuICAgIG1haW5UYXNrc0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stZGVsZXRlLWltZycpKXtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvL2VkaXQgQnV0dG9uIGV2ZW50bGlzdGVuZXJcbiAgICBtYWluVGFza3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LWltZycpKXtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYmx1cicpXG4gICAgICAgIH1cbiAgICB9KVxuXG5cbiAgICBtYWluVGFza3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge3RvZ2dsZVRhc2tzKCl9KVxuICAgIFxuXG5cbiAgICAvL0Z1bmN0aW9uc1xuICAgIGZ1bmN0aW9uIGFwcGVuZFRhc2soKSB7XG4gICAgICAgIC8vSW5wdXQgVmFsaWRhdGlvblxuICAgICAgICBpZiAodGFza05hbWUudmFsdWUgPT09ICcnIHx8IHRhc2tEYXRlLnZhbHVlID09PSAnJyl7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciB0aGUgbWlzc2luZyBmaWVsZHNcIilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIC8vY3JlYXRpbmcgdGFza1xuICAgICAgICBlbHNle1xuICAgICAgICAgICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tOYW1lLnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSwgdXJnZW5jeS52YWx1ZSlcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codXJnZW5jeS52YWx1ZSlcbiAgICAgICAgICAgIGxldCBuZXdUYXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHJlbW92ZVRhc2tTZWxlY3RlZENsYXNzKClcbiAgICAgICAgICAgIG5ld1Rhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2stc2VsZWN0ZWRcIilcbiAgICAgICAgICAgIG1haW5UYXNrc0Rpdi5hcHBlbmQobmV3VGFza0Rpdik7XG4gICAgICAgICAgICAvL0FkZGluZyBQLXRhZyB3aXRoIHRoZSBuYW1lIG9mIHRoZSB0YXNrXG4gICAgICAgICAgICBsZXQgdGFza05hbWVQVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICB0YXNrTmFtZVBUYWcuaW5uZXJIVE1MID0gdGFzay50YXNrTmFtZVxuICAgICAgICAgICAgdGFza05hbWVQVGFnLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpXG4gICAgICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZENoaWxkKHRhc2tOYW1lUFRhZylcbiAgICAgICAgICAgIC8vQWRkaW5nIHRoZSBkZXRhaWxzIGRpdlxuICAgICAgICAgICAgbGV0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWRldGFpbHMnKVxuICAgICAgICAgICAgbmV3VGFza0Rpdi5hcHBlbmQoZGV0YWlsc0RpdilcbiAgICAgICAgICAgIC8vQWRkaW5nIGRhdGUgXG4gICAgICAgICAgICBsZXQgZHVlRGF0ZVBUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIGR1ZURhdGVQVGFnLmlubmVySFRNTCA9IHRhc2tEYXRlLnZhbHVlXG4gICAgICAgICAgICBkdWVEYXRlUFRhZy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKVxuICAgICAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmQoZHVlRGF0ZVBUYWcpXG4gICAgICAgICAgICAvL0FkZGluZyBVcmdlbmN5XG4gICAgICAgICAgICBsZXQgdGFza1VyZ2VuY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHRhc2tVcmdlbmN5LmlubmVySFRNTCA9IHRhc2sudXJnZW5jeVxuICAgICAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmQodGFza1VyZ2VuY3kpXG4gICAgICAgICAgICB0YXNrVXJnZW5jeS5jbGFzc0xpc3QuYWRkKCd0YXNrLXVyZ2VuY3knKVxuICAgICAgICAgICAgLy9BZGRpbmcgdGhlIGRlbGV0ZSBpbWFnZVxuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgICAgICBkZWxldGVCdG5JbWcuc3JjID0gZGVsZXRlSW1hZ2VcbiAgICAgICAgICAgIGRlbGV0ZUJ0bkltZy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZS1pbWcnKVxuICAgICAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmQoZGVsZXRlQnRuSW1nKVxuICAgICAgICAgICAgLy9BZGRpbmcgRWRpdCBidXR0b25cbiAgICAgICAgICAgIGxldCBlZGl0QnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgICAgIGVkaXRCdG5JbWcuc3JjID0gZWRpdEltYWdlXG4gICAgICAgICAgICBlZGl0QnRuSW1nLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlLWltZycpXG4gICAgICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZChlZGl0QnRuSW1nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrTmFtZSwgZHVlRGF0ZSwgdXJnZW5jeSl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YXNrTmFtZTogdGFza05hbWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgdXJnZW5jeTogdXJnZW5jeSxcblxuICAgICAgICAgICAgZ2V0VGFza05hbWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tOYW1lXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXREdWVEYXRlKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR1ZURhdGVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldFVyZ2VuY3koKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXJnZW5jeVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFza1NlbGVjdGVkQ2xhc3MoKXtcbiAgICAgICAgY29uc3QgZGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1zZWxlY3RlZCcpKVxuICAgICAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stc2VsZWN0ZWQnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpXG4gICAgfSkgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGFza3MoKXtcbiAgICAgICAgbGV0IHRhc2tzID0gbWFpblRhc2tzRGl2LmNoaWxkcmVuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTx0YXNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgdGFzayA9IHRhc2tzW2ldO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGFzaylcbiAgICAgICAgICAgIHRhc2sub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgIHJlbW92ZVRhc2tTZWxlY3RlZENsYXNzKClcbiAgICAgICAgICAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2stc2VsZWN0ZWRcIilcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYmx1ckFjdGl2ZSgpe1xuICAgICAgICBsZXQgYmx1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyJylcbiAgICAgICAgYmx1ci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuICAgIH1cblxuICAgXG5cblxuXG5cblxuXG5cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkZWxldGVJbWFnZSBmcm9tICcuLi9zcmMvaW1ncy9kZWxldGUucG5nJ1xuaW1wb3J0IHsgdGFzayB9IGZyb20gJy4vdGFza3MnO1xuXG4vL1NlbGVjdG9yc1xubGV0IGNyZWF0ZUZvbGRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVidG4nKVxubGV0IGZvbGRlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRm9sZGVybmFtZScpXG5sZXQgbWFpbkZvbGRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzJylcbmxldCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWltZycpXG5sZXQgdGFza3NTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvcycpXG5cblxuXG5cblxuLy9FdmVudExpc3Rlcm5lcnNcbmNyZWF0ZUZvbGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHthcHBlbmROZXdGb2xkZXIoKX0pXG5tYWluRm9sZGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHt0b2dnbGVGb2xkZXJzKCl9KVxubWFpbkZvbGRlckRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWltZycpKXtcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5yZW1vdmUoKVxuICAgIH1cbn0pXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIHNldEludGVydmFsKHRhc2soKSwgMTAwMCk7XG4gfTtcblxuXG4gLy9GdW5jdGlvbnNcbmZ1bmN0aW9uIGFwcGVuZE5ld0ZvbGRlcigpe1xuICAgIGlmIChmb2xkZXJOYW1lLnZhbHVlID09PSAnJykge1xuICAgICAgICBhbGVydCgnVGhlIGZvbGRlciBtdXN0IGhhdmUgYSBuYW1lJylcbiAgICAgICAgcmV0dXJuXG4gICAgfWVsc2Uge1xuICAgICAgICBsZXQgZm9sZGVyID0gY3JlYXRlRm9sZGVyKGZvbGRlck5hbWUudmFsdWUpXG4gICAgICAgIGxldCBuZXdGb2xkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICByZW1vdmVGb2xkZXJTZWxlY3RlZENsYXNzKClcbiAgICAgICAgbmV3Rm9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItc2VsZWN0ZWRcIilcbiAgICAgICAgbWFpbkZvbGRlckRpdi5hcHBlbmQobmV3Rm9sZGVyRGl2KTtcbiAgICAgICAgLy9BZGRpbmcgUC10YWcgd2l0aCB0aGUgbmFtZSBvZiB0aGUgZm9sZGVyXG4gICAgICAgIGxldCBmb2xkZXJOYW1lUFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBmb2xkZXJOYW1lUFRhZy5pbm5lckhUTUwgPSBmb2xkZXIuZm9sZGVyTmFtZVxuICAgICAgICBuZXdGb2xkZXJEaXYuYXBwZW5kQ2hpbGQoZm9sZGVyTmFtZVBUYWcpXG4gICAgICAgIC8vQWRkaW5nIHRoZSBkZWxldGUgaW1hZ2VcbiAgICAgICAgbGV0IGRlbGV0ZUJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGRlbGV0ZUJ0bkltZy5zcmMgPSBkZWxldGVJbWFnZVxuICAgICAgICBkZWxldGVCdG5JbWcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWltZycpXG4gICAgICAgIG5ld0ZvbGRlckRpdi5hcHBlbmQoZGVsZXRlQnRuSW1nKSBcbn1cbn1cblxuXG5mdW5jdGlvbiB0b2dnbGVGb2xkZXJzKCl7XG4gICAgbGV0IGZvbGRlcnMgPSBtYWluRm9sZGVyRGl2LmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGZvbGRlcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgZm9sZGVyID0gZm9sZGVyc1tpXTtcbiAgICAgICAgZm9sZGVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgIHJlbW92ZUZvbGRlclNlbGVjdGVkQ2xhc3MoKVxuICAgICAgICAgICBmb2xkZXIuY2xhc3NMaXN0LmFkZChcImZvbGRlci1zZWxlY3RlZFwiKVxuICAgICAgICB9ICAgIFxuICAgIH0gXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvbGRlclNlbGVjdGVkQ2xhc3MoKXtcbiAgICBjb25zdCBkaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb2xkZXItc2VsZWN0ZWQnKSlcbiAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnZm9sZGVyLXNlbGVjdGVkJylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZm9sZGVyJylcbn0pIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb2xkZXIoZm9sZGVyTmFtZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9sZGVyTmFtZTogZm9sZGVyTmFtZSxcbiAgICAgICAgZ2V0Rm9sZGVyTmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBmb2xkZXJOYW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9