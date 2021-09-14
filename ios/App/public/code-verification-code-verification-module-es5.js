(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["code-verification-code-verification-module"], {
    /***/
    "J+cl":
    /*!*******************************************************************************!*\
      !*** ./src/app/recover_account/code-verification/code-verification.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: createTranslateLoader, CodeVerificationPageModule */

    /***/
    function JCl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodeVerificationPageModule", function () {
        return CodeVerificationPageModule;
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


      var _code_verification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./code-verification-routing.module */
      "pUaw");
      /* harmony import */


      var _code_verification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./code-verification.page */
      "SBPr");
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


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/lang/', '.json');
      }

      var CodeVerificationPageModule = function CodeVerificationPageModule() {
        _classCallCheck(this, CodeVerificationPageModule);
      };

      CodeVerificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _code_verification_routing_module__WEBPACK_IMPORTED_MODULE_5__["CodeVerificationPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
          }
        })],
        declarations: [_code_verification_page__WEBPACK_IMPORTED_MODULE_6__["CodeVerificationPage"]]
      })], CodeVerificationPageModule);
      /***/
    },

    /***/
    "pUaw":
    /*!***************************************************************************************!*\
      !*** ./src/app/recover_account/code-verification/code-verification-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: CodeVerificationPageRoutingModule */

    /***/
    function pUaw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CodeVerificationPageRoutingModule", function () {
        return CodeVerificationPageRoutingModule;
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


      var _code_verification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./code-verification.page */
      "SBPr");

      var routes = [{
        path: '',
        component: _code_verification_page__WEBPACK_IMPORTED_MODULE_3__["CodeVerificationPage"]
      }, {
        path: 'reset-password-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | reset-password-modal-reset-password-modal-module */
          [__webpack_require__.e("default~reset-password-modal-reset-password-modal-module~user_tab-user-tab-module"), __webpack_require__.e("common"), __webpack_require__.e("reset-password-modal-reset-password-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./reset-password-modal/reset-password-modal.module */
          "jbL6")).then(function (m) {
            return m.ResetPasswordModalPageModule;
          });
        }
      }];

      var CodeVerificationPageRoutingModule = function CodeVerificationPageRoutingModule() {
        _classCallCheck(this, CodeVerificationPageRoutingModule);
      };

      CodeVerificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CodeVerificationPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=code-verification-code-verification-module-es5.js.map