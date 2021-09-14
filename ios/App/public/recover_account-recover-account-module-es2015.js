(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recover_account-recover-account-module"],{

/***/ "FoxH":
/*!*******************************************************************************!*\
  !*** ./src/app/recover_account/code-verification/code-verification.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  color: black;\n  font-weight: bolder;\n}\n\n.body {\n  background-color: #ffba00;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 5%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nform h2 {\n  color: black;\n  font-weight: bolder;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 800;\n}\n\nform ion-icon {\n  font-size: 700%;\n  opacity: 0.5;\n}\n\nform ion-button {\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb2RlLXZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsVUFBQTtBQUFKIiwiZmlsZSI6ImNvZGUtdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmEwMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoMiB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNzAwJTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "QdTe":
/*!****************************************************************!*\
  !*** ./src/app/recover_account/recover-account-api.service.ts ***!
  \****************************************************************/
/*! exports provided: RecoverAccountApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverAccountApiService", function() { return RecoverAccountApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







let RecoverAccountApiService = class RecoverAccountApiService {
    constructor(http, router, alertController, trans) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        this.trans = trans;
        this.url_recover = '/recoverUser/';
        this.recover_alert_text = {};
        this.language = this.trans.currentLang;
    }
    recoverAccount(email) {
        let postData = {
            email: email,
        };
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url_recover, postData)
            .subscribe((data) => {
            localStorage.setItem('email', '' + email);
        });
    }
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '' + this.recover_alert_text['header'],
                message: '' + this.recover_alert_text['message'],
                buttons: ['' + this.recover_alert_text['buttons']],
            });
            yield alert.present();
        });
    }
};
RecoverAccountApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
RecoverAccountApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], RecoverAccountApiService);



/***/ }),

/***/ "SBPr":
/*!*****************************************************************************!*\
  !*** ./src/app/recover_account/code-verification/code-verification.page.ts ***!
  \*****************************************************************************/
/*! exports provided: CodeVerificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeVerificationPage", function() { return CodeVerificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_code_verification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./code-verification.page.html */ "ebix");
/* harmony import */ var _code_verification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-verification.page.scss */ "FoxH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _code_verification_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code-verification-api.service */ "Uj3r");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








let CodeVerificationPage = class CodeVerificationPage {
    constructor(formBuilder, translateService, codeVerificationApi, model_controller) {
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.codeVerificationApi = codeVerificationApi;
        this.model_controller = model_controller;
        this.language = this.translateService.currentLang;
        this.registrationForm = this.formBuilder.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password_repeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() { }
    submit() {
        const code = this.registrationForm.get('code').value;
        const pass = this.registrationForm.get('password').value;
        const pass_repeat = this.registrationForm.get('password_repeat').value;
        const email = localStorage.getItem('email');
        console.log(email);
        if (pass == pass_repeat) {
            this.codeVerificationApi.codeVerification(code, pass, email);
        }
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const closeModal = 'Modal Closed';
            yield this.model_controller.dismiss(closeModal);
        });
    }
};
CodeVerificationPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _code_verification_api_service__WEBPACK_IMPORTED_MODULE_6__["CodeVerificationApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
CodeVerificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-introduzir-codigo',
        template: _raw_loader_code_verification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_code_verification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CodeVerificationPage);



/***/ }),

/***/ "XI3v":
/*!*******************************************************************!*\
  !*** ./src/app/recover_account/recover-account-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RecoverAccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverAccountPageRoutingModule", function() { return RecoverAccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _recover_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recover-account.page */ "Xt+O");




const routes = [
    {
        path: '',
        component: _recover_account_page__WEBPACK_IMPORTED_MODULE_3__["RecoverAccountPage"]
    },
    {
        path: 'code-verification',
        loadChildren: () => __webpack_require__.e(/*! import() | code-verification-code-verification-module */ "code-verification-code-verification-module").then(__webpack_require__.bind(null, /*! ./code-verification/code-verification.module */ "J+cl")).then(m => m.CodeVerificationPageModule)
    }
];
let RecoverAccountPageRoutingModule = class RecoverAccountPageRoutingModule {
};
RecoverAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecoverAccountPageRoutingModule);



/***/ }),

/***/ "Xt+O":
/*!*********************************************************!*\
  !*** ./src/app/recover_account/recover-account.page.ts ***!
  \*********************************************************/
/*! exports provided: RecoverAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverAccountPage", function() { return RecoverAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_recover_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./recover-account.page.html */ "tkYI");
/* harmony import */ var _recover_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recover-account.page.scss */ "aJ5/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _recover_account_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recover-account-api.service */ "QdTe");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _code_verification_code_verification_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./code-verification/code-verification.page */ "SBPr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");










let RecoverAccountPage = class RecoverAccountPage {
    constructor(formBuilder, translateService, recuperarContaApi, model_controller, comp) {
        this.formBuilder = formBuilder;
        this.translateService = translateService;
        this.recuperarContaApi = recuperarContaApi;
        this.model_controller = model_controller;
        this.comp = comp;
        this.language = this.translateService.currentLang;
        this.registrationForm = this.formBuilder.group({
            email: [''],
        });
        comp.hide_tab = true;
    }
    ngOnInit() { }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.model_controller.create({
                component: _code_verification_code_verification_page__WEBPACK_IMPORTED_MODULE_8__["CodeVerificationPage"],
            });
            return yield modal.present();
        });
    }
    submit() {
        console.log(this.registrationForm.value);
        var email = this.registrationForm.get('email').value;
        this.recuperarContaApi.recoverAccount(email);
        this.presentModal();
    }
};
RecoverAccountPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _recover_account_api_service__WEBPACK_IMPORTED_MODULE_6__["RecoverAccountApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"] }
];
RecoverAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-recuperar-conta',
        template: _raw_loader_recover_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_recover_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RecoverAccountPage);



