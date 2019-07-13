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

/***/ "./src/codes/Users/errors.js":
/*!***********************************!*\
  !*** ./src/codes/Users/errors.js ***!
  \***********************************/
/*! exports provided: emailExists, usernameExists, tokenExists, unknownTypeToCheck, wrongToken, tokenDoesNotExists, tokenIsNotSpecified, usernameIsNotSpecified, emailIsNotSpecified, nameIsNotSpecified, lastnameIsNotSpecified, passwordIsNotSpecified */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailExists", function() { return emailExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernameExists", function() { return usernameExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenExists", function() { return tokenExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unknownTypeToCheck", function() { return unknownTypeToCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrongToken", function() { return wrongToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenDoesNotExists", function() { return tokenDoesNotExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenIsNotSpecified", function() { return tokenIsNotSpecified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernameIsNotSpecified", function() { return usernameIsNotSpecified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailIsNotSpecified", function() { return emailIsNotSpecified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nameIsNotSpecified", function() { return nameIsNotSpecified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastnameIsNotSpecified", function() { return lastnameIsNotSpecified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordIsNotSpecified", function() { return passwordIsNotSpecified; });
const emailExists = {
  code: 'e01',
  description: 'email is already used because it was found in our database'
};
const usernameExists = {
  code: 'e02',
  description: 'username is already used because it was found in our database'
};
const tokenExists = {
  code: 'e03',
  description: 'token is already used because it was found in our database'
};
const unknownTypeToCheck = {
  code: 'e04',
  description: 'the type to check if it exist in our database is unknown'
};
const wrongToken = {
  code: 'e05',
  description: 'token is unauthorized !'
};
const tokenDoesNotExists = {
  code: 'e06',
  description: 'token does not exists !'
};
const tokenIsNotSpecified = {
  code: 'e07',
  description: 'token is not specified. Please specify a token'
};
const usernameIsNotSpecified = {
  code: 'e08',
  description: 'username is not specified. Please specify a username'
};
const emailIsNotSpecified = {
  code: 'e09',
  description: 'email is not specified. Please specify an email'
};
const nameIsNotSpecified = {
  code: 'e10',
  description: 'nameis not specified. Please specify a name'
};
const lastnameIsNotSpecified = {
  code: 'e11',
  description: 'lastname is not specified. Please specify a lastname'
};
const passwordIsNotSpecified = {
  code: 'e12',
  description: 'password is not specified. Please specify a password'
};

/***/ }),

/***/ "./src/codes/Users/index.js":
/*!**********************************!*\
  !*** ./src/codes/Users/index.js ***!
  \**********************************/
/*! exports provided: err, suc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./src/codes/Users/errors.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "err", function() { return _errors__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success */ "./src/codes/Users/success.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "suc", function() { return _success__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/codes/Users/success.js":
/*!************************************!*\
  !*** ./src/codes/Users/success.js ***!
  \************************************/
/*! exports provided: userCreated, tokenAdded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCreated", function() { return userCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenAdded", function() { return tokenAdded; });
const userCreated = {
  code: 's1',
  description: 'user was created !'
};
const tokenAdded = {
  code: 's2',
  description: 'token was correctly added to the database !'
};

/***/ }),

/***/ "./src/codes/index.js":
/*!****************************!*\
  !*** ./src/codes/index.js ***!
  \****************************/
/*! exports provided: basicsCode, userCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Basics */ "./src/codes/Basics/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "basicsCode", function() { return _Basics__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users */ "./src/codes/Users/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "userCode", function() { return _Users__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/constantes.js":
/*!***************************!*\
  !*** ./src/constantes.js ***!
  \***************************/
/*! exports provided: DB_HOSTNAME_DEV, DB_PORT_DEV, DB_NAME_DEV, DB_HOSTNAME_PROD, DB_PORT_PROD, DB_NAME_PROD, SERVER_PORT_DEV, SERVER_PORT_PROD, DEFAULT_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_HOSTNAME_DEV", function() { return DB_HOSTNAME_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_PORT_DEV", function() { return DB_PORT_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_NAME_DEV", function() { return DB_NAME_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_HOSTNAME_PROD", function() { return DB_HOSTNAME_PROD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_PORT_PROD", function() { return DB_PORT_PROD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DB_NAME_PROD", function() { return DB_NAME_PROD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_PORT_DEV", function() { return SERVER_PORT_DEV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_PORT_PROD", function() { return SERVER_PORT_PROD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TOKEN", function() { return DEFAULT_TOKEN; });
//databse constantes
const DB_HOSTNAME_DEV = "localhost";
const DB_PORT_DEV = "27017";
const DB_NAME_DEV = "domotic";
const DB_HOSTNAME_PROD = "localhost";
const DB_PORT_PROD = "27017";
const DB_NAME_PROD = "domotic"; //server constantes

const SERVER_PORT_DEV = "5973"; // port d'écoute du serveur en développement

const SERVER_PORT_PROD = "4957"; // port d'écoute du serveur en production
//variables de développement

const DEFAULT_TOKEN = "8637104155366878";

/***/ }),

