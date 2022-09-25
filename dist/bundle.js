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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    background-color: lightskyblue;\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\n::placeholder {\n    color: black;\n  }\n\np{\n    margin: 0;\n}\n\nheader{\n    color: black;\n    text-align: center;\n}\n\n.title{ \n    margin-bottom: 0px;\n}\n\n.createbtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    font-size: 15px;\n    padding: 10px;\n    margin: 15px;\n}\n\n#main {\n    min-height: 100vh;\n    width: 100%;\n    background-color: #ffffff;\n    border-radius: 8% 0 0 0;\n    margin: 0;\n    margin-bottom: 10px;\n    margin-top: 20px;\n}\n\n.folders {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n\n}\n\n\n.to-dos {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 70vh;\n    max-height: 90vh;\n    width: 60vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.add-folder{\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    text-align: center;\n    margin: 0px 50px;\n    margin-top: 50px;\n    font-size: 20px;\n    height: auto;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.folder-container{\n    display: flex;\n    flex-direction: column;\n}\n\ninput{\n    margin: 0;\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n}\n\n#task, #duedate, #urgency{\n    background-color: white;\n}\n\n#task, #duedate, #urgency{\n    margin: 15px;\n}\n\n#task{\n    width: 20vw;\n}\n\n#duedate{\n    width: 20vw;\n}\n\n#urgency{\n    width: 15vw;\n}\n\n#foldername{\n    background-color: white;\n    margin: 15px;\n}\n\n\n#add-todos{\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 15px;\n}\n\n.add-todos{\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 15px;\n}\n\n\n.todobtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    padding: 0px;\n    font-size: 15px;\n    width: 5vw;\n    margin: 15px;\n    height: 5vh;\n}\n\n#urgency{\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n\n}\n\nbutton{\n    cursor: pointer;\n}\n\n\n\n.tasks-container{\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n}\n\n.task{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n}\n\n.folder{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    \n}\n\n.folder:hover{\n    border: 2px solid lightskyblue;\n}\n\n.folder-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.delete-img{\n    margin-left: auto;\n    display: block;\n    width: 2vw;\n    height: 20px;\n    margin-top: 2.5px;\n}\n\n.task-details{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 50%;\n    margin-left: auto; \n}\n\n.task-date{\n    width: 30%;\n    font-size: 18px;\n    margin: auto;\n\n}\n\n.task-urgency{\n    font-size: 18px;\n    width: 30%;\n    margin: auto 5px;\n}\n\n.edit-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n}\n\n.task-name{\n    margin: auto 0;\n    text-align: left;\n}\n\n.task-name-div{\n    margin: auto 0;\n    text-align: left;\n}\n\n.task-delete-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n\n}\n\n.task{\n    display: flex;\n    background-color: white;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n}\n\n.task-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.blur{\n    filter: blur(12px);\n}\n\n.hidden{\n    position: fixed; /* Sit on top of the page content */\n    display: none; /* Hidden by default */\n    width: 60%; /* Full width (cover the whole page) */\n    height: 50%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */\n    z-index: 1; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer;  \n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\nbody {\n    background-color: lightskyblue;\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\n::placeholder {\n    color: black;\n  }\n\np{\n    margin: 0;\n}\n\nheader{\n    color: black;\n    text-align: center;\n}\n\n.title{ \n    margin-bottom: 0px;\n}\n\n.createbtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    font-size: 15px;\n    padding: 10px;\n    margin: 15px;\n}\n\n#main {\n    min-height: 100vh;\n    width: 100%;\n    background-color: #ffffff;\n    border-radius: 8% 0 0 0;\n    margin: 0;\n    margin-bottom: 10px;\n    margin-top: 20px;\n}\n\n.folders {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n\n}\n\n\n.to-dos {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 70vh;\n    max-height: 90vh;\n    width: 60vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.add-folder{\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    text-align: center;\n    margin: 0px 50px;\n    margin-top: 50px;\n    font-size: 20px;\n    height: auto;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.folder-container{\n    display: flex;\n    flex-direction: column;\n}\n\ninput{\n    margin: 0;\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n}\n\n#task, #duedate, #urgency{\n    background-color: white;\n}\n\n#task, #duedate, #urgency{\n    margin: 15px;\n}\n\n#task{\n    width: 20vw;\n}\n\n#duedate{\n    width: 20vw;\n}\n\n#urgency{\n    width: 15vw;\n}\n\n#foldername{\n    background-color: white;\n    margin: 15px;\n}\n\n\n#add-todos{\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 15px;\n}\n\n.add-todos{\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 15px;\n}\n\n\n.todobtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    padding: 0px;\n    font-size: 15px;\n    width: 5vw;\n    margin: 15px;\n    height: 5vh;\n}\n\n#urgency{\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n\n}\n\nbutton{\n    cursor: pointer;\n}\n\n\n\n.tasks-container{\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n}\n\n.task{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n}\n\n.folder{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    \n}\n\n.folder:hover{\n    border: 2px solid lightskyblue;\n}\n\n.folder-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.delete-img{\n    margin-left: auto;\n    display: block;\n    width: 2vw;\n    height: 20px;\n    margin-top: 2.5px;\n}\n\n.task-details{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 50%;\n    margin-left: auto; \n}\n\n.task-date{\n    width: 30%;\n    font-size: 18px;\n    margin: auto;\n\n}\n\n.task-urgency{\n    font-size: 18px;\n    width: 30%;\n    margin: auto 5px;\n}\n\n.edit-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n}\n\n.task-name{\n    margin: auto 0;\n    text-align: left;\n}\n\n.task-name-div{\n    margin: auto 0;\n    text-align: left;\n}\n\n.task-delete-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n\n}\n\n.task{\n    display: flex;\n    background-color: white;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n}\n\n.task-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.blur{\n    filter: blur(12px);\n}\n\n.hidden{\n    position: fixed; /* Sit on top of the page content */\n    display: none; /* Hidden by default */\n    width: 60%; /* Full width (cover the whole page) */\n    height: 50%; /* Full height (cover the whole page) */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */\n    z-index: 1; /* Specify a stack order in case you're using a different order for other elements */\n    cursor: pointer;  \n}\n\n\n\n"],"sourceRoot":""}]);
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


