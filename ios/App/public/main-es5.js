(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Nuno Caetano\Desktop\Escola\Projetos\projetos\BestRide\turista_app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: true,
        apiUrl: 'http://10.0.2.2:8000'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _pipes_custom_translate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pipes/custom-translate.pipe */
      "zUGa");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pipes_custom_translate_pipe__WEBPACK_IMPORTED_MODULE_3__["CustomTranslatePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_pipes_custom_translate_pipe__WEBPACK_IMPORTED_MODULE_3__["CustomTranslatePipe"]]
      })], SharedModule);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/native-storage/ngx */
      "M2ZX");
      /* harmony import */


      var _shared_services_custom_translate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/services/custom-translate.service */
      "Xfhi");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(translate, customTranslateService, router, nativeStorage, http) {
          _classCallCheck(this, AppComponent);

          this.translate = translate;
          this.customTranslateService = customTranslateService;
          this.router = router;
          this.nativeStorage = nativeStorage;
          this.http = http;
          this.language = this.translate.currentLang;
          this.hide_tab = false;
          this.init();
        }

        _createClass(AppComponent, [{
          key: "init",
          value: function init() {
            if ('lang' in localStorage) {
              this.translate.setDefaultLang(localStorage.getItem('lang'));
              this.customTranslateService.currentLang.next(localStorage.getItem('lang'));
            } else {
              this.translate.setDefaultLang('en');
              this.customTranslateService.currentLang.next('en');
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _shared_services_custom_translate_service__WEBPACK_IMPORTED_MODULE_7__["CustomTranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_6__["NativeStorage"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\r\n  <ion-menu menuId=\"main-menu\" contentId=\"main\" type=\"reveal\" swipeGesture=\"false\">\r\n    <ion-content>\r\n      <div class=\"menu-header-bg\"></div>\r\n      <div class=\"header-content\">\r\n        <img src=\"../assets/icon/favicon.png\">\r\n        <ion-label>\r\n          <h2>Best Ride</h2>\r\n          <p>{{ user_email }}</p>\r\n        </ion-label>\r\n      </div>\r\n\r\n      <ion-list class=\"menu-items\" lines=\"none\">\r\n        <ion-item [routerLink]=\"['/menu']\" translate [translateParams]=\"{ lang: language }\">\r\n          <ion-icon name=\"map-outline\"></ion-icon>\r\n          menu_navegacao.map\r\n        </ion-item>\r\n\r\n        <ion-item [routerLink]=\"['/definicoes']\" translate [translateParams]=\"{ lang: language }\">\r\n          <ion-icon name=\"settings-outline\"></ion-icon> menu_navegacao.definitions\r\n        </ion-item>\r\n\r\n        <ion-item [routerLink]=\"['/calendario']\" translate [translateParams]=\"{ lang: language }\">\r\n          <ion-icon name=\"calendar-outline\"></ion-icon> menu_navegacao.agend\r\n        </ion-item>\r\n\r\n        <ion-item [routerLink]=\"['/dados-conta']\" translate [translateParams]=\"{ lang: language }\">\r\n          <ion-icon name=\"person-outline\"></ion-icon> menu_navegacao.personal\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>-->\r\n\r\n\r\n<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\" [hidden]=\"hide_tab\">\r\n\r\n    <!-- Map -->\r\n    <ion-tab-button tab=\"home_tab\">\r\n      <ion-icon name=\"map-outline\"></ion-icon>\r\n      <ion-label>{{'Home' | customTranslate | async}}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <!-- Reserves -->\r\n    <ion-tab-button tab=\"callendar\">\r\n      <ion-icon name=\"analytics-outline\"></ion-icon>\r\n      <ion-label> {{'reserves' | customTranslate | async}}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <!-- App definitions -->\r\n    <ion-tab-button tab=\"definitions_tab\">\r\n      <ion-icon name=\"settings-outline\"></ion-icon>\r\n      <ion-label>{{'Definitions' | customTranslate | async}}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <!-- User definitions -->\r\n    <ion-tab-button tab=\"user_tab\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label>{{'User' | customTranslate | async}}</ion-label>\r\n    </ion-tab-button>\r\n\r\n\r\n  </ion-tab-bar>\r\n</ion-tabs>";
      /***/
    },

    /***/
    "Xfhi":
    /*!*************************************************************!*\
      !*** ./src/app/shared/services/custom-translate.service.ts ***!
      \*************************************************************/

    /*! exports provided: CustomTranslateService */

    /***/
    function Xfhi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomTranslateService", function () {
        return CustomTranslateService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var CustomTranslateService = /*#__PURE__*/function () {
        function CustomTranslateService(http) {
          _classCallCheck(this, CustomTranslateService);

          this.http = http;
          this.currentLang = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('en');
        }

        _createClass(CustomTranslateService, [{
          key: "translateText",
          value: function translateText(text) {
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl, "/translate/"), {
              text: text,
              outputLang: this.currentLang.value,
              sourceLang: 'en'
            });
          }
        }]);

        return CustomTranslateService;
      }();

      CustomTranslateService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      CustomTranslateService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], CustomTranslateService);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: createTranslateLoader, AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      "h+qT");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/native-storage/ngx */
      "M2ZX");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      "KqBo");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8"); // Modulos para translacao


      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, './assets/lang/', '.json');
      }

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
          }
        }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]],
        providers: [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_12__["NativeStorage"], _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'user_tab',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "X3zk")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'recover_account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | recover_account-recover-account-module */
          [__webpack_require__.e("common"), __webpack_require__.e("recover_account-recover-account-module")]).then(__webpack_require__.bind(null,
          /*! ./recover_account/recover-account.module */
          "oqa2")).then(function (m) {
            return m.RecuperarContaPageModule;
          });
        }
      }, {
        path: 'splash-screen',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | splash-screen-splash-screen-module */
          "splash-screen-splash-screen-module").then(__webpack_require__.bind(null,
          /*! ./splash-screen/splash-screen.module */
          "iLlt")).then(function (m) {
            return m.SplashScreenPageModule;
          });
        }
      }, {
        path: 'create_account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | create_account-create-account-module */
          [__webpack_require__.e("common"), __webpack_require__.e("create_account-create-account-module")]).then(__webpack_require__.bind(null,
          /*! ./create_account/create-account.module */
          "f++R")).then(function (m) {
            return m.CriaContaPageModule;
          });
        }
      }, {
        path: 'home_tab',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home_tab-menu-module */
          [__webpack_require__.e("default~home_tab-menu-module~home_tab-options-map-options-map-module"), __webpack_require__.e("common"), __webpack_require__.e("home_tab-menu-module")]).then(__webpack_require__.bind(null,
          /*! ./home_tab/menu.module */
          "3v/9")).then(function (m) {
            return m.MenuPageModule;
          });
        }
      }, {
        path: 'definitions_tab',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | app_definitions-definitions-module */
          "app_definitions-definitions-module").then(__webpack_require__.bind(null,
          /*! ./app_definitions/definitions.module */
          "1EgR")).then(function (m) {
            return m.DefinicoesPageModule;
          });
        }
      }, {
        path: 'callendar',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | callendar-callendar-module */
          "callendar-callendar-module").then(__webpack_require__.bind(null,
          /*! ./callendar/callendar.module */
          "cgj/")).then(function (m) {
            return m.CalendarioPageModule;
          });
        }
      }, {
        path: 'user_tab',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | user_tab-user-tab-module */
          [__webpack_require__.e("default~reset-password-modal-reset-password-modal-module~user_tab-user-tab-module"), __webpack_require__.e("user_tab-user-tab-module")]).then(__webpack_require__.bind(null,
          /*! ./user_tab/user-tab.module */
          "KGFk")).then(function (m) {
            return m.DadosContaPageModule;
          });
        }
      }, {
        path: 'confirm-account',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | confirm-account-confirm-account-module */
          "confirm-account-confirm-account-module").then(__webpack_require__.bind(null,
          /*! ./confirm-account/confirm-account.module */
          "axFi")).then(function (m) {
            return m.ConfirmAccountPageModule;
          });
        }
      }, {
        path: 'book-trip-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home_tab-book-trip-modal-book-trip-modal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("home_tab-book-trip-modal-book-trip-modal-module")]).then(__webpack_require__.bind(null,
          /*! ./home_tab/book-trip-modal/book-trip-modal.module */
          "vF+l")).then(function (m) {
            return m.BookTripModalPageModule;
          });
        }
      }, {
        path: 'options-map',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home_tab-options-map-options-map-module */
          [__webpack_require__.e("default~home_tab-menu-module~home_tab-options-map-options-map-module"), __webpack_require__.e("home_tab-options-map-options-map-module")]).then(__webpack_require__.bind(null,
          /*! ./home_tab/options-map/options-map.module */
          "Y977")).then(function (m) {
            return m.OptionsMapPageModule;
          });
        }
      }, {
        path: 'trip-details',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | home_tab-trip-details-trip-details-module */
          [__webpack_require__.e("common"), __webpack_require__.e("home_tab-trip-details-trip-details-module")]).then(__webpack_require__.bind(null,
          /*! ./home_tab/trip-details/trip-details.module */
          "J5qH")).then(function (m) {
            return m.TripDetailsPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "zUGa":
    /*!*******************************************************!*\
      !*** ./src/app/shared/pipes/custom-translate.pipe.ts ***!
      \*******************************************************/

    /*! exports provided: CustomTranslatePipe */

    /***/
    function zUGa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomTranslatePipe", function () {
        return CustomTranslatePipe;
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


      var _services_custom_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/custom-translate.service */
      "Xfhi");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var CustomTranslatePipe = /*#__PURE__*/function () {
        function CustomTranslatePipe(customTranslateService) {
          _classCallCheck(this, CustomTranslatePipe);

          this.customTranslateService = customTranslateService;
        }

        _createClass(CustomTranslatePipe, [{
          key: "transform",
          value: function transform(value) {
            var _this = this;

            return this.customTranslateService.currentLang.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
              if (value) {
                return _this.customTranslateService.translateText(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
                  return result.translated_text;
                }));
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('');
              }
            }));
          }
        }]);

        return CustomTranslatePipe;
      }();

      CustomTranslatePipe.ctorParameters = function () {
        return [{
          type: _services_custom_translate_service__WEBPACK_IMPORTED_MODULE_2__["CustomTranslateService"]
        }];
      };

      CustomTranslatePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'customTranslate'
      })], CustomTranslatePipe);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map