/***/ "./src/database/schemas/history.js":
/*!*****************************************!*\
  !*** ./src/database/schemas/history.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const historySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  token: String,
  date: Date,
  action: String
}, {
  versionKey: false
}, {
  collection: 'history'
});
/* harmony default export */ __webpack_exports__["default"] = (historySchema);

/***/ }),

/***/ "./src/database/schemas/index.js":
/*!***************************************!*\
  !*** ./src/database/schemas/index.js ***!
  \***************************************/
/*! exports provided: usersSchema, historySchema, tokenSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./src/database/schemas/users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usersSchema", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history */ "./src/database/schemas/history.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "historySchema", function() { return _history__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokens */ "./src/database/schemas/tokens.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenSchema", function() { return _tokens__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/database/schemas/tokens.js":
/*!****************************************!*\
  !*** ./src/database/schemas/tokens.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const tokenSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  token: {
    type: String,
    unique: true
  },
  isAdmin: Boolean,
  isAllowed: Boolean
}, {
  versionKey: false
}, {
  collection: 'tokens'
});
/* harmony default export */ __webpack_exports__["default"] = (tokenSchema);

/***/ }),

/***/ "./src/database/schemas/users.js":
/*!***************************************!*\
  !*** ./src/database/schemas/users.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const usersSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  lastname: String,
  name: String,
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: String,
  token: String
}, {
  versionKey: false
}, {
  collection: 'users'
});
/* harmony default export */ __webpack_exports__["default"] = (usersSchema);

/***/ }),

/***/ "./src/helpers/GPIO.js":
/*!*****************************!*\
  !*** ./src/helpers/GPIO.js ***!
  \*****************************/
/*! exports provided: RELAIS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RELAIS", function() { return RELAIS; });
/* harmony import */ var gpio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gpio */ "gpio");
/* harmony import */ var gpio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gpio__WEBPACK_IMPORTED_MODULE_0__);

const RELAIS = gpio__WEBPACK_IMPORTED_MODULE_0___default.a.export(4, {
  direction: gpio__WEBPACK_IMPORTED_MODULE_0___default.a.DIRECTION.OUT,
  interval: 500,
  ready: () => {
    turnOn().then(setTimeout(turnOff(), 1000));
  }
}); // = on connecte le relais au GPIO 4, et on le configure en sortie

const turnOn = async () => {
  await RELAIS.reset(); // on le remet à zéro au cas où

  await RELAIS.set(); // puis on le passe à 1
};

const turnOff = async () => {
  await RELAIS.reset(); // on éteint le relais
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

_initialize__WEBPACK_IMPORTED_MODULE_0__["setEnvVar"]().then(_initialize__WEBPACK_IMPORTED_MODULE_0__["startDB"]).then(_initialize__WEBPACK_IMPORTED_MODULE_0__["startServ"]);

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
  await _NODE_ENV__WEBPACK_IMPORTED_MODULE_0__["definePort"](); // le port du serveur

  await _NODE_ENV__WEBPACK_IMPORTED_MODULE_0__["defineDB"](); // on crée les variables environnement pour gérer le database
};

/* harmony default export */ __webpack_exports__["default"] = (setEnvVar);

/***/ }),

