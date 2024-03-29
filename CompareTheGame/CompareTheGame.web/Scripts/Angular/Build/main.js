(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _services_DataFactory_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/DataFactory.service */ "./src/app/services/DataFactory.service.ts");
/* harmony import */ var _services_DialogFactory_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/DialogFactory.service */ "./src/app/services/DialogFactory.service.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_game_game_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/game/game.component */ "./src/app/views/game/game.component.ts");
/* harmony import */ var _views_about_about_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/about/about-us.component */ "./src/app/views/about/about-us.component.ts");
/* harmony import */ var _views_search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/search/search.component */ "./src/app/views/search/search.component.ts");
/* harmony import */ var _components_carousel_game_carousel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/carousel/game-carousel.component */ "./src/app/components/carousel/game-carousel.component.ts");
/* harmony import */ var _components_game_displays_small_game_display_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/game-displays/small-game-display.component */ "./src/app/components/game-displays/small-game-display.component.ts");
/* harmony import */ var _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/admin/admin.component */ "./src/app/views/admin/admin.component.ts");
/* harmony import */ var _components_modals_edit_vendor_modal_edit_vendor_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/modals/edit-vendor-modal/edit-vendor-modal.component */ "./src/app/components/modals/edit-vendor-modal/edit-vendor-modal.component.ts");
/* harmony import */ var _components_modals_delete_vendor_modal_delete_vendor_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/modals/delete-vendor-modal/delete-vendor-modal.component */ "./src/app/components/modals/delete-vendor-modal/delete-vendor-modal.component.ts");
/* harmony import */ var _components_modals_edit_game_modal_edit_game_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/modals/edit-game-modal/edit-game-modal.component */ "./src/app/components/modals/edit-game-modal/edit-game-modal.component.ts");
/* harmony import */ var _components_game_displays_admin_game_display_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/game-displays/admin-game-display.component */ "./src/app/components/game-displays/admin-game-display.component.ts");
/* harmony import */ var _components_vendors_admin_vendor_display_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/vendors/admin-vendor-display.component */ "./src/app/components/vendors/admin-vendor-display.component.ts");


























class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"] {
    constructor() {
        super(...arguments);
        this.overrides = {
            // override hammerjs default configuration
            'pan': { threshold: 5 },
            'swipe': {
                velocity: 0.4,
                threshold: 20,
                direction: 31 // /!\ ugly hack to allow swipe in all direction
            }
        };
    }
}
const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"]
    },
    {
        path: 'game',
        component: _views_game_game_component__WEBPACK_IMPORTED_MODULE_15__["GameComponent"]
    },
    {
        path: 'about',
        component: _views_about_about_us_component__WEBPACK_IMPORTED_MODULE_16__["AboutUsComponent"]
    },
    {
        path: 'search',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"]
    },
    {
        path: 'admin',
        component: _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _views_about_about_us_component__WEBPACK_IMPORTED_MODULE_16__["AboutUsComponent"],
            _views_admin_admin_component__WEBPACK_IMPORTED_MODULE_20__["AdminComponent"],
            _components_game_displays_admin_game_display_component__WEBPACK_IMPORTED_MODULE_24__["AdminGameDisplayComponent"],
            _components_vendors_admin_vendor_display_component__WEBPACK_IMPORTED_MODULE_25__["AdminVendorDisplayComponent"],
            _components_modals_edit_game_modal_edit_game_modal_component__WEBPACK_IMPORTED_MODULE_23__["EditGameModalComponent"],
            _components_modals_edit_vendor_modal_edit_vendor_modal_component__WEBPACK_IMPORTED_MODULE_21__["EditVendorModalComponent"],
            _components_carousel_game_carousel_component__WEBPACK_IMPORTED_MODULE_18__["GameCarouselComponent"],
            _views_game_game_component__WEBPACK_IMPORTED_MODULE_15__["GameComponent"],
            _views_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _components_game_displays_small_game_display_component__WEBPACK_IMPORTED_MODULE_19__["SmallGameDisplayComponent"],
            _components_modals_delete_vendor_modal_delete_vendor_modal_component__WEBPACK_IMPORTED_MODULE_22__["DeleteVendorModalComponent"],
            _views_search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
        ],
        providers: [
            _services_DataFactory_service__WEBPACK_IMPORTED_MODULE_12__["DataFactory"],
            _services_DialogFactory_service__WEBPACK_IMPORTED_MODULE_13__["DialogFactory"],
            _components_carousel_game_carousel_component__WEBPACK_IMPORTED_MODULE_18__["GameCarouselComponent"],
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"],
                useClass: MyHammerConfig
            },
            _components_modals_edit_vendor_modal_edit_vendor_modal_component__WEBPACK_IMPORTED_MODULE_21__["EditVendorModalComponent"],
            _components_modals_delete_vendor_modal_delete_vendor_modal_component__WEBPACK_IMPORTED_MODULE_22__["DeleteVendorModalComponent"],
            _components_modals_edit_game_modal_edit_game_modal_component__WEBPACK_IMPORTED_MODULE_23__["EditGameModalComponent"]
        ],
        entryComponents: [
            _components_game_displays_admin_game_display_component__WEBPACK_IMPORTED_MODULE_24__["AdminGameDisplayComponent"],
            _components_vendors_admin_vendor_display_component__WEBPACK_IMPORTED_MODULE_25__["AdminVendorDisplayComponent"],
            _components_modals_delete_vendor_modal_delete_vendor_modal_component__WEBPACK_IMPORTED_MODULE_22__["DeleteVendorModalComponent"],
            _components_modals_edit_game_modal_edit_game_modal_component__WEBPACK_IMPORTED_MODULE_23__["EditGameModalComponent"],
            _components_modals_edit_vendor_modal_edit_vendor_modal_component__WEBPACK_IMPORTED_MODULE_21__["EditVendorModalComponent"],
            _components_carousel_game_carousel_component__WEBPACK_IMPORTED_MODULE_18__["GameCarouselComponent"],
            _components_game_displays_small_game_display_component__WEBPACK_IMPORTED_MODULE_19__["SmallGameDisplayComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            ngx_gallery__WEBPACK_IMPORTED_MODULE_10__["NgxGalleryModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'main-app',
        template: `
  <main-menu></main-menu>
    <div class="container body-content">
      <router-outlet></router-outlet>
    </div>
  <custom-footer></custom-footer>
  `
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/main-menu.component */ "./src/app/components/menu/main-menu.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenu"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["Footer"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]
        ],
        providers: [
            _components_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenu"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["Footer"]
        ],
        entryComponents: [
            _components_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_6__["MainMenu"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["Footer"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/carousel/game-carousel.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/carousel/game-carousel.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<ngb-carousel *ngIf=\"gamesToDisplay && gamesToDisplay.length\" [showNavigationArrows]=\"'true'\" [showNavigationIndicators]=\"'true'\" [interval]=\"100000\">\r\n  <ng-template *ngFor=\"let game of gamesToDisplay\" ngbSlide>\r\n    <small-game-display [game]=\"game\"></small-game-display>\r\n  </ng-template>\r\n</ngb-carousel>\r\n<div class=\"carousel-seperator\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/carousel/game-carousel.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/carousel/game-carousel.component.ts ***!
  \****************************************************************/
/*! exports provided: GameCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCarouselComponent", function() { return GameCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameCarouselComponent = class GameCarouselComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GameCarouselComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GameCarouselComponent.prototype, "gamesToDisplay", void 0);
GameCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'game-carousel',
        template: __webpack_require__(/*! ./game-carousel.component.html */ "./src/app/components/carousel/game-carousel.component.html")
    })
], GameCarouselComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<footer>\r\n  <hr />\r\n  <p>&copy;{{date}} - CompareTheGame</p>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Footer = class Footer {
    constructor() {
        this.date = new Date().getFullYear().toString();
    }
};
Footer = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'custom-footer',
        template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html")
    })
], Footer);



