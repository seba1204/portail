require('source-map-support/register');
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/codes/Basics/errors.js":
/*!************************************!*\
  !*** ./src/codes/Basics/errors.js ***!
  \************************************/
/*! exports provided: internalError, wrongQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internalError", function() { return internalError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrongQuery", function() { return wrongQuery; });
const internalError = {
  code: 'e500',
  description: 'internal error occured'
};
const wrongQuery = {
  code: 'e501',
  description: 'wrong query in request url'
};

/***/ }),

/***/ "./src/codes/Basics/index.js":
/*!***********************************!*\
  !*** ./src/codes/Basics/index.js ***!
  \***********************************/
/*! exports provided: err, suc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/codes/Basics/errors.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "err", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success */ "./src/codes/Basics/success.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "suc", function() { return _success__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/codes/Basics/success.js":
/*!*************************************!*\
  !*** ./src/codes/Basics/success.js ***!
  \*************************************/
/*! exports provided: ok */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ok", function() { return ok; });
const ok = {
  code: 's200',
  description: 'everything is fine !'
};

/***/ }),

/***/ "./src/codes/GPIOS/errors.js":
/*!***********************************!*\
  !*** ./src/codes/GPIOS/errors.js ***!
  \***********************************/
/*! exports provided: savePhotoError, takePhotoError, toogleGateError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePhotoError", function() { return savePhotoError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takePhotoError", function() { return takePhotoError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleGateError", function() { return toogleGateError; });
const savePhotoError = {
  code: 'e1',
  description: 'error during saving photo'
};
const takePhotoError = {
  code: 'e2',
  description: 'error during taking photo'
};
const toogleGateError = {
  code: 'e3',
  description: 'error during contacting relay'
};

/***/ }),

/***/ "./src/codes/GPIOS/index.js":
/*!**********************************!*\
  !*** ./src/codes/GPIOS/index.js ***!
  \**********************************/
/*! exports provided: err, suc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/codes/GPIOS/errors.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "err", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success */ "./src/codes/GPIOS/success.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "suc", function() { return _success__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/codes/GPIOS/success.js":
/*!************************************!*\
  !*** ./src/codes/GPIOS/success.js ***!
  \************************************/
/*! exports provided: relayOK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relayOK", function() { return relayOK; });
const relayOK = {
  code: 's1',
  description: 'relay has been contacted'
};

/***/ }),

/***/ "./src/codes/Image/errors.js":
/*!***********************************!*\
  !*** ./src/codes/Image/errors.js ***!
  \***********************************/
/*! exports provided: photoNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photoNotFound", function() { return photoNotFound; });
const photoNotFound = {
  code: 'e8',
  description: 'photo was not found'
};

/***/ }),

/***/ "./src/codes/Image/index.js":
/*!**********************************!*\
  !*** ./src/codes/Image/index.js ***!
  \**********************************/
/*! exports provided: err */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/codes/Image/errors.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "err", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__; });



/***/ }),

/***/ "./src/codes/Raspberry/errors.js":
/*!***************************************!*\
  !*** ./src/codes/Raspberry/errors.js ***!
  \***************************************/
/*! exports provided: readingCPUTempError, rebootRasp, rebootServer, serviceUnknow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readingCPUTempError", function() { return readingCPUTempError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebootRasp", function() { return rebootRasp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebootServer", function() { return rebootServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceUnknow", function() { return serviceUnknow; });
const readingCPUTempError = {
  code: 'e4',
  description: 'error during reading CPU temperature'
};
const rebootRasp = {
  code: 'e5',
  description: 'error during rebooting raspberry'
};
const rebootServer = {
  code: 'e6',
  description: 'error during rebooting server'
};
const serviceUnknow = {
  code: 'e7',
  description: 'this service is unknow (from post/restart/:service)'
};

/***/ }),

/***/ "./src/codes/Raspberry/index.js":
/*!**************************************!*\
  !*** ./src/codes/Raspberry/index.js ***!
  \**************************************/