/***/ "./src/initialize/NODE_ENV/database.js":
/*!*********************************************!*\
  !*** ./src/initialize/NODE_ENV/database.js ***!
  \*********************************************/
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
  DB_HOSTNAME_DEV
} = _constantes__WEBPACK_IMPORTED_MODULE_1__;
const {
  DB_PORT_DEV
} = _constantes__WEBPACK_IMPORTED_MODULE_1__;
const {
  DB_NAME_DEV
} = _constantes__WEBPACK_IMPORTED_MODULE_1__;
const {
  DB_HOSTNAME_PROD
} = _constantes__WEBPACK_IMPORTED_MODULE_1__;
const {
  DB_PORT_PROD
} = _constantes__WEBPACK_IMPORTED_MODULE_1__;
const {
  DB_NAME_PROD
} = _constantes__WEBPACK_IMPORTED_MODULE_1__;

const defineDB = async () => {
  const {
    NODE_ENV
  } = process.env;

  if (NODE_ENV === 'development') {
    await (process.env.DB_HOSTNAME = DB_HOSTNAME_DEV);
    await (process.env.DB_PORT = DB_PORT_DEV);
    await (process.env.DB_NAME = DB_NAME_DEV);
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "ENV VAR",
      status: 'reg',
      mode: `dev`,
      value: `dataBase variables`
    });
  } else if (NODE_ENV === 'production ') {
    await (process.env.DB_HOSTNAME = DB_HOSTNAME_PROD);
    await (process.env.DB_PORT = DB_HOSTNAME_PROD);
    await (process.env.DB_NAME = DB_HOSTNAME_PROD);
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "ENV VAR",
      status: 'reg',
      mode: `prod`,
      value: `dataBase variables`
    });
  } else {
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "ENV VAR",
      status: 'err',
      value: `no env var for database have been defined cause NODE_ENV is not in development or in production`
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (defineDB);

/***/ }),

/***/ "./src/initialize/NODE_ENV/index.js":
/*!******************************************!*\
  !*** ./src/initialize/NODE_ENV/index.js ***!
  \******************************************/
/*! exports provided: definePort, defineDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server */ "./src/initialize/NODE_ENV/server.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "definePort", function() { return _server__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database */ "./src/initialize/NODE_ENV/database.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineDB", function() { return _database__WEBPACK_IMPORTED_MODULE_1__["default"]; });

 //pour définir le port du server

 // pour définir les consatntes de connexion à la base de données



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
  })); //connection des routes au SERVER_PORT

  app.use('/gate', _routes__WEBPACK_IMPORTED_MODULE_3__["GateRoute"]);
  app.use('/users', _routes__WEBPACK_IMPORTED_MODULE_3__["UsersRoute"]); //lancement des routes /!\ doit être lancé après la connexion à la base de donnée, sinon les schémas ne seront pas définis

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
/*! exports provided: setEnvVar, startDB, startServ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnvVar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnvVar */ "./src/initialize/EnvVar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEnvVar", function() { return _EnvVar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mongo */ "./src/initialize/mongo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startDB", function() { return _mongo__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./express */ "./src/initialize/express.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startServ", function() { return _express__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/initialize/mongo.js":
/*!*********************************!*\
  !*** ./src/initialize/mongo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-own-logger */ "my-own-logger");
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(my_own_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_schemas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database/schemas */ "./src/database/schemas/index.js");
 // logger




const startDB = async () => {
  //on importe les variables environnement préalablement définies
  const {
    DB_HOSTNAME,
    DB_PORT,
    DB_NAME
  } = process.env; // on en déduit l'url de connexion de la bdd mongodb

  const url = `mongodb://${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`; //on paramètre les options de la connexion à la base

  const options = {
    promiseLibrary: Promise,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    connectTimeoutMS: 1000 //fonction permettant d'afficher les erreurs s'il y en a lors de la connexion à la base

  };

  const _mongooseConnectLogResult = error => {
    if (error) my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "MongoDB",
      status: 'err',
      value: `${error}`
    });
  }; //On paramètre les événement de mongoose


  mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on("connecting", () => {
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "MongoDB",
      status: 'wait',
      value: `is starting up...`
    });
  });
  mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on("connected", () => {
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "MongoDB",
      status: 'reg',
      value: `is connected on port ${DB_PORT} !`
    });
  });
  mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on("disconnecting", () => {
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "MongoDB",
      status: 'wait',
      value: `is diconnecting...`
    });
  });
  mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on("disconnected", () => {
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "MongoDB",
      status: 'warn',
      value: `is disconnected !`
    });
  });
  mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.on("error", () => {
    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: "MongoDB",
      status: 'err',
      value: `error !`
    });
  }); //on définit les schémas de la bdd

  mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('User', _database_schemas__WEBPACK_IMPORTED_MODULE_2__["usersSchema"]);
  mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('History', _database_schemas__WEBPACK_IMPORTED_MODULE_2__["historySchema"]);
  mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('Token', _database_schemas__WEBPACK_IMPORTED_MODULE_2__["tokenSchema"]); //on lance et on attend la connexion à la base

  await mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(url, options, _mongooseConnectLogResult);
};

