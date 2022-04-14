(self["webpackChunkSportMonitoring"] = self["webpackChunkSportMonitoring"] || []).push([["src_app_menu_gallery_gallery_module_ts"],{

/***/ 3522:
/*!********************************************************!*\
  !*** ./src/app/menu/gallery/gallery-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryRoutingModule": () => (/* binding */ GalleryRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.component */ 9959);




const routes = [
    {
        path: '',
        component: _gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent
    }
];
let GalleryRoutingModule = class GalleryRoutingModule {
};
GalleryRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], GalleryRoutingModule);



/***/ }),

/***/ 9959:
/*!***************************************************!*\
  !*** ./src/app/menu/gallery/gallery.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gallery.component.html */ 4196);
/* harmony import */ var _gallery_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component.scss */ 3699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_services_App_Gallery_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/App/Gallery/gallery.service */ 2191);





let GalleryComponent = class GalleryComponent {
    constructor(componentService) {
        this.componentService = componentService;
    }
    ngOnInit() { }
};
GalleryComponent.ctorParameters = () => [
    { type: src_services_App_Gallery_gallery_service__WEBPACK_IMPORTED_MODULE_2__.GalleryService }
];
GalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-gallery',
        template: _raw_loader_gallery_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gallery_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GalleryComponent);



/***/ }),

/***/ 6120:
/*!************************************************!*\
  !*** ./src/app/menu/gallery/gallery.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryModule": () => (/* binding */ GalleryModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-routing.module */ 3522);
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component */ 9959);





let GalleryModule = class GalleryModule {
};
GalleryModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent],
        exports: [_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GalleryRoutingModule
        ]
    })
], GalleryModule);



/***/ }),

/***/ 2191:
/*!*****************************************************!*\
  !*** ./src/services/App/Gallery/gallery.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryService": () => (/* binding */ GalleryService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/services/Enums/DbType */ 261);
/* harmony import */ var src_services_Enums_DbDataType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/Enums/DbDataType */ 4693);
/* harmony import */ var _Database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Database/database.service */ 203);





let GalleryService = class GalleryService {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.photos = [];
        this.asyncConstructor();
    }
    asyncConstructor() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.photos = yield this.getGalleryPhotos(src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.FIREBASE);
        });
    }
    /**
     * Method getting the photoes to show in gallery.
     * @returns
     */
    getGalleryPhotos(dbType) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let photoes = [];
            switch (dbType) {
                case src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.IONIC_STORAGE:
                    photoes = yield this.databaseService.getAllItems(src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.IONIC_STORAGE, src_services_Enums_DbDataType__WEBPACK_IMPORTED_MODULE_1__.DbDataType.GALLERY);
                    break;
                case src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.FIREBASE:
                    photoes = yield this.databaseService.getAllItems(src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.FIREBASE, src_services_Enums_DbDataType__WEBPACK_IMPORTED_MODULE_1__.DbDataType.GALLERY);
                    break;
                default:
                    photoes = yield this.databaseService.getAllItems(src_services_Enums_DbType__WEBPACK_IMPORTED_MODULE_0__.DbType.FIREBASE, src_services_Enums_DbDataType__WEBPACK_IMPORTED_MODULE_1__.DbDataType.GALLERY);
                    break;
            }
            return photoes;
        });
    }
};
GalleryService.ctorParameters = () => [
    { type: _Database_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService }
];
GalleryService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], GalleryService);



/***/ }),

/***/ 3699:
/*!*****************************************************!*\
  !*** ./src/app/menu/gallery/gallery.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#gallery {\n  width: 50%;\n  height: 50%;\n}\n\n.container {\n  width: 100%;\n  height: 70vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ2FsbGVyeSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */");

/***/ }),

/***/ 4196:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/gallery/gallery.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div id=\"gallery\" *ngFor=\"let photo of this.componentService.photos\">\n    <img [src]=\"photo.webviewPath\" />\n    <span>{{photo.filepath}}</span>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_menu_gallery_gallery_module_ts.js.map