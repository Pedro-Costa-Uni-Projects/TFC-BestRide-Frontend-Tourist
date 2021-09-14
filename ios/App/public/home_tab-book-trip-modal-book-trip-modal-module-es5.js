(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home_tab-book-trip-modal-book-trip-modal-module"], {
    /***/
    "fOiW":
    /*!**********************************!*\
      !*** ./src/app/home_tab/user.ts ***!
      \**********************************/

    /*! exports provided: User */

    /***/
    function fOiW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "User", function () {
        return User;
      });

      var User = function User(lat, lng) {
        _classCallCheck(this, User);

        this.lat = lat;
        this.lng = lng;
      };
      /***/

    },

    /***/
    "kvKF":
    /*!****************************************************************************!*\
      !*** ./src/app/home_tab/book-trip-modal/book-trip-modal-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: BookTripModalPageRoutingModule */

    /***/
    function kvKF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookTripModalPageRoutingModule", function () {
        return BookTripModalPageRoutingModule;
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


      var _book_trip_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./book-trip-modal.page */
      "Q552");

      var routes = [{
        path: '',
        component: _book_trip_modal_page__WEBPACK_IMPORTED_MODULE_3__["BookTripModalPage"]
      }];

      var BookTripModalPageRoutingModule = function BookTripModalPageRoutingModule() {
        _classCallCheck(this, BookTripModalPageRoutingModule);
      };

      BookTripModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BookTripModalPageRoutingModule);
      /***/
    },

    /***/
    "uSyt":
    /*!*************************************************!*\
      !*** ./src/app/home_tab/map-service.service.ts ***!
      \*************************************************/

    /*! exports provided: MapServiceService */

    /***/
    function uSyt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapServiceService", function () {
        return MapServiceService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user */
      "fOiW");

      var MapServiceService = /*#__PURE__*/function () {
        function MapServiceService(http, geolocation) {
          _classCallCheck(this, MapServiceService);

          this.http = http;
          this.geolocation = geolocation;
          this.url = '/itineary/showRoadMap';
          this.urlGetPoints = '/itineary/showItineary/';
          this.urlDistance = '/itineary/distance/';
          this.urlVehicles = '/itineray/showRoadVehicles/';
        }

        _createClass(MapServiceService, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserPosition();
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {}
        }, {
          key: "getUserPosition",
          value: function getUserPosition() {
            var _this = this;

            this.geolocation.getCurrentPosition().then(function (res) {
              console.log('ANSE');
              console.log(res);
              _this.user = new _user__WEBPACK_IMPORTED_MODULE_5__["User"](res.coords.latitude, res.coords.longitude);
            })["catch"](function (error) {});
          }
        }, {
          key: "get_roads",
          value: function get_roads() {
            this.getUserPosition();
            this.roads = this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url, {
              lat: 38.72808865556741,
              lng: -9.126644444741652,
              kmMAX: 30
            });
            return this.roads;
          }
        }, {
          key: "get_points_interest",
          value: function get_points_interest(id) {
            this.interest = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.urlGetPoints + id);
            return this.interest;
          }
        }, {
          key: "get_vehicles_road",
          value: function get_vehicles_road(id) {
            this.vehicles = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.urlVehicles + id);
            return this.vehicles;
          }
        }]);

        return MapServiceService;
      }();

      MapServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }];
      };

      MapServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MapServiceService);
      /***/
    },

    /***/
    "vF+l":
    /*!********************************************************************!*\
      !*** ./src/app/home_tab/book-trip-modal/book-trip-modal.module.ts ***!
      \********************************************************************/

    /*! exports provided: BookTripModalPageModule */

    /***/
    function vFL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BookTripModalPageModule", function () {
        return BookTripModalPageModule;
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


      var _book_trip_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./book-trip-modal-routing.module */
      "kvKF");
      /* harmony import */


      var _book_trip_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./book-trip-modal.page */
      "Q552");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");

      var BookTripModalPageModule = function BookTripModalPageModule() {
        _classCallCheck(this, BookTripModalPageModule);
      };

      BookTripModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _book_trip_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookTripModalPageRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_book_trip_modal_page__WEBPACK_IMPORTED_MODULE_6__["BookTripModalPage"]]
      })], BookTripModalPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home_tab-book-trip-modal-book-trip-modal-module-es5.js.map