/* harmony default export */ __webpack_exports__["default"] = (startDB);

/***/ }),

/***/ "./src/routes/gate/gate.js":
/*!*********************************!*\
  !*** ./src/routes/gate/gate.js ***!
  \*********************************/
/*! exports provided: GateRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateRoute", function() { return GateRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return initializeRoute; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares */ "./src/routes/gate/middlewares/index.js");
 //import des middlewares

 //instanciation de la route

const GateRoute = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const initializeRoute = async () => {
  GateRoute.put('/toogle', _middlewares__WEBPACK_IMPORTED_MODULE_1__["toogle"]);
};

/***/ }),

/***/ "./src/routes/gate/index.js":
/*!**********************************!*\
  !*** ./src/routes/gate/index.js ***!
  \**********************************/
/*! exports provided: GateRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gate */ "./src/routes/gate/gate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GateRoute", function() { return _gate__WEBPACK_IMPORTED_MODULE_0__["GateRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return _gate__WEBPACK_IMPORTED_MODULE_0__["initializeRoute"]; });



/***/ }),

/***/ "./src/routes/gate/middlewares/index.js":
/*!**********************************************!*\
  !*** ./src/routes/gate/middlewares/index.js ***!
  \**********************************************/
/*! exports provided: toogle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toogle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toogle.js */ "./src/routes/gate/middlewares/toogle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toogle", function() { return _toogle_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/routes/gate/middlewares/toogle.js":
/*!***********************************************!*\
  !*** ./src/routes/gate/middlewares/toogle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_GPIO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/GPIO */ "./src/helpers/GPIO.js");

 //regarder dans la BDD si le token de l'utilisateur est bon

const toggle = async () => {
  await Object(_helpers_GPIO__WEBPACK_IMPORTED_MODULE_1__["RELAIS"])();
};

/* harmony default export */ __webpack_exports__["default"] = (toggle); // middleware to execute when we are in gate/toogle on a PUT

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: initializeRoutes, GateRoute, UsersRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRoutes", function() { return initializeRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GateRoute", function() { return GateRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoute", function() { return UsersRoute; });
/* harmony import */ var _gate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gate */ "./src/routes/gate/index.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ "./src/routes/users/index.js");
//on importe toutes les routes


const UsersRoute = _users__WEBPACK_IMPORTED_MODULE_1__["UsersRoute"];
const GateRoute = _gate__WEBPACK_IMPORTED_MODULE_0__["GateRoute"];

const initializeRoutes = async callback => {
  let errors;

  try {
    await _gate__WEBPACK_IMPORTED_MODULE_0__["initializeRoute"]();
  } catch (error) {
    errors += error;
  }

  try {
    await _users__WEBPACK_IMPORTED_MODULE_1__["initializeRoute"]();
  } catch (error) {
    errors += error;
  }

  !errors ? callback(errors) : callback();
};



/***/ }),

/***/ "./src/routes/users/admin/authentification.js":
/*!****************************************************!*\
  !*** ./src/routes/users/admin/authentification.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-own-logger */ "my-own-logger");
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(my_own_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../codes */ "./src/codes/index.js");


 //authentification in users/amdin

