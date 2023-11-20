"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_app_page_app_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app-page/app-page.component */ 8148);
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product/product.component */ 9486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _components_app_page_app_page_component__WEBPACK_IMPORTED_MODULE_0__.AppPageComponent
}, {
  path: 'product',
  component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_1__.ProductComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _components_app_page_app_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/app-page/app-page.component */ 8148);
/* harmony import */ var _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/app-footer/app-footer.component */ 2054);




class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header")(1, "app-page")(2, "app-footer");
    }
  },
  dependencies: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_app_page_app_page_component__WEBPACK_IMPORTED_MODULE_1__.AppPageComponent, _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_2__.AppFooterComponent],
  styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product/product.component */ 9486);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _components_app_page_app_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app-page/app-page.component */ 8148);
/* harmony import */ var _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app-footer/app-footer.component */ 2054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_product_product_component__WEBPACK_IMPORTED_MODULE_2__.ProductComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _components_app_page_app_page_component__WEBPACK_IMPORTED_MODULE_4__.AppPageComponent, _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_5__.AppFooterComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule]
  });
})();

/***/ }),

/***/ 2054:
/*!***************************************************************!*\
  !*** ./src/app/components/app-footer/app-footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFooterComponent: () => (/* binding */ AppFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class AppFooterComponent {}
AppFooterComponent.ɵfac = function AppFooterComponent_Factory(t) {
  return new (t || AppFooterComponent)();
};
AppFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppFooterComponent,
  selectors: [["app-footer"]],
  decls: 5,
  vars: 0,
  consts: [[1, "footer"]],
  template: function AppFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "br")(3, "br")(4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [".footer[_ngcontent-%COMP%] {\n  background-color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTXklMjBwcm9qZWN0c1xcQW5ndWxhclxcbXktYXBwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcYXBwLWZvb3RlclxcYXBwLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FDQ0oiLCJmaWxlIjoiYXBwLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59IiwiLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAtZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9NeSUyMHByb2plY3RzL0FuZ3VsYXIvbXktYXBwL3NyYy9hcHAvY29tcG9uZW50cy9hcHAtZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKO0FEQ0Esd2hCQUF3aEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufSIsIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8148:
/*!***********************************************************!*\
  !*** ./src/app/components/app-page/app-page.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppPageComponent: () => (/* binding */ AppPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../product/product.component */ 9486);


class AppPageComponent {}
AppPageComponent.ɵfac = function AppPageComponent_Factory(t) {
  return new (t || AppPageComponent)();
};
AppPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppPageComponent,
  selectors: [["app-page"]],
  decls: 5,
  vars: 0,
  consts: [[1, "container", "flex-col", "justify-center", "mx-auto", "pt-12"], [1, "text-center", "title"], [1, "product-list"], [1, "product-list-content"]],
  template: function AppPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Govno");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-product", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  dependencies: [_product_product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent],
  styles: [".title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 38px;\n}\n\n.product-list[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: -webkit-center;\n}\n.product-list[_ngcontent-%COMP%]   .product-list-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1360px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXE15JTIwcHJvamVjdHNcXEFuZ3VsYXJcXG15LWFwcFxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFwcC1wYWdlXFxhcHAtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtBQ0VKO0FEREk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNHUiIsImZpbGUiOiJhcHAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbn1cclxuLnByb2R1Y3QtbGlzdHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxuICAgIC5wcm9kdWN0LWxpc3QtY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzNjBweDtcclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcbn0iLCIudGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDM4cHg7XG59XG5cbi5wcm9kdWN0LWxpc3Qge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcbn1cbi5wcm9kdWN0LWxpc3QgLnByb2R1Y3QtbGlzdC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMzYwcHg7XG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hcHAtcGFnZS9hcHAtcGFnZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uL015JTIwcHJvamVjdHMvQW5ndWxhci9teS1hcHAvc3JjL2FwcC9jb21wb25lbnRzL2FwcC1wYWdlL2FwcC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0FDRUo7QURESTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0dSO0FEQ0EsNHhDQUE0eEMiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAzOHB4O1xyXG59XHJcbi5wcm9kdWN0LWxpc3R7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XHJcbiAgICAucHJvZHVjdC1saXN0LWNvbnRlbnR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzYwcHg7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG59IiwiLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAzOHB4O1xufVxuXG4ucHJvZHVjdC1saXN0IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG4ucHJvZHVjdC1saXN0IC5wcm9kdWN0LWxpc3QtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1heC13aWR0aDogMTM2MHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6471:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 17,
  vars: 0,
  consts: [[1, "header-top", "justify-center"], [1, "logo", "uppercase", "text-3xl", "text-center"], [1, "header-bottom"], [1, "header-menu"], [1, "header-item"], ["href", ""]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "logo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "govno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "govno2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4)(12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "govno3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4)(15, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "govno4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  styles: [".header-top[_ngcontent-%COMP%] {\n  background: #000;\n  color: aliceblue;\n  height: 100px;\n  display: flex;\n  align-items: center;\n  border-bottom-width: 2px;\n  border-color: aliceblue;\n}\n\n.header-bottom[_ngcontent-%COMP%] {\n  background: #000;\n  height: 50px;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-bottom[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.header-bottom[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  position: relative;\n}\n.header-bottom[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:first-child {\n  margin-left: 0px;\n}\n.header-bottom[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]::after {\n  background: #fff;\n  bottom: -3px;\n  content: \"\";\n  height: 1px;\n  left: 0;\n  position: absolute;\n  transition: transform 0.5s;\n  width: 100%;\n}\n.header-bottom[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:not(:hover)::after {\n  webkit-transform: scalex(0);\n  transform: scalex(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxNeSUyMHByb2plY3RzXFxBbmd1bGFyXFxteS1hcHBcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRVI7QUREUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNHWjtBREZZO0VBQ0ksZ0JBQUE7QUNJaEI7QURGWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFFQSxXQUFBO0FDSWhCO0FERlk7RUFDSSwyQkFBQTtFQUNBLG9CQUFBO0FDSWhCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdG9we1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItY29sb3I6IGFsaWNlYmx1ZTtcclxuICAgIFxyXG59XHJcbi5oZWFkZXItYm90dG9te1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC5oZWFkZXItbWVudXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmhlYWRlci1pdGVte1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IC0zcHg7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjVzO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMsLXdlYmtpdC10cmFuc2Zvcm0gLjVzO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpub3QoOmhvdmVyKTo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICB3ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXgoMCk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxleCgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5oZWFkZXItdG9wIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLmhlYWRlci1ib3R0b20ge1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXItYm90dG9tIC5oZWFkZXItbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlci1ib3R0b20gLmhlYWRlci1tZW51IC5oZWFkZXItaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyLWJvdHRvbSAuaGVhZGVyLW1lbnUgLmhlYWRlci1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cbi5oZWFkZXItYm90dG9tIC5oZWFkZXItbWVudSAuaGVhZGVyLWl0ZW06OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm90dG9tOiAtM3B4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjVzO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMsIC13ZWJraXQtdHJhbnNmb3JtIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlci1ib3R0b20gLmhlYWRlci1tZW51IC5oZWFkZXItaXRlbTpub3QoOmhvdmVyKTo6YWZ0ZXIge1xuICB3ZWJraXQtdHJhbnNmb3JtOiBzY2FsZXgoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGV4KDApO1xufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vTXklMjBwcm9qZWN0cy9Bbmd1bGFyL215LWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRVI7QUREUTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNHWjtBREZZO0VBQ0ksZ0JBQUE7QUNJaEI7QURGWTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBRUEsMEJBQUE7RUFFQSxXQUFBO0FDSWhCO0FERlk7RUFDSSwyQkFBQTtFQUNBLG9CQUFBO0FDSWhCO0FEREEsZzRIQUFnNEgiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRvcHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgICBcclxufVxyXG4uaGVhZGVyLWJvdHRvbXtcclxuICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuaGVhZGVyLW1lbnV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5oZWFkZXItaXRlbXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtM3B4O1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC41cztcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzLC13ZWJraXQtdHJhbnNmb3JtIC41cztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bm90KDpob3Zlcik6OmFmdGVye1xyXG4gICAgICAgICAgICAgICAgd2Via2l0LXRyYW5zZm9ybTogc2NhbGV4KDApO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZXgoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuaGVhZGVyLXRvcCB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiBhbGljZWJsdWU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5oZWFkZXItYm90dG9tIHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyLWJvdHRvbSAuaGVhZGVyLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkZXItYm90dG9tIC5oZWFkZXItbWVudSAuaGVhZGVyLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlci1ib3R0b20gLmhlYWRlci1tZW51IC5oZWFkZXItaXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG4uaGVhZGVyLWJvdHRvbSAuaGVhZGVyLW1lbnUgLmhlYWRlci1pdGVtOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvdHRvbTogLTNweDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxcHg7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC41cztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjVzO1xuICB3aWR0aDogMTAwJTtcbn1cbi5oZWFkZXItYm90dG9tIC5oZWFkZXItbWVudSAuaGVhZGVyLWl0ZW06bm90KDpob3Zlcik6OmFmdGVyIHtcbiAgd2Via2l0LXRyYW5zZm9ybTogc2NhbGV4KDApO1xuICB0cmFuc2Zvcm06IHNjYWxleCgwKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9486:
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductComponent: () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/products.service */ 832);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function ProductComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0456\u0448\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Tovar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, product_r1.price));
  }
}
class ProductComponent {
  constructor(ProductsService) {
    this.ProductsService = ProductsService;
  }
  ngOnInit() {
    this.productsSubscription = this.ProductsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  ngOnDestroy() {
    if (this.productsSubscription) this.productsSubscription.unsubscribe();
  }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) {
  return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService));
};
ProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProductComponent,
  selectors: [["app-product"]],
  decls: 1,
  vars: 1,
  consts: [["class", "category-product", "href", "", 4, "ngFor", "ngForOf"], ["href", "", 1, "category-product"], [1, "category-product-cover"], ["alt", "", 1, "product-img", 3, "src"], [1, "price"], [1, "price-current"], ["id", "hoverable", 1, "product-blackout"], ["id", "hoverable", 1, "more-btn"], [1, "category-product-name"]],
  template: function ProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductComponent_a_0_Template, 12, 4, "a", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
  styles: [".category-product[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 35px 10px;\n  justify-content: center;\n  position: relative;\n  --webkit-filter: drop-shadow(0 0 20px rgba(0,60,120,.06));\n  filter: drop-shadow(0 0 20px rgba(0, 60, 120, 0.06));\n}\n.category-product[_ngcontent-%COMP%]:hover   .category-product-name[_ngcontent-%COMP%] {\n  background-color: #000;\n  opacity: 1;\n  transition: all 0.5s;\n  color: #fff;\n}\n.category-product[_ngcontent-%COMP%]:hover   .category-product-cover[_ngcontent-%COMP%]    > .more-btn[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.category-product[_ngcontent-%COMP%]:hover   .category-product-cover[_ngcontent-%COMP%]    > .product-blackout[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.category-product[_ngcontent-%COMP%]   .category-product-cover[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 350px;\n  background-color: #fff;\n  border-radius: 29px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.category-product[_ngcontent-%COMP%]   .category-product-cover[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  left: 0;\n  position: absolute;\n  top: 0;\n  border-radius: 29px 0 1em 0;\n  background: #000;\n  color: #fff;\n}\n.category-product[_ngcontent-%COMP%]   .category-product-cover[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   .price-current[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  padding-top: 0.2rem;\n  padding-bottom: 0.2rem;\n  padding-right: 1rem;\n  border-radius: 0 0 1em 0;\n}\n.category-product[_ngcontent-%COMP%]   .category-product-cover[_ngcontent-%COMP%]   .product-blackout[_ngcontent-%COMP%] {\n  background: #000;\n  height: 100%;\n  position: absolute;\n  transition: opacity 0.5s;\n  border-radius: 29px;\n  width: 100%;\n  opacity: 0;\n}\n.category-product[_ngcontent-%COMP%]   .category-product-cover[_ngcontent-%COMP%]   .more-btn[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  position: absolute;\n  justify-content: center;\n  opacity: 0;\n  background: #fff;\n  border-radius: 100px;\n  font-size: 15px;\n  font-weight: 400;\n  height: 50px;\n  text-transform: uppercase;\n  transition: opacity 0.5s;\n  width: 220px;\n}\n.category-product[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  max-width: 50%;\n  margin: 0 auto;\n  position: relative;\n}\n.category-product[_ngcontent-%COMP%]   .category-product-name[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  contain: strict;\n  cursor: pointer;\n  height: 58px;\n  margin-top: 20px;\n  --webkit-mask-image: -webkit-radial-gradient(#fff,#000);\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n}\n\n@media (min-width: 1600px) {\n  .category-product[_ngcontent-%COMP%]   .category-product-cover[_ngcontent-%COMP%] {\n    width: 430px;\n    height: 528px;\n  }\n}\n@media (min-width: 1280px) and (max-width: 1600px) {\n  .category-product[_ngcontent-%COMP%]   .category-product-cover[_ngcontent-%COMP%] {\n    width: calc(28.33333vw - 23.33333px);\n    height: 480px;\n  }\n}\n@media (min-width: 1280px) and (max-width: 1440px) {\n  .category-product[_ngcontent-%COMP%]   .category-product-cover[_ngcontent-%COMP%] {\n    height: 420px;\n  }\n}\n@media (min-width: 1516px) and (max-width: 1538px) {\n  .category-product[_ngcontent-%COMP%]   .category-product-cover[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcTXklMjBwcm9qZWN0c1xcQW5ndWxhclxcbXktYXBwXFxzcmNcXGFwcFxcY29tcG9uZW50c1xccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0VBQ0Esb0RBQUE7QUNDSjtBRENRO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDQ1I7QURDUTtFQUNJLFVBQUE7QUNDWjtBRENRO0VBQ0ksWUFBQTtBQ0NaO0FERUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ1o7QURBWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNFaEI7QURDUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDQ1o7QURFUTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQ0FaO0FER0k7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRFI7QURHSTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1REFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNEUjs7QURJQTtFQUVRO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNGVjtBQUNGO0FET0E7RUFFUTtJQUNJLG9DQUFBO0lBQ0EsYUFBQTtFQ05WO0FBQ0Y7QURXQTtFQUVRO0lBRUksYUFBQTtFQ1hWO0FBQ0Y7QURnQkE7RUFFUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDZlY7QUFDRiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LXByb2R1Y3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMzVweCAxMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAyMHB4IHJnYmEoMCw2MCwxMjAsLjA2KSk7IFxyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMjBweCByZ2JhKDAsNjAsMTIwLC4wNikpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmNhdGVnb3J5LXByb2R1Y3QtbmFtZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVyPi5tb3JlLWJ0bntcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXI+LnByb2R1Y3QtYmxhY2tvdXR7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnktcHJvZHVjdC1jb3ZlcntcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmYgO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI5cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC5wcmljZXtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI5cHggMCAxZW0gMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIC5wcmljZS1jdXJyZW50e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDAuMnJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDFlbSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kdWN0LWJsYWNrb3V0e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI5cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vcmUtYnRue1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDsgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cztcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4OyAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2R1Y3QtaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5jYXRlZ29yeS1wcm9kdWN0LW5hbWV7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgY29udGFpbjogc3RyaWN0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAtLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjZmZmLCMwMDApO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgLmNhdGVnb3J5LXByb2R1Y3R7XHJcbiAgICAgICAgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MjhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOjE2MDBweCkge1xyXG4gICAgLmNhdGVnb3J5LXByb2R1Y3R7XHJcbiAgICAgICAgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDI4LjMzMzMzdncgLSAyMy4zMzMzM3B4KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0ODBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe1xyXG4gICAgLmNhdGVnb3J5LXByb2R1Y3R7XHJcbiAgICAgICAgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXJ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDE1MTZweCkgYW5kIChtYXgtd2lkdGg6MTUzOHB4KSB7XHJcbiAgICAuY2F0ZWdvcnktcHJvZHVjdHtcclxuICAgICAgICAuY2F0ZWdvcnktcHJvZHVjdC1jb3ZlcntcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbn0iLCIuY2F0ZWdvcnktcHJvZHVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMzVweCAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAyMHB4IHJnYmEoMCw2MCwxMjAsLjA2KSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDIwcHggcmdiYSgwLCA2MCwgMTIwLCAwLjA2KSk7XG59XG4uY2F0ZWdvcnktcHJvZHVjdDpob3ZlciAuY2F0ZWdvcnktcHJvZHVjdC1uYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhdGVnb3J5LXByb2R1Y3Q6aG92ZXIgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXIgPiAubW9yZS1idG4ge1xuICBvcGFjaXR5OiAxO1xufVxuLmNhdGVnb3J5LXByb2R1Y3Q6aG92ZXIgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXIgPiAucHJvZHVjdC1ibGFja291dCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5jYXRlZ29yeS1wcm9kdWN0IC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyOXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhdGVnb3J5LXByb2R1Y3QgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXIgLnByaWNlIHtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDI5cHggMCAxZW0gMDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2F0ZWdvcnktcHJvZHVjdCAuY2F0ZWdvcnktcHJvZHVjdC1jb3ZlciAucHJpY2UgLnByaWNlLWN1cnJlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAwLjJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjJyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxZW0gMDtcbn1cbi5jYXRlZ29yeS1wcm9kdWN0IC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVyIC5wcm9kdWN0LWJsYWNrb3V0IHtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2F0ZWdvcnktcHJvZHVjdCAuY2F0ZWdvcnktcHJvZHVjdC1jb3ZlciAubW9yZS1idG4ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgd2lkdGg6IDIyMHB4O1xufVxuLmNhdGVnb3J5LXByb2R1Y3QgLnByb2R1Y3QtaW1nIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2F0ZWdvcnktcHJvZHVjdCAuY2F0ZWdvcnktcHJvZHVjdC1uYW1lIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGNvbnRhaW46IHN0cmljdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDU4cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC0td2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCNmZmYsIzAwMCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgLmNhdGVnb3J5LXByb2R1Y3QgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXIge1xuICAgIHdpZHRoOiA0MzBweDtcbiAgICBoZWlnaHQ6IDUyOHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5jYXRlZ29yeS1wcm9kdWN0IC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVyIHtcbiAgICB3aWR0aDogY2FsYygyOC4zMzMzM3Z3IC0gMjMuMzMzMzNweCk7XG4gICAgaGVpZ2h0OiA0ODBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuY2F0ZWdvcnktcHJvZHVjdCAuY2F0ZWdvcnktcHJvZHVjdC1jb3ZlciB7XG4gICAgaGVpZ2h0OiA0MjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE1MTZweCkgYW5kIChtYXgtd2lkdGg6IDE1MzhweCkge1xuICAuY2F0ZWdvcnktcHJvZHVjdCAuY2F0ZWdvcnktcHJvZHVjdC1jb3ZlciB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDgwcHg7XG4gIH1cbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi9NeSUyMHByb2plY3RzL0FuZ3VsYXIvbXktYXBwL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5REFBQTtFQUNBLG9EQUFBO0FDQ0o7QURDUTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEQ1E7RUFDSSxVQUFBO0FDQ1o7QURDUTtFQUNJLFlBQUE7QUNDWjtBREVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURDUTtFQUNJLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NaO0FEQVk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FDRWhCO0FEQ1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0NaO0FERVE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNBWjtBREdJO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER0k7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdURBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDRFI7O0FESUE7RUFFUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VDRlY7QUFDRjtBRE9BO0VBRVE7SUFDSSxvQ0FBQTtJQUNBLGFBQUE7RUNOVjtBQUNGO0FEV0E7RUFFUTtJQUVJLGFBQUE7RUNYVjtBQUNGO0FEZ0JBO0VBRVE7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQ2ZWO0FBQ0Y7QURDQSw0elRBQTR6VCIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS1wcm9kdWN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDM1cHggMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLS13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMjBweCByZ2JhKDAsNjAsMTIwLC4wNikpOyBcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDIwcHggcmdiYSgwLDYwLDEyMCwuMDYpKTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5jYXRlZ29yeS1wcm9kdWN0LW5hbWV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2F0ZWdvcnktcHJvZHVjdC1jb3Zlcj4ubW9yZS1idG57XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVyPi5wcm9kdWN0LWJsYWNrb3V0e1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXJ7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmIDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAucHJpY2V7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyOXB4IDAgMWVtIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAucHJpY2UtY3VycmVudHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjJyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxZW0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZHVjdC1ibGFja291dHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyOXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb3JlLWJ0bntcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7IFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNXM7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9kdWN0LWltZ3tcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnktcHJvZHVjdC1uYW1le1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgIGNvbnRhaW46IHN0cmljdDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgLS13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoI2ZmZiwjMDAwKTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIC5jYXRlZ29yeS1wcm9kdWN0e1xyXG4gICAgICAgIC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVye1xyXG4gICAgICAgICAgICB3aWR0aDogNDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTI4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDoxNjAwcHgpIHtcclxuICAgIC5jYXRlZ29yeS1wcm9kdWN0e1xyXG4gICAgICAgIC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVye1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygyOC4zMzMzM3Z3IC0gMjMuMzMzMzNweCk7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSBhbmQgKG1heC13aWR0aDogMTQ0MHB4KXtcclxuICAgIC5jYXRlZ29yeS1wcm9kdWN0e1xyXG4gICAgICAgIC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVye1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNTE2cHgpIGFuZCAobWF4LXdpZHRoOjE1MzhweCkge1xyXG4gICAgLmNhdGVnb3J5LXByb2R1Y3R7XHJcbiAgICAgICAgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0ODBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59IiwiLmNhdGVnb3J5LXByb2R1Y3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDM1cHggMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLS13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMjBweCByZ2JhKDAsNjAsMTIwLC4wNikpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAyMHB4IHJnYmEoMCwgNjAsIDEyMCwgMC4wNikpO1xufVxuLmNhdGVnb3J5LXByb2R1Y3Q6aG92ZXIgLmNhdGVnb3J5LXByb2R1Y3QtbmFtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5jYXRlZ29yeS1wcm9kdWN0OmhvdmVyIC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVyID4gLm1vcmUtYnRuIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jYXRlZ29yeS1wcm9kdWN0OmhvdmVyIC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVyID4gLnByb2R1Y3QtYmxhY2tvdXQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4uY2F0ZWdvcnktcHJvZHVjdCAuY2F0ZWdvcnktcHJvZHVjdC1jb3ZlciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjlweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXRlZ29yeS1wcm9kdWN0IC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVyIC5wcmljZSB7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiAyOXB4IDAgMWVtIDA7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhdGVnb3J5LXByb2R1Y3QgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXIgLnByaWNlIC5wcmljZS1jdXJyZW50IHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDAgMWVtIDA7XG59XG4uY2F0ZWdvcnktcHJvZHVjdCAuY2F0ZWdvcnktcHJvZHVjdC1jb3ZlciAucHJvZHVjdC1ibGFja291dCB7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDI5cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvcGFjaXR5OiAwO1xufVxuLmNhdGVnb3J5LXByb2R1Y3QgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXIgLm1vcmUtYnRuIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gIHdpZHRoOiAyMjBweDtcbn1cbi5jYXRlZ29yeS1wcm9kdWN0IC5wcm9kdWN0LWltZyB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNhdGVnb3J5LXByb2R1Y3QgLmNhdGVnb3J5LXByb2R1Y3QtbmFtZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBjb250YWluOiBzdHJpY3Q7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA1OHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjZmZmLCMwMDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIC5jYXRlZ29yeS1wcm9kdWN0IC5jYXRlZ29yeS1wcm9kdWN0LWNvdmVyIHtcbiAgICB3aWR0aDogNDMwcHg7XG4gICAgaGVpZ2h0OiA1MjhweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAuY2F0ZWdvcnktcHJvZHVjdCAuY2F0ZWdvcnktcHJvZHVjdC1jb3ZlciB7XG4gICAgd2lkdGg6IGNhbGMoMjguMzMzMzN2dyAtIDIzLjMzMzMzcHgpO1xuICAgIGhlaWdodDogNDgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmNhdGVnb3J5LXByb2R1Y3QgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXIge1xuICAgIGhlaWdodDogNDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNTE2cHgpIGFuZCAobWF4LXdpZHRoOiAxNTM4cHgpIHtcbiAgLmNhdGVnb3J5LXByb2R1Y3QgLmNhdGVnb3J5LXByb2R1Y3QtY292ZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQ4MHB4O1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 832:
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsService: () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class ProductsService {
  constructor(http) {
    this.http = http;
    this.url = "https://www.jsonkeeper.com/b/BXOV";
  }
  getProducts() {
    return this.http.get(this.url);
  }
  getProduct(id) {
    return this.http.get(`${this.url}/${id}`);
  }
}
ProductsService.ɵfac = function ProductsService_Factory(t) {
  return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
ProductsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ProductsService,
  factory: ProductsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map