/***/ }),

/***/ "./src/app/components/game-displays/admin-game-display.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/game-displays/admin-game-display.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-striped table-dark\">\r\n  <thead>\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Name</th>\r\n      <th>Platforms</th>\r\n      <th>Settings</th>\r\n      <th>Screenshots</th>\r\n      <th>Story</th>\r\n      <th>Summary</th>\r\n      <th>Published</th>\r\n      <th>Edit</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngIf=\"games && games.length && !loading\">\r\n    <tr *ngFor=\"let game of games\">\r\n      <td>{{game.gameID}}</td>\r\n      <td>{{game.gameName}}</td>\r\n      <td>{{game.platforms.length}}</td>\r\n      <td>{{game.settings.length}}</td>\r\n      <td>{{game.screenshots.length}}</td>\r\n      <td><i class=\"fa fa-check\" *ngIf=\"game.storyLine\"></i></td>\r\n      <td><i class=\"fa fa-check\" *ngIf=\"game.summary\"></i></td>\r\n      <td><i class=\"fa fa-check\" *ngIf=\"game.published\"></i></td>\r\n      <td><i class=\"fa fa-edit fa-2x ctg-link\" (click)=\"EditGame(game)\"></i></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<div [hidden]=\"loading <= 0\" class=\"row\">\r\n  <mat-spinner [diameter]=\"150\" [color]=\"'warn'\" style=\"margin-left:42%; margin-top: 50px;\"></mat-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/game-displays/admin-game-display.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/game-displays/admin-game-display.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminGameDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGameDisplayComponent", function() { return AdminGameDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _modals_edit_game_modal_edit_game_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/edit-game-modal/edit-game-modal.component */ "./src/app/components/modals/edit-game-modal/edit-game-modal.component.ts");
/* harmony import */ var src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/DataFactory.service */ "./src/app/services/DataFactory.service.ts");
/* harmony import */ var src_app_services_DialogFactory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/DialogFactory.service */ "./src/app/services/DialogFactory.service.ts");






let AdminGameDisplayComponent = class AdminGameDisplayComponent {
    constructor(dataFactory, dialogFactory, dialog) {
        this.dataFactory = dataFactory;
        this.dialogFactory = dialogFactory;
        this.dialog = dialog;
        this.loading = 0;
    }
    ngOnInit() {
        this.GetGames();
    }
    GetGames() {
        this.loading++;
        this.dataFactory.GetAllGames().subscribe((data) => {
            this.games = data;
        }, (err) => {
            console.log(err);
        }, () => {
            this.loading--;
        });
    }
    EditGame(game) {
        const dialogConfig = this.dialogFactory.GetEditDialogConfig(game);
        this.editGameDialogRef = this.dialog.open(_modals_edit_game_modal_edit_game_modal_component__WEBPACK_IMPORTED_MODULE_3__["EditGameModalComponent"], dialogConfig);
        this.editGameDialogRef.afterClosed().subscribe((data) => {
            if (data) {
                this.GetGames();
            }
        });
    }
};
AdminGameDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'admin-game-display',
        template: __webpack_require__(/*! ./admin-game-display.component.html */ "./src/app/components/game-displays/admin-game-display.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_4__["DataFactory"],
        src_app_services_DialogFactory_service__WEBPACK_IMPORTED_MODULE_5__["DialogFactory"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], AdminGameDisplayComponent);



/***/ }),

