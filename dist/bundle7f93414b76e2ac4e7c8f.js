/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generatePassword": () => (/* binding */ generatePassword),
/* harmony export */   "renderBtn": () => (/* binding */ renderBtn)
/* harmony export */ });
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inputs */ "./src/Inputs.js");

var renderBtn = function renderBtn() {
  var button = document.createElement("button");
  var div = document.createElement("div");
  div.classList.add("container");
  root.appendChild(div);
  div.appendChild(button);
  button.id = "generate-btn";
  button.textContent = "Generate Password";
};
var generatePassword = function generatePassword(paragraph, hasSymbols) {
  var characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
  var lengthPassword = (0,_Inputs__WEBPACK_IMPORTED_MODULE_0__.getLength)();

  if (lengthPassword < 8 || lengthPassword > 20) {
    lengthPassword = 0;
  }

  var copied = document.getElementById("para-copied");

  if (copied) {
    copied.remove();
  }

  var password = "";
  var charactersLength = characters.length;
  var symbols = 29;

  if (!hasSymbols) {
    charactersLength -= symbols;
  }

  for (var i = 0; i < lengthPassword; i++) {
    var _char = Math.floor(Math.random() * charactersLength);

    password += characters[_char];
  }

  paragraph.textContent = password;
};

/***/ }),

/***/ "./src/Heading.js":
/*!************************!*\
  !*** ./src/Heading.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeading": () => (/* binding */ renderHeading),
/* harmony export */   "renderParagraph": () => (/* binding */ renderParagraph)
/* harmony export */ });
var textFirstParagraph = "Never use an insecure password again.";

var renderHeading = function renderHeading() {
  var div = document.createElement("div");
  var h1 = document.createElement("h1");
  var span = document.createElement("span");
  var br = document.createElement("br");
  div.classList.add("container");
  h1.innerText = "Generate a";
  span.innerText = "random password";
  span.classList.add("green");
  span.id = "span";
  div.appendChild(h1);
  h1.appendChild(br);
  h1.appendChild(span);
  root.appendChild(div);
  renderParagraph(div, textFirstParagraph, 1);
};

var renderParagraph = function renderParagraph(div, text, id) {
  var p = document.createElement("p");
  var node = document.createTextNode(text);
  p.appendChild(node);
  p.id = "para-".concat(id);
  div.appendChild(p);
};



/***/ }),

/***/ "./src/Inputs.js":
/*!***********************!*\
  !*** ./src/Inputs.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyOnClick": () => (/* binding */ copyOnClick),
/* harmony export */   "getLength": () => (/* binding */ getLength),
/* harmony export */   "hasSymbols": () => (/* binding */ hasSymbols),
/* harmony export */   "renderCheckbox": () => (/* binding */ renderCheckbox)
/* harmony export */ });
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading */ "./src/Heading.js");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }



var renderCheckbox = function renderCheckbox() {
  var div = document.createElement("div");
  root.appendChild(div);
  div.id = "input";
  var input = document.createElement("input");
  var label = document.createElement("label");
  label["for"] = "hasSymbols";
  label.textContent = "Use Symbols";
  input.id = "symbols";
  input.type = "checkbox";
  input.name = "hasSymbols";
  input.value = true;
  input.checked = true;
  div.appendChild(label);
  div.appendChild(input);
  input.addEventListener('change', function (event) {
    if (event.currentTarget.checked) {
      input.value = true;
    } else {
      input.value = false;
    }
  });
  selectLength();
};

var hasSymbols = function hasSymbols() {
  var checkbox = document.getElementById("symbols");
  var wantSymbols = true;

  if (checkbox.value === "false") {
    wantSymbols = false;
  }

  return wantSymbols;
};

var selectLength = function selectLength() {
  var div = document.getElementById("input");
  var input = document.createElement("input");
  var label = document.createElement("label");
  label["for"] = "password-length";
  label.textContent = "How long must be?";
  input.id = "password-length";
  input.type = "number";
  input.name = "password-length";
  input.min = 8;
  input.max = 20;
  input.value = 16;
  div.appendChild(label);
  div.appendChild(input);
};

