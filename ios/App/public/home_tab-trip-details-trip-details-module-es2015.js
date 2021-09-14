(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home_tab-trip-details-trip-details-module"],{

/***/ "1IJX":
/*!*************************************!*\
  !*** ./src/app/home_tab/roadMap.ts ***!
  \*************************************/
/*! exports provided: RoadMap, InterestPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadMap", function() { return RoadMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestPoints", function() { return InterestPoints; });
class RoadMap {
    constructor(id, title, duration, price, description, image, lat, lng) {
        this.id = id;
        this.title = title;
        this.duration = duration;
        this.price = price;
        this.description = description;
        this.image = image;
        this.lat = lat;
        this.lng = lng;
    }
}
class InterestPoints {
    constructor(title, lat, lng, image) {
        this.title = title;
        this.lat = lat;
        this.lng = lng;
        this.image = image;
    }
}


/***/ }),

/***/ "J5qH":
/*!**************************************************************!*\
  !*** ./src/app/home_tab/trip-details/trip-details.module.ts ***!
  \**************************************************************/
/*! exports provided: TripDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsPageModule", function() { return TripDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-details-routing.module */ "sgdP");
/* harmony import */ var _trip_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip-details.page */ "d+V0");







let TripDetailsPageModule = class TripDetailsPageModule {
};
TripDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trip_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["TripDetailsPageRoutingModule"]
        ],
        declarations: [_trip_details_page__WEBPACK_IMPORTED_MODULE_6__["TripDetailsPage"]]
    })
], TripDetailsPageModule);



/***/ }),

/***/ "fOiW":
/*!**********************************!*\
  !*** ./src/app/home_tab/user.ts ***!
  \**********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
}


/***/ }),

/***/ "sgdP":
/*!**********************************************************************!*\
  !*** ./src/app/home_tab/trip-details/trip-details-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: TripDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsPageRoutingModule", function() { return TripDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trip_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-details.page */ "d+V0");




const routes = [
    {
        path: '',
        component: _trip_details_page__WEBPACK_IMPORTED_MODULE_3__["TripDetailsPage"]
    }
];
let TripDetailsPageRoutingModule = class TripDetailsPageRoutingModule {
};
TripDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TripDetailsPageRoutingModule);



/***/ }),

/***/ "uSyt":
/*!*************************************************!*\
  !*** ./src/app/home_tab/map-service.service.ts ***!
  \*************************************************/
/*! exports provided: MapServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapServiceService", function() { return MapServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "Bfh1");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user */ "fOiW");






let MapServiceService = class MapServiceService {
    constructor(http, geolocation) {
        this.http = http;
        this.geolocation = geolocation;
        this.url = '/itineary/showRoadMap';
        this.urlGetPoints = '/itineary/showItineary/';
        this.urlDistance = '/itineary/distance/';
        this.urlVehicles = '/itineray/showRoadVehicles/';
    }
    ngOnInit() {
        this.getUserPosition();
    }
    ionViewDidEnter() { }
    getUserPosition() {
        this.geolocation
            .getCurrentPosition()
            .then((res) => {
            console.log('ANSE');
            console.log(res);
            this.user = new _user__WEBPACK_IMPORTED_MODULE_5__["User"](res.coords.latitude, res.coords.longitude);
        })
            .catch((error) => { });
    }
    get_roads() {
        this.getUserPosition();
        this.roads = this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url, {
            lat: 38.72808865556741,
            lng: -9.126644444741652,
            kmMAX: 30,
        });
        return this.roads;
    }
    get_points_interest(id) {
        this.interest = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.urlGetPoints + id);
        return this.interest;
    }
    get_vehicles_road(id) {
        this.vehicles = this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.urlVehicles + id);
        return this.vehicles;
    }
};
MapServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] }
];
MapServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], MapServiceService);



/***/ })

}]);
//# sourceMappingURL=home_tab-trip-details-trip-details-module-es2015.js.map