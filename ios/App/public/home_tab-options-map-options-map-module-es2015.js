(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home_tab-options-map-options-map-module"],{

/***/ "Y977":
/*!************************************************************!*\
  !*** ./src/app/home_tab/options-map/options-map.module.ts ***!
  \************************************************************/
/*! exports provided: OptionsMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsMapPageModule", function() { return OptionsMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _options_map_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options-map-routing.module */ "tbM/");
/* harmony import */ var _options_map_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options-map.page */ "05SW");








let OptionsMapPageModule = class OptionsMapPageModule {
};
OptionsMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _options_map_routing_module__WEBPACK_IMPORTED_MODULE_6__["OptionsMapPageRoutingModule"],
        ],
        declarations: [_options_map_page__WEBPACK_IMPORTED_MODULE_7__["OptionsMapPage"]],
    })
], OptionsMapPageModule);



/***/ }),

/***/ "tbM/":
/*!********************************************************************!*\
  !*** ./src/app/home_tab/options-map/options-map-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: OptionsMapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsMapPageRoutingModule", function() { return OptionsMapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _options_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options-map.page */ "05SW");




const routes = [
    {
        path: '',
        component: _options_map_page__WEBPACK_IMPORTED_MODULE_3__["OptionsMapPage"]
    }
];
let OptionsMapPageRoutingModule = class OptionsMapPageRoutingModule {
};
OptionsMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OptionsMapPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=home_tab-options-map-options-map-module-es2015.js.map