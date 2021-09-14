(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home_tab-menu-module"], {
    /***/
    "2vVL":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home_tab/menu.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function vVL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <div id=\"content-menu\">\r\n      <img src=\"assets/BestRideSplash.png\" />\r\n      <ion-title id=\"title\">BestRide\r\n      </ion-title>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [scrollEvents]=\"true\">\r\n  <div class=\"body\">\r\n\r\n    <svg height=\"100%\" width=\"100%\">\r\n      <circle cx=\"0\" cy=\"0\" r=\"220\" fill=\"#00adff\" />\r\n      <circle cx=\"0\" cy=\"calc(100%)\" r=\"210\" fill=\"#58a600\" />\r\n      <circle cx=\"calc(100%)\" cy=\"calc(50%)\" r=\"210\" fill=\"#ff3f00\" />\r\n    </svg>\r\n\r\n    <div class=\"content\">\r\n      <ion-card style=\"text-align: justify;\">\r\n        <br>\r\n        <div id=\"iti_title\">\r\n          <h2> {{ 'Lisbon' | customTranslate | async}} <br> {{ 'itineraries' | customTranslate | async}}</h2>\r\n        </div>\r\n        <div scrollY=\"true\" class=\"botoes\">\r\n          <ion-list *ngFor=\"let road of trips\">\r\n            <ion-card-header>\r\n              <ion-card-subtitle> {{ \"Price : \" + road.price + \"€ Duration : \" + road.duration | customTranslate |\r\n                async\r\n                }}\r\n              </ion-card-subtitle>\r\n              <ion-card-title>{{ road.title| customTranslate | async}}</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content>\r\n              {{ road.description| customTranslate | async}}\r\n              <img [src]=\"road.image\">\r\n\r\n              <ion-button (click)=\"showRoteiro(road)\" expand=\"block\" color=\"dark\"> {{'Book Tour' | customTranslate |\r\n                async}}\r\n              </ion-button>\r\n              <ion-button (click)=\"trip_map_details(road)\" expand=\"block\" color=\"success\"> {{'See Tour' |\r\n                customTranslate | async}}\r\n              </ion-button>\r\n            </ion-card-content>\r\n          </ion-list>\r\n        </div>\r\n      </ion-card>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</ion-content>";
      /***/
    },

    /***/
    "3v/9":
    /*!*****************************************!*\
      !*** ./src/app/home_tab/menu.module.ts ***!
      \*****************************************/

    /*! exports provided: createTranslateLoader, MenuPageModule */

    /***/
    function v9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
        return createTranslateLoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPageModule", function () {
        return MenuPageModule;
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


      var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-routing.module */
      "g7n7");
      /* harmony import */


      var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu.page */
      "PssY");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");

      function createTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http, './assets/lang/', '.json');
      }

      var MenuPageModule = function MenuPageModule() {
        _classCallCheck(this, MenuPageModule);
      };

      MenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: createTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
          }
        })],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
      })], MenuPageModule);
      /***/
    },

    /***/
    "PssY":
    /*!***************************************!*\
      !*** ./src/app/home_tab/menu.page.ts ***!
      \***************************************/

    /*! exports provided: MenuPage */

    /***/
    function PssY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPage", function () {
        return MenuPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./menu.page.html */
      "2vVL");
      /* harmony import */


      var _menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu.page.scss */
      "yXBa");
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


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _options_map_options_map_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./options-map/options-map.page */
      "05SW");
      /* harmony import */


      var _book_trip_modal_book_trip_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./book-trip-modal/book-trip-modal.page */
      "Q552");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../app.component */
      "Sy1n");
      /* harmony import */


      var _map_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./map-service.service */
      "uSyt");
      /* harmony import */


      var _shared_services_custom_translate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../shared/services/custom-translate.service */
      "Xfhi");
      /* harmony import */


      var _trip_details_trip_details_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./trip-details/trip-details.page */
      "d+V0");

      var MenuPage = /*#__PURE__*/function () {
        function MenuPage(geolocation, translateService, router, model_controller, appComp, map_service, trans, modalController) {
          _classCallCheck(this, MenuPage);

          this.geolocation = geolocation;
          this.translateService = translateService;
          this.router = router;
          this.model_controller = model_controller;
          this.appComp = appComp;
          this.map_service = map_service;
          this.trans = trans;
          this.modalController = modalController;
          this.language = this.translateService.currentLang;
          this.trips = [];
          appComp.hide_tab = false;
          map_service.ngOnInit();
        }

        _createClass(MenuPage, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.presentModalMapDefinitions();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "presentModalMapDefinitions",
          value: function presentModalMapDefinitions() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _options_map_options_map_page__WEBPACK_IMPORTED_MODULE_7__["OptionsMapPage"]
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        var data_trips = data['data']; // data that came from the modal on dismiss

                        _this.trips = data_trips;
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showRoteiro",
          value: function showRoteiro(road) {
            this.selected = road;
            this.presentModal(road);
          } //  Open the page for the trip booking

        }, {
          key: "presentModal",
          value: function presentModal(road) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.model_controller.create({
                        component: _book_trip_modal_book_trip_modal_page__WEBPACK_IMPORTED_MODULE_8__["BookTripModalPage"],
                        componentProps: {
                          circuito: road
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //  Open the page for the trip booking

        }, {
          key: "trip_map_details",
          value: function trip_map_details(road) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.model_controller.create({
                        component: _trip_details_trip_details_page__WEBPACK_IMPORTED_MODULE_13__["TripDetailsPage"],
                        componentProps: {
                          circuito: road
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      _context3.next = 5;
                      return modal.present();

                    case 5:
                      return _context3.abrupt("return", _context3.sent);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return MenuPage;
      }();

      MenuPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }, {
          type: _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
        }, {
          type: _map_service_service__WEBPACK_IMPORTED_MODULE_11__["MapServiceService"]
        }, {
          type: _shared_services_custom_translate_service__WEBPACK_IMPORTED_MODULE_12__["CustomTranslateService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]
        }];
      };

      MenuPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            "static": false
          }]
        }]
      };
      MenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu',
        template: _raw_loader_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MenuPage);
      /***/
    },

    /***/
    "g7n7":
    /*!*************************************************!*\
      !*** ./src/app/home_tab/menu-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: MenuPageRoutingModule */

    /***/
    function g7n7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function () {
        return MenuPageRoutingModule;
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


      var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu.page */
      "PssY");

      var routes = [{
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"]
      }];

      var MenuPageRoutingModule = function MenuPageRoutingModule() {
        _classCallCheck(this, MenuPageRoutingModule);
      };

      MenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuPageRoutingModule);
      /***/
    },

    /***/
    "yXBa":
    /*!*****************************************!*\
      !*** ./src/app/home_tab/menu.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function yXBa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  color: black;\n  font-weight: 800;\n}\n\n.body {\n  background-color: #ffba00;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  width: calc(100%);\n  height: calc(100%);\n  position: absolute;\n  top: 5%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n\n#iti_title {\n  text-align: center;\n  color: black;\n  border-bottom: 1px solid black;\n  font-weight: bold;\n}\n\n#content-menu img {\n  align-self: center;\n  width: 17%;\n  position: relative;\n  left: 29%;\n}\n\n#content-menu #title {\n  color: black;\n  position: absolute;\n  left: 7%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFESiIsImZpbGUiOiJtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmEwMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB3aWR0aDogY2FsYygxMDAlKTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4jaXRpX3RpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2NvbnRlbnQtbWVudSB7XHJcbiAgaW1nIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxNyU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyOSU7XHJcbiAgfVxyXG5cclxuICAjdGl0bGUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNyU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=home_tab-menu-module-es5.js.map