/***/ "./src/app/components/game-displays/small-game-display.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/game-displays/small-game-display.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ctg-gameContainer\" [title]=\"game.gameName\">\r\n  <div class=\"col-12\" style=\"padding: 0 10%\">\r\n    <h2 class=\"text-center ctg-gameTextOverflow\">{{game.gameName}}</h2>\r\n  </div>\r\n  <div class=\"row\" style=\"height:330px; padding: 0 10%\">\r\n    <div class=\"col-4 ctg-imageContainer\">\r\n      <img class=\"ctg-image\" [src]=\"game.coverImageURL\" [alt]=\"game.gameName\">\r\n    </div>\r\n    <div class=\"col-8\">\r\n      <div style=\"width: 100%; overflow:hidden\">\r\n        <p *ngIf=\"game.modes.length\" class=\"ctg-gameInfo\">\r\n          Modes:\r\n          <span *ngFor=\"let mode of game.modes; let last = last\">\r\n            <a routerLink=\"/search\" class=\"ctg-siteButton btn\" [title]=\"mode.name\" [queryParams]=\"{mode:mode.modeID}\">\r\n              {{mode.name}}\r\n            </a>\r\n          </span>\r\n        </p>\r\n        <p *ngIf=\"game.genres.length\" class=\"ctg-gameInfo\">\r\n          Genres:\r\n          <span *ngFor=\"let genre of game.genres; let last = last\">\r\n            <a routerLink=\"/search\" class=\"ctg-siteButton btn\" [title]=\"genre.name\" [queryParams]=\"{genre:genre.genreID}\">\r\n              {{genre.name}}\r\n            </a>\r\n          </span>\r\n        </p>\r\n        <p *ngIf=\"game.themes.length\" class=\"ctg-gameInfo\">\r\n          Themes:\r\n          <span *ngFor=\"let theme of game.themes; let last = last\">\r\n            <a routerLink=\"/search\" class=\"ctg-siteButton btn\" [title]=\"theme.name\" [queryParams]=\"{theme:theme.themeID}\">\r\n              {{theme.name}}\r\n            </a>\r\n          </span>\r\n        </p>\r\n        <p *ngIf=\"game.perspectives.length\" class=\"ctg-gameInfo\">\r\n          Perspectives:\r\n          <span *ngFor=\"let perspective of game.perspectives; let last = last\">\r\n            <a routerLink=\"/search\" class=\"ctg-siteButton btn\" [title]=\"perspective.name\" [queryParams]=\"{perspective:perspective.perspectiveID}\">\r\n              {{perspective.name}}\r\n            </a>\r\n          </span>\r\n        </p>\r\n        <hr />\r\n      </div>\r\n      <div *ngIf=\"game.summary\" style=\"width: 100%;max-height:100px;overflow:hidden\">\r\n        <p class=\"ctg-gameSummary\">Summmary: {{game.summary}}</p>\r\n        <hr />\r\n      </div>\r\n      <div style=\"width:100%;height:100px\">\r\n        <div>\r\n          <p *ngIf=\"game.platforms.length\" class=\"ctg-gameTextOverflow\">\r\n            Available on:\r\n            <span *ngFor=\"let platform of game.platforms; let last = last\">\r\n              <a *ngIf=\"platform.abbreviation\" class=\"ctg-siteButton btn\" routerLink=\"/search\" [queryParams]=\"{platform:platform.platformID}\" [title]=\"'Release Date: ' + (platform.releaseDate | date:'dd/MM/yy')\">\r\n                {{platform.name}}\r\n              </a>\r\n            </span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <a class=\"ctg-cheapestContainer ctg-siteButton btn\" routerLink=\"/game\" [queryParams]=\"{game:game.gameID}\" title=\"Click for more information.\">\r\n        <div class=\"ctg-cheapestPlatforms\" *ngIf=\"game.cheapest\">\r\n          <span style=\"font-size:1.5rem;display:block\">\r\n            Cheapest at £{{game.cheapestPrice}}\r\n          </span>\r\n          <span *ngFor=\"let price of game.cheapest; let last = last\" class=\"float-sm-right\">\r\n            <span *ngIf=\"price.platform.abbreviation\" [title]=\"price.platform.name\">| {{price.platform.abbreviation}} |</span>\r\n          </span>\r\n        </div>\r\n        <div class=\"ctg-cheapestPlatforms\" *ngIf=\"!game.cheapest\">\r\n          <span style=\"padding:5px; font-size:1.5rem;\">\r\n            No prices found...\r\n          </span>\r\n          <span class=\"float-right\">\r\n            ...for today atleast\r\n          </span>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/game-displays/small-game-display.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/game-displays/small-game-display.component.ts ***!
  \**************************************************************************/
/*! exports provided: SmallGameDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallGameDisplayComponent", function() { return SmallGameDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_game_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/game.model */ "./src/app/models/game.model.ts");



let SmallGameDisplayComponent = class SmallGameDisplayComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_game_model__WEBPACK_IMPORTED_MODULE_2__["Game"])
], SmallGameDisplayComponent.prototype, "game", void 0);
SmallGameDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'small-game-display',
        template: __webpack_require__(/*! ./small-game-display.component.html */ "./src/app/components/game-displays/small-game-display.component.html")
    })
], SmallGameDisplayComponent);



/***/ }),

/***/ "./src/app/components/menu/main-menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/menu/main-menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light fixed-top navbar-expand-lg bg-light\">\r\n      <a class=\"navbar-brand\" routerLink=\"/\">CompareTheGame</a>\r\n\r\n      <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav mr-auto\">\r\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/search\">Search</a></li>\r\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\r\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/admin\">Admin</a></li>\r\n        </ul>\r\n        <form class=\"form-inline\" action=\"/search\" method=\"get\">\r\n          <input class=\"form-control\" type=\"search\" placeholder=\"Search by game name\" />\r\n          <button class=\"btn btn-outline-dark\" type=\"submit\">Search</button>\r\n        </form>\r\n      </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/menu/main-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/menu/main-menu.component.ts ***!
  \********************************************************/
/*! exports provided: MainMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenu", function() { return MainMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainMenu = class MainMenu {
    constructor() {
    }
};
MainMenu = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'main-menu',
        template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/components/menu/main-menu.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MainMenu);



/***/ }),

/***/ "./src/app/components/modals/delete-vendor-modal/delete-vendor-modal.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/modals/delete-vendor-modal/delete-vendor-modal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ctg-modalContainer\">\r\n  <i class=\"fa fa-remove ctg-modalCloseButton ctg-link\" (click)=\"CloseModal()\"></i>\r\n  <div class=\"row\" style=\"margin-left:0px\">\r\n    <div class=\"col-12\">\r\n      <h4>Delete Vendor: {{vendor.name}}</h4>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <p class=\"text-center\">Confirm you wish to delete the vendor?</p>\r\n    </div>\r\n    <div class=\"col-12\" *ngIf=\"errors && errors.length\">\r\n      <p *ngFor=\"let error of errors\">{{error}}</p>\r\n    </div>\r\n    <div class=\"col-12 ctg-modalButton\">\r\n      <button class=\"btn ctg-siteButton form-control ctg-link\" (click)=\"DeleteVendor()\"><i class=\"fa fa-remove\"></i>Delete</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/modals/delete-vendor-modal/delete-vendor-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/modals/delete-vendor-modal/delete-vendor-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DeleteVendorModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteVendorModalComponent", function() { return DeleteVendorModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataFactory.service */ "./src/app/services/DataFactory.service.ts");




let DeleteVendorModalComponent = class DeleteVendorModalComponent {
    constructor(dataFactory, data, dialogRef) {
        this.dataFactory = dataFactory;
        this.dialogRef = dialogRef;
        this.errors = [];
        this.vendor = data.Data;
        this.dialogRef = dialogRef;
    }
    CloseModal() {
        this.dialogRef.close(false);
    }
    DeleteVendor() {
        this.dataFactory.DeleteVendor(this.vendor).subscribe((data) => {
            this.dialogRef.close(true);
        }, (err) => {
            this.errors = [err.message];
            console.log(err);
        }, () => { });
    }
};
DeleteVendorModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'delete-vendor-modal',
        template: __webpack_require__(/*! ./delete-vendor-modal.component.html */ "./src/app/components/modals/delete-vendor-modal/delete-vendor-modal.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_3__["DataFactory"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], DeleteVendorModalComponent);



/***/ }),

