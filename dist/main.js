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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0px;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n.container {\n    display: grid;\n    /* grid-template-columns: clamp(200px,30vw,400px) 70vw; */\n    grid-template-columns: 25vw 75vw;\n    grid-template-rows: auto;\n}\n\n.sidebar {\n    background-color: #EEEEEE;\n    height: 100vh;\n    /* border: solid 1px #393E46; */\n    box-shadow: 1px 1px 5px gray;\n    display: flex;\n    flex-direction: column;\n    z-index: 5;\n    cursor: grab;\n    \n}\n\n#sidebar-title {\n    font-weight: 600;\n    background-color: #00ADB5;\n    color: white;\n    margin: 0px;\n    padding: 10px;\n    font-size: 2rem;\n    text-shadow: 1px 1px 1px #222831;\n    border-bottom: solid 1px #222831;\n}\n\n.project-head {\n    padding-left: 10px;\n    margin-bottom: 0px;\n}\n\n.project-head:hover {\n    color: white;\n    background-color: #00ADB5;\n}\n\n.project-head:hover::after {\n    content: \" +\";\n}\n\n\n.project-ul {\n    margin-top: 5px;\n    overflow: hidden;\n    max-height: 0px;\n    transition: max-height 0.1s ease-out;\n}\n\n\n.new-project, #add-remove-project {\n    align-self: center;\n    font-size: 1.5rem;\n    background-color: #00ADB5;\n    color: white;\n    border: solid 2px #222831;\n    border-radius: 10px;\n    padding: 5px;\n    box-shadow: 1px 1px 8px  #222831;\n}\n\n.new-project:hover, #add-remove-project:hover {\n    background-color: #04838a;\n}\n\n.new-project:active, #add-remove-project:active {\n    background-color: #00ADB5;\n}\n\n.new-project-form {\n    position: absolute;\n    top: 20%;\n    left: 40%;\n    background-color: #EEEEEE;\n    box-shadow: 1px 1px 5px #222831;\n    border-radius: 10%;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.4s;\n}\n\n#add-remove-project {\n    font-size: 1rem;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    \n}\n\n.todo-title {\n    background-color: #393E46;\n    height: 20vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 2rem;\n    font-family: 'Lato', sans-serif;\n    font-weight: 600;\n    border-bottom: solid 2px #222831;\n}\n\n.todo-body {\n    background-image: radial-gradient(#F0EBE3,#EEEEEE);\n    flex-grow: 1;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    font-size: 1.5rem;\n    flex-wrap: wrap;\n}\n\n.todo-form {\n    display: grid;\n    grid-template-columns: 40% 40%;\n    gap: 15px;\n}\n\ninput, textarea {\n    font-family: 'Lato',sans-serif;\n    font-size: 1rem;\n}\n\n.footer {\n    background-color: #222831;\n    color: white;\n    text-align: center;\n    padding: 15px;\n}\n\nlabel {\n    display: block;\n    grid-column: 1/2;\n}\n\n.new-to-do{\n    color: #00ADB5;\n}\n\n.btn-grp {\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n}\n\n.edit-btn, .delete-btn {\n    width: 30%;\n        font-size: 1rem;\n}\n\n.edit-btn {\n    background-color: rgb(139, 233, 139);\n}\n\n.delete-btn {\n    background-color: rgb(233, 150, 139);\n}\n\n.edit-btn:hover, .delete-btn:hover {\n    opacity: 0.8;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,iCAAiC;AACrC;;;AAGA;IACI,aAAa;IACb,yDAAyD;IACzD,gCAAgC;IAChC,wBAAwB;AAC5B;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,+BAA+B;IAC/B,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,YAAY;;AAEhB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,eAAe;IACf,gCAAgC;IAChC,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,eAAe;IACf,gBAAgB;IAChB,eAAe;IACf,oCAAoC;AACxC;;;AAGA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;IACzB,YAAY;IACZ,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,gCAAgC;AACpC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,yBAAyB;IACzB,+BAA+B;IAC/B,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;IAClB,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,+BAA+B;IAC/B,gBAAgB;IAChB,gCAAgC;AACpC;;AAEA;IACI,kDAAkD;IAClD,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,SAAS;AACb;;AAEA;IACI,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,UAAU;QACN,eAAe;AACvB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,YAAY;AAChB","sourcesContent":["body {\n    margin: 0px;\n    font-family: 'Roboto', sans-serif;\n}\n\n\n.container {\n    display: grid;\n    /* grid-template-columns: clamp(200px,30vw,400px) 70vw; */\n    grid-template-columns: 25vw 75vw;\n    grid-template-rows: auto;\n}\n\n.sidebar {\n    background-color: #EEEEEE;\n    height: 100vh;\n    /* border: solid 1px #393E46; */\n    box-shadow: 1px 1px 5px gray;\n    display: flex;\n    flex-direction: column;\n    z-index: 5;\n    cursor: grab;\n    \n}\n\n#sidebar-title {\n    font-weight: 600;\n    background-color: #00ADB5;\n    color: white;\n    margin: 0px;\n    padding: 10px;\n    font-size: 2rem;\n    text-shadow: 1px 1px 1px #222831;\n    border-bottom: solid 1px #222831;\n}\n\n.project-head {\n    padding-left: 10px;\n    margin-bottom: 0px;\n}\n\n.project-head:hover {\n    color: white;\n    background-color: #00ADB5;\n}\n\n.project-head:hover::after {\n    content: \" +\";\n}\n\n\n.project-ul {\n    margin-top: 5px;\n    overflow: hidden;\n    max-height: 0px;\n    transition: max-height 0.1s ease-out;\n}\n\n\n.new-project, #add-remove-project {\n    align-self: center;\n    font-size: 1.5rem;\n    background-color: #00ADB5;\n    color: white;\n    border: solid 2px #222831;\n    border-radius: 10px;\n    padding: 5px;\n    box-shadow: 1px 1px 8px  #222831;\n}\n\n.new-project:hover, #add-remove-project:hover {\n    background-color: #04838a;\n}\n\n.new-project:active, #add-remove-project:active {\n    background-color: #00ADB5;\n}\n\n.new-project-form {\n    position: absolute;\n    top: 20%;\n    left: 40%;\n    background-color: #EEEEEE;\n    box-shadow: 1px 1px 5px #222831;\n    border-radius: 10%;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.4s;\n}\n\n#add-remove-project {\n    font-size: 1rem;\n}\n\n.content {\n    display: flex;\n    flex-direction: column;\n    \n}\n\n.todo-title {\n    background-color: #393E46;\n    height: 20vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    font-size: 2rem;\n    font-family: 'Lato', sans-serif;\n    font-weight: 600;\n    border-bottom: solid 2px #222831;\n}\n\n.todo-body {\n    background-image: radial-gradient(#F0EBE3,#EEEEEE);\n    flex-grow: 1;\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n    font-size: 1.5rem;\n    flex-wrap: wrap;\n}\n\n.todo-form {\n    display: grid;\n    grid-template-columns: 40% 40%;\n    gap: 15px;\n}\n\ninput, textarea {\n    font-family: 'Lato',sans-serif;\n    font-size: 1rem;\n}\n\n.footer {\n    background-color: #222831;\n    color: white;\n    text-align: center;\n    padding: 15px;\n}\n\nlabel {\n    display: block;\n    grid-column: 1/2;\n}\n\n.new-to-do{\n    color: #00ADB5;\n}\n\n.btn-grp {\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n}\n\n.edit-btn, .delete-btn {\n    width: 30%;\n        font-size: 1rem;\n}\n\n.edit-btn {\n    background-color: rgb(139, 233, 139);\n}\n\n.delete-btn {\n    background-color: rgb(233, 150, 139);\n}\n\n.edit-btn:hover, .delete-btn:hover {\n    opacity: 0.8;\n}"],"sourceRoot":""}]);
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
            todoLi.innerHTML = `${todo.title}`;
            todoLi.addEventListener('click',function(){
                renderToDo(todo,project,allProjects);
            });
            ul.appendChild(todoLi);
        });

        const newToDoBtn = document.createElement('button');
        newToDoBtn.classList.add('new-to-do');
        newToDoBtn.textContent = "+";
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

