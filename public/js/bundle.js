/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Mountains = __webpack_require__(/*! ./models/mountains.js */ \"./src/models/mountains.js\");\nconst MountainListView = __webpack_require__(/*! ./views/mountain_list_view.js */ \"./src/views/mountain_list_view.js\");\nconst MountainView = __webpack_require__(/*! ./views/mountain_view.js */ \"./src/views/mountain_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () =>{\n\nconst mountainsListContainer = document.querySelector('section#mountains');\nconst mountainListView = new MountainListView(mountainsListContainer);\nmountainListView.bindEvents();\n\nconst mountains = new Mountains('https://munroapi.herokuapp.com/munros');\n// mountains.bindEvents();\nmountains.getData();\n})\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n};\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n      .then(response => response.json())\n      .catch( err => console.log(\"Error in get:\", err))\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/mountains.js":
/*!*********************************!*\
  !*** ./src/models/mountains.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst Mountains = function(url) {\n  this.url = url;\n  this.mountains = [];\n}\n\n\nMountains.prototype.getData = function() {\n const request = new RequestHelper(this.url);\n\n request.get()\n  .then((data) =>{\n    this.mountains = data;\n    PubSub.publish('Mountains:mountains-data-ready', this.mountains);\n    \n  })\n}\n\n\nmodule.exports = Mountains;\n\n\n//# sourceURL=webpack:///./src/models/mountains.js?");

/***/ }),

/***/ "./src/views/mountain_list_view.js":
/*!*****************************************!*\
  !*** ./src/views/mountain_list_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst MountainView = __webpack_require__(/*! ./mountain_view.js */ \"./src/views/mountain_view.js\");\n\n\nconst MountainListView = function(container) {\n  this.container = container;\n\n}\n\nMountainListView.prototype.bindEvents = function() {\n  PubSub.subscribe('Mountains:mountains-data-ready', (event) => {\n    this.mountains = event.detail;\n    this.render();\n    // console.log(event.detail);\n  });\n\n}\n\nMountainListView.prototype.render = function() {\n  this.mountains.forEach((mountain) =>{\n    const mountainView = new MountainView(this.container);\n    mountainView.render(mountain);\n    // console.log(mountainView);\n  })\n\n}\n\n\n\n\nmodule.exports = MountainListView;\n\n\n//# sourceURL=webpack:///./src/views/mountain_list_view.js?");

/***/ }),

/***/ "./src/views/mountain_view.js":
/*!************************************!*\
  !*** ./src/views/mountain_view.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst MountainView = function(container){\n  this.container = container;\n\n}\n\nMountainView.prototype.bindEvents = function() {\n  PubSub.subscribe('Mountains:mountains-data-ready', (event) =>{\n console.log(event);\n    this.render(event.detail)\n  })\n}\n\nMountainView.prototype.render = function(mountain){\n  const mountainName = this.createElement('h2', mountain.name);\n  console.log(mountainName);\n  this.container.appendChild(mountainName);\n\n\n\n  const meaning = this.createElement('p', mountain.meaning);\n  this.container.appendChild(meaning);\n\n  const height = this.createElement('p', mountain.height);\n  this.container.appendChild(height);\n\n\n}\n\nMountainView.prototype.createElement = function(elementType, text) {\n  const element = document.createElement(elementType);\n  element.textContent = text;\n  return element;\n\n}\n\n\n\nMountainView.prototype.populateList = function(list) {\n  this.mountain.mountains.forEach((mountain) =>{\n    const mountainsListItem = document.createElement('li');\n    mountainsListItem.textContent = mountain.name;\n    list.appendChild(mountainsListItem);\n\n  })\n\n}\n\nMountainView.prototype.clearMountain = function() {\n  this.container.innerHTML = '';\n}\n\nmodule.exports = MountainView;\n\n\n//# sourceURL=webpack:///./src/views/mountain_view.js?");

/***/ })

/******/ });