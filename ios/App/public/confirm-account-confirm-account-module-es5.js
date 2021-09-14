(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-account-confirm-account-module"], {
    /***/
    "46dS":
    /*!***********************************************************!*\
      !*** ./src/app/confirm-account/confirm-account.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function dS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  font-weight: 950;\n  color: black;\n}\n\n.body {\n  background-color: #00adff;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 25%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbmZpcm0tYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiY29uZmlybS1hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC13ZWlnaHQ6IDk1MDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbi5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGFkZmY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "Wwuz":
    /*!*********************************************************!*\
      !*** ./src/app/confirm-account/confirm-account.page.ts ***!
      \*********************************************************/

    /*! exports provided: ConfirmAccountPage */

    /***/
    function Wwuz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmAccountPage", function () {
        return ConfirmAccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_confirm_account_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./confirm-account.page.html */
      "qFCX");
      /* harmony import */


      var _confirm_account_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm-account.page.scss */
      "46dS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_services_custom_translate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shared/services/custom-translate.service */
      "Xfhi");

      var ConfirmAccountPage = /*#__PURE__*/function () {
        function ConfirmAccountPage(comp, formBuilder, alertController, http, router, ct) {
          _classCallCheck(this, ConfirmAccountPage);

          this.comp = comp;
          this.formBuilder = formBuilder;
          this.alertController = alertController;
          this.http = http;
          this.router = router;
          this.ct = ct;
          this.registrationForm = this.formBuilder.group({
            code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])]
          });
          this.url = '/verifyAccount/';
          this.url_resend = '/resend_code/';
          comp.hide_tab = true;
        }

        _createClass(ConfirmAccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Erro',
                        message: 'rrro',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "validateUser",
          value: function validateUser() {
            var _this = this;

            var code = this.registrationForm.get('code').value;
            console.log(localStorage.getItem('email'));
            var data = {
              email: localStorage.getItem('email'),
              code: '' + code
            };
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + this.url, data).subscribe(function (data) {
              _this.router.navigate(['/login']);
            }, function (error) {
              _this.showAlertError('Error', error.error);
            });
          }
        }, {
          key: "resend_code",
          value: function resend_code() {
            var _this2 = this;

            var data = {
              email: localStorage.getItem('email')
            };
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + this.url_resend, data).subscribe(function (data) {
              console.log(data);

              _this2.showAlertError('Alert', 'Code Resended!');
            }, function (error) {
              _this2.showAlertError('Error', error.error);
            });
          }
        }, {
          key: "showAlertError",
          value: function showAlertError(header, msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(this.ct.translateText(header));
                      this.ct.translateText(header).subscribe(function (res) {
                        header = res;
                      });
                      this.ct.translateText(msg).subscribe(function (res) {
                        msg = res;
                      });
                      _context2.next = 5;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: '' + header,
                        message: '' + msg,
                        buttons: ['OK']
                      });

                    case 5:
                      alert = _context2.sent;
                      _context2.next = 8;
                      return alert.present();

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ConfirmAccountPage;
      }();

      ConfirmAccountPage.ctorParameters = function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _shared_services_custom_translate_service__WEBPACK_IMPORTED_MODULE_10__["CustomTranslateService"]
        }];
      };

      ConfirmAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirm-account',
        template: _raw_loader_confirm_account_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_confirm_account_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ConfirmAccountPage);
      /***/
    },

    /***/
    "axFi":
    /*!***********************************************************!*\
      !*** ./src/app/confirm-account/confirm-account.module.ts ***!
      \***********************************************************/

    /*! exports provided: ConfirmAccountPageModule */

    /***/
    function axFi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmAccountPageModule", function () {
        return ConfirmAccountPageModule;
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


      var _confirm_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-account-routing.module */
      "et60");
      /* harmony import */


      var _confirm_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm-account.page */
      "Wwuz");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");

      var ConfirmAccountPageModule = function ConfirmAccountPageModule() {
        _classCallCheck(this, ConfirmAccountPageModule);
      };

      ConfirmAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmAccountPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_confirm_account_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmAccountPage"]]
      })], ConfirmAccountPageModule);
      /***/
    },

    /***/
    "et60":
    /*!*******************************************************************!*\
      !*** ./src/app/confirm-account/confirm-account-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ConfirmAccountPageRoutingModule */

    /***/
    function et60(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmAccountPageRoutingModule", function () {
        return ConfirmAccountPageRoutingModule;
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


      var _confirm_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm-account.page */
      "Wwuz");

      var routes = [{
        path: '',
        component: _confirm_account_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmAccountPage"]
      }];

      var ConfirmAccountPageRoutingModule = function ConfirmAccountPageRoutingModule() {
        _classCallCheck(this, ConfirmAccountPageRoutingModule);
      };

      ConfirmAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmAccountPageRoutingModule);
      /***/
    },

    /***/
    "qFCX":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirm-account/confirm-account.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qFCX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'Validate Account' | customTranslate | async}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"body\">\n\n    <svg height=\"100%\" width=\"100%\">\n      <circle cx=\"0\" cy=\"0\" r=\"250\" fill=\"#bc3592\" />\n      <circle cx=\"0\" cy=\"calc(100%)\" r=\"250\" fill=\"#ffba00\" />\n      <circle cx=\"calc(100% - 20px)\" cy=\"calc(100% - 20px)\" r=\"250\" fill=\"#ff3f00\" />\n    </svg>\n\n    <div class=\"content\">\n      <ion-card>\n        <h1> {{'Confirm Your Account' | customTranslate | async}}</h1>\n        <p> {{'A code was sent to your email.' | customTranslate | async}}</p>\n        <form class=\"form\" [formGroup]=\"registrationForm\" (ngSubmit)=\"validateUser()\">\n          <ion-item>\n            <ion-label position=\"stacked\"> {{'Code' | customTranslate | async}}</ion-label>\n            <ion-input formControlName=\"code\" type=\"number\" required></ion-input>\n          </ion-item>\n          <ion-button [disabled]=\"!registrationForm.valid\" color=\"dark\" expand=\"block\" type=\"submit\">\n            {{'Confirm account' | customTranslate | async}}\n          </ion-button>\n\n          <ion-button color=\"danger\" expand=\"block\" (click)=\"resend_code()\">\n            {{'Resend Code' | customTranslate | async}}\n          </ion-button>\n\n        </form>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=confirm-account-confirm-account-module-es5.js.map