function task(){
    //Selection
    let addBtn = document.querySelector('.todobtn')
    let taskName = document.querySelector('#task')
    let taskDate = document.querySelector('#duedate')
    //console.log(taskName)
    let urgency = document.querySelector('#urgency')
    let mainTasksDiv = document.querySelector('.tasks')
    let main = document.getElementById('main')
    let body = document.getElementsByTagName('Body')[0]
    let nameOfTask = document.querySelector('.task-name')
    let folderSelected = document.querySelector('.folder-selected').textContent
    let mainFolderDiv = document.querySelector('.folders')
    console.log(folderSelected)

    let taskArray = []
    console.log(taskArray)

    if (localStorage.getItem('tasks')){
        taskArray = JSON.parse(localStorage.getItem('tasks'))
    }

    getTasksFromLocalStrorage()


    //eventListeners

    window.onload = function(){
        setInterval(console.log(folderSelected), 1000);
     };


    // addBtn.addEventListener('click', () => {
    //     appendTask()
    // })
    //delete Button eventlistener
    mainTasksDiv.addEventListener('click', function (e) {
        if (e.target.classList.contains('task-delete-img')){
            deleteTaskWith(e.target.parentElement.parentElement.children[0].innerHTML)
            appendNewTaskFrom(taskArray)
            
        }
    })
    //edit Button eventlistener
    // mainTasksDiv.addEventListener('click', function (e) {
    //     if (e.target.classList.contains('edit-img')){
    //         main.classList.add('blur')
    //         addPopUp()
            
    //     }
    // })

    addBtn.onclick = function() {
        if (taskName.value !== '' || taskDate.value !== ''){
            addTasksToArray(taskName.value, taskDate.value, urgency.value, folderSelected)
            taskName.value = ''
            taskDate.value = ''
        }else{
            alert('Enter the missing fields')
        }
        
    }
    
    mainFolderDiv.addEventListener('mouseover', () => {
        toggleFolders()
    })


    mainTasksDiv.addEventListener('mouseover', () => {toggleTasks()})
    


    //Functions
    function addTasksToArray(taskName, taskDate, taskUrgency, folderName){
        const task = {
            taskName: taskName,
            taskDate: taskDate,
            taskUrgency: taskUrgency,
            folderName: folderName
        }
        taskArray.push(task)
        appendNewTaskFrom(taskArray)
        //Add folders to local storage
        addTasksToLocalStorageFrom(taskArray);
    }





    function appendNewTaskFrom(taskArray) {
            //let task = createTask(taskName.value, taskDate.value, urgency.value)
            //console.log(urgency.value)
            mainTasksDiv.innerHTML = ''
            taskArray.forEach((task) => {
                if (task.folderName === folderSelected) {
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
                    dueDatePTag.innerHTML = task.taskDate
                    dueDatePTag.classList.add('task-date')
                    detailsDiv.append(dueDatePTag)
                    //Adding Urgency
                    let taskUrgency = document.createElement('p')
                    taskUrgency.innerHTML = task.taskUrgency
                    detailsDiv.append(taskUrgency)
                    taskUrgency.classList.add('task-urgency')
                    //Adding the delete image
                    let deleteBtnImg = document.createElement('img')
                    deleteBtnImg.src = _src_imgs_delete_png__WEBPACK_IMPORTED_MODULE_0__["default"]
                    deleteBtnImg.classList.add('task-delete-img')
                    detailsDiv.append(deleteBtnImg)
                }
                
            })
            
        }

        function deleteTaskWith(taskName){
            taskArray = taskArray.filter((task) => task.taskName != taskName)
            addTasksToLocalStorageFrom(taskArray)
        }

        function toggleFolders(){
            let folders = mainFolderDiv.children;
            for (let i = 0; i<folders.length; i++){
                let folder = folders[i];
                folder.onclick = () => {
                // window.location.reload();
                   removeFolderSelectedClass()
                   folder.classList.add("folder-selected")
                   updateFolderSelected()
                   console.log(folderSelected)
                   appendNewTaskFrom(taskArray)
                }    
            }
            //addFoldersToLocalStorageFrom(folderArray)
        }

        function removeFolderSelectedClass(){
            const divs = Array.from(document.getElementsByClassName('folder-selected'))
            divs.forEach(div => {
            div.classList.remove('folder-selected')
            div.classList.add('folder')
        }) 
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
            //console.log(task)
            task.onclick = () => {
               removeTaskSelectedClass()
               task.classList.add("task-selected")
               
            }    
        }
        
        addTasksToLocalStorageFrom(taskArray) 
    }

    function addTasksToLocalStorageFrom(taskArray) {
        window.localStorage.setItem('tasks', JSON.stringify(taskArray))
    }
    
    function getTasksFromLocalStrorage(){
        let data = window.localStorage.getItem('tasks')
        if (data) {
            let tasks = JSON.parse(data);
            appendNewTaskFrom(taskArray)
        }
    }

    function updateFolderSelected(){
        const divs = Array.from(document.getElementsByClassName('folder-selected'))
        divs.forEach(div => {
        if (div.classList.contains('folder-selected')) {
            folderSelected = div.textContent
        }
    })

}








