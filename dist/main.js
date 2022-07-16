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
/* harmony export */   "renderFooter": () => (/* binding */ renderFooter),
/* harmony export */   "renderSideBar": () => (/* binding */ renderSideBar),
/* harmony export */   "renderToDo": () => (/* binding */ renderToDo)
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
    });


    deleteBtn.addEventListener('click',function(){
        allProjects[project].removeToDo(todo);
        renderSideBar(_todo__WEBPACK_IMPORTED_MODULE_0__.Projects);
    });


};



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

    return {getToDos, addToDo,removeToDo};

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

    return {getProjects,addProject,deleteProject,addRemoveProject};

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
_todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.addProject('Completed',(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todos)());
_todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.addProject('Default',(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todos)());
_todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.getProjects()['Default'].addToDo((0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)('Default 1','I must do it','2022-08-01','1','notes','checklist'));


// adding some additional content for checking it out
let todo1 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)('Todo 1','I must do it','2022-09-18','3','notes',true);
let todo2 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)('Todo 2','I must do it','2022-07-20','4','notes',false);
let todo3 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)('Todo 3','I must do it','2022-07-25','2','notes',false);
let todo4 = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)('Todo 4','I must do it','2022-09-18','5','notes',false);

let todos = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todos)();

console.log(todo1);

todos.addToDo(todo1);
todos.addToDo(todo2);
todos.addToDo(todo3);

console.log(todos.getToDos());
console.log(todos.removeToDo(todo2));
console.log(todos.getToDos());

_todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.addProject('Home',todos);
console.log(_todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.getProjects()['Home'].getToDos());

todos.addToDo(todo4);
console.log(_todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.getProjects()['Home'].getToDos());