/*! exports provided: err, suc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/codes/Raspberry/errors.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "err", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success */ "./src/codes/Raspberry/success.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "suc", function() { return _success__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/codes/Raspberry/success.js":
/*!****************************************!*\
  !*** ./src/codes/Raspberry/success.js ***!
  \****************************************/
/*! exports provided: imageDeleted, rebootRasp, rebootServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDeleted", function() { return imageDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebootRasp", function() { return rebootRasp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rebootServer", function() { return rebootServer; });
const imageDeleted = {
  code: 's2',
  description: 'image was deleted'
};
const rebootRasp = {
  code: 's3',
  description: 'raspberry was rebooted'
};
const rebootServer = {
  code: 's4',
  description: 'server was rebooted'
};

/***/ }),

/***/ "./src/codes/index.js":
/*!****************************!*\
  !*** ./src/codes/index.js ***!
  \****************************/
/*! exports provided: basicsCode, GPIOSCode, RaspCode, ImageCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Basics */ "./src/codes/Basics/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "basicsCode", function() { return _Basics__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _GPIOS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GPIOS */ "./src/codes/GPIOS/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "GPIOSCode", function() { return _GPIOS__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _Raspberry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Raspberry */ "./src/codes/Raspberry/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RaspCode", function() { return _Raspberry__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ "./src/codes/Image/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ImageCode", function() { return _Image__WEBPACK_IMPORTED_MODULE_3__; });






/***/ }),

/***/ "./src/constantes.js":
/*!***************************!*\
  !*** ./src/constantes.js ***!
  \***************************/
/*! exports provided: SERVER_PORT_DEV, SERVER_PORT_PROD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_PORT_DEV", function() { return SERVER_PORT_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_PORT_PROD", function() { return SERVER_PORT_PROD; });
//server constantes
const SERVER_PORT_DEV = "5973"; // port d'écoute du serveur en développement

const SERVER_PORT_PROD = "4957"; // port d'écoute du serveur en production

/***/ }),

/***/ "./src/helpers/Raspberry.js":
/*!**********************************!*\
  !*** ./src/helpers/Raspberry.js ***!
  \**********************************/
/*! exports provided: RELAIS, toogleGate, takePhoto, restartRasp, restartServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELAIS", function() { return RELAIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleGate", function() { return toogleGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takePhoto", function() { return takePhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartRasp", function() { return restartRasp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restartServer", function() { return restartServer; });
/* harmony import */ var gpio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gpio */ "gpio");
/* harmony import */ var gpio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gpio__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my-own-logger */ "my-own-logger");
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(my_own_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_raspistill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-raspistill */ "node-raspistill");
/* harmony import */ var node_raspistill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_raspistill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shelljs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shelljs */ "shelljs");
/* harmony import */ var shelljs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shelljs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../codes */ "./src/codes/index.js");







const RELAIS = gpio__WEBPACK_IMPORTED_MODULE_0___default.a.export(4, {
  direction: gpio__WEBPACK_IMPORTED_MODULE_0___default.a.DIRECTION.OUT,
  interval: 500,
  ready: () => my_own_logger__WEBPACK_IMPORTED_MODULE_1___default()({
    name: 'GPIO',
    status: 'reg',
    value: 'is ready !'
  })
}); // = on connecte le relais au GPIO 4, et on le configure en sortie

const turnOn = async () => {
  await RELAIS.reset(); // on le remet à zéro au cas où

  await RELAIS.set(); // puis on le passe à 1
};

const turnOff = async () => {
  await RELAIS.reset(); // on éteint le relais
};