const authentificate = (req, res, next) => {
  const Token = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('Token');
  const {
    token
  } = req.headers;

  if (token === undefined) {
    const er = _codes__WEBPACK_IMPORTED_MODULE_2__["userCode"].err.tokenIsNotSpecified;
    return res.status(404).send(`${er.code} - ${er.description}`);
  }

  const query = Token.find({
    token
  }, (er, data) => {
    if (er) {
      my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
        name: 'API',
        status: 'err',
        value: `error : ${er}`
      });
      const iEr = _codes__WEBPACK_IMPORTED_MODULE_2__["basicsCode"].err.internalError;
      return res.status(500).send(`${iEr.code} - ${iEr.description}`);
    }

    if (data.length) {
      if (data.filter(token => token.isAdmin === true).length) {
        res.status(200);
        return next();
      } else {
        my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
          name: 'API',
          status: 'warn',
          value: `somebody is trying to connect as admin with a wrong token`
        });
        const iWer = _codes__WEBPACK_IMPORTED_MODULE_2__["userCode"].err.wrongToken;
        return res.status(401).send(`${iWer.code} - ${iWer.description}`);
      }
    } else {
      const iTer = _codes__WEBPACK_IMPORTED_MODULE_2__["userCode"].err.tokenDoesNotExists;
      return res.status(401).send(`${iTer.code} - ${iTer.description}`);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (authentificate);

/***/ }),

/***/ "./src/routes/users/admin/index.js":
/*!*****************************************!*\
  !*** ./src/routes/users/admin/index.js ***!
  \*****************************************/
/*! exports provided: auth, newToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentification */ "./src/routes/users/admin/authentification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return _authentification__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _newToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newToken */ "./src/routes/users/admin/newToken.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "newToken", function() { return _newToken__WEBPACK_IMPORTED_MODULE_1__; });




/***/ }),

/***/ "./src/routes/users/admin/newToken.js":
/*!********************************************!*\
  !*** ./src/routes/users/admin/newToken.js ***!
  \********************************************/
/*! exports provided: isTokenOk, addToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTokenOk", function() { return isTokenOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToken", function() { return addToken; });
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-own-logger */ "my-own-logger");
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(my_own_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../codes */ "./src/codes/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/routes/users/helpers/index.js");




const isTokenOk = async (req, res, next) => await Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["checkIfDataExists"])('token', req, res, next);
const addToken = async (req, res, next) => {
  const {
    token
  } = req.body;

  if (token === undefined) {
    const er = _codes__WEBPACK_IMPORTED_MODULE_2__["userCode"].err.tokenIsNotSpecified;
    return res.status(404).send(`${er.code} - ${er.description}`);
  }

  let {
    isAdmin,
    isAllowed
  } = req.body;
  if (isAdmin === undefined) isAdmin = false;
  if (isAllowed === undefined) isAllowed = true;
  const newToken = new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('Token')({
    token,
    isAdmin,
    isAllowed
  });
  newToken.save((err, account) => {
    if (err) {
      my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
        name: 'Mongoose',
        status: 'err',
        value: `Error on adding token : ${err}`
      });
      const iErr = _codes__WEBPACK_IMPORTED_MODULE_2__["basicsCode"].err.internalError;
      return res.status(500).send(`${iErr.code} - ${iErr.description}`);
    }

    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: 'Mongoose',
      status: 'ok',
      value: `token was added to the db !`
    });
    const uSuc = _codes__WEBPACK_IMPORTED_MODULE_2__["userCode"].suc.tokenAdded;
    res.status(200).send(`${uSuc.code} - ${uSuc.description}`);
    return next();
  });
};

/***/ }),

