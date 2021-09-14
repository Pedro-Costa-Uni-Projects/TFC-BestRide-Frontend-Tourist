(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/udu":
/*!**************************************************************!*\
  !*** ./src/app/create_account/create-account-api.service.ts ***!
  \**************************************************************/
/*! exports provided: CriaContaApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriaContaApiService", function() { return CriaContaApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_services_custom_translate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/custom-translate.service */ "Xfhi");







let CriaContaApiService = class CriaContaApiService {
    constructor(http, router, modalController, alertController, ct) {
        this.http = http;
        this.router = router;
        this.modalController = modalController;
        this.alertController = alertController;
        this.ct = ct;
        this.url = '/users/';
        this.url_info = '/userInfo/';
        this.url_create_user_db = '/saveUser/';
        this.url_add_turist = '/userInfo/add_to_turist_role';
    }
    createAccount(data_dict) {
        let postDataInfo = {
            email: data_dict['email'],
            name: data_dict['name'],
            dob: data_dict['dob'],
            city: data_dict['city'],
            gender: data_dict['gender'],
            phone_number: '+351' + data_dict['phone'],
            adress: data_dict['address'],
            postal_code: data_dict['postal'],
            password: data_dict['pass'],
        };
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url, postDataInfo).subscribe((data) => {
            localStorage.setItem('email', data_dict['email']);
            this.http
                .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url_create_user_db, {
                email: data_dict['email'],
                image: '',
            })
                .subscribe((data) => {
                console.log(data);
                this.showAlertError('Sucess', 'Your account was Confirmed !');
            }, (error) => {
                console.log(error);
            });
            this.router.navigate(['/confirm-account']);
        }, (error) => {
            this.showAlertError('Error', error.error);
        });
    }
    criaContaGoogle(dados_dict) {
        let postData = {
            password: dados_dict['password'],
            login_type: '1',
        };
        console.log(dados_dict);
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url, postData).subscribe((data) => {
            let id_user = data['iduser'];
            let postRoles = {
                user_iduser: id_user,
                roles_id_roles: 0,
            };
            //guarda em user_roles
            this.http
                .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url_add_turist, postRoles)
                .subscribe((data) => { }, (error) => { });
            let postDataInfo = {
                user_iduser: id_user,
                email: dados_dict['dados_email'],
                name: dados_dict['dados_nome'],
                dob: null,
                city: null,
                gender: null,
                phone_number: null,
                adress: null,
                postal_code: null,
            };
            //guardar em userInfo
            this.http
                .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url_info, postDataInfo)
                .subscribe((data) => {
                this.router.navigate(['/home_tab']);
            }, (error) => { });
        }, (error) => { });
    }
    showAlertError(header, msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.ct.translateText(header));
            this.ct.translateText(header).subscribe((res) => {
                header = res;
            });
            this.ct.translateText(msg).subscribe((res) => {
                msg = res;
            });
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: '' + header,
                message: '' + msg,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
};
CriaContaApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _shared_services_custom_translate_service__WEBPACK_IMPORTED_MODULE_6__["CustomTranslateService"] }
];
CriaContaApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CriaContaApiService);



/***/ }),

/***/ "5Pbe":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home_tab/trip-details/trip-details.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <img id=\"img\" style=\"width: 15%;margin-left: 25%;\" src=\"assets/BestRideSplash.png\" />\n    <ion-title style=\"text-align: center;\">BestRide\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <div #map id=\"map\"></div>\n</ion-content>");

/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "Q552":
/*!******************************************************************!*\
  !*** ./src/app/home_tab/book-trip-modal/book-trip-modal.page.ts ***!
  \******************************************************************/
/*! exports provided: BookTripModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookTripModalPage", function() { return BookTripModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_book_trip_modal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./book-trip-modal.page.html */ "VUSU");
/* harmony import */ var _book_trip_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book-trip-modal.page.scss */ "gzes");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _map_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../map-service.service */ "uSyt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");