// create the default project for initial population of the DOM
_todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.addProject('Default',(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todos)());

_todo_js__WEBPACK_IMPORTED_MODULE_1__.Projects.getProjects()['Default'].addToDo((0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)('Default 1','I must do it','tomorrow','high','notes','checklist'));

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
(0,_render_js__WEBPACK_IMPORTED_MODULE_2__.renderToDo)(todo1);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFlBQVk7O0FBRVosQ0FBQzs7O0FBR21COzs7Ozs7O1VDL0RwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDd0I7QUFDcUI7OztBQUduRTtBQUNBOztBQUVBO0FBQ0EseURBQW1CLFdBQVcsK0NBQUs7O0FBRW5DLDBEQUFvQixzQkFBc0IsOENBQUk7O0FBRTlDO0FBQ0EsWUFBWSw4Q0FBSTtBQUNoQixZQUFZLDhDQUFJO0FBQ2hCLFlBQVksOENBQUk7QUFDaEIsWUFBWSw4Q0FBSTs7QUFFaEIsWUFBWSwrQ0FBSzs7QUFFakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5REFBbUI7QUFDbkIsWUFBWSwwREFBb0I7O0FBRWhDO0FBQ0EsWUFBWSwwREFBb0I7O0FBRWhDLHlEQUFhLENBQUMsOENBQVE7QUFDdEIsd0RBQVk7QUFDWixzREFBVSxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAwcHgsMzB2dyw0MDBweCkgNzB2dzsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXZ3IDc1dnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCAjMzkzRTQ2OyAqL1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIFxcbn1cXG5cXG4jc2lkZWJhci10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFEQjU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMyMjI4MzE7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMjIyODMxO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQ6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFEQjU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiArXFxcIjtcXG59XFxuXFxuXFxuLnByb2plY3QtdWwge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjFzIGVhc2Utb3V0O1xcbn1cXG5cXG5cXG4ubmV3LXByb2plY3QsICNhZGQtcmVtb3ZlLXByb2plY3Qge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBREI1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogc29saWQgMnB4ICMyMjI4MzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggICMyMjI4MzE7XFxufVxcblxcbi5uZXctcHJvamVjdDpob3ZlciwgI2FkZC1yZW1vdmUtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDgzOGE7XFxufVxcblxcbi5uZXctcHJvamVjdDphY3RpdmUsICNhZGQtcmVtb3ZlLXByb2plY3Q6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQURCNTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMyMjI4MzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcXG59XFxuXFxuI2FkZC1yZW1vdmUtcHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQ2O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjMjIyODMxO1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCNGMEVCRTMsI0VFRUVFRSk7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcblxcbi5uZXctdG8tZG97XFxuICAgIGNvbG9yOiAjMDBBREI1O1xcbn1cXG5cXG4uYnRuLWdycCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5lZGl0LWJ0biwgLmRlbGV0ZS1idG4ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZWRpdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAyMzMsIDEzOSk7XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTUwLCAxMzkpO1xcbn1cXG5cXG4uZWRpdC1idG46aG92ZXIsIC5kZWxldGUtYnRuOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQ0FBaUM7QUFDckM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHlEQUF5RDtJQUN6RCxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7UUFDTixlQUFlO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIC8qIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2xhbXAoMjAwcHgsMzB2dyw0MDBweCkgNzB2dzsgKi9cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXZ3IDc1dnc7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCAjMzkzRTQ2OyAqL1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBncmF5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB6LWluZGV4OiA1O1xcbiAgICBjdXJzb3I6IGdyYWI7XFxuICAgIFxcbn1cXG5cXG4jc2lkZWJhci10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFEQjU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMyMjI4MzE7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMjIyODMxO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQ6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEFEQjU7XFxufVxcblxcbi5wcm9qZWN0LWhlYWQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiArXFxcIjtcXG59XFxuXFxuXFxuLnByb2plY3QtdWwge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIG1heC1oZWlnaHQ6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjFzIGVhc2Utb3V0O1xcbn1cXG5cXG5cXG4ubmV3LXByb2plY3QsICNhZGQtcmVtb3ZlLXByb2plY3Qge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBBREI1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogc29saWQgMnB4ICMyMjI4MzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggICMyMjI4MzE7XFxufVxcblxcbi5uZXctcHJvamVjdDpob3ZlciwgI2FkZC1yZW1vdmUtcHJvamVjdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNDgzOGE7XFxufVxcblxcbi5uZXctcHJvamVjdDphY3RpdmUsICNhZGQtcmVtb3ZlLXByb2plY3Q6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwQURCNTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiA0MCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMyMjI4MzE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcXG59XFxuXFxuI2FkZC1yZW1vdmUtcHJvamVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG59XFxuXFxuLnRvZG8tdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzRTQ2O1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjMjIyODMxO1xcbn1cXG5cXG4udG9kby1ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KCNGMEVCRTMsI0VFRUVFRSk7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MCUgNDAlO1xcbiAgICBnYXA6IDE1cHg7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjgzMTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcblxcbi5uZXctdG8tZG97XFxuICAgIGNvbG9yOiAjMDBBREI1O1xcbn1cXG5cXG4uYnRuLWdycCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5lZGl0LWJ0biwgLmRlbGV0ZS1idG4ge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZWRpdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM5LCAyMzMsIDEzOSk7XFxufVxcblxcbi5kZWxldGUtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMTUwLCAxMzkpO1xcbn1cXG5cXG4uZWRpdC1idG46aG92ZXIsIC5kZWxldGUtYnRuOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMC44O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtUb2RvLFRvZG9zIH0gZnJvbSBcIi4vdG9kb1wiO1xuaW1wb3J0IHtQcm9qZWN0c30gZnJvbSAnLi90b2RvLmpzJztcblxuLy8gbmV3IHByb2plY3QgYnV0dG9uXG5jb25zdCBidXR0b25zID0gKCgpPT57XG4gICAgY29uc3QgbmV3UHJvaiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuICAgIGNvbnN0IG5ld1Byb2pGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBuZXdQcm9qTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W25hbWU9XCJwcm9qZWN0LW5hbWVcIl1gKTtcblxuICAgIG5ld1Byb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG5ld1Byb2pGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgIG5ld1Byb2pGb3JtLnN0eWxlLm9wYWNpdHkgPSAwLjg7XG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGFkZFJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXJlbW92ZS1wcm9qZWN0Jyk7XG4gICAgYWRkUmVtb3ZlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgbmV3UHJvakZvcm0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICBuZXdQcm9qRm9ybS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgXG4gICAgICAgIFByb2plY3RzLmFkZFJlbW92ZVByb2plY3QobmV3UHJvak5hbWUudmFsdWUsVG9kb3MoKSk7IFxuICAgICAgICBuZXdQcm9qTmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBcbiAgICAgICAgcmVuZGVyU2lkZUJhcihQcm9qZWN0cyk7XG4gICAgfSk7XG4gICAgICAgIFxuXG4gICAgcmV0dXJuIHtuZXdQcm9qfTtcbn0pKCk7XG5cblxuXG5cbi8vIGFuaW1hdGUgdGhlIHRvLWRvc1xuZnVuY3Rpb24gZXhwYW5kUHJvamVjdChldmVudCkge1xuICAgIGxldCBjaGlsZCA9IGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgIGlmIChjaGlsZC5zdHlsZS5tYXhIZWlnaHQpe1xuICAgICAgICBjaGlsZC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGlsZC5zdHlsZS5tYXhIZWlnaHQgPSBjaGlsZC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgfSBcbn1cblxubGV0IGNsZWFyQ29udGVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgLy8gY2xlYXIgdGhlIGNvbnRlbnRcbiAgICAgd2hpbGUgKGVsZW1lbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgc2lkZWJhclxubGV0IHJlbmRlclNpZGVCYXIgPSBmdW5jdGlvbihwcm9qZWN0cykge1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcbiAgICBjbGVhckNvbnRlbnQoc2lkZUJhcik7XG4gICAgXG4gICAgbGV0IGFsbFByb2plY3RzID0gcHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcbiAgICBcbiAgICBmb3IgKGxldCBwcm9qZWN0IGluIGFsbFByb2plY3RzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYWxsUHJvamVjdHNbcHJvamVjdF0uZ2V0VG9Eb3MoKSk7XG4gICAgICAgIC8vY29uc29sZS5sb2coYWxsUHJvamVjdHMpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgRE9NIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWQnKTtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9IGAke3Byb2plY3R9YDtcbiAgICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxleHBhbmRQcm9qZWN0KTtcblxuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdWwnKTtcblxuICAgICAgICBhbGxQcm9qZWN0c1twcm9qZWN0XS5nZXRUb0RvcygpLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RvTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgdG9kb0xpLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGknKTtcbiAgICAgICAgICAgIHRvZG9MaS5pbm5lckhUTUwgPSBgJHt0b2RvLnRpdGxlfWA7XG4gICAgICAgICAgICB0b2RvTGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmVuZGVyVG9Ebyh0b2RvLHByb2plY3QsYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZCh0b2RvTGkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBuZXdUb0RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG5ld1RvRG9CdG4uY2xhc3NMaXN0LmFkZCgnbmV3LXRvLWRvJyk7XG4gICAgICAgIG5ld1RvRG9CdG4udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgICAgICAgbmV3VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBuZXdUb2RvID0gVG9kbygnJywnJywnJywnMCcsJycsZmFsc2UpO1xuICAgICAgICAgICAgcHJvamVjdHMuZ2V0UHJvamVjdHMoKVtwcm9qZWN0XS5hZGRUb0RvKG5ld1RvZG8pO1xuICAgICAgICAgICAgcmVuZGVyVG9EbyhuZXdUb2RvLHByb2plY3QsYWxsUHJvamVjdHMpO1xuICAgICAgICAgICAgcmVuZGVyU2lkZUJhcihwcm9qZWN0cyk7XG4gICAgICAgIH0pO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChuZXdUb0RvQnRuKTtcblxuICAgICAgICBzaWRlQmFyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQodWwpO1xuXG5cbiAgICB9XG59O1xuXG5jb25zdCByZW5kZXJGb290ZXIgPSAoKT0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9IGBDb3B5cmlnaHQgQmlnIEQgLSAke2QuZ2V0RnVsbFllYXIoKX1gO1xufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgdG9kb1xubGV0IHJlbmRlclRvRG8gPSBmdW5jdGlvbih0b2RvLHByb2plY3QsYWxsUHJvamVjdHMpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgdGl0bGVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby10aXRsZScpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRpdGxlXCJdJyk7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJkZXNjcmlwdGlvblwiXScpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZHVlLWRhdGVcIl0nKTtcbiAgICBjb25zdCB0aW1lTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aW1lLWxlZnQnKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpO1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJjb21wbGV0ZVwiXScpO1xuXG4gICAgdGl0bGVIZWFkZXIuaW5uZXJIVE1MID0gYCR7dG9kby50aXRsZX1gO1xuICAgIHRpdGxlLnZhbHVlID0gdG9kby50aXRsZTtcbiAgICBkZXNjLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgIGxldCBkdWUgPSBuZXcgRGF0ZSh0b2RvLmR1ZURhdGUpO1xuICAgIHRpbWVMZWZ0LmlubmVySFRNTCA9IHBhcnNlSW50KChkdWUgLSB0b2RheSkvKDEwMDAqNjAqNjAqMjQpLDEwKTtcbiAgICBwcmlvcml0eS52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG4gICAgY29tcGxldGVkLmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlO1xuXG5cbiAgICAvLyByZW1vdmUgYW55IGV4aXN0aW5nIGJ1dHRvbnNcbiAgICBjb25zdCBidG5HcnAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWdycCcpO1xuICAgIGNsZWFyQ29udGVudChidG5HcnApO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBlZGl0IGFuZCBkZWxldGUgYnV0dG9uXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdC1idG4nKTtcbiAgICBlZGl0QnRuLmlubmVySFRNTCA9ICdFZGl0JztcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuICAgIGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnRGVsZXRlJztcblxuICAgIGJ0bkdycC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICBidG5HcnAuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgIGNvbnNvbGUubG9nKHRvZG8pO1xuXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgdG9kby50aXRsZSA9IHRpdGxlLnZhbHVlO1xuICAgICAgICB0b2RvLmRlc2NyaXB0aW9uID0gZGVzYy52YWx1ZTtcbiAgICAgICAgdG9kby5kdWVEYXRlID0gZHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgdG9kby5wcmlvcml0eSA9IHByaW9yaXR5LnZhbHVlO1xuICAgICAgICB0b2RvLmNvbXBsZXRlID0gY29tcGxldGVkLmNoZWNrZWQ7XG4gICAgICAgIHJlbmRlclNpZGVCYXIoUHJvamVjdHMpO1xuICAgICAgICByZW5kZXJUb0RvKHRvZG8scHJvamVjdCxhbGxQcm9qZWN0cyk7XG4gICAgfSk7XG5cblxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICAgYWxsUHJvamVjdHNbcHJvamVjdF0ucmVtb3ZlVG9Ebyh0b2RvKTtcbiAgICAgICAgcmVuZGVyU2lkZUJhcihQcm9qZWN0cyk7XG4gICAgfSk7XG5cblxufTtcblxuZXhwb3J0IHtyZW5kZXJTaWRlQmFyLHJlbmRlckZvb3RlcixyZW5kZXJUb0RvLGJ1dHRvbnN9OyIsImxldCBUb2RvID0gKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksbm90ZXMsY29tcGxldGUpID0+IHtcblxuICAgIC8vY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcbiAgICAvL2NvbnN0IHNldFRpdGxlID0gKHN0cikgPT4gdGl0bGU7XG5cbiAgICBjb25zdCBwcmludERldGFpbHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBUYXNrICR7dGl0bGV9IGlzIGR1ZSBvbiAke2R1ZURhdGV9YCk7XG4gICAgfTtcblxuICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eSxub3Rlcyxjb21wbGV0ZSxwcmludERldGFpbHN9O1xufTtcblxubGV0IFRvZG9zID0gKCkgPT4ge1xuICAgIGxldCB0b2RvcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVG9EbyA9ICh0b2RvKSA9PiB0b2Rvcy5wdXNoKHRvZG8pO1xuICAgIFxuICAgIGNvbnN0IGZpbmRJbmRleCA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IHRvZG9zLmZpbHRlcih0ZCA9PiB0ZC50aXRsZT09PXRvZG8udGl0bGUpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVG9EbyA9ICh0b2RvKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IGZpbmRJbmRleCh0b2RvKTtcbiAgICAgICAgLy90b2RvcyA9IHRvZG9zLnNwbGljZSgwLGlkLTEpLmNvbmNhdCh0b2Rvcy5zcGxpY2UoaWQrMSkpO1xuICAgICAgICB0b2RvcyA9IHRvZG9zLmZpbHRlcih0ZCA9PiB0ZC50aXRsZSE9PXRvZG8udGl0bGUpO1xuICAgIH07XG4gICAgY29uc3QgZ2V0VG9Eb3MgPSAoKSA9PiB0b2RvcztcblxuICAgIHJldHVybiB7Z2V0VG9Eb3MsIGFkZFRvRG8scmVtb3ZlVG9Eb307XG5cbn07XG5cbi8vIGNyZWF0ZSB0aGUgbW9kdWxlIHRvIHN0b3JlIHByb2plY3RzXG5leHBvcnQgY29uc3QgUHJvamVjdHMgPSAoKCk9PntcbiAgICBsZXQgcHJvamVjdHMgPSB7fTtcblxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAodGl0bGUsdG9kb3MpID0+IHtcbiAgICAgICAgcHJvamVjdHNbdGl0bGVdID0gdG9kb3M7XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgICAgICAgZGVsZXRlIHByb2plY3RzW3RpdGxlXTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkUmVtb3ZlUHJvamVjdCA9ICh0aXRsZSx0b2RvcykgPT4ge1xuICAgICAgICBpZiAocHJvamVjdHMuaGFzT3duUHJvcGVydHkodGl0bGUpKSB7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KHRpdGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aXRsZSE9PScnKSB7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdCh0aXRsZSx0b2Rvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XG5cbiAgICByZXR1cm4ge2dldFByb2plY3RzLGFkZFByb2plY3QsZGVsZXRlUHJvamVjdCxhZGRSZW1vdmVQcm9qZWN0fTtcblxufSkoKTtcblxuXG5leHBvcnQge1RvZG8sVG9kb3N9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtUb2RvLFRvZG9zLFByb2plY3RzfSBmcm9tICcuL3RvZG8uanMnO1xuaW1wb3J0IHtyZW5kZXJTaWRlQmFyLHJlbmRlckZvb3RlciwgcmVuZGVyVG9Eb30gZnJvbSAnLi9yZW5kZXIuanMnO1xuXG5cbi8vY29uc3QgcHJvamVjdEhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkJyk7XG4vL2NvbnN0IHByb2plY3RVTCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXVsJyk7XG5cbi8vIGNyZWF0ZSB0aGUgZGVmYXVsdCBwcm9qZWN0IGZvciBpbml0aWFsIHBvcHVsYXRpb24gb2YgdGhlIERPTVxuUHJvamVjdHMuYWRkUHJvamVjdCgnRGVmYXVsdCcsVG9kb3MoKSk7XG5cblByb2plY3RzLmdldFByb2plY3RzKClbJ0RlZmF1bHQnXS5hZGRUb0RvKFRvZG8oJ0RlZmF1bHQgMScsJ0kgbXVzdCBkbyBpdCcsJ3RvbW9ycm93JywnaGlnaCcsJ25vdGVzJywnY2hlY2tsaXN0JykpO1xuXG4vLyBhZGRpbmcgc29tZSBhZGRpdGlvbmFsIGNvbnRlbnQgZm9yIGNoZWNraW5nIGl0IG91dFxubGV0IHRvZG8xID0gVG9kbygnVG9kbyAxJywnSSBtdXN0IGRvIGl0JywnMjAyMi0wOS0xOCcsJzMnLCdub3RlcycsdHJ1ZSk7XG5sZXQgdG9kbzIgPSBUb2RvKCdUb2RvIDInLCdJIG11c3QgZG8gaXQnLCcyMDIyLTA3LTIwJywnNCcsJ25vdGVzJyxmYWxzZSk7XG5sZXQgdG9kbzMgPSBUb2RvKCdUb2RvIDMnLCdJIG11c3QgZG8gaXQnLCcyMDIyLTA3LTI1JywnMicsJ25vdGVzJyxmYWxzZSk7XG5sZXQgdG9kbzQgPSBUb2RvKCdUb2RvIDQnLCdJIG11c3QgZG8gaXQnLCcyMDIyLTA5LTE4JywnNScsJ25vdGVzJyxmYWxzZSk7XG5cbmxldCB0b2RvcyA9IFRvZG9zKCk7XG5cbmNvbnNvbGUubG9nKHRvZG8xKTtcblxudG9kb3MuYWRkVG9Ebyh0b2RvMSk7XG50b2Rvcy5hZGRUb0RvKHRvZG8yKTtcbnRvZG9zLmFkZFRvRG8odG9kbzMpO1xuXG5jb25zb2xlLmxvZyh0b2Rvcy5nZXRUb0RvcygpKTtcbmNvbnNvbGUubG9nKHRvZG9zLnJlbW92ZVRvRG8odG9kbzIpKTtcbmNvbnNvbGUubG9nKHRvZG9zLmdldFRvRG9zKCkpO1xuXG5Qcm9qZWN0cy5hZGRQcm9qZWN0KCdIb21lJyx0b2Rvcyk7XG5jb25zb2xlLmxvZyhQcm9qZWN0cy5nZXRQcm9qZWN0cygpWydIb21lJ10uZ2V0VG9Eb3MoKSk7XG5cbnRvZG9zLmFkZFRvRG8odG9kbzQpO1xuY29uc29sZS5sb2coUHJvamVjdHMuZ2V0UHJvamVjdHMoKVsnSG9tZSddLmdldFRvRG9zKCkpO1xuXG5yZW5kZXJTaWRlQmFyKFByb2plY3RzKTtcbnJlbmRlckZvb3RlcigpO1xucmVuZGVyVG9Ebyh0b2RvMSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9