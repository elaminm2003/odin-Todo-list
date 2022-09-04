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
___CSS_LOADER_EXPORT___.push([module.id, "\nbody {\n    background-color: lightskyblue;\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\n::placeholder {\n    color: black;\n  }\n\np{\n    margin: 0;\n}\n\nheader{\n    color: black;\n    text-align: center;\n}\n\n.title{ \n    margin-bottom: 0px;\n}\n\n.createbtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    font-size: 15px;\n    padding: 10px;\n    margin: 15px;\n}\n\n#main {\n    min-height: 100vh;\n    width: 100%;\n    background-color: #ffffff;\n    border-radius: 8% 0 0 0;\n    margin: 0;\n    margin-bottom: 10px;\n    margin-top: 20px;\n}\n\n.folders {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n\n}\n\n\n.to-dos {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 70vh;\n    max-height: 90vh;\n    width: 60vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.add-folder{\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    text-align: center;\n    margin: 0px 50px;\n    margin-top: 50px;\n    font-size: 20px;\n    height: auto;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.folder-container{\n    display: flex;\n    flex-direction: column;\n}\n\ninput{\n    margin: 0;\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n}\n\n#task, #duedate, #urgency{\n    background-color: white;\n}\n\n#task, #duedate, #urgency{\n    margin: 15px;\n}\n\n#task{\n    width: 20vw;\n}\n\n#duedate{\n    width: 20vw;\n}\n\n#urgency{\n    width: 15vw;\n}\n\n#foldername{\n    background-color: white;\n    margin: 15px;\n}\n\n\n#add-todos{\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 15px;\n}\n\n\n.todobtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    padding: 0px;\n    font-size: 15px;\n    width: 5vw;\n    margin: 15px;\n    height: 5vh;\n}\n\n#urgency{\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n\n}\n\nbutton{\n    cursor: pointer;\n}\n\n\n\n.tasks-container{\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n}\n\n.task{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n}\n\n.task-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.folder{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    \n}\n\n.folder:hover{\n    border: 2px solid lightskyblue;\n}\n\n.folder-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.delete-img{\n    margin-left: auto;\n    display: block;\n    width: 2vw;\n    height: 20px;\n    margin-top: 2.5px;\n}\n\n.task-details{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 50%;\n    margin-left: auto; \n}\n\n.task-date{\n    width: 30%;\n    font-size: 18px;\n    margin: auto;\n\n}\n\n.task-urgency{\n    font-size: 18px;\n    width: 30%;\n    margin: auto 5px;\n}\n\n.edit-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n}\n\n.task-name{\n    margin: auto 0;\n    text-align: left;\n}\n\n.task-delete-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n\n}\n\n.task{\n    display: flex;\n    background-color: white;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n}\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,8BAA8B;IAC9B,SAAS;IACT,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,YAAY;EACd;;AAEF;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,yBAAyB;IACzB,uBAAuB;IACvB,SAAS;IACT,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gDAAgD;IAChD,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;;AAEnB;;;AAGA;IACI,iBAAiB;IACjB,gDAAgD;IAChD,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,8BAA8B;IAC9B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,wBAAwB;IACxB,0BAA0B;AAC9B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;AAChB;;;AAGA;IACI,YAAY;IACZ,8BAA8B;IAC9B,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,UAAU;IACV,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,wBAAwB;IACxB,0BAA0B;;AAE9B;;AAEA;IACI,eAAe;AACnB;;;;AAIA;IACI,iBAAiB;IACjB,gDAAgD;IAChD,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,gDAAgD;;AAEpD;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,UAAU;IACV,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,eAAe;IACf,YAAY;;AAEhB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,UAAU;IACV,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,UAAU;IACV,YAAY;IACZ,gBAAgB;;AAEpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,gDAAgD;AACpD","sourcesContent":["\nbody {\n    background-color: lightskyblue;\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n}\n\n::placeholder {\n    color: black;\n  }\n\np{\n    margin: 0;\n}\n\nheader{\n    color: black;\n    text-align: center;\n}\n\n.title{ \n    margin-bottom: 0px;\n}\n\n.createbtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    font-size: 15px;\n    padding: 10px;\n    margin: 15px;\n}\n\n#main {\n    min-height: 100vh;\n    width: 100%;\n    background-color: #ffffff;\n    border-radius: 8% 0 0 0;\n    margin: 0;\n    margin-bottom: 10px;\n    margin-top: 20px;\n}\n\n.folders {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n\n}\n\n\n.to-dos {\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 70vh;\n    max-height: 90vh;\n    width: 60vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.container{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n.add-folder{\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: center;\n    text-align: center;\n    margin: 0px 50px;\n    margin-top: 50px;\n    font-size: 20px;\n    height: auto;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n}\n\n.folder-container{\n    display: flex;\n    flex-direction: column;\n}\n\ninput{\n    margin: 0;\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n}\n\n#task, #duedate, #urgency{\n    background-color: white;\n}\n\n#task, #duedate, #urgency{\n    margin: 15px;\n}\n\n#task{\n    width: 20vw;\n}\n\n#duedate{\n    width: 20vw;\n}\n\n#urgency{\n    width: 15vw;\n}\n\n#foldername{\n    background-color: white;\n    margin: 15px;\n}\n\n\n#add-todos{\n    display: flex;\n    flex-wrap: nowrap;\n    margin: 15px;\n}\n\n\n.todobtn{\n    border: none;\n    background-color: lightskyblue;\n    border-radius: 5px;\n    padding: 0px;\n    font-size: 15px;\n    width: 5vw;\n    margin: 15px;\n    height: 5vh;\n}\n\n#urgency{\n    border: none;\n    border-bottom: 2px solid;\n    border-color: lightskyblue;\n\n}\n\nbutton{\n    cursor: pointer;\n}\n\n\n\n.tasks-container{\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    border-radius: 30px;\n    margin: 20px 50px;\n    font-size: 20px;\n    height: auto;\n    min-height: 200px;\n    max-height: 90vh;\n    width: 30vw;\n    text-align: center;\n    overflow: scroll;\n    cursor: pointer;\n}\n\n.task{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n}\n\n.task-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.folder{\n    display: flex;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    background: white;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n    \n}\n\n.folder:hover{\n    border: 2px solid lightskyblue;\n}\n\n.folder-selected{\n    display: flex;\n    background-color: lightskyblue;\n    margin: 30px 40px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 5px 5px rgb(135, 206, 250,0.2); \n}\n\n.delete-img{\n    margin-left: auto;\n    display: block;\n    width: 2vw;\n    height: 20px;\n    margin-top: 2.5px;\n}\n\n.task-details{\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-end;\n    width: 50%;\n    margin-left: auto; \n}\n\n.task-date{\n    width: 30%;\n    font-size: 18px;\n    margin: auto;\n\n}\n\n.task-urgency{\n    font-size: 18px;\n    width: 30%;\n    margin: auto 5px;\n}\n\n.edit-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n}\n\n.task-name{\n    margin: auto 0;\n    text-align: left;\n}\n\n.task-delete-img{\n    margin: auto 5px;\n    display: block;\n    width: 2vw;\n    height: auto;\n    min-height: 20px;\n\n}\n\n.task{\n    display: flex;\n    background-color: white;\n    margin: 30px 25px;\n    padding: 10px;\n    border-radius: 5px;\n    text-align: right;\n    cursor: pointer;\n    box-shadow: 0px 10px 20px rgba(64, 68, 201, 0.2);\n}\n\n\n\n"],"sourceRoot":""}]);
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


    //eventListeners
    addBtn.addEventListener('click', () => {
        appendTask()
    })


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
            taskUrgency.classList.add('task-urgency')
            detailsDiv.append(taskUrgency)
            taskUrgency.innerHtml = urgency.value
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

    console.log('Hi')








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