let BookTripModalPage = class BookTripModalPage {
    constructor(modalCtr, translate, map_service, http) {
        this.modalCtr = modalCtr;
        this.translate = translate;
        this.map_service = map_service;
        this.http = http;
        this.ZOOM_LEVEL = 16.5; // Zoom do mapa
        this.language = this.translate.currentLang;
        this.progress = false;
    }
    ngOnInit() {
        this.circuito = this.circuito;
        this.vehicles = this.map_service.get_vehicles_road(this.circuito['id']);
        setTimeout(() => {
            this.progress = true;
            this.vehicles.forEach((element) => { });
        }, 2000);
    }
    ionViewDidEnter() { }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const closeModal = 'Modal Closed';
            yield this.modalCtr.dismiss(closeModal);
        });
    }
};
BookTripModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _map_service_service__WEBPACK_IMPORTED_MODULE_6__["MapServiceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
BookTripModalPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { static: false },] }],
    circuito_rec: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
BookTripModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-mapa',
        template: _raw_loader_book_trip_modal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_book_trip_modal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookTripModalPage);



/***/ }),

/***/ "Uj3r":
/*!************************************************************************************!*\
  !*** ./src/app/recover_account/code-verification/code-verification-api.service.ts ***!
  \************************************************************************************/
/*! exports provided: CodeVerificationApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeVerificationApiService", function() { return CodeVerificationApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let CodeVerificationApiService = class CodeVerificationApiService {
    constructor(http, router, alertController) {
        this.http = http;
        this.router = router;
        this.alertController = alertController;
        this.url_confirm_account = '/confirmRecoverUser/';
    }
    codeVerification(code, pass, email) {
        let postData = {
            email: email,
            code: code,
            password: pass,
        };
        this.http
            .post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + this.url_confirm_account, postData)
            .subscribe((data) => {
            //console.log(data);
            this.router.navigate(['/login']);
        }, (err) => {
            //console.log(err);
        });
    }
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '',
                message: '',
                buttons: [''],
            });
            yield alert.present();
        });
    }
};
CodeVerificationApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
CodeVerificationApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CodeVerificationApiService);



/***/ }),

/***/ "VUSU":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home_tab/book-trip-modal/book-trip-modal.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <img id=\"img\" style=\"width: 15%;margin-left: 25%;\" src=\"assets/BestRideSplash.png\" />\n    <ion-title style=\"text-align: center;\">BestRide\n    </ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-progress-bar [hidden]=\"progress\" type=\"indeterminate\"></ion-progress-bar>\n  <div class=\"body\">\n\n    <svg height=\"100%\" width=\"100%\">\n      <circle cx=\"0\" cy=\"0\" r=\"220\" fill=\"#00adff\" />\n      <circle cx=\"0\" cy=\"calc(100%)\" r=\"210\" fill=\"#58a600\" />\n      <circle cx=\"calc(100%)\" cy=\"calc(50%)\" r=\"210\" fill=\"#ff3f00\" />\n    </svg>\n\n    <div class=\"content\">\n      <ion-card>\n        <br>\n        <h1> {{ \"Tour Info\" | customTranslate | async}}</h1>\n        <br>\n        <ion-item>\n          <ion-label> {{ \"Date for the Tour ?\" | customTranslate | async}} </ion-label>\n          <ion-datetime displayFormat=\"YYYY-MM-D\" min=\"1989\" max=\"2021\" value=\"2019-06-17\"></ion-datetime>\n        </ion-item>\n\n        <br>\n        <ion-item>\n          <ion-label>{{ \"How Many People ?\" | customTranslate | async}}</ion-label>\n\n          <ion-select value=\"2\" okText=\"OK\" cancelText=\"Dismiss\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n            <ion-select-option value=\"5\">5</ion-select-option>\n            <ion-select-option value=\"6\">6</ion-select-option>\n          </ion-select>\n        </ion-item>\n        <br>\n        <ion-item>\n          <ion-label>{{ \"Schedule the Time \" | customTranslate | async}}</ion-label>\n          <ion-datetime displayFormat=\"HH:mm\"></ion-datetime>\n        </ion-item>\n        <br>\n\n        <ion-item>\n          <ion-label>{{ \"Vehicles \" | customTranslate | async}}</ion-label>\n          <ion-select value=\"brown\" okText=\"Okay\" cancelText=\"Dismiss\">\n            <ion-select-option *ngFor=\"let item of this.vehicles | async\">{{item['vehicle'].name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <br>\n\n        <h2>{{ \"Price \" | customTranslate | async}} : {{ this.circuito.price }} €</h2>\n        <h2>{{ \"Duration \" | customTranslate | async}} : {{ this.circuito.duration }}</h2>\n\n\n        <section>\n          <ion-button expand=\"block\" color=\"dark\">{{ \"Book Tour\" | customTranslate | async}}</ion-button>\n        </section>\n        <br>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "Zx9Z":
/*!**************************************************************!*\
  !*** ./src/app/home_tab/trip-details/trip-details.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0cmlwLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJ0cmlwLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "d+V0":
/*!************************************************************!*\
  !*** ./src/app/home_tab/trip-details/trip-details.page.ts ***!
  \************************************************************/