const toogleGate = async () => {
  return await turnOn().then(setTimeout(turnOff, 1000)).catch(e => _codes__WEBPACK_IMPORTED_MODULE_5__["GPIOSCode"].err.toogleGateError);
};
const takePhoto = async () => {
  my_own_logger__WEBPACK_IMPORTED_MODULE_1___default()({
    name: 'Raspberry',
    status: 'wait',
    value: 'on prend une photo...'
  });
  const now = new Date();
  const fileName = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('DD-MM-YYYY HH-mm-ss');
  const outputDir = `./src/images`;
  const camera = new node_raspistill__WEBPACK_IMPORTED_MODULE_2__["Raspistill"]({
    time: 1,
    fileName,
    outputDir
  });

  try {
    await camera.takePhoto().then(my_own_logger__WEBPACK_IMPORTED_MODULE_1___default()({
      name: 'Raspberry',
      status: 'ok',
      value: 'la photo est prise !'
    })).catch(e => _codes__WEBPACK_IMPORTED_MODULE_5__["GPIOSCode"].err.takePhotoError);
  } catch (e) {
    return _codes__WEBPACK_IMPORTED_MODULE_5__["GPIOSCode"].err.takePhotoError;
  }
};
const restartRasp = async () => {
  if (shelljs__WEBPACK_IMPORTED_MODULE_4___default.a.exec('sudo reboot').code !== 0) return _codes__WEBPACK_IMPORTED_MODULE_5__["RaspCode"].err.rebootRasp;
};
const restartServer = async () => {
  if (shelljs__WEBPACK_IMPORTED_MODULE_4___default.a.exec('npm restart').code !== 0) return _codes__WEBPACK_IMPORTED_MODULE_5__["RaspCode"].err.rebootServer;
};

/***/ }),

/***/ "./src/helpers/basics.js":
/*!*******************************!*\
  !*** ./src/helpers/basics.js ***!
  \*******************************/
/*! exports provided: isANumber, areNumbers, isIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isANumber", function() { return isANumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areNumbers", function() { return areNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIn", function() { return isIn; });
const isANumber = d => {
  return Number(d).toString() !== 'NaN';
};
const areNumbers = d => {
  return d.filter(e => !isANumber(e)).lenght === 0;
};
const isIn = (number, min, max) => {
  return !(number < min || number > max);
};

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: basics, raspberry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basics */ "./src/helpers/basics.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "basics", function() { return _basics__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _Raspberry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Raspberry */ "./src/helpers/Raspberry.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "raspberry", function() { return _Raspberry__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialize */ "./src/initialize/index.js");
 //On démarre les différents services

_initialize__WEBPACK_IMPORTED_MODULE_0__["setEnvVar"]().then(_initialize__WEBPACK_IMPORTED_MODULE_0__["startServ"]);

/***/ }),

/***/ "./src/initialize/EnvVar.js":
/*!**********************************!*\
  !*** ./src/initialize/EnvVar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NODE_ENV__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NODE_ENV */ "./src/initialize/NODE_ENV/index.js");


const setEnvVar = async () => {
  await Object(_NODE_ENV__WEBPACK_IMPORTED_MODULE_0__["default"])(); // le port du serveur
};

/* harmony default export */ __webpack_exports__["default"] = (setEnvVar);

/***/ }),

/***/ "./src/initialize/NODE_ENV/index.js":
/*!******************************************!*\
  !*** ./src/initialize/NODE_ENV/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/initialize/NODE_ENV/server.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _server__WEBPACK_IMPORTED_MODULE_0__["default"]; });

 //pour définir le port du server

/***/ }),

/***/ "./src/initialize/NODE_ENV/server.js":
/*!*******************************************!*\
  !*** ./src/initialize/NODE_ENV/server.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-own-logger */ "my-own-logger");
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(my_own_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constantes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constantes */ "./src/constantes.js");
 // logger

 // on importe les valeurs des constantes qui sont exclues des exports github

const {
  SERVER_PORT_DEV
} = _constantes__WEBPACK_IMPORTED_MODULE_1__;
const {
  SERVER_PORT_PROD
} = _constantes__WEBPACK_IMPORTED_MODULE_1__;