var getLength = function getLength() {
  var passwordLength = document.getElementById("password-length");
  var lengthValue = passwordLength.valueAsNumber;
  passwordLength.addEventListener("change", function () {
    var div = document.getElementById("input");
    var paraInfo = document.getElementById("para-info");

    if (parseInt(passwordLength.value) < 8 || parseInt(passwordLength.value) > 20) {
      if (paraInfo) {
        paraInfo.remove();
      }

      (0,_Heading__WEBPACK_IMPORTED_MODULE_0__.renderParagraph)(div, "(Select a password length min 8 max 20)", "info");
    }

    if (parseInt(passwordLength.value) > 8 || parseInt(passwordLength.value) < 20) {
      if (paraInfo) {
        paraInfo.remove();
      }

      return function () {
        passwordLength.valueAsNumber, _readOnlyError("lengthValue");
      };
    }
  });
  return lengthValue;
}; // load getLength when the page's state is ready


document.addEventListener('readystatechange', function () {
  getLength();
});

var copyOnClick = function copyOnClick(div, element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    var textToCopy = element.textContent;
    var copied = document.getElementById("para-copied");

    if (copied) {
      copied.remove();
    }

    if (navigator.clipboard && textToCopy) {
      navigator.clipboard.writeText(textToCopy).then(function () {
        (0,_Heading__WEBPACK_IMPORTED_MODULE_0__.renderParagraph)(div, "Password copied!", "copied");
      });
    } else if (!textToCopy) {
      (0,_Heading__WEBPACK_IMPORTED_MODULE_0__.renderParagraph)(div, "Nothing to copy!", "copied");
    } else {
      (0,_Heading__WEBPACK_IMPORTED_MODULE_0__.renderParagraph)(div, "Browser Not compatible");
    }
  });
};



/***/ }),