//     function addPopUp(){
//             let editDiv = document.createElement('div')
//             body.append(editDiv)
//             editDiv.classList.add('to-dos')
//             editDiv.classList.add('hidden')
//             let form = document.createElement('form')
//             form.classList.add('add-todos')
//             let inputName = document.createElement('input')
//             inputName.type = 'text'
//             inputName.placeholder = 'Your Task'
//             inputName.name = 'task'
//             inputName.setAttribute('id', 'task')
//             form.append(inputName)

//             mainTasksDiv.addEventListener('click', function (e) {
//                 if (e.target.classList.contains('edit-img')){
//                     editDiv.classList.remove('hidden')
//                     editDiv.style.display = 'block'
//                 }
//     }) 
// }

console.log(taskArray)

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
let mainTasksDiv = document.querySelector('.tasks')



let folderArray = []

 if (localStorage.getItem('folders')){
     folderArray = JSON.parse(localStorage.getItem('folders'))
 }

getFoldersFromLocalStrorage()






//EventListerners
createFolderBtn.onclick = function() {
    if (folderName.value !== ''){
        addFoldersToArray(folderName.value)
        folderName.value = ''
        mainTasksDiv.innerHTML = ''

    }else{
        alert('Enter a name for your folder')
    }
    
} 

// createFolderBtn.addEventListener('click', () => {
//     addFoldersToArray(folderName.value)
//     appendNewFolder()
// })

console.log(folderArray)

mainFolderDiv.addEventListener('mouseover', () => {
    toggleFolders()
    addFoldersToLocalStorageFrom(folderArray)
})
mainFolderDiv.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-img')){
        deleteFolderWith(e.target.parentElement.textContent)
        appendNewFolderFrom(folderArray)
    }
})

window.onload = function(){
    setInterval((0,_tasks__WEBPACK_IMPORTED_MODULE_2__.task)(), 1000);
 };


 //Functions
 function addFoldersToArray(folderName){
    const folder = {
        folderName: folderName,
    }
    folderArray.push(folder)
    appendNewFolderFrom(folderArray)
    //Add folders to local storage
    addFoldersToLocalStorageFrom(folderArray);
}


function appendNewFolderFrom(folderArray){
        mainFolderDiv.innerHTML = ''
        folderArray.forEach((folder) => {
            //let folder = createFolder(folderName.value)
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
        });
          
}

function deleteFolderWith(folderName){
    folderArray = folderArray.filter((folder) => folder.folderName != folderName)
    addFoldersToLocalStorageFrom(folderArray)
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
    addFoldersToLocalStorageFrom(folderArray)
}

function removeFolderSelectedClass(){
    const divs = Array.from(document.getElementsByClassName('folder-selected'))
    divs.forEach(div => {
    div.classList.remove('folder-selected')
    div.classList.add('folder')
}) 
}

// function createFolder(folderName){
//     return {
//         folderName: folderName,
//         getFolderName() {
//             return folderName;
//         }
//     }
// }

function addFoldersToLocalStorageFrom(folderArray) {
    window.localStorage.setItem('folders', JSON.stringify(folderArray))
}

