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
/*! exports provided: internalError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "internalError", function() { return internalError; });
const internalError = {
  code: 'e500',
  description: 'internal error occured'
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

/***/ "./src/codes/Raspberry/errors.js":
/*!***************************************!*\
  !*** ./src/codes/Raspberry/errors.js ***!
  \***************************************/
/*! exports provided: readingCPUTempError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readingCPUTempError", function() { return readingCPUTempError; });
const readingCPUTempError = {
  code: 'e4',
  description: 'error during reading CPU temperature'
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
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_success__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "suc", function() { return _success__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/codes/Raspberry/success.js":
/*!****************************************!*\
  !*** ./src/codes/Raspberry/success.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/codes/index.js":
/*!****************************!*\
  !*** ./src/codes/index.js ***!
  \****************************/
/*! exports provided: basicsCode, GPIOSCode, RaspCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Basics */ "./src/codes/Basics/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "basicsCode", function() { return _Basics__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _GPIOS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GPIOS */ "./src/codes/GPIOS/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "GPIOSCode", function() { return _GPIOS__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _Raspberry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Raspberry */ "./src/codes/Raspberry/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "RaspCode", function() { return _Raspberry__WEBPACK_IMPORTED_MODULE_2__; });





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
/*! exports provided: RELAIS, toogleGate, takePhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELAIS", function() { return RELAIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleGate", function() { return toogleGate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takePhoto", function() { return takePhoto; });
/* harmony import */ var gpio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gpio */ "gpio");
/* harmony import */ var gpio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gpio__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! my-own-logger */ "my-own-logger");
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(my_own_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var node_raspistill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-raspistill */ "node-raspistill");
/* harmony import */ var node_raspistill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_raspistill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_and_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-and-time */ "date-and-time");
/* harmony import */ var date_and_time__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_and_time__WEBPACK_IMPORTED_MODULE_4__);
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

const _savePhoto = async photo => {
  const nowTime = date_and_time__WEBPACK_IMPORTED_MODULE_4___default.a.format(now, 'DD-MM-YYYY_HH-mm-ss');
  const path = `../image/${nowTime}.jpg`;
  return await fs__WEBPACK_IMPORTED_MODULE_3___default.a.writeFile(path, photo, 'binary', err => {
    if (err) return err;
    my_own_logger__WEBPACK_IMPORTED_MODULE_1___default()({
      name: 'Raspberry',
      status: 'ok',
      value: 'photo taken and saved'
    });
  });
};

const takePhoto = async () => {
  const camera = new node_raspistill__WEBPACK_IMPORTED_MODULE_2__["Raspistill"]();
  return await camera.takePhoto().then(photo => {
    _savePhoto(photo).catch(e => _codes__WEBPACK_IMPORTED_MODULE_5__["GPIOSCode"].err.savePhotoError);
  }).catch(e => _codes__WEBPACK_IMPORTED_MODULE_5__["GPIOSCode"].err.takePhotoError);
};

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
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./src/routes/index.js");
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
  })); //connection des routes au sever

  app.use('/toogleGate', _routes__WEBPACK_IMPORTED_MODULE_3__["GateRoute"]);
  app.use('/temp', _routes__WEBPACK_IMPORTED_MODULE_3__["TempRoute"]);
  app.use('/images', _routes__WEBPACK_IMPORTED_MODULE_3__["ImagesRoute"]); //lancement des routes /!\ doit être lancé après la connexion à la base de donnée, sinon les schémas ne seront pas définis

  await _routes__WEBPACK_IMPORTED_MODULE_3__["initializeRoutes"](er => {
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
/* WEBPACK VAR INJECTION */}.call(this, "src\\routes\\images\\middlewares"))

/***/ }),

/***/ "./src/routes/images/middlewares/index.js":
/*!************************************************!*\
  !*** ./src/routes/images/middlewares/index.js ***!
  \************************************************/
/*! exports provided: allImages, uniqueImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allImages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allImages */ "./src/routes/images/middlewares/allImages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allImages", function() { return _allImages__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _uniqueImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uniqueImage */ "./src/routes/images/middlewares/uniqueImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueImage", function() { return _uniqueImage__WEBPACK_IMPORTED_MODULE_1__["default"]; });





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
  const file = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, `../../../images/${req.params.name}`);
  console.log(file);
  const type = mime[path__WEBPACK_IMPORTED_MODULE_0___default.a.extname(file).slice(1)] || 'text/plain';
  console.log(type);
  let s = fs__WEBPACK_IMPORTED_MODULE_1___default.a.createReadStream(file);
  s.on('open', function () {
    res.set('Content-Type', type);
    s.pipe(res);
  });
  s.on('error', function () {
    res.set('Content-Type', 'text/plain');
    res.status(404).end('Not found');
  });
};

/* harmony default export */ __webpack_exports__["default"] = (uniqueImage);
/* WEBPACK VAR INJECTION */}.call(this, "src\\routes\\images\\middlewares"))

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: initializeRoutes, GateRoute, TempRoute, ImagesRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRoutes", function() { return initializeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateRoute", function() { return GateRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempRoute", function() { return TempRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesRoute", function() { return ImagesRoute; });
/* harmony import */ var _toogleGate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toogleGate */ "./src/routes/toogleGate/index.js");
/* harmony import */ var _temp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./temp */ "./src/routes/temp/index.js");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images */ "./src/routes/images/index.js");
//on importe toutes les routes



const GateRoute = _toogleGate__WEBPACK_IMPORTED_MODULE_0__["GateRoute"];
const TempRoute = _temp__WEBPACK_IMPORTED_MODULE_1__["TempRoute"];
const ImagesRoute = _images__WEBPACK_IMPORTED_MODULE_2__["ImageRoute"];

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
      if (err) return res.status(500).send(_codes__WEBPACK_IMPORTED_MODULE_2__["RaspCode"].err.readingCPUTempError);else return res.status(200).send({
        temp
      });
    });
  } catch (e) {
    console.log('on rentre enfin dans le catch...');
  } finally {
    my_own_logger__WEBPACK_IMPORTED_MODULE_1___default()({
      name: 'Raspberry',
      status: 'err',
      value: _codes__WEBPACK_IMPORTED_MODULE_2__["RaspCode"].err.readingCPUTempError.description
    });
    return res.status(500).send(_codes__WEBPACK_IMPORTED_MODULE_2__["RaspCode"].err.readingCPUTempError);
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const postToogleGate = async (req, res) => {
  Object(_helpers_Raspberry__WEBPACK_IMPORTED_MODULE_0__["toogleGate"])().then(err => {
    if (err) return res.status(500).send(err);
    Object(_helpers_Raspberry__WEBPACK_IMPORTED_MODULE_0__["takePhoto"])().then(err => {
      if (err) return res.status(500).send(_objectSpread({}, err, {
        description: `${err.description} but gate is toogled !`
      }));
      return res.status(500).send(err);
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

module.exports = __webpack_require__(/*! C:\Users\Chappie\Repos\portail\backend\src/index.js */"./src/index.js");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "date-and-time":
/*!********************************!*\
  !*** external "date-and-time" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-and-time");

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

/***/ })

/******/ });
//# sourceMappingURL=main.map