/***/ }),

/***/ "aJ5/":
/*!***********************************************************!*\
  !*** ./src/app/recover_account/recover-account.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  color: black;\n  font-weight: 700;\n}\n\n.body {\n  background-color: #ffba00;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 5%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-item {\n  --bacground: white;\n}\n\nion-card {\n  font-size: 25px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nform h2 {\n  color: black;\n  font-weight: bolder;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 800;\n}\n\nform ion-icon {\n  font-size: 700%;\n  opacity: 0.5;\n}\n\nform ion-button {\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlY292ZXItYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSw0RUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUY7O0FBREU7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFO0VBQ0UsVUFBQTtBQUNKIiwiZmlsZSI6InJlY292ZXItYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJhMDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYmFjZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaDIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDcwMCU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ebix":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recover_account/code-verification/code-verification.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <img id=\"img\" style=\"width: 15%;margin-left: 11%;\" src=\"assets/BestRideSplash.png\" />\r\n    <ion-title style=\"text-align: center;\">BestRide\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-content>\r\n\r\n    <div class=\"body\">\r\n\r\n      <svg height=\"100%\" width=\"100%\">\r\n        <circle cx=\"0\" cy=\"0\" r=\"230\" fill=\"#00ADFF\" />\r\n        <circle cx=\"0\" cy=\"calc(100%)\" r=\"230\" fill=\"#58A600\" />\r\n        <circle cx=\"calc(100%)\" cy=\"calc(50%)\" r=\"230\" fill=\"#FF3F00\" />\r\n      </svg>\r\n\r\n      <div class=\"content\">\r\n        <ion-card>\r\n          <form class=\"form\" [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\r\n\r\n            <h1> {{'Recover your Account' | customTranslate | async}}</h1>\r\n\r\n            <p>\r\n              {{'A code has been sent to the email. check the mailbox' | customTranslate | async}}\r\n            </p>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">{{'Code' | customTranslate | async}}</ion-label>\r\n              <ion-input formControlName=\"code\" type=\"number\" required></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">{{'Password' | customTranslate | async}}</ion-label>\r\n              <ion-input formControlName=\"password\" type=\"password\" required></ion-input>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">{{'Repeat Password' | customTranslate | async}}</ion-label>\r\n              <ion-input formControlName=\"password_repeat\" type=\"password\" required></ion-input>\r\n            </ion-item>\r\n\r\n\r\n            <ion-button [disabled]=\"!registrationForm.valid\" color=\"dark\" expand=\"block\" type=\"submit\">\r\n              {{'Recover your Account' | customTranslate | async}}\r\n            </ion-button>\r\n          </form>\r\n\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </ion-content>");

/***/ }),

/***/ "oqa2":
/*!***********************************************************!*\
  !*** ./src/app/recover_account/recover-account.module.ts ***!
  \***********************************************************/
/*! exports provided: createTranslateLoader, RecuperarContaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarContaPageModule", function() { return RecuperarContaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _recover_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recover-account-routing.module */ "XI3v");
/* harmony import */ var _recover_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recover-account.page */ "Xt+O");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");











function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/lang/', '.json');
}
let RecuperarContaPageModule = class RecuperarContaPageModule {
};
RecuperarContaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recover_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecoverAccountPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                },
            }),
        ],
        declarations: [_recover_account_page__WEBPACK_IMPORTED_MODULE_6__["RecoverAccountPage"]],
    })
], RecuperarContaPageModule);



/***/ }),

/***/ "tkYI":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recover_account/recover-account.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <img id=\"img\" style=\"width: 15%;margin-left: 11%;\" src=\"assets/BestRideSplash.png\" />\r\n    <ion-title style=\"text-align: center;\">BestRide\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <div class=\"body\">\r\n\r\n    <svg height=\"100%\" width=\"100%\">\r\n      <circle cx=\"0\" cy=\"0\" r=\"230\" fill=\"#00ADFF\" />\r\n      <circle cx=\"0\" cy=\"calc(100%)\" r=\"230\" fill=\"#58A600\" />\r\n      <circle cx=\"calc(100%)\" cy=\"calc(50%)\" r=\"230\" fill=\"#FF3F00\" />\r\n    </svg>\r\n\r\n    <div class=\"content\">\r\n      <ion-card>\r\n        <ion-list>\r\n\r\n          <form class=\"form\" [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\r\n            <h2> Recover Account </h2>\r\n\r\n            <ion-icon name=\"person-outline\"></ion-icon>\r\n\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">Email</ion-label>\r\n              <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\r\n            </ion-item>\r\n\r\n            <br>\r\n            <ion-button [disabled]=\"!registrationForm.valid\" color=\"dark\" expand=\"block\" type=\"submit\">\r\n              {{'Recover account' | customTranslate | async}}\r\n            </ion-button>\r\n          </form>\r\n\r\n        </ion-list>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=recover_account-recover-account-module-es2015.js.map