/***/ "./src/Navbar.js":
/*!***********************!*\
  !*** ./src/Navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var renderNav = function renderNav() {
  var nav = document.createElement("nav");
  var toggleBtn = document.createElement("button");
  var i = document.createElement("i");
  nav.id = "nav";
  root.appendChild(nav);
  toggleBtn.textContent = "toggle";
  toggleBtn.id = "toggle-btn";
  i.classList.add("fa-solid");
  i.classList.add("fa-circle-half-stroke");
  nav.appendChild(toggleBtn);
  toggleBtn.appendChild(i);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNav);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Karla:wght@200;400;600;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* font-family: 'Karla', sans-serif; */\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background: #ECFDF5;\r\n    font-family: 'Karla', sans-serif;\r\n    color: #2B283A;\r\n}\r\n\r\nbody.dark-mode {\r\n    background: #1F2937;\r\n    color: #FFFFFF;\r\n}\r\n\r\n/* Navbar */\r\n#nav {\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 2rem;\r\n    justify-content:end;\r\n}\r\n\r\n#toggle-btn {\r\n    font-weight: bold;\r\n    font-size: 1rem;\r\n    background: transparent;\r\n    border: none;\r\n    color: #10B981;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#toggle-btn.dark-mode {\r\n    color: #4ADF86;\r\n}\r\n\r\ni {\r\n    padding: .8rem;\r\n}\r\n\r\n/* heading style */\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: auto;\r\n    width: 100vw;\r\n    justify-items: center;\r\n}\r\n\r\nh1 {\r\n    width: 18.75rem;\r\n    margin: 0 1rem;\r\n    grid-column: 2;\r\n    padding-top: 2rem;\r\n    font-family: 'Karla';\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 2em;\r\n    text-align: left;\r\n    line-height: 1em;\r\n    letter-spacing: -0.025em;\r\n}\r\n\r\n.green {\r\n    color: #10B981;\r\n}\r\n\r\nspan.dark-mode {\r\n    color: #4ADF86;\r\n}\r\n\r\np {\r\n    width: 18.75rem;\r\n    grid-column: 2;\r\n    font-size: 1em;\r\n    line-height: 2em;\r\n    color: #6B7280;\r\n}\r\n\r\n#para-1.dark-mode{\r\n    color: #D5D4D8;\r\n}\r\n\r\n/* generate button */\r\n#generate-btn {\r\n    width: 12rem;\r\n    height: 3rem;\r\n    grid-column: 2;\r\n    margin: 1.5rem 0;\r\n    background: #10B981;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #ffffff;\r\n    border: none;\r\n    border-radius: .5rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#generate-btn.dark-mode {\r\n    background: #4ADF86;\r\n}\r\n\r\nhr {\r\n    max-width: 25rem;\r\n    border: 1px solid #2F3e53;\r\n    margin: auto;\r\n}\r\n\r\n#passwords {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 2rem;\r\n}\r\n\r\n#para-password-1, #para-password-2 {\r\n    min-width: 12rem;\r\n    height: 3rem;\r\n    margin: .5rem 2rem;\r\n    background-color: #273549;\r\n    font-size: 1.2rem;\r\n    line-height: 2.8rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    color:#5DEF92;\r\n}\r\n\r\n#para-password-1:hover, #para-password-2:hover {\r\n    cursor: copy;\r\n}\r\n\r\n#input {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    height: 3rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #6B7280;\r\n}\r\n\r\ninput[type=checkbox] {\r\n    height: 1.2rem;\r\n    width: 1.2rem;\r\n    margin: .5rem;\r\n}\r\n\r\ninput[type=number] {\r\n    width: 2.8rem;\r\n    margin: .5rem;\r\n}\r\n\r\n#para-info, #para-copied {\r\n    color: #ff0000;\r\n    text-align: center;\r\n}\r\n\r\n\r\n@media (min-width: 65rem) {\r\n    hr {\r\n        max-width: 50%;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA,sCAAsC;;AAEtC;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,gCAAgC;IAChC,cAAc;AAClB;;AAEA;IACI,mBAAmB;IACnB,cAAc;AAClB;;AAEA,WAAW;AACX;IACI,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,cAAc;IACd,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA,kBAAkB;AAClB;IACI,aAAa;IACb,kCAAkC;IAClC,wBAAwB;IACxB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,cAAc;IACd,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,gBAAgB;IAChB,wBAAwB;AAC5B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA,oBAAoB;AACpB;IACI,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,mBAAmB;IACnB,2CAA2C;IAC3C,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,YAAY;IACZ,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;;AAGA;IACI;QACI,cAAc;IAClB;AACJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Karla:wght@200;400;600;800&display=swap');\r\n\r\n/* font-family: 'Karla', sans-serif; */\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background: #ECFDF5;\r\n    font-family: 'Karla', sans-serif;\r\n    color: #2B283A;\r\n}\r\n\r\nbody.dark-mode {\r\n    background: #1F2937;\r\n    color: #FFFFFF;\r\n}\r\n\r\n/* Navbar */\r\n#nav {\r\n    display: flex;\r\n    width: 100vw;\r\n    height: 2rem;\r\n    justify-content:end;\r\n}\r\n\r\n#toggle-btn {\r\n    font-weight: bold;\r\n    font-size: 1rem;\r\n    background: transparent;\r\n    border: none;\r\n    color: #10B981;\r\n    cursor: pointer;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#toggle-btn.dark-mode {\r\n    color: #4ADF86;\r\n}\r\n\r\ni {\r\n    padding: .8rem;\r\n}\r\n\r\n/* heading style */\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    grid-template-rows: auto;\r\n    width: 100vw;\r\n    justify-items: center;\r\n}\r\n\r\nh1 {\r\n    width: 18.75rem;\r\n    margin: 0 1rem;\r\n    grid-column: 2;\r\n    padding-top: 2rem;\r\n    font-family: 'Karla';\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    font-size: 2em;\r\n    text-align: left;\r\n    line-height: 1em;\r\n    letter-spacing: -0.025em;\r\n}\r\n\r\n.green {\r\n    color: #10B981;\r\n}\r\n\r\nspan.dark-mode {\r\n    color: #4ADF86;\r\n}\r\n\r\np {\r\n    width: 18.75rem;\r\n    grid-column: 2;\r\n    font-size: 1em;\r\n    line-height: 2em;\r\n    color: #6B7280;\r\n}\r\n\r\n#para-1.dark-mode{\r\n    color: #D5D4D8;\r\n}\r\n\r\n/* generate button */\r\n#generate-btn {\r\n    width: 12rem;\r\n    height: 3rem;\r\n    grid-column: 2;\r\n    margin: 1.5rem 0;\r\n    background: #10B981;\r\n    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);\r\n    font-size: 1rem;\r\n    font-weight: 500;\r\n    color: #ffffff;\r\n    border: none;\r\n    border-radius: .5rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#generate-btn.dark-mode {\r\n    background: #4ADF86;\r\n}\r\n\r\nhr {\r\n    max-width: 25rem;\r\n    border: 1px solid #2F3e53;\r\n    margin: auto;\r\n}\r\n\r\n#passwords {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding: 2rem;\r\n}\r\n\r\n#para-password-1, #para-password-2 {\r\n    min-width: 12rem;\r\n    height: 3rem;\r\n    margin: .5rem 2rem;\r\n    background-color: #273549;\r\n    font-size: 1.2rem;\r\n    line-height: 2.8rem;\r\n    border-radius: .5rem;\r\n    text-align: center;\r\n    color:#5DEF92;\r\n}\r\n\r\n#para-password-1:hover, #para-password-2:hover {\r\n    cursor: copy;\r\n}\r\n\r\n#input {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    height: 3rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: #6B7280;\r\n}\r\n\r\ninput[type=checkbox] {\r\n    height: 1.2rem;\r\n    width: 1.2rem;\r\n    margin: .5rem;\r\n}\r\n\r\ninput[type=number] {\r\n    width: 2.8rem;\r\n    margin: .5rem;\r\n}\r\n\r\n#para-info, #para-copied {\r\n    color: #ff0000;\r\n    text-align: center;\r\n}\r\n\r\n\r\n@media (min-width: 65rem) {\r\n    hr {\r\n        max-width: 50%;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading */ "./src/Heading.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/Navbar.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _Inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Inputs */ "./src/Inputs.js");




 // initial variables