/*! exports provided: TripDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailsPage", function() { return TripDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_trip_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./trip-details.page.html */ "5Pbe");
/* harmony import */ var _trip_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trip-details.page.scss */ "Zx9Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _roadMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../roadMap */ "1IJX");
/* harmony import */ var _map_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map-service.service */ "uSyt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");









let TripDetailsPage = class TripDetailsPage {
    constructor(modalCtr, translate, map_service, http) {
        this.modalCtr = modalCtr;
        this.translate = translate;
        this.map_service = map_service;
        this.http = http;
        this.ZOOM_LEVEL = 16.5; // Zoom do mapa
        this.language = this.translate.currentLang;
        this.interest = [];
    }
    ngOnInit() {
        this.circuito = this.circuito;
        this.map_service
            .get_points_interest(this.circuito['id'])
            .subscribe((data) => {
            for (let pos in data) {
                this.interest.push(new _roadMap__WEBPACK_IMPORTED_MODULE_6__["InterestPoints"](data[pos]['interest_points'].description, data[pos]['interest_points'].location['coordinates'][0], data[pos]['interest_points'].location['coordinates'][1], data[pos]['interest_points'].image));
            }
        });
        setTimeout(() => {
            this.showMap(this.circuito, this.interest);
        }, 4000);
    }
    ionViewDidEnter() { }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const closeModal = 'Modal Closed';
            yield this.modalCtr.dismiss(closeModal);
        });
    }
    showMap(road, points) {
        const lat_initial = road.lat;
        const lng_initial = road.lng;
        const location = new google.maps.LatLng(lat_initial, lng_initial);
        const options = {
            center: location,
            zoom: this.ZOOM_LEVEL,
            disableDefaultUI: false,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, options);
        const flightPlanCoordinates = [];
        //    Add markers to the map
        for (let pos in points) {
            flightPlanCoordinates.push(points[pos].lat, points[pos].lng);
            let posMarker = new google.maps.LatLng(points[pos].lat, points[pos].lng);
            let marker = new google.maps.Marker({
                map: this.map,
                position: posMarker,
                animation: 'DROP',
                title: this.circuito.title,
                latitude: points[pos].lat,
                longitude: points[pos].lng,
            });
            let content = '<p> ' +
                points[pos].title +
                '</p>' +
                '<img style="width:50%;height:25%" src="' +
                points[pos].image +
                '"</img>';
            let infoWindow = new google.maps.InfoWindow({
                content: content,
            });
            google.maps.event.addListener(marker, 'click', () => {
                infoWindow.open(this.map, marker);
            });
        }
    }
};
TripDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _map_service_service__WEBPACK_IMPORTED_MODULE_7__["MapServiceService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
];
TripDetailsPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { static: false },] }],
    circuito_rec: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
TripDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-trip-details',
        template: _raw_loader_trip_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_trip_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TripDetailsPage);



/***/ }),

/***/ "gzes":
/*!********************************************************************!*\
  !*** ./src/app/home_tab/book-trip-modal/book-trip-modal.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-weight: 800;\n  color: black;\n}\n\n#map {\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n#form {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 15%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n\n.body {\n  background-color: #ffba00;\n  height: 100%;\n  width: 100%;\n}\n\n.content {\n  width: calc(100%);\n  height: calc(100%);\n  position: absolute;\n  top: 12%;\n  justify-content: center;\n  text-align: center;\n  font-size: larger;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxib29rLXRyaXAtbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUYiLCJmaWxlIjoiYm9vay10cmlwLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiNtYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuI2Zvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG59XHJcblxyXG4uYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmEwMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICB3aWR0aDogY2FsYygxMDAlKTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTIlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map