/***/ "./src/app/components/modals/edit-game-modal/edit-game-modal.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/modals/edit-game-modal/edit-game-modal.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ctg-modalContainer\">\r\n  <i class=\"fa fa-remove ctg-modalCloseButton ctg-link\" (click)=\"CloseModal()\"></i>\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <h4>Edit: {{game.name}}</h4>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <h5>Published</h5>\r\n      <input type=\"checkbox\" [(ngModel)]=\"game.published\" [ngModelOptions]=\"{standalone:true}\" />\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <h5>Vendor Settings</h5>\r\n      <div *ngFor=\"let setting of game.settings\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/modals/edit-game-modal/edit-game-modal.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/modals/edit-game-modal/edit-game-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditGameModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGameModalComponent", function() { return EditGameModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataFactory.service */ "./src/app/services/DataFactory.service.ts");




let EditGameModalComponent = class EditGameModalComponent {
    constructor(dataFactory, data, dialogRef) {
        this.dataFactory = dataFactory;
        this.dialogRef = dialogRef;
        this.game = JSON.parse(JSON.stringify(data.Data));
    }
    CloseModal() {
        this.dialogRef.close();
    }
};
EditGameModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-game',
        template: __webpack_require__(/*! ./edit-game-modal.component.html */ "./src/app/components/modals/edit-game-modal/edit-game-modal.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_3__["DataFactory"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], EditGameModalComponent);



/***/ }),

/***/ "./src/app/components/modals/edit-vendor-modal/edit-vendor-modal.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/modals/edit-vendor-modal/edit-vendor-modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ctg-modalContainer\">\r\n  <i class=\"fa fa-remove ctg-modalCloseButton ctg-link\" (click)=\"CloseModal()\"></i>\r\n  <form class=\"row\" style=\"margin-left:0px\" [formGroup]=\"form\">\r\n    <div class=\"col-12\">\r\n      <h4>{{title}}</h4>\r\n    </div>\r\n\r\n    <div class=\"col-4\"><p class=\"text-right\">Name</p></div>\r\n    <div class=\"col-8\">\r\n      <input class=\"form-control\" required formControlName=\"name\" />\r\n    </div>\r\n\r\n\r\n    <div class=\"col-4\"><p class=\"text-right\">Logo URL</p></div>\r\n    <div class=\"col-8\">\r\n      <input class=\"form-control\" formControlName=\"logoURL\" />\r\n    </div>\r\n\r\n\r\n    <div class=\"col-4\"><p class=\"text-right\">Logo Preview</p></div>\r\n    <div class=\"col-8\">\r\n      <img style=\"max-width:100%; max-height:400px;\" [src]=\"form.controls['logoURL'].value\" />\r\n    </div>\r\n\r\n\r\n    <div class=\"col-4\"><p class=\"text-right\">Font</p></div>\r\n    <div class=\"col-8\">\r\n      <input class=\"form-control\" formControlName=\"font\" />\r\n    </div>\r\n\r\n\r\n    <div class=\"col-4\"><p class=\"text-right\">Home Page URL</p></div>\r\n    <div class=\"col-8\">\r\n      <input class=\"form-control\" required formControlName=\"url\" />\r\n    </div>\r\n\r\n\r\n    <div class=\"col-4\"><p class=\"text-right\">Element Type</p></div>\r\n    <div class=\"col-8\">\r\n      <select class=\"form-control\" formControlName=\"elementType\">\r\n        <option value=\"\" selected></option>\r\n        <option value=\"ID\">ID</option>\r\n        <option value=\"CLASS\">CLASS</option>\r\n      </select>\r\n    </div>\r\n\r\n\r\n    <div class=\"col-4\"><p class=\"text-right\">Element Value</p></div>\r\n    <div class=\"col-8\">\r\n      <input class=\"form-control\" formControlName=\"elementValue\" />\r\n    </div>\r\n\r\n    <div class=\"col-12 bk-dark\" *ngIf=\"errors && errors.length\">\r\n      <p class=\"text-light\" *ngFor=\"let error of errors\">{{error}}</p>\r\n    </div>\r\n\r\n\r\n    <div [hidden]=\"loading <= 0\" class=\"col-12\">\r\n      <mat-spinner [diameter]=\"75\" [color]=\"'warn'\" style=\"margin-left:42%; margin-top: 50px;\"></mat-spinner>\r\n    </div>\r\n\r\n    <div class=\"col-12 ctg-modalButton\">\r\n      <button class=\"btn ctg-siteButton form-control ctg-link\" (click)=\"AddOrUpdateVendor()\">\r\n        <span *ngIf=\"isNew\">\r\n          <i class=\"fa fa-plus\"></i> Add\r\n        </span>\r\n        <span *ngIf=\"!isNew\">\r\n          <i class=\"fa fa-save\"></i> Save\r\n        </span>\r\n      </button>\r\n\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/modals/edit-vendor-modal/edit-vendor-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/modals/edit-vendor-modal/edit-vendor-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditVendorModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditVendorModalComponent", function() { return EditVendorModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_models_vendor_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/vendor.model */ "./src/app/models/vendor.model.ts");
/* harmony import */ var src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/DataFactory.service */ "./src/app/services/DataFactory.service.ts");






let EditVendorModalComponent = class EditVendorModalComponent {
    constructor(dialogRef, data, dataFactory) {
        this.dialogRef = dialogRef;
        this.dataFactory = dataFactory;
        this.title = "";
        this.loading = 0;
        if (data != null && data.Data != null) {
            this.title = "Edit Vendor: " + data.Data.name;
            //make a clean copy of passed in vendor
            this.vendor = JSON.parse(JSON.stringify(data.Data));
            this.isNew = false;
        }
        else {
            this.title = "New Vendor";
            this.vendor = new src_app_models_vendor_model__WEBPACK_IMPORTED_MODULE_4__["Vendor"]();
            this.isNew = true;
        }
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.vendor.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.vendor.url, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            font: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.vendor.font),
            logoURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.vendor.logoURL),
            elementType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.vendor.elementType),
            elementValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.vendor.elementValue)
        });
    }
    CloseModal() {
        this.dialogRef.close(false);
    }
    IsValid() {
        //if untouched return immediately.
        if (this.form.pristine)
            return false;
        let errors = [];
        let vendor = this.form.value;
        let valid = true;
        if (this.vendor) {
            if (!this.isNew) {
                let editFound = false;
                if (vendor.name != this.vendor.name &&
                    vendor.font != this.vendor.font &&
                    vendor.logoURL != this.vendor.logoURL &&
                    vendor.url != this.vendor.url &&
                    vendor.elementType != this.vendor.elementType &&
                    vendor.elementValue != this.vendor.elementValue) {
                    editFound = true;
                }
                valid = editFound;
                errors.push("No changes found.");
            }
            if (!vendor.name) {
                valid = false;
                errors.push('Vendor must have a name.');
            }
            if (!vendor.logoURL && !vendor.font) {
                valid = false;
                errors.push('You must provide either a logoURL or a font in which to display the vendor\'s name.');
            }
            if (vendor.logoURL && (!vendor.logoURL.match(/http/) && !vendor.logoURL.match(/www/))) {
                valid = false;
                errors.push('Logo URL should start with "http://" or "www.".');
            }
            if (!vendor.url) {
                valid = false;
                errors.push('You must provide a vendor home page URL.');
            }
            if (vendor.url && (!vendor.url.match(/http/) && !vendor.logoURL.match(/www/))) {
                valid = false;
                errors.push('Home Page URL should start with "http://" or "www.".');
            }
        }
        else {
            valid = false;
        }
        this.errors = errors;
        return valid;
    }
    AddOrUpdateVendor() {
        if (this.IsValid()) {
            this.loading++;
            let vendor = this.form.value;
            //pass up original values
            vendor.createdBy = this.vendor.createdBy;
            vendor.createdDate = this.vendor.createdDate;
            vendor.vendorID = this.vendor.vendorID;
            this.dataFactory.EditVendor(vendor).subscribe((data) => {
                if (data) {
                    this.dialogRef.close(true);
                }
                else {
                    this.errors = ["Error saving vendor."];
                }
            }, (err) => {
                this.errors = [err.message];
                console.log(err);
            }, () => {
                this.loading--;
            });
        }
    }
};
EditVendorModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'edit-vendor-modal',
        template: __webpack_require__(/*! ./edit-vendor-modal.component.html */ "./src/app/components/modals/edit-vendor-modal/edit-vendor-modal.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_5__["DataFactory"]])
], EditVendorModalComponent);



