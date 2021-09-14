(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home_tab-menu-module~home_tab-options-map-options-map-module"],{

/***/ "05SW":
/*!**********************************************************!*\
  !*** ./src/app/home_tab/options-map/options-map.page.ts ***!
  \**********************************************************/
/*! exports provided: OptionsMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsMapPage", function() { return OptionsMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_options_map_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./options-map.page.html */ "qRcW");
/* harmony import */ var _options_map_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options-map.page.scss */ "zpPk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _map_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map-service.service */ "uSyt");
/* harmony import */ var _roadMap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../roadMap */ "1IJX");








let OptionsMapPage = class OptionsMapPage {
    constructor(modalController, formBuilder, map_service) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.map_service = map_service;
        this.trips = [];
        this.registrationForm = this.formBuilder.group({
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            people: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() { }
    submit_form() {
        this.map_service.get_roads().subscribe((data) => {
            for (let pos in data) {
                this.trips.push(new _roadMap__WEBPACK_IMPORTED_MODULE_7__["RoadMap"](data[pos].id, data[pos].title, data[pos].duration, data[pos].price, data[pos].description, data[pos].image, data[pos].location['coordinates'][0], data[pos].location['coordinates'][1]));
            }
            //this.trips = data;
        });
        this.modalController.dismiss(this.trips);
    }
};
OptionsMapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _map_service_service__WEBPACK_IMPORTED_MODULE_6__["MapServiceService"] }
];
OptionsMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-options-map',
        template: _raw_loader_options_map_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_options_map_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OptionsMapPage);



/***/ }),

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

/***/ "qRcW":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home_tab/options-map/options-map.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div id=\"content-menu\">\n      <img src=\"assets/BestRideSplash.png\" />\n      <ion-title id=\"title\">BestRide\n      </ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"body\">\n    <svg height=\"100%\" width=\"100%\">\n      <circle cx=\"-30\" cy=\"50\" r=\"230\" fill=\"#ffba00\" />\n      <circle cx=\"360\" cy=\"0\" r=\"120\" fill=\"#58a600\" />\n      <circle cx=\"360\" cy=\"600\" r=\"300\" fill=\"#00adff\" />\n    </svg>\n    <div class=\"content\">\n      <ion-card>\n        <h2 style=\"color: black;font-size: 25px;font-weight: bold;\"> {{'Choose your preferences ! ' | customTranslate |\n          async}}</h2>\n\n        <form class=\"form\" [formGroup]=\"registrationForm\" (ngSubmit)=\"submit_form()\">\n\n          <ion-list>\n            <ion-item>\n              <ion-label>{{'Location ?' | customTranslate | async}}</ion-label>\n              <ion-select formControlName=\"location\" value=\"brown\" okText=\"OK\" cancelText=\"Dismiss\">\n                <ion-select-option value=\"Near\"> {{'Near Me' | customTranslate | async}}</ion-select-option>\n                <ion-select-option value=\"Lisbon\"> {{'Lisbon' | customTranslate | async}}</ion-select-option>\n                <ion-select-option value=\"Sintra\"> {{'Sintra' | customTranslate | async}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <br>\n            <ion-item>\n              <ion-label>{{'How Many People?' | customTranslate | async}}</ion-label>\n              <ion-select value=\"brown\" okText=\"OK\" formControlName=\"people\" cancelText=\"Dismiss\">\n                <ion-select-option value=\"1\"> 1</ion-select-option>\n                <ion-select-option value=\"2\"> 2</ion-select-option>\n                <ion-select-option value=\"3\"> 3</ion-select-option>\n                <ion-select-option value=\"4\"> 4</ion-select-option>\n                <ion-select-option value=\"5\"> 5</ion-select-option>\n                <ion-select-option value=\"6\"> 6</ion-select-option>\n              </ion-select>\n            </ion-item>\n\n            <br>\n            <ion-button [disabled]=\"!registrationForm.valid\" color=\"danger\" type=\"submit\">{{'Search Tours' |\n              customTranslate | async}}\n            </ion-button>\n\n            <br>\n          </ion-list>\n        </form>\n      </ion-card>\n    </div>\n  </div>\n\n  <!--\n  <ion-list class=\"conteudo\">\n    <form class=\"form\" [formGroup]=\"registrationForm\" (ngSubmit)=\"submeter_login()\">\n      <ion-card>\n        <ion-item>\n          <ion-label>Email</ion-label>\n          <ion-input formControlName=\"email\" type=\"email\" required></ion-input>\n        </ion-item>\n      </ion-card>\n\n      <ion-card>\n        <ion-item>\n          <ion-label>Password</ion-label>\n          <ion-input formControlName=\"password\" [type]=\" showPass ? 'text' : 'password'\" required></ion-input>\n          <ion-icon slot=\"end\" [name]=\"passwordIconToggle\" (click)=\"togglePass()\"></ion-icon>\n        </ion-item>\n      </ion-card>\n\n      <ion-button color=\"primary\" expand=\"full\" type=\"submit\">Login</ion-button>\n\n    </form>\n\n    <div>\n      <h6 style=\"text-align: center;\" (click)=\"navegar()\">\n        {{'No Account? Create a account now!' | customTranslate | async}}</h6>\n      <h6 style=\"text-align: center;\" (click)=\"recuperarConta()\">\n        {{'Recover your account' | customTranslate | async}}</h6>\n    </div>\n\n    <ion-button shape=\"round\" color=\"tertiary\" (click)=\"login()\">\n      <ion-icon name=\"logo-facebook\"></ion-icon>\n    </ion-button>\n    <ion-button shape=\"round\" color=\"warning\" (click)=\"googleSignup()\">\n      <ion-icon name=\"logo-google\"></ion-icon>\n    </ion-button>\n\n  </ion-list>\n  -->\n</ion-content>");

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



/***/ }),

/***/ "zpPk":
/*!************************************************************!*\
  !*** ./src/app/home_tab/options-map/options-map.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  color: black;\n  font-weight: 700;\n}\n\n#content-menu img {\n  align-self: center;\n  width: 17%;\n  position: relative;\n  left: 29%;\n}\n\n#content-menu #title {\n  color: black;\n  position: absolute;\n  left: 7%;\n}\n\nion-card {\n  font-size: 25px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n}\n\n.body {\n  background-color: #ff3f00;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 5%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcHRpb25zLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQURKOztBQUtBO0VBQ0UsZUFBQTtFQUNBLDRFQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRkYiLCJmaWxlIjoib3B0aW9ucy1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiNjb250ZW50LW1lbnUge1xyXG4gIGltZyB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTclO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjklO1xyXG4gIH1cclxuXHJcbiAgI3RpdGxlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDclO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjNmMDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=default~home_tab-menu-module~home_tab-options-map-options-map-module-es2015.js.map