const definePort = async () => {
  const {
    NODE_ENV
  } = process.env;

  if (NODE_ENV === 'development') {
    await (process.env.SERVER_PORT = SERVER_PORT_DEV);
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "ENV VAR",
      status: 'reg',
      mode: `dev`,
      value: `server variables`
    });
  } else if (NODE_ENV === 'production ') {
    await (process.env.SERVER_PORT = SERVER_PORT_PROD);
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "ENV VAR",
      status: 'reg',
      mode: `prod`,
      value: `server variables`
    });
  } else {
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "ENV VAR",
      status: 'err',
      value: `no env var for server have been defined cause NODE_ENV is not in development or in production`
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (definePort);

/***/ }),

/***/ "./src/initialize/express.js":
/*!***********************************!*\
  !*** ./src/initialize/express.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-own-logger */ "my-own-logger");
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(my_own_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../routes */ "./src/routes/index.js");
 // logger

 //pour le routage

 //pour parser un json


 // import des routes

const startServ = async () => {
  const {
    SERVER_PORT
  } = process.env; //instantiation du serveur

  const app = express__WEBPACK_IMPORTED_MODULE_1___default()(); //paramétrage du serveur

  app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json()); //permet de recevoir un beau Json en body d'une requête

  app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
    extended: true
  }));
  app.use(cors__WEBPACK_IMPORTED_MODULE_3___default()()); //connection des routes au sever

  app.use('/toogleGate', _routes__WEBPACK_IMPORTED_MODULE_4__["GateRoute"]);
  app.use('/temp', _routes__WEBPACK_IMPORTED_MODULE_4__["TempRoute"]);
  app.use('/images', _routes__WEBPACK_IMPORTED_MODULE_4__["ImagesRoute"]);
  app.use('/command', _routes__WEBPACK_IMPORTED_MODULE_4__["CommandRoute"]); //lancement des routes /!\ doit être lancé après la connexion à la base de donnée, sinon les schémas ne seront pas définis

  await _routes__WEBPACK_IMPORTED_MODULE_4__["initializeRoutes"](er => {
    if (er) {
      my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
        name: 'Routes',
        status: 'err',
        value: err
      });
    } else {
      my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
        name: 'Routes',
        status: 'reg',
        value: 'are all initialized !'
      });
    }
  }); //lancement du serveur

  await app.listen(SERVER_PORT, () => {
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "Express",
      status: 'reg',
      value: `is conected on port ${SERVER_PORT}`
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (startServ);

/***/ }),

/***/ "./src/initialize/index.js":
/*!*********************************!*\
  !*** ./src/initialize/index.js ***!
  \*********************************/
/*! exports provided: setEnvVar, startServ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnvVar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnvVar */ "./src/initialize/EnvVar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEnvVar", function() { return _EnvVar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ "./src/initialize/express.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startServ", function() { return _express__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./src/routes/command/command.js":
/*!***************************************!*\
  !*** ./src/routes/command/command.js ***!
  \***************************************/
/*! exports provided: CommandRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandRoute", function() { return CommandRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return initializeRoute; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares */ "./src/routes/command/middlewares/index.js");

 //instanciation de la route

const CommandRoute = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const initializeRoute = async () => {
  CommandRoute.post('/restart/:service', _middlewares__WEBPACK_IMPORTED_MODULE_1__["restartService"]);
};

/***/ }),

/***/ "./src/routes/command/index.js":
/*!*************************************!*\
  !*** ./src/routes/command/index.js ***!
  \*************************************/
/*! exports provided: CommandRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command */ "./src/routes/command/command.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommandRoute", function() { return _command__WEBPACK_IMPORTED_MODULE_0__["CommandRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return _command__WEBPACK_IMPORTED_MODULE_0__["initializeRoute"]; });



/***/ }),

/***/ "./src/routes/command/middlewares/index.js":
/*!*************************************************!*\
  !*** ./src/routes/command/middlewares/index.js ***!
  \*************************************************/