/***/ }),

/***/ "./src/app/components/vendors/admin-vendor-display.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/vendors/admin-vendor-display.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-6\">\r\n    <input class=\"form-control\" [(ngModel)]=\"filterTerm\" [ngModelOptions]=\"{standalone:true}\" placeholder=\"Filter by name\" (change)=\"ApplyFilters()\"/>\r\n  </div>\r\n  <div class=\"col-3\">\r\n    <select class=\"form-control\" [(ngModel)]=\"filterType\" [ngModelOptions]=\"{standalone:true}\" (change)=\"ApplyFilters()\">\r\n      <option value=\"\" selected>-- Filter by Element --</option>\r\n      <option value=\"CLASS\">CLASS</option>\r\n      <option value=\"ID\">ID</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"col-3\">\r\n    <button class=\" btn ctg-siteButton float-right\" (click)=\"AddNewVendor()\"><i class=\"fa fa-plus\"></i> Add a new Vendor</button>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-bordered table-striped table-dark\">\r\n  <thead>\r\n    <tr>\r\n      <th>ID</th>\r\n      <th>Name</th>\r\n      <th>Logo</th>\r\n      <th>Font</th>\r\n      <th>Game Scrap Configs</th>\r\n      <th>Element Type</th>\r\n      <th>Element Value</th>\r\n      <th>Edit</th>\r\n      <th>Delete</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody *ngIf=\"vendorsToDisplay && vendorsToDisplay.length && !loading\">\r\n    <tr *ngFor=\"let vendor of vendorsToDisplay\">\r\n      <td>{{vendor.vendorID}}</td>\r\n      <td>{{vendor.name}}</td>\r\n      <td>\r\n        <img *ngIf=\"vendor.logoURL\" style=\"max-width: 100%; max-height:50px;\" [src]=\"vendor.logoURL\" [alt]=\"vendor.name.toUpperCase()\" />\r\n        <b *ngIf=\"!vendor.logoURL\" [ngStyle]=\"{'font-family':vendor.font}\">{{vendor.name.toUpperCase()}}</b>\r\n      </td>\r\n      <td><p *ngIf=\"!vendor.logoURL\">{{vendor.font}}</p></td>\r\n      <td>{{vendor.settings.length}}</td>\r\n      <td>{{vendor.elementType}}</td>\r\n      <td>{{vendor.elementValue}}</td>\r\n      <td><i (click)=\"EditVendor(vendor)\" class=\"fa fa-edit fa-2x ctg-link\"></i></td>\r\n      <td><i (click)=\"DeleteVendor(vendor)\" class=\"fa fa-remove fa-2x ctg-link\"></i></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n<div [hidden]=\"loading <= 0\">\r\n  <mat-spinner [diameter]=\"150\" [color]=\"'warn'\" style=\"margin-left:42%; margin-top: 50px;\"></mat-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/vendors/admin-vendor-display.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/vendors/admin-vendor-display.component.ts ***!
  \**********************************************************************/
/*! exports provided: AdminVendorDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminVendorDisplayComponent", function() { return AdminVendorDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataFactory.service */ "./src/app/services/DataFactory.service.ts");
/* harmony import */ var src_app_services_DialogFactory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/DialogFactory.service */ "./src/app/services/DialogFactory.service.ts");
/* harmony import */ var _modals_edit_vendor_modal_edit_vendor_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/edit-vendor-modal/edit-vendor-modal.component */ "./src/app/components/modals/edit-vendor-modal/edit-vendor-modal.component.ts");
/* harmony import */ var _modals_delete_vendor_modal_delete_vendor_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/delete-vendor-modal/delete-vendor-modal.component */ "./src/app/components/modals/delete-vendor-modal/delete-vendor-modal.component.ts");







