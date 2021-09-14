(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splash-screen-splash-screen-module"],{

/***/ "LtLT":
/*!***************************************************************!*\
  !*** ./src/app/splash-screen/splash-screen-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SplashScreenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPageRoutingModule", function() { return SplashScreenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _splash_screen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash-screen.page */ "Ydgb");




const routes = [
    {
        path: '',
        component: _splash_screen_page__WEBPACK_IMPORTED_MODULE_3__["SplashScreenPage"],
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ../login/login.module */ "X3zk")).then((m) => m.LoginPageModule),
    },
];
let SplashScreenPageRoutingModule = class SplashScreenPageRoutingModule {
};
SplashScreenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SplashScreenPageRoutingModule);



/***/ }),

/***/ "Y30w":
/*!*******************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#splash {\n  display: flex;\n  justify-content: center;\n  margin-top: 50%;\n}\n\n#img {\n  width: 55%;\n  height: 55%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNwbGFzaC1zY3JlZW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJzcGxhc2gtc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcGxhc2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNTAlO1xyXG59XHJcblxyXG4jaW1nIHtcclxuICB3aWR0aDogNTUlO1xyXG4gIGhlaWdodDogNTUlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Ydgb":
/*!*****************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.page.ts ***!
  \*****************************************************/
/*! exports provided: SplashScreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPage", function() { return SplashScreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_splash_screen_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./splash-screen.page.html */ "nqHg");
/* harmony import */ var _splash_screen_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen.page.scss */ "Y30w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");






let SplashScreenPage = class SplashScreenPage {
    constructor(router, comp) {
        this.router = router;
        this.comp = comp;
    }
    ngOnInit() {
        setTimeout(() => {
            //check for automatic login
            const confirm_automatic = localStorage.getItem('automatic_login');
            if (confirm_automatic === 'true') {
                this.router.navigate(['/home_tab']);
            }
            else {
                this.router.navigate(['/login']);
            }
        }, 2000);
        this.comp.hide_tab = true;
    }
};
SplashScreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] }
];
SplashScreenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-splash-screen',
        template: _raw_loader_splash_screen_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_splash_screen_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SplashScreenPage);



/***/ }),

/***/ "iLlt":
/*!*******************************************************!*\
  !*** ./src/app/splash-screen/splash-screen.module.ts ***!
  \*******************************************************/
/*! exports provided: SplashScreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPageModule", function() { return SplashScreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _splash_screen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splash-screen-routing.module */ "LtLT");
/* harmony import */ var _splash_screen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splash-screen.page */ "Ydgb");







let SplashScreenPageModule = class SplashScreenPageModule {
};
SplashScreenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _splash_screen_routing_module__WEBPACK_IMPORTED_MODULE_5__["SplashScreenPageRoutingModule"]
        ],
        declarations: [_splash_screen_page__WEBPACK_IMPORTED_MODULE_6__["SplashScreenPage"]]
    })
], SplashScreenPageModule);



/***/ }),

/***/ "nqHg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash-screen/splash-screen.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\r\n  <div id=\"splash\">\r\n    <img id=\"img\" src=\"assets/BestRideSplash.png\" />\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=splash-screen-splash-screen-module-es2015.js.map