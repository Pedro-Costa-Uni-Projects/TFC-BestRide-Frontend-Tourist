(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user_tab-user-tab-module"],{

/***/ "KGFk":
/*!*********************************************!*\
  !*** ./src/app/user_tab/user-tab.module.ts ***!
  \*********************************************/
/*! exports provided: createTranslateLoader, DadosContaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosContaPageModule", function() { return DadosContaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _user_tab_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-tab-routing.module */ "vTZ7");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _user_tab_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-tab.page */ "afxH");









function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/lang/', '.json');
}


let DadosContaPageModule = class DadosContaPageModule {
};
DadosContaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _user_tab_routing_module__WEBPACK_IMPORTED_MODULE_6__["DadosContaPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]],
                },
            }),
        ],
        declarations: [_user_tab_page__WEBPACK_IMPORTED_MODULE_10__["DadosContaPage"]],
    })
], DadosContaPageModule);



/***/ }),

/***/ "O2tj":
/*!*********************************************!*\
  !*** ./src/app/user_tab/user-tab.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("component-card h1 {\n  font-weight: 600;\n  font-size: 18px;\n}\n\ncomponent-card p {\n  color: var(--text-light);\n}\n\ncomponent-card ion-icon {\n  align-self: start;\n  margin-top: 10px;\n  margin-right: 29px;\n  color: var(--text-lightest);\n}\n\n* {\n  color: black;\n  font-weight: 700;\n}\n\n#img {\n  width: 15%;\n  margin-left: 33%;\n}\n\n.body {\n  background-color: #00adff;\n  height: 100%;\n  width: 100%;\n}\n\nion-thumbnail ion-icon {\n  zoom: 2;\n  padding-top: 20%;\n  color: #00adff;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 5%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n\nion-button {\n  color: white;\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVzZXItdGFiLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUlFO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURKOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUZGIiwiZmlsZSI6InVzZXItdGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNvbXBvbmVudC1jYXJkIGgxIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuY29tcG9uZW50LWNhcmQgcCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG59XHJcblxyXG5jb21wb25lbnQtY2FyZCBpb24taWNvbiB7XHJcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI5cHg7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0ZXN0KTtcclxufVxyXG5cclxuKiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiNpbWcge1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzJTtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGFkZmY7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pb24tdGh1bWJuYWlsIHtcclxuICBpb24taWNvbiB7XHJcbiAgICB6b29tOiAyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIGNvbG9yOiAjMDBhZGZmO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "V+EI":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user_tab/user-tab.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div class=\"header\">\r\n      <img id=\"img\" src=\"assets/BestRideSplash.png\" />\r\n      <ion-title id=\"headerTitle\" style=\"text-align: center;\">BestRide\r\n      </ion-title>\r\n    </div>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"body\">\r\n    <svg height=\"100%\" width=\"100%\">\r\n      <circle cx=\"0\" cy=\"0\" r=\"230\" fill=\"#BC3592\" />\r\n      <circle cx=\"0\" cy=\"calc(100%)\" r=\"230\" fill=\"#FFBA00\" />\r\n      <circle cx=\"calc(100%)\" cy=\"calc(100%)\" r=\"230\" fill=\"#FF3F00\" />\r\n    </svg>\r\n    <div class=\"content\">\r\n      <ion-card>\r\n        <h2 style=\"color: black;font-size: 25px;font-weight: bold;\">User Definitions</h2>\r\n\r\n        <form class=\"form\" [formGroup]=\"ionicForm\">\r\n\r\n\r\n\r\n          <ion-list lines=\"full\">\r\n            <ion-item>\r\n              <ion-thumbnail slot=\"start\">\r\n                <ion-icon name=\"person-outline\"></ion-icon>\r\n              </ion-thumbnail>\r\n              <ion-label position=\"stacked\">{{ 'Name' | customTranslate | async}}</ion-label>\r\n              <ion-input formControlName=\"name\" type=\"text\" required value=\"{{ user.name }}\" [disabled]=\"name_input\">\r\n              </ion-input>\r\n              <ion-button expand=\"block\" slot=\"end\" (click)=\"activateEdit('name')\">\r\n                <ion-icon name=\"{{ icon_input }}\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n\r\n\r\n            <ion-item>\r\n              <ion-thumbnail slot=\"start\">\r\n                <ion-icon name=\"business-outline\"></ion-icon>\r\n              </ion-thumbnail>\r\n              <ion-label position=\"stacked\">{{ 'City' | customTranslate | async}}</ion-label>\r\n              <ion-input formControlName=\"city\" type=\"text\" required value=\"{{ user.city }}\" [disabled]=\"city_input\">\r\n              </ion-input>\r\n              <ion-button expand=\"block\" slot=\"end\" (click)=\"activateEdit('city')\">\r\n                <ion-icon name=\"{{ icon_input }}\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-thumbnail slot=\"start\">\r\n                <ion-icon name=\"mail-outline\"></ion-icon>\r\n              </ion-thumbnail>\r\n              <ion-label position=\"stacked\">{{ 'Email' | customTranslate | async}}</ion-label>\r\n              <ion-input formControlName=\"email\" type=\"email\" required value=\"{{ user.email }}\"\r\n                [disabled]=\"email_input\"></ion-input>\r\n              <ion-button expand=\"block\" slot=\"end\" (click)=\"activateEdit('email')\">\r\n                <ion-icon name=\"{{ icon_input }}\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-thumbnail slot=\"start\">\r\n                <ion-icon name=\"call-outline\"></ion-icon>\r\n              </ion-thumbnail>\r\n              <ion-label position=\"stacked\">{{ 'Phone Number' | customTranslate | async}}</ion-label>\r\n              <ion-input formControlName=\"phone\" type=\"Number\" required value=\"{{ user.phone }}\"\r\n                [disabled]=\"phone_input\"></ion-input>\r\n              <ion-button expand=\"block\" slot=\"end\" (click)=\"activateEdit('phone')\">\r\n                <ion-icon name=\"{{ icon_input }}\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-thumbnail slot=\"start\">\r\n                <ion-icon name=\"home-outline\"></ion-icon>\r\n              </ion-thumbnail>\r\n              <ion-label position=\"stacked\">{{ 'Street address' | customTranslate | async}}</ion-label>\r\n              <ion-input formControlName=\"address\" type=\"text\" required value=\"{{ user.address }}\"\r\n                [disabled]=\"street_input\"></ion-input>\r\n              <ion-button expand=\"block\" slot=\"end\" (click)=\"activateEdit('street')\">\r\n                <ion-icon name=\"{{ icon_input }}\"></ion-icon>\r\n              </ion-button>\r\n            </ion-item>\r\n\r\n\r\n            <br>\r\n            <ion-button [disabled]=\"button\" (click)=\"updateUser()\" expand=\"block\">{{'Update Account' | customTranslate |\r\n              async}}\r\n            </ion-button>\r\n\r\n            <br>\r\n            <ion-button color=\"warning\" (click)=\"alterarPass()\" expand=\"block\">{{'Change Password' | customTranslate |\r\n              async}}</ion-button>\r\n            <br>\r\n            <ion-button color=\"danger\" expand=\"block\" (click)=\"deleteAccount()\">{{'Delete Account' | customTranslate |\r\n              async}}\r\n            </ion-button>\r\n\r\n          </ion-list>\r\n        </form>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "afxH":
/*!*******************************************!*\
  !*** ./src/app/user_tab/user-tab.page.ts ***!
  \*******************************************/