let AdminVendorDisplayComponent = class AdminVendorDisplayComponent {
    constructor(dataFactory, dialogFactory, dialog) {
        this.dataFactory = dataFactory;
        this.dialogFactory = dialogFactory;
        this.dialog = dialog;
        this.loading = 0;
        this.filterTerm = "";
        this.filterType = "";
        this.AddNewVendor = () => {
            const dialogConfig = this.dialogFactory.GetEditDialogConfig();
            this.editVendorDialogRef = this.dialog.open(_modals_edit_vendor_modal_edit_vendor_modal_component__WEBPACK_IMPORTED_MODULE_5__["EditVendorModalComponent"], dialogConfig);
            this.editVendorDialogRef.afterClosed().subscribe((data) => {
                if (data) {
                    this.GetVendors();
                }
            });
        };
    }
    ngOnInit() {
        this.GetVendors();
    }
    GetVendors() {
        this.loading++;
        this.dataFactory.GetVendors().subscribe((data) => {
            this.vendors = data;
            this.ApplyFilters();
        }, (err) => {
            console.log(err);
        }, () => {
            this.loading--;
        });
    }
    EditVendor(vendor) {
        const dialogConfig = this.dialogFactory.GetEditDialogConfig(vendor);
        this.editVendorDialogRef = this.dialog.open(_modals_edit_vendor_modal_edit_vendor_modal_component__WEBPACK_IMPORTED_MODULE_5__["EditVendorModalComponent"], dialogConfig);
        this.editVendorDialogRef.afterClosed().subscribe((data) => {
            if (data) {
                this.GetVendors();
            }
        });
    }
    DeleteVendor(vendor) {
        const dialogConfig = this.dialogFactory.GetDeleteDialogConfig(vendor);
        this.deleteVendorDialogRef = this.dialog.open(_modals_delete_vendor_modal_delete_vendor_modal_component__WEBPACK_IMPORTED_MODULE_6__["DeleteVendorModalComponent"], dialogConfig);
        this.deleteVendorDialogRef.afterClosed().subscribe((data) => {
            if (data) {
                this.GetVendors();
            }
        });
    }
    ApplyFilters() {
        if (this.vendors && this.vendors.length) {
            let temp = this.vendors;
            if (this.filterTerm) {
                temp = temp.filter(vendor => {
                    return vendor.name.toString().includes(this.filterTerm) ||
                        vendor.vendorID.toString().includes(this.filterTerm) ||
                        (vendor.font && vendor.font.toString().includes(this.filterTerm)) ||
                        (vendor.logoURL && vendor.logoURL.toString().includes(this.filterTerm)) ||
                        (vendor.createdBy && vendor.createdBy.toString().includes(this.filterTerm)) ||
                        (vendor.modifiedBy && vendor.modifiedBy.toString().includes(this.filterTerm)) ||
                        (vendor.elementValue && vendor.elementValue.toString().includes(this.filterTerm)) ||
                        (vendor.url && vendor.url.toString().includes(this.filterTerm));
                });
            }
            if (this.filterType) {
                temp = temp.filter(vendor => {
                    return vendor.elementType == this.filterType;
                });
            }
            this.vendorsToDisplay = temp;
        }
    }
};
AdminVendorDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'admin-vendor-display',
        template: __webpack_require__(/*! ./admin-vendor-display.component.html */ "./src/app/components/vendors/admin-vendor-display.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_3__["DataFactory"],
        src_app_services_DialogFactory_service__WEBPACK_IMPORTED_MODULE_4__["DialogFactory"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], AdminVendorDisplayComponent);



/***/ }),

/***/ "./src/app/models/game.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/game.model.ts ***!
  \**************************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
class Game {
    ;
}


/***/ }),

/***/ "./src/app/models/vendor.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/vendor.model.ts ***!
  \****************************************/
/*! exports provided: Vendor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vendor", function() { return Vendor; });
class Vendor {
}


/***/ }),

/***/ "./src/app/services/DataFactory.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/DataFactory.service.ts ***!
  \*************************************************/
/*! exports provided: DataFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFactory", function() { return DataFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataFactory = class DataFactory {
    constructor(http) {
        this.http = http;
    }
    GetHomePageData() {
        return this.http.get(apiUrl + "game/getHomepageData");
    }
    ;
    GetSearchOptions() {
        return this.http.get(apiUrl + "game/getsearchoptions");
    }
    FetchGame(gameID) {
        return this.http.get(apiUrl + "game/getgame", { params: { gameID: gameID } });
    }
    SearchForGame(gameName) {
        return this.http.get(apiUrl + "game/searchforgame", { params: { gameName: gameName } });
        ;
    }
    //ADMIN PAGE
    GetVendors() {
        return this.http.get(apiUrl + "admin/getvendors");
        ;
    }
    GetAllGames() {
        return this.http.get(apiUrl + "admin/getallgames");
    }
    EditVendor(vendor) {
        return this.http.post(apiUrl + "admin/savevendor", vendor);
    }
    DeleteVendor(vendor) {
        return this.http.post(apiUrl + "admin/deletevendor", vendor);
    }
};
DataFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataFactory);

const apiUrl = "api/";


/***/ }),

/***/ "./src/app/services/DialogFactory.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/DialogFactory.service.ts ***!
  \***************************************************/
/*! exports provided: DialogFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogFactory", function() { return DialogFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DialogFactory = class DialogFactory {
    GetEditDialogConfig(data = null) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.width = '900px';
        dialogConfig.height = '600px';
        dialogConfig.position = { top: '100px' };
        dialogConfig.data = { Data: data };
        return dialogConfig;
    }
    GetDeleteDialogConfig(data) {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.width = '500px';
        dialogConfig.height = '400px';
        dialogConfig.position = { top: '100px' };
        dialogConfig.data = { Data: data };
        return dialogConfig;
    }
};
DialogFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DialogFactory);



/***/ }),

/***/ "./src/app/views/about/about-us.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/about/about-us.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{title}}</p>\r\n"

/***/ }),