/*! exports provided: restartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restartService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restartService */ "./src/routes/command/middlewares/restartService.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restartService", function() { return _restartService__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/routes/command/middlewares/restartService.js":
/*!**********************************************************!*\
  !*** ./src/routes/command/middlewares/restartService.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../codes */ "./src/codes/index.js");
/* harmony import */ var _helpers_Raspberry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/Raspberry */ "./src/helpers/Raspberry.js");



const restartService = (req, res) => {
  switch (req.params.service) {
    case 'Raspberry':
      Object(_helpers_Raspberry__WEBPACK_IMPORTED_MODULE_1__["restartRasp"])().then(err => {
        if (err) return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_0__["RaspCode"].err.rebootRasp);else return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_0__["RaspCode"].suc.rebootRasp);
      });
      break;

    case 'Server':
      Object(_helpers_Raspberry__WEBPACK_IMPORTED_MODULE_1__["restartServer"])().then(err => {
        if (err) return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_0__["RaspCode"].err.rebootServer);else return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_0__["RaspCode"].suc.rebootServer);
      });
      break;

    default:
      res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_0__["RaspCode"].err.serviceUnknow);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (restartService);

/***/ }),

/***/ "./src/routes/images/images.js":
/*!*************************************!*\
  !*** ./src/routes/images/images.js ***!
  \*************************************/
/*! exports provided: ImageRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageRoute", function() { return ImageRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return initializeRoute; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares */ "./src/routes/images/middlewares/index.js");

 //instanciation de la route

const ImageRoute = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const initializeRoute = async () => {
  ImageRoute.get('/all', _middlewares__WEBPACK_IMPORTED_MODULE_1__["allImages"]);
  ImageRoute.get('/:name', _middlewares__WEBPACK_IMPORTED_MODULE_1__["uniqueImage"]);
  ImageRoute.delete('/:name', _middlewares__WEBPACK_IMPORTED_MODULE_1__["deleteImage"]);
};

/***/ }),

/***/ "./src/routes/images/index.js":
/*!************************************!*\
  !*** ./src/routes/images/index.js ***!
  \************************************/
/*! exports provided: ImageRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ "./src/routes/images/images.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageRoute", function() { return _images__WEBPACK_IMPORTED_MODULE_0__["ImageRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return _images__WEBPACK_IMPORTED_MODULE_0__["initializeRoute"]; });



/***/ }),

/***/ "./src/routes/images/middlewares/allImages.js":
/*!****************************************************!*\
  !*** ./src/routes/images/middlewares/allImages.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);



const allImages = (req, res) => {
  const directoryPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../../../images');
  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readdir(directoryPath, (err, files) => {
    if (err) return console.log('Unable to scan directory: ' + err);else {
      return res.status(200).send(files.map(f => {
        const size = fs__WEBPACK_IMPORTED_MODULE_1___default.a.statSync(path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, `../../../images/${f}`)).size / 1000.0;
        return {
          name: f,
          size
        };
      }));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (allImages);
/* WEBPACK VAR INJECTION */}.call(this, "src/routes/images/middlewares"))

/***/ }),

/***/ "./src/routes/images/middlewares/deleteImage.js":
/*!******************************************************!*\
  !*** ./src/routes/images/middlewares/deleteImage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! my-own-logger */ "my-own-logger");
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(my_own_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../codes */ "./src/codes/index.js");





const deleteImage = (req, res) => {
  const filePath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../../../images', req.params.name);

  try {
    fs__WEBPACK_IMPORTED_MODULE_1___default.a.unlinkSync(filePath);
    my_own_logger__WEBPACK_IMPORTED_MODULE_2___default()({
      name: 'Raspberry',
      value: 'l\'image a été supprimée',
      status: 'ok'
    });
    return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_3__["RaspCode"].suc.imageDeleted);
  } catch (err) {
    my_own_logger__WEBPACK_IMPORTED_MODULE_2___default()({
      name: 'Raspberry',
      status: 'err',
      value: 'erreur lors de la suppression de l\'image'
    });
    return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_3__["basicsCode"].err.internalError);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (deleteImage);
