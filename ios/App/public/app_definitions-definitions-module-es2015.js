(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_definitions-definitions-module"],{

/***/ "1EgR":
/*!*******************************************************!*\
  !*** ./src/app/app_definitions/definitions.module.ts ***!
  \*******************************************************/
/*! exports provided: createTranslateLoader, DefinicoesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinicoesPageModule", function() { return DefinicoesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _definitions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./definitions-routing.module */ "UOnZ");
/* harmony import */ var _definitions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./definitions.page */ "LJG8");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/lang/', '.json');
}
let DefinicoesPageModule = class DefinicoesPageModule {
};
DefinicoesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _definitions_routing_module__WEBPACK_IMPORTED_MODULE_5__["DefinicoesPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                },
            }),
        ],
        declarations: [_definitions_page__WEBPACK_IMPORTED_MODULE_6__["DefinicoesPage"]],
    })
], DefinicoesPageModule);



/***/ }),

/***/ "LEyI":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app_definitions/definitions.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"header\">\r\n      <img id=\"img\" src=\"assets/BestRideSplash.png\" />\r\n      <ion-title id=\"headerTitle\" style=\"text-align: center;\">BestRide\r\n      </ion-title>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content>\r\n\r\n  <div class=\"body\">\r\n\r\n    <svg height=\"100%\" width=\"100%\">\r\n      <circle cx=\"0\" cy=\"0\" r=\"230\" fill=\"#58a600\" />\r\n      <circle cx=\"0\" cy=\"calc(100%)\" r=\"230\" fill=\"#FFBA00\" />\r\n      <circle cx=\"calc(100%)\" cy=\"calc(50%)\" r=\"230\" fill=\"#FF3F00\" />\r\n    </svg>\r\n\r\n\r\n    <div class=\"content\">\r\n      <ion-card>\r\n\r\n        <h1> {{'App Definitios' | customTranslate | async}} </h1>\r\n        <ion-item>\r\n          <ion-label> {{'Language of the app?' | customTranslate | async}}</ion-label>\r\n          <ion-select [(ngModel)]='language' (ionChange)='changeLanguage()'\r\n            [placeholder]='\"definicoes.languageChangePlaceholder\" | translate'>\r\n            <ion-select-option value='pt'>{{'Portuguese' | customTranslate | async}}</ion-select-option>\r\n            <ion-select-option value='en'>{{'English' | customTranslate | async}}</ion-select-option>\r\n            <ion-select-option value='es'>{{'Spanish' | customTranslate | async}}</ion-select-option>\r\n            <ion-select-option value='fr'>{{'French' | customTranslate | async}}</ion-select-option>\r\n            <ion-select-option value='ru'>{{'Russian' | customTranslate | async}}</ion-select-option>\r\n            <ion-select-option value='it'>{{'Italian' | customTranslate | async}}</ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n        <ion-button color=\"danger\" [routerLink]=\"['/login']\" expand=\"block\">{{'Log out' | customTranslate | async}}\r\n        </ion-button>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "LJG8":
/*!*****************************************************!*\
  !*** ./src/app/app_definitions/definitions.page.ts ***!
  \*****************************************************/
/*! exports provided: DefinicoesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinicoesPage", function() { return DefinicoesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_definitions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./definitions.page.html */ "LEyI");
/* harmony import */ var _definitions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions.page.scss */ "f69h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");
/* harmony import */ var _shared_services_custom_translate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/custom-translate.service */ "Xfhi");








let DefinicoesPage = class DefinicoesPage {
    constructor(translateService, customTranslateService, router, nativeStorage) {
        this.translateService = translateService;
        this.customTranslateService = customTranslateService;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.language = this.translateService.currentLang;
        this.translateService.use(this.language);
    }
    ngOnInit() { }
    changeLanguage() {
        this.translateService.use(this.language);
        localStorage.setItem('old-lang', localStorage.getItem('lang')); // GUARDA O IDIOMA ANTERIOR
        localStorage.setItem('lang', this.language);
        this.customTranslateService.currentLang.next(this.language);
    }
};
DefinicoesPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _shared_services_custom_translate_service__WEBPACK_IMPORTED_MODULE_7__["CustomTranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"] }
];
DefinicoesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-definitions',
        template: _raw_loader_definitions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_definitions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DefinicoesPage);



/***/ }),

/***/ "UOnZ":
/*!***************************************************************!*\
  !*** ./src/app/app_definitions/definitions-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DefinicoesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefinicoesPageRoutingModule", function() { return DefinicoesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _definitions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./definitions.page */ "LJG8");




const routes = [
    {
        path: '',
        component: _definitions_page__WEBPACK_IMPORTED_MODULE_3__["DefinicoesPage"],
    },
];
let DefinicoesPageRoutingModule = class DefinicoesPageRoutingModule {
};
DefinicoesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DefinicoesPageRoutingModule);



/***/ }),

/***/ "f69h":
/*!*******************************************************!*\
  !*** ./src/app/app_definitions/definitions.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  color: black;\n  font-weight: 700;\n}\n\n#img {\n  width: 15%;\n  margin-left: 25%;\n}\n\n.body {\n  background-color: #bc3592;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 5%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRlZmluaXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVGIiwiZmlsZSI6ImRlZmluaXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbiNpbWcge1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYzM1OTI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=app_definitions-definitions-module-es2015.js.map