/***/ "./src/app/views/about/about-us.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/about/about-us.component.ts ***!
  \***************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutUsComponent = class AboutUsComponent {
    constructor() {
        this.title = "About Us";
    }
};
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '',
        template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/views/about/about-us.component.html")
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/views/admin/admin.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/admin/admin.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Admin</h1>\r\n<div class=\"ctg-container\">\r\n  <ngb-tabset>\r\n    <ngb-tab title=\"Vendors\">\r\n      <ng-template ngbTabContent>\r\n        <admin-vendor-display></admin-vendor-display>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Games\">\r\n      <ng-template ngbTabContent>\r\n        <admin-game-display></admin-game-display>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'admin',
        template: __webpack_require__(/*! ./admin.component.html */ "./src/app/views/admin/admin.component.html")
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/views/game/game.component.html":
/*!************************************************!*\
  !*** ./src/app/views/game/game.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"game && !loading\">\r\n  <h1>{{game.gameName}}</h1>\r\n  <div class=\"ctg-container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-4\">\r\n        <img style=\"width:100%; height: auto\" [src]=\"game.coverImageURL\" />\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <p *ngIf=\"game.modes.length\">\r\n          <b>Modes:</b>\r\n          <span *ngFor=\"let mode of game.modes; let last = last\">\r\n            <a routerLink=\"/search\" class=\"ctg-siteButton btn\" [queryParams]=\"{mode:mode.modeID}\">\r\n              {{mode.name}}\r\n            </a>\r\n          </span>\r\n        </p>\r\n        <p *ngIf=\"game.genres.length\">\r\n          <b>Genres:</b>\r\n          <span *ngFor=\"let genre of game.genres; let last = last\">\r\n            <a routerLink=\"/search\" class=\"ctg-siteButton btn\" [queryParams]=\"{genre:genre.genreID}\">\r\n              {{genre.name}}\r\n            </a>\r\n          </span>\r\n        </p>\r\n        <p *ngIf=\"game.themes.length\">\r\n          <b>Themes:</b>\r\n          <span *ngFor=\"let theme of game.themes; let last = last\">\r\n            <a routerLink=\"/search\" class=\"ctg-siteButton btn\" [queryParams]=\"{theme:theme.themeID}\">\r\n              {{theme.name}}\r\n            </a>\r\n          </span>\r\n        </p>\r\n        <p *ngIf=\"game.perspectives.length\">\r\n          <b>Perspectives:</b>\r\n          <span *ngFor=\"let perspective of game.perspectives; let last = last\">\r\n            <a routerLink=\"/search\" class=\"ctg-siteButton btn\" [queryParams]=\"{perspective:perspective.perspectiveID}\">\r\n              {{perspective.name}}\r\n            </a>\r\n          </span>\r\n        </p>\r\n        <p *ngIf=\"game.platforms.length\">\r\n          <b>Available on:</b>\r\n          <span *ngFor=\"let platform of game.platforms; let last = last\">\r\n            <a *ngIf=\"platform.abbreviation\" class=\"ctg-siteButton btn\" routerLink=\"/search\" [queryParams]=\"{platform:platform.platformID}\" [title]=\"'Release Date: ' + (platform.releaseDate | date:'dd/MM/yy')\">\r\n              {{platform.name}}\r\n            </a>\r\n          </span>\r\n        </p>\r\n      </div>\r\n\r\n      <div class=\"col-12\">\r\n        <ngb-tabset>\r\n          <ngb-tab title=\"Game Information\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"col-12 position-relative\" *ngIf=\"game.summary\">\r\n                <h5>Summary</h5>\r\n                <p class=\"ctg-gameText\" [ngClass]=\"{'ctg-gameTextCollapsed':summaryCollapsed}\">\r\n                  {{game.summary}}\r\n                </p>\r\n                <button (click)=\"summaryCollapsed = !summaryCollapsed\" class=\"ctg-siteButton float-right btn\">\r\n                  <span *ngIf=\"summaryCollapsed\">More</span>\r\n                  <span *ngIf=\"!summaryCollapsed\">Less</span>\r\n                </button>\r\n                <hr />\r\n              </div>\r\n              <div class=\"col-12 position-relative\" *ngIf=\"game.storyLine\">\r\n                <h5>Story</h5>\r\n                <p class=\"ctg-gameText\" [ngClass]=\"{'ctg-gameTextCollapsed':storyLineCollapsed}\">\r\n                  {{game.storyLine}}\r\n                </p>\r\n                <button (click)=\"storyLineCollapsed = !storyLineCollapsed\" class=\"ctg-siteButton float-right btn\">\r\n                  <span *ngIf=\"storyLineCollapsed\">More</span>\r\n                  <span *ngIf=\"!storyLineCollapsed\">Less</span>\r\n                </button>\r\n                <hr />\r\n              </div>\r\n              <div class=\"col-12\" *ngIf=\"galleryImages && galleryImages.length\">\r\n                <h5>Screenshots</h5>\r\n                <div class=\"col-sm-2\"></div>\r\n                <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n                <div class=\"col-sm-2\"></div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Today's Prices\">\r\n            <ng-template ngbTabContent>\r\n              <hr />\r\n              <ngb-tabset *ngIf=\"todaysPrices && todaysPrices.length\">\r\n                <ngb-tab *ngFor=\"let consoleArray of todaysPrices\" [title]=\"consoleArray[0].platform.name\">\r\n                  <ng-template ngbTabContent>\r\n                    <div class=\"col-12 ctg-priceContainer\" *ngFor=\"let price of consoleArray\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col-4\">\r\n                          <a target=\"_blank\" class=\"ctg-link\" [href]=\"price.vendor.homepageURL\">\r\n                            <img *ngIf=\"price.vendor.logoURL\" style=\"max-width: 100%; max-height:50px;\" [src]=\"price.vendor.logoURL\" [alt]=\"price.vendor.name.toUpperCase()\" />\r\n                            <b *ngIf=\"!price.vendor.logoURL\" [ngStyle]=\"{'font-family':price.vendor.font}\">{{price.vendor.name.toUpperCase()}}</b>\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                          Currently sold for £{{price.price}}\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                          <a target=\"_blank\" style=\"margin: 10px 20px\" class=\"btn ctg-siteButton\" [href]=\"price.pageURL\">Go to site</a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </ng-template>\r\n                </ngb-tab>\r\n              </ngb-tabset>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"How's the week gone\">\r\n            <ng-template ngbTabContent>\r\n              Third tab\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/game/game.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/game/game.component.ts ***!
  \**********************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataFactory.service */ "./src/app/services/DataFactory.service.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);





