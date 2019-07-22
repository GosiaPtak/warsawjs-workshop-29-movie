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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_movie_list_page_components_movie_list_page_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/movie-list-page/components/movie-list-page/movie-list-page.component */ "./src/app/pages/movie-list-page/components/movie-list-page/movie-list-page.component.ts");
/* harmony import */ var src_app_pages_search_page_components_search_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/search-page/components/search-page.component */ "./src/app/pages/search-page/components/search-page.component.ts");
/* harmony import */ var src_app_pages_contact_page_components_contact_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/contact-page/components/contact-page.component */ "./src/app/pages/contact-page/components/contact-page.component.ts");
/* harmony import */ var _pages_movie_list_page_components_movie_details_page_components_movie_details_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/movie-list-page/components/movie-details-page/components/movie-details-page.component */ "./src/app/pages/movie-list-page/components/movie-details-page/components/movie-details-page.component.ts");







var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'movie'
    },
    {
        path: 'search',
        component: src_app_pages_search_page_components_search_page_component__WEBPACK_IMPORTED_MODULE_4__["SearchPageComponent"]
    },
    {
        path: 'movie/:id',
        component: _pages_movie_list_page_components_movie_details_page_components_movie_details_page_component__WEBPACK_IMPORTED_MODULE_6__["MovieDetailsPageComponent"]
    },
    {
        path: 'movie',
        component: _pages_movie_list_page_components_movie_list_page_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__["MovieListPageComponent"]
    },
    {
        path: 'contact',
        component: src_app_pages_contact_page_components_contact_page_component__WEBPACK_IMPORTED_MODULE_5__["ContactPageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>Welcome to {{ title }}!</h1>\n</div>\n<ul>\n  <li>\n    <a routerLink=\"movie\">\n      Movie list\n    </a>\n  </li>\n  <li>\n    <a routerLink=\"search\">Search</a>\n  </li>\n  <li>\n    <a routerLink=\"contact\">Contact</a>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movies';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pages_movie_list_page_movie_list_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/movie-list-page/movie-list-page.module */ "./src/app/pages/movie-list-page/movie-list-page.module.ts");
/* harmony import */ var _pages_search_page_search_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/search-page/search-page.module */ "./src/app/pages/search-page/search-page.module.ts");
/* harmony import */ var _pages_contact_page_contact_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact-page/contact-page.module */ "./src/app/pages/contact-page/contact-page.module.ts");
/* harmony import */ var src_app_pages_movie_list_page_components_movie_details_page_movie_details_page_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pages/movie-list-page/components/movie-details-page/movie-details-page.module */ "./src/app/pages/movie-list-page/components/movie-details-page/movie-details-page.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _pages_movie_list_page_movie_list_page_module__WEBPACK_IMPORTED_MODULE_6__["MovieListPageModule"],
                _pages_search_page_search_page_module__WEBPACK_IMPORTED_MODULE_7__["SearchPageModule"],
                _pages_contact_page_contact_page_module__WEBPACK_IMPORTED_MODULE_8__["ContactPageModule"],
                src_app_pages_movie_list_page_components_movie_details_page_movie_details_page_module__WEBPACK_IMPORTED_MODULE_9__["MovieDetailsPageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/contact-page/components/contact-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/contact-page/components/contact-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/contact-page/components/contact-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/contact-page/components/contact-page.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtcGFnZS9jb21wb25lbnRzL2NvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/contact-page/components/contact-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/contact-page/components/contact-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContactPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageComponent", function() { return ContactPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-page',
            template: __webpack_require__(/*! ./contact-page.component.html */ "./src/app/pages/contact-page/components/contact-page.component.html"),
            styles: [__webpack_require__(/*! ./contact-page.component.scss */ "./src/app/pages/contact-page/components/contact-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-page/contact-page.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_contact_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact-page.component */ "./src/app/pages/contact-page/components/contact-page.component.ts");




var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_contact_page_component__WEBPACK_IMPORTED_MODULE_3__["ContactPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ }),

/***/ "./src/app/pages/movie-list-page/components/movie-details-page/components/movie-details-page.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/components/movie-details-page/components/movie-details-page.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"movieDetails\">\n  <mat-card style=\"width:20vw; float:left\">\n    <mat-card-title>{{ movieDetails.title }}</mat-card-title>\n    <mat-card-subtitle>{{ movieDetails.rating }}</mat-card-subtitle>\n    <img mat-card-image [src]=\"movieDetails.posterSrc\" />\n    <mat-card-content>{{ movieDetails.description }}</mat-card-content>\n    <mat-card-footer\n      ><button [routerLink]=\"['/movie']\" mat-button>\n        Back\n      </button></mat-card-footer\n    >\n  </mat-card>\n</ul>\n"

/***/ }),

/***/ "./src/app/pages/movie-list-page/components/movie-details-page/components/movie-details-page.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/components/movie-details-page/components/movie-details-page.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllLWxpc3QtcGFnZS9jb21wb25lbnRzL21vdmllLWRldGFpbHMtcGFnZS9jb21wb25lbnRzL21vdmllLWRldGFpbHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/movie-list-page/components/movie-details-page/components/movie-details-page.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/components/movie-details-page/components/movie-details-page.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MovieDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageComponent", function() { return MovieDetailsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_pages_request_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/request-movies.service */ "./src/app/pages/request-movies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MovieDetailsPageComponent = /** @class */ (function () {
    function MovieDetailsPageComponent(route, data) {
        var _this = this;
        this.route = route;
        this.data = data;
        this.movieDetails = null;
        this.title = 'movies details';
        this.route.params.subscribe(function (params) { return (_this.id = params.id); });
    }
    MovieDetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.fetchMovie(this.id).subscribe(function (res) {
            _this.movieDetails = res;
        });
    };
    MovieDetailsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-details-page',
            template: __webpack_require__(/*! ./movie-details-page.component.html */ "./src/app/pages/movie-list-page/components/movie-details-page/components/movie-details-page.component.html"),
            styles: [__webpack_require__(/*! ./movie-details-page.component.scss */ "./src/app/pages/movie-list-page/components/movie-details-page/components/movie-details-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_app_pages_request_movies_service__WEBPACK_IMPORTED_MODULE_2__["RequestMoviesService"]])
    ], MovieDetailsPageComponent);
    return MovieDetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/movie-list-page/components/movie-details-page/movie-details-page.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/components/movie-details-page/movie-details-page.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: MovieDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageModule", function() { return MovieDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_movie_details_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movie-details-page.component */ "./src/app/pages/movie-list-page/components/movie-details-page/components/movie-details-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var MovieDetailsPageModule = /** @class */ (function () {
    function MovieDetailsPageModule() {
    }
    MovieDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_movie_details_page_component__WEBPACK_IMPORTED_MODULE_3__["MovieDetailsPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], MovieDetailsPageModule);
    return MovieDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/movie-list-page/components/movie-list-page/movie-list-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/components/movie-list-page/movie-list-page.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>movie-list-page works! {{ title }}</p>\n<ul>\n  <mat-card\n    *ngFor=\"let movie of movieList\"\n    style=\"width:20vw; height:480px; float:left; margin:0\"\n  >\n    <mat-card-title\n      ><a href=\"movie/{{ movie.id }}\">{{ movie.title }}</a></mat-card-title\n    >\n    <mat-card-subtitle>{{ movie.rating }}</mat-card-subtitle>\n    <img mat-card-image [src]=\"movie.posterSrc\" />\n  </mat-card>\n</ul>\n"

/***/ }),

/***/ "./src/app/pages/movie-list-page/components/movie-list-page/movie-list-page.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/components/movie-list-page/movie-list-page.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllLWxpc3QtcGFnZS9jb21wb25lbnRzL21vdmllLWxpc3QtcGFnZS9tb3ZpZS1saXN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/movie-list-page/components/movie-list-page/movie-list-page.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/movie-list-page/components/movie-list-page/movie-list-page.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MovieListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListPageComponent", function() { return MovieListPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_pages_request_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/request-movies.service */ "./src/app/pages/request-movies.service.ts");



var MovieListPageComponent = /** @class */ (function () {
    function MovieListPageComponent(data) {
        this.data = data;
        this.movieList = [];
        this.title = 'movies list';
    }
    MovieListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.fetchList('1').subscribe(function (res) {
            _this.movieList = res;
        });
    };
    MovieListPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie-list-page',
            template: __webpack_require__(/*! ./movie-list-page.component.html */ "./src/app/pages/movie-list-page/components/movie-list-page/movie-list-page.component.html"),
            styles: [__webpack_require__(/*! ./movie-list-page.component.scss */ "./src/app/pages/movie-list-page/components/movie-list-page/movie-list-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_pages_request_movies_service__WEBPACK_IMPORTED_MODULE_2__["RequestMoviesService"]])
    ], MovieListPageComponent);
    return MovieListPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/movie-list-page/movie-list-page.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/movie-list-page/movie-list-page.module.ts ***!
  \*****************************************************************/
/*! exports provided: MovieListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListPageModule", function() { return MovieListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_movie_list_page_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movie-list-page/movie-list-page.component */ "./src/app/pages/movie-list-page/components/movie-list-page/movie-list-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var MovieListPageModule = /** @class */ (function () {
    function MovieListPageModule() {
    }
    MovieListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_movie_list_page_movie_list_page_component__WEBPACK_IMPORTED_MODULE_3__["MovieListPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]]
        })
    ], MovieListPageModule);
    return MovieListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/request-movies.service.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/request-movies.service.ts ***!
  \*************************************************/
/*! exports provided: RequestMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMoviesService", function() { return RequestMoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var API_URL = 'http://gosiaptak.cba.pl/movies.json';
var API_METHODS = {
    fetchList: API_URL + "/list/:page",
    fetchMovie: API_URL + "/movie/:id"
};
var RequestMoviesService = /** @class */ (function () {
    function RequestMoviesService(http) {
        this.http = http;
    }
    RequestMoviesService.prototype.fetchList = function (page) {
        if (page === void 0) { page = '1'; }
        return this.makeRequest(API_METHODS.fetchList, {
            page: page
        });
    };
    RequestMoviesService.prototype.fetchMovie = function (id) {
        return this.makeRequest(API_METHODS.fetchMovie, {
            id: id
        });
    };
    RequestMoviesService.prototype.makeRequest = function (url, params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        console.log(2, url);
        Object.entries(params).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            url = url.replace(":" + key, value);
            console.log(1, url);
        });
        return this.http.get(url);
    };
    RequestMoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RequestMoviesService);
    return RequestMoviesService;
}());



/***/ }),

/***/ "./src/app/pages/search-page/components/search-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/search-page/components/search-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/search-page/components/search-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/search-page/components/search-page.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1wYWdlL2NvbXBvbmVudHMvc2VhcmNoLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/search-page/components/search-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/search-page/components/search-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent() {
    }
    SearchPageComponent.prototype.ngOnInit = function () {
    };
    SearchPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-page',
            template: __webpack_require__(/*! ./search-page.component.html */ "./src/app/pages/search-page/components/search-page.component.html"),
            styles: [__webpack_require__(/*! ./search-page.component.scss */ "./src/app/pages/search-page/components/search-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/search-page/search-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/search-page/search-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_search_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search-page.component */ "./src/app/pages/search-page/components/search-page.component.ts");




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_search_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gosiaptak/Desktop/angular/warsawjs-workshop-29-movie/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map