/*! exports provided: DadosContaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosContaPage", function() { return DadosContaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_tab_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-tab.page.html */ "V+EI");
/* harmony import */ var _user_tab_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-tab.page.scss */ "O2tj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_tab_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-tab-api.service */ "RryX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _reset_password_modal_reset_password_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password-modal/reset-password-modal.page */ "cHgQ");
/* harmony import */ var _user_tab_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user_tab/user */ "geVt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "KqBo");













let DadosContaPage = class DadosContaPage {
    constructor(translateService, router, dadosContaApi, alertController, modalController, formBuilder, camera, actionSheetController, file) {
        this.translateService = translateService;
        this.router = router;
        this.dadosContaApi = dadosContaApi;
        this.alertController = alertController;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.file = file;
        this.showPass = false;
        this.passwordIconToggle = 'eye';
        // Input Controls
        this.name_input = true;
        this.city_input = true;
        this.email_input = true;
        this.phone_input = true;
        this.street_input = true;
        this.button = true;
        this.icon_input = 'create-outline';
        this.language = this.translateService.currentLang;
        this.user = new _user_tab_user__WEBPACK_IMPORTED_MODULE_9__["User"]('', '', '', '', '', ''); //  Initialize
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required],
        });
        setTimeout(() => {
            this.user = this.dadosContaApi.getUser();
        }, 2000);
    }
    ionViewDidEnter() {
        this.name = this.dadosContaApi.name;
        this.city = this.dadosContaApi.city;
        this.email = this.dadosContaApi.email;
        this.phone = this.dadosContaApi.phone;
        this.address = this.dadosContaApi.address;
        this.postal = this.dadosContaApi.postal;
    }
    changeInputStatus() {
        if (this.icon_input == 'create-outline') {
            this.icon_input = 'close-outline';
        }
        else {
            this.icon_input = 'create-outline';
        }
    }
    alterarPass() {
        this.presentModal();
    }
    updateUser() {
        let dados_conta_dict = {
            name: this.ionicForm.value['name'],
            city: this.ionicForm.value['city'],
            email: this.ionicForm.value['email'],
            phone: this.ionicForm.value['phone'],
            address: this.ionicForm.value['address'],
        };
        this.dadosContaApi.updateUser(dados_conta_dict);
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _reset_password_modal_reset_password_modal_page__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordModalPage"],
                cssClass: 'reset-password-modal.page.scss',
            });
            return yield modal.present();
        });
    }
    deleteAccount() {
        this.dadosContaApi.deleteUser();
    }
    activateEdit(component) {
        this.button = !this.button;
        switch (component) {
            case 'name': {
                this.name_input = !this.name_input;
                break;
            }
            case 'city': {
                this.city_input = !this.city_input;
                break;
            }
            case 'email': {
                this.email_input = !this.email_input;
                break;
            }
            case 'phone': {
                this.phone_input = !this.phone_input;
                break;
            }
            case 'street': {
                this.street_input = !this.street_input;
                break;
            }
        }
    }
};
DadosContaPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _user_tab_api_service__WEBPACK_IMPORTED_MODULE_6__["DadosContaApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_11__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"] },
    { type: File }
];
DadosContaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dados-conta',
        template: _raw_loader_user_tab_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_tab_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DadosContaPage);



/***/ }),

/***/ "vTZ7":
/*!*****************************************************!*\
  !*** ./src/app/user_tab/user-tab-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DadosContaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosContaPageRoutingModule", function() { return DadosContaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_tab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-tab.page */ "afxH");




const routes = [
    {
        path: '',
        component: _user_tab_page__WEBPACK_IMPORTED_MODULE_3__["DadosContaPage"],
    },
    {
        path: 'reset-password-modal',
        loadChildren: () => Promise.all(/*! import() | reset-password-modal-reset-password-modal-module */[__webpack_require__.e("default~reset-password-modal-reset-password-modal-module~user_tab-user-tab-module"), __webpack_require__.e("common"), __webpack_require__.e("reset-password-modal-reset-password-modal-module")]).then(__webpack_require__.bind(null, /*! ./reset-password-modal/reset-password-modal.module */ "ZXJ5")).then((m) => m.ResetPasswordModalPageModule),
    },
];
let DadosContaPageRoutingModule = class DadosContaPageRoutingModule {
};
DadosContaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DadosContaPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=user_tab-user-tab-module-es2015.js.map