/* WEBPACK VAR INJECTION */}.call(this, "src/routes/images/middlewares"))

/***/ }),

/***/ "./src/routes/images/middlewares/index.js":
/*!************************************************!*\
  !*** ./src/routes/images/middlewares/index.js ***!
  \************************************************/
/*! exports provided: allImages, uniqueImage, deleteImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allImages */ "./src/routes/images/middlewares/allImages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allImages", function() { return _allImages__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _uniqueImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniqueImage */ "./src/routes/images/middlewares/uniqueImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueImage", function() { return _uniqueImage__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _deleteImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteImage */ "./src/routes/images/middlewares/deleteImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteImage", function() { return _deleteImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/routes/images/middlewares/uniqueImage.js":
/*!******************************************************!*\
  !*** ./src/routes/images/middlewares/uniqueImage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sharp */ "sharp");
/* harmony import */ var sharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sharp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../codes */ "./src/codes/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};

const uniqueImage = async (req, res) => {
  let file = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, `../../../images/${req.params.name}`);
  const type = mime[path__WEBPACK_IMPORTED_MODULE_0___default.a.extname(file).slice(1)] || 'text/plain';
  let {
    width,
    height,
    quality
  } = req.query;
  let options = {};
  let transformer = sharp__WEBPACK_IMPORTED_MODULE_2___default()(); // on vérifie les paramètres !

  if (width !== undefined) {
    width = Number(width);
    if (!_helpers__WEBPACK_IMPORTED_MODULE_4__["basics"].isANumber(width) || !_helpers__WEBPACK_IMPORTED_MODULE_4__["basics"].isIn(width, 1, 5000)) return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_3__["basicsCode"].err.wrongQuery);
    options = _objectSpread({}, options, {
      width
    });
  } else if (height === undefined) options = _objectSpread({}, options, {
    width: 300
  });

  if (height !== undefined) {
    if (!_helpers__WEBPACK_IMPORTED_MODULE_4__["basics"].isANumber(height) || !_helpers__WEBPACK_IMPORTED_MODULE_4__["basics"].isIn(height, 1, 5000)) return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_3__["basicsCode"].err.wrongQuery);
    options = _objectSpread({}, options, {
      height: Number(height)
    });
    if (width !== undefined) options = _objectSpread({}, options, {
      position: sharp__WEBPACK_IMPORTED_MODULE_2___default.a.strategy.attention
    });
  }

  if (quality !== undefined) {
    quality = Number(quality);
    if (!_helpers__WEBPACK_IMPORTED_MODULE_4__["basics"].isANumber(quality) || !_helpers__WEBPACK_IMPORTED_MODULE_4__["basics"].isIn(quality, 0, 100)) return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_3__["basicsCode"].err.wrongQuery);
  } else quality = 50;

  if (quality !== 0) transformer = transformer.resize(options).webp({
    quality
  });
  console.log(options);
  const s = fs__WEBPACK_IMPORTED_MODULE_1___default.a.createReadStream(file);
  s.on('open', function () {
    res.set('Content-Type', type);
    s.pipe(transformer).pipe(res);
  });
  s.on('error', function () {
    res.set('Content-Type', 'text/plain');
    res.status(404).end(_codes__WEBPACK_IMPORTED_MODULE_3__["ImageCode"].err.photoNotFound);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (uniqueImage);
/* WEBPACK VAR INJECTION */}.call(this, "src/routes/images/middlewares"))

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: GateRoute, TempRoute, ImagesRoute, CommandRoute, initializeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateRoute", function() { return GateRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempRoute", function() { return TempRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesRoute", function() { return ImagesRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandRoute", function() { return CommandRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRoutes", function() { return initializeRoutes; });
/* harmony import */ var _toogleGate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toogleGate */ "./src/routes/toogleGate/index.js");
/* harmony import */ var _temp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temp */ "./src/routes/temp/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./src/routes/images/index.js");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./command */ "./src/routes/command/index.js");
//on importe toutes les routes




