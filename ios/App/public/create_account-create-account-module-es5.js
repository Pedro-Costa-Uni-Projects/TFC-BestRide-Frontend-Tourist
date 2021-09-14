(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create_account-create-account-module"], {
    /***/
    "KWol":
    /*!*********************************************************!*\
      !*** ./src/app/create_account/create-account.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function KWol(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-weight: 950;\n  color: black;\n}\n\nion-toolbar {\n  --background: white;\n}\n\nion-item {\n  --bacground: white;\n}\n\n.error-message {\n  color: red;\n}\n\n#imagem {\n  width: 25%;\n  align-self: center;\n}\n\nion-card {\n  font-size: 25px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n}\n\n.body {\n  background-color: #00adff;\n  height: 140%;\n  width: 100%;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n\n#content-menu img {\n  align-self: center;\n  width: 17%;\n  position: relative;\n  left: 18%;\n}\n\n#content-menu #title {\n  color: black;\n  position: absolute;\n  left: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSw0RUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBREoiLCJmaWxlIjoiY3JlYXRlLWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC13ZWlnaHQ6IDk1MDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuI2ltYWdlbSB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhZGZmO1xyXG4gIGhlaWdodDogMTQwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbiNjb250ZW50LW1lbnUge1xyXG4gIGltZyB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTclO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTglO1xyXG4gIH1cclxuXHJcbiAgI3RpdGxlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDclO1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "W7xt":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create_account/create-account.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function W7xt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n    <div id=\"content-menu\">\r\n      <img src=\"assets/BestRideSplash.png\" />\r\n      <ion-title id=\"title\">BestRide\r\n      </ion-title>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div class=\"body\">\r\n\r\n    <svg height=\"100%\" width=\"100%\">\r\n      <circle cx=\"0\" cy=\"0\" r=\"250\" fill=\"#bc3592\" />\r\n      <circle cx=\"0\" cy=\"calc(100%)\" r=\"250\" fill=\"#ffba00\" />\r\n      <circle cx=\"calc(100% - 20px)\" cy=\"calc(100% - 20px)\" r=\"250\" fill=\"#ff3f00\" />\r\n    </svg>\r\n\r\n\r\n    <div class=\"content\">\r\n      <ion-card>\r\n        <form class=\"form\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submit()\">\r\n          <h2> {{'Create Account' | customTranslate | async}}</h2>\r\n\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\"> {{'Name' | customTranslate | async}}</ion-label>\r\n            <ion-input formControlName=\"name\" required></ion-input>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\r\n            {{'Name is required' | customTranslate | async}}\r\n          </span>\r\n\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\"> {{'Date of Birth' | customTranslate | async}}</ion-label>\r\n            <ion-datetime (ionChange)=\"getDate($event)\" displayFormat=\"MM/DD/YYYY\" value=\"2019-02-12\"\r\n              formControlName=\"dob\">\r\n            </ion-datetime>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.dob.errors?.required\">\r\n            {{'Date Of Birth is required' | customTranslate | async}}\r\n          </span>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\"> {{'Phone Number' | customTranslate | async}}</ion-label>\r\n            <ion-input type=\"number\" formControlName=\"phone\" required></ion-input>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.phone.errors?.required\">\r\n            {{'Phone is required' | customTranslate | async}}\r\n          </span>\r\n\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\"> {{'Postal Code' | customTranslate | async}}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"postal\" required></ion-input>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.postal.errors?.required\">\r\n            {{'Postal is required' | customTranslate | async}}\r\n          </span>\r\n\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\"> {{'Sex' | customTranslate | async}}</ion-label>\r\n            <ion-select okText=\"OK\" cancelText=\"Cancelar\" formControlName=\"gender\">\r\n              <ion-select-option value=\"male\" translate [translateParams]=\"{ lang: language }\">create_account.sex_male\r\n              </ion-select-option>\r\n              <ion-select-option value=\"female\" translate [translateParams]=\"{ lang: language }\">\r\n                create_account.sex_female\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.gender.errors?.required\">\r\n            {{'Gender is required' | customTranslate | async}}\r\n          </span>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\"> {{'Street Address line 1' | customTranslate | async}}</ion-label>\r\n            <ion-input formControlName=\"address\" required></ion-input>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.address.errors?.required\">\r\n            {{'Address is required' | customTranslate | async}}\r\n          </span>\r\n\r\n\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\"> {{'City' | customTranslate | async}}</ion-label>\r\n            <ion-select okText=\"OK\" cancelText=\"Cancelar\" formControlName=\"city\">\r\n              <ion-select-option value=\"Lisbon\">Lisboa</ion-select-option>\r\n              <ion-select-option value=\"Sintra\">Sintra</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.city.errors?.required\">\r\n            {{'City is required' | customTranslate | async}}\r\n          </span>\r\n\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Email</ion-label>\r\n            <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.required\">\r\n            {{'Email is required' | customTranslate | async}}\r\n          </span>\r\n\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\r\n            {{'Emais is not valid' | customTranslate | async}}\r\n          </span>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Password</ion-label>\r\n            <ion-input formControlName=\"pass\" [type]=\" showPass ? 'text' : 'password'\" required></ion-input>\r\n            <ion-icon slot=\"end\" [name]=\"passwordIconToggle\" (click)=\"togglePass()\"></ion-icon>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.pass.errors?.required\">\r\n            {{'Password is required' | customTranslate | async}}\r\n          </span>\r\n\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.pass.errors?.minlength\">\r\n            {{'Password must have 8 digits' | customTranslate | async}}\r\n          </span>\r\n\r\n\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\"> {{'Repeat Password' | customTranslate | async}}</ion-label>\r\n            <ion-input formControlName=\"passRepeat\" [type]=\" showPass2 ? 'text' : 'password'\" required></ion-input>\r\n            <ion-icon slot=\"end\" [name]=\"passwordIconToggle2\" (click)=\"togglePass2()\"></ion-icon>\r\n          </ion-item>\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.passRepeat.errors?.required\">\r\n            {{'Password is required' | customTranslate | async}}\r\n          </span>\r\n\r\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.passRepeat.errors?.minlength\">\r\n            {{'Password must have 8 digits' | customTranslate | async}}\r\n          </span>\r\n\r\n\r\n          <br>\r\n          <ion-button expand=\"block\" color=\"dark\" type=\"submit\">\r\n            {{'Create Account' | customTranslate | async}}\r\n          </ion-button>\r\n          <br>\r\n        </form>\r\n      </ion-card>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "cl5k":
    /*!*******************************************************!*\
      !*** ./src/app/create_account/create-account.page.ts ***!
      \*******************************************************/

    /*! exports provided: CriaContaPage */

    /***/
    function cl5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CriaContaPage", function () {
        return CriaContaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create-account.page.html */
      "W7xt");
      /* harmony import */


      var _create_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-account.page.scss */
      "KWol");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _create_account_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./create-account-api.service */
      "/udu");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");

      var CriaContaPage = /*#__PURE__*/function () {
        function CriaContaPage(formBuilder, alertCtrl, translateService, api, comp) {
          _classCallCheck(this, CriaContaPage);

          this.formBuilder = formBuilder;
          this.alertCtrl = alertCtrl;
          this.translateService = translateService;
          this.api = api;
          this.comp = comp;
          this.showPass = false;
          this.showPass2 = false;
          this.language = this.translateService.currentLang;
          this.passwordIconToggle = 'eye';
          this.passwordIconToggle2 = 'eye';
          this.isSubmitted = false;
          this.profileForm = this.formBuilder.group({
            name: '',
            dob: '',
            cellphone: '',
            address: '',
            postal: '',
            gender: '',
            city: '',
            email: '',
            pass: '',
            passRepeat: ''
          });
          comp.hide_tab = true;
        }

        _createClass(CriaContaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ionicForm = this.formBuilder.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              postal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')])],
              pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(12)])],
              passRepeat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(12)])]
            }, {
              validator: this.matchingPasswords('pass', 'passRepeat')
            });
          }
        }, {
          key: "togglePass",
          value: function togglePass() {
            this.showPass = !this.showPass;

            if (this.passwordIconToggle == 'eye') {
              this.passwordIconToggle = 'eye-off';
            } else {
              this.passwordIconToggle = 'eye';
            }
          }
        }, {
          key: "togglePass2",
          value: function togglePass2() {
            this.showPass2 = !this.showPass2;

            if (this.passwordIconToggle2 == 'eye') {
              this.passwordIconToggle2 = 'eye-off';
            } else {
              this.passwordIconToggle2 = 'eye';
            }
          }
        }, {
          key: "matchingPasswords",
          value: function matchingPasswords(passwordKey, confirmPasswordKey) {
            return function (group) {
              var password = group.controls[passwordKey];
              var confirmPassword = group.controls[confirmPasswordKey];

              if (password.value !== confirmPassword.value) {
                return {
                  mismatchedPasswords: true
                };
              }
            };
          }
        }, {
          key: "getDate",
          value: function getDate(e) {
            var date = new Date(e.target.value).toISOString().substring(0, 10);
            this.ionicForm.get('dob').setValue(date, {
              onlyself: true
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            this.isSubmitted = true;

            if (!this.ionicForm.valid) {
              return false;
            } else {
              var create_account = {
                name: this.ionicForm.get('name').value,
                dob: this.ionicForm.get('dob').value,
                phone: this.ionicForm.get('phone').value,
                address: this.ionicForm.get('address').value,
                postal: this.ionicForm.get('postal').value,
                gender: this.ionicForm.get('gender').value,
                city: this.ionicForm.get('city').value,
                email: this.ionicForm.get('email').value,
                pass: this.ionicForm.get('pass').value,
                passRepeat: this.ionicForm.get('passRepeat').value
              };
              this.api.createAccount(create_account);
            }
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.ionicForm.controls;
          }
        }]);

        return CriaContaPage;
      }();

      CriaContaPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _create_account_api_service__WEBPACK_IMPORTED_MODULE_7__["CriaContaApiService"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
        }];
      };

      CriaContaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cria-conta',
        template: _raw_loader_create_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CriaContaPage);
      /***/
    },

    /***/
    "f++R":
    /*!*********************************************************!*\
      !*** ./src/app/create_account/create-account.module.ts ***!
      \*********************************************************/

    /*! exports provided: createTranslateLoader, CriaContaPageModule */

    /***/
    function fR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CriaContaPageModule", function () {
        return CriaContaPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-account-routing.module */
      "w8ri");
      /* harmony import */


      var _create_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-account.page */
      "cl5k");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/lang/', '.json');
      }

      var CriaContaPageModule = function CriaContaPageModule() {
        _classCallCheck(this, CriaContaPageModule);
      };

      CriaContaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["CriaContaPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
          }
        })],
        declarations: [_create_account_page__WEBPACK_IMPORTED_MODULE_6__["CriaContaPage"]]
      })], CriaContaPageModule);
      /***/
    },

    /***/
    "w8ri":
    /*!*****************************************************************!*\
      !*** ./src/app/create_account/create-account-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CriaContaPageRoutingModule */

    /***/
    function w8ri(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CriaContaPageRoutingModule", function () {
        return CriaContaPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _create_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-account.page */
      "cl5k");

      var routes = [{
        path: '',
        component: _create_account_page__WEBPACK_IMPORTED_MODULE_3__["CriaContaPage"]
      }];

      var CriaContaPageRoutingModule = function CriaContaPageRoutingModule() {
        _classCallCheck(this, CriaContaPageRoutingModule);
      };

      CriaContaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CriaContaPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=create_account-create-account-module-es5.js.map