function getFoldersFromLocalStrorage(){
    let data = window.localStorage.getItem('folders')
    if (data) {
        let folders = JSON.parse(data);
        appendNewFolderFrom(folderArray)
    }
}




























})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUNBQXlDLDBEQUEwRCxxREFBcUQsY0FBYyxlQUFlLGdCQUFnQiw0Q0FBNEMscURBQXFELDZHQUE2RyxHQUFHLGVBQWUsNEVBQTRFLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFV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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsZ0JBQWdCLDRDQUFJO0FBQ3BCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw0REFBVztBQUMxQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9zcmMvaW1ncy9kZWxldGUucG5nIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbnB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxleyBcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4uY3JlYXRlYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDglIDAgMCAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5mb2xkZXJzIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG5cXG4udG8tZG9zIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogNzB2aDtcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5hZGQtZm9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHggNTBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5mb2xkZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbiN0YXNrLCAjZHVlZGF0ZSwgI3VyZ2VuY3l7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGFzaywgI2R1ZWRhdGUsICN1cmdlbmN5e1xcbiAgICBtYXJnaW46IDE1cHg7XFxufVxcblxcbiN0YXNre1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuI2R1ZWRhdGV7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4jdXJnZW5jeXtcXG4gICAgd2lkdGg6IDE1dnc7XFxufVxcblxcbiNmb2xkZXJuYW1le1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG5cXG4jYWRkLXRvZG9ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG9ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG5cXG4udG9kb2J0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgaGVpZ2h0OiA1dmg7XFxufVxcblxcbiN1cmdlbmN5e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuXFxufVxcblxcbmJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4udGFza3MtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDY0LCA2OCwgMjAxLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW46IDIwcHggNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDMwcHggNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDMwcHggNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDY0LCA2OCwgMjAxLCAwLjIpO1xcbiAgICBcXG59XFxuXFxuLmZvbGRlcjpob3ZlcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRza3libHVlO1xcbn1cXG5cXG4uZm9sZGVyLXNlbGVjdGVke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIG1hcmdpbjogMzBweCA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggcmdiKDEzNSwgMjA2LCAyNTAsMC4yKTsgXFxufVxcblxcbi5kZWxldGUtaW1ne1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAydnc7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMi41cHg7XFxufVxcblxcbi50YXNrLWRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcXG59XFxuXFxuLnRhc2stZGF0ZXtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuXFxufVxcblxcbi50YXNrLXVyZ2VuY3l7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcXG59XFxuXFxuLmVkaXQtaW1ne1xcbiAgICBtYXJnaW46IGF1dG8gNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDJ2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udGFzay1uYW1le1xcbiAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRhc2stbmFtZS1kaXZ7XFxuICAgIG1hcmdpbjogYXV0byAwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udGFzay1kZWxldGUtaW1ne1xcbiAgICBtYXJnaW46IGF1dG8gNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDJ2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcblxcbn1cXG5cXG4udGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMzBweCAyNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG59XFxuXFxuLnRhc2stc2VsZWN0ZWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgbWFyZ2luOiAzMHB4IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCByZ2IoMTM1LCAyMDYsIDI1MCwwLjIpOyBcXG59XFxuXFxuLmJsdXJ7XFxuICAgIGZpbHRlcjogYmx1cigxMnB4KTtcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gICAgd2lkdGg6IDYwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxuICAgIGhlaWdodDogNTAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xcbiAgICB6LWluZGV4OiAxOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgIFxcbn1cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7RUFDZDs7QUFFRjtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0RBQWdEO0lBQ2hELG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5COzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixnREFBZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtJQUN4QiwwQkFBMEI7O0FBRTlCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7OztBQUlBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdEQUFnRDtJQUNoRCxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdEQUFnRDs7QUFFcEQ7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZSxFQUFFLG1DQUFtQztJQUNwRCxhQUFhLEVBQUUsc0JBQXNCO0lBQ3JDLFVBQVUsRUFBRSxzQ0FBc0M7SUFDbEQsV0FBVyxFQUFFLHVDQUF1QztJQUNwRCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1Qsb0NBQW9DLEVBQUUsa0NBQWtDO0lBQ3hFLFVBQVUsRUFBRSxvRkFBb0Y7SUFDaEcsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG5we1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmhlYWRlcntcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZXsgXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLmNyZWF0ZWJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDE1cHg7XFxufVxcblxcbiNtYWluIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA4JSAwIDAgMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZm9sZGVycyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNjQsIDY4LCAyMDEsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG1hcmdpbjogMjBweCA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuXFxuLnRvLWRvcyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNjQsIDY4LCAyMDEsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG1hcmdpbjogNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uYWRkLWZvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uZm9sZGVyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW5wdXR7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRza3libHVlO1xcbn1cXG5cXG4jdGFzaywgI2R1ZWRhdGUsICN1cmdlbmN5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3Rhc2ssICNkdWVkYXRlLCAjdXJnZW5jeXtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4jdGFza3tcXG4gICAgd2lkdGg6IDIwdnc7XFxufVxcblxcbiNkdWVkYXRle1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuI3VyZ2VuY3l7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbn1cXG5cXG4jZm9sZGVybmFtZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuXFxuI2FkZC10b2Rvc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLmFkZC10b2Rvc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuXFxuLnRvZG9idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB3aWR0aDogNXZ3O1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGhlaWdodDogNXZoO1xcbn1cXG5cXG4jdXJnZW5jeXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRza3libHVlO1xcblxcbn1cXG5cXG5idXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAzMHB4IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAzMHB4IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG4gICAgXFxufVxcblxcbi5mb2xkZXI6aG92ZXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuLmZvbGRlci1zZWxlY3RlZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBtYXJnaW46IDMwcHggNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IHJnYigxMzUsIDIwNiwgMjUwLDAuMik7IFxcbn1cXG5cXG4uZGVsZXRlLWltZ3tcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMnZ3O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIuNXB4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXFxufVxcblxcbi50YXNrLWRhdGV7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcblxcbn1cXG5cXG4udGFzay11cmdlbmN5e1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1hcmdpbjogYXV0byA1cHg7XFxufVxcblxcbi5lZGl0LWltZ3tcXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAydnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG59XFxuXFxuLnRhc2stbmFtZXtcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50YXNrLW5hbWUtZGl2e1xcbiAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWltZ3tcXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAydnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG5cXG59XFxuXFxuLnRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDMwcHggMjVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNjQsIDY4LCAyMDEsIDAuMik7XFxufVxcblxcbi50YXNrLXNlbGVjdGVke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIG1hcmdpbjogMzBweCAyNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggcmdiKDEzNSwgMjA2LCAyNTAsMC4yKTsgXFxufVxcblxcbi5ibHVye1xcbiAgICBmaWx0ZXI6IGJsdXIoMTJweCk7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXFxuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICAgIHdpZHRoOiA2MCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgICBoZWlnaHQ6IDUwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cXG4gICAgei1pbmRleDogMTsgLyogU3BlY2lmeSBhIHN0YWNrIG9yZGVyIGluIGNhc2UgeW91J3JlIHVzaW5nIGEgZGlmZmVyZW50IG9yZGVyIGZvciBvdGhlciBlbGVtZW50cyAqL1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICBcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvZGVsZXRlLnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi4vc3JjL2ltZ3MvZGVsZXRlLnBuZydcblxuZXhwb3J0IGZ1bmN0aW9uIHRhc2soKXtcbiAgICAvL1NlbGVjdGlvblxuICAgIGxldCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2J0bicpXG4gICAgbGV0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKVxuICAgIGxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVkYXRlJylcbiAgICAvL2NvbnNvbGUubG9nKHRhc2tOYW1lKVxuICAgIGxldCB1cmdlbmN5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VyZ2VuY3knKVxuICAgIGxldCBtYWluVGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICAgIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ0JvZHknKVswXVxuICAgIGxldCBuYW1lT2ZUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpXG4gICAgbGV0IGZvbGRlclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlci1zZWxlY3RlZCcpLnRleHRDb250ZW50XG4gICAgbGV0IG1haW5Gb2xkZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9sZGVycycpXG4gICAgY29uc29sZS5sb2coZm9sZGVyU2VsZWN0ZWQpXG5cbiAgICBsZXQgdGFza0FycmF5ID0gW11cbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpXG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpe1xuICAgICAgICB0YXNrQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKVxuICAgIH1cblxuICAgIGdldFRhc2tzRnJvbUxvY2FsU3Ryb3JhZ2UoKVxuXG5cbiAgICAvL2V2ZW50TGlzdGVuZXJzXG5cbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgc2V0SW50ZXJ2YWwoY29uc29sZS5sb2coZm9sZGVyU2VsZWN0ZWQpLCAxMDAwKTtcbiAgICAgfTtcblxuXG4gICAgLy8gYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vICAgICBhcHBlbmRUYXNrKClcbiAgICAvLyB9KVxuICAgIC8vZGVsZXRlIEJ1dHRvbiBldmVudGxpc3RlbmVyXG4gICAgbWFpblRhc2tzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay1kZWxldGUtaW1nJykpe1xuICAgICAgICAgICAgZGVsZXRlVGFza1dpdGgoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmlubmVySFRNTClcbiAgICAgICAgICAgIGFwcGVuZE5ld1Rhc2tGcm9tKHRhc2tBcnJheSlcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSlcbiAgICAvL2VkaXQgQnV0dG9uIGV2ZW50bGlzdGVuZXJcbiAgICAvLyBtYWluVGFza3NEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LWltZycpKXtcbiAgICAvLyAgICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnYmx1cicpXG4gICAgLy8gICAgICAgICBhZGRQb3BVcCgpXG4gICAgICAgICAgICBcbiAgICAvLyAgICAgfVxuICAgIC8vIH0pXG5cbiAgICBhZGRCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGFza05hbWUudmFsdWUgIT09ICcnIHx8IHRhc2tEYXRlLnZhbHVlICE9PSAnJyl7XG4gICAgICAgICAgICBhZGRUYXNrc1RvQXJyYXkodGFza05hbWUudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB1cmdlbmN5LnZhbHVlLCBmb2xkZXJTZWxlY3RlZClcbiAgICAgICAgICAgIHRhc2tOYW1lLnZhbHVlID0gJydcbiAgICAgICAgICAgIHRhc2tEYXRlLnZhbHVlID0gJydcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCgnRW50ZXIgdGhlIG1pc3NpbmcgZmllbGRzJylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgbWFpbkZvbGRlckRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUZvbGRlcnMoKVxuICAgIH0pXG5cblxuICAgIG1haW5UYXNrc0Rpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7dG9nZ2xlVGFza3MoKX0pXG4gICAgXG5cblxuICAgIC8vRnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gYWRkVGFza3NUb0FycmF5KHRhc2tOYW1lLCB0YXNrRGF0ZSwgdGFza1VyZ2VuY3ksIGZvbGRlck5hbWUpe1xuICAgICAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICAgICAgdGFza05hbWU6IHRhc2tOYW1lLFxuICAgICAgICAgICAgdGFza0RhdGU6IHRhc2tEYXRlLFxuICAgICAgICAgICAgdGFza1VyZ2VuY3k6IHRhc2tVcmdlbmN5LFxuICAgICAgICAgICAgZm9sZGVyTmFtZTogZm9sZGVyTmFtZVxuICAgICAgICB9XG4gICAgICAgIHRhc2tBcnJheS5wdXNoKHRhc2spXG4gICAgICAgIGFwcGVuZE5ld1Rhc2tGcm9tKHRhc2tBcnJheSlcbiAgICAgICAgLy9BZGQgZm9sZGVycyB0byBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGFkZFRhc2tzVG9Mb2NhbFN0b3JhZ2VGcm9tKHRhc2tBcnJheSk7XG4gICAgfVxuXG5cblxuXG5cbiAgICBmdW5jdGlvbiBhcHBlbmROZXdUYXNrRnJvbSh0YXNrQXJyYXkpIHtcbiAgICAgICAgICAgIC8vbGV0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tOYW1lLnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSwgdXJnZW5jeS52YWx1ZSlcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codXJnZW5jeS52YWx1ZSlcbiAgICAgICAgICAgIG1haW5UYXNrc0Rpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICAgICAgdGFza0FycmF5LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5mb2xkZXJOYW1lID09PSBmb2xkZXJTZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVRhc2tTZWxlY3RlZENsYXNzKClcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1zZWxlY3RlZFwiKVxuICAgICAgICAgICAgICAgICAgICBtYWluVGFza3NEaXYuYXBwZW5kKG5ld1Rhc2tEaXYpO1xuICAgICAgICAgICAgICAgICAgICAvL0FkZGluZyBQLXRhZyB3aXRoIHRoZSBuYW1lIG9mIHRoZSB0YXNrXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrTmFtZVBUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgICAgICAgICAgdGFza05hbWVQVGFnLmlubmVySFRNTCA9IHRhc2sudGFza05hbWVcbiAgICAgICAgICAgICAgICAgICAgdGFza05hbWVQVGFnLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpXG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQodGFza05hbWVQVGFnKVxuICAgICAgICAgICAgICAgICAgICAvL0FkZGluZyB0aGUgZGV0YWlscyBkaXZcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRldGFpbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscycpXG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kKGRldGFpbHNEaXYpXG4gICAgICAgICAgICAgICAgICAgIC8vQWRkaW5nIGRhdGUgXG4gICAgICAgICAgICAgICAgICAgIGxldCBkdWVEYXRlUFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlUFRhZy5pbm5lckhUTUwgPSB0YXNrLnRhc2tEYXRlXG4gICAgICAgICAgICAgICAgICAgIGR1ZURhdGVQVGFnLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXYuYXBwZW5kKGR1ZURhdGVQVGFnKVxuICAgICAgICAgICAgICAgICAgICAvL0FkZGluZyBVcmdlbmN5XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrVXJnZW5jeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgICAgICAgICB0YXNrVXJnZW5jeS5pbm5lckhUTUwgPSB0YXNrLnRhc2tVcmdlbmN5XG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXYuYXBwZW5kKHRhc2tVcmdlbmN5KVxuICAgICAgICAgICAgICAgICAgICB0YXNrVXJnZW5jeS5jbGFzc0xpc3QuYWRkKCd0YXNrLXVyZ2VuY3knKVxuICAgICAgICAgICAgICAgICAgICAvL0FkZGluZyB0aGUgZGVsZXRlIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCdG5JbWcuc3JjID0gZGVsZXRlSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlQnRuSW1nLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlLWltZycpXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNEaXYuYXBwZW5kKGRlbGV0ZUJ0bkltZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkZWxldGVUYXNrV2l0aCh0YXNrTmFtZSl7XG4gICAgICAgICAgICB0YXNrQXJyYXkgPSB0YXNrQXJyYXkuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRhc2tOYW1lICE9IHRhc2tOYW1lKVxuICAgICAgICAgICAgYWRkVGFza3NUb0xvY2FsU3RvcmFnZUZyb20odGFza0FycmF5KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gdG9nZ2xlRm9sZGVycygpe1xuICAgICAgICAgICAgbGV0IGZvbGRlcnMgPSBtYWluRm9sZGVyRGl2LmNoaWxkcmVuO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8Zm9sZGVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IGZvbGRlciA9IGZvbGRlcnNbaV07XG4gICAgICAgICAgICAgICAgZm9sZGVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgIHJlbW92ZUZvbGRlclNlbGVjdGVkQ2xhc3MoKVxuICAgICAgICAgICAgICAgICAgIGZvbGRlci5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLXNlbGVjdGVkXCIpXG4gICAgICAgICAgICAgICAgICAgdXBkYXRlRm9sZGVyU2VsZWN0ZWQoKVxuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvbGRlclNlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgIGFwcGVuZE5ld1Rhc2tGcm9tKHRhc2tBcnJheSlcbiAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9hZGRGb2xkZXJzVG9Mb2NhbFN0b3JhZ2VGcm9tKGZvbGRlckFycmF5KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRm9sZGVyU2VsZWN0ZWRDbGFzcygpe1xuICAgICAgICAgICAgY29uc3QgZGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9sZGVyLXNlbGVjdGVkJykpXG4gICAgICAgICAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdmb2xkZXItc2VsZWN0ZWQnKVxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZvbGRlcicpXG4gICAgICAgIH0pIFxuICAgICAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrU2VsZWN0ZWRDbGFzcygpe1xuICAgICAgICBjb25zdCBkaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLXNlbGVjdGVkJykpXG4gICAgICAgIGRpdnMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1zZWxlY3RlZCcpXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJylcbiAgICB9KSBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVUYXNrcygpe1xuICAgICAgICBsZXQgdGFza3MgPSBtYWluVGFza3NEaXYuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPHRhc2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCB0YXNrID0gdGFza3NbaV07XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRhc2spXG4gICAgICAgICAgICB0YXNrLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICByZW1vdmVUYXNrU2VsZWN0ZWRDbGFzcygpXG4gICAgICAgICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXNlbGVjdGVkXCIpXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGFkZFRhc2tzVG9Mb2NhbFN0b3JhZ2VGcm9tKHRhc2tBcnJheSkgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVGFza3NUb0xvY2FsU3RvcmFnZUZyb20odGFza0FycmF5KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrQXJyYXkpKVxuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBnZXRUYXNrc0Zyb21Mb2NhbFN0cm9yYWdlKCl7XG4gICAgICAgIGxldCBkYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpXG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgdGFza3MgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgYXBwZW5kTmV3VGFza0Zyb20odGFza0FycmF5KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9sZGVyU2VsZWN0ZWQoKXtcbiAgICAgICAgY29uc3QgZGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZm9sZGVyLXNlbGVjdGVkJykpXG4gICAgICAgIGRpdnMuZm9yRWFjaChkaXYgPT4ge1xuICAgICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucygnZm9sZGVyLXNlbGVjdGVkJykpIHtcbiAgICAgICAgICAgIGZvbGRlclNlbGVjdGVkID0gZGl2LnRleHRDb250ZW50XG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cblxuXG5cblxuXG5cblxuLy8gICAgIGZ1bmN0aW9uIGFkZFBvcFVwKCl7XG4vLyAgICAgICAgICAgICBsZXQgZWRpdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgICAgICAgICBib2R5LmFwcGVuZChlZGl0RGl2KVxuLy8gICAgICAgICAgICAgZWRpdERpdi5jbGFzc0xpc3QuYWRkKCd0by1kb3MnKVxuLy8gICAgICAgICAgICAgZWRpdERpdi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuLy8gICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbi8vICAgICAgICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWRkLXRvZG9zJylcbi8vICAgICAgICAgICAgIGxldCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4vLyAgICAgICAgICAgICBpbnB1dE5hbWUudHlwZSA9ICd0ZXh0J1xuLy8gICAgICAgICAgICAgaW5wdXROYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgVGFzaydcbi8vICAgICAgICAgICAgIGlucHV0TmFtZS5uYW1lID0gJ3Rhc2snXG4vLyAgICAgICAgICAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrJylcbi8vICAgICAgICAgICAgIGZvcm0uYXBwZW5kKGlucHV0TmFtZSlcblxuLy8gICAgICAgICAgICAgbWFpblRhc2tzRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0LWltZycpKXtcbi8vICAgICAgICAgICAgICAgICAgICAgZWRpdERpdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuLy8gICAgICAgICAgICAgICAgICAgICBlZGl0RGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgIH0pIFxuLy8gfVxuXG5jb25zb2xlLmxvZyh0YXNrQXJyYXkpXG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBkZWxldGVJbWFnZSBmcm9tICcuLi9zcmMvaW1ncy9kZWxldGUucG5nJ1xuaW1wb3J0IHsgdGFzayB9IGZyb20gJy4vdGFza3MnO1xuXG4vL1NlbGVjdG9yc1xubGV0IGNyZWF0ZUZvbGRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVidG4nKVxubGV0IGZvbGRlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnRm9sZGVybmFtZScpXG5sZXQgbWFpbkZvbGRlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb2xkZXJzJylcbmxldCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLWltZycpXG5sZXQgdGFza3NTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWRvcycpXG5sZXQgbWFpblRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcblxuXG5cbmxldCBmb2xkZXJBcnJheSA9IFtdXG5cbiBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZvbGRlcnMnKSl7XG4gICAgIGZvbGRlckFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9sZGVycycpKVxuIH1cblxuZ2V0Rm9sZGVyc0Zyb21Mb2NhbFN0cm9yYWdlKClcblxuXG5cblxuXG5cbi8vRXZlbnRMaXN0ZXJuZXJzXG5jcmVhdGVGb2xkZXJCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChmb2xkZXJOYW1lLnZhbHVlICE9PSAnJyl7XG4gICAgICAgIGFkZEZvbGRlcnNUb0FycmF5KGZvbGRlck5hbWUudmFsdWUpXG4gICAgICAgIGZvbGRlck5hbWUudmFsdWUgPSAnJ1xuICAgICAgICBtYWluVGFza3NEaXYuaW5uZXJIVE1MID0gJydcblxuICAgIH1lbHNle1xuICAgICAgICBhbGVydCgnRW50ZXIgYSBuYW1lIGZvciB5b3VyIGZvbGRlcicpXG4gICAgfVxuICAgIFxufSBcblxuLy8gY3JlYXRlRm9sZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGFkZEZvbGRlcnNUb0FycmF5KGZvbGRlck5hbWUudmFsdWUpXG4vLyAgICAgYXBwZW5kTmV3Rm9sZGVyKClcbi8vIH0pXG5cbmNvbnNvbGUubG9nKGZvbGRlckFycmF5KVxuXG5tYWluRm9sZGVyRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICB0b2dnbGVGb2xkZXJzKClcbiAgICBhZGRGb2xkZXJzVG9Mb2NhbFN0b3JhZ2VGcm9tKGZvbGRlckFycmF5KVxufSlcbm1haW5Gb2xkZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1pbWcnKSl7XG4gICAgICAgIGRlbGV0ZUZvbGRlcldpdGgoZS50YXJnZXQucGFyZW50RWxlbWVudC50ZXh0Q29udGVudClcbiAgICAgICAgYXBwZW5kTmV3Rm9sZGVyRnJvbShmb2xkZXJBcnJheSlcbiAgICB9XG59KVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICBzZXRJbnRlcnZhbCh0YXNrKCksIDEwMDApO1xuIH07XG5cblxuIC8vRnVuY3Rpb25zXG4gZnVuY3Rpb24gYWRkRm9sZGVyc1RvQXJyYXkoZm9sZGVyTmFtZSl7XG4gICAgY29uc3QgZm9sZGVyID0ge1xuICAgICAgICBmb2xkZXJOYW1lOiBmb2xkZXJOYW1lLFxuICAgIH1cbiAgICBmb2xkZXJBcnJheS5wdXNoKGZvbGRlcilcbiAgICBhcHBlbmROZXdGb2xkZXJGcm9tKGZvbGRlckFycmF5KVxuICAgIC8vQWRkIGZvbGRlcnMgdG8gbG9jYWwgc3RvcmFnZVxuICAgIGFkZEZvbGRlcnNUb0xvY2FsU3RvcmFnZUZyb20oZm9sZGVyQXJyYXkpO1xufVxuXG5cbmZ1bmN0aW9uIGFwcGVuZE5ld0ZvbGRlckZyb20oZm9sZGVyQXJyYXkpe1xuICAgICAgICBtYWluRm9sZGVyRGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgIGZvbGRlckFycmF5LmZvckVhY2goKGZvbGRlcikgPT4ge1xuICAgICAgICAgICAgLy9sZXQgZm9sZGVyID0gY3JlYXRlRm9sZGVyKGZvbGRlck5hbWUudmFsdWUpXG4gICAgICAgICAgICBsZXQgbmV3Rm9sZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIHJlbW92ZUZvbGRlclNlbGVjdGVkQ2xhc3MoKVxuICAgICAgICAgICAgbmV3Rm9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItc2VsZWN0ZWRcIilcbiAgICAgICAgICAgIG1haW5Gb2xkZXJEaXYuYXBwZW5kKG5ld0ZvbGRlckRpdik7XG4gICAgICAgICAgICAvL0FkZGluZyBQLXRhZyB3aXRoIHRoZSBuYW1lIG9mIHRoZSBmb2xkZXJcbiAgICAgICAgICAgIGxldCBmb2xkZXJOYW1lUFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgZm9sZGVyTmFtZVBUYWcuaW5uZXJIVE1MID0gZm9sZGVyLmZvbGRlck5hbWVcbiAgICAgICAgICAgIG5ld0ZvbGRlckRpdi5hcHBlbmRDaGlsZChmb2xkZXJOYW1lUFRhZylcbiAgICAgICAgICAgIC8vQWRkaW5nIHRoZSBkZWxldGUgaW1hZ2VcbiAgICAgICAgICAgIGxldCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICAgICAgZGVsZXRlQnRuSW1nLnNyYyA9IGRlbGV0ZUltYWdlXG4gICAgICAgICAgICBkZWxldGVCdG5JbWcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWltZycpXG4gICAgICAgICAgICBuZXdGb2xkZXJEaXYuYXBwZW5kKGRlbGV0ZUJ0bkltZykgXG4gICAgICAgIH0pO1xuICAgICAgICAgIFxufVxuXG5mdW5jdGlvbiBkZWxldGVGb2xkZXJXaXRoKGZvbGRlck5hbWUpe1xuICAgIGZvbGRlckFycmF5ID0gZm9sZGVyQXJyYXkuZmlsdGVyKChmb2xkZXIpID0+IGZvbGRlci5mb2xkZXJOYW1lICE9IGZvbGRlck5hbWUpXG4gICAgYWRkRm9sZGVyc1RvTG9jYWxTdG9yYWdlRnJvbShmb2xkZXJBcnJheSlcbn1cblxuXG5cbmZ1bmN0aW9uIHRvZ2dsZUZvbGRlcnMoKXtcbiAgICBsZXQgZm9sZGVycyA9IG1haW5Gb2xkZXJEaXYuY2hpbGRyZW47XG4gICAgZm9yIChsZXQgaSA9IDA7IGk8Zm9sZGVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBmb2xkZXIgPSBmb2xkZXJzW2ldO1xuICAgICAgICBmb2xkZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgcmVtb3ZlRm9sZGVyU2VsZWN0ZWRDbGFzcygpXG4gICAgICAgICAgIGZvbGRlci5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLXNlbGVjdGVkXCIpXG4gICAgICAgIH0gICAgXG4gICAgfVxuICAgIGFkZEZvbGRlcnNUb0xvY2FsU3RvcmFnZUZyb20oZm9sZGVyQXJyYXkpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvbGRlclNlbGVjdGVkQ2xhc3MoKXtcbiAgICBjb25zdCBkaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb2xkZXItc2VsZWN0ZWQnKSlcbiAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnZm9sZGVyLXNlbGVjdGVkJylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZm9sZGVyJylcbn0pIFxufVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVGb2xkZXIoZm9sZGVyTmFtZSl7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgZm9sZGVyTmFtZTogZm9sZGVyTmFtZSxcbi8vICAgICAgICAgZ2V0Rm9sZGVyTmFtZSgpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBmb2xkZXJOYW1lO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiBhZGRGb2xkZXJzVG9Mb2NhbFN0b3JhZ2VGcm9tKGZvbGRlckFycmF5KSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2xkZXJzJywgSlNPTi5zdHJpbmdpZnkoZm9sZGVyQXJyYXkpKVxufVxuXG5mdW5jdGlvbiBnZXRGb2xkZXJzRnJvbUxvY2FsU3Ryb3JhZ2UoKXtcbiAgICBsZXQgZGF0YSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9sZGVycycpXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgbGV0IGZvbGRlcnMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICBhcHBlbmROZXdGb2xkZXJGcm9tKGZvbGRlckFycmF5KVxuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==