/***/ "./src/routes/users/helpers/checkIfDataExists.js":
/*!*******************************************************!*\
  !*** ./src/routes/users/helpers/checkIfDataExists.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../codes */ "./src/codes/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { keys.push.apply(keys, Object.getOwnPropertySymbols(object)); } if (enumerableOnly) keys = keys.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const checkIfDataExists = async (type, req, res, next) => {
  const User = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User');
  let result, error;

  switch (type) {
    case 'email':
      const {
        email
      } = req.body;

      if (email === undefined) {
        const er = _codes__WEBPACK_IMPORTED_MODULE_1__["userCode"].err.emailIsNotSpecified;
        return res.status(404).send(`${er.code} - ${er.description}`);
      }

      result = await User.find({
        email
      });
      error = _objectSpread({}, _codes__WEBPACK_IMPORTED_MODULE_1__["userCode"].err.emailExists, {
        data: email
      });
      break;

    case 'username':
      const {
        username
      } = req.body;

      if (username === undefined) {
        const er = _codes__WEBPACK_IMPORTED_MODULE_1__["userCode"].err.usernameIsNotSpecified;
        return res.status(404).send(`${er.code} - ${er.description}`);
      }

      result = await User.find({
        username
      });
      error = _objectSpread({}, _codes__WEBPACK_IMPORTED_MODULE_1__["userCode"].err.usernameExists, {
        data: username
      });
      break;

    case 'token':
      const Token = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Token');
      const {
        token
      } = req.body;

      if (token === undefined) {
        const er = _codes__WEBPACK_IMPORTED_MODULE_1__["userCode"].err.tokenIsNotSpecified;
        return res.status(404).send(`${er.code} - ${er.description}`);
      }

      result = await Token.find({
        token
      });
      error = _objectSpread({}, _codes__WEBPACK_IMPORTED_MODULE_1__["userCode"].err.tokenExists, {
        data: ''
      });
      break;

    case 'tokenBool':
      result = await User.find({
        token: req
      });
      return result.length ? true : false;
      break;

    default:
      log({
        name: 'API',
        status: 'err',
        value: _codes__WEBPACK_IMPORTED_MODULE_1__["userCode"].err.unknownTypeToCheck.description
      });
      res.status(500).send(_codes__WEBPACK_IMPORTED_MODULE_1__["basicsCode"].err.internalError.description);
  }

  try {
    if (!result.length) {
      return next();
    } else {
      res.status(409).send(`${error.code} - (${error.data}) ${error.description}`);
    }
  } catch (er) {
    log({
      name: 'API',
      status: 'err',
      value: er
    });
    res.status(500).send(_codes__WEBPACK_IMPORTED_MODULE_1__["basicsCode"].err.internalError.description);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (checkIfDataExists);

/***/ }),

/***/ "./src/routes/users/helpers/index.js":
/*!*******************************************!*\
  !*** ./src/routes/users/helpers/index.js ***!
  \*******************************************/
/*! exports provided: checkIfDataExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkIfDataExists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkIfDataExists */ "./src/routes/users/helpers/checkIfDataExists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkIfDataExists", function() { return _checkIfDataExists__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./src/routes/users/index.js":
/*!***********************************!*\
  !*** ./src/routes/users/index.js ***!
  \***********************************/
/*! exports provided: UsersRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users */ "./src/routes/users/users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersRoute", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["UsersRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return _users__WEBPACK_IMPORTED_MODULE_0__["initializeRoute"]; });



/***/ }),

/***/ "./src/routes/users/middlewares/deleteUser.js":
/*!****************************************************!*\
  !*** ./src/routes/users/middlewares/deleteUser.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
 // mdl appelé en delete sur /users/admin

const deleteUser = () => {};

/* harmony default export */ __webpack_exports__["default"] = (deleteUser);

/***/ }),

/***/ "./src/routes/users/middlewares/index.js":
/*!***********************************************!*\
  !*** ./src/routes/users/middlewares/index.js ***!
  \***********************************************/
/*! exports provided: newUser, modifyUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleteUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteUser */ "./src/routes/users/middlewares/deleteUser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return _deleteUser__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _modifyUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifyUser */ "./src/routes/users/middlewares/modifyUser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modifyUser", function() { return _modifyUser__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _newUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newUser */ "./src/routes/users/middlewares/newUser.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "newUser", function() { return _newUser__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ "./src/routes/users/middlewares/modifyUser.js":
/*!****************************************************!*\
  !*** ./src/routes/users/middlewares/modifyUser.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
 // mdl appelé en put sur /users/admin

const modifyUser = () => {};

/* harmony default export */ __webpack_exports__["default"] = (modifyUser);

/***/ }),

/***/ "./src/routes/users/middlewares/newUser.js":
/*!*************************************************!*\
  !*** ./src/routes/users/middlewares/newUser.js ***!
  \*************************************************/
/*! exports provided: isMailOk, isUsernameOk, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMailOk", function() { return isMailOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsernameOk", function() { return isUsernameOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! my-own-logger */ "my-own-logger");
/* harmony import */ var my_own_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(my_own_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _codes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../codes */ "./src/codes/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/routes/users/helpers/index.js");




 // mdl appelé en post sur /users/admin