let GameComponent = class GameComponent {
    constructor(route, dataFactory) {
        this.route = route;
        this.dataFactory = dataFactory;
        this.loading = false;
        this.summaryCollapsed = true;
        this.storyLineCollapsed = true;
        this.galleryOptions = [
            {
                width: '100%',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryAnimation"].Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '400px',
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
    }
    ngOnInit() {
        this.loading = true;
        this.route.queryParamMap.subscribe(params => {
            this.dataFactory.FetchGame(params.get("game")).subscribe((data) => {
                this.game = data;
                this.FormatPageData();
            }, (err) => {
                console.log(err);
            }, () => {
                this.loading = false;
            });
        });
    }
    FormatPageData() {
        if (this.game) {
            this.galleryImages = [];
            this.game.screenshots.forEach(screenshot => {
                this.galleryImages.push({
                    small: screenshot.url,
                    medium: screenshot.url,
                    big: screenshot.url
                });
            });
            if (this.game.todaysPrices && this.game.todaysPrices.length) {
                this.todaysPrices = this.FormatPriceHistoryToConsoles(this.game.todaysPrices);
            }
        }
    }
    FormatPriceHistoryToConsoles(prices) {
        var grouped = {}, retVal = [];
        prices.forEach(price => {
            (grouped[price.platform.name] = grouped[price.platform.name] || []).push(price);
        });
        for (var key in grouped) {
            retVal.push(grouped[key]);
        }
        return retVal;
        ;
    }
};
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '',
        template: __webpack_require__(/*! ./game.component.html */ "./src/app/views/game/game.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_3__["DataFactory"]])
], GameComponent);



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"games\">\r\n  <game-carousel *ngIf=\"games.recentlyReleased.length\"\r\n            title=\"Recently Released\"\r\n            [gamesToDisplay]=\"games.recentlyReleased\"></game-carousel>\r\n  <hr/>\r\n  <game-carousel *ngIf=\"games.soonToBeReleased.length\"\r\n            title=\"Soon To Be Released\"\r\n            [gamesToDisplay]=\"games.soonToBeReleased\"></game-carousel>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DataFactory.service */ "./src/app/services/DataFactory.service.ts");



let HomeComponent = class HomeComponent {
    constructor(dataFactory) {
        this.dataFactory = dataFactory;
        this.title = "";
    }
    ;
    ngOnInit() {
        this.dataFactory.GetHomePageData().subscribe((data) => {
            this.games = data;
        }, (err) => {
            console.log(err);
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_2__["DataFactory"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/views/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Search</h1>\r\n<div class=\"ctg-container\">\r\n  <form>\r\n    <div class=\"row\">\r\n      <div class=\"col-8\">\r\n        <input class=\"form-control\" [(ngModel)]=\"gameName\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Search by game name\" />\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <button (click)=\"SearchForGame()\" class=\"btn btn-outline-dark form-control bg-light\">Search</button>\r\n      </div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"row\">\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"showFilters\" [@slideInOut]>\r\n      <div class=\"col-md-2\">\r\n        <p class=\"text-right\">Genre:</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <select [(ngModel)]=\"selectedGenre\" name=\"genres\" class=\"form-control\">\r\n          <option value=0 selected>-- All Genres --</option>\r\n          <option *ngFor=\"let genre of genres\" value=\"{{genre.genreID}}\">{{genre.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <p class=\"text-right\">Themes:</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <select [(ngModel)]=\"selectedTheme\" name=\"themes\" class=\"form-control\">\r\n          <option value=0 selected>-- All Themes --</option>\r\n          <option *ngFor=\"let theme of themes\" value=\"{{theme.themeID}}\">{{theme.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <p class=\"text-right\">Perspectives:</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <select [(ngModel)]=\"selectedPerspective\" name=\"perspectives\" class=\"form-control\">\r\n          <option value=0 selected>-- All Perspectives --</option>\r\n          <option *ngFor=\"let perspective of perspectives\" value=\"{{perspective.perspectiveID}}\">{{perspective.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <p class=\"text-right\">Mode:</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <select [(ngModel)]=\"selectedMode\" name=\"modes\" class=\"form-control\">\r\n          <option value=0 selected>-- All Modes --</option>\r\n          <option *ngFor=\"let mode of modes\" value=\"{{mode.modeID}}\">{{mode.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <p class=\"text-right\">Platform:</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <select [(ngModel)]=\"selectedPlatform\" name=\"platforms\" class=\"form-control\">\r\n          <option value=0 selected>-- All Platforms --</option>\r\n          <option *ngFor=\"let platform of platforms\" value=\"{{platform.platformID}}\">{{platform.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <button class=\"btn btn-outline-dark bg-light form-control\" (click)=\"ApplyFilters()\">Apply</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-12 text-center link\" (click)=\"showFilters = !showFilters\" >\r\n        <hr *ngIf=\"showFilters\"/>\r\n        <i [ngClass]=\"{'fa-chevron-down':!showFilters,'fa-chevron-up':showFilters}\" class=\"fa fa-chevron-down\"></i>\r\n        <i [ngClass]=\"{'fa-chevron-down':!showFilters,'fa-chevron-up':showFilters}\" class=\"fa fa-chevron-down\"></i>\r\n        <i [ngClass]=\"{'fa-chevron-down':!showFilters,'fa-chevron-up':showFilters}\" class=\"fa fa-chevron-down\"></i>\r\n        Show Filters\r\n        <i [ngClass]=\"{'fa-chevron-down':!showFilters,'fa-chevron-up':showFilters}\" class=\"fa fa-chevron-down\"></i>\r\n        <i [ngClass]=\"{'fa-chevron-down':!showFilters,'fa-chevron-up':showFilters}\" class=\"fa fa-chevron-down\"></i>\r\n        <i [ngClass]=\"{'fa-chevron-down':!showFilters,'fa-chevron-up':showFilters}\" class=\"fa fa-chevron-down\"></i>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <hr />\r\n  <p>Showing: {{gamesToDisplay.length}}/{{searchResults.length}}</p>\r\n  <div *ngIf=\"searchResults && searchResults.length && !loading\">\r\n    <hr />\r\n    <div *ngFor=\"let game of gamesToDisplay\">\r\n      <small-game-display [game]=\"game\"></small-game-display>\r\n      <hr />\r\n    </div>\r\n  </div>\r\n  <div [hidden]=\"loading <= 0\">\r\n    <mat-spinner [diameter]=\"150\" [color]=\"'warn'\" style=\"margin-left:42%; margin-top: 50px;\"></mat-spinner>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DataFactory.service */ "./src/app/services/DataFactory.service.ts");




let SearchComponent = class SearchComponent {
    constructor(dataFactory) {
        this.dataFactory = dataFactory;
        this.loading = 0;
        this.showFilters = false;
        // user input
        this.gameName = "";
        this.selectedGenre = "0";
        this.selectedTheme = "0";
        this.selectedPerspective = "0";
        this.selectedMode = "0";
        this.selectedPlatform = "0";
        this.searchResults = [];
        this.gamesToDisplay = [];
    }
    ngOnInit() {
        this.loading++;
        this.dataFactory.GetSearchOptions().subscribe((data) => {
            this.genres = data.genres;
            this.themes = data.themes;
            this.perspectives = data.perspectives;
            this.modes = data.modes;
            this.platforms = data.platforms;
        }, (err) => {
            console.log(err);
        }, () => {
            this.loading--;
        });
    }
    SearchForGame() {
        this.loading++;
        this.dataFactory.SearchForGame(this.gameName).subscribe((data) => {
            this.searchResults = data;
            this.ApplyFilters();
        }, (err) => {
            console.log(err);
        }, () => {
            this.loading--;
        });
    }
    ApplyFilters() {
        this.loading++;
        let temp = this.searchResults;
        if (this.searchResults && this.searchResults.length) {
            temp = parseInt(this.selectedTheme) ? temp.filter(g => g.themes.map(t => t.themeID).includes(parseInt(this.selectedTheme))) : temp;
            temp = parseInt(this.selectedPlatform) ? temp.filter(g => g.platforms.map(t => t.platformID).includes(parseInt(this.selectedPlatform))) : temp;
            temp = parseInt(this.selectedPerspective) ? temp.filter(g => g.perspectives.map(p => p.perspectiveID).includes(parseInt(this.selectedPerspective))) : temp;
            temp = parseInt(this.selectedMode) ? temp.filter(g => g.modes.map(m => m.modeID).includes(parseInt(this.selectedMode))) : temp;
            temp = parseInt(this.selectedGenre) ? temp.filter(g => g.genres.map(g => g.genreID).includes(parseInt(this.selectedGenre))) : temp;
        }
        this.gamesToDisplay = temp;
        this.loading--;
    }
};
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '',
        template: __webpack_require__(/*! ./search.component.html */ "./src/app/views/search/search.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0%)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)' }))
                ])
            ])
        ]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_DataFactory_service__WEBPACK_IMPORTED_MODULE_3__["DataFactory"]])
], SearchComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\Github\CompareTheGame\CompareTheGame\CompareTheGame.web\Scripts\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map