const GateRoute = _toogleGate__WEBPACK_IMPORTED_MODULE_0__["GateRoute"];
const TempRoute = _temp__WEBPACK_IMPORTED_MODULE_1__["TempRoute"];
const ImagesRoute = _images__WEBPACK_IMPORTED_MODULE_2__["ImageRoute"];
const CommandRoute = _command__WEBPACK_IMPORTED_MODULE_3__["CommandRoute"];
const initializeRoutes = async callback => {
  let errors;

  try {
    await _toogleGate__WEBPACK_IMPORTED_MODULE_0__["initializeRoute"]();
  } catch (error) {
    errors += error;
  }

  try {
    await _temp__WEBPACK_IMPORTED_MODULE_1__["initializeRoute"]();
  } catch (error) {
    errors += error;
  }

  try {
    await _images__WEBPACK_IMPORTED_MODULE_2__["initializeRoute"]();
  } catch (error) {
    errors += error;
  }

  try {
    await _command__WEBPACK_IMPORTED_MODULE_3__["initializeRoute"]();
  } catch (error) {
    errors += error;
  }

  !errors ? callback(errors) : callback();
};

/***/ }),

/***/ "./src/routes/temp/cpuTemp.js":
/*!************************************!*\
  !*** ./src/routes/temp/cpuTemp.js ***!
  \************************************/
/*! exports provided: TempRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempRoute", function() { return TempRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return initializeRoute; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares */ "./src/routes/temp/middlewares/index.js");

 //instanciation de la route

const TempRoute = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const initializeRoute = async () => {
  TempRoute.get('/cpu', _middlewares__WEBPACK_IMPORTED_MODULE_1__["getCPUTemp"]);
};

/***/ }),

/***/ "./src/routes/temp/index.js":
/*!**********************************!*\
  !*** ./src/routes/temp/index.js ***!
  \**********************************/
/*! exports provided: TempRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cpuTemp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cpuTemp */ "./src/routes/temp/cpuTemp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TempRoute", function() { return _cpuTemp__WEBPACK_IMPORTED_MODULE_0__["TempRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return _cpuTemp__WEBPACK_IMPORTED_MODULE_0__["initializeRoute"]; });



/***/ }),

/***/ "./src/routes/temp/middlewares/getCPUTemp.js":
/*!***************************************************!*\
  !*** ./src/routes/temp/middlewares/getCPUTemp.js ***!
  \***************************************************/
/*! exports provided: getCPUTemp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCPUTemp", function() { return getCPUTemp; });
/* harmony import */ var pi_temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pi-temperature */ "pi-temperature");
/* harmony import */ var pi_temperature__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pi_temperature__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my-own-logger */ "my-own-logger");
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(my_own_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../codes */ "./src/codes/index.js");



const getCPUTemp = async (req, res) => {
  try {
    pi_temperature__WEBPACK_IMPORTED_MODULE_0___default.a.measure((err, temp) => {
      if (err) {
        my_own_logger__WEBPACK_IMPORTED_MODULE_1___default()({
          name: 'Raspberry',
          status: 'err',
          value: _codes__WEBPACK_IMPORTED_MODULE_2__["RaspCode"].err.readingCPUTempError.description
        });
        return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_2__["RaspCode"].err.readingCPUTempError);
      } else {
        my_own_logger__WEBPACK_IMPORTED_MODULE_1___default()({
          name: 'Raspberry',
          status: 'info',
          value: `CPU temp : ${temp}`
        });
        return res.status(200).send({
          temp
        });
      }
    });
  } catch (e) {
    my_own_logger__WEBPACK_IMPORTED_MODULE_1___default()({
      name: 'Raspberry',
      status: 'err',
      value: _codes__WEBPACK_IMPORTED_MODULE_2__["RaspCode"].err.readingCPUTempError.description
    });
    return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_2__["RaspCode"].err.readingCPUTempError);
  }
};