const isMailOk = async (req, res, next) => await Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["checkIfDataExists"])('email', req, res, next);
const isUsernameOk = async (req, res, next) => await Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["checkIfDataExists"])('username', req, res, next);
const register = async (req, res, next) => {
  const {
    lastname,
    name,
    username,
    email,
    password
  } = req.body;

  if (lastname === undefined) {
    const er = _codes__WEBPACK_IMPORTED_MODULE_3__["userCode"].err.lastnameIsNotSpecified;
    return res.status(404).send(`${er.code} - ${er.description}`);
  }

  if (name === undefined) {
    const er = _codes__WEBPACK_IMPORTED_MODULE_3__["userCode"].err.nameIsNotSpecified;
    return res.status(404).send(`${er.code} - ${er.description}`);
  }

  if (username === undefined) {
    const er = _codes__WEBPACK_IMPORTED_MODULE_3__["userCode"].err.usernameIsNotSpecified;
    return res.status(404).send(`${er.code} - ${er.description}`);
  }

  if (email === undefined) {
    const er = _codes__WEBPACK_IMPORTED_MODULE_3__["userCode"].err.emailIsNotSpecified;
    return res.status(404).send(`${er.code} - ${er.description}`);
  }

  if (password === undefined) {
    const er = _codes__WEBPACK_IMPORTED_MODULE_3__["userCode"].err.passwordIsNotSpecified;
    return res.status(404).send(`${er.code} - ${er.description}`);
  }

  let token = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.randomBytes(32).toString('hex');
  let i = 0;

  while ((await Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["checkIfDataExists"])('tokenBool', token)) && i < 100) {
    token = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.randomBytes(32).toString('hex');
    i++;
  }

  const safePwd = crypto__WEBPACK_IMPORTED_MODULE_2___default.a.createHash('sha256').update(password).digest('hex');
  const user = new mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.model('User')({
    lastname,
    name,
    username,
    email,
    token,
    password: safePwd
  });
  user.save((err, account) => {
    if (err) {
      my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
        name: 'Mongoose',
        status: 'err',
        value: `Error on creating ${username} : ${err}`
      });
      const iErr = _codes__WEBPACK_IMPORTED_MODULE_3__["basicsCode"].err.internalError;
      return res.status(500).send(`${iErr.code} - ${iErr.description}`);
    }

    my_own_logger__WEBPACK_IMPORTED_MODULE_0___default()({
      name: 'Mongoose',
      status: 'ok',
      value: `${username} was created !`
    });
    const uSuc = _codes__WEBPACK_IMPORTED_MODULE_3__["userCode"].suc.userCreated;
    res.status(200).send(`${uSuc.code} - (${username}) ${uSuc.description}`);
    return next();
  });
};

/***/ }),

/***/ "./src/routes/users/users.js":
/*!***********************************!*\
  !*** ./src/routes/users/users.js ***!
  \***********************************/
/*! exports provided: UsersRoute, initializeRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoute", function() { return UsersRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeRoute", function() { return initializeRoute; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares */ "./src/routes/users/middlewares/index.js");
/* harmony import */ var _admin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin */ "./src/routes/users/admin/index.js");
 //import des middlewares


 //instanciation de la route

const UsersRoute = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();
const initializeRoute = async () => {
  UsersRoute.post('/', _middlewares__WEBPACK_IMPORTED_MODULE_1__["newUser"].isMailOk, _middlewares__WEBPACK_IMPORTED_MODULE_1__["newUser"].isUsernameOk, _middlewares__WEBPACK_IMPORTED_MODULE_1__["newUser"].register);
  UsersRoute.delete('/', _middlewares__WEBPACK_IMPORTED_MODULE_1__["deleteUser"]);
  UsersRoute.put('/', _middlewares__WEBPACK_IMPORTED_MODULE_1__["modifyUser"]);
  UsersRoute.use('/admin', _admin__WEBPACK_IMPORTED_MODULE_2__["auth"]);
  UsersRoute.post('/admin', _admin__WEBPACK_IMPORTED_MODULE_2__["newToken"].isTokenOk, _admin__WEBPACK_IMPORTED_MODULE_2__["newToken"].addToken);
  UsersRoute.get('/admin', _admin__WEBPACK_IMPORTED_MODULE_2__["getUsers"]);
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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "gpio":
/*!***********************!*\
  !*** external "gpio" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gpio");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "my-own-logger":
/*!********************************!*\
  !*** external "my-own-logger" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("my-own-logger");

/***/ })

/******/ });
//# sourceMappingURL=main.map