(0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderSideBar)(_todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects);
(0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderFooter)();
//renderToDo(todo1);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSw4Q0FBSTtBQUNoQixZQUFZLDhDQUFJOztBQUVoQixZQUFZLCtDQUFLOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlEQUFtQjtBQUNuQixZQUFZLDBEQUFvQjs7QUFFaEM7QUFDQSxZQUFZLDBEQUFvQjs7QUFFaEMseURBQWEsQ0FBQyw4Q0FBUTtBQUN0Qix3REFBWTtBQUNaLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAwcHgsMzB2dyw0MDBweCkgNzB2dzsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXZ3IDc1dnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCAjMzkzRTQ2OyAqL1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIFxcbn1cXG5cXG4jc2lkZWJhci10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFEQjU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMyMjI4MzE7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMjIyODMxO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQ6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFEQjU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiArXFxcIjtcXG59XFxuXFxuXFxuLnByb2plY3QtdWwge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjFzIGVhc2Utb3V0O1xcbn1cXG5cXG5cXG4ubmV3LXByb2plY3QsICNhZGQtcmVtb3ZlLXByb2plY3Qge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBREI1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogc29saWQgMnB4ICMyMjI4MzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggICMyMjI4MzE7XFxufVxcblxcbi5uZXctcHJvamVjdDpob3ZlciwgI2FkZC1yZW1vdmUtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDgzOGE7XFxufVxcblxcbi5uZXctcHJvamVjdDphY3RpdmUsICNhZGQtcmVtb3ZlLXByb2plY3Q6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQURCNTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMyMjI4MzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcXG59XFxuXFxuI2FkZC1yZW1vdmUtcHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQ2O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjMjIyODMxO1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCNGMEVCRTMsI0VFRUVFRSk7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcblxcbi5uZXctdG8tZG97XFxuICAgIGNvbG9yOiAjMDBBREI1O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmJ0bi1ncnAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZWRpdC1idG4sIC5kZWxldGUtYnRuIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmVkaXQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzOSwgMjMzLCAxMzkpO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDE1MCwgMTM5KTtcXG59XFxuXFxuLmVkaXQtYnRuOmhvdmVyLCAuZGVsZXRlLWJ0bjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICAgIGNvbG9yOiByZ2IoMjQzLCAxMDQsIDEwNCk7XFxufVxcblxcbi5tZWQtcHJpb3JpdHkge1xcbiAgICBjb2xvcjogcmdiKDIwNCwgMTUyLCA1NSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGlDQUFpQztBQUNyQzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IseURBQXlEO0lBQ3pELGdDQUFnQztJQUNoQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9DQUFvQztBQUN4Qzs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtRQUNOLGVBQWU7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNsYW1wKDIwMHB4LDMwdncsNDAwcHgpIDcwdnc7ICovXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjV2dyA3NXZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggIzM5M0U0NjsgKi9cXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggZ3JheTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgei1pbmRleDogNTtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBcXG59XFxuXFxuI3NpZGViYXItdGl0bGUge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBREI1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCAjMjIyODMxO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzIyMjgzMTtcXG59XFxuXFxuLnByb2plY3QtaGVhZCB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBREI1O1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkOmhvdmVyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCIgK1xcXCI7XFxufVxcblxcblxcbi5wcm9qZWN0LXVsIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBtYXgtaGVpZ2h0OiAwcHg7XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4xcyBlYXNlLW91dDtcXG59XFxuXFxuXFxuLm5ldy1wcm9qZWN0LCAjYWRkLXJlbW92ZS1wcm9qZWN0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQURCNTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMjIyODMxO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4ICAjMjIyODMxO1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6aG92ZXIsICNhZGQtcmVtb3ZlLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ4MzhhO1xcbn1cXG5cXG4ubmV3LXByb2plY3Q6YWN0aXZlLCAjYWRkLXJlbW92ZS1wcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFEQjU7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAjMjIyODMxO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHM7XFxufVxcblxcbiNhZGQtcmVtb3ZlLXByb2plY3Qge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5M0U0NjtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHggIzIyMjgzMTtcXG59XFxuXFxuLnRvZG8tYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgjRjBFQkUzLCNFRUVFRUUpO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDQwJTtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG5pbnB1dCwgdGV4dGFyZWEge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI4MzE7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG5cXG4ubmV3LXRvLWRve1xcbiAgICBjb2xvcjogIzAwQURCNTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5idG4tZ3JwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXQtYnRuLCAuZGVsZXRlLWJ0biB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5lZGl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzksIDIzMywgMTM5KTtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAxNTAsIDEzOSk7XFxufVxcblxcbi5lZGl0LWJ0bjpob3ZlciwgLmRlbGV0ZS1idG46aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5jb21wbGV0ZWQge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICBjb2xvcjogcmdiKDI0MywgMTA0LCAxMDQpO1xcbn1cXG5cXG4ubWVkLXByaW9yaXR5IHtcXG4gICAgY29sb3I6IHJnYigyMDQsIDE1MiwgNTUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtUb2RvLFRvZG9zIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHtQcm9qZWN0c30gZnJvbSAnLi90b2RvLmpzJztcblxuLy8gbmV3IHByb2plY3QgYnV0dG9uXG5jb25zdCBidXR0b25zID0gKCgpPT57XG4gICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuICAgIGNvbnN0IG5ld1Byb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBuZXdQcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJwcm9qZWN0LW5hbWVcIl1gKTtcblxuICAgIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG5ld1Byb2pGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIG5ld1Byb2pGb3JtLnN0eWxlLm9wYWNpdHkgPSAwLjg7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGFkZFJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXJlbW92ZS1wcm9qZWN0Jyk7XG4gICAgYWRkUmVtb3ZlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgbmV3UHJvakZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBuZXdQcm9qRm9ybS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgXG4gICAgICAgIFByb2plY3RzLmFkZFJlbW92ZVByb2plY3QobmV3UHJvak5hbWUudmFsdWUsVG9kb3MoKSk7IFxuICAgICAgICBuZXdQcm9qTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBcbiAgICAgICAgcmVuZGVyU2lkZUJhcihQcm9qZWN0cyk7XG4gICAgfSk7XG4gICAgICAgIFxuXG4gICAgcmV0dXJuIHtuZXdQcm9qfTtcbn0pKCk7XG5cblxuXG5cbi8vIGFuaW1hdGUgdGhlIHRvLWRvc1xuZnVuY3Rpb24gZXhwYW5kUHJvamVjdChldmVudCkge1xuICAgIGxldCBjaGlsZCA9IGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgIGlmIChjaGlsZC5zdHlsZS5tYXhIZWlnaHQpe1xuICAgICAgICBjaGlsZC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5zdHlsZS5tYXhIZWlnaHQgPSBjaGlsZC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgfSBcbn1cblxubGV0IGNsZWFyQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgLy8gY2xlYXIgdGhlIGNvbnRlbnRcbiAgICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgc2lkZWJhclxubGV0IHJlbmRlclNpZGVCYXIgPSBmdW5jdGlvbihwcm9qZWN0cykge1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBjbGVhckNvbnRlbnQoc2lkZUJhcik7XG4gICAgXG4gICAgbGV0IGFsbFByb2plY3RzID0gcHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcbiAgICBcbiAgICBmb3IgKGxldCBwcm9qZWN0IGluIGFsbFByb2plY3RzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYWxsUHJvamVjdHNbcHJvamVjdF0uZ2V0VG9Eb3MoKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgRE9NIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWQnKTtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9IGAke3Byb2plY3R9YDtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxleHBhbmRQcm9qZWN0KTtcblxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdWwnKTtcblxuICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0XS5nZXRUb0RvcygpLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdG9kb0xpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGknKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgbGV0IGR1ZSA9IG5ldyBEYXRlKHRvZG8uZHVlRGF0ZSk7XG4gICAgICAgICAgICBsZXQgcmVtYWluID0gcGFyc2VJbnQoKGR1ZSAtIHRvZGF5KS8oMTAwMCo2MCo2MCoyNCksMTApO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdD09PSdDb21wbGV0ZWQnKSB7XG4gICAgICAgICAgICAgICAgdG9kb0xpLmlubmVySFRNTCA9IGAke3RvZG8udGl0bGV9YDtcbiAgICAgICAgICAgICAgICB0b2RvTGkuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRvZG9MaS5pbm5lckhUTUwgPSBgJHt0b2RvLnRpdGxlfSAoJHtyZW1haW59IGRheXMpYDtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQodG9kby5wcmlvcml0eSk+MyB8fCAocmVtYWluPDUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaS5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludCh0b2RvLnByaW9yaXR5KT4yIHx8IChyZW1haW48MTUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9MaS5jbGFzc0xpc3QuYWRkKCdtZWQtcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvZG9MaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZW5kZXJUb0RvKHRvZG8scHJvamVjdCxhbGxQcm9qZWN0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKHRvZG9MaSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG5ld1RvRG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmV3VG9Eb0J0bi5jbGFzc0xpc3QuYWRkKCduZXctdG8tZG8nKTtcbiAgICAgICAgbmV3VG9Eb0J0bi50ZXh0Q29udGVudCA9IFwiQWRkLi4uXCI7XG4gICAgICAgIG5ld1RvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBsZXQgbmV3VG9kbyA9IFRvZG8oJycsJycsJycsJzAnLCcnLGZhbHNlKTtcbiAgICAgICAgICAgIHByb2plY3RzLmdldFByb2plY3RzKClbcHJvamVjdF0uYWRkVG9EbyhuZXdUb2RvKTtcbiAgICAgICAgICAgIHJlbmRlclRvRG8obmV3VG9kbyxwcm9qZWN0LGFsbFByb2plY3RzKTtcbiAgICAgICAgICAgIHJlbmRlclNpZGVCYXIocHJvamVjdHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobmV3VG9Eb0J0bik7XG5cbiAgICAgICAgc2lkZUJhci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHVsKTtcblxuXG4gICAgfVxufTtcblxuY29uc3QgcmVuZGVyRm9vdGVyID0gKCk9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgQ29weXJpZ2h0IEJpZyBEIC0gJHtkLmdldEZ1bGxZZWFyKCl9YDtcbn1cblxuXG4vLyBmdW5jdGlvbiB0byByZW5kZXIgdGhlIHRvZG9cbmxldCByZW5kZXJUb0RvID0gZnVuY3Rpb24odG9kbyxwcm9qZWN0LGFsbFByb2plY3RzKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRpdGxlSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tdGl0bGUnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aXRsZVwiXScpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImR1ZS1kYXRlXCJdJyk7XG4gICAgY29uc3QgdGltZUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZS1sZWZ0Jyk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl0nKTtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiY29tcGxldGVcIl0nKTtcblxuICAgIHRpdGxlSGVhZGVyLmlubmVySFRNTCA9IGAke3RvZG8udGl0bGV9YDtcbiAgICB0aXRsZS52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgZGVzYy52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZS52YWx1ZSA9IHRvZG8uZHVlRGF0ZTtcbiAgICBsZXQgZHVlID0gbmV3IERhdGUodG9kby5kdWVEYXRlKTtcbiAgICB0aW1lTGVmdC5pbm5lckhUTUwgPSBwYXJzZUludCgoZHVlIC0gdG9kYXkpLygxMDAwKjYwKjYwKjI0KSwxMCk7XG4gICAgcHJpb3JpdHkudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuICAgIGNvbXBsZXRlZC5jaGVja2VkID0gdG9kby5jb21wbGV0ZTtcblxuXG4gICAgLy8gcmVtb3ZlIGFueSBleGlzdGluZyBidXR0b25zXG4gICAgY29uc3QgYnRuR3JwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1ncnAnKTtcbiAgICBjbGVhckNvbnRlbnQoYnRuR3JwKTtcblxuICAgIC8vIGNyZWF0ZSB0aGUgZWRpdCBhbmQgZGVsZXRlIGJ1dHRvblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXQtYnRuJyk7XG4gICAgZWRpdEJ0bi5pbm5lckhUTUwgPSAnRWRpdCc7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJ0RlbGV0ZSc7XG5cbiAgICBidG5HcnAuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgYnRuR3JwLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICBjb25zb2xlLmxvZyh0b2RvKTtcblxuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgIHRvZG8udGl0bGUgPSB0aXRsZS52YWx1ZTtcbiAgICAgICAgdG9kby5kZXNjcmlwdGlvbiA9IGRlc2MudmFsdWU7XG4gICAgICAgIHRvZG8uZHVlRGF0ZSA9IGR1ZURhdGUudmFsdWU7XG4gICAgICAgIHRvZG8ucHJpb3JpdHkgPSBwcmlvcml0eS52YWx1ZTtcbiAgICAgICAgdG9kby5jb21wbGV0ZSA9IGNvbXBsZXRlZC5jaGVja2VkO1xuXG4gICAgICAgIGlmICh0b2RvLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICBhbGxQcm9qZWN0c1snQ29tcGxldGVkJ10uYWRkVG9Ebyh0b2RvKTtcbiAgICAgICAgICAgIGFsbFByb2plY3RzW3Byb2plY3RdLnJlbW92ZVRvRG8odG9kbyk7ICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyU2lkZUJhcihQcm9qZWN0cyk7XG4gICAgICAgIHJlbmRlclRvRG8odG9kbyxwcm9qZWN0LGFsbFByb2plY3RzKTtcbiAgICB9KTtcblxuXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0XS5yZW1vdmVUb0RvKHRvZG8pO1xuICAgICAgICByZW5kZXJTaWRlQmFyKFByb2plY3RzKTtcbiAgICB9KTtcblxuXG59O1xuXG5leHBvcnQge3JlbmRlclNpZGVCYXIscmVuZGVyRm9vdGVyLHJlbmRlclRvRG8sYnV0dG9uc307IiwibGV0IFRvZG8gPSAodGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxub3Rlcyxjb21wbGV0ZSkgPT4ge1xuXG4gICAgLy9jb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuICAgIC8vY29uc3Qgc2V0VGl0bGUgPSAoc3RyKSA9PiB0aXRsZTtcblxuICAgIGNvbnN0IHByaW50RGV0YWlscyA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYFRhc2sgJHt0aXRsZX0gaXMgZHVlIG9uICR7ZHVlRGF0ZX1gKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LG5vdGVzLGNvbXBsZXRlLHByaW50RGV0YWlsc307XG59O1xuXG5sZXQgVG9kb3MgPSAoKSA9PiB7XG4gICAgbGV0IHRvZG9zID0gW107XG5cbiAgICBjb25zdCBhZGRUb0RvID0gKHRvZG8pID0+IHRvZG9zLnB1c2godG9kbyk7XG4gICAgXG4gICAgY29uc3QgZmluZEluZGV4ID0gKHRvZG8pID0+IHtcbiAgICAgICAgbGV0IGlkID0gdG9kb3MuZmlsdGVyKHRkID0+IHRkLnRpdGxlPT09dG9kby50aXRsZSk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUb0RvID0gKHRvZG8pID0+IHtcbiAgICAgICAgbGV0IGlkID0gZmluZEluZGV4KHRvZG8pO1xuICAgICAgICAvL3RvZG9zID0gdG9kb3Muc3BsaWNlKDAsaWQtMSkuY29uY2F0KHRvZG9zLnNwbGljZShpZCsxKSk7XG4gICAgICAgIHRvZG9zID0gdG9kb3MuZmlsdGVyKHRkID0+IHRkLnRpdGxlIT09dG9kby50aXRsZSk7XG4gICAgfTtcbiAgICBjb25zdCBnZXRUb0RvcyA9ICgpID0+IHRvZG9zO1xuXG4gICAgcmV0dXJuIHtnZXRUb0RvcywgYWRkVG9EbyxyZW1vdmVUb0RvfTtcblxufTtcblxuLy8gY3JlYXRlIHRoZSBtb2R1bGUgdG8gc3RvcmUgcHJvamVjdHNcbmV4cG9ydCBjb25zdCBQcm9qZWN0cyA9ICgoKT0+e1xuICAgIGxldCBwcm9qZWN0cyA9IHt9O1xuXG4gICAgY29uc3QgYWRkUHJvamVjdCA9ICh0aXRsZSx0b2RvcykgPT4ge1xuICAgICAgICBwcm9qZWN0c1t0aXRsZV0gPSB0b2RvcztcbiAgICB9O1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdCA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBkZWxldGUgcHJvamVjdHNbdGl0bGVdO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGRSZW1vdmVQcm9qZWN0ID0gKHRpdGxlLHRvZG9zKSA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eSh0aXRsZSkpIHtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QodGl0bGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRpdGxlIT09JycpIHtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0KHRpdGxlLHRvZG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiBwcm9qZWN0cztcblxuICAgIHJldHVybiB7Z2V0UHJvamVjdHMsYWRkUHJvamVjdCxkZWxldGVQcm9qZWN0LGFkZFJlbW92ZVByb2plY3R9O1xuXG59KSgpO1xuXG5cbmV4cG9ydCB7VG9kbyxUb2Rvc307XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge1RvZG8sVG9kb3MsUHJvamVjdHN9IGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQge3JlbmRlclNpZGVCYXIscmVuZGVyRm9vdGVyLCByZW5kZXJUb0RvfSBmcm9tICcuL3JlbmRlci5qcyc7XG5cblxuLy9jb25zdCBwcm9qZWN0SGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWQnKTtcbi8vY29uc3QgcHJvamVjdFVMID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdWwnKTtcblxuLy8gY3JlYXRlIHRoZSBkZWZhdWx0IGFuZCBjb21wbGV0ZWQgcHJvamVjdHMgZm9yIGluaXRpYWwgcG9wdWxhdGlvbiBvZiB0aGUgRE9NXG5Qcm9qZWN0cy5hZGRQcm9qZWN0KCdDb21wbGV0ZWQnLFRvZG9zKCkpO1xuUHJvamVjdHMuYWRkUHJvamVjdCgnRGVmYXVsdCcsVG9kb3MoKSk7XG5Qcm9qZWN0cy5nZXRQcm9qZWN0cygpWydEZWZhdWx0J10uYWRkVG9EbyhUb2RvKCdEZWZhdWx0IDEnLCdJIG11c3QgZG8gaXQnLCcyMDIyLTA4LTAxJywnMScsJ25vdGVzJywnY2hlY2tsaXN0JykpO1xuXG5cbi8vIGFkZGluZyBzb21lIGFkZGl0aW9uYWwgY29udGVudCBmb3IgY2hlY2tpbmcgaXQgb3V0XG5sZXQgdG9kbzEgPSBUb2RvKCdUb2RvIDEnLCdJIG11c3QgZG8gaXQnLCcyMDIyLTA5LTE4JywnMycsJ25vdGVzJyx0cnVlKTtcbmxldCB0b2RvMiA9IFRvZG8oJ1RvZG8gMicsJ0kgbXVzdCBkbyBpdCcsJzIwMjItMDctMjAnLCc0Jywnbm90ZXMnLGZhbHNlKTtcbmxldCB0b2RvMyA9IFRvZG8oJ1RvZG8gMycsJ0kgbXVzdCBkbyBpdCcsJzIwMjItMDctMjUnLCcyJywnbm90ZXMnLGZhbHNlKTtcbmxldCB0b2RvNCA9IFRvZG8oJ1RvZG8gNCcsJ0kgbXVzdCBkbyBpdCcsJzIwMjItMDktMTgnLCc1Jywnbm90ZXMnLGZhbHNlKTtcblxubGV0IHRvZG9zID0gVG9kb3MoKTtcblxuY29uc29sZS5sb2codG9kbzEpO1xuXG50b2Rvcy5hZGRUb0RvKHRvZG8xKTtcbnRvZG9zLmFkZFRvRG8odG9kbzIpO1xudG9kb3MuYWRkVG9Ebyh0b2RvMyk7XG5cbmNvbnNvbGUubG9nKHRvZG9zLmdldFRvRG9zKCkpO1xuY29uc29sZS5sb2codG9kb3MucmVtb3ZlVG9Ebyh0b2RvMikpO1xuY29uc29sZS5sb2codG9kb3MuZ2V0VG9Eb3MoKSk7XG5cblByb2plY3RzLmFkZFByb2plY3QoJ0hvbWUnLHRvZG9zKTtcbmNvbnNvbGUubG9nKFByb2plY3RzLmdldFByb2plY3RzKClbJ0hvbWUnXS5nZXRUb0RvcygpKTtcblxudG9kb3MuYWRkVG9Ebyh0b2RvNCk7XG5jb25zb2xlLmxvZyhQcm9qZWN0cy5nZXRQcm9qZWN0cygpWydIb21lJ10uZ2V0VG9Eb3MoKSk7XG5cbnJlbmRlclNpZGVCYXIoUHJvamVjdHMpO1xucmVuZGVyRm9vdGVyKCk7XG4vL3JlbmRlclRvRG8odG9kbzEpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==