/***/ }),

/***/ "./src/routes/temp/middlewares/index.js":
/*!**********************************************!*\
  !*** ./src/routes/temp/middlewares/index.js ***!
  \**********************************************/
/*! exports provided: getCPUTemp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCPUTemp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCPUTemp */ "./src/routes/temp/middlewares/getCPUTemp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCPUTemp", function() { return _getCPUTemp__WEBPACK_IMPORTED_MODULE_0__["getCPUTemp"]; });



/***/ }),

/***/ "./src/routes/toogleGate/gate.js":
/*!***************************************!*\
  !*** ./src/routes/toogleGate/gate.js ***!
  \***************************************/
/*! exports provided: GateRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateRoute", function() { return GateRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return initializeRoute; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares */ "./src/routes/toogleGate/middlewares/index.js");

 //instanciation de la route

const GateRoute = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const initializeRoute = async () => {
  GateRoute.post('/', _middlewares__WEBPACK_IMPORTED_MODULE_1__["postToogleGate"]);
};

/***/ }),

/***/ "./src/routes/toogleGate/index.js":
/*!****************************************!*\
  !*** ./src/routes/toogleGate/index.js ***!
  \****************************************/
/*! exports provided: GateRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gate */ "./src/routes/toogleGate/gate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GateRoute", function() { return _gate__WEBPACK_IMPORTED_MODULE_0__["GateRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return _gate__WEBPACK_IMPORTED_MODULE_0__["initializeRoute"]; });



/***/ }),

/***/ "./src/routes/toogleGate/middlewares/index.js":
/*!****************************************************!*\
  !*** ./src/routes/toogleGate/middlewares/index.js ***!
  \****************************************************/
/*! exports provided: postToogleGate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toogleGate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toogleGate */ "./src/routes/toogleGate/middlewares/toogleGate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "postToogleGate", function() { return _toogleGate__WEBPACK_IMPORTED_MODULE_0__["postToogleGate"]; });



/***/ }),

/***/ "./src/routes/toogleGate/middlewares/toogleGate.js":
/*!*********************************************************!*\
  !*** ./src/routes/toogleGate/middlewares/toogleGate.js ***!
  \*********************************************************/
/*! exports provided: postToogleGate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postToogleGate", function() { return postToogleGate; });
/* harmony import */ var _helpers_Raspberry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/Raspberry */ "./src/helpers/Raspberry.js");
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../codes */ "./src/codes/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const postToogleGate = async (req, res) => {
  return Object(_helpers_Raspberry__WEBPACK_IMPORTED_MODULE_0__["toogleGate"])().then(err => {
    if (err) return res.status(200).send(err);else return Object(_helpers_Raspberry__WEBPACK_IMPORTED_MODULE_0__["takePhoto"])().then(err => {
      if (err) return res.status(200).send(_objectSpread({}, err, {
        description: `${err.description} but gate is toogled !`
      }));else return res.status(200).send(_codes__WEBPACK_IMPORTED_MODULE_1__["GPIOSCode"].suc.relayOK);
    });
  });
};

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pi/repos/portail/backend/src/index.js */"./src/index.js");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gpio":
/*!***********************!*\
  !*** external "gpio" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gpio");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "my-own-logger":
/*!********************************!*\
  !*** external "my-own-logger" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("my-own-logger");

/***/ }),

/***/ "node-raspistill":
/*!**********************************!*\
  !*** external "node-raspistill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-raspistill");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "pi-temperature":
/*!*********************************!*\
  !*** external "pi-temperature" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pi-temperature");

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sharp");

/***/ }),

/***/ "shelljs":
/*!**************************!*\
  !*** external "shelljs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shelljs");

/***/ })

/******/ });
//# sourceMappingURL=main.map