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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<br>\n\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-10 col-md-offset-1\">\n\n      <h1>VotesApp Style Guide</h1>\n      <p>A quick preview of the style of the VotesApp styles.</p>\n\n      <!-- HEADINGS -->\n      <h2 class=\"page-header\" id=\"headings\">Headings</h2>\n\n      <h1 class=\"page-header\">Page Header <small>With Small Text</small></h1>\n      <h1>This is an h1 heading</h1>\n      <h2>This is an h2 heading</h2>\n      <h3>This is an h3 heading</h3>\n      <h4>This is an h4 heading</h4>\n      <h5>This is an h5 heading</h5>\n      <h6>This is an h6 heading</h6>\n      <!-- /HEADINGS -->\n\n      <!-- TABLES -->\n      <h2 class=\"page-header\" id=\"tables\">Tables</h2>\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n        <!--- Note that these columns can be defined in any order.\n              The actual rendered columns are set as a property on the row definition\" -->\n\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"position\">\n          <th mat-header-cell *matHeaderCellDef> No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"weight\">\n          <th mat-header-cell *matHeaderCellDef> Weight </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"symbol\">\n          <th mat-header-cell *matHeaderCellDef> Symbol </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <!-- /TABLES -->\n\n      <!-- CONTENT -->\n      <h2 class=\"page-header\" id=\"content\">Content</h2>\n\n      <p class=\"lead\">This is a lead paragraph.</p>\n      <p>This is an <b>ordinary paragraph</b> that is <i>long enough</i> to wrap to <u>multiple lines</u> so that you can see how the line spacing looks.</p>\n      <p class=\"text-muted\">Muted color paragraph.</p>\n      <p class=\"text-warning\">Warning color paragraph.</p>\n      <p class=\"text-danger\">Danger color paragraph.</p>\n      <p class=\"text-info\">Info color paragraph.</p>\n      <p class=\"text-success\">Success color paragraph.</p>\n      <p><small>This is text in a <code>small</code> wrapper. <abbr title=\"No Big Deal\">NBD</abbr>, right?</small></p>\n      <br>\n\n      <!-- CONTENT -->\n      <h2 class=\"page-header\" id=\"form\">Form</h2>\n\n      <div id=\"login-form\" class=\"container flex-column form\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit()\">\n          <legend>Legend</legend>\n              <mat-form-field>\n                <input matInput placeholder=\"Username\" formControlName=\"username\">\n                <mat-error *ngIf=\"username.hasError('required')\">\n                  Username is required.\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field>\n                <input matInput\n                       placeholder=\"Enter your password\"\n                       [type]=\"hide ? 'password' : 'text'\"\n                       formControlName=\"password\"\n                       required>\n                <mat-error *ngIf=\"password.hasError('required')\">Password is required.</mat-error>\n                <mat-icon matSuffix\n                          (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n              </mat-form-field>\n              <br />\n              <div class=\"form-group\">\n                <input\n                  style=\"display: none\"\n                  type=\"file\"\n                  (change)=\"onFileChange($event)\"\n                  #fileInput\n                  formControlName=\"id\">\n                <input type=\"hidden\" name=\"fileHidden\" formControlName=\"name\"/> <!-- Validation Field -->\n                <button class=\"btn btn-primary\"\n                        (click)=\"fileInput.click()\">Example Input</button>\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">Check me out</label>\n              </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n      <hr>\n\n      <!-- BUTTONS -->\n      <h2 class=\"page-header\" id=\"buttons\">Buttons</h2>\n\n      <p><!-- Standard gray button with gradient -->\n        <button type=\"button\" class=\"btn btn-default\">Default</button>\n        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->\n        <button type=\"button\" class=\"btn btn-primary\">Primary</button>\n        <!-- Indicates a successful or positive action -->\n        <button type=\"button\" class=\"btn btn-success\">Success</button>\n        <!-- Contextual button for informational alert messages -->\n        <button type=\"button\" class=\"btn btn-info\">Info</button>\n        <!-- Indicates caution should be taken with this action -->\n        <button type=\"button\" class=\"btn btn-warning\">Warning</button>\n        <!-- Indicates a dangerous or potentially negative action -->\n        <button type=\"button\" class=\"btn btn-danger\">Danger</button>\n        <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->\n        <button type=\"button\" class=\"btn btn-link\">Link</button></p>\n      <p>\n        <button type=\"button\" class=\"btn btn-primary btn-lg\">Large</button>\n        <button type=\"button\" class=\"btn btn-primary disabled\">Disabled</button>\n        <button type=\"button\" class=\"btn btn-primary\">Default</button>\n        <button type=\"button\" class=\"btn btn-primary btn-sm\">Small</button>\n        <button type=\"button\" class=\"btn btn-primary btn-xs\">Extra Small</button></p>\n      <!-- /BUTTONS -->\n\n      <!-- INPUT GROUP -->\n      <h2 class=\"page-header\" id=\"input-group\">Input Group</h2>\n\n      <div class=\"input-group\">\n        <span class=\"input-group-btn\">                <button class=\"btn btn-default\" type=\"button\">Go!</button>              </span><input type=\"text\" class=\"form-control\" placeholder=\"Username\">\n      </div><br>\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control input-large\">\n        <span class=\"input-group-addon input-large\">.00</span>\n      </div><br>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\">$</span><input type=\"text\" class=\"form-control\">\n        <span class=\"input-group-addon\">.00</span>\n      </div>\n      <!-- /INPUT GROUP -->\n\n      <!-- NAV -->\n      <h2 class=\"page-header\" id=\"nav\">Nav</h2>\n\n      <ul class=\"nav nav-tabs\">\n        <li class=\"active\">\n          <a href=\"#\" class=\"button\">Home</a>\n        </li>\n        <li>\n          <a href=\"#\" class=\"button\">About</a>\n        </li>\n      </ul>\n      <!-- /NAV -->\n\n      <!-- NAVBAR\n      <h2 class=\"page-header\" id=\"navbar\">Navbar</h2>\n\n      <div class=\"navbar\">\n        <div class=\"navbar-header\">\n          <a href=\"#\" class=\"navbar-brand\">Your Company</a>\n        </div>\n        <div class=\"navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"active\">\n              <a href=\"#\">Home</a>\n            </li>\n            <li>\n              <a href=\"#\">About</a>\n            </li>\n            <li>\n              <a href=\"#\">Contact</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"navbar navbar-inverse\">\n        <div class=\"navbar-header\">\n          <a href=\"#\" class=\"navbar-brand\">Your Company</a>\n        </div>\n        <div class=\"navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"active\">\n              <a href=\"#\">Home</a>\n            </li>\n            <li>\n              <a href=\"#\">About</a>\n            </li>\n            <li>\n              <a href=\"#\">Contact</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"navbar\">\n        <div class=\"collapse navbar-collapse\">\n          <a class=\"btn btn-primary navbar-btn\">Navbar Button</a>\n          <p class=\"navbar-text navbar-right\">Navbar Text</p>\n        </div>\n      -- /NAVBAR -->\n\n      <!-- PAGINATION\n      <h2 class=\"page-header\" id=\"pagination\">Pagination</h2>\n\n      <ul class=\"pagination\">\n        <li>\n          <a href=\"#\">Prev</a>\n        </li>\n        <li>\n          <a href=\"#\">1</a>\n        </li>\n        <li>\n          <a href=\"#\">2</a>\n        </li>\n        <li>\n          <a href=\"#\">3</a>\n        </li>\n        <li>\n          <a href=\"#\">4</a>\n        </li>\n        <li>\n          <a href=\"#\">Next</a>\n        </li>\n      </ul>\n      <div class=\"clearfix\"></div>\n      <ul class=\"pagination pagination-lg\">\n        <li>\n          <a href=\"#\">Prev</a>\n        </li>\n        <li>\n          <a href=\"#\">1</a>\n        </li>\n        <li>\n          <a href=\"#\">2</a>\n        </li>\n        <li>\n          <a href=\"#\">3</a>\n        </li>\n        <li>\n          <a href=\"#\">4</a>\n        </li>\n        <li>\n          <a href=\"#\">Next</a>\n        </li>\n      </ul>\n      <div class=\"clearfix\"></div>\n      <ul class=\"pager\">\n        <li>\n          <a href=\"#\">Prev</a>\n        </li>\n        <li>\n          <a href=\"#\">Next</a>\n        </li>\n      </ul>\n       /PAGINATION -->\n\n      <!-- LABEL AND BADGE -->\n      <!--<h2 class=\"page-header\" id=\"label-badge\">Label and badge</h2>-->\n\n      <!--<h3><span class=\"label label-default\">Default</span> <span class=\"label label-success\">Success</span> <span class=\"label label-warning\">Warning</span> <span class=\"label label-danger\">Danger</span> <span class=\"label label-info\">Info</span></h3>-->\n      <!--<p class=\"lead\"><a href=\"#\">Inbox <span class=\"badge\">42</span></a></p>-->\n      <!-- /LABEL AND BADGE -->\n\n      <!-- ALERT -->\n      <h2 class=\"page-header\" id=\"alert\">Alert</h2>\n\n      <div class=\"alert alert-danger\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        <strong>Oh snap!</strong> <a href=\"#\" class=\"alert-link\">Change a few things up</a> and try submitting again.\n      </div>\n      <div class=\"alert alert-success\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        <strong>Well done!</strong> You successfully read <a href=\"#\" class=\"alert-link\">this important alert message</a>.\n      </div>\n      <div class=\"alert alert-warning\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n      </div>\n      <div class=\"alert alert-info\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        <strong>Heads up!</strong> This <a href=\"#\" class=\"alert-link\">alert needs your attention</a>, but it's not super important.\n      </div>\n      <div class=\"alert\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        <h4>Warning!</h4>\n        <p>This is a block style alert.</p>\n      </div>\n      <!-- /ALERT -->\n\n      <!-- PROGRESS BAR\n      <h2 class=\"page-header\" id=\"progress-bar\">Progress bar</h2>\n\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-info\" style=\"width: 20%\"></div>\n      </div>\n      <div class=\"progress progress-striped active\">\n        <div class=\"progress-bar progress-bar-success\"></div>\n      </div>\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-warning\" style=\"width: 60%\"></div>\n      </div>\n      <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-danger\" style=\"width: 80%\"></div>\n      </div>\n      /PROGRESS BAR -->\n\n      <!-- MEDIA\n      <h2 class=\"page-header\" id=\"media\">Media</h2>\n\n      <div class=\"media\">\n        <a class=\"pull-left\" href=\"#\">\n            <img class=\"media-object\" src=\"http://placehold.it/64x64\">  </a>\n        <div class=\"media-body\">\n          <h4 class=\"media-heading\">Media heading</h4>\n          <p>This is the content for your media.</p>\n        </div>\n      </div>\n       /MEDIA -->\n\n      <!-- LIST GROUP -->\n      <h2 class=\"page-header\" id=\"list-group\">List group</h2>\n\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">Cras justo odio</li>\n        <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n        <li class=\"list-group-item\">Morbi leo risus</li>\n        <li class=\"list-group-item\">Porta ac consectetur ac</li>\n        <li class=\"list-group-item\">Vestibulum at eros</li>\n      </ul>\n      <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item active\">          Cras justo odio        </a><a href=\"#\" class=\"list-group-item\">Dapibus ac facilisis in        </a><a href=\"#\" class=\"list-group-item\">Morbi leo risus        </a><a href=\"#\" class=\"list-group-item\">Porta ac consectetur ac        </a><a href=\"#\" class=\"list-group-item\">Vestibulum at eros        </a>\n      </div>\n      <div class=\"list-group\">\n        <a href=\"#\" class=\"list-group-item active\">          <h4 class=\"list-group-item-heading\">List group item heading</h4>          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>        </a><a href=\"#\" class=\"list-group-item\">          <h4 class=\"list-group-item-heading\">List group item heading</h4>          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>        </a><a href=\"#\" class=\"list-group-item\">          <h4 class=\"list-group-item-heading\">List group item heading</h4>          <p class=\"list-group-item-text\">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>        </a>\n      </div>\n      <!-- /LIST GROUP -->\n\n      <!-- PANEL\n      <h2 class=\"page-header\" id=\"panel\">Panel</h2>\n\n      <div class=\"panel panel-primary\" id=\"panels\">\n        <div class=\"panel-heading\">This is a header\n        </div>\n        <p class=\"panel-body\">This is a panel</p>\n        <div class=\"panel-footer\">This is a footer\n        </div>\n      </div>\n      <div class=\"panel panel-success\">\n        <div class=\"panel-heading\">This is a header\n        </div>\n        <div class=\"panel-body\">This is a panel</div>\n        <div class=\"panel-footer\">This is a footer\n        </div>\n      </div>\n      <div class=\"panel panel-danger\">\n        <div class=\"panel-heading\">This is a header\n        </div>\n        <div class=\"panel-body\">This is a panel</div>\n        <div class=\"panel-footer\">This is a footer\n        </div>\n      </div>\n      <div class=\"panel panel-warning\">\n        <div class=\"panel-heading\">This is a header\n        </div>\n        <div class=\"panel-body\">This is a panel</div>\n        <div class=\"panel-footer\">This is a footer\n        </div>\n      </div>\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">This is a header\n        </div>\n        <p class=\"panel-body\">This is a panel</p>\n        <div class=\"panel-footer\">This is a footer\n        </div>\n      </div>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">This is a header\n        </div>\n        <div class=\"panel-body\">This is a panel</div>\n        <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">First Item</li>\n          <li class=\"list-group-item\">Second Item</li>\n          <li class=\"list-group-item\">Third Item</li>\n        </ul>\n        <div class=\"panel-footer\">This is a footer\n        </div>\n      </div>\n       /PANEL -->\n\n      <!-- WELL\n      <h2 class=\"page-header\" id=\"well\">Well</h2>\n\n      <div class=\"well\">Default Well\n      </div>\n      <div class=\"well well-sm\">Small Well\n      </div>\n      <div class=\"well well-lg\">Large Padding Well\n      </div>\n       /WELL -->\n\n      <!-- TAB\n      <h2 class=\"page-header\" id=\"tab\">Tab</h2>\n\n      <ul id=\"myTab\" class=\"nav nav-tabs\">\n    <li class=\"\"><a href=\"#home\" data-toggle=\"tab\">Home</a></li>\n    <li class=\"active\"><a href=\"#profile\" data-toggle=\"tab\">Profile</a></li>\n    <li class=\"dropdown\">\n      <a href=\"#\" id=\"myTabDrop1\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n      <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"myTabDrop1\">\n        <li><a href=\"#dropdown1\" tabindex=\"-1\" data-toggle=\"tab\">@fat</a></li>\n        <li><a href=\"#dropdown2\" tabindex=\"-1\" data-toggle=\"tab\">@mdo</a></li>\n      </ul>\n    </li>\n  </ul>\n\n      <div id=\"myTabContent\" class=\"tab-content\">\n    <div class=\"tab-pane fade\" id=\"home\">\n      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n    </div>\n    <div class=\"tab-pane fade active in\" id=\"profile\">\n      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\n    </div>\n    <div class=\"tab-pane fade\" id=\"dropdown1\">\n      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>\n    </div>\n    <div class=\"tab-pane fade\" id=\"dropdown2\">\n      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>\n    </div>\n  </div>\n   /TAB -->\n\n      <!-- TOOLTIP\n      <h2 class=\"page-header\" id=\"tooltip\">Tooltip</h2>\n\n      <div class=\"bs-example-tooltips\">\n        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"\" data-original-title=\"Tooltip on left\">Tooltip on left</button>\n        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Tooltip on top\">Tooltip on top</button>\n        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Tooltip on bottom\">Tooltip on bottom</button>\n        <button type=\"button\" class=\"btn btn-default\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\">Tooltip on right</button>\n      </div>\n       /TOOLTIP -->\n\n      <!-- POPOVER\n      <h2 class=\"page-header\" id=\"popover\">Popover</h2>\n\n      <div class=\"bs-popover-example\">\n        <button type=\"button\" class=\"btn btn-default\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"left\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" data-original-title=\"\" title=\"\">\n          Popover on left\n        </button>\n        <button type=\"button\" class=\"btn btn-default\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" data-original-title=\"\" title=\"\">\n          Popover on top\n        </button>\n        <button type=\"button\" class=\"btn btn-default\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"bottom\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" data-original-title=\"\" title=\"\">\n          Popover on bottom\n        </button>\n        <button type=\"button\" class=\"btn btn-default\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"right\" data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" data-original-title=\"\" title=\"\">\n          Popover on right\n        </button>\n      </div>\n       /POPOVER -->\n\n      <!-- ACCORDION\n      <h2 class=\"page-header\" id=\"accordion\">Accordion</h2>\n\n      <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n            <h4 class=\"panel-title\">\n              <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                Collapsible Group Item #1\n              </a>\n            </h4>\n          </div>\n          <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n            <div class=\"panel-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n            <h4 class=\"panel-title\">\n              <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                Collapsible Group Item #2\n              </a>\n            </h4>\n          </div>\n          <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n            <div class=\"panel-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n            <h4 class=\"panel-title\">\n              <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                Collapsible Group Item #3\n              </a>\n            </h4>\n          </div>\n          <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n            <div class=\"panel-body\">\n              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n            </div>\n          </div>\n        </div>\n      </div>\n       /ACCORDION -->\n\n      <!-- MODAL\n      <h2 class=\"page-header\" id=\"modal\">Modal</h2>\n\n      <div class=\"text-center\">\n        <a data-toggle=\"modal\" href=\"#myModal\" class=\"btn btn-primary btn-lg\">Launch demo modal</a>\n      </div>\n        <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                <h4 class=\"modal-title\">Modal title</h4>\n              </div>\n              <div class=\"modal-body\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n              </div>\n            </div>\n          </div>\n        </div>\n       /MODAL -->\n\n    </div>\n    <br>\n  </div>\n</div>\n\n<script\n  src=\"https://code.jquery.com/jquery-3.1.1.min.js\"\n  integrity=\"sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=\"\n  crossorigin=\"anonymous\"></script>\n\n<!-- Latest compiled and minified JavaScript -->\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\" integrity=\"sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa\" crossorigin=\"anonymous\"></script>\n\n<script type=\"text/javascript\">\n  $(function () {\n    $('[data-toggle=\"tooltip\"]').tooltip();\n    $('[data-toggle=\"popover\"]').popover();\n  });\n</script>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 90%; }\n  table th {\n    font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jcnlzdGFsemhhbmcvRGVza3RvcC9naXRSZXBvL1ZvdGVzQXBwLXN0eWxlZ3VpZGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFVLEVBTVg7RUFQRDtJQUlJLGlCQUFnQixFQUVqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDkwJTtcblxuICB0aCB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvL2ZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var AppComponent = /** @class */ (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.title = 'the VotesApp Style Guide';
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.hide = false;
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    Object.defineProperty(AppComponent.prototype, "username", {
        get: function () {
            return this.loginForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onFormSubmit = function () {
        console.log('submitted');
    };
    AppComponent.prototype.onFileChange = function ($event) {
        console.log('uploaded file');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/crystalzhang/Desktop/gitRepo/VotesApp-styleguide/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map