var root = document.getElementById("root");
var body = document.querySelector("body"); // help functions

var darkMode = function darkMode(arr) {
  arr.map(function (element) {
    element.classList.toggle("dark-mode");
  });
}; // render elements when the page is load


(0,_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_Heading__WEBPACK_IMPORTED_MODULE_0__.renderHeading)();
(0,_Button__WEBPACK_IMPORTED_MODULE_2__.renderBtn)();
(0,_Inputs__WEBPACK_IMPORTED_MODULE_4__.renderCheckbox)(); // render hr below the checkbox

var hr = document.createElement("hr");
root.appendChild(hr); // render a div that contains 2 password results

var div = document.createElement("div");
root.appendChild(div);
div.id = "passwords";
(0,_Heading__WEBPACK_IMPORTED_MODULE_0__.renderParagraph)(div, "", "password-1");
(0,_Heading__WEBPACK_IMPORTED_MODULE_0__.renderParagraph)(div, "", "password-2"); // get element after the render

var toggleBtn = document.getElementById("toggle-btn");
var generateBtn = document.getElementById("generate-btn");
var span = document.getElementById("span");
var para1 = document.getElementById("para-1");
var passwords = document.getElementById("passwords");
var paraPass1 = document.getElementById("para-password-1");
var paraPass2 = document.getElementById("para-password-2"); // events after the page is load

toggleBtn.addEventListener("click", function (e) {
  var darkModeElements = [root, body, toggleBtn, span, para1, generateBtn];
  darkMode(darkModeElements);
  e.preventDefault();
});
generateBtn.addEventListener("click", function () {
  (0,_Button__WEBPACK_IMPORTED_MODULE_2__.generatePassword)(paraPass1, (0,_Inputs__WEBPACK_IMPORTED_MODULE_4__.hasSymbols)());
  (0,_Button__WEBPACK_IMPORTED_MODULE_2__.generatePassword)(paraPass2, (0,_Inputs__WEBPACK_IMPORTED_MODULE_4__.hasSymbols)());
});
(0,_Inputs__WEBPACK_IMPORTED_MODULE_4__.copyOnClick)(passwords, paraPass1);
(0,_Inputs__WEBPACK_IMPORTED_MODULE_4__.copyOnClick)(passwords, paraPass2);
})();

/******/ })()
;
//# sourceMappingURL=bundle7f93414b76e2ac4e7c8f.js.map