deleteBtnImg.addEventListener('click', () => {deleteFolder()})
window.onload = function(){
    setInterval((0,_tasks__WEBPACK_IMPORTED_MODULE_2__.task)(), 1000);
 };

// tasksSection.addEventListener('mouseover', () => {
//     task()
// })






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

function deleteFolder(){
    let folders = mainFolderDiv.children;
    for (let i = 0; i<folders.length; i++){
        let folder = folders[i];
        let deleteImg = folder.lastChild
         deleteImg.onclick = () => {
             folder.remove()
         }
}}





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZ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QTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDREQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vc3JjL2ltZ3MvZGVsZXRlLnBuZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL3NyYy9pbWdzL2VkaXQucG5nIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgfVxcblxcbnB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxleyBcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4uY3JlYXRlYnRue1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuI21haW4ge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDglIDAgMCAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5mb2xkZXJzIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbn1cXG5cXG5cXG4udG8tZG9zIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogNzB2aDtcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDYwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5hZGQtZm9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHggNTBweDtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5mb2xkZXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5pbnB1dHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbiN0YXNrLCAjZHVlZGF0ZSwgI3VyZ2VuY3l7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jdGFzaywgI2R1ZWRhdGUsICN1cmdlbmN5e1xcbiAgICBtYXJnaW46IDE1cHg7XFxufVxcblxcbiN0YXNre1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuI2R1ZWRhdGV7XFxuICAgIHdpZHRoOiAyMHZ3O1xcbn1cXG5cXG4jdXJnZW5jeXtcXG4gICAgd2lkdGg6IDE1dnc7XFxufVxcblxcbiNmb2xkZXJuYW1le1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG5cXG4jYWRkLXRvZG9ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG5cXG4udG9kb2J0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIHdpZHRoOiA1dnc7XFxuICAgIG1hcmdpbjogMTVweDtcXG4gICAgaGVpZ2h0OiA1dmg7XFxufVxcblxcbiN1cmdlbmN5e1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuXFxufVxcblxcbmJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4udGFza3MtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDY0LCA2OCwgMjAxLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBtYXJnaW46IDIwcHggNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDMwcHggNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1zZWxlY3RlZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBtYXJnaW46IDMwcHggMjVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IHJnYigxMzUsIDIwNiwgMjUwLDAuMik7IFxcbn1cXG5cXG4uZm9sZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDMwcHggNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDY0LCA2OCwgMjAxLCAwLjIpO1xcbiAgICBcXG59XFxuXFxuLmZvbGRlcjpob3ZlcntcXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRza3libHVlO1xcbn1cXG5cXG4uZm9sZGVyLXNlbGVjdGVke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIG1hcmdpbjogMzBweCA0MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggcmdiKDEzNSwgMjA2LCAyNTAsMC4yKTsgXFxufVxcblxcbi5kZWxldGUtaW1ne1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAydnc7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMi41cHg7XFxufVxcblxcbi50YXNrLWRldGFpbHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyBcXG59XFxuXFxuLnRhc2stZGF0ZXtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuXFxufVxcblxcbi50YXNrLXVyZ2VuY3l7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcXG59XFxuXFxuLmVkaXQtaW1ne1xcbiAgICBtYXJnaW46IGF1dG8gNXB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDJ2dztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4udGFzay1uYW1le1xcbiAgICBtYXJnaW46IGF1dG8gMDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRhc2stZGVsZXRlLWltZ3tcXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAydnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG5cXG59XFxuXFxuLnRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDMwcHggMjVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNjQsIDY4LCAyMDEsIDAuMik7XFxufVxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtFQUNkOztBQUVGO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnREFBZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTs7QUFFbkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdEQUFnRDtJQUNoRCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDBCQUEwQjs7QUFFOUI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7O0FBSUE7SUFDSSxpQkFBaUI7SUFDakIsZ0RBQWdEO0lBQ2hELG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdEQUFnRDs7QUFFcEQ7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdEQUFnRDtBQUNwRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gIH1cXG5cXG5we1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbmhlYWRlcntcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZXsgXFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLmNyZWF0ZWJ0bntcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDE1cHg7XFxufVxcblxcbiNtYWluIHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA4JSAwIDAgMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZm9sZGVycyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNjQsIDY4LCAyMDEsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG1hcmdpbjogMjBweCA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiAzMHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG59XFxuXFxuXFxuLnRvLWRvcyB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEoNjQsIDY4LCAyMDEsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIG1hcmdpbjogNTBweDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XFxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XFxuICAgIHdpZHRoOiA2MHZ3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uYWRkLWZvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4IDUwcHg7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xcbiAgICB3aWR0aDogMzB2dztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uZm9sZGVyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaW5wdXR7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRza3libHVlO1xcbn1cXG5cXG4jdGFzaywgI2R1ZWRhdGUsICN1cmdlbmN5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3Rhc2ssICNkdWVkYXRlLCAjdXJnZW5jeXtcXG4gICAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4jdGFza3tcXG4gICAgd2lkdGg6IDIwdnc7XFxufVxcblxcbiNkdWVkYXRle1xcbiAgICB3aWR0aDogMjB2dztcXG59XFxuXFxuI3VyZ2VuY3l7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbn1cXG5cXG4jZm9sZGVybmFtZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuXFxuI2FkZC10b2Rvc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIG1hcmdpbjogMTVweDtcXG59XFxuXFxuXFxuLnRvZG9idG57XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB3aWR0aDogNXZ3O1xcbiAgICBtYXJnaW46IDE1cHg7XFxuICAgIGhlaWdodDogNXZoO1xcbn1cXG5cXG4jdXJnZW5jeXtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRza3libHVlO1xcblxcbn1cXG5cXG5idXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgbWFyZ2luOiAyMHB4IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgbWF4LWhlaWdodDogOTB2aDtcXG4gICAgd2lkdGg6IDMwdnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAzMHB4IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stc2VsZWN0ZWR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG4gICAgbWFyZ2luOiAzMHB4IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCByZ2IoMTM1LCAyMDYsIDI1MCwwLjIpOyBcXG59XFxuXFxuLmZvbGRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAzMHB4IDQwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSg2NCwgNjgsIDIwMSwgMC4yKTtcXG4gICAgXFxufVxcblxcbi5mb2xkZXI6aG92ZXJ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuLmZvbGRlci1zZWxlY3RlZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbiAgICBtYXJnaW46IDMwcHggNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IHJnYigxMzUsIDIwNiwgMjUwLDAuMik7IFxcbn1cXG5cXG4uZGVsZXRlLWltZ3tcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMnZ3O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIuNXB4O1xcbn1cXG5cXG4udGFzay1kZXRhaWxze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXFxufVxcblxcbi50YXNrLWRhdGV7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcblxcbn1cXG5cXG4udGFzay11cmdlbmN5e1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1hcmdpbjogYXV0byA1cHg7XFxufVxcblxcbi5lZGl0LWltZ3tcXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAydnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWluLWhlaWdodDogMjBweDtcXG59XFxuXFxuLnRhc2stbmFtZXtcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50YXNrLWRlbGV0ZS1pbWd7XFxuICAgIG1hcmdpbjogYXV0byA1cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMnZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XFxuXFxufVxcblxcbi50YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAzMHB4IDI1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDY0LCA2OCwgMjAxLCAwLjIpO1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9kZWxldGUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9lZGl0LnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZGVsZXRlSW1hZ2UgZnJvbSAnLi4vc3JjL2ltZ3MvZGVsZXRlLnBuZydcbmltcG9ydCBlZGl0SW1hZ2UgZnJvbSAnLi4vc3JjL2ltZ3MvZWRpdC5wbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiB0YXNrKCl7XG4gICAgLy9TZWxlY3Rpb25cbiAgICBsZXQgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9idG4nKVxuICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrJylcbiAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZScpXG4gICAgbGV0IHVyZ2VuY3kgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXJnZW5jeScpXG4gICAgbGV0IG1haW5UYXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG5cblxuICAgIC8vZXZlbnRMaXN0ZW5lcnNcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFwcGVuZFRhc2soKVxuICAgIH0pXG5cblxuICAgIC8vRnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gYXBwZW5kVGFzaygpIHtcbiAgICAgICAgLy9JbnB1dCBWYWxpZGF0aW9uXG4gICAgICAgIGlmICh0YXNrTmFtZS52YWx1ZSA9PT0gJycgfHwgdGFza0RhdGUudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIGVudGVyIHRoZSBtaXNzaW5nIGZpZWxkc1wiKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgLy9jcmVhdGluZyB0YXNrXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2sodGFza05hbWUudmFsdWUsIHRhc2tEYXRlLnZhbHVlLCB1cmdlbmN5LnZhbHVlKVxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh1cmdlbmN5LnZhbHVlKVxuICAgICAgICAgICAgbGV0IG5ld1Rhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgcmVtb3ZlVGFza1NlbGVjdGVkQ2xhc3MoKVxuICAgICAgICAgICAgbmV3VGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFzay1zZWxlY3RlZFwiKVxuICAgICAgICAgICAgbWFpblRhc2tzRGl2LmFwcGVuZChuZXdUYXNrRGl2KTtcbiAgICAgICAgICAgIC8vQWRkaW5nIFAtdGFnIHdpdGggdGhlIG5hbWUgb2YgdGhlIHRhc2tcbiAgICAgICAgICAgIGxldCB0YXNrTmFtZVBUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgICAgIHRhc2tOYW1lUFRhZy5pbm5lckhUTUwgPSB0YXNrLnRhc2tOYW1lXG4gICAgICAgICAgICB0YXNrTmFtZVBUYWcuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJylcbiAgICAgICAgICAgIG5ld1Rhc2tEaXYuYXBwZW5kQ2hpbGQodGFza05hbWVQVGFnKVxuICAgICAgICAgICAgLy9BZGRpbmcgdGhlIGRldGFpbHMgZGl2XG4gICAgICAgICAgICBsZXQgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBkZXRhaWxzRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGV0YWlscycpXG4gICAgICAgICAgICBuZXdUYXNrRGl2LmFwcGVuZChkZXRhaWxzRGl2KVxuICAgICAgICAgICAgLy9BZGRpbmcgZGF0ZSBcbiAgICAgICAgICAgIGxldCBkdWVEYXRlUFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgZHVlRGF0ZVBUYWcuaW5uZXJIVE1MID0gdGFza0RhdGUudmFsdWVcbiAgICAgICAgICAgIGR1ZURhdGVQVGFnLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpXG4gICAgICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZChkdWVEYXRlUFRhZylcbiAgICAgICAgICAgIC8vQWRkaW5nIFVyZ2VuY3lcbiAgICAgICAgICAgIGxldCB0YXNrVXJnZW5jeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICAgICAgdGFza1VyZ2VuY3kuY2xhc3NMaXN0LmFkZCgndGFzay11cmdlbmN5JylcbiAgICAgICAgICAgIGRldGFpbHNEaXYuYXBwZW5kKHRhc2tVcmdlbmN5KVxuICAgICAgICAgICAgdGFza1VyZ2VuY3kuaW5uZXJIdG1sID0gdXJnZW5jeS52YWx1ZVxuICAgICAgICAgICAgLy9BZGRpbmcgdGhlIGRlbGV0ZSBpbWFnZVxuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgICAgICBkZWxldGVCdG5JbWcuc3JjID0gZGVsZXRlSW1hZ2VcbiAgICAgICAgICAgIGRlbGV0ZUJ0bkltZy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZS1pbWcnKVxuICAgICAgICAgICAgZGV0YWlsc0Rpdi5hcHBlbmQoZGVsZXRlQnRuSW1nKVxuICAgICAgICAgICAgLy9BZGRpbmcgRWRpdCBidXR0b25cbiAgICAgICAgICAgIGxldCBlZGl0QnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgICAgIGVkaXRCdG5JbWcuc3JjID0gZWRpdEltYWdlXG4gICAgICAgICAgICBlZGl0QnRuSW1nLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlLWltZycpXG4gICAgICAgICAgICBkZXRhaWxzRGl2LmFwcGVuZChlZGl0QnRuSW1nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrTmFtZSwgZHVlRGF0ZSwgdXJnZW5jeSl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0YXNrTmFtZTogdGFza05hbWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgdXJnZW5jeTogdXJnZW5jeSxcblxuICAgICAgICAgICAgZ2V0VGFza05hbWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2tOYW1lXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXREdWVEYXRlKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGR1ZURhdGVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdldFVyZ2VuY3koKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXJnZW5jeVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFza1NlbGVjdGVkQ2xhc3MoKXtcbiAgICAgICAgY29uc3QgZGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1zZWxlY3RlZCcpKVxuICAgICAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stc2VsZWN0ZWQnKVxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpXG4gICAgfSkgXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ0hpJylcblxuXG5cblxuXG5cblxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGRlbGV0ZUltYWdlIGZyb20gJy4uL3NyYy9pbWdzL2RlbGV0ZS5wbmcnXG5pbXBvcnQgeyB0YXNrIH0gZnJvbSAnLi90YXNrcyc7XG5cbi8vU2VsZWN0b3JzXG5sZXQgY3JlYXRlRm9sZGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZWJ0bicpXG5sZXQgZm9sZGVyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdGb2xkZXJuYW1lJylcbmxldCBtYWluRm9sZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvbGRlcnMnKVxubGV0IGRlbGV0ZUJ0bkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtaW1nJylcbmxldCB0YXNrc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZG9zJylcblxuXG5cblxuXG4vL0V2ZW50TGlzdGVybmVyc1xuY3JlYXRlRm9sZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2FwcGVuZE5ld0ZvbGRlcigpfSlcbm1haW5Gb2xkZXJEaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge3RvZ2dsZUZvbGRlcnMoKX0pXG5cbmRlbGV0ZUJ0bkltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtkZWxldGVGb2xkZXIoKX0pXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICBzZXRJbnRlcnZhbCh0YXNrKCksIDEwMDApO1xuIH07XG5cbi8vIHRhc2tzU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4vLyAgICAgdGFzaygpXG4vLyB9KVxuXG5cblxuXG5cblxuLy9GdW5jdGlvbnNcbmZ1bmN0aW9uIGFwcGVuZE5ld0ZvbGRlcigpe1xuICAgIGlmIChmb2xkZXJOYW1lLnZhbHVlID09PSAnJykge1xuICAgICAgICBhbGVydCgnVGhlIGZvbGRlciBtdXN0IGhhdmUgYSBuYW1lJylcbiAgICAgICAgcmV0dXJuXG4gICAgfWVsc2Uge1xuICAgICAgICBsZXQgZm9sZGVyID0gY3JlYXRlRm9sZGVyKGZvbGRlck5hbWUudmFsdWUpXG4gICAgICAgIGxldCBuZXdGb2xkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICByZW1vdmVGb2xkZXJTZWxlY3RlZENsYXNzKClcbiAgICAgICAgbmV3Rm9sZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItc2VsZWN0ZWRcIilcbiAgICAgICAgbWFpbkZvbGRlckRpdi5hcHBlbmQobmV3Rm9sZGVyRGl2KTtcbiAgICAgICAgLy9BZGRpbmcgUC10YWcgd2l0aCB0aGUgbmFtZSBvZiB0aGUgZm9sZGVyXG4gICAgICAgIGxldCBmb2xkZXJOYW1lUFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBmb2xkZXJOYW1lUFRhZy5pbm5lckhUTUwgPSBmb2xkZXIuZm9sZGVyTmFtZVxuICAgICAgICBuZXdGb2xkZXJEaXYuYXBwZW5kQ2hpbGQoZm9sZGVyTmFtZVBUYWcpXG4gICAgICAgIC8vQWRkaW5nIHRoZSBkZWxldGUgaW1hZ2VcbiAgICAgICAgbGV0IGRlbGV0ZUJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAgIGRlbGV0ZUJ0bkltZy5zcmMgPSBkZWxldGVJbWFnZVxuICAgICAgICBkZWxldGVCdG5JbWcuY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWltZycpXG4gICAgICAgIG5ld0ZvbGRlckRpdi5hcHBlbmQoZGVsZXRlQnRuSW1nKSBcbn1cbn1cblxuZnVuY3Rpb24gZGVsZXRlRm9sZGVyKCl7XG4gICAgbGV0IGZvbGRlcnMgPSBtYWluRm9sZGVyRGl2LmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGZvbGRlcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgZm9sZGVyID0gZm9sZGVyc1tpXTtcbiAgICAgICAgbGV0IGRlbGV0ZUltZyA9IGZvbGRlci5sYXN0Q2hpbGRcbiAgICAgICAgIGRlbGV0ZUltZy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgIGZvbGRlci5yZW1vdmUoKVxuICAgICAgICAgfVxufX1cblxuXG5cblxuXG5mdW5jdGlvbiB0b2dnbGVGb2xkZXJzKCl7XG4gICAgbGV0IGZvbGRlcnMgPSBtYWluRm9sZGVyRGl2LmNoaWxkcmVuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpPGZvbGRlcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgZm9sZGVyID0gZm9sZGVyc1tpXTtcbiAgICAgICAgZm9sZGVyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgIHJlbW92ZUZvbGRlclNlbGVjdGVkQ2xhc3MoKVxuICAgICAgICAgICBmb2xkZXIuY2xhc3NMaXN0LmFkZChcImZvbGRlci1zZWxlY3RlZFwiKVxuICAgICAgICB9ICAgIFxuICAgIH0gXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvbGRlclNlbGVjdGVkQ2xhc3MoKXtcbiAgICBjb25zdCBkaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmb2xkZXItc2VsZWN0ZWQnKSlcbiAgICBkaXZzLmZvckVhY2goZGl2ID0+IHtcbiAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnZm9sZGVyLXNlbGVjdGVkJylcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnZm9sZGVyJylcbn0pIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVGb2xkZXIoZm9sZGVyTmFtZSl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9sZGVyTmFtZTogZm9sZGVyTmFtZSxcbiAgICAgICAgZ2V0Rm9sZGVyTmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBmb2xkZXJOYW1lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9