(self["webpackChunkSportMonitoring"] = self["webpackChunkSportMonitoring"] || []).push([["src_app_menu_homepage_homepage_module_ts"],{

/***/ 7377:
/*!**********************************************************!*\
  !*** ./src/app/menu/homepage/homepage-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageRoutingModule": () => (/* binding */ HomepageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.component */ 1450);




const routes = [
    {
        path: '',
        component: _homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent
    }
];
let HomepageRoutingModule = class HomepageRoutingModule {
};
HomepageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomepageRoutingModule);



/***/ }),

/***/ 1450:
/*!*****************************************************!*\
  !*** ./src/app/menu/homepage/homepage.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_homepage_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./homepage.component.html */ 6393);
/* harmony import */ var _homepage_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component.scss */ 3316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() { }
};
HomepageComponent.ctorParameters = () => [];
HomepageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-homepage',
        template: _raw_loader_homepage_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_homepage_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomepageComponent);



/***/ }),

/***/ 2740:
/*!**************************************************!*\
  !*** ./src/app/menu/homepage/homepage.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageModule": () => (/* binding */ HomepageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-routing.module */ 7377);
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component */ 1450);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ 2850);






let HomepageModule = class HomepageModule {
};
HomepageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_1__.HomepageComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent],
        exports: [_homepage_component__WEBPACK_IMPORTED_MODULE_1__.HomepageComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomepageRoutingModule
        ]
    })
], HomepageModule);



/***/ }),

/***/ 3316:
/*!*******************************************************!*\
  !*** ./src/app/menu/homepage/homepage.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 6393:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/homepage/homepage.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-login></app-login>");

/***/ })

}]);
//# sourceMappingURL=src_app_menu_homepage_homepage_module_ts.js.map