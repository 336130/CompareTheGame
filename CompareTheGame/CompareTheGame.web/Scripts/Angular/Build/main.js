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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_game_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/game/game.component */ "./src/app/views/game/game.component.ts");
/* harmony import */ var _views_about_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/about/about-us.component */ "./src/app/views/about/about-us.component.ts");
/* harmony import */ var _views_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/search/search.component */ "./src/app/views/search/search.component.ts");
/* harmony import */ var _services_DataFactory_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/DataFactory.service */ "./src/app/services/DataFactory.service.ts");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "./src/app/components/carousel/carousel.component.ts");













const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    },
    {
        path: 'game',
        component: _views_game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"]
    },
    {
        path: 'about',
        component: _views_about_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"]
    },
    {
        path: 'search',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _views_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _views_game_game_component__WEBPACK_IMPORTED_MODULE_8__["GameComponent"],
            _views_about_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"],
            _views_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
            _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"]
        ],
        providers: [
            _services_DataFactory_service__WEBPACK_IMPORTED_MODULE_11__["DataFactory"],
            _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"]
        ],
        entryComponents: [
            _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
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

/***/ "./src/app/components/carousel/carousel.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<ngb-carousel *ngIf=\"gamesToDisplay && gamesToDisplay.length\" [showNavigationArrows]=\"'true'\" [showNavigationIndicators]=\"'true'\" [interval]=\"100000\">\r\n  <ng-template *ngFor=\"let game of gamesToDisplay\" ngbSlide>\r\n    <div class=\"carousel-gameContainer\" [title]=\"game.gameName\">\r\n      <div class=\"col-12\" style=\"padding: 0 10%\">\r\n        <h2 class=\"text-center carousel-gameTextOverflow\">{{game.gameName}}</h2>\r\n      </div>\r\n      <div class=\"row\" style=\"height:330px; padding: 0 10%\">\r\n        <div class=\"col-4 carousel-imageContainer\">\r\n          <img class=\"carousel-image\" [src]=\"game.coverImageURL\" [alt]=\"game.gameName\">\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <div style=\"width: 100%; overflow:hidden\">\r\n            <p *ngIf=\"game.modes.length\" class=\"carousel-gameInfo\">\r\n              Modes:\r\n              <span *ngFor=\"let mode of game.modes; let last = last\">\r\n                <a routerLink=\"/search\" [queryParams]=\"{mode:mode.modeID}\">\r\n                  {{mode.name}}\r\n                </a><span *ngIf=\"!last\">, </span>\r\n              </span>\r\n            </p>\r\n            <p *ngIf=\"game.perspectives.length\" class=\"carousel-gameInfo\">\r\n              Perspectives:\r\n              <span *ngFor=\"let perspective of game.perspectives; let last = last\">\r\n                <a routerLink=\"/search\" [queryParams]=\"{perspective:perspective.perspectiveID}\">\r\n                  {{perspective.name}}\r\n                </a><span *ngIf=\"!last\">, </span>\r\n              </span>\r\n            </p>\r\n            <p *ngIf=\"game.genres.length\" class=\"carousel-gameInfo\">\r\n              Genres:\r\n              <span *ngFor=\"let genre of game.genres; let last = last\">\r\n                <a routerLink=\"/search\" [queryParams]=\"{genre:genre.genreID}\">\r\n                  {{genre.name}}\r\n                </a><span *ngIf=\"!last\">, </span>\r\n              </span>\r\n            </p>\r\n            <p *ngIf=\"game.themes.length\" class=\"carousel-gameInfo\">\r\n              Themes:\r\n              <span *ngFor=\"let theme of game.themes; let last = last\">\r\n                <a routerLink=\"/search\" [queryParams]=\"{theme:theme.themeID}\">\r\n                  {{theme.name}}\r\n                </a><span *ngIf=\"!last\">, </span>\r\n              </span>\r\n            </p>\r\n            <hr />\r\n          </div>\r\n          <div *ngIf=\"game.summary\" style=\"width: 100%;max-height:100px;overflow:hidden\">\r\n            <p class=\"carousel-gameSummary\">Summmary: {{game.summary}}</p>\r\n            <hr />\r\n          </div>\r\n          <div class=\"carousel-cheapestContainer\">\r\n            <div class=\"carousel-cheapestPlatforms\" *ngIf=\"game.cheapest\">\r\n              <span style=\"padding:15px; font-size:2rem\">\r\n                Cheapest at £{{game.cheapestPrice}}\r\n              </span>\r\n              <span *ngFor=\"let price of game.cheapest; let last = last\" class=\"float-right\">\r\n                <span>\r\n                  <span *ngIf=\"price.platform.abbreviation\" [title]=\"price.platform.name\">| {{price.platform.abbreviation}} |</span>\r\n                </span>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</ngb-carousel>\r\n<div class=\"carousel-seperator\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarouselComponent = class CarouselComponent {
    constructor() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CarouselComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CarouselComponent.prototype, "gamesToDisplay", void 0);
CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'carousel',
        template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/components/carousel/carousel.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CarouselComponent);



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

/***/ "./src/app/components/menu/main-menu.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/menu/main-menu.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light fixed-top navbar-expand-lg bg-light\">\r\n      <a class=\"navbar-brand\" routerLink=\"/\">CompareTheGame</a>\r\n\r\n      <button class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav mr-auto\">\r\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/search\">Advanced Search</a></li>\r\n          <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/about\">About</a></li>\r\n        </ul>\r\n        <form class=\"form-inline\" action=\"/search\" method=\"get\">\r\n          <input class=\"form-control\" type=\"search\" placeholder=\"Search by game name\" />\r\n          <button class=\"btn btn-outline-success\" type=\"submit\">Search</button>\r\n        </form>\r\n      </div>\r\n</nav>\r\n"

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
        return this.http.get(apiUrl + "game/getallgames");
    }
    ;
};
DataFactory = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataFactory);

const apiUrl = "api/";


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

/***/ "./src/app/views/game/game.component.html":
/*!************************************************!*\
  !*** ./src/app/views/game/game.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{title}}</p>\r\n"

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


let GameComponent = class GameComponent {
    constructor() {
        this.title = "Game page";
    }
};
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '',
        template: __webpack_require__(/*! ./game.component.html */ "./src/app/views/game/game.component.html")
    })
], GameComponent);



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"games\">\r\n  <carousel *ngIf=\"games.recentlyReleased.length\"\r\n            title=\"Recently Released\"\r\n            [gamesToDisplay]=\"games.recentlyReleased\"></carousel>\r\n  <hr/>\r\n  <carousel *ngIf=\"games.soonToBeReleased.length\"\r\n            title=\"Soon To Be Released\"\r\n            [gamesToDisplay]=\"games.soonToBeReleased\"></carousel>\r\n</div>\r\n"

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

module.exports = "<p>{{title}}</p>\r\n"

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


let SearchComponent = class SearchComponent {
    constructor() {
        this.title = "Search page";
    }
};
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '',
        template: __webpack_require__(/*! ./search.component.html */ "./src/app/views/search/search.component.html")
    })
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