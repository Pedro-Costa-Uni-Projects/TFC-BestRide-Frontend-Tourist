(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~reset-password-modal-reset-password-modal-module~user_tab-user-tab-module"],{

/***/ "2QQX":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user_tab/reset-password-modal/reset-password-modal.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"secondary\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"close-circle\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <div id=\"content-menu\">\r\n      <img src=\"assets/BestRideLogo.png\" />\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n\r\n  <div class=\"body\">\r\n    <svg height=\"100%\" width=\"100%\">\r\n      <circle cx=\"0\" cy=\"0\" r=\"230\" fill=\"#FFBA00\" />\r\n      <circle cx=\"0\" cy=\"calc(100%)\" r=\"230\" fill=\"#BC3592\" />\r\n      <circle cx=\"calc(100%)\" cy=\"calc(50%)\" r=\"230\" fill=\"#FF3F00\" />\r\n    </svg>\r\n    <div class=\"content\">\r\n\r\n      <ion-card>\r\n        <h1> <strong>{{'Reseat Password' | customTranslate | async}}</strong></h1>\r\n        <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n\r\n          <ion-item lines=\"full\">\r\n            <ion-label>{{'Previous Password' | customTranslate | async}}</ion-label>\r\n            <ion-input formControlName=\"pass\" [type]=\"passwordType\"></ion-input>\r\n            <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\r\n          </ion-item>\r\n\r\n          <ion-item lines=\"full\">\r\n            <ion-label>{{'New Password' | customTranslate | async}}</ion-label>\r\n            <ion-input formControlName=\"pass_repeat\" [type]=\"passwordTyperepeat\"></ion-input>\r\n            <ion-icon item-end [name]=\"passwordIconRepeat\" class=\"passwordIconRepeat\"\r\n              (click)='hideShowPasswordRepeat()'></ion-icon>\r\n          </ion-item>\r\n\r\n\r\n          <br>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Submit</ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "R4EG":
/*!******************************************************************************!*\
  !*** ./src/app/user_tab/reset-password-modal/reset-password-modal.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  color: black;\n}\n\n.body {\n  background-color: #00adff;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 5%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n\n#content-menu {\n  display: flex;\n  flex-direction: column;\n}\n\n#content-menu img {\n  align-self: center;\n  width: 39%;\n}\n\nion-item {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXNldC1wYXNzd29yZC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFBRiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZGZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbiNjb250ZW50LW1lbnUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzOSU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "RryX":
/*!**************************************************!*\
  !*** ./src/app/user_tab/user-tab-api.service.ts ***!
  \**************************************************/
/*! exports provided: DadosContaApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosContaApiService", function() { return DadosContaApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "M2ZX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _user_tab_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user_tab/user */ "geVt");









let DadosContaApiService = class DadosContaApiService {
    constructor(http, router, nativeStorage, alertController, translateService) {
        this.http = http;
        this.router = router;
        this.nativeStorage = nativeStorage;
        this.alertController = alertController;
        this.translateService = translateService;
        this.url = '/users/';
        this.url_get_user = '/getUser/';
        this.url_cancel_usr = '/cancelAccount/';
        this.url_update_user = '/updateUser/';
        this.url_change_password = '/changePassword/';
        this.url_change_user_image = '/updateImage/';
        this.id = localStorage.getItem('id');
        this.data_user_alert_text = {};
        this.user = new _user_tab_user__WEBPACK_IMPORTED_MODULE_8__["User"]('', '', '', '', '', '');
        this.ngOnInit();
    }
    ngOnInit() {
        this.getUser();
        let acessToken = localStorage.getItem('token');
        this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url_get_user + acessToken)
            .subscribe((data) => {
            let phone = '' + data['UserAttributes'][7].Value;
            phone = phone.slice(3, 12);
            this.user = new _user_tab_user__WEBPACK_IMPORTED_MODULE_8__["User"](data['UserAttributes'][5].Value, data['UserAttributes'][8].Value, phone, data['UserAttributes'][1].Value, data['UserAttributes'][5].Value, data['UserAttributes'][9].Value);
        });
    }
    getUser() {
        return this.user;
    }
    updateImageUser(data) {
        const email = localStorage.getItem('email');
        console.log('data');
        console.log(data);
        this.http
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl +
            this.url_change_user_image +
            'austrixpamaj@gmail.com', {
            image: 'assasa',
        })
            .subscribe((resposta) => {
            console.log('OKAYYAYYAAYAYAYA');
        }, (err) => {
            console.log(err);
        });
    }
    updatePassword(pass) {
        this.http
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url_change_password + pass['token'], pass)
            .subscribe((resposta) => {
            console.log(resposta);
            // Sucess on changing password
            this.presentAlertPassword();
        });
    }
    presentAlertPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Message',
                message: 'Your Password was Changed!',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    updateUser(data_account) {
        const data = {
            name: data_account['name'],
            city: data_account['city'],
            email: data_account['email'],
            phone_number: data_account['phone'],
            address: data_account['address'],
        };
        const user_token = localStorage.getItem('token');
        this.http
            .put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url_update_user + user_token, data)
            .subscribe((response) => {
            this.presentAlert();
        });
        // this.presentAlert();
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Message',
                cssClass: 'my-custom-class',
                message: 'Your Information was Updated !',
                buttons: ['Confirm'],
            });
            yield alert.present();
        });
    }
    deleteUser() {
        let data = {
            token: localStorage.getItem('token'),
        };
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url_cancel_usr, data)
            .subscribe((ans) => {
            this.router.navigate(['/login']);
            localStorage.removeItem('email');
            localStorage.removeItem('token');
        });
    }
};
DadosContaApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
DadosContaApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], DadosContaApiService);



/***/ }),

/***/ "cHgQ":
/*!****************************************************************************!*\
  !*** ./src/app/user_tab/reset-password-modal/reset-password-modal.page.ts ***!
  \****************************************************************************/
/*! exports provided: ResetPasswordModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModalPage", function() { return ResetPasswordModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_password_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset-password-modal.page.html */ "2QQX");
/* harmony import */ var _reset_password_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password-modal.page.scss */ "R4EG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _user_tab_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-tab-api.service */ "RryX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");










let ResetPasswordModalPage = class ResetPasswordModalPage {
    constructor(formBuilder, alertController, dadosContaApi, modalCtr, translate, router) {
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.dadosContaApi = dadosContaApi;
        this.modalCtr = modalCtr;
        this.translate = translate;
        this.router = router;
        this.isSubmitted = false;
        this.reset_alert_text = {};
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.passwordTyperepeat = 'password';
        this.passwordIconRepeat = 'eye-off';
        this.translate.get('reset_page_modal').subscribe((data) => {
            this.reset_alert_text = {
                header: data['header'],
                message: data['message'],
                buttons: data['buttons'][0],
            };
        });
    }
    goBack() {
        this.modalCtr.dismiss();
    }
    alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '' + this.reset_alert_text['header'],
                message: '' + this.reset_alert_text['message'],
                buttons: ['' + this.reset_alert_text['buttons']],
            });
            yield alert.present();
        });
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    hideShowPasswordRepeat() {
        this.passwordTyperepeat =
            this.passwordTyperepeat === 'text' ? 'password' : 'text';
        this.passwordIconRepeat =
            this.passwordIconRepeat === 'eye-off' ? 'eye' : 'eye-off';
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            this.alert();
            return false;
        }
        else {
            const pass = this.ionicForm.get('pass').value;
            const pass_new = this.ionicForm.get('pass_repeat').value;
            const data = {
                pass: pass,
                new_pass: pass_new,
                token: localStorage.getItem('token'),
            };
            this.dadosContaApi.updatePassword(data);
        }
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
            pass_repeat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
        });
    }
};
ResetPasswordModalPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _user_tab_api_service__WEBPACK_IMPORTED_MODULE_6__["DadosContaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
ResetPasswordModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset-password-modal',
        template: _raw_loader_reset_password_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_password_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetPasswordModalPage);



/***/ }),

/***/ "geVt":
/*!**********************************!*\
  !*** ./src/app/user_tab/user.ts ***!
  \**********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(name, city, phone, address, postal, email) {
        this.name = name;
        this.city = city;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.postal = postal;
    }
}


/***/ })

}]);
//# sourceMappingURL=default~reset-password-modal-reset-password-modal-module~user_tab-user-tab-module-es2015.js.map