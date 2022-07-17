/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n.container {\n    display: grid;\n    /* grid-template-columns: clamp(200px,30vw,400px) 70vw; */\n    grid-template-columns: 25vw 75vw;\n    grid-template-rows: auto;\n}\n\n.sidebar {\n    background-color: #EEEEEE;\n    height: 100vh;\n    /* border: solid 1px #393E46; */\n    box-shadow: 1px 1px 5px gray;\n    display: flex;\n    flex-direction: column;\n    z-index: 5;\n    cursor: grab;\n    \n}\n\n#sidebar-title {\n    font-weight: 600;\n    background-color: #00ADB5;\n    color: white;\n    margin: 0px;\n    padding: 10px;\n    font-size: 2rem;\n    text-shadow: 1px 1px 1px #222831;\n    border-bottom: solid 1px #222831;\n}\n\n.project-head {\n    padding-left: 10px;\n    margin-bottom: 0px;\n}\n\n.project-head:hover {\n    color: white;\n    background-color: #00ADB5;\n}\n\n.project-head:hover::after {\n    content: \" +\";\n}\n\n\n.project-ul {\n    margin-top: 5px;\n    overflow: hidden;\n    max-height: 0px;\n    transition: max-height 0.1s ease-out;\n}\n\n\n.new-project, #add-remove-project {\n    align-self: center;\n    font-size: 1.5rem;\n    background-color: #00ADB5;\n    color: white;\n    border: solid 2px #222831;\n    border-radius: 10px;\n    padding: 5px;\n    box-shadow: 1px 1px 8px  #222831;\n}\n\n.new-project:hover, #add-remove-project:hover {\n    background-color: #04838a;\n}\n\n.new-project:active, #add-remove-project:active {\n    background-color: #00ADB5;\n}\n\n.new-project-form {\n    position: absolute;\n    top: 20%;\n    left: 40%;\n    background-color: #EEEEEE;\n    box-shadow: 1px 1px 5px #222831;\n    border-radius: 10%;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.4s;\n}\n\n#add-remove-project {\n    font-size: 1rem;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    \n}\n\n.todo-title {\n    background-color: #393E46;\n    height: 20vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 2rem;\n    font-family: 'Lato', sans-serif;\n    font-weight: 600;\n    border-bottom: solid 2px #222831;\n}\n\n.todo-body {\n    background-image: radial-gradient(#F0EBE3,#EEEEEE);\n    flex-grow: 1;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    font-size: 1.5rem;\n    flex-wrap: wrap;\n}\n\n.todo-form {\n    display: grid;\n    grid-template-columns: 40% 40%;\n    gap: 15px;\n}\n\ninput, textarea {\n    font-family: 'Lato',sans-serif;\n    font-size: 1rem;\n}\n\n.footer {\n    background-color: #222831;\n    color: white;\n    text-align: center;\n    padding: 15px;\n}\n\nlabel {\n    display: block;\n    grid-column: 1/2;\n}\n\n.new-to-do{\n    color: #00ADB5;\n    border: none;\n    outline: none;\n    cursor: grab;\n}\n\n.btn-grp {\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n}\n\n.edit-btn, .delete-btn {\n    width: 30%;\n        font-size: 1rem;\n}\n\n.edit-btn {\n    background-color: rgb(139, 233, 139);\n}\n\n.delete-btn {\n    background-color: rgb(233, 150, 139);\n}\n\n.edit-btn:hover, .delete-btn:hover {\n    opacity: 0.8;\n}\n\n.completed {\n    list-style-type: none;\n    color: green;\n}\n\n.high-priority {\n    color: rgb(243, 104, 104);\n}\n\n.med-priority {\n    color: rgb(204, 152, 55);\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,iCAAiC;AACrC;;;AAGA;IACI,aAAa;IACb,yDAAyD;IACzD,gCAAgC;IAChC,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,+BAA+B;IAC/B,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,YAAY;;AAEhB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,eAAe;IACf,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,oCAAoC;AACxC;;;AAGA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;IACzB,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,yBAAyB;IACzB,+BAA+B;IAC/B,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;IAClB,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,+BAA+B;IAC/B,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,kDAAkD;IAClD,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,UAAU;QACN,eAAe;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":["body {\n    margin: 0px;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n.container {\n    display: grid;\n    /* grid-template-columns: clamp(200px,30vw,400px) 70vw; */\n    grid-template-columns: 25vw 75vw;\n    grid-template-rows: auto;\n}\n\n.sidebar {\n    background-color: #EEEEEE;\n    height: 100vh;\n    /* border: solid 1px #393E46; */\n    box-shadow: 1px 1px 5px gray;\n    display: flex;\n    flex-direction: column;\n    z-index: 5;\n    cursor: grab;\n    \n}\n\n#sidebar-title {\n    font-weight: 600;\n    background-color: #00ADB5;\n    color: white;\n    margin: 0px;\n    padding: 10px;\n    font-size: 2rem;\n    text-shadow: 1px 1px 1px #222831;\n    border-bottom: solid 1px #222831;\n}\n\n.project-head {\n    padding-left: 10px;\n    margin-bottom: 0px;\n}\n\n.project-head:hover {\n    color: white;\n    background-color: #00ADB5;\n}\n\n.project-head:hover::after {\n    content: \" +\";\n}\n\n\n.project-ul {\n    margin-top: 5px;\n    overflow: hidden;\n    max-height: 0px;\n    transition: max-height 0.1s ease-out;\n}\n\n\n.new-project, #add-remove-project {\n    align-self: center;\n    font-size: 1.5rem;\n    background-color: #00ADB5;\n    color: white;\n    border: solid 2px #222831;\n    border-radius: 10px;\n    padding: 5px;\n    box-shadow: 1px 1px 8px  #222831;\n}\n\n.new-project:hover, #add-remove-project:hover {\n    background-color: #04838a;\n}\n\n.new-project:active, #add-remove-project:active {\n    background-color: #00ADB5;\n}\n\n.new-project-form {\n    position: absolute;\n    top: 20%;\n    left: 40%;\n    background-color: #EEEEEE;\n    box-shadow: 1px 1px 5px #222831;\n    border-radius: 10%;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.4s;\n}\n\n#add-remove-project {\n    font-size: 1rem;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    \n}\n\n.todo-title {\n    background-color: #393E46;\n    height: 20vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 2rem;\n    font-family: 'Lato', sans-serif;\n    font-weight: 600;\n    border-bottom: solid 2px #222831;\n}\n\n.todo-body {\n    background-image: radial-gradient(#F0EBE3,#EEEEEE);\n    flex-grow: 1;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    font-size: 1.5rem;\n    flex-wrap: wrap;\n}\n\n.todo-form {\n    display: grid;\n    grid-template-columns: 40% 40%;\n    gap: 15px;\n}\n\ninput, textarea {\n    font-family: 'Lato',sans-serif;\n    font-size: 1rem;\n}\n\n.footer {\n    background-color: #222831;\n    color: white;\n    text-align: center;\n    padding: 15px;\n}\n\nlabel {\n    display: block;\n    grid-column: 1/2;\n}\n\n.new-to-do{\n    color: #00ADB5;\n    border: none;\n    outline: none;\n    cursor: grab;\n}\n\n.btn-grp {\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n}\n\n.edit-btn, .delete-btn {\n    width: 30%;\n        font-size: 1rem;\n}\n\n.edit-btn {\n    background-color: rgb(139, 233, 139);\n}\n\n.delete-btn {\n    background-color: rgb(233, 150, 139);\n}\n\n.edit-btn:hover, .delete-btn:hover {\n    opacity: 0.8;\n}\n\n.completed {\n    list-style-type: none;\n    color: green;\n}\n\n.high-priority {\n    color: rgb(243, 104, 104);\n}\n\n.med-priority {\n    color: rgb(204, 152, 55);\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttons": () => (/* binding */ buttons),
/* harmony export */   "getLocalStorage": () => (/* binding */ getLocalStorage),
/* harmony export */   "renderFooter": () => (/* binding */ renderFooter),
/* harmony export */   "renderSideBar": () => (/* binding */ renderSideBar),
/* harmony export */   "renderToDo": () => (/* binding */ renderToDo),
/* harmony export */   "setLocalStorage": () => (/* binding */ setLocalStorage)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



// new project button
const buttons = (()=>{
    const newProj = document.querySelector('.new-project');
    const newProjForm = document.querySelector('.new-project-form');
    const newProjName = document.querySelector(`input[name="project-name"]`);

    newProj.addEventListener('click',function(e){
        e.preventDefault();
        newProjForm.style.visibility = 'visible';
        newProjForm.style.opacity = 0.8;
    });


    const addRemoveProject = document.querySelector('#add-remove-project');
    addRemoveProject.addEventListener('click',function(){
        newProjForm.style.visibility = 'hidden';
        newProjForm.style.opacity = 0;
        
        _todo__WEBPACK_IMPORTED_MODULE_0__.Projects.addRemoveProject(newProjName.value,(0,_todo__WEBPACK_IMPORTED_MODULE_0__.Todos)()); 
        newProjName.value = '';
        
        renderSideBar(_todo__WEBPACK_IMPORTED_MODULE_0__.Projects);
        setLocalStorage();
    });
        

    return {newProj};
})();




// animate the to-dos
function expandProject(event) {
    let child = event.target.nextElementSibling;
     if (child.style.maxHeight){
        child.style.maxHeight = null;
          } else {
            child.style.maxHeight = child.scrollHeight + "px";
          } 
}

let clearContent = function(element) {
     // clear the content
     while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

// function to render the sidebar
let renderSideBar = function(projects) {
    const sideBar = document.querySelector('.projects');
    clearContent(sideBar);
    
    let allProjects = projects.getProjects();
    
    for (let project in allProjects) {
        //console.log(project);
        //console.log(allProjects[project].getToDos());
        //console.log(allProjects);

        // create the DOM elements
        const header = document.createElement('h3');
        header.classList.add('project-head');
        header.innerHTML = `${project}`;
        header.addEventListener('click',expandProject);

        const ul = document.createElement('ul');
        ul.classList.add('project-ul');

        allProjects[project].getToDos().forEach(todo => {
            const todoLi = document.createElement('li');
            todoLi.classList.add('project-li');

            const today = new Date();
            let due = new Date(todo.dueDate);
            let remain = parseInt((due - today)/(1000*60*60*24),10);

            if (project==='Completed') {
                todoLi.innerHTML = `${todo.title}`;
                todoLi.classList.add('completed');
            } else {
                todoLi.innerHTML = `${todo.title} (${remain} days)`;
                if (parseInt(todo.priority)>3 || (remain<5)) {
                    todoLi.classList.add('high-priority');
                } else if (parseInt(todo.priority)>2 || (remain<15)) {
                    todoLi.classList.add('med-priority');
                }
            }
            
            todoLi.addEventListener('click',function(){
                renderToDo(todo,project,allProjects);
            });
            ul.appendChild(todoLi);
        });

        const newToDoBtn = document.createElement('button');
        newToDoBtn.classList.add('new-to-do');
        newToDoBtn.textContent = "Add...";
        newToDoBtn.addEventListener('click',function(){
            let newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.Todo)('','','','0','',false);
            projects.getProjects()[project].addToDo(newTodo);
            renderToDo(newTodo,project,allProjects);
            renderSideBar(projects);
        });
        ul.appendChild(newToDoBtn);

        sideBar.appendChild(header);
        sideBar.appendChild(ul);


    }
};

const renderFooter = ()=> {
    const footer = document.querySelector('.footer');
    const d = new Date();
    footer.innerHTML = `Copyright Big D - ${d.getFullYear()}`;
}


// function to render the todo
let renderToDo = function(todo,project,allProjects) {
    const today = new Date();
    const titleHeader = document.querySelector('.todo-title');
    const title = document.querySelector('input[name="title"]');
    const desc = document.querySelector('textarea[name="description"]');
    const dueDate = document.querySelector('input[name="due-date"]');
    const timeLeft = document.querySelector('#time-left');
    const priority = document.querySelector('input[name="priority"]');
    const completed = document.querySelector('input[name="complete"]');

    titleHeader.innerHTML = `${todo.title}`;
    title.value = todo.title;
    desc.value = todo.description;
    dueDate.value = todo.dueDate;
    let due = new Date(todo.dueDate);
    timeLeft.innerHTML = parseInt((due - today)/(1000*60*60*24),10);
    priority.value = todo.priority;
    completed.checked = todo.complete;


    // remove any existing buttons
    const btnGrp = document.querySelector('.btn-grp');
    clearContent(btnGrp);

    // create the edit and delete button
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.innerHTML = 'Edit';
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = 'Delete';

    btnGrp.appendChild(editBtn);
    btnGrp.appendChild(deleteBtn);

    console.log(todo);

    editBtn.addEventListener('click',function(){
        todo.title = title.value;
        todo.description = desc.value;
        todo.dueDate = dueDate.value;
        todo.priority = priority.value;
        todo.complete = completed.checked;

        if (todo.complete) {
            allProjects['Completed'].addToDo(todo);
            allProjects[project].removeToDo(todo);    
        }

        renderSideBar(_todo__WEBPACK_IMPORTED_MODULE_0__.Projects);
        renderToDo(todo,project,allProjects);
        setLocalStorage();
    });


    deleteBtn.addEventListener('click',function(){
        allProjects[project].removeToDo(todo);
        renderSideBar(_todo__WEBPACK_IMPORTED_MODULE_0__.Projects);
        setLocalStorage();
    });


};


// local storage rendering
function getLocalStorage() {
    let projectList = JSON.parse(window.localStorage.getItem('projects'));

    console.log(projectList);

    projectList.forEach(project=>{
        // get the todos list
        let todos = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.Todos)();
        let savedTodos = JSON.parse(window.localStorage.getItem(project));
        todos.setToDos(savedTodos);
        _todo__WEBPACK_IMPORTED_MODULE_0__.Projects.addProject(project,todos);
    });
}

function setLocalStorage() {
    let allProjects = _todo__WEBPACK_IMPORTED_MODULE_0__.Projects.getProjects();
    console.log(allProjects);
    let projectList = [];
    for (let project in allProjects)  {
        projectList.push(project);
        let toSave = JSON.stringify(allProjects[project].getToDos());
        window.localStorage.setItem(project, toSave);    
    };

    window.localStorage.setItem('projects',JSON.stringify(projectList));
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Projects": () => (/* binding */ Projects),
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "Todos": () => (/* binding */ Todos)
/* harmony export */ });
let Todo = (title,description,dueDate,priority,notes,complete) => {

    //const getTitle = () => title;
    //const setTitle = (str) => title;

    const printDetails = () => {
        console.log(`Task ${title} is due on ${dueDate}`);
    };

    return {title,description,dueDate,priority,notes,complete,printDetails};
};

let Todos = () => {
    let todos = [];

    const addToDo = (todo) => todos.push(todo);
    
    const findIndex = (todo) => {
        let id = todos.filter(td => td.title===todo.title);
        return id;
    }

    const removeToDo = (todo) => {
        let id = findIndex(todo);
        //todos = todos.splice(0,id-1).concat(todos.splice(id+1));
        todos = todos.filter(td => td.title!==todo.title);
    };
    
    const getToDos = () => todos;
    const setToDos = (tds) => {
        todos = tds;
    };

    return {getToDos, setToDos, addToDo,removeToDo};

};

// create the module to store projects
const Projects = (()=>{
    let projects = {};

    const addProject = (title,todos) => {
        projects[title] = todos;
    };

    const deleteProject = (title) => {
        delete projects[title];
    };

    const addRemoveProject = (title,todos) => {
        if (projects.hasOwnProperty(title)) {
            deleteProject(title);
        } else {
            if (title!=='') {
                addProject(title,todos);
            }
        }

    }

    const getProjects = () => projects;
    const setProjects = (ps) => projects=ps;

    return {getProjects,setProjects,addProject,deleteProject,addRemoveProject};

})();





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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./src/render.js");





//const projectHead = document.querySelector('.project-head');
//const projectUL = document.querySelector('.project-ul');

// create the default and completed projects for initial population of the DOM
if (!localStorage.getItem('projects')) {
    _todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.addProject('Completed',(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todos)());
    _todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.addProject('Default',(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todos)());
    _todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.getProjects()['Default'].addToDo((0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)('Default 1','I must do it','2022-08-01','1','notes','checklist'));    
} else {
    (0,_render_js__WEBPACK_IMPORTED_MODULE_2__.getLocalStorage)();
}



// adding some additional content for checking it out
// let todo1 = Todo('Todo 1','I must do it','2022-09-18','3','notes',true);
// let todo2 = Todo('Todo 2','I must do it','2022-07-20','4','notes',false);
// let todo3 = Todo('Todo 3','I must do it','2022-07-25','2','notes',false);
// let todo4 = Todo('Todo 4','I must do it','2022-09-18','5','notes',false);

// let todos = Todos();

// console.log(todo1);

// todos.addToDo(todo1);
// todos.addToDo(todo2);
// todos.addToDo(todo3);

// console.log(todos.getToDos());
// console.log(todos.removeToDo(todo2));
// console.log(todos.getToDos());

// Projects.addProject('Home',todos);
// console.log(Projects.getProjects()['Home'].getToDos());

// todos.addToDo(todo4);
// console.log(Projects.getProjects()['Home'].getToDos());

(0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderSideBar)(_todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects);
(0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();
//renderToDo(todo1);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUN3QjtBQUN5Qjs7O0FBR3ZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkseURBQW1CLGFBQWEsK0NBQUs7QUFDekMsSUFBSSx5REFBbUIsV0FBVywrQ0FBSztBQUN2QyxJQUFJLDBEQUFvQixzQkFBc0IsOENBQUk7QUFDbEQsRUFBRTtBQUNGLElBQUksMkRBQWU7QUFDbkI7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlEQUFhLENBQUMsOENBQVE7QUFDdEIsd0RBQVk7QUFDWixvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDIwMHB4LDMwdncsNDAwcHgpIDcwdnc7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjV2dyA3NXZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggIzM5M0U0NjsgKi9cXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggZ3JheTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgei1pbmRleDogNTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBcXG59XFxuXFxuI3NpZGViYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBREI1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMjIyODMxO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzIyMjgzMTtcXG59XFxuXFxuLnByb2plY3QtaGVhZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBREI1O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkOmhvdmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgK1xcXCI7XFxufVxcblxcblxcbi5wcm9qZWN0LXVsIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLW91dDtcXG59XFxuXFxuXFxuLm5ldy1wcm9qZWN0LCAjYWRkLXJlbW92ZS1wcm9qZWN0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQURCNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMjIyODMxO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4ICAjMjIyODMxO1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6aG92ZXIsICNhZGQtcmVtb3ZlLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ4MzhhO1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6YWN0aXZlLCAjYWRkLXJlbW92ZS1wcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFEQjU7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMjIyODMxO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XFxufVxcblxcbiNhZGQtcmVtb3ZlLXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0NjtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzIyMjgzMTtcXG59XFxuXFxuLnRvZG8tYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjRjBFQkUzLCNFRUVFRUUpO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG4ubmV3LXRvLWRve1xcbiAgICBjb2xvcjogIzAwQURCNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5idG4tZ3JwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXQtYnRuLCAuZGVsZXRlLWJ0biB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5lZGl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDIzMywgMTM5KTtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAxNTAsIDEzOSk7XFxufVxcblxcbi5lZGl0LWJ0bjpob3ZlciwgLmRlbGV0ZS1idG46aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBjb2xvcjogcmdiKDI0MywgMTA0LCAxMDQpO1xcbn1cXG5cXG4ubWVkLXByaW9yaXR5IHtcXG4gICAgY29sb3I6IHJnYigyMDQsIDE1MiwgNTUpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHlEQUF5RDtJQUN6RCxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7UUFDTixlQUFlO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgLyogZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjbGFtcCgyMDBweCwzMHZ3LDQwMHB4KSA3MHZ3OyAqL1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1dncgNzV2dztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4ICMzOTNFNDY7ICovXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGdyYXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHotaW5kZXg6IDU7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG4gICAgXFxufVxcblxcbiNzaWRlYmFyLXRpdGxlIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQURCNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzIyMjgzMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMyMjI4MzE7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuXFxuLnByb2plY3QtaGVhZDpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQURCNTtcXG59XFxuXFxuLnByb2plY3QtaGVhZDpob3Zlcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiICtcXFwiO1xcbn1cXG5cXG5cXG4ucHJvamVjdC11bCB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWF4LWhlaWdodDogMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMXMgZWFzZS1vdXQ7XFxufVxcblxcblxcbi5uZXctcHJvamVjdCwgI2FkZC1yZW1vdmUtcHJvamVjdCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFEQjU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzIyMjgzMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDhweCAgIzIyMjgzMTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmhvdmVyLCAjYWRkLXJlbW92ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0ODM4YTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0OmFjdGl2ZSwgI2FkZC1yZW1vdmUtcHJvamVjdDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBREI1O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMCU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggIzIyMjgzMTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xcbn1cXG5cXG4jYWRkLXJlbW92ZS1wcm9qZWN0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNFNDY7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICMyMjI4MzE7XFxufVxcblxcbi50b2RvLWJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoI0YwRUJFMywjRUVFRUVFKTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi50b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwJSA0MCU7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJyxzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyODMxO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG59XFxuXFxuLm5ldy10by1kb3tcXG4gICAgY29sb3I6ICMwMEFEQjU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4uYnRuLWdycCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5lZGl0LWJ0biwgLmRlbGV0ZS1idG4ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZWRpdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAyMzMsIDEzOSk7XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTUwLCAxMzkpO1xcbn1cXG5cXG4uZWRpdC1idG46aG92ZXIsIC5kZWxldGUtYnRuOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uY29tcGxldGVkIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBjb2xvcjogZ3JlZW47XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgY29sb3I6IHJnYigyNDMsIDEwNCwgMTA0KTtcXG59XFxuXFxuLm1lZC1wcmlvcml0eSB7XFxuICAgIGNvbG9yOiByZ2IoMjA0LCAxNTIsIDU1KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7VG9kbyxUb2RvcyB9IGZyb20gXCIuL3RvZG9cIjtcbmltcG9ydCB7UHJvamVjdHN9IGZyb20gJy4vdG9kby5qcyc7XG5cbi8vIG5ldyBwcm9qZWN0IGJ1dHRvblxuY29uc3QgYnV0dG9ucyA9ICgoKT0+e1xuICAgIGNvbnN0IG5ld1Byb2ogPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKTtcbiAgICBjb25zdCBuZXdQcm9qRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1mb3JtJyk7XG4gICAgY29uc3QgbmV3UHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtuYW1lPVwicHJvamVjdC1uYW1lXCJdYCk7XG5cbiAgICBuZXdQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBuZXdQcm9qRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICBuZXdQcm9qRm9ybS5zdHlsZS5vcGFjaXR5ID0gMC44O1xuICAgIH0pO1xuXG5cbiAgICBjb25zdCBhZGRSZW1vdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1yZW1vdmUtcHJvamVjdCcpO1xuICAgIGFkZFJlbW92ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIG5ld1Byb2pGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgbmV3UHJvakZvcm0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIFxuICAgICAgICBQcm9qZWN0cy5hZGRSZW1vdmVQcm9qZWN0KG5ld1Byb2pOYW1lLnZhbHVlLFRvZG9zKCkpOyBcbiAgICAgICAgbmV3UHJvak5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgXG4gICAgICAgIHJlbmRlclNpZGVCYXIoUHJvamVjdHMpO1xuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICB9KTtcbiAgICAgICAgXG5cbiAgICByZXR1cm4ge25ld1Byb2p9O1xufSkoKTtcblxuXG5cblxuLy8gYW5pbWF0ZSB0aGUgdG8tZG9zXG5mdW5jdGlvbiBleHBhbmRQcm9qZWN0KGV2ZW50KSB7XG4gICAgbGV0IGNoaWxkID0gZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgaWYgKGNoaWxkLnN0eWxlLm1heEhlaWdodCl7XG4gICAgICAgIGNoaWxkLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkLnN0eWxlLm1heEhlaWdodCA9IGNoaWxkLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICB9IFxufVxuXG5sZXQgY2xlYXJDb250ZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAvLyBjbGVhciB0aGUgY29udGVudFxuICAgICB3aGlsZSAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBzaWRlYmFyXG5sZXQgcmVuZGVyU2lkZUJhciA9IGZ1bmN0aW9uKHByb2plY3RzKSB7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xuICAgIGNsZWFyQ29udGVudChzaWRlQmFyKTtcbiAgICBcbiAgICBsZXQgYWxsUHJvamVjdHMgPSBwcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xuICAgIFxuICAgIGZvciAobGV0IHByb2plY3QgaW4gYWxsUHJvamVjdHMpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhhbGxQcm9qZWN0c1twcm9qZWN0XS5nZXRUb0RvcygpKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBET00gZWxlbWVudHNcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaGVhZCcpO1xuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0gYCR7cHJvamVjdH1gO1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGV4cGFuZFByb2plY3QpO1xuXG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdC11bCcpO1xuXG4gICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RdLmdldFRvRG9zKCkuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9MaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0b2RvTGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saScpO1xuXG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgZHVlID0gbmV3IERhdGUodG9kby5kdWVEYXRlKTtcbiAgICAgICAgICAgIGxldCByZW1haW4gPSBwYXJzZUludCgoZHVlIC0gdG9kYXkpLygxMDAwKjYwKjYwKjI0KSwxMCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0PT09J0NvbXBsZXRlZCcpIHtcbiAgICAgICAgICAgICAgICB0b2RvTGkuaW5uZXJIVE1MID0gYCR7dG9kby50aXRsZX1gO1xuICAgICAgICAgICAgICAgIHRvZG9MaS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG9kb0xpLmlubmVySFRNTCA9IGAke3RvZG8udGl0bGV9ICgke3JlbWFpbn0gZGF5cylgO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCh0b2RvLnByaW9yaXR5KT4zIHx8IChyZW1haW48NSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KHRvZG8ucHJpb3JpdHkpPjIgfHwgKHJlbWFpbjwxNSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0xpLmNsYXNzTGlzdC5hZGQoJ21lZC1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG9kb0xpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJlbmRlclRvRG8odG9kbyxwcm9qZWN0LGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQodG9kb0xpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbmV3VG9Eb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBuZXdUb0RvQnRuLmNsYXNzTGlzdC5hZGQoJ25ldy10by1kbycpO1xuICAgICAgICBuZXdUb0RvQnRuLnRleHRDb250ZW50ID0gXCJBZGQuLi5cIjtcbiAgICAgICAgbmV3VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBuZXdUb2RvID0gVG9kbygnJywnJywnJywnMCcsJycsZmFsc2UpO1xuICAgICAgICAgICAgcHJvamVjdHMuZ2V0UHJvamVjdHMoKVtwcm9qZWN0XS5hZGRUb0RvKG5ld1RvZG8pO1xuICAgICAgICAgICAgcmVuZGVyVG9EbyhuZXdUb2RvLHByb2plY3QsYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgcmVuZGVyU2lkZUJhcihwcm9qZWN0cyk7XG4gICAgICAgIH0pO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChuZXdUb0RvQnRuKTtcblxuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQodWwpO1xuXG5cbiAgICB9XG59O1xuXG5jb25zdCByZW5kZXJGb290ZXIgPSAoKT0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBDb3B5cmlnaHQgQmlnIEQgLSAke2QuZ2V0RnVsbFllYXIoKX1gO1xufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgdG9kb1xubGV0IHJlbmRlclRvRG8gPSBmdW5jdGlvbih0b2RvLHByb2plY3QsYWxsUHJvamVjdHMpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdGl0bGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby10aXRsZScpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRpdGxlXCJdJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJkZXNjcmlwdGlvblwiXScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZHVlLWRhdGVcIl0nKTtcbiAgICBjb25zdCB0aW1lTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aW1lLWxlZnQnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpO1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJjb21wbGV0ZVwiXScpO1xuXG4gICAgdGl0bGVIZWFkZXIuaW5uZXJIVE1MID0gYCR7dG9kby50aXRsZX1gO1xuICAgIHRpdGxlLnZhbHVlID0gdG9kby50aXRsZTtcbiAgICBkZXNjLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgIGxldCBkdWUgPSBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpO1xuICAgIHRpbWVMZWZ0LmlubmVySFRNTCA9IHBhcnNlSW50KChkdWUgLSB0b2RheSkvKDEwMDAqNjAqNjAqMjQpLDEwKTtcbiAgICBwcmlvcml0eS52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG4gICAgY29tcGxldGVkLmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlO1xuXG5cbiAgICAvLyByZW1vdmUgYW55IGV4aXN0aW5nIGJ1dHRvbnNcbiAgICBjb25zdCBidG5HcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWdycCcpO1xuICAgIGNsZWFyQ29udGVudChidG5HcnApO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBlZGl0IGFuZCBkZWxldGUgYnV0dG9uXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICBlZGl0QnRuLmlubmVySFRNTCA9ICdFZGl0JztcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnRGVsZXRlJztcblxuICAgIGJ0bkdycC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICBidG5HcnAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgdG9kby50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICAgICAgICB0b2RvLmRlc2NyaXB0aW9uID0gZGVzYy52YWx1ZTtcbiAgICAgICAgdG9kby5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xuICAgICAgICB0b2RvLmNvbXBsZXRlID0gY29tcGxldGVkLmNoZWNrZWQ7XG5cbiAgICAgICAgaWYgKHRvZG8uY29tcGxldGUpIHtcbiAgICAgICAgICAgIGFsbFByb2plY3RzWydDb21wbGV0ZWQnXS5hZGRUb0RvKHRvZG8pO1xuICAgICAgICAgICAgYWxsUHJvamVjdHNbcHJvamVjdF0ucmVtb3ZlVG9Ebyh0b2RvKTsgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXJTaWRlQmFyKFByb2plY3RzKTtcbiAgICAgICAgcmVuZGVyVG9Ebyh0b2RvLHByb2plY3QsYWxsUHJvamVjdHMpO1xuICAgICAgICBzZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICB9KTtcblxuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0XS5yZW1vdmVUb0RvKHRvZG8pO1xuICAgICAgICByZW5kZXJTaWRlQmFyKFByb2plY3RzKTtcbiAgICAgICAgc2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgfSk7XG5cblxufTtcblxuXG4vLyBsb2NhbCBzdG9yYWdlIHJlbmRlcmluZ1xuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlKCkge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcblxuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdD0+e1xuICAgICAgICAvLyBnZXQgdGhlIHRvZG9zIGxpc3RcbiAgICAgICAgbGV0IHRvZG9zID0gVG9kb3MoKTtcbiAgICAgICAgbGV0IHNhdmVkVG9kb3MgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0KSk7XG4gICAgICAgIHRvZG9zLnNldFRvRG9zKHNhdmVkVG9kb3MpO1xuICAgICAgICBQcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QsdG9kb3MpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbGV0IGFsbFByb2plY3RzID0gUHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcbiAgICBjb25zb2xlLmxvZyhhbGxQcm9qZWN0cyk7XG4gICAgbGV0IHByb2plY3RMaXN0ID0gW107XG4gICAgZm9yIChsZXQgcHJvamVjdCBpbiBhbGxQcm9qZWN0cykgIHtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgbGV0IHRvU2F2ZSA9IEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzW3Byb2plY3RdLmdldFRvRG9zKCkpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdCwgdG9TYXZlKTsgICAgXG4gICAgfTtcblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG59XG5cbmV4cG9ydCB7cmVuZGVyU2lkZUJhcixyZW5kZXJGb290ZXIscmVuZGVyVG9EbyxnZXRMb2NhbFN0b3JhZ2Usc2V0TG9jYWxTdG9yYWdlLGJ1dHRvbnN9OyIsImxldCBUb2RvID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMsY29tcGxldGUpID0+IHtcblxuICAgIC8vY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICAvL2NvbnN0IHNldFRpdGxlID0gKHN0cikgPT4gdGl0bGU7XG5cbiAgICBjb25zdCBwcmludERldGFpbHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrICR7dGl0bGV9IGlzIGR1ZSBvbiAke2R1ZURhdGV9YCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxub3Rlcyxjb21wbGV0ZSxwcmludERldGFpbHN9O1xufTtcblxubGV0IFRvZG9zID0gKCkgPT4ge1xuICAgIGxldCB0b2RvcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVG9EbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIFxuICAgIGNvbnN0IGZpbmRJbmRleCA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IHRvZG9zLmZpbHRlcih0ZCA9PiB0ZC50aXRsZT09PXRvZG8udGl0bGUpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVG9EbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IGZpbmRJbmRleCh0b2RvKTtcbiAgICAgICAgLy90b2RvcyA9IHRvZG9zLnNwbGljZSgwLGlkLTEpLmNvbmNhdCh0b2Rvcy5zcGxpY2UoaWQrMSkpO1xuICAgICAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcih0ZCA9PiB0ZC50aXRsZSE9PXRvZG8udGl0bGUpO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgZ2V0VG9Eb3MgPSAoKSA9PiB0b2RvcztcbiAgICBjb25zdCBzZXRUb0RvcyA9ICh0ZHMpID0+IHtcbiAgICAgICAgdG9kb3MgPSB0ZHM7XG4gICAgfTtcblxuICAgIHJldHVybiB7Z2V0VG9Eb3MsIHNldFRvRG9zLCBhZGRUb0RvLHJlbW92ZVRvRG99O1xuXG59O1xuXG4vLyBjcmVhdGUgdGhlIG1vZHVsZSB0byBzdG9yZSBwcm9qZWN0c1xuZXhwb3J0IGNvbnN0IFByb2plY3RzID0gKCgpPT57XG4gICAgbGV0IHByb2plY3RzID0ge307XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHRpdGxlLHRvZG9zKSA9PiB7XG4gICAgICAgIHByb2plY3RzW3RpdGxlXSA9IHRvZG9zO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0c1t0aXRsZV07XG4gICAgfTtcblxuICAgIGNvbnN0IGFkZFJlbW92ZVByb2plY3QgPSAodGl0bGUsdG9kb3MpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RzLmhhc093blByb3BlcnR5KHRpdGxlKSkge1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdCh0aXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGl0bGUhPT0nJykge1xuICAgICAgICAgICAgICAgIGFkZFByb2plY3QodGl0bGUsdG9kb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHByb2plY3RzO1xuICAgIGNvbnN0IHNldFByb2plY3RzID0gKHBzKSA9PiBwcm9qZWN0cz1wcztcblxuICAgIHJldHVybiB7Z2V0UHJvamVjdHMsc2V0UHJvamVjdHMsYWRkUHJvamVjdCxkZWxldGVQcm9qZWN0LGFkZFJlbW92ZVByb2plY3R9O1xuXG59KSgpO1xuXG5cbmV4cG9ydCB7VG9kbyxUb2Rvc307XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge1RvZG8sVG9kb3MsUHJvamVjdHN9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQge3JlbmRlclNpZGVCYXIscmVuZGVyRm9vdGVyLGdldExvY2FsU3RvcmFnZX0gZnJvbSAnLi9yZW5kZXIuanMnO1xuXG5cbi8vY29uc3QgcHJvamVjdEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkJyk7XG4vL2NvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXVsJyk7XG5cbi8vIGNyZWF0ZSB0aGUgZGVmYXVsdCBhbmQgY29tcGxldGVkIHByb2plY3RzIGZvciBpbml0aWFsIHBvcHVsYXRpb24gb2YgdGhlIERPTVxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSkge1xuICAgIFByb2plY3RzLmFkZFByb2plY3QoJ0NvbXBsZXRlZCcsVG9kb3MoKSk7XG4gICAgUHJvamVjdHMuYWRkUHJvamVjdCgnRGVmYXVsdCcsVG9kb3MoKSk7XG4gICAgUHJvamVjdHMuZ2V0UHJvamVjdHMoKVsnRGVmYXVsdCddLmFkZFRvRG8oVG9kbygnRGVmYXVsdCAxJywnSSBtdXN0IGRvIGl0JywnMjAyMi0wOC0wMScsJzEnLCdub3RlcycsJ2NoZWNrbGlzdCcpKTsgICAgXG59IGVsc2Uge1xuICAgIGdldExvY2FsU3RvcmFnZSgpO1xufVxuXG5cblxuLy8gYWRkaW5nIHNvbWUgYWRkaXRpb25hbCBjb250ZW50IGZvciBjaGVja2luZyBpdCBvdXRcbi8vIGxldCB0b2RvMSA9IFRvZG8oJ1RvZG8gMScsJ0kgbXVzdCBkbyBpdCcsJzIwMjItMDktMTgnLCczJywnbm90ZXMnLHRydWUpO1xuLy8gbGV0IHRvZG8yID0gVG9kbygnVG9kbyAyJywnSSBtdXN0IGRvIGl0JywnMjAyMi0wNy0yMCcsJzQnLCdub3RlcycsZmFsc2UpO1xuLy8gbGV0IHRvZG8zID0gVG9kbygnVG9kbyAzJywnSSBtdXN0IGRvIGl0JywnMjAyMi0wNy0yNScsJzInLCdub3RlcycsZmFsc2UpO1xuLy8gbGV0IHRvZG80ID0gVG9kbygnVG9kbyA0JywnSSBtdXN0IGRvIGl0JywnMjAyMi0wOS0xOCcsJzUnLCdub3RlcycsZmFsc2UpO1xuXG4vLyBsZXQgdG9kb3MgPSBUb2RvcygpO1xuXG4vLyBjb25zb2xlLmxvZyh0b2RvMSk7XG5cbi8vIHRvZG9zLmFkZFRvRG8odG9kbzEpO1xuLy8gdG9kb3MuYWRkVG9Ebyh0b2RvMik7XG4vLyB0b2Rvcy5hZGRUb0RvKHRvZG8zKTtcblxuLy8gY29uc29sZS5sb2codG9kb3MuZ2V0VG9Eb3MoKSk7XG4vLyBjb25zb2xlLmxvZyh0b2Rvcy5yZW1vdmVUb0RvKHRvZG8yKSk7XG4vLyBjb25zb2xlLmxvZyh0b2Rvcy5nZXRUb0RvcygpKTtcblxuLy8gUHJvamVjdHMuYWRkUHJvamVjdCgnSG9tZScsdG9kb3MpO1xuLy8gY29uc29sZS5sb2coUHJvamVjdHMuZ2V0UHJvamVjdHMoKVsnSG9tZSddLmdldFRvRG9zKCkpO1xuXG4vLyB0b2Rvcy5hZGRUb0RvKHRvZG80KTtcbi8vIGNvbnNvbGUubG9nKFByb2plY3RzLmdldFByb2plY3RzKClbJ0hvbWUnXS5nZXRUb0RvcygpKTtcblxucmVuZGVyU2lkZUJhcihQcm9qZWN0cyk7XG5yZW5kZXJGb290ZXIoKTtcbi8vcmVuZGVyVG9Ebyh0b2RvMSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9