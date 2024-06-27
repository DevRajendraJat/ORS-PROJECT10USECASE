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
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _job_job_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./job/job-list.component */ "./src/app/job/job-list.component.ts");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "./src/app/employeelist/employeelist.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _clientlist_clientlist_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./clientlist/clientlist.component */ "./src/app/clientlist/clientlist.component.ts");
/* harmony import */ var _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./shoping-cart/shoping-cart.component */ "./src/app/shoping-cart/shoping-cart.component.ts");
/* harmony import */ var _shoping_cartlist_shoping_cartlist_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./shoping-cartlist/shoping-cartlist.component */ "./src/app/shoping-cartlist/shoping-cartlist.component.ts");
/* harmony import */ var _patientlist_patientlist_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./patientlist/patientlist.component */ "./src/app/patientlist/patientlist.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./orderlist/orderlist.component */ "./src/app/orderlist/orderlist.component.ts");
/* harmony import */ var _lead_lead_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./lead/lead.component */ "./src/app/lead/lead.component.ts");
/* harmony import */ var _wish_wish_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./wish/wish.component */ "./src/app/wish/wish.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _leadlist_leadlist_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./leadlist/leadlist.component */ "./src/app/leadlist/leadlist.component.ts");
/* harmony import */ var _prescription_prescription_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./prescription/prescription.component */ "./src/app/prescription/prescription.component.ts");
/* harmony import */ var _prescriptionlist_prescriptionlist_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./prescriptionlist/prescriptionlist.component */ "./src/app/prescriptionlist/prescriptionlist.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./userslist/userslist.component */ "./src/app/userslist/userslist.component.ts");
/* harmony import */ var _followup_followup_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./followup/followup.component */ "./src/app/followup/followup.component.ts");
/* harmony import */ var _followuplist_followuplist_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./followuplist/followuplist.component */ "./src/app/followuplist/followuplist.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/supplier/supplier.component.ts");
/* harmony import */ var _supplierlist_supplierlist_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./supplierlist/supplierlist.component */ "./src/app/supplierlist/supplierlist.component.ts");
/* harmony import */ var _route_route_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./route/route.component */ "./src/app/route/route.component.ts");
/* harmony import */ var _routelist_routelist_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./routelist/routelist.component */ "./src/app/routelist/routelist.component.ts");




























































var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
    },
    {
        path: 'loader',
        component: _loader_loader_component__WEBPACK_IMPORTED_MODULE_31__["LoaderComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'login/:userparams',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'spinner',
        component: _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_32__["SpinnerComponent"]
    },
    {
        path: 'forgotpassword',
        component: _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"]
    },
    {
        path: 'signup',
        component: _login_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"]
    },
    {
        path: 'message',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"],
    },
    {
        path: 'message/:id',
        component: _message_message_component__WEBPACK_IMPORTED_MODULE_10__["MessageComponent"]
    },
    {
        path: 'messagelist',
        component: _message_message_list_component__WEBPACK_IMPORTED_MODULE_11__["MessageListComponent"]
    },
    {
        path: 'marksheet',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheet/:id',
        component: _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_3__["MarksheetComponent"]
    },
    {
        path: 'marksheetlist',
        component: _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_12__["MarksheetListComponent"]
    },
    {
        path: 'marksheetmeritlist',
        component: _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_28__["MarksheetmeritListComponent"]
    },
    {
        path: 'getmarksheet',
        component: _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_29__["GetmarksheetComponent"]
    },
    {
        path: 'college',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'college/:id',
        component: _college_college_component__WEBPACK_IMPORTED_MODULE_5__["CollegeComponent"]
    },
    {
        path: 'collegelist',
        component: _college_college_list_component__WEBPACK_IMPORTED_MODULE_13__["CollegeListComponent"]
    },
    {
        path: 'student',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'student/:id',
        component: _student_student_component__WEBPACK_IMPORTED_MODULE_4__["StudentComponent"]
    },
    {
        path: 'studentlist',
        component: _student_student_list_component__WEBPACK_IMPORTED_MODULE_14__["StudentListComponent"]
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"]
    },
    {
        path: 'user/:id',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_16__["UserComponent"]
    },
    {
        path: 'userlist',
        component: _user_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"]
    },
    {
        path: 'role',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    },
    {
        path: 'rolelist',
        component: _role_role_list_component__WEBPACK_IMPORTED_MODULE_20__["RoleListComponent"]
    },
    {
        path: 'role/:id',
        component: _role_role_component__WEBPACK_IMPORTED_MODULE_17__["RoleComponent"]
    },
    {
        path: 'course',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"]
    },
    {
        path: 'supplier',
        component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_56__["SupplierComponent"]
    },
    {
        path: 'supplier/:id',
        component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_56__["SupplierComponent"]
    },
    {
        path: 'supplierlist',
        component: _supplierlist_supplierlist_component__WEBPACK_IMPORTED_MODULE_57__["SupplierlistComponent"]
    },
    {
        path: 'route',
        component: _route_route_component__WEBPACK_IMPORTED_MODULE_58__["RouteComponent"]
    },
    {
        path: 'route/:id',
        component: _route_route_component__WEBPACK_IMPORTED_MODULE_58__["RouteComponent"]
    },
    {
        path: 'routelist',
        component: _routelist_routelist_component__WEBPACK_IMPORTED_MODULE_59__["RoutelistComponent"]
    },
    {
        path: 'courselist',
        component: _course_course_list_component__WEBPACK_IMPORTED_MODULE_21__["CourseListComponent"]
    },
    {
        path: 'followup',
        component: _followup_followup_component__WEBPACK_IMPORTED_MODULE_54__["FollowupComponent"]
    },
    {
        path: 'followup/:id',
        component: _followup_followup_component__WEBPACK_IMPORTED_MODULE_54__["FollowupComponent"]
    },
    {
        path: 'followuplist',
        component: _followuplist_followuplist_component__WEBPACK_IMPORTED_MODULE_55__["FollowuplistComponent"]
    },
    {
        path: 'course/:id',
        component: _course_course_component__WEBPACK_IMPORTED_MODULE_18__["CourseComponent"]
    },
    {
        path: 'faculty',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__["FacultyComponent"]
    },
    {
        path: 'facultylist',
        component: _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_23__["FacultyListComponent"]
    },
    {
        path: 'faculty/:id',
        component: _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_22__["FacultyComponent"]
    },
    {
        path: 'timetable',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__["TimetableComponent"]
    },
    {
        path: 'timetablelist',
        component: _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_26__["TimetableListComponent"]
    },
    {
        path: 'timetable/:id',
        component: _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_24__["TimetableComponent"]
    },
    {
        path: 'subject',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__["SubjectComponent"]
    },
    {
        path: 'subjectlist',
        component: _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_27__["SubjectListComponent"]
    },
    {
        path: 'order',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_34__["OrderComponent"]
    },
    {
        path: 'order/:id',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_34__["OrderComponent"]
    },
    {
        path: 'orderlist',
        component: _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_45__["OrderlistComponent"]
    },
    {
        path: 'employee',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_38__["EmployeeComponent"]
    },
    {
        path: 'employee/:id',
        component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_38__["EmployeeComponent"]
    },
    {
        path: 'employeelist',
        component: _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_37__["EmployeelistComponent"]
    },
    {
        path: 'ShopingCart',
        component: _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_41__["ShopingCartComponent"]
    },
    {
        path: 'ShopingCartlist',
        component: _shoping_cartlist_shoping_cartlist_component__WEBPACK_IMPORTED_MODULE_42__["ShopingCartlistComponent"]
    },
    {
        path: 'ShopingCart/:id',
        component: _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_41__["ShopingCartComponent"]
    },
    {
        path: 'job',
        component: _job_job_component__WEBPACK_IMPORTED_MODULE_35__["JobComponent"]
    },
    {
        path: 'job/:id',
        component: _job_job_component__WEBPACK_IMPORTED_MODULE_35__["JobComponent"]
    },
    {
        path: 'joblist',
        component: _job_job_list_component__WEBPACK_IMPORTED_MODULE_36__["JobListComponent"]
    },
    {
        path: 'client',
        component: _client_client_component__WEBPACK_IMPORTED_MODULE_39__["ClientComponent"]
    },
    {
        path: 'client/:id',
        component: _client_client_component__WEBPACK_IMPORTED_MODULE_39__["ClientComponent"]
    },
    {
        path: 'clientlist',
        component: _clientlist_clientlist_component__WEBPACK_IMPORTED_MODULE_40__["ClientlistComponent"]
    },
    {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_52__["UsersComponent"]
    },
    {
        path: 'users/:id',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_52__["UsersComponent"]
    },
    {
        path: 'userslist',
        component: _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_53__["UserslistComponent"]
    },
    {
        path: 'prescription',
        component: _prescription_prescription_component__WEBPACK_IMPORTED_MODULE_50__["PrescriptionComponent"]
    },
    {
        path: 'prescription/:id',
        component: _prescription_prescription_component__WEBPACK_IMPORTED_MODULE_50__["PrescriptionComponent"]
    },
    {
        path: 'prescriptionlist',
        component: _prescriptionlist_prescriptionlist_component__WEBPACK_IMPORTED_MODULE_51__["PrescriptionlistComponent"]
    },
    {
        path: 'job',
        component: _job_job_component__WEBPACK_IMPORTED_MODULE_35__["JobComponent"]
    },
    {
        path: 'job/:id',
        component: _job_job_component__WEBPACK_IMPORTED_MODULE_35__["JobComponent"]
    },
    {
        path: 'joblist',
        component: _job_job_list_component__WEBPACK_IMPORTED_MODULE_36__["JobListComponent"]
    },
    {
        path: 'lead',
        component: _lead_lead_component__WEBPACK_IMPORTED_MODULE_46__["LeadComponent"]
    },
    {
        path: 'lead/:id',
        component: _lead_lead_component__WEBPACK_IMPORTED_MODULE_46__["LeadComponent"]
    },
    {
        path: 'leadlist',
        component: _leadlist_leadlist_component__WEBPACK_IMPORTED_MODULE_49__["LeadlistComponent"]
    },
    {
        path: 'patient',
        component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_44__["PatientComponent"]
    },
    {
        path: 'patient/:id',
        component: _patient_patient_component__WEBPACK_IMPORTED_MODULE_44__["PatientComponent"]
    },
    {
        path: 'patientlist',
        component: _patientlist_patientlist_component__WEBPACK_IMPORTED_MODULE_43__["PatientlistComponent"]
    },
    {
        path: 'shoping',
        component: _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_41__["ShopingCartComponent"]
    },
    {
        path: 'shoping/:id',
        component: _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_41__["ShopingCartComponent"]
    },
    {
        path: 'shopinglist',
        component: _shoping_cartlist_shoping_cartlist_component__WEBPACK_IMPORTED_MODULE_42__["ShopingCartlistComponent"]
    },
    {
        path: 'wish',
        component: _wish_wish_component__WEBPACK_IMPORTED_MODULE_47__["WishComponent"]
    },
    {
        path: 'wish/:id',
        component: _wish_wish_component__WEBPACK_IMPORTED_MODULE_47__["WishComponent"]
    },
    {
        path: 'wishlist',
        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_48__["WishlistComponent"]
    },
    {
        path: 'subject/:id',
        component: _subject_subject_component__WEBPACK_IMPORTED_MODULE_19__["SubjectComponent"]
    },
    {
        path: 'myprofile',
        component: _user_myprofile_component__WEBPACK_IMPORTED_MODULE_33__["MyprofileComponent"]
    },
    {
        path: 'file',
        component: _file_file_component__WEBPACK_IMPORTED_MODULE_25__["FileComponent"]
    },
    {
        path: 'changepassword',
        component: _user_changepassword_component__WEBPACK_IMPORTED_MODULE_30__["ChangepasswordComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropbtn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n  }\n  \n  .dropdown {\n    position: relative;\n    display: inline-block;\n  }\n  \n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n  \n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n  }\n  \n  .app {\n    margin: 48px;\n  }\n  \n  .buttons {\n    display: flex;\n    max-width: 500px;\n    justify-content: space-evenly;\n    margin-bottom: 48px;\n\n  }\n\n  \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQiw0Q0FBNEM7SUFDNUMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjs7RUFFckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudCBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuYXBwIHtcbiAgICBtYXJnaW46IDQ4cHg7XG4gIH1cbiAgXG4gIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcblxuICB9XG5cbiAgXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>\n"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: myHttpLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myHttpLoader", function() { return myHttpLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marksheet/marksheet.component */ "./src/app/marksheet/marksheet.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _college_college_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./college/college.component */ "./src/app/college/college.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/forgotpassword.component */ "./src/app/login/forgotpassword.component.ts");
/* harmony import */ var _login_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/signup.component */ "./src/app/login/signup.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./message/message-list.component */ "./src/app/message/message-list.component.ts");
/* harmony import */ var _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./marksheet/marksheet-list.component */ "./src/app/marksheet/marksheet-list.component.ts");
/* harmony import */ var _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./college/college-list.component */ "./src/app/college/college-list.component.ts");
/* harmony import */ var _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./student/student-list.component */ "./src/app/student/student-list.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./user/user-list.component */ "./src/app/user/user-list.component.ts");
/* harmony import */ var _role_role_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./role/role.component */ "./src/app/role/role.component.ts");
/* harmony import */ var _course_course_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./course/course.component */ "./src/app/course/course.component.ts");
/* harmony import */ var _subject_subject_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./subject/subject.component */ "./src/app/subject/subject.component.ts");
/* harmony import */ var _role_role_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./role/role-list.component */ "./src/app/role/role-list.component.ts");
/* harmony import */ var _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./timetable/timetable.component */ "./src/app/timetable/timetable.component.ts");
/* harmony import */ var _course_course_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./course/course-list.component */ "./src/app/course/course-list.component.ts");
/* harmony import */ var _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./faculty/faculty.component */ "./src/app/faculty/faculty.component.ts");
/* harmony import */ var _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./faculty/faculty-list.component */ "./src/app/faculty/faculty-list.component.ts");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./timetable/timetable-list.component */ "./src/app/timetable/timetable-list.component.ts");
/* harmony import */ var _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./subject/subject-list.component */ "./src/app/subject/subject-list.component.ts");
/* harmony import */ var _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./marksheet/marksheetmerit-list.component */ "./src/app/marksheet/marksheetmerit-list.component.ts");
/* harmony import */ var _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./marksheet/getmarksheet.component */ "./src/app/marksheet/getmarksheet.component.ts");
/* harmony import */ var _user_changepassword_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./user/changepassword.component */ "./src/app/user/changepassword.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/loader/loader.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _user_myprofile_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./user/myprofile.component */ "./src/app/user/myprofile.component.ts");
/* harmony import */ var _auth_service_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./auth-service.service */ "./src/app/auth-service.service.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./job/job.component */ "./src/app/job/job.component.ts");
/* harmony import */ var _job_job_list_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./job/job-list.component */ "./src/app/job/job-list.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "./src/app/employeelist/employeelist.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _clientlist_clientlist_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./clientlist/clientlist.component */ "./src/app/clientlist/clientlist.component.ts");
/* harmony import */ var _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./shoping-cart/shoping-cart.component */ "./src/app/shoping-cart/shoping-cart.component.ts");
/* harmony import */ var _shoping_cartlist_shoping_cartlist_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./shoping-cartlist/shoping-cartlist.component */ "./src/app/shoping-cartlist/shoping-cartlist.component.ts");
/* harmony import */ var _patient_patient_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./patient/patient.component */ "./src/app/patient/patient.component.ts");
/* harmony import */ var _patientlist_patientlist_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./patientlist/patientlist.component */ "./src/app/patientlist/patientlist.component.ts");
/* harmony import */ var _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./orderlist/orderlist.component */ "./src/app/orderlist/orderlist.component.ts");
/* harmony import */ var _lead_lead_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./lead/lead.component */ "./src/app/lead/lead.component.ts");
/* harmony import */ var _wish_wish_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./wish/wish.component */ "./src/app/wish/wish.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _leadlist_leadlist_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./leadlist/leadlist.component */ "./src/app/leadlist/leadlist.component.ts");
/* harmony import */ var _prescription_prescription_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./prescription/prescription.component */ "./src/app/prescription/prescription.component.ts");
/* harmony import */ var _prescriptionlist_prescriptionlist_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./prescriptionlist/prescriptionlist.component */ "./src/app/prescriptionlist/prescriptionlist.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./userslist/userslist.component */ "./src/app/userslist/userslist.component.ts");
/* harmony import */ var _followup_followup_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./followup/followup.component */ "./src/app/followup/followup.component.ts");
/* harmony import */ var _followuplist_followuplist_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./followuplist/followuplist.component */ "./src/app/followuplist/followuplist.component.ts");
/* harmony import */ var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./supplier/supplier.component */ "./src/app/supplier/supplier.component.ts");
/* harmony import */ var _supplierlist_supplierlist_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./supplierlist/supplierlist.component */ "./src/app/supplierlist/supplierlist.component.ts");
/* harmony import */ var _route_route_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./route/route.component */ "./src/app/route/route.component.ts");
/* harmony import */ var _routelist_routelist_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./routelist/routelist.component */ "./src/app/routelist/routelist.component.ts");








































































// import { AuthService } from './auth.service';
function myHttpLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _marksheet_marksheet_component__WEBPACK_IMPORTED_MODULE_7__["MarksheetComponent"],
                _marksheet_marksheet_list_component__WEBPACK_IMPORTED_MODULE_21__["MarksheetListComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"],
                _student_student_list_component__WEBPACK_IMPORTED_MODULE_23__["StudentListComponent"],
                _college_college_component__WEBPACK_IMPORTED_MODULE_9__["CollegeComponent"],
                _college_college_list_component__WEBPACK_IMPORTED_MODULE_22__["CollegeListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
                _login_forgotpassword_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
                _login_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignUpComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_18__["MessageComponent"],
                _message_message_list_component__WEBPACK_IMPORTED_MODULE_20__["MessageListComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_24__["UserComponent"],
                _user_user_list_component__WEBPACK_IMPORTED_MODULE_25__["UserListComponent"],
                _role_role_component__WEBPACK_IMPORTED_MODULE_26__["RoleComponent"],
                _role_role_list_component__WEBPACK_IMPORTED_MODULE_29__["RoleListComponent"],
                _course_course_component__WEBPACK_IMPORTED_MODULE_27__["CourseComponent"],
                _subject_subject_component__WEBPACK_IMPORTED_MODULE_28__["SubjectComponent"],
                _subject_subject_list_component__WEBPACK_IMPORTED_MODULE_36__["SubjectListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__["TimetableComponent"],
                _course_course_list_component__WEBPACK_IMPORTED_MODULE_31__["CourseListComponent"],
                _faculty_faculty_component__WEBPACK_IMPORTED_MODULE_32__["FacultyComponent"],
                _faculty_faculty_list_component__WEBPACK_IMPORTED_MODULE_33__["FacultyListComponent"],
                _timetable_timetable_component__WEBPACK_IMPORTED_MODULE_30__["TimetableComponent"],
                _timetable_timetable_list_component__WEBPACK_IMPORTED_MODULE_35__["TimetableListComponent"],
                _marksheet_marksheetmerit_list_component__WEBPACK_IMPORTED_MODULE_37__["MarksheetmeritListComponent"],
                _marksheet_getmarksheet_component__WEBPACK_IMPORTED_MODULE_38__["GetmarksheetComponent"],
                _user_changepassword_component__WEBPACK_IMPORTED_MODULE_39__["ChangepasswordComponent"],
                _loader_loader_component__WEBPACK_IMPORTED_MODULE_40__["LoaderComponent"],
                _file_file_component__WEBPACK_IMPORTED_MODULE_34__["FileComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_41__["NavbarComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_42__["SpinnerComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_43__["FooterComponent"],
                _user_myprofile_component__WEBPACK_IMPORTED_MODULE_44__["MyprofileComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_46__["OrderComponent"],
                _job_job_component__WEBPACK_IMPORTED_MODULE_47__["JobComponent"],
                _job_job_list_component__WEBPACK_IMPORTED_MODULE_48__["JobListComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_49__["EmployeeComponent"],
                _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_50__["EmployeelistComponent"],
                _client_client_component__WEBPACK_IMPORTED_MODULE_51__["ClientComponent"],
                _clientlist_clientlist_component__WEBPACK_IMPORTED_MODULE_52__["ClientlistComponent"],
                _shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_53__["ShopingCartComponent"],
                _shoping_cartlist_shoping_cartlist_component__WEBPACK_IMPORTED_MODULE_54__["ShopingCartlistComponent"],
                _patient_patient_component__WEBPACK_IMPORTED_MODULE_55__["PatientComponent"],
                _patientlist_patientlist_component__WEBPACK_IMPORTED_MODULE_56__["PatientlistComponent"],
                _orderlist_orderlist_component__WEBPACK_IMPORTED_MODULE_57__["OrderlistComponent"],
                _lead_lead_component__WEBPACK_IMPORTED_MODULE_58__["LeadComponent"],
                _wish_wish_component__WEBPACK_IMPORTED_MODULE_59__["WishComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_60__["WishlistComponent"],
                _leadlist_leadlist_component__WEBPACK_IMPORTED_MODULE_61__["LeadlistComponent"],
                _prescription_prescription_component__WEBPACK_IMPORTED_MODULE_62__["PrescriptionComponent"],
                _prescriptionlist_prescriptionlist_component__WEBPACK_IMPORTED_MODULE_63__["PrescriptionlistComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_64__["UsersComponent"],
                _userslist_userslist_component__WEBPACK_IMPORTED_MODULE_65__["UserslistComponent"],
                _followup_followup_component__WEBPACK_IMPORTED_MODULE_66__["FollowupComponent"],
                _followuplist_followuplist_component__WEBPACK_IMPORTED_MODULE_67__["FollowuplistComponent"],
                _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_68__["SupplierComponent"],
                _supplierlist_supplierlist_component__WEBPACK_IMPORTED_MODULE_69__["SupplierlistComponent"],
                _route_route_component__WEBPACK_IMPORTED_MODULE_70__["RouteComponent"],
                _routelist_routelist_component__WEBPACK_IMPORTED_MODULE_71__["RoutelistComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: myHttpLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _auth_service_service__WEBPACK_IMPORTED_MODULE_45__["AuthService"], multi: true
                },
                _http_service_service__WEBPACK_IMPORTED_MODULE_12__["HttpServiceService"],
                _utility_data_validator__WEBPACK_IMPORTED_MODULE_15__["DataValidator"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_19__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/auth-service.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.intercept = function (req, next) {
        if (localStorage.getItem('fname')) {
            req = req.clone({
                setHeaders: {
                    "withCredentials": "true",
                    "name": "Raj",
                }
            });
        }
        console.log(req.headers.get("Authorization") + "------------------->>>");
        return next.handle(req);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/base-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/base-list.component.ts ***!
  \****************************************/
/*! exports provided: BaseListCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseListCtl", function() { return BaseListCtl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.component */ "./src/app/base.component.ts");



var BaseListCtl = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseListCtl, _super);
    function BaseListCtl(endpoint, locator, route) {
        var _this = _super.call(this, endpoint, locator, route) || this;
        _this.endpoint = endpoint;
        _this.locator = locator;
        _this.route = route;
        _this.deleteRecordList = [];
        _this.isMasterSel = false;
        _this.checkList = 0;
        return _this;
    }
    /**
     * Initialize component
     */
    BaseListCtl.prototype.ngOnInit = function () {
        this.preload();
        this.search();
        this.isMasterSel = false;
    };
    BaseListCtl.prototype.display = function () {
        this.search();
    };
    BaseListCtl.prototype.submit = function () {
        this.form.pageNo = 0;
        if (this.form.searchParams.roleId == "undefined" || this.form.searchParams.id == "undefined") {
            this.form.searchParams = {};
            this.search();
        }
        else {
            this.search();
        }
    };
    BaseListCtl.prototype.delete = function (id) {
        _super.prototype.delete.call(this, id, function () {
            this.search();
        });
    };
    BaseListCtl.prototype.next = function () {
        this.form.pageNo++;
        this.display();
        this.isMasterSel = false;
        //  this.searchOperation('previous');
    };
    BaseListCtl.prototype.exit = function () {
        location.reload();
    };
    BaseListCtl.prototype.previous = function () {
        if (this.form.pageNo > 0) {
            this.form.pageNo--;
            //  this.display(); 
            this.isMasterSel = false;
            this.searchOperation('previous');
        }
    };
    BaseListCtl.prototype.checkUncheckAll = function (event) {
        var checked = event.target.checked;
        this.checkboxes.forEach(function (element) {
            element.nativeElement.checked = checked;
        });
    };
    BaseListCtl.prototype.checklistUpdate = function () {
        var _this = this;
        this.isMasterSel = false;
        this.checkList = 0;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked == true) {
                _this.checkList = _this.checkList + 1;
            }
        });
        if (this.checkList == this.form.list.length) {
            this.isMasterSel = true;
        }
    };
    //   deleteMany(){
    //   console.log('delete Many Records starts ');
    //   console.log('this.form.pageNo ' +this.form.pageNo);  
    //   var msg : String =''
    //   this.deleteRecordList.length=0;
    //   console.log('record deleting start ')
    //   var isRecordSelected:boolean = false ;
    //     this.checkboxes.forEach((element) => {
    //       if (element.nativeElement.checked) {
    //         // console.log('record deleting ' + element.nativeElement.id)
    //         this.deleteRecordList.push(element.nativeElement.id);
    //         isRecordSelected = true ;
    //       }
    //     });     
    //     if(isRecordSelected){
    //       console.log('record(s) for delete ' + this.deleteRecordList)        
    //       this.serviceLocator.httpService.get(this.api.deleteMany + "/" + this.deleteRecordList + '?pageNo=' +this.form.pageNo, function (res) {
    //         if (res.success) {
    //             console.log('Inside response success ')
    //           //  this.deleteMany();
    //          //  this.form.message = "Data is deleted";
    //        //  msg ="Data is deleted";
    //         //  this.form.message = res.result.message;
    //           console.log('deleteMany Calling Callback'); 
    //           this.search();  
    //     } else {
    //       this.form.error = true;
    //       this.form.message = res.result.message;
    //     }
    //   });
    //   this.form.message = "Data is deleted" ;
    //   console.log('this.form.pageNo ' +this.form.pageNo);  
    //     }else{
    //       this.form.message = "Select Atleast One Record";
    //         this.form.error = true;
    //     console.log('No record(s) for delete ')
    //   }
    //   console.log('delete Many Records ends ');
    // }
    BaseListCtl.prototype.deleteMany = function () {
        var _this = this;
        console.log('delete Many Records starts ');
        console.log('this.form.pageNo ' + this.form.pageNo);
        this.form.error = false;
        this.deleteRecordList.length = 0;
        console.log('record deleting start ');
        var isRecordSelected = false;
        this.checkboxes.forEach(function (element) {
            if (element.nativeElement.checked) {
                // console.log('record deleting ' + element.nativeElement.id)
                _this.deleteRecordList.push(element.nativeElement.id);
                isRecordSelected = true;
            }
        });
        if (isRecordSelected) {
            console.log('record(s) for delete ' + this.deleteRecordList);
            _super.prototype.deleteMany.call(this, this.deleteRecordList + '?pageNo=' + this.form.pageNo, function () {
                //  this.search();  
            });
        }
        else {
            this.form.message = "Select Atleast One Record";
            this.form.error = true;
            console.log('No record(s) for delete ');
        }
        this.isMasterSel = false;
        console.log('delete Many Records ends ');
    };
    BaseListCtl.prototype.generateReport = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("checkboxes"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], BaseListCtl.prototype, "checkboxes", void 0);
    return BaseListCtl;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/base.component.ts":
/*!***********************************!*\
  !*** ./src/app/base.component.ts ***!
  \***********************************/
/*! exports provided: BaseCtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseCtl", function() { return BaseCtl; });
var BaseCtl = /** @class */ (function () {
    /**
     * Initialize services
     *
     * @param serviceLocator
     * @param route
     */
    function BaseCtl(endpoint, serviceLocator, route) {
        this.endpoint = endpoint;
        this.serviceLocator = serviceLocator;
        this.route = route;
        this.api = {
            endpoint: null,
            get: null,
            save: null,
            search: null,
            delete: null,
            deleteMany: null,
            preload: null,
            report: null,
            address: null
        };
        /**
         * Form contains preload data, error/sucess message
         */
        this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        this.nextList = 0;
        var _self = this;
        _self.initApi(endpoint);
        /**
         * Get primary key from path variale
         */
        serviceLocator.getPathVariable(route, function (params) {
            _self.form.data.id = params["id"];
            console.log('I GOT ID', _self.form.data.id);
        });
    }
    BaseCtl.prototype.initApi = function (ep) {
        this.api.endpoint = ep;
        this.api.get = ep + "/get";
        this.api.save = ep + "/save";
        this.api.search = ep + "/search";
        this.api.delete = ep + "/delete";
        this.api.deleteMany = ep + "/deleteMany";
        this.api.preload = ep + "/preload";
        this.api.report = ep + "/report";
        this.api.address = ep + "/address";
        console.log("API", this.api);
    };
    /**
     * Initialize component
     */
    BaseCtl.prototype.ngOnInit = function () {
        this.preload();
        if (this.form.data.id && this.form.data.id > 0) {
            this.display();
        }
    };
    /**
     * Loded preload data
     */
    BaseCtl.prototype.preload = function () {
        console.log("preload start");
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.preload, function (res) {
            console.log("base list preload", _self.api.preload);
            if (res.success) {
                _self.form.preload = res.result;
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    BaseCtl.prototype.validateForm = function (form) {
    };
    /**
     * Searhs records
     */
    BaseCtl.prototype.search = function () {
        console.log("search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.nextList = res.result.nextList;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.searchOperation = function (operation) {
        console.log("previous/next search start");
        var _self = this;
        console.log("Search Form", _self.form.searchParams);
        this.serviceLocator.httpService.post(_self.api.search + "/" + _self.form.pageNo, _self.form.searchParams, function (res) {
            if (operation == 'next' || operation == 'previous') {
                _self.nextList = res.result.nextList;
                _self.form.message = null;
                _self.form.error = false;
            }
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Contains display logic. It fetches data from database for the primary key
     */
    BaseCtl.prototype.display = function () {
        var _self = this;
        console.log('Inside display method');
        this.serviceLocator.httpService.get(_self.api.get + "/" + _self.form.data.id, function (res) {
            _self.form.data.id = 0;
            if (res.success) {
                _self.populateForm(_self.form.data, res.result.data);
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    /**
     * Populate HTML form data
     * Overridden by child classes.
     *
     * @param form
     * @param data
     */
    BaseCtl.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'formid in base ctl populate form');
    };
    /**
     * Contains submit logic. It saves data
     */
    BaseCtl.prototype.submit = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log("form data going to be submit" + this.form.data);
        //  console.log("form data going to be submit" + this.studentId);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                //  console.log("--------------------.");
                //return _self.form.data.id ;
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data.id;
            console.log('FORM', _self.form);
        });
    };
    BaseCtl.prototype.delete = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.get(_self.api.delete + "/" + id, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    //  callback();  
                    this.search();
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.deleteMany = function (id, callback) {
        var _self = this;
        this.serviceLocator.httpService.post(_self.api.deleteMany + "/" + id, this.form.data, function (res) {
            if (res.success) {
                _self.form.message = "Data is deleted";
                if (callback) {
                    console.log('Response Success and now Calling Callback');
                    _self.form.list = res.result.data;
                    console.log("List ::  ", +res.data);
                    console.log("List Size", _self.form.list.length);
                    //  callback();       
                }
            }
            else {
                _self.form.error = true;
                _self.form.message = res.result.message;
            }
        });
    };
    BaseCtl.prototype.generateReport = function () {
        var _self = this;
        console.log('********* Generating Report ********************');
        this.serviceLocator.httpService.get(_self.api.report, function (res) {
            if (res.success) {
                console.log('*********  Report Generated ********************');
                alert('pass');
            }
            else {
                console.log('********* Error in Generating Report  ********************');
                alert('fail');
            }
        });
    };
    /**
     * Forward to page
     * @param page
     */
    BaseCtl.prototype.forward = function (page) {
        console.log(page + '--->>page value');
        this.serviceLocator.forward(page);
    };
    return BaseCtl;
}());



/***/ }),

/***/ "./src/app/client/client.component.css":
/*!*********************************************!*\
  !*** ./src/app/client/client.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudC9jbGllbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/client/client.component.html":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add Client' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update Client' | translate}}</h2>\n\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'name' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-money-bill grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  placeholder=\"{{'Enter Name' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\n            </div>\n\n\n            <div class=\"form-group\">\n              <label><b>{{'Address' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-money-bill grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"address\" [(ngModel)]=\"form.data.address\" class=\"form-control\"\n                  placeholder=\"{{'Enter Address' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.address}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Priority' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"priority\" [(ngModel)]=\"form.data.priority\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Select Priority' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.Clist\" [value]=\"obj.value\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.priority != null\" class=\"alertRedColor\">{{form.inputerror.priority}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Phone' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-money-bill grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\n                  placeholder=\"{{'Enter phone' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.phone}}</span>\n            </div>\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' | translate}}</button>\n              <button (click)=\"forward('/clientlist')\" type=\"button\" class=\"btn btn-warning\">{{'List' | translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ClientComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientComponent, _super);
    function ClientComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.CLIENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    ClientComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.address);
        flag = flag && validator.isNotNullObject(form.phone);
        flag = flag && validator.isNotNullObject(form.priority);
        return flag;
    };
    ClientComponent.prototype.limitInput = function (event, maxLength) {
        var target = event.target;
        var value = target.value;
        if (value.length >= maxLength) {
            event.preventDefault();
        }
        else if (!/^(1|9)\d{0,9}$/.test(value + event.key)) {
            event.preventDefault();
        }
    };
    ClientComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.phone = data.phone;
        form.prority = data.prority;
    };
    ClientComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/client/client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ClientComponent);
    return ClientComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/clientlist/clientlist.component.css":
/*!*****************************************************!*\
  !*** ./src/app/clientlist/clientlist.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGxpc3QvY2xpZW50bGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/clientlist/clientlist.component.html":
/*!******************************************************!*\
  !*** ./src/app/clientlist/clientlist.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/1024.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{'Client List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        \n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{ 'Search name' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n            (input)=\"validateInput($event, 'name')\">\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n          \n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.address\"\n            placeholder=\"{{ 'Search Address' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n            (input)=\"validateInput($event, 'Address')\">\n          <div *ngIf=\"!isValidAddressInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phone\"\n            placeholder=\"{{'Search Phone' | translate}}\" (input)=\"validateInput($event, 'Phone')\">\n          <div *ngIf=\"!isValidPhoneInput\" class=\"text-danger\">\n            Please enter numbers only.\n          </div>\n        </div>\n\n        <div class=\"col-sm-2\">  \n          <select class=\"form-control\" name=\"priority\" [(ngModel)]=\"form.searchParams.priority\"\n            aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select Priority' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.Clist\" [value]=\"obj.value\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/client')\" type=\"button\" class=\"btn btn-success\">{{'Add Client' |\n            translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete' | translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{'S.No' | translate}}</th>\n              <th>{{'Name' | translate}}</th>\n              <th>{{'Address' | translate}}</th>\n              <th>{{'Phone' | translate}}</th>\n              <th>{{'Priority' | translate}}</th>\n              <th>{{'Edit' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{(form.pageNo * 5) + i + 1}}</td>\n              <td>{{ m.name }}</td>\n              <td>{{ m.address }}</td>\n              <td>{{ m.phone }}</td>\n              <td>{{ m.priority}}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/client/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate\n            }}</button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/clientlist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/clientlist/clientlist.component.ts":
/*!****************************************************!*\
  !*** ./src/app/clientlist/clientlist.component.ts ***!
  \****************************************************/
/*! exports provided: ClientlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientlistComponent", function() { return ClientlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var ClientlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ClientlistComponent, _super);
    function ClientlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.CLIENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidNameInput = true;
        _this.isValidAddressInput = true;
        _this.isValidPhoneInput = true;
        return _this;
    }
    ClientlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'name') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidNameInput = false;
            }
            else {
                this.isValidNameInput = true;
            }
        }
        if (field === 'Address') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidAddressInput = false;
            }
            else {
                this.isValidAddressInput = true;
            }
        }
        if (field === 'Phone') {
            this.isValidPhoneInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
    };
    ClientlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clientlist',
            template: __webpack_require__(/*! ./clientlist.component.html */ "./src/app/clientlist/clientlist.component.html"),
            styles: [__webpack_require__(/*! ./clientlist.component.css */ "./src/app/clientlist/clientlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], ClientlistComponent);
    return ClientlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/college/college-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/college/college-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%;\nbackground: url(assets/files/211.jpg) no-repeat center center;\n background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 70px;\">\n       <div class=\"text-center\">\n          <h1 class=\"text-white font-weight-bold\">{{'College List' | translate }}</h1>\n        </div>\n      </div> \n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{'Search Name' | translate}}\">\n\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-2\">\n\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select name' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\n          </select>\n        </div>\n\n        \n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/college')\" type=\"button\" class=\"btn btn-success\">{{'Add College' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n     \n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No.' | translate }}</th>\n                <th>{{'Name' | translate }}</th>\n                <th>{{'Address' | translate }}</th>\n                <th>{{'Phone' | translate }}</th>\n                <th>{{'City' | translate }}</th>\n                <th>{{'State' | translate }}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.name }} </td>\n                <td> {{ m.address }} </td>\n                <td> {{ m.phoneNo }} </td>\n                <td> {{ m.city }} </td>\n                <td> {{ m.state }} </td>\n                <td>\n                  <a (click)=\"forward( '/college/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n                \n              </tr>\n            </tbody>\n            </table>\n              <table style=\"width: 100%;\">\n                <tr>\n                  <td style=\"width: 50%;\">\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n                }} </button></td>\n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/collegelist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n    \n    \n            \n                <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n                  translate }}</button></td>\n                </tr>\n                </table>\n    \n            \n          \n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/college/college-list.component.ts ***!
  \***************************************************/
/*! exports provided: CollegeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeListComponent", function() { return CollegeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CollegeListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeListComponent, _super);
    function CollegeListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college-list',
            template: __webpack_require__(/*! ./college-list.component.html */ "./src/app/college/college-list.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CollegeListComponent);
    return CollegeListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/college/college.component.css":
/*!***********************************************!*\
  !*** ./src/app/college/college.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29sbGVnZS9jb2xsZWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxuICBjb250ZW50OiBcIipcIjtcdFx0XG4gIGNvbG9yOiByZWQ7XHRcdFxuICAgfVx0XG5cbiAgIC5zdWNjZXNzQ29sb3J7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgfVxuXG4gICAuYnRuLXNwYWNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/college/college.component.html":
/*!************************************************!*\
  !*** ./src/app/college/college.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n</style>\n\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add College' | translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update College' | translate }}</h2>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  placeholder=\"{{'Enter Name' | translate }}\">\n              </div>\n            </div><span class=\"alertRedColor\"> {{form.inputerror.name}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Address' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-map-marker grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"addr\" [(ngModel)]=\"form.data.address\" class=\"form-control\"\n                  placeholder=\"{{'Enter Address' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.address}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'City' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-location-arrow grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"city\" [(ngModel)]=\"form.data.city\" class=\"form-control\"\n                  placeholder=\"{{'Enter City' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.city}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'State' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-address-card grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"state\" [(ngModel)]=\"form.data.state\" class=\"form-control\"\n                  placeholder=\"{{'Enter State' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Phone No.' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phnNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Phone No.' | translate }}\">\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\n            </div>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n\n            <div class=\"pl-3 pt-2\">\n              <button (click)=\"forward('/collegelist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/college/college.component.ts":
/*!**********************************************!*\
  !*** ./src/app/college/college.component.ts ***!
  \**********************************************/
/*! exports provided: CollegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollegeComponent", function() { return CollegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CollegeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CollegeComponent, _super);
    function CollegeComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COLLEGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CollegeComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CollegeComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        return flag;
    };
    CollegeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.address = data.address;
        form.state = data.state;
        form.city = data.city;
        form.phoneNo = data.phoneNo;
        console.log('Populated Form', form);
    };
    CollegeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-college',
            template: __webpack_require__(/*! ./college.component.html */ "./src/app/college/college.component.html"),
            styles: [__webpack_require__(/*! ./college.component.css */ "./src/app/college/college.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CollegeComponent);
    return CollegeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/course/course-list.component.html":
/*!***************************************************!*\
  !*** ./src/app/course/course-list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\"\n style=\"padding-top: 3%;\npadding-bottom: 15%;\nbackground: url(assets/files/wav1.jpg) no-repeat center center;\n background-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\nheight:90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 70px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-white font-weight-bold\">{{'Course List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n\n          <select class=\"form-control\" name=\"courseName\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select CourseName' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n          </select>\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.duration\"\n            placeholder=\"{{'Search Duration' | translate}}\">\n\n        </div>\n\n        \n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/course')\" type=\"button\" class=\"btn btn-success\">{{'Add Course' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n                <th>{{'S.No.' | translate }}</th>\n                <th>{{'Name' | translate }}</th>\n                <th>{{'Duration' | translate }}</th>\n                <th>{{'Description' | translate }}</th>\n                <th>{{'Edit' | translate }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.courseName}} </td>\n                <td> {{ m.duration }} </td>\n                <td> {{ m.description }} </td>\n                <td>\n                  <a (click)=\"forward( '/course/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n\n              </tr>\n              \n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n            }} </button></td>\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/courselist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n        \n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n              translate }}</button></td>\n            </tr>\n            </table>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/course/course-list.component.ts ***!
  \*************************************************/
/*! exports provided: CourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseListComponent", function() { return CourseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var CourseListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseListComponent, _super);
    function CourseListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    CourseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course-list',
            template: __webpack_require__(/*! ./course-list.component.html */ "./src/app/course/course-list.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CourseListComponent);
    return CourseListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/course/course.component.css":
/*!*********************************************!*\
  !*** ./src/app/course/course.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZS9jb3Vyc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/course/course.component.html":
/*!**********************************************!*\
  !*** ./src/app/course/course.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n</style>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:15%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Course' | translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Course' | translate }}</h2>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Course Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"courseName\" [(ngModel)]=\"form.data.courseName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Course Name' | translate }}\">\n              </div>\n            </div><span class=\"alertRedColor\"> {{form.inputerror.courseName}} </span>\n          </div>\n\n\n\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Duration' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\" >\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                </div>\n            \n                <select class=\"form-control\" name=\"duration\"\n                  [(ngModel)]=\"form.data.duration\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\n                  <option [value]=\"1\">1 Year</option>\n                  <option [value]=\"2\">2 Year</option>\n                  <option [value]=\"3\">3 Year</option>\n                  <option [value]=\"4\">4 Year</option>\n                  <option [value]=\"5\">5 Year</option>\n\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.duration}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Description' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                </div>\n                <textarea class=\"form-control\" placeholder=\"{{'Enter Description' | translate }}\" name=\"description\"\n                  [(ngModel)]=\"form.data.description\"></textarea>\n              </div>\n            </div><span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\n          </div>\n\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            <div class=\"pl-3 pt-2\">\n              <button (click)=\"forward('/courselist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List\n                ' | translate }}              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/course/course.component.ts":
/*!********************************************!*\
  !*** ./src/app/course/course.component.ts ***!
  \********************************************/
/*! exports provided: CourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseComponent", function() { return CourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var CourseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CourseComponent, _super);
    function CourseComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.COURSE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    CourseComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    CourseComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.courseName);
        flag = flag && validator.isNotNullObject(form.duration);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    CourseComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseName = data.courseName;
        form.duration = data.duration;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    CourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-course',
            template: __webpack_require__(/*! ./course.component.html */ "./src/app/course/course.component.html"),
            styles: [__webpack_require__(/*! ./course.component.css */ "./src/app/course/course.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CourseComponent);
    return CourseComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar>\n<div>\n    <p class=\"text-info font-weight-bold\" style=\"padding-left: 30%; font-size: 70px;\">WELCOME TO ORS</p>\n    <div style=\"background-image: url(../../assets/files/IndexView.png); \n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        background-size: 100%;\n        padding-bottom:18%;\n        padding-top: 5%;\n        \">\n        <p class=\"text-white font-weight-bold\" style=\"padding-top: 10%; padding-left: 25%; font-size: 20px;\">.</p>\n    </div>\n</div>\n<app-footer></app-footer> -->\n\n\n<style>\n  body{\n  \n  background-image: url('<%=ORSView.APP_CONTEXT%>/img/201.webp');\n      background-size: 100%;\n  \n  \n  }\n  .cl{\n    font-family: Lucida Calligraphy; \n  \n   /*  font-family: Monotype Corsiva;\n    \n   font-family: Footlight MT Light; */\n    }\n  </style>\n<app-navbar></app-navbar>\n\n<div>  \n  <!-- <div class=\"img-fluid\" style=\"background-image: url(../../assets/files/welcomeView2.png); \n      -webkit-background-size: cover;\n      -moz-background-size: cover;\n      -o-background-size: cover;\n      background-size: 100%;\n      padding-bottom:18%;\n      padding-top: 5%;\n      \">\n      <p class=\"text-white font-weight-bold\" style=\"padding-top: 10%; padding-left: 25%; font-size: 20px;\">.</p>\n  </div> -->\n\n  <div class=\"row \" style=\"padding-bottom: 14%;\n   background: url(assets/files/1026.jpg) no-repeat center center;\n   \n  background-attachment: fixed;\n  background-size: cover; width:cover;\n    height: 120vh;\">\n    <p class=\"text-cs1 font-family ml-4 font-weight-bold\" style=\"padding-top: 1%; \n    padding-left: 36%;font-size: 45px; color: rgb(4, 204, 226);\">{{'WELCOME TO ORS' | translate}}</p></div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, #001a33(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .log1 {\n    padding-top: 13%;\n  }\n\n  .input-group-addon {\n    box-shadow: 9px 8px 7px #001a33;\n  }\n\n  .required-field {\n    color: red;\n    font-weight: bold;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n\n  .card-body {\n    padding: 2rem;\n  }\n\n  .input-group-text i {\n    width: 1.5rem;\n  }\n\n  .btn-primary,\n  .btn-success,\n  .btn-warning {\n    width: 100%;\n  }\n\n  .form-control {\n    height: calc(2.25rem + 2px);\n  }\n</style>\n\n<div class=\"row\" style=\"\n  padding: 2% 0;\n  background: url('assets/files/1291.jpg') no-repeat center center;\n  background-attachment: fixed;\n  background-size: cover;\n  width: 100%;\n  height: auto;\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body input-group-addon grad\">\n        <form name=\"userForm\">\n          <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Employee' | translate }}\n          </h2>\n          <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Employee' | translate }}\n          </h2>\n\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{ form.message }}\n          </div>\n\n          <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{ form.message }}\n          </div>\n          <div class=\"form-group\">\n            <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n              </div>\n              <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                placeholder=\"{{ 'Enter Name' | translate }}\">\n            </div>\n            <span *ngIf=\"form.inputerror!=name\" class=\"alertRedColor\">{{form.inputerror.name}}</span>\n          </div> \n          <div>\n            <span class=\"pt-2\"><b>{{'Department' | translate }}</b>\n              <span class=\"required-field\">*</span></span>\n\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n              </div>\n              <select class=\"form-control\" name=\"department\" [(ngModel)]=\"form.data.department\" aria-label=\"ngSelected\">\n                <option [ngValue]=\"\" value=\"undefined\">{{' Select Department' | translate }}</option>\n                <option *ngFor=\"let obj of form.preload.empList\" [value]=\"obj.value\">{{obj.value}}</option>\n              </select>\n            </div>\n          </div>\n          <span *ngIf=\"form.inputerror.department != null\" class=\"alertRedColor\" style=\" color: red;\">\n            {{form.inputerror.department}} </span>\n          <br>\n          <div>\n\n            <span class=\"pt-2\"><b>{{'Date Of Joining' | translate }}</b>\n              <span class=\"required-field\">*</span></span>\n\n\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n              </div>\n              <input type=\"date\" name=\"dateOfJoining\" [value]=\"form.data.dateOfJoining | date:'yyyy-MM-dd'\"\n                (input)=\"form.data.dateOfJoining=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\n                required />\n            </div>\n          </div>\n          <span *ngIf=\"form.inputerror.dateOfJoining != null\" class=\"alertRedColor\" style=\" color: red;\">\n            {{form.inputerror.dateOfJoining}} </span>\n\n          <br>\n          <div class=\"form-group\">\n            <label><b>{{ 'LastEmployerName' | translate }}</b><span class=\"required-field\">*</span></label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-user\"></i></div>\n              </div>\n              <input type=\"text\" name=\"lastEmployerName\" [(ngModel)]=\"form.data.lastEmployerName\" class=\"form-control\"\n                placeholder=\"{{ 'Enter LastEmployerName' | translate }}\">\n            </div>\n            <span *ngIf=\"form.inputerror.lastEmployerName!=null\"\n              class=\"alertRedColor\">{{form.inputerror.lastEmployerName}}</span>\n          </div>\n          <div class=\"row pt-2 pb-3 justify-content-center\">\n            <div class=\"col-md-4\">\n              <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\n                }}</button>\n            </div>\n            <div class=\"col-md-4\">\n              <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\n                }}</button>\n            </div>\n            <div class=\"col-md-4\">\n              <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/employeelist']\">{{ 'List' | translate }}</a>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\"></div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var EmployeeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmployeeComponent, _super);
    function EmployeeComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.EMPLOYEE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    EmployeeComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    EmployeeComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    EmployeeComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    EmployeeComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.priorityId);
        flag = flag && validator.isNotNullObject(form.dateOfJoining);
        console.log(form.productName);
        flag = flag && validator.isNotNullObject(form.department);
        console.log(form.address);
        flag = flag && validator.isNotNullObject(form.lastEmployerName);
        console.log(form.phone);
        return flag;
    };
    EmployeeComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in shoppingcomponent');
        form.title = data.name;
        form.dateOfJoining = data.dateOfJoining;
        form.department = data.department;
        form.lastEmployerName = data.lastEmployerName;
        console.log(data.title + 'Title');
        form.dateofOpening = data.dateofOpening;
        form.experience = data.experience;
        form.status = data.status;
    };
    EmployeeComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    EmployeeComponent.prototype.test = function () {
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/employeelist/employeelist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlbGlzdC9lbXBsb3llZWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/62.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{'Employee List' | translate }}</h1>\n      </div>\n\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{ 'Search name' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n            (input)=\"validateInput($event, 'name')\">\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfJoining\"\n            placeholder=\"{{'Search Date Of Joining' | translate}}\">\n        </div>\n        \n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.lastEmployerName\"\n            placeholder=\"{{ 'Search Last Employer Name' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n            (input)=\"validateInput($event, 'lastEmployerName')\">\n          <div *ngIf=\"!isValidLastEmployerNameInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n\n        </div>\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"department\" [(ngModel)]=\"form.searchParams.department\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select Department' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.empList\" [value]=\"obj.value\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/employee')\" type=\"button\" class=\"btn btn-success\">{{'Add Employee' |\n            translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete' | translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{'S.No' | translate}}</th>\n              <th>{{'NAME' | translate}}</th>\n              <th>{{'DATE OF JOINING' | translate}}</th>\n              <th>{{'DEPARTMENT' | translate}}</th>\n              <th>{{'LAST EMPLOYER NAME' | translate}}</th>\n              <th>{{'Edit' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n          <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" \n             value=\"{{isMasterSel}}\"/></td>\n\n              <td>{{(form.pageNo * 5) + i + 1}}</td>\n\n              <td>{{ m.name }}</td>\n              <td>{{ m.dateOfJoining | date : 'dd-MM-yyyy' }}</td>\n              <td>{{ m.department }}</td>\n              <td>{{ m.lastEmployerName }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/employee/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate\n            }}</button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/employeelist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer> "

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.ts ***!
  \********************************************************/
/*! exports provided: EmployeelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeelistComponent", function() { return EmployeelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var EmployeelistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmployeelistComponent, _super);
    function EmployeelistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.EMPLOYEE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.isValidNameInput = true;
        _this.isValidLastEmployerNameInput = true;
        return _this;
    }
    EmployeelistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'name') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidNameInput = false;
            }
            else {
                this.isValidNameInput = true;
            }
        }
        if (field === 'lastEmployerName') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidLastEmployerNameInput = false;
            }
            else {
                this.isValidLastEmployerNameInput = true;
            }
        }
    };
    EmployeelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeelist',
            template: __webpack_require__(/*! ./employeelist.component.html */ "./src/app/employeelist/employeelist.component.html"),
            styles: [__webpack_require__(/*! ./employeelist.component.css */ "./src/app/employeelist/employeelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EmployeelistComponent);
    return EmployeelistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/endpoint-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/endpoint-service.service.ts ***!
  \*********************************************/
/*! exports provided: EndpointServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndpointServiceService", function() { return EndpointServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EndpointServiceService = /** @class */ (function () {
    function EndpointServiceService() {
        this.SERVER_URL = "http://localhost:8084";
        this.MESSAGE = this.SERVER_URL + "/Message";
        this.USER = this.SERVER_URL + "/User";
        this.ROLE = this.SERVER_URL + "/Role";
        this.COLLEGE = this.SERVER_URL + "/College";
        this.MARKSHEET = this.SERVER_URL + "/Marksheet";
        this.STUDENT = this.SERVER_URL + "/Student";
        this.SUBJECT = this.SERVER_URL + "/Subject";
        this.FACULTY = this.SERVER_URL + "/Faculty";
        this.COURSE = this.SERVER_URL + "/Course";
        this.TIMETABLE = this.SERVER_URL + "/TimeTable";
        this.JASPERREPORT = this.SERVER_URL + "/Jasper";
        this.ORDER = this.SERVER_URL + "/Order";
        this.JOB = this.SERVER_URL + "/Job";
        this.EMPLOYEE = this.SERVER_URL + "/Employee";
        this.CLIENT = this.SERVER_URL + "/Client";
        this.PATIENT = this.SERVER_URL + "/Patient";
        this.LEAD = this.SERVER_URL + "/Lead";
        this.WISH = this.SERVER_URL + "/Wish";
        this.PRES = this.SERVER_URL + "/Prescription";
        this.USERS = this.SERVER_URL + "/Users";
        this.FOLLOWUP = this.SERVER_URL + "/FollowUp";
        this.SUPPLIER = this.SERVER_URL + "/Supplier";
        this.SHOPPING = this.SERVER_URL + "/Shopping";
        this.ROUTE = this.SERVER_URL + "/Route";
    }
    EndpointServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EndpointServiceService);
    return EndpointServiceService;
}());



/***/ }),

/***/ "./src/app/faculty/faculty-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 70px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Faculty List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\n            placeholder=\"{{'Search College' | translate}}\">\n\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\n            placeholder=\"{{'Search Subject' | translate}}\">\n\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n\n        \n\n        \n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/faculty')\" type=\"button\" class=\"btn btn-success\">{{'Add Faculty' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n      \n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No.' | translate}}</th>\n                <th>{{'Name' | translate}}</th>\n                <th>{{'DOB' | translate}}</th>\n                <th>{{'Gender' | translate}}</th>\n                <th>{{'College' | translate}}</th>\n                <th>{{'Course' | translate}}</th>\n                <th>{{'Subject' | translate}}</th>\n                <th>{{'Mobile' | translate}}</th>\n                <th>{{'Email' | translate}}</th>\n                <th>{{'Qualification' | translate}}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td>{{(form.pageNo*5)+i+ 1}} </td>\n                <td>{{ m.firstName }} {{m.lastName}} </td>\n                <td>{{m.dob | date : 'dd-MM-yyyy'}} </td>\n                <td>{{ m.gender }} </td>\n                <td>{{m.collegeName}}</td>\n                <td>{{m.courseName}}</td>\n                <td>{{m.subjectName}}</td>\n                <td>{{ m.phoneNo}}</td>\n                <td>{{m.email}}</td>\n                <td>{{m.qualification}}</td>\n                <td>\n                  <a (click)=\"forward( '/faculty/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash  text-danger\"></i>\n                  </a> -->\n                </td>\n\n              </tr>\n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n            }} </button></td>\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/facultylist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n\n        \n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n              translate }}</button></td>\n            </tr>\n            </table>\n\n            \n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/faculty/faculty-list.component.ts ***!
  \***************************************************/
/*! exports provided: FacultyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyListComponent", function() { return FacultyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var FacultyListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyListComponent, _super);
    function FacultyListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    FacultyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty-list',
            template: __webpack_require__(/*! ./faculty-list.component.html */ "./src/app/faculty/faculty-list.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyListComponent);
    return FacultyListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/faculty/faculty.component.css":
/*!***********************************************!*\
  !*** ./src/app/faculty/faculty.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY3VsdHkvZmFjdWx0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/faculty/faculty.component.html":
/*!************************************************!*\
  !*** ./src/app/faculty/faculty.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n</style>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Faculty'\n            | translate}}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update\n            Faculty' | translate}}</h2>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Email' | translate}} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Qualification' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-graduation-cap grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"qualification\" [(ngModel)]=\"form.data.qualification\" class=\"form-control\"\n                  placeholder=\"{{'Enter Your Qualification' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\n          </div>\n\n\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\"\n                  style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\n            </div>\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'College' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                </div>\n\n\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\n                  style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Course' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-list grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.qualification}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" [(ngModel)]=\"form.data.gender\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\n                  <option value=\"Male\">{{'Male' | translate}} </option>\n                  <option value=\"Female\">{{'Female' | translate}} </option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Mobile No' | translate}} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\n                  required />\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/facultylist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' |\n                translate}}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/faculty/faculty.component.ts":
/*!**********************************************!*\
  !*** ./src/app/faculty/faculty.component.ts ***!
  \**********************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var FacultyComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FacultyComponent, _super);
    function FacultyComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FACULTY, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    FacultyComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    FacultyComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.email);
        console.log(form.email);
        flag = flag && validator.isNotNullObject(form.qualification);
        console.log(form.qualification);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        console.log(form.phoneNo + "in validateForm----------------------------");
        flag = flag && validator.isNotNullObject(form.courseId);
        console.log(form.courseId);
        flag = flag && validator.isNotNullObject(form.collegeId);
        console.log(form.collegeId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        console.log(form.subjectId);
        return flag;
    };
    FacultyComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectId = data.subjectId;
        console.log(form.subjectId + 'subject--');
        form.collegeId = data.collegeId;
        form.courseId = data.courseId;
        console.log(form.courseId + 'course ----');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.email = data.email;
        form.qualification = data.qualification;
        form.gender = data.gender;
        form.dob = data.dob;
        form.phoneNo = data.phoneNo;
        console.log("phoneno----------------" + form.phoneNo);
    };
    FacultyComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    FacultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/faculty/faculty.component.html"),
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/faculty/faculty.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FacultyComponent);
    return FacultyComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/file/file.component.css":
/*!*****************************************!*\
  !*** ./src/app/file/file.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/file/file.component.html":
/*!******************************************!*\
  !*** ./src/app/file/file.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n\n    <div class=\"col-md-12\">\n\n        <h1 class=\"text-primary pt-4\">Upload Image Test Page</h1>\n\n    </div>\n\n</div>\n\n<div class=\"container row pl-4\">\n <div class=\"form-group\">\n        <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n    </div>\n\n    <div class=\"col-md-6\">\n\n        <input type=\"button\" class=\"btn btn-success\" (click)=\"onUpload()\" value=\"upload\">\n\n    </div>\n\n</div>\n\n<hr />\n<!--   \n  <div class=\"container row\">\n  \n      <div class=\"col-md-12\">\n  \n          <div *ngIf=message>{{message}}</div>\n  \n      </div>\n  \n  </div>\n  \n  \n  <div class=\"container row\">\n  \n      <div class=\"col-md-6\">\n\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"image name\" [(ngModel)]=\"imageName\"\n  \n              name=\"name\" />\n  \n      </div>\n  \n      <div class=\"col-md-6\">\n  \n          <input type=\"button\" (click)=\"getImage()\" value=\"Get Image\">\n  \n      </div>\n  \n  </div>\n  \n  \n  <div class=\"container row\">\n  \n      <div class=\"col-md-12\">\n            <div *ngIf=retrievedImage>\n  \n              <img [src]=\"retrievedImage\">\n  \n          </div>\n  \n      </div>\n  \n  </div> -->"

/***/ }),

/***/ "./src/app/file/file.component.ts":
/*!****************************************!*\
  !*** ./src/app/file/file.component.ts ***!
  \****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FileComponent = /** @class */ (function () {
    function FileComponent(formBuilder, httpClient) {
        this.formBuilder = formBuilder;
        this.httpClient = httpClient;
        this.fileToUpload = null;
    }
    FileComponent.prototype.ngOnInit = function () { };
    FileComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    FileComponent.prototype.onUpload = function () {
        var _this = this;
        this.onSubmit(this.fileToUpload).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    FileComponent.prototype.onSubmit = function (fileToUpload) {
        var formData = new FormData();
        formData.append('file', fileToUpload);
        return this.httpClient.post("http://localhost:8080/User/profilePic/1", formData);
    };
    FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file',
            template: __webpack_require__(/*! ./file.component.html */ "./src/app/file/file.component.html"),
            styles: [__webpack_require__(/*! ./file.component.css */ "./src/app/file/file.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./src/app/followup/followup.component.css":
/*!*************************************************!*\
  !*** ./src/app/followup/followup.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGxvd3VwL2ZvbGxvd3VwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/followup/followup.component.html":
/*!**************************************************!*\
  !*** ./src/app/followup/followup.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add FollowUp' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update FollowUp' | translate}}</h2>\n\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Patient' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"patient\" [(ngModel)]=\"form.data.patient\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Select patient' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.Flist\" [value]=\"obj.value\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.patient != null\" class=\"alertRedColor\">{{form.inputerror.patient}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Doctor' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"doctor\" [(ngModel)]=\"form.data.doctor\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Select Doctor' | translate }}</option>\n                  <option value=\"Sachin\">Sachin</option>\n                  <option value=\"Naman\">Naman</option>\n                  <option value=\"Kalpesh\">Kalpesh</option>\n                  <option value=\"Nitesh\">Nitesh</option>\n                  <option value=\"Pranav\">Pranav</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.doctor != null\" class=\"alertRedColor\">{{form.inputerror.doctor}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Visit Date' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></span>\n                </div>\n                <input type=\"date\" name=\"visitDate\" [value]=\"form.data.visitDate | date:'yyyy-MM-dd'\"\n                  (input)=\"form.data.visitDate=parseDate($event.target.value)\" class=\"form-control\" required>\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.visitDate}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Fees' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></span>\n                </div>\n                <input type=\"number\" name=\"fees\" [(ngModel)]=\"form.data.fees\" class=\"form-control\"\n                  placeholder=\"{{'Enter Fees' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.fees}}</span>\n            </div>\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"!validate()\"\n                class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' |\n                translate}}</button>\n              <button (click)=\"forward('/followuplist')\" type=\"button\" class=\"btn btn-warning\">{{'List' |\n                translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/followup/followup.component.ts":
/*!************************************************!*\
  !*** ./src/app/followup/followup.component.ts ***!
  \************************************************/
/*! exports provided: FollowupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowupComponent", function() { return FollowupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var FollowupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FollowupComponent, _super);
    function FollowupComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.FOLLOWUP, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    FollowupComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.patient);
        flag = flag && validator.isNotNullObject(form.doctor);
        flag = flag && validator.isNotNullObject(form.visitDate);
        flag = flag && validator.isNotNullObject(form.fees);
        return flag;
    };
    FollowupComponent.prototype.limitInput = function (event, maxLength) {
        var target = event.target;
        var value = target.value;
        if (value.length >= maxLength) {
            event.preventDefault();
        }
        else if (!/^(1|9)\d{0,9}$/.test(value + event.key)) {
            event.preventDefault();
        }
    };
    FollowupComponent.prototype.limitInputw = function (event, maxLength) {
        var target = event.target;
        var value = target.value;
        if (value.length >= maxLength) {
            event.preventDefault();
        }
        else if (!/^[a-zA-Z]*$\d{0,15}$/.test(value + event.key)) {
            event.preventDefault();
        }
    };
    FollowupComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.patient = data.patient;
        console.log(form.quantity + " inside populateForm method");
        form.doctor = data.doctor;
        form.visitDate = data.visitDate;
        form.fees = data.fees;
        //let ndate = new Date(data.dob);
        //console.log(form.dob + 'date ------',ndate)
    };
    FollowupComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    FollowupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-followup',
            template: __webpack_require__(/*! ./followup.component.html */ "./src/app/followup/followup.component.html"),
            styles: [__webpack_require__(/*! ./followup.component.css */ "./src/app/followup/followup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FollowupComponent);
    return FollowupComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/followuplist/followuplist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/followuplist/followuplist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGxvd3VwbGlzdC9mb2xsb3d1cGxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/followuplist/followuplist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/followuplist/followuplist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/1024.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{'followup List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        \n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.visitDate\"\n            placeholder=\"{{'Search dateOfVisit' | translate}}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.fees\"\n            placeholder=\"{{'Search Fees' | translate}}\" (input)=\"validateInput($event, 'fees')\">\n          <div *ngIf=\"!isValidFeesInput\" class=\"text-danger\">\n            Please enter numbers only.\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"patient\" [(ngModel)]=\"form.searchParams.patient\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select patient' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.Flist\" [value]=\"obj.value\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"doctor\" [(ngModel)]=\"form.searchParams.doctor\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select Doctor' | translate }}</option>\n            <option value=\"Sachin\">Sachin</option>\n            <option value=\"Naman\">Naman</option>\n            <option value=\"Kalpesh\">Kalpesh</option>\n            <option value=\"Nitesh\">Nitesh</option>\n            <option value=\"Pranav\">Pranav</option>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/followup')\" type=\"button\" class=\"btn btn-success\">{{'Add FollowUp' |\n            translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete' | translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{'S.No' | translate}}</th>\n              <th>{{'Patient' | translate}}</th>\n              <th>{{'Doctor' | translate}}</th>\n              <th>{{'visitDate' | translate}}</th>\n              <th>{{'Fees' | translate}}</th>\n              <th>{{'Edit' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{(form.pageNo * 5) + i + 1}}</td>\n              <td>{{ m.patient }}</td>\n              <td>{{ m.doctor }}</td>\n              <td>{{ m.visitDate | date:'dd-MM-yyyy' }}</td>\n              <td>{{ m.fees }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/followup/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate\n            }}</button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/followuplist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/followuplist/followuplist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/followuplist/followuplist.component.ts ***!
  \********************************************************/
/*! exports provided: FollowuplistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowuplistComponent", function() { return FollowuplistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var FollowuplistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FollowuplistComponent, _super);
    function FollowuplistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.FOLLOWUP, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.isValidFeesInput = true;
        return _this;
    }
    FollowuplistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'fees') {
            this.isValidFeesInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
    };
    FollowuplistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-followuplist',
            template: __webpack_require__(/*! ./followuplist.component.html */ "./src/app/followuplist/followuplist.component.html"),
            styles: [__webpack_require__(/*! ./followuplist.component.css */ "./src/app/followuplist/followuplist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], FollowuplistComponent);
    return FollowuplistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\n    position: fixed;\n    \n    bottom: 0px;\n    height: 40px;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTs7SUFFZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgXG4gICAgYm90dG9tOiAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-center \"\n style=\"background: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\">\n  <!-- Copyright -->\n  <div class=\"text-center pt-2 pb-2 text-light\" >\n    &copy; {{'COPYRIGHT' | translate}}\n    <a class=\"text-light\" href=\"\">{{'NCS PVT. LTD' | translate}}</a>\n  </div>\n  <!-- Copyright -->\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.form = {
            message: '',
            error: false
        };
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: '',
        };
    }
    HttpServiceService.prototype.get = function (endpoint, callback) {
        var _this = this;
        return this.httpClient.get(endpoint, { withCredentials: true }).subscribe(function (data) {
            console.log('Data :: ' + data);
            callback(data);
        }, function (error) {
            console.log('ORS Error--', error);
            if (error.status === 401) {
                localStorage.clear();
                _this.router.navigate(['/login'], {
                    queryParams: { errorMessage: error.error.error },
                });
            }
        });
    };
    HttpServiceService.prototype.post = function (endpoint, bean, callback) {
        var _this = this;
        return this.httpClient.post(endpoint, bean, { withCredentials: true }).subscribe(function (data) {
            console.log(data);
            callback(data);
        }, function (error) {
            console.log('ORS Error--', error);
            if (error.status === 401) {
                localStorage.clear();
                _this.router.navigate(['/login'], {
                    queryParams: { errorMessage: error.error.error },
                });
            }
        });
        "";
    };
    HttpServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/job/job-list.component.css":
/*!********************************************!*\
  !*** ./src/app/job/job-list.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9qb2ItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/job/job-list.component.html":
/*!*********************************************!*\
  !*** ./src/app/job/job-list.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/62.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{'Job List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.title\"\n            placeholder=\"{{ 'Search Title' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n            (input)=\"validateInput($event, 'title')\">\n          <div *ngIf=\"!isValidTitleInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateofOpening\"\n            placeholder=\"{{'Search Date Of opening' | translate}}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"number\" class=\"form-control\" [(ngModel)]=\"form.searchParams.experience\"\n            placeholder=\"{{'Search Experience' | translate}}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.searchParams.status\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select Status' | translate }}</option>\n           \n            <option value=\"Open   \">{{'Open' | translate }} </option>\n            <option value=\"Close\">{{'Close' | translate }} </option>\n            <option value=\"Hold\">{{'Hold' | translate }} </option>>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/job')\" type=\"button\" class=\"btn btn-success\">{{'Add Job' |\n            translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete' | translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{'S.No' | translate}}</th>\n              <th>{{'TITLE' | translate}}</th>\n              <th>{{'DATE OF OPENING' | translate}}</th>\n              <th>{{'EXPERIENCE' | translate}}</th>\n              <th>{{'STATUS' | translate}}</th>\n              <th>{{'Edit' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n          <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" \n             value=\"{{isMasterSel}}\"/></td>\n\n              <td>{{(form.pageNo * 5) + i + 1}}</td>\n\n              <td>{{ m.title }}</td>\n              <td>{{ m.dateofOpening | date : 'dd-MM-yyyy' }}</td>\n              <td>{{ m.experience }}</td>\n              <td>{{ m.status }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/job/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate\n            }}</button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/joblist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer> "

/***/ }),

/***/ "./src/app/job/job-list.component.ts":
/*!*******************************************!*\
  !*** ./src/app/job/job-list.component.ts ***!
  \*******************************************/
/*! exports provided: JobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListComponent", function() { return JobListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var JobListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JobListComponent, _super);
    function JobListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.JOB, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.isValidTitleInput = true;
        return _this;
    }
    JobListComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'title') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidTitleInput = false;
            }
            else {
                this.isValidTitleInput = true;
            }
        }
    };
    JobListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-list',
            template: __webpack_require__(/*! ./job-list.component.html */ "./src/app/job/job-list.component.html"),
            styles: [__webpack_require__(/*! ./job-list.component.css */ "./src/app/job/job-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], JobListComponent);
    return JobListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/job/job.component.css":
/*!***************************************!*\
  !*** ./src/app/job/job.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi9qb2IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/job/job.component.html":
/*!****************************************!*\
  !*** ./src/app/job/job.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add Job' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update Job' | translate}}</h2>\n\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n\n            <div>\n              <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\n                <span class=\"required-field\">*</span></span>\n  \n  \n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"status\" id=\"status\" [(ngModel)]=\"form.data.status\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'select Status' | translate }}</option>\n                  <option value=\"Open   \">{{'Open' | translate }} </option>\n                  <option value=\"Close\">{{'Close' | translate }} </option>\n                  <option value=\"Hold\">{{'Hold' | translate }} </option>\n                </select>\n              </div>\n            </div> <span *ngIf=\"form.inputerror!=status\" class=\"alertRedColor\">{{form.inputerror.status}}</span>\n  \n            <div><br>\n  \n              <span class=\"pt-2\"><b>{{'Date Of Opening' | translate }}</b>\n                <span class=\"required-field\">*</span></span>\n  \n  \n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dateofOpening\" [value]=\"form.data.dateofOpening | date:'yyyy-MM-dd'\"\n                  (input)=\"form.data.dateofOpening=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\n                  required />\n              </div>\n            </div>\n            <span *ngIf=\"form.inputerror.dateofOpening != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{form.inputerror.dateofOpening}} </span>\n            <br>\n  \n  \n            <div class=\"form-group\">\n              <label><b>{{ 'Experience' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"experience\" [(ngModel)]=\"form.data.experience\" class=\"form-control\"\n                  placeholder=\"{{ 'Enter EXPERIENCE' | translate }}\">\n              </div>\n              <span *ngIf=\"form.inputerror!=experience\" class=\"alertRedColor\">{{form.inputerror.experience}}</span>\n            </div>\n  \n            <div class=\"form-group\">\n              <label><b>{{ 'Title' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"title\" [(ngModel)]=\"form.data.title\" class=\"form-control\"\n                  placeholder=\"{{ 'Enter Title' | translate }}\">\n              </div>\n              <span *ngIf=\"form.inputerror!=title\" class=\"alertRedColor\">{{form.inputerror.title}}</span>\n            </div>\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' | translate}}</button>\n              <button (click)=\"forward('/joblist')\" type=\"button\" class=\"btn btn-warning\">{{'List' | translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/job/job.component.ts":
/*!**************************************!*\
  !*** ./src/app/job/job.component.ts ***!
  \**************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var JobComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](JobComponent, _super);
    function JobComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.JOB, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    ;
    JobComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.title);
        flag = flag && validator.isNotNullObject(form.dateofOpening);
        flag = flag && validator.isNotNullObject(form.experience);
        flag = flag && validator.isNotNullObject(form.status);
        return flag;
    };
    JobComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.title = data.title;
        form.dateofOpening = data.dateofOpening;
        form.experience = data.experience;
        form.status = data.status;
    };
    JobComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! ./job.component.html */ "./src/app/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.css */ "./src/app/job/job.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], JobComponent);
    return JobComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/lead/lead.component.css":
/*!*****************************************!*\
  !*** ./src/app/lead/lead.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWQvbGVhZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lead/lead.component.html":
/*!******************************************!*\
  !*** ./src/app/lead/lead.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add Lead' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update Lead' | translate}}</h2>\n\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div>\n              <span class=\"pt-2\"><b>{{ 'Date' | translate }}</b><span class=\"required-field\">*</span></span>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\n                </div>\n                <input type=\"date\" name=\"date\" [value]=\"form.data.date | date:'yyyy-MM-dd'\"\n                  (input)=\"form.data.date = parseDate($event.target.value)\" class=\"form-control form-control-sm\"\n                  required />\n              </div>\n            </div>\n            <span *ngIf=\"form.inputerror.date != null\" class=\"alertRedColor\" style=\"color: red;\">\n              {{ form.inputerror.date }}\n            </span>\n\n            <div class=\"form-group\">\n              <label><b>{{ ' ContacName' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"ContacName\" [(ngModel)]=\"form.data.contacName\" class=\"form-control\"\n                  placeholder=\"{{ 'Enter Name' | translate }}\">\n              </div> <span *ngIf=\"form.inputerror!=contacName\"\n                class=\"alertRedColor\">{{form.inputerror.contacName}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{ ' Mobile' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i></div>\n                </div>\n                <input type=\"text\" name=\"Mobile\" maxlength=\"10\" [(ngModel)]=\"form.data.mobile\" class=\"form-control\"\n                  placeholder=\"{{ 'Enter mobileNo' | translate }}\">\n              </div> <span *ngIf=\"form.inputerror!=mobile\" class=\"alertRedColor\">{{form.inputerror.mobile}}</span>\n            </div>\n\n            <div class=\"form-group\"><b>{{'Status' | translate }}</b>\n              <label><b>{{ ' Status' | translate }}</b><span class=\"required-field\">*</span></label>\n\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.data.status\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Status' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.Llist\" [value]=\"obj.value\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span *ngIf=\"form.inputerror.status != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{form.inputerror.status}} </span>\n\n\n\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"!validate()\"\n                class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' |\n                translate}}</button>\n              <button (click)=\"forward('/leadlist')\" type=\"button\" class=\"btn btn-warning\">{{'List' |\n                translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/lead/lead.component.ts":
/*!****************************************!*\
  !*** ./src/app/lead/lead.component.ts ***!
  \****************************************/
/*! exports provided: LeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadComponent", function() { return LeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var LeadComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LeadComponent, _super);
    function LeadComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.LEAD, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    LeadComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.date);
        flag = flag && validator.isNotNullObject(form.contacName);
        flag = flag && validator.isNotNullObject(form.mobile);
        flag = flag && validator.isNotNullObject(form.status);
        return flag;
    };
    LeadComponent.prototype.limitInput = function (event, maxLength) {
        var target = event.target;
        var value = target.value;
        if (value.length >= maxLength) {
            event.preventDefault();
        }
        else if (!/^(1|9)\d{0,9}$/.test(value + event.key)) {
            event.preventDefault();
        }
    };
    LeadComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.date = data.date;
        form.contacName = data.contacName;
        form.mobile = data.mobile;
        form.status = data.status;
    };
    LeadComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    LeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lead',
            template: __webpack_require__(/*! ./lead.component.html */ "./src/app/lead/lead.component.html"),
            styles: [__webpack_require__(/*! ./lead.component.css */ "./src/app/lead/lead.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], LeadComponent);
    return LeadComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/leadlist/leadlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/leadlist/leadlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWRsaXN0L2xlYWRsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/leadlist/leadlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/leadlist/leadlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/1024.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{'Lead List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.date\"\n            placeholder=\"{{'Search Date' | translate}}\">\n        </div>\n     \n        \n          <div class=\"col-sm-2\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.contacName\"\n              placeholder=\"{{'Search ContacName' | translate}}\" (input)=\"validateInput($event, 'contacName')\">\n            <div *ngIf=\"!isValidContacNameInput\" class=\"text-danger\">\n              Please enter numbers only.\n            </div>\n          </div>\n          \n       \n          <div class=\"col-sm-2\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\"\n              placeholder=\"{{ 'Search Mobile No' | translate }}\"\n              pattern=\"[a-zA-Z0-9\\s]*\"\n              (input)=\"validateInput($event, 'mobile')\"> \n            <div *ngIf=\"!isValidMobileInput\" class=\"text-danger\">\n              Please enter letters, numbers, and spaces only.\n            </div>\n          </div>\n          \n        <div class=\"col-sm-2\">  \n          <select class=\"form-control\" name=\"status\" [(ngModel)]=\"form.searchParams.status\"\n            aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select Status' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.Llist\" [value]=\"obj.value\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/lead')\" type=\"button\" class=\"btn btn-success\">{{'Add Lead' |\n            translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete' | translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{'S.No' | translate}}</th>\n              <th>{{'Date' | translate}}</th>\n              <th>{{'contacName' | translate}}</th>\n              <th>{{'mobile' | translate}}</th>\n              <th>{{'Status' | translate}}</th>\n              <th>{{'Edit' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{(form.pageNo * 5) + i + 1}}</td>\n              <td>{{ m.date | date:'dd-MM-yyyy' }}</td>\n              <td>{{ m.contacName }}</td>\n              <td>{{ m.mobile }}</td>\n              <td>{{ m.status }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/lead/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate\n            }}</button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/leadlist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/leadlist/leadlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/leadlist/leadlist.component.ts ***!
  \************************************************/
/*! exports provided: LeadlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadlistComponent", function() { return LeadlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var LeadlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LeadlistComponent, _super);
    function LeadlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.LEAD, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.isValidMobileInput = true;
        _this.isValidContacNameInput = true;
        return _this;
    }
    LeadlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
        if (field === 'contacName') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidContacNameInput = false;
            }
            else {
                this.isValidContacNameInput = true;
            }
        }
    };
    LeadlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leadlist',
            template: __webpack_require__(/*! ./leadlist.component.html */ "./src/app/leadlist/leadlist.component.html"),
            styles: [__webpack_require__(/*! ./leadlist.component.css */ "./src/app/leadlist/leadlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], LeadlistComponent);
    return LeadlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/*!*********************************************!*\
  !*** ./src/app/loader/loader.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/*!**********************************************!*\
  !*** ./src/app/loader/loader.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div id=\"loader\">\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"dot\"></div>\n      <div class=\"loading\"></div>\n    </div>\n\n    <p class=\"spinner-message\" *ngIf=\"message && message !== ''\">\n      {{message}}\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/*!********************************************!*\
  !*** ./src/app/loader/loader.component.ts ***!
  \********************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/loader/loader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/login/forgotpassword.component.html":
/*!*****************************************************!*\
  !*** ./src/app/login/forgotpassword.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar ></app-navbar>\n<style>\n  .grad{\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n  background-repeat: no repeat;\n  background-size: 100%;\n  padding-bottom: 10px;\n  } \n  \n</style>\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom:15%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n\n  <div class=\"col-sm-4\"></div>\n\n  <div class=\"col-sm-4\">\n    \n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form #loginForm=\"ngForm\">\n          \n          <div style=\"text-align: center;\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Forgot Password' | translate}}</h1>\n          </div>\n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"form.error == false && form.message == 'Password has been sent to email id'\"\n            class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\n              </div>\n            </div>\n          </div>\n\n          <span class=\"alertRedColor\">{{inputerror.loginId}}</span>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <button (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Reset My Password' | translate}}</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  \n</div>\n  </div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/forgotpassword.component.ts":
/*!***************************************************!*\
  !*** ./src/app/login/forgotpassword.component.ts ***!
  \***************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");





var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(httpService, dataValidator, router) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8084/Auth";
        this.form = {
            error: false,
            message: "",
            loginId: '',
        };
        this.inputerror = {};
        this.message = '';
    }
    ForgotPasswordComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        return flag;
    };
    /**
     * Initialize component
     */
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.get(_self.endpoint + "/fp/" + this.form.loginId, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.inputerror = {};
            console.log(res.result.message + '------>msg');
            if (res.result.message) {
                _self.form.message = res.result.message;
                console.log(_self.form.message + '-------> msg in sucess');
            }
            _self.form.error = !res.success;
            console.log(_self.form.error + '-----------> msg in self.form.error in res');
            if (_self.form.error && res.result.inputerror) {
                _self.inputerror = res.result.inputerror;
                console.log(_self.inputerror + '-----------> msg in self.form.error');
            }
        });
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/login/forgotpassword.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtHQUNUOzs7QUFFQTtJQUNDLFlBQVk7R0FDYjs7O0FBRUE7SUFDQyxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0UmVkQ29sb3Ige1xuICAgIGNvbG9yOiByZWQ7XG59XG5cblxuLnJlcXVpcmVkLWZpZWxkOjphZnRlciB7IFx0XHRcbiAgY29udGVudDogXCIqXCI7XHRcdFxuICBjb2xvcjogcmVkO1x0XHRcbiAgIH1cdFxuXG4gICAuc3VjY2Vzc0NvbG9ye1xuICAgIGNvbG9yOiBncmVlbjtcbiAgIH1cblxuICAgLmJ0bi1zcGFjZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar #one></app-navbar>\n<style>\n  #nnn{\n    background: none;\n    border: none;\n  }\n  \n  </style>\n  \n  \n<style type=\"text/css\">\n  .log1 {\n    padding-top: 13%; \n  }\n  \n  .input-group-addon {\n    box-shadow: 9px 8px 7px #001a33;\n    \n  }\n  .grad{\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n  background-repeat: no repeat;\n  background-size: 100%;\n  padding-bottom: 10px;\n    \n  }\n  </style>\n<div class=\"row \" style=\"padding-top: 8%; padding-bottom: 8%;\nbackground: url(assets/files/Login3.jpg) no-repeat center center;\n   background-attachment: fixed;\nbackground-size: 225vh;width:auto;\n  height: 105vh;\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card input-group-addon grad\">\n      <div class=\"card-body\">\n        <form>\n          <div style=\"text-align: center;\">\n            <h1 class=\"text-primary font-weight-bold\">{{'Login' | translate}}</h1>\n          </div>\n          <input type=\"hidden\" name=\"log\n          inUrl\" [(ngModel)]=\"form.loginUrl\" class=\"form-control\">\n          <div *ngIf=\"form.error && form.message == 'Invalid ID or Password'\"\n            class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{'Invalid ID or Password' | translate}}\n          </div>\n          <div *ngIf=\"form.error==false && form.message == 'Logout Successfully'\"\n            class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{'Log out successfully' | translate}}\n          </div>\n\n          <div *ngIf=\"form.message == 'OOPS! Your session has been expired'\"\n            class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{'OOPS! Your session has been expired' | translate}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Email Id' | translate}}</b>\n              <span class=\"required-field\"></span>\n            </span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id' | translate}}\">\n              </div>\n            </div>\n           <span  *ngIf=\"inputerror.loginId != null\"\n          class=\"alertRedColor\" style=\" color: red;\" > {{'loginId'| translate}} </span> \n          </div>\n           <!-- <span class=\"alertRedColor\">{{inputerror.loginId}}</span>  -->\n          <div style=\"padding-top:3%\">\n            <span><b>{{'Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text \"></i> </div>\n                </div>\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password' | translate}}\">\n              </div>\n            </div>\n            <span  *ngIf=\"inputerror.password != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span> \n\n            <!-- <span class=\"alertRedColor\">{{inputerror.password}}</span> -->\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n              <button (click)=\"signIn()\" class=\"btn btn-md btn-success\">\n                {{'Sign in' | translate}}</button>\n            </div>\n            &nbsp;&nbsp;&nbsp;\n            <div class=\"pl-3 pt-2\">\n              <a class=\"btn btn-warning\" [routerLink]=\"['/forgotpassword']\">{{'Forgot Password' | translate}}</a>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(httpService, dataValidator, router, cookieService, route, serviceLocator) {
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.cookieService = cookieService;
        this.route = route;
        this.serviceLocator = serviceLocator;
        this.endpoint = "http://localhost:8084/Auth";
        this.form = {
            error: false,
            message: '',
            loginId: '',
            password: '',
            loginUrl: '',
        };
        this.inputerror = {};
        this.message = '';
        this.userparams = {
            url: '',
            sessionExpiredMsg: '',
            methodType: '',
        };
    }
    /**
     * Initialize component
     */
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.form.message = params['errorMessage'] || null;
            console.log("mas>>>>>>>>>>>>>>>gg.>>", _this.form.message);
        });
        //this.userSessionCheck();
        if (this.httpService.form.error == true) {
            this.form.message = this.httpService.form.message;
            this.form.error = this.httpService.form.error;
        }
        var a = '';
        this.serviceLocator.getPathVariable(this.route, function (params) {
            a = params["userparams"];
            console.log('I GOT ID, its logout', a);
        });
        if (a == 'true') {
            this.form.message = 'Logout Successfully';
        }
    };
    LoginComponent.prototype.userSessionCheck = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            //  this.userList = params.get('userparams');    
            //  this.userparams=JSON.parse(this.route.snapshot.paramMap.get('userparams'));
            _this.userparams = JSON.parse(_this.route.snapshot.queryParamMap.get('userparams'));
            if (_this.userparams != null) {
                _this.form.message = _this.userparams.sessionExpiredMsg;
                _this.form.loginUrl = _this.userparams.url;
                //  console.log('URL-----------------------' + this.userparams.url);
                //  console.log('Message-----------------------' + this.userparams.sessionExpiredMsg);
                //  console.log('Method Type-----------------------' + this.userparams.methodType);
            }
        });
        if (this.form.message != null) {
            this.form.error = true;
        }
    };
    LoginComponent.prototype.validate = function () {
        var flag = true;
        flag = flag && this.dataValidator.isNotNull(this.form.loginId);
        console.log(this.form.loginId);
        flag = flag && this.dataValidator.isNotNull(this.form.password);
        console.log(this.form.password);
        return flag;
    };
    LoginComponent.prototype.signIn = function () {
        var _self = this;
        this.form.error = false;
        var requestedUrl = this.httpService.userparams.url; //to get the URI
        console.log('signIn----', this.form);
        this.httpService.post(this.endpoint + "/login", this.form, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.inputerror = {};
            //_self.form.loginId = res.result.loginId;
            if (_self.dataValidator.isNotNullObject(res.result.message)) {
                _self.form.message = res.result.message;
            }
            _self.form.error = !res.success;
            if (_self.dataValidator.isNotNullObject(res.result.inputerror)) {
                _self.inputerror = res.result.inputerror;
            }
            if (_self.dataValidator.isTrue(res.success)) {
                localStorage.setItem("loginId", res.result.loginId);
                localStorage.setItem("role", res.result.role);
                localStorage.setItem("fname", res.result.fname);
                localStorage.setItem("lname", res.result.lname);
                localStorage.setItem("userid", res.result.data.id);
                //   console.log(res.result.data.id + 'sessionId set ----');
                //   console.log(res.result.token + '  Token set ----');
                if (requestedUrl != null && requestedUrl != '') {
                    _self.router.navigateByUrl(requestedUrl);
                }
                else {
                    _self.router.navigateByUrl('dashboard');
                }
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_locator_service__WEBPACK_IMPORTED_MODULE_6__["ServiceLocatorService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/signup.component.html":
/*!*********************************************!*\
  !*** ./src/app/login/signup.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n   .grad{\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n  background-repeat: no repeat;\n  background-size: 100%;\n  padding-bottom: 25px\n  ;\n  }\n \n</style>\n<div class=\"row \" style=\" padding-top: 4%;\n padding-bottom:0%;background-image: url(../../assets/files/wall.jpg);\nbackground-attachment: fixed;\nbackground-size: 100%;\n  height: 120vh;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n         <form>\n          <div style=\"text-align: center;\">\n            <h3 class=\"text-primary font-weight-bold\">\n              {{'Sign Up' | translate}}\n            </h3>\n          </div>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null && form.message.length>0\"\n            class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:0.3%\">\n            <span class=\"pt-2\"><b>{{'First Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"firstName\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.firstName != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'firstname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.firstName}} </span> -->\n          </div>\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Last Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"lastName\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.lastName != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'lastname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.lastName}} </span> -->\n          </div>\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Login id' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"login\" [(ngModel)]=\"form.data.login\" class=\"form-control\"\n                  placeholder=\"{{'Enter Email Id' | translate}}\">\n\n              </div>\n            </div><span  *ngIf=\"form.inputerror.login != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'email'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.login}} </span> -->\n          </div>\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.password != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'password'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{password | translate}} </span> -->\n          </div>\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Mobile' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phone\" maxlength=\"10\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div>\n            <span  *ngIf=\"form.inputerror.phone != null\"\n              class=\"alertRedColor\" style=\" color: red;\" > {{'phone'| translate}} </span>\n          </div>\n\n          <!-- <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\n              </div>\n            </div><span  *ngIf=\"form.inputerror.alternateMobile != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'mobile'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.phone}} </span> \n          <!-- </div>  -->\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'DOB' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [(ngModel)]=\"form.data.dob\" class=\"form-control\">\n              </div>\n            </div> <span  *ngIf=\"form.inputerror.dob != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'dob'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.dob}} </span> -->\n          </div>\n\n          <div style=\"padding-top:0.1%\">\n            <span class=\"pt-2\"><b>{{'Gender' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate}}</option>\n                  <option value=\"Male\">{{'Male' | translate}} </option>\n                  <option value=\"Female\">{{'Female' | translate}} </option>\n                </select>\n              </div>\n            </div> <span  *ngIf=\"form.inputerror.gender != null\"\n            class=\"alertRedColor\" style=\" color: red;\" > {{'gender'| translate}} </span>\n            <!-- <span class=\"alertRedColor\" style=\" color: red;\"> {{form.inputerror.gender}} </span> -->\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"pt-2\">\n\n\n              <button (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Sign up' | translate}}</button>\n            </div>\n            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n            <div class=\"pt-2\">\n\n              <a class=\"btn btn-warning mr-1\"[routerLink]=\"['/signup']\" (click)=\"exit()\">{{'Reset' | translate}}</a>\n\n\n            </div>\n          </div>\n\n\n\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/login/signup.component.ts":
/*!*******************************************!*\
  !*** ./src/app/login/signup.component.ts ***!
  \*******************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(serviceLocator, httpService, dataValidator, router) {
        this.serviceLocator = serviceLocator;
        this.httpService = httpService;
        this.dataValidator = dataValidator;
        this.router = router;
        this.endpoint = "http://localhost:8084/Auth/signUp";
        this.form = {
            error: false,
            message: '',
            data: { id: null },
            inputerror: {},
        };
    }
    SignUpComponent.prototype.validate = function () {
        return this.validateForm(this.form);
    };
    /**
     * Override by childs
     *
     * @param form
     */
    SignUpComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        flag = flag && validator.isNotNullObject(form.gender);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    /**
     * Initialize component
     */
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.exit = function () {
        location.reload();
    };
    SignUpComponent.prototype.reset = function () {
        this.router.navigate(['/signup']);
    };
    SignUpComponent.prototype.submit = function () {
        var _self = this;
        this.httpService.post(this.endpoint, this.form.data, function (res) {
            console.log('MyResponse', res);
            _self.form.message = '';
            _self.form.inputerror = {};
            if (res.result.message) {
                _self.form.message = res.result.message;
            }
            _self.form.error = !res.success;
            if (_self.form.error && res.result.inputerror) {
                _self.form.inputerror = res.result.inputerror;
            }
        });
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/login/signup.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_4__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.html":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div  style=\"\nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;\npadding-top: 5%;\npadding-bottom: 24%;\nwidth:100%;\n  height: 100;\">\n  <form name=\"rollForm\" (ngSubmit)=\"go()\">\n    <div align=\"center\">\n      <div style=\"font-size: 80px;\">\n      <p class=\"font-weight-bold text-primary\">{{'Get Marksheet' | translate }}</p>\n    </div>\n    </div>\n    <div class=\"row pt-4 pb-4\">\n      <div class=\"col-sm-4 \"></div>\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\n        <input type=\"text\" name=\"rollNo\" id=\"rollNo\" class=\"form-control\" [(ngModel)]=\"form.data.rollNo\"\n          placeholder=\"{{'Enter Roll Number' | translate }}\">&emsp;</div>\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\n        <button type=\"submit\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n          {{'Search' | translate }}</button>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/getmarksheet']\"> {{'Reset' | translate}} </a>\n        \n        &emsp;\n\n      </div>\n      <div class=\"col-md-3 col-sm-3 col-xs-3\"></div>\n\n    </div>\n  </form>\n  <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    {{form.message}}\n  </div>\n  <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n    {{form.message}}\n  </div>\n\n  <div class=\"container\" *ngIf=\"form.list.rollNo!= null\" >\n\n    <table width=\"100%\" class=\"table table-bordered table-striped table-hover\" border=\"3px\">\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'RollNO' | translate }}</th>\n        <td id=\"po1\" colspan=\"3\">{{form.list.rollNo}}</td>\n      </tr>\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'Name' | translate }}</th>\n        <td id=\"po1\" colspan=\"3\">{{form.list.name}}</td>\n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Marks' | translate }}</th>\n        <th align=\"center\" id=\"po1\">{{'Max Marks' | translate }}</th>\n        <th  align=\"center\" id=\"po1\">{{'Min Marks' | translate }}</th>\n        <th  align=\"center\" id=\"po1\">{{'Marks Obtain' | translate }}</th>\n      </tr>\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'Subject' | translate }}</th>\n        \n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Physics' | translate }}</th>\n        <td align=\"center\">100</td>\n        <td align=\"center\">35</td>\n        <td id=\"po1\" align=\"center\">\n          <!-- <span style=\"color: red;\">{{form.list.physics}}*</span> -->\n          <span [ngStyle]=\"{'color': (form.list.physics >35) ? 'green': 'red' }\">{{form.list.physics}}</span>\n          \n        </td>\n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Chemistry' | translate }}</th>\n        <td align=\"center\">100</td>\n        <td align=\"center\">35</td>\n        <td id=\"po1\" align=\"center\">\n          <!-- <span style=\"color: red;\">{{form.list.chemistry}}*</span>  -->\n          <span [ngStyle]=\"{'color': (form.list.chemistry >35) ? 'green': 'red' }\">{{form.list.chemistry}}</span>\n        </td>\n      </tr>\n      <tr>\n        <th id=\"po1\">{{'Maths' | translate }}</th>\n        <td align=\"center\">100</td>\n        <td align=\"center\">35</td>\n        <td id=\"po1\" align=\"center\">\n          <!-- <span style=\"color: red;\">{{form.list.maths}}*</span> -->\n          <span [ngStyle]=\"{'color': (form.list.maths >35) ? 'green': 'red' }\">{{form.list.maths}}</span>\n        </td>\n      </tr>\n      <tr>\n        <th id=\"po1\" colspan=\"2\">{{'Total' | translate }}</th>\n\n        <td id=\"po1\" colspan=\"3\" align=\"center\">{{form.list.maths+form.list.physics+form.list.chemistry}}</td>\n      </tr>\n      <tr>\n\n        <th id=\"po1\" colspan=\"2\">{{'Percentage' | translate }}</th>\n\n        <td id=\"po1\" colspan=\"3\" align=\"center\">\n          {{((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 | number:'2.0-2' }}%\n        \n          \n        \n        \n        </td>\n      </tr>\n     <!--  <tr>\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\n          <font color=\"blue\">{{'Grade' | translate }}</font>\n        </th>\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\n          <font color=\"green\"><b>{{'PASS' | translate }}</b></font>\n        </td>\n      </tr> -->\n\n      <!-- <tr>\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>\n          <font color=\"red\"><b>F</b></font>\n        </th>\n        <td id=\"po1\" align=\"center\" colspan=\"3\">\n          <font color=\"red\"><b>{{'FAIL' | translate }}</b></font>\n        </td>\n      </tr> -->\n      <tr>\n        <th id=\"po1\" align=\"center\" colspan=\"2\">\n          <font color=\"blue\">{{'Final Grade' | translate }}</font>         \n        </th>\n        <td id=\"po1\" align=\"center\" colspan=\"3\"  *ngIf=\"((form.list.physics+form.list.maths+form.list.chemistry)*100)/300 > 35; else elseBlock\">\n\n          <font color=\"green\"><b>{{'Pass' | translate }}</b></font>\n        </td>\n        <ng-template #elseBlock><td id=\"po1\" align=\"center\" colspan=\"3\" ><font color=\"red\"><b>{{'Fail' | translate }}</b></font></td></ng-template>\n      </tr>\n\n    </table>\n    \n</div><div style=\"position: relative; clear: both;\">\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/marksheet/getmarksheet.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/marksheet/getmarksheet.component.ts ***!
  \*****************************************************/
/*! exports provided: GetmarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetmarksheetComponent", function() { return GetmarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var GetmarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GetmarksheetComponent, _super);
    function GetmarksheetComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, rollNo: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    GetmarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    GetmarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.rollNo);
        return flag;
    };
    GetmarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.rollNo = data.rollNo;
    };
    GetmarksheetComponent.prototype.go = function () {
        var _self = this;
        console.log("onClickSubmit");
        console.log(this.form.data);
        console.log(this.form.data.rollNo);
        this.httpservice.get("http://localhost:8084/Marksheet/rollno/" + this.form.data.rollNo, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    GetmarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getmarksheet',
            template: __webpack_require__(/*! ./getmarksheet.component.html */ "./src/app/marksheet/getmarksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], GetmarksheetComponent);
    return GetmarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 8%; \nbackground: url(assets/files/teahub.png) no-repeat center center;\nbackground-repeat: no-repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <!-- <div class=\"col-sm-6 p-1 text-center\"> -->\n        <div class=\"text-center\">\n          <h1 class=\"text-white font-weight-bold\">{{'Marksheet List' | translate}}</h1>\n        </div>\n      </div>\n\n      <div class=\"row  pt-4 pb-4 \" style=\"margin-left:15%\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{'Search Name'| translate}}\">\n        </div>\n      \n        <div class=\"col-sm-2\">\n\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Roll No' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.marksheetList\" [value]=\"obj.key\">{{obj.value}}</option>\n          </select>\n\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search'| translate}}</button>\n        </div>\n        &nbsp;&nbsp;&nbsp;\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/marksheet')\" type=\"button\" class=\"btn btn-success\">{{'Add Marksheet'| translate}}\n          </button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold text-white\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n                <th>{{'S.No'| translate}}</th>\n                <th>{{'RollNO'| translate}}</th>\n                <th>{{'Name'| translate}}</th>\n                <th>{{'Physics'| translate}}</th>\n                <th>{{'Chemistry'| translate}}</th>\n                <th>{{'Maths'| translate}}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <!-- <td> <input type=\"checkbox\" name=\"list_name\" value=\"{{isMasterSel}}\" [(ngModel)]=\"isMasterSel\" (change)=\"isAllSelected()\"/>\n                  </td> -->\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\"\n                    value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                \n\n                <td> {{ m.rollNo }} </td>\n                <td> {{ m.name }} </td>\n                <td> {{ m.physics }} </td>\n                <td> {{ m.chemistry }} </td>\n                <td> {{ m.maths }} </td>\n                <td>\n                  <a (click)=\"forward( '/marksheet/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n\n                  <!-- <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <table style=\"width: 100%;\">\n          <tr>\n            <td style=\"width: 50%;\">\n              <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n                }} </button>\n            </td>\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\"\n              [routerLink]=\"['/marksheetlist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n\n\n\n\n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n                translate }}</button></td>\n          </tr>\n        </table>\n\n      </div>\n\n    </div>\n  </div>\n  <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/marksheet/marksheet-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MarksheetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetListComponent", function() { return MarksheetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MarksheetListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetListComponent, _super);
    function MarksheetListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    MarksheetListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    MarksheetListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8084/Marksheet/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet-list',
            template: __webpack_require__(/*! ./marksheet-list.component.html */ "./src/app/marksheet/marksheet-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MarksheetListComponent);
    return MarksheetListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya3NoZWV0L21hcmtzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtFQUNFLFlBQVk7RUFDWixVQUFVO0dBQ1Q7OztBQUVBO0lBQ0MsWUFBWTtHQUNiOzs7QUFFQTtJQUNDLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21hcmtzaGVldC9tYXJrc2hlZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG5cbi5yZXF1aXJlZC1maWVsZDo6YWZ0ZXIgeyBcdFx0XG4gIGNvbnRlbnQ6IFwiKlwiO1x0XHRcbiAgY29sb3I6IHJlZDtcdFx0XG4gICB9XHRcblxuICAgLnN1Y2Nlc3NDb2xvcntcbiAgICBjb2xvcjogZ3JlZW47XG4gICB9XG5cbiAgIC5idG4tc3BhY2Uge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n\n</style>\n\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Marksheet' | translate}}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Marksheet' | translate}}</h2>\n          \n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Roll No' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"rollNo\" [(ngModel)]=\"form.data.rollNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Roll No' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.rollNo}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Student' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                \n\n                <select class=\"form-control\" required name=\"studentId\"\n                  [(ngModel)]=\"form.data.studentId\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Student' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.studentList\" [value]=\"obj.id\">{{obj.firstName + ' ' +obj.lastName }}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.studentId}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Physics' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phy\" [(ngModel)]=\"form.data.physics\" class=\"form-control\"\n                  placeholder=\"{{'Enter Physics Marks' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.physics}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Chemistry' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"chemistry\" [(ngModel)]=\"form.data.chemistry\" class=\"form-control\"\n                  placeholder=\"{{'Enter Chemistry Marks' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.chemistry}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Maths' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-check grey-text\"></i> </div>\n                </div>\n                \n                <input type=\"text\" name=\"math\" [(ngModel)]=\"form.data.maths\" class=\"form-control\"\n                  placeholder=\"{{'Enter Maths Marks'| translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.maths}} </span>\n          </div>\n         \n         \n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update'| translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/marksheetlist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'Back'| translate}}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/marksheet/marksheet.component.ts ***!
  \**************************************************/
/*! exports provided: MarksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetComponent", function() { return MarksheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var MarksheetComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetComponent, _super);
    function MarksheetComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.MARKSHEET, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.marksheetForm = null;
        return _this;
    }
    MarksheetComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                console.log('Dheeraj');
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Dheeraj----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    MarksheetComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    MarksheetComponent.prototype.onUpload = function (marksheetform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    MarksheetComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.marksheetForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    MarksheetComponent.prototype.onSubmitProfile = function (fileToUpload, marksheetform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8084/User/profilePic/" + this.form.data.id, formData);
    };
    MarksheetComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    MarksheetComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        console.log('Student name :: ' + form.name);
        flag = flag && validator.isNotNullObject(form.rollNo);
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.physics);
        flag = flag && validator.isNotNullObject(form.chemistry);
        flag = flag && validator.isNotNullObject(form.maths);
        return flag;
    };
    MarksheetComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.studentId = data.studentId;
        form.rollNo = data.rollNo;
        form.physics = data.physics;
        form.chemistry = data.chemistry;
        form.maths = data.maths;
        form.imageId = data.imageId;
        console.log('Populated Form', form);
    };
    MarksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheet',
            template: __webpack_require__(/*! ./marksheet.component.html */ "./src/app/marksheet/marksheet.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MarksheetComponent);
    return MarksheetComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad{\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n  background-repeat: no repeat;\n  background-size: 100%;\n  padding-bottom: 10px;\n  }\n  \n</style>\n<div class=\"content-wrapper\" style=\"padding-top: 1%;padding-bottom: 1%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"col-sm-12 pt-3\"> \n          <h3 class=\"text-primary text-center font-weight-bold\">{{'Marksheet Merit List' | translate}}</h3>\n        </div>\n      </div>\n\n       <div style=\"margin-left: 87%;\" class=\"pb-2\">\n\n        <a href=\"http://localhost:8084/Jasper/report\" class=\"btn btn-lg btn-primary \" role=\"button\"  target=\"blank\">\n          <span class=\"fa fa-print mr-1\"></span>{{'Print' | translate}}</a>\n      </div> \n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover font-weight-bold grad\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n              <th >{{'S.No' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'RollNO' | translate}}  </th>\n\t\t\t\t\t\t\t<th >{{'Name' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Physics' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Chemistry' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Maths' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Total' | translate}}</th>\n\t\t\t\t\t\t\t<th >{{'Percentage(%)' | translate}}</th>\n\t\t\t\t\t\t</tr>\n          </thead>\n\n          <tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let m of form.list; let i = index\" >\n\t\t\t\t\t\t\t<td>{{(form.pageNo*5)+i+ 1}} </td>\n\t\t\t\t\t\t\t<td >{{m.rollNo}}</td>\n\t\t\t\t\t\t\t<td >{{m.name}}</td>\n\t\t\t\t\t\t\t<td >{{m.physics}}</td>\n              <td> {{m.chemistry}}</td>\n              <td> {{m.maths}}</td>\n              <td>{{m.physics+m.maths+m.chemistry}}</td>\n              <td>{{((m.physics+m.maths+m.chemistry)*100)/300 | number:'2.0-2' }}%</td>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t</tr>\n          </tbody>\n          </table>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div><app-footer>\n  \n</app-footer>"

/***/ }),

/***/ "./src/app/marksheet/marksheetmerit-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/marksheet/marksheetmerit-list.component.ts ***!
  \************************************************************/
/*! exports provided: MarksheetmeritListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarksheetmeritListComponent", function() { return MarksheetmeritListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");






var MarksheetmeritListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MarksheetmeritListComponent, _super);
    function MarksheetmeritListComponent(locator, route, httpservice) {
        var _this = _super.call(this, locator.endpoints.Marksheet, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpservice = httpservice;
        return _this;
    }
    MarksheetmeritListComponent.prototype.ngOnInit = function () {
        this.getMeritList();
    };
    MarksheetmeritListComponent.prototype.getMeritList = function () {
        var _self = this;
        this.httpservice.get("http://localhost:8084/Marksheet/meritlist", function (res) {
            if (res.success) {
                _self.form.list = res.result.list;
                if (_self.form.list.length == 0) {
                    _self.form.message = "No record found";
                    _self.form.error = true;
                }
                console.log("List Size", _self.form.list.length);
            }
            else {
                _self.form.error = false;
                _self.form.message = res.result.message;
            }
            console.log('FORM', _self.form);
        });
    };
    MarksheetmeritListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marksheetmerit-list',
            template: __webpack_require__(/*! ./marksheetmerit-list.component.html */ "./src/app/marksheet/marksheetmerit-list.component.html"),
            styles: [__webpack_require__(/*! ./marksheet.component.css */ "./src/app/marksheet/marksheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"]])
    ], MarksheetmeritListComponent);
    return MarksheetmeritListComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseCtl"]));



/***/ }),

/***/ "./src/app/message/message-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/message/message-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg); background-repeat: no-repeat, repeat;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"col-sm-6 p-1\">\n          <h4 class=\"text-primary font-weight-bold\">{{'Message List' | translate}}</h4>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n\n        <div class=\"col-sm-3\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subject\"\n            placeholder=\"{{'Search Subject' | translate}}\">\n        </div>\n        <div class=\"col-sm-3\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.body\"\n            placeholder=\"{{'Search Body' | translate}}\">\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate}}</button></div>\n        <div class=\"col=sm-1\">\n          <button (click)=\"forward('/message')\" type=\"button\" class=\"btn btn-success\">{{'Add Message'| translate}}\n          </button></div>\n\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-lg-1\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous'| translate}}\n          </button>\n        </div>\n        <div class=\"col-lg-1\">\n          <button (click)=\"next()\" class=\"btn btn-info\">{{'Next'| translate}} </button>\n        </div>\n        <div class=\"col-lg-2\">\n\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th>{{'S.No'| translate}}</th>\n                <th>{{'Code'| translate}}</th>\n                <th>{{'Subject' | translate}}</th>\n                <th>{{'Body'| translate}}</th>\n                <th>{{'Type'| translate}}</th>\n                <th>{{'Status'| translate}}</th>\n                <th>#</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.code }} </td>\n                <td> {{ m.subject }} </td>\n                <td> {{ m.body }} </td>\n                <td> {{ m.type }} </td>\n                <td> {{ m.status }} </td>\n                <td>\n                  <a (click)=\"forward( '/message/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/message/message-list.component.ts ***!
  \***************************************************/
/*! exports provided: MessageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageListComponent", function() { return MessageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var MessageListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageListComponent, _super);
    function MessageListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-list',
            template: __webpack_require__(/*! ./message-list.component.html */ "./src/app/message/message-list.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageListComponent);
    return MessageListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxuICBjb250ZW50OiBcIipcIjtcdFx0XG4gIGNvbG9yOiByZWQ7XHRcdFxuICAgfVx0XG5cbiAgIC5zdWNjZXNzQ29sb3J7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgfVxuXG4gICAuYnRuLXNwYWNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; background-image: url(../../assets/files/gettyimages-1132439283-640x640.jpg);\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Message' | translate}}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Message' | translate}} </h2>\n\n\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div> -->\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Type' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-comment grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"type\" [(ngModel)]=\"form.data.type\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Type' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.type}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Code' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-commenting grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"code\" id=\"code\" [(ngModel)]=\"form.data.code\"\n                  style=\"cursor: pointer;\">\n                  <option selected=\"true\">{{'Please select'  | translate }}</option>\n                  <option value=\"U-FP\">U-FP </option>\n                  <option value=\"U-REG\">U-REG </option>\n                  <option value=\"U-CP\">U-CP</option>\n                </select>\n\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.code}}</span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-comments grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"subject\" [(ngModel)]=\"form.data.subject\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Subject'| translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Body' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"body\" [(ngModel)]=\"form.data.body\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Body' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.body}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Status' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-flag grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"status\" [(ngModel)]=\"form.data.status\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message Status' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.status}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'HTML' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"html\" [(ngModel)]=\"form.data.html\" class=\"form-control\"\n                  placeholder=\"{{'Enter Message HTML' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.html}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\"  class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate}}</button>\n            </div>\n\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/messagelist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\n              </button></div>\n          </div>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var MessageComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessageComponent, _super);
    function MessageComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.MESSAGE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    MessageComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.type);
        flag = flag && validator.isNotNullObject(form.code);
        flag = flag && validator.isNotNullObject(form.subject);
        flag = flag && validator.isNotNullObject(form.body);
        return flag;
    };
    MessageComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.code = data.code;
        form.type = data.type;
        form.subject = data.subject;
        form.body = data.body;
        form.status = data.status;
        form.html = data.html;
        console.log('Populated Form', form);
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MessageComponent);
    return MessageComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "navbar{\n    position: fixed;\n    top: 0px;\n    height: 40px;\n    width: 100%;\n    z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXZiYXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\n  .raj {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n  }\n\n  .c1 {\n    color: rgb(235, 6, 6);\n  }\n</style>\n\n<div class=\"header\">\n  <nav *ngIf=\"!isLogin()\" class=\"navbar navbar-expand-lg raj\">\n    <div class=\"logo\">\n      <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\n        <!-- <strong class=\"text-white\">Rays</strong> -->\n        <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\">\n      </a>\n    </div>\n    <select #locale (change)='changeLocale(locale.value)' class=\"c1\">\n      <option value=\"en\">{{'Select Language' | translate }}</option>\n\n      <option value=\"en\" style=\"color: red;\">English</option>\n      <option value=\"hi\" style=\"color: red;\">{{'Hindi' | translate }}</option>\n    </select>\n\n\n    <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\" style=\"font-size: 15px;\">\n      <ul class=\"navbar-nav ml-auto\" style=\"padding-right: 6.5%;\">\n\n        <li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['myNav']\" id=\"navbarDropdown\"\n            role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <font style=\"color: white;\">{{'Hi,Guest'| translate}}\n            </font>\n          </a>\n\n          <div class=\"dropdown-menu\" id=\"myNav\" aria-labelledby=\"navbarDropdown\">\n            <a class=\"dropdown-item\" [routerLink]=\"['/login']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; &nbsp; {{'Log\n              in' | translate}}</a>\n            <a class=\"dropdown-item\" [routerLink]=\"['/signup']\"><i class=\" fa fa-users\"></i> &nbsp; {{'User\n              Registration' |\n              translate}}</a>\n          </div>\n        </li>\n        <li>\n\n        </li>\n      </ul>\n    </div>\n\n  </nav>\n</div>\n\n\n<nav *ngIf=\"isLogin()\" class=\"navbar navbar-expand-lg raj\">\n\n  <div class=\"logo\">\n    <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">\n      <!-- <strong class=\"text-white\">Rays</strong> -->\n      <img src=\"assets\\files\\custom.png\" height=\"40px\" width=\"120px\">\n    </a>\n  </div>\n  <!-- <strong class=\"text-white\">NCS Pvt Ltd</strong> -->\n\n\n  <select #locale (click)='changeLocale(locale.value)'>\n    <option value=\"en\">{{'Select Language' | translate }}</option>\n    <option value=\"en\">English</option>\n    <option value=\"hi\">{{'Hindi' | translate }}</option>\n  </select>\n\n\n  <button class=\"navbar-toggler navbar-light\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\n    aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n\n\n    <div class=\"col-sm-2\"></div>\n\n\n\n    <ul class=\"nav navbar-nav pl-2 \">\n\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px;\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'User' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/user']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp;{{'Add User' |\n            translate}}</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/userlist']\"><i class=\"fa fa-list\"></i>&nbsp; {{'User List' |\n            translate}}</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Marksheet' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/marksheet']\"><i class=\"fa fa-file\"></i> &nbsp; {{'Add Marksheet' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/marksheetlist']\"><i class=\"fa fa-paste\"></i>\n            &nbsp;\n            {{'Marksheet List' | translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/marksheetmeritlist']\"><i\n              class=\" fa fa-list\"></i> &nbsp; {{'Marksheet Merit List' | translate}} </a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/getmarksheet']\"><i class=\"fa fa-copy\"></i> &nbsp; {{'Get Marksheet'\n            |\n            translate}}</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Role' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/role']\"><i class=\"fa fa-user\"></i> &nbsp; &nbsp; {{'Add Role' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/rolelist']\"><i class=\"fa fa-users\"></i> &nbsp;\n            {{'Role List' |\n            translate}}</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'College' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/college']\"><i class=\"fa fa-university\"></i> &nbsp; {{'Add College' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/collegelist']\"><i class=\"fa fa-building\"></i>\n            &nbsp;\n            {{'College List' | translate}} </a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Course' | translate}}\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/course']\"><i class=\"fa fa-book\"></i> &nbsp; {{'Add Course' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/courselist']\"><i class=\"fa fa-list\"></i> &nbsp;\n            {{'Course List'\n            | translate}} </a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Student' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/student']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Student' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/studentlist']\"><i class=\"fa fa-users\"></i> &nbsp;\n            {{'Student\n            List' | translate}}</a>\n        </div>\n      </li>\n\n\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Faculty' | translate}}\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/faculty']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Add Faculty' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/facultylist']\"><i class=\" fa fa-list\"></i> &nbsp;\n            {{'Faculty\n            List' | translate}}</a>\n        </div>\n      </li>\n\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'TimeTable' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/timetable']\"><i class=\"fa fa-clock-o\"></i> &nbsp; {{'Add TimeTable'\n            | translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/timetablelist']\"><i class=\"fa fa-list\"></i>\n            &nbsp;\n            {{'TimeTable List' | translate}}</a>\n        </div>\n      </li>\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n        id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <font style=\"color: white;\">{{'Route' | translate}}</font>\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n        <a class=\"dropdown-item\" [routerLink]=\"['/route']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Route' |\n          translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/routelist']\"><i class=\"fa fa-users\"></i> &nbsp;\n          {{'Route\n          List' | translate}}</a>\n      </div>\n    </li>\n<!-- \n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Wish' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/wish']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Wish' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/wishlist']\"><i class=\"fa fa-users\"></i> &nbsp;\n            {{'Wish\n            List' | translate}}</a>\n        </div>\n      </li> -->\n\n\n\n\n      <!-- <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Lead' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/lead']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Lead' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/leadlist']\"><i class=\"fa fa-users\"></i> &nbsp;\n            {{'Lead\n            List' | translate}}</a>\n        </div>\n      </li> -->\n\n\n<!-- \n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Patient' | translate}}\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/patient']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Add Patient' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/patientlist']\"><i class=\" fa fa-list\"></i> &nbsp;\n            {{'Patient\n            List' | translate}}</a>\n        </div>\n      </li> -->\n\n<!-- \n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Job' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/job']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Job' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/joblist']\"><i class=\"fa fa-users\"></i> &nbsp;\n            {{'Job\n            List' | translate}}</a>\n        </div>\n      </li> -->\n\n<!-- \n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Order' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/order']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Order' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/orderlist']\"><i class=\"fa fa-users\"></i> &nbsp;\n            {{'Order\n            List' | translate}}</a>\n        </div>\n      </li> -->\n<!-- \n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'FollowUp' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/followup']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add follow' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/followuplist']\"><i class=\"fa fa-users\"></i> &nbsp;\n            {{'followuplist\n            List' | translate}}</a>\n        </div>\n      </li> -->\n\n\n<!-- \n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Prescription' | translate}}\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/prescription']\"><i class=\"fa fa-users\"></i> &nbsp; {{'Add\n            Prescription' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/prescriptionlist']\"><i class=\" fa fa-list\"></i>\n            &nbsp;\n            {{'Prescription\n            List' | translate}}</a>\n        </div>\n      </li> -->\n\n\n<!-- \n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Employee' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/employee']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Employee' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/employeelist']\"><i class=\"fa fa-users\"></i> &nbsp;\n            {{'Employee\n            List' | translate}}</a>\n        </div>\n      </li>\n -->\n\n<!--  \n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Supplier' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/supplier']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Supplier' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/supplierlist']\"><i class=\"fa fa-users\"></i> &nbsp;\n            {{'Supplier\n            List' | translate}}</a>\n        </div>\n      </li> -->\n\n<!-- \n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n        id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <font style=\"color: white;\">{{'User' | translate}}</font>\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n        <a class=\"dropdown-item\" [routerLink]=\"['/users']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add User' |\n          translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/userslist']\"><i class=\"fa fa-users\"></i> &nbsp;\n          {{'User\n          List' | translate}}</a>\n      </div>\n    </li> -->\n\n\n<!--     \n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{'Client' | translate}}</font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/client']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add Client' |\n            translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/clientlist']\"><i class=\"fa fa-users\"></i> &nbsp;\n            {{'Client\n            List' | translate}}</a>\n        </div>\n      </li> -->\n\n\n<!--       \n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n        id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <font style=\"color: white;\">{{'Shopping Cart' | translate}}</font>\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n        <a class=\"dropdown-item\" [routerLink]=\"['/ShopingCart']\"><i class=\"fa fa-user\"></i> &nbsp; {{'Add ShoppingCart' |\n          translate}}</a> <a class=\"dropdown-item\" [routerLink]=\"['/ShopingCartlist']\"><i class=\"fa fa-users\"></i> &nbsp;\n          {{'ShoppingCart\n          List' | translate}}</a>\n      </div>\n    </li> -->\n\n\n\n      <li class=\"nav-item dropdown\" style=\"padding-left: 5px\"><a class=\"nav-link dropdown-toggle\" [routerLink]=\"['/#']\"\n          id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          <font style=\"color: white;\">{{form.data.fname }} ({{form.data.role}})\n          </font>\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n\n          <a class=\"dropdown-item\" (click)=\"forward()\"><i class=\" fa fa-user-md\"></i> &nbsp; {{'My Profile' |\n            translate}}</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/changepassword']\"><i class=\" fa fa-key\"></i> &nbsp; {{'Change\n            Password' |\n            translate}}</a>\n          <a class=\"dropdown-item\" [routerLink]=\"\" (click)=\"goToLink()\"><i class=\"fa fa-file\"></i> &nbsp;{{'Java Doc' |\n            translate}}</a>\n\n          <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\" fa fa-lock\"></i> &nbsp;&nbsp;{{'Log Out' |\n            translate}}</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div>\n\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, route, httpService, myservice, servicelocator) {
        this.translate = translate;
        this.route = route;
        this.httpService = httpService;
        this.myservice = myservice;
        this.servicelocator = servicelocator;
        this.form = {
            error: false,
            message: null,
            firstName: null,
            data: { id: null, fname: null, lname: null, role: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
        };
        console.log('DefaultLang ' + localStorage.getItem("locale"));
        if (localStorage.getItem("locale") != null) {
            translate.setDefaultLang(localStorage.getItem("locale"));
        }
        else {
            translate.setDefaultLang("en");
        }
    }
    NavbarComponent.prototype.changeLocale = function (locale) {
        localStorage.setItem("locale", locale);
        this.translate.use(localStorage.getItem("locale"));
        console.log('Locale ' + locale);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        // var _self = this;
        // this.httpService.get("http://localhost:8080/Auth/menu",function (res){
        //   if(res.success){
        //     _self.form.list = res.result.list;
        //   }else{
        //     _self.form.error = false;
        //     _self.form.message = res.result.message;
        //   }
        //   console.log('FORM', _self.form);
        // });
    };
    NavbarComponent.prototype.forward = function () {
        this.userid = localStorage.getItem("userid");
        console.log('UID---' + this.userid);
        this.servicelocator.forward("/user/" + this.userid);
    };
    NavbarComponent.prototype.isLogin = function () {
        var check = localStorage.getItem('fname');
        if (check != "null" && check != null) {
            this.form.data.fname = localStorage.getItem("fname");
            this.form.data.lname = localStorage.getItem("lname");
            this.form.data.loginId = localStorage.getItem("loginId");
            this.form.data.role = localStorage.getItem("role");
            // console.log('fname is ---->>>' + this.form.data.fname);
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.goToLink = function () {
        window.open('assets/doc/index.html', '_blank');
    };
    NavbarComponent.prototype.logout = function () {
        var _self = this;
        console.log('Logout', this.form);
        // let url = this.servicelocator.endpoints.getEndpoint(this.servicelocator.endpoints.AUTH, "logout");
        // this.servicelocator.httpService.post(url, this.form, function (res, error) {
        //   if (error) {
        //     alert(error);
        //     return;
        //   }
        //   _self.loginId = "null";
        //   localStorage.removeItem("token");
        //   localStorage.removeItem("fname");
        //   localStorage.removeItem("lname");
        //   localStorage.removeItem("loginId");
        //   localStorage.removeItem("role")
        //   console.log('After logout jsessionid---' +localStorage.getItem("JSESSIONID") + "  logout Pushpendra Singh Kushwah");
        //   this.form.message = "Logout Successfully";
        //   console.log(this.form.message);
        //  _self.servicelocator.router.navigateByUrl('/login/true');
        _self.httpService.get("http://localhost:8084/Auth/logout", function (res) {
            _self.servicelocator.router.navigateByUrl('/login/true');
            if (res.success) {
                localStorage.clear();
                _self.form.message = res.result.message;
                //     _self.form.list = res.result.data;
                //     localStorage.removeItem("JSESSIONID");
                //     _self.servicelocator.router.navigateByUrl('/login');
                //     if(_self.form.list.length == 0){
                //       _self.form.message = "No record found";
                //       _self.form.error = true;
                //     }
                //     console.log("List Size",_self.form.list.length );
                //   }else{
                //     _self.form.error = false;
                //     _self.form.message = res.result.message;
                //   }
                //   console.log('FORM', _self.form);
            }
            ;
        });
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_3__["HttpServiceService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.css":
/*!*******************************************!*\
  !*** ./src/app/order/order.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/order/order.component.html":
/*!********************************************!*\
  !*** ./src/app/order/order.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add Order' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update Order' | translate}}</h2>\n\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Quantity' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-money-bill grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"quantity\" [(ngModel)]=\"form.data.quantity\" class=\"form-control\"\n                  placeholder=\"{{'Enter Quantity' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.quantity}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Product' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"category\" [(ngModel)]=\"form.data.product\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Select Product' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.Olist\" [value]=\"obj.value\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.product != null\" class=\"alertRedColor\">{{form.inputerror.product}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Date' | translate}}</b><span class=\"required-field\">*</span></label>\n              <input type=\"date\" name=\"date\" [value]=\"form.data.date | date:'yyyy-MM-dd'\" (input)=\"form.data.date=parseDate($event.target.value)\" class=\"form-control\" required>\n            </div>\n            <span *ngIf=\"form.inputerror.date != null\" class=\"alertRedColor\" style=\"color: red;\">\n              {{ form.inputerror.date }}\n            </span>\n            <div class=\"form-group\">\n              <label><b>{{'Amount' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-money-bill grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"amount\" [(ngModel)]=\"form.data.amount\" class=\"form-control\"\n                  placeholder=\"{{'Enter amount' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.amount}}</span>\n            </div>\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' | translate}}</button>\n              <button (click)=\"forward('/orderlist')\" type=\"button\" class=\"btn btn-warning\">{{'List' | translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var OrderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OrderComponent, _super);
    function OrderComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ORDER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    OrderComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.quantity);
        flag = flag && validator.isNotNullObject(form.product);
        flag = flag && validator.isNotNullObject(form.date);
        flag = flag && validator.isNotNullObject(form.amount);
        return flag;
    };
    OrderComponent.prototype.limitInput = function (event, maxLength) {
        var target = event.target;
        var value = target.value;
        if (value.length >= maxLength) {
            event.preventDefault();
        }
        else if (!/^(1|9)\d{0,9}$/.test(value + event.key)) {
            event.preventDefault();
        }
    };
    OrderComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.quantity = data.quantity;
        form.product = data.product;
        form.date = data.date;
        form.amount = data.amount;
    };
    OrderComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/order/order.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OrderComponent);
    return OrderComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/orderlist/orderlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/orderlist/orderlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVybGlzdC9vcmRlcmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orderlist/orderlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/orderlist/orderlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/1024.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{'Order List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.quantity\"\n            placeholder=\"{{'Search Quantity' | translate}}\" (input)=\"validateInput($event, 'quantity')\">\n          <div *ngIf=\"!isValidQuantityInput\" class=\"text-danger\">\n            Please enter numbers only.\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.amount\"\n            placeholder=\"{{ 'Search Amount' | translate }}\" (input)=\"validateInput($event, 'amount')\">\n          <div *ngIf=\"!isValidAmountInput\" class=\"text-danger\">\n            Please enter numbers only.\n          </div>\n        </div>\n\n\n\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.date\"\n            placeholder=\"{{'Search Date' | translate}}\">\n        </div>\n\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"product\" [(ngModel)]=\"form.searchParams.product\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select Product' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.Olist\" [value]=\"obj.value\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/order')\" type=\"button\" class=\"btn btn-success\">{{'Add Order' |\n            translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete' | translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{'S.No' | translate}}</th>\n              <th>{{'Quantity' | translate}}</th>\n              <th>{{'Product' | translate}}</th>\n              <th>{{'Date' | translate}}</th>\n              <th>{{'Amount' | translate}}</th>\n              <th>{{'Edit' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{(form.pageNo * 5) + i + 1}}</td>\n              <td>{{ m.quantity }}</td>\n              <td>{{ m.product }}</td>\n              <td>{{ m.date | date:'dd-MM-yyyy' }}</td>\n              <td>{{ m.amount }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/order/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate\n            }}</button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/orderlist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/orderlist/orderlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/orderlist/orderlist.component.ts ***!
  \**************************************************/
/*! exports provided: OrderlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistComponent", function() { return OrderlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var OrderlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OrderlistComponent, _super);
    function OrderlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ORDER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.isValidQuantityInput = true; // Initialize isValidQuantityInput to true
        _this.isValidAmountInput = true; // Initialize isValidAmountInput to true
        return _this;
    }
    OrderlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'quantity') {
            this.isValidQuantityInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
        else if (field === 'amount') {
            this.isValidAmountInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
    };
    OrderlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orderlist',
            template: __webpack_require__(/*! ./orderlist.component.html */ "./src/app/orderlist/orderlist.component.html"),
            styles: [__webpack_require__(/*! ./orderlist.component.css */ "./src/app/orderlist/orderlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], OrderlistComponent);
    return OrderlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/patient/patient.component.css":
/*!***********************************************!*\
  !*** ./src/app/patient/patient.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/patient/patient.component.html":
/*!************************************************!*\
  !*** ./src/app/patient/patient.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, #001a33(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .log1 {\n    padding-top: 13%;\n  }\n\n  .input-group-addon {\n    box-shadow: 9px 8px 7px #001a33;\n  }\n\n  .required-field {\n    color: red;\n    font-weight: bold;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n\n  .card-body {\n    padding: 2rem;\n  }\n\n  .input-group-text i {\n    width: 1.5rem;\n  }\n\n  .btn-primary,\n  .btn-success,\n  .btn-warning {\n    width: 100%;\n  }\n\n  .form-control {\n    height: calc(2.25rem + 2px);\n  }\n</style>\n\n<div class=\"row\" style=\"\n  padding: 2% 0;\n  background: url('assets/files/1027.jpg') no-repeat center center;\n  background-attachment: fixed;\n  background-size: cover;\n  width: 100%;\n  height: auto;\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body input-group-addon grad\">\n        <form name=\"userForm\">\n          <h2 *ngIf=\"!form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Add Patient' | translate }}\n          </h2>\n          <h2 *ngIf=\"form.data.id\" class=\"text-primary font-weight-bold text-center\">{{ 'Update Patient' | translate }}\n          </h2>\n\n          <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{ form.message }}\n          </div>\n\n          <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{ form.message }}\n          </div>\n          <div class=\"form-group\">\n            <label><b>{{ ' Name' | translate }}</b><span class=\"required-field\">*</span></label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i></div>\n              </div>\n              <input type=\"text\" name=\"Name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                placeholder=\"{{ 'Enter Name' | translate }}\">\n            </div> <span *ngIf=\"form.inputerror!=name\" class=\"alertRedColor\">{{form.inputerror.name}}</span>\n          </div>\n\n          <div class=\"form-group\">\n            <label><b>{{ ' Mobile' | translate }}</b><span class=\"required-field\">*</span></label>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i></div>\n              </div>\n              <input type=\"text\" name=\"Mobile\" maxlength=\"10\" [(ngModel)]=\"form.data.mobile\" class=\"form-control\"\n                placeholder=\"{{ 'Enter mobileNo' | translate }}\">\n            </div> <span *ngIf=\"form.inputerror!=mobile\" class=\"alertRedColor\">{{form.inputerror.mobile}}</span>\n          </div>\n          <div>\n            <span class=\"pt-2\"><b>{{ 'dateOfVisit' | translate }}</b><span class=\"required-field\">*</span></span>\n            <div class=\"input-group\">\n              <div class=\"input-group-prepend\">\n                <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i></div>\n              </div>\n              <input type=\"date\" name=\"dateOfVisit\" [value]=\"form.data.dateOfVisit | date:'yyyy-MM-dd'\"\n                     (input)=\"form.data.dateOfVisit = parseDate($event.target.value)\" class=\"form-control form-control-sm\" required />\n            </div>\n          </div>\n          <span *ngIf=\"form.inputerror.dateOfVisit != null\" class=\"alertRedColor\" style=\"color: red;\">\n            {{ form.inputerror.dateOfVisit }}\n          </span>\n          \n          \n            <div class=\"form-group\">\n              <label><b>{{ 'Decease' | translate }}</b><span class=\"required-field\">*</span></label>\n          \n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"decease\" [(ngModel)]=\"form.data.decease\"\n                  aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Decease' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.pList\" [value]=\"obj.value\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span *ngIf=\"form.inputerror.decease != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{form.inputerror.decease}} </span>\n            \n        \n\n          \n              \n          <div class=\"row pt-2 pb-3 justify-content-center\">\n            <div class=\"col-md-4\">\n              <button *ngIf=\"!form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Save' | translate\n                }}</button>\n            </div>\n            <div class=\"col-md-4\">\n              <button *ngIf=\"form.data.id\" (click)=\"onUpload()\" class=\"btn btn-success\">{{ 'Update' | translate\n                }}</button>\n            </div>\n            <div class=\"col-md-4\">\n              <a class=\"btn btn-warning\" type=\"button\" [routerLink]=\"['/patientlist']\">{{ 'List' | translate }}</a>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4\"></div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/patient/patient.component.ts":
/*!**********************************************!*\
  !*** ./src/app/patient/patient.component.ts ***!
  \**********************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PatientComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatientComponent, _super);
    function PatientComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PATIENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    PatientComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Raj----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    PatientComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    PatientComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    PatientComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.priorityId);
        console.log(form.priorityId);
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.productName);
        flag = flag && validator.isNotNullObject(form.address);
        console.log(form.address);
        flag = flag && validator.isNotNullObject(form.phone);
        console.log(form.phone);
        return flag;
    };
    PatientComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in patientcomponent');
        form.name = data.name;
        form.dateOfVisit = data.dateOfVisit;
        form.mobile = data.mobile;
        form.decease = data.decease;
    };
    PatientComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    PatientComponent.prototype.test = function () {
    };
    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.css */ "./src/app/patient/patient.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PatientComponent);
    return PatientComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/patientlist/patientlist.component.css":
/*!*******************************************************!*\
  !*** ./src/app/patientlist/patientlist.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRsaXN0L3BhdGllbnRsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/patientlist/patientlist.component.html":
/*!********************************************************!*\
  !*** ./src/app/patientlist/patientlist.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/1024.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{'Patient List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n\n\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{ 'Search name' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n            (input)=\"validateInput($event, 'name')\">\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n        \n     \n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\"\n            placeholder=\"{{ 'Search Mobile No' | translate }}\"\n            pattern=\"[a-zA-Z0-9\\s]*\"\n            (input)=\"validateInput($event, 'mobile')\"> \n          <div *ngIf=\"!isValidMobileInput\" class=\"text-danger\">\n            Please enter letters, numbers, and spaces only.\n          </div>\n        </div>\n\n\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfVisit\"\n            placeholder=\"{{'Search dateOfVisit' | translate}}\">\n        </div>\n       \n        <div class=\"col-sm-2\">  \n          <select class=\"form-control\" name=\"decease\" [(ngModel)]=\"form.searchParams.decease\"\n            aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select Decease' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.pList\" [value]=\"obj.value\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/patient')\" type=\"button\" class=\"btn btn-success\">{{'Add Decease' |\n            translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete' | translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{'S.No' | translate}}</th>\n              <th>{{'Name' | translate}}</th>\n              <th>{{'DateOfVisit' | translate}}</th>\n              <th>{{'mobile' | translate}}</th>\n              <th>{{'Decease' | translate}}</th>\n              <th>{{'Edit' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{(form.pageNo * 5) + i + 1}}</td>\n              <td>{{ m.name }}</td>\n              <td>{{ m.dateOfVisit| date:'dd-MM-yyyy' }}</td>\n              <td>{{ m.mobile }}</td>\n              <td>{{ m.decease }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/patient/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate\n            }}</button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/deceaselist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/patientlist/patientlist.component.ts":
/*!******************************************************!*\
  !*** ./src/app/patientlist/patientlist.component.ts ***!
  \******************************************************/
/*! exports provided: PatientlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientlistComponent", function() { return PatientlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PatientlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PatientlistComponent, _super);
    function PatientlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PATIENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.isValidMobileInput = true;
        _this.isValidNameInput = true;
        return _this;
    }
    PatientlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
        if (field === 'name') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidNameInput = false;
            }
            else {
                this.isValidNameInput = true;
            }
        }
    };
    PatientlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patientlist',
            template: __webpack_require__(/*! ./patientlist.component.html */ "./src/app/patientlist/patientlist.component.html"),
            styles: [__webpack_require__(/*! ./patientlist.component.css */ "./src/app/patientlist/patientlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PatientlistComponent);
    return PatientlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/prescription/prescription.component.css":
/*!*********************************************************!*\
  !*** ./src/app/prescription/prescription.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNjcmlwdGlvbi9wcmVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/prescription/prescription.component.html":
/*!**********************************************************!*\
  !*** ./src/app/prescription/prescription.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add prescription' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update prescription' | translate}}\n            </h2>\n\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Name' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  placeholder=\"{{'Enter name' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Decease' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></span>\n                </div>\n                <select class=\"form-control\" name=\"decease\" [(ngModel)]=\"form.data.decease\">\n                  <option [ngValue]=\"undefined\">{{'Select decease' | translate}}</option>\n                  <option *ngFor=\"let obj of form.preload.Plist\" [value]=\"obj.value\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.decease\" class=\"alertRedColor\">{{'decease' | translate}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Date' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></span>\n                </div>\n                <input type=\"date\" name=\"Date\" [value]=\"form.data.date | date:'yyyy-MM-dd'\"\n                  (input)=\"form.data.date=parseDate($event.target.value)\" class=\"form-control\" required>\n              </div>\n             <span *ngIf=\"form.inputerror.date != null\" class=\"alertRedColor\" style=\"color: red;\">\n            {{ form.inputerror.date }}\n          </span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Capacity' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-calculator Amount grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"capacity\" [(ngModel)]=\"form.data.capacity\" class=\"form-control\"\n                  placeholder=\"{{'Enter Amount' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.capacity}}</span>\n            </div>\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"!validate()\"\n                class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' |\n                translate}}</button>\n              <button (click)=\"forward('/prescriptionlist')\" type=\"button\" class=\"btn btn-warning\">{{'List' |\n                translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/prescription/prescription.component.ts":
/*!********************************************************!*\
  !*** ./src/app/prescription/prescription.component.ts ***!
  \********************************************************/
/*! exports provided: PrescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionComponent", function() { return PrescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PrescriptionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PrescriptionComponent, _super);
    function PrescriptionComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PRES, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    PrescriptionComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.decease);
        flag = flag && validator.isNotNullObject(form.date);
        flag = flag && validator.isNotNullObject(form.capacity);
        return flag;
    };
    PrescriptionComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.decease = data.decease;
        form.date = data.date;
        form.capacity = data.capacity;
    };
    PrescriptionComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    PrescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prescription',
            template: __webpack_require__(/*! ./prescription.component.html */ "./src/app/prescription/prescription.component.html"),
            styles: [__webpack_require__(/*! ./prescription.component.css */ "./src/app/prescription/prescription.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PrescriptionComponent);
    return PrescriptionComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/prescriptionlist/prescriptionlist.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/prescriptionlist/prescriptionlist.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXNjcmlwdGlvbmxpc3QvcHJlc2NyaXB0aW9ubGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/prescriptionlist/prescriptionlist.component.html":
/*!******************************************************************!*\
  !*** ./src/app/prescriptionlist/prescriptionlist.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n  }\n</style>\n\n<div class=\"content-wrapper\"\n     style=\"background: url(assets/files/wall.jpg) no-repeat center center;\n            background-attachment: fixed;\n            background-size: cover;\n            width: auto;\n            height: 105vh;\">\n\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{ 'Prescription List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n                 placeholder=\"{{ 'Search Name' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n                 (input)=\"validateInput($event, 'name')\">\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.date\"\n                 placeholder=\"{{ 'Search date' | translate }}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.capacity\"\n                 placeholder=\"{{ 'Search Capacity' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n                 (input)=\"validateInput($event, 'capacity')\">\n          <div *ngIf=\"!isValidCapacityInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{ 'Select decease' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.Plist\" [value]=\"obj.key\">{{ obj.value }}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/prescription')\" type=\"button\" class=\"btn btn-success\">{{ 'Add prescription' |\n                                                                                             translate }}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\n        </div>\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n            <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th>\n                <input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                       (change)=\"checkUncheckAll($event)\" />\n              </th>\n              <th>{{ 'S.No' | translate }}</th>\n              <th>{{ 'Name' | translate }}</th>\n              <th>{{ 'Decease' | translate }}</th>\n              <th>{{ 'Capacity' | translate }}</th>\n              <th>{{ 'Date' | translate }}</th>\n              <th>{{ 'Edit' | translate }}</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td>\n                <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" [disabled]=\"m.roleName=='Admin'\"\n                       name=\"list_name\" id=\"{{ m.id }}\" value=\"{{ isMasterSel }}\" />\n              </td>\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\n              <td>{{ m.name }}</td>\n              <td>{{ m.decease }}</td>\n              <td>{{ m.capacity }}</td>\n              <td>{{ m.date | date : 'dd-MM-yyyy' }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" [disabled]=\"m.roleName=='Admin'\"\n                        (click)=\"forward('/prescription/' + m.id)\" style=\"cursor: pointer;\"></button>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n                <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{ 'Previous' |\n                                                                                                   translate }}</button>\n              </td>\n              <td *ngIf=\"form.list.length != 0\" style=\"width: 50%;\"></td>\n              <td *ngIf=\"form.list.length == 0\" style=\"width: 50%;\">\n                <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/prescriptionlist']\" (click)=\"exit()\">{{ 'Back' |\n                                                                                                           translate }}</a>\n              </td>\n              <td>\n                <button (click)=\"next()\" [disabled]=\"nextList == 0\" type=\"button\" class=\"btn btn-info\">{{ 'Next' |\n                                                                                                          translate }}</button>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/prescriptionlist/prescriptionlist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/prescriptionlist/prescriptionlist.component.ts ***!
  \****************************************************************/
/*! exports provided: PrescriptionlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionlistComponent", function() { return PrescriptionlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var PrescriptionlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PrescriptionlistComponent, _super);
    function PrescriptionlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.PRES, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.isValidCapacityInput = true;
        _this.isValidNameInput = true;
        return _this;
    }
    PrescriptionlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'name') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidNameInput = false;
            }
            else {
                this.isValidNameInput = true;
            }
        }
        if (field === 'capacity') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidCapacityInput = false;
            }
            else {
                this.isValidCapacityInput = true;
            }
        }
    };
    PrescriptionlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prescriptionlist',
            template: __webpack_require__(/*! ./prescriptionlist.component.html */ "./src/app/prescriptionlist/prescriptionlist.component.html"),
            styles: [__webpack_require__(/*! ./prescriptionlist.component.css */ "./src/app/prescriptionlist/prescriptionlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], PrescriptionlistComponent);
    return PrescriptionlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/role/role-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/role/role-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15;\n background: url(assets/files/back1.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\" >\n    <div class=\"container-fluid\">\n\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\" style=\"height: 50px;\">\n                \n                <div class=\"text-center\">\n                    <h1 class=\"text-primary font-weight-bold\">{{'Role List' | translate}}</h1>\n                  </div>\n                </div>\n          \n                <div class=\"row p-1\">\n                  <div class=\"col-sm-1\"></div>\n                  <div class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n                      placeholder=\"{{'Search Name' | translate}}\">\n          \n                  </div>\n                  <!-- <div class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n                  </div> -->\n                  <div class=\"col-sm-2\">\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.description\"\n                      placeholder=\"{{'Search Description' | translate}}\">\n          \n                  </div>\n\n                  <div class=\"col-sm-2\">\n\n                    <select class=\"form-control\" name=\"id\" [(ngModel)]=\"form.searchParams.id\" aria-label=\"ngSelected\">\n                      <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\n                      <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\n                    </select>\n                  </div>\n          \n                  \n                 \n                  <div class=\"col-sm-1 ml-3\">\n                    <button (click)=\"submit()\" class=\"btn btn-primary\">\n                      {{'Search' | translate }}</button>\n                  </div>\n                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                  <div class=\"col-lg-2 ml-4\">\n                    <button (click)=\"forward('/role')\" type=\"button\" class=\"btn btn-success\">{{'Add Role' | translate}}\n                    </button>\n                  </div>\n          \n                  <div class=\"col-sm-1\">\n                    <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n                      {{'Delete'| translate}}</button>\n                  </div>\n                </div>\n            <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                {{form.message}}\n              </div>\n              <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n                {{form.message}}\n              </div>\n\n          \n\n            <div class=\"p-1\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-striped table-hover font-weight-bold text-primary\">\n                        <thead class=\"thead-light text-uppercase\">\n                            <tr>\n                                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                                <th>{{'S.No' | translate }}</th>\n                                <th>{{'Name' | translate }}</th>\n                                <th>{{'Description' | translate }}</th>\n                                <th>{{'Edit' | translate}}</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let m of form.list; let i = index\">\n                                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                                </td>\n                                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                                <td> {{ m.name }} </td>\n                                <td> {{ m.description }} </td>\n                                <td>\n                                    <a (click)=\"forward( '/role/' +  m.id)\" style=\"cursor: pointer;\">\n                                        <i class=\"fa fa-edit text-info\"></i>\n                                    </a>\n                                    <!-- /\n                                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                                        <i class=\"fa fa-trash text-danger\"></i>\n                                    </a> -->\n                                </td>\n                                \n                            </tr>\n                        </tbody>\n                    </table>\n                </div><table style=\"width: 100%;\">\n                    <tr>\n                      <td style=\"width: 50%;\">\n                  <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n                    }} </button></td>\n                    <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n                    <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\">\n                      <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/rolelist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\n        \n          \n          \n                \n                    <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n                      translate }}</button></td>\n                    </tr>\n                    </table>\n              \n                    \n               \n            </div>\n\n        </div>\n\n    </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/role/role-list.component.ts ***!
  \*********************************************/
/*! exports provided: RoleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleListComponent", function() { return RoleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RoleListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleListComponent, _super);
    function RoleListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-list',
            template: __webpack_require__(/*! ./role-list.component.html */ "./src/app/role/role-list.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RoleListComponent);
    return RoleListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/role/role.component.css":
/*!*****************************************!*\
  !*** ./src/app/role/role.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZS9yb2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9yb2xlL3JvbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbGVydFJlZENvbG9yIHtcbiAgICBjb2xvcjogcmVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/role/role.component.html":
/*!******************************************!*\
  !*** ./src/app/role/role.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168),\n        rgb(219, 231, 237));\n    background-repeat: no repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n</style>\n<div class=\"row \" style=\"padding-top: 7%; padding-bottom:15%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Role' |\n            translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Role' |\n            translate }}</h2>\n\n\n          <!-- <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div> -->\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  placeholder=\"{{'Enter Role Name' | translate }}\">\n              </div>\n            </div>\n          </div>\n          <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\n\n          <div style=\"padding-top:3%\">\n            <span><b>{{'Description' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\n                </div>\n                <textarea name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n\n            <div class=\"pl-3 pt-2\">\n              <button (click)=\"forward('/rolelist')\" class=\"btn btn-md btn-warning\">\n                {{'List' | translate }}</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/role/role.component.ts":
/*!****************************************!*\
  !*** ./src/app/role/role.component.ts ***!
  \****************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var RoleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoleComponent, _super);
    function RoleComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.ROLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    RoleComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    RoleComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    RoleComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        form.description = data.description;
        form.status = data.status;
    };
    RoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role',
            template: __webpack_require__(/*! ./role.component.html */ "./src/app/role/role.component.html"),
            styles: [__webpack_require__(/*! ./role.component.css */ "./src/app/role/role.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RoleComponent);
    return RoleComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/route/route.component.css":
/*!*******************************************!*\
  !*** ./src/app/route/route.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlL3JvdXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/route/route.component.html":
/*!********************************************!*\
  !*** ./src/app/route/route.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add Route' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update Route' | translate}}</h2>\n\n            \n <!-- Success and Error Messages -->\n <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  {{ form.message }}\n</div>\n\n<div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n  {{ form.message }}\n</div>\n\n<!-- Route Name Input -->\n<div class=\"form-group\">\n  <label><b>{{ 'Name' | translate }}</b><span class=\"required-field\">*</span></label>\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i></div>\n    </div>\n    <input type=\"text\" name=\"Name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n      placeholder=\"{{ 'Enter Name' | translate }}\">\n  </div>\n  <span *ngIf=\"form.inputerror.name\" class=\"alertRedColor\">{{ form.inputerror.name }}</span>\n</div>\n\n<!-- Route Start Date Input -->\n<div class=\"form-group\">\n  <label><b>{{ 'Start Date' | translate }}</b><span class=\"required-field\">*</span></label>\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <div class=\"input-group-text\"><i class=\"fa fa-calendar grey-text\"></i></div>\n    </div>\n    <input type=\"date\" name=\"StartDate\" [value]=\"form.data.startDate | date:'yyyy-MM-dd'\"\n      (input)=\"form.data.startDate = parseDate($event.target.value)\" class=\"form-control\" required />\n  </div>\n  <span *ngIf=\"form.inputerror.startDate\" class=\"alertRedColor\">{{ form.inputerror.startDate }}</span>\n</div>\n\n<!-- Allow Speed Checkbox -->\n\n\n\n<div class=\"form-group\">\n  <label><b>{{ 'Allow Speed' | translate }}</b><span class=\"required-field\">*</span></label>\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <div class=\"input-group-text\"><i class=\"fa fa-car grey-text\"></i></div>\n    </div>\n    <input type=\"text\" name=\"allowSpeed\" [(ngModel)]=\"form.data.allowSpeed\" class=\"form-control\"\n      placeholder=\"{{ 'Enter allow Speed' | translate }}\">\n  </div>\n  <span *ngIf=\"form.inputerror.allowSpeed\" class=\"alertRedColor\">{{ form.inputerror.allowSpeed }}</span>\n</div>\n\n<div class=\"form-group\">\n  <label><b>{{ 'Vehicle ID' | translate }}</b><span class=\"required-field\">*</span></label>\n\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n    </div>\n    <select class=\"form-control\" name=\"decease\" [(ngModel)]=\"form.data.vehicleId\"\n      aria-label=\"ngSelected\">\n      <option [ngValue]=\"\" value=\"undefined\">{{' Select vehicleId' | translate }}</option>\n      <option *ngFor=\"let obj of form.preload.Rlist\" [value]=\"obj.value\">{{obj.value}}</option>\n    </select>\n  </div>\n</div>\n<span *ngIf=\"form.inputerror.vehicleId != null\" class=\"alertRedColor\" style=\" color: red;\">\n  {{form.inputerror.vehicleId}} </span>\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' | translate}}</button>\n              <button (click)=\"forward('/routelist')\" type=\"button\" class=\"btn btn-warning\">{{'List' | translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/route/route.component.ts":
/*!******************************************!*\
  !*** ./src/app/route/route.component.ts ***!
  \******************************************/
/*! exports provided: RouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteComponent", function() { return RouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var RouteComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RouteComponent, _super);
    function RouteComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ROUTE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.userForm = null;
        return _this;
    }
    RouteComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Route Component Submit----------");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    RouteComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------Route Component Submit1");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    RouteComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    RouteComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        console.log(form.name);
        flag = flag && validator.isNotNullObject(form.startDate);
        console.log(form.startDate);
        flag = flag && validator.isNotNullObject(form.allowSpeed);
        console.log(form.allowSpeed);
        flag = flag && validator.isNotNullObject(form.vehicleId);
        console.log(form.vehicleId);
        return flag;
    };
    RouteComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in RouteComponent');
        form.name = data.name;
        form.startDate = data.startDate;
        form.allowSpeed = data.allowSpeed;
        form.vehicleId = data.vehicleId;
    };
    RouteComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    RouteComponent.prototype.test = function () {
        // Optional method for testing or future functionality
    };
    RouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route',
            template: __webpack_require__(/*! ./route.component.html */ "./src/app/route/route.component.html"),
            styles: [__webpack_require__(/*! ./route.component.css */ "./src/app/route/route.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], RouteComponent);
    return RouteComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/routelist/routelist.component.css":
/*!***************************************************!*\
  !*** ./src/app/routelist/routelist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlbGlzdC9yb3V0ZWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/routelist/routelist.component.html":
/*!****************************************************!*\
  !*** ./src/app/routelist/routelist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/1024.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{'Route List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        \n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{ 'Search name' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n            (input)=\"validateInput($event, 'name')\">\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n          \n        \n      \n\n\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.startDate\"\n            placeholder=\"{{'Search start Date' | translate}}\">\n        </div>\n       \n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.allowSpeed\"\n            placeholder=\"{{ 'Search allowSpeed' | translate }}\"\n            pattern=\"[a-zA-Z0-9\\s]*\"\n            (input)=\"validateInput($event, 'paymentTerm')\"> \n          <div *ngIf=\"!isValidPaymentTermInput\" class=\"text-danger\">\n            Please enter letters, numbers, and spaces only.\n          </div>\n        </div>\n        \n\n\n        \n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"vehicleId\" [(ngModel)]=\"form.searchParams.vehicleId\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select vehicleId' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.Rlist\" [value]=\"obj.value\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/route')\" type=\"button\" class=\"btn btn-success\">{{'Add Rote' |\n            translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete' | translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{'S.No' | translate}}</th>\n              <th>{{'Name' | translate}}</th>\n              <th>{{'StartDate' | translate}}</th>\n              <th>{{'Allow Speed' | translate}}</th>\n              <th>{{' Vehicle ID' | translate}}</th>\n              <th>{{'Edit' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{(form.pageNo * 5) + i + 1}}</td>\n              <td>{{ m.name }}</td>\n              <td>{{ m.startDate | date:'dd-MM-yyyy' }}</td>\n              <td>{{ m.allowSpeed }}</td>\n              <td>{{ m.vehicleId }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/route/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate }}</button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/routelist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/routelist/routelist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/routelist/routelist.component.ts ***!
  \**************************************************/
/*! exports provided: RoutelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutelistComponent", function() { return RoutelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var RoutelistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RoutelistComponent, _super);
    function RoutelistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.ROUTE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.isValidNameInput = true;
        _this.isValidPaymentTermInput = true;
        return _this;
    }
    RoutelistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'paymentTerm') {
            this.isValidPaymentTermInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
        if (field === 'name') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidNameInput = false;
            }
            else {
                this.isValidNameInput = true;
            }
        }
    };
    RoutelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-routelist',
            template: __webpack_require__(/*! ./routelist.component.html */ "./src/app/routelist/routelist.component.html"),
            styles: [__webpack_require__(/*! ./routelist.component.css */ "./src/app/routelist/routelist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], RoutelistComponent);
    return RoutelistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/service-locator.service.ts":
/*!********************************************!*\
  !*** ./src/app/service-locator.service.ts ***!
  \********************************************/
/*! exports provided: ServiceLocatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceLocatorService", function() { return ServiceLocatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-service.service */ "./src/app/http-service.service.ts");
/* harmony import */ var _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/data-validator */ "./src/app/utility/data-validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./endpoint-service.service */ "./src/app/endpoint-service.service.ts");






var ServiceLocatorService = /** @class */ (function () {
    function ServiceLocatorService(hs, dv, r, ep) {
        this.hs = hs;
        this.dv = dv;
        this.r = r;
        this.ep = ep;
        this.httpService = null;
        this.dataValidator = null;
        this.router = null;
        this.endpoints = null;
        this.httpService = hs;
        this.dataValidator = dv;
        this.router = r;
        this.endpoints = ep;
    }
    /**
     * get path variable from url
     *
     * @param route
     * @param callback
     */
    ServiceLocatorService.prototype.getPathVariable = function (route, callback) {
        route.params.subscribe(function (params) {
            callback(params);
        });
    };
    /**
     * Forward to page
     *
     * @param page
     */
    ServiceLocatorService.prototype.forward = function (page) {
        this.router.navigateByUrl(page);
    };
    ServiceLocatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _utility_data_validator__WEBPACK_IMPORTED_MODULE_3__["DataValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _endpoint_service_service__WEBPACK_IMPORTED_MODULE_5__["EndpointServiceService"]])
    ], ServiceLocatorService);
    return ServiceLocatorService;
}());



/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BpbmctY2FydC9zaG9waW5nLWNhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add ShopingCart' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update ShopingCart' | translate}}</h2>\n\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Name' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-money-bill grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\"\n                  placeholder=\"{{'Enter Name' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Quantity' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-money-bill grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"quantity\" [(ngModel)]=\"form.data.quantity\" class=\"form-control\"\n                  placeholder=\"{{'Enter Quantity' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.quantity}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Product' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"category\" [(ngModel)]=\"form.data.product\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Select Product' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.Slist\" [value]=\"obj.value\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.product != null\" class=\"alertRedColor\">{{form.inputerror.product}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Date' | translate}}</b><span class=\"required-field\">*</span></label>\n              <input type=\"date\" name=\"date\" [value]=\"form.data.date | date:'yyyy-MM-dd'\" (input)=\"form.data.date=parseDate($event.target.value)\" class=\"form-control\" required>\n            </div>\n            <span *ngIf=\"form.inputerror.date != null\" class=\"alertRedColor\" style=\"color: red;\">\n              {{ form.inputerror.date }}\n            </span>\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"validate()\" class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' | translate}}</button>\n              <button (click)=\"forward('/ShopingCartlist')\" type=\"button\" class=\"btn btn-warning\">{{'List' | translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/shoping-cart/shoping-cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shoping-cart/shoping-cart.component.ts ***!
  \********************************************************/
/*! exports provided: ShopingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingCartComponent", function() { return ShopingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var ShopingCartComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShopingCartComponent, _super);
    function ShopingCartComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SHOPPING, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    ShopingCartComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.quantity);
        flag = flag && validator.isNotNullObject(form.product);
        flag = flag && validator.isNotNullObject(form.date);
        flag = flag && validator.isNotNullObject(form.name);
        return flag;
    };
    ShopingCartComponent.prototype.limitInput = function (event, maxLength) {
        var target = event.target;
        var value = target.value;
        if (value.length >= maxLength) {
            event.preventDefault();
        }
        else if (!/^(1|9)\d{0,9}$/.test(value + event.key)) {
            event.preventDefault();
        }
    };
    ShopingCartComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.quantity = data.quantity;
        form.product = data.product;
        form.date = data.date;
        form.name = data.name;
    };
    ShopingCartComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    ShopingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shoping-cart',
            template: __webpack_require__(/*! ./shoping-cart.component.html */ "./src/app/shoping-cart/shoping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shoping-cart.component.css */ "./src/app/shoping-cart/shoping-cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ShopingCartComponent);
    return ShopingCartComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseCtl"]));



/***/ }),

/***/ "./src/app/shoping-cartlist/shoping-cartlist.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/shoping-cartlist/shoping-cartlist.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3BpbmctY2FydGxpc3Qvc2hvcGluZy1jYXJ0bGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shoping-cartlist/shoping-cartlist.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shoping-cartlist/shoping-cartlist.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/1024.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{'ShoppingCart List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.quantity\"\n            placeholder=\"{{'Search Quantity' | translate}}\" (input)=\"validateInput($event, 'quantity')\">\n          <div *ngIf=\"!isValidQuantityInput\" class=\"text-danger\">\n            Please enter numbers only.\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{ 'Search Name' | translate }}\" (input)=\"validateInput($event, 'name')\">\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">\n            Please enter numbers only.\n          </div>\n        </div>\n\n\n\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.date\"\n            placeholder=\"{{'Search Date' | translate}}\">\n        </div>\n\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"product\" [(ngModel)]=\"form.searchParams.product\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select Product' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.Slist\" [value]=\"obj.value\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/ShopingCart')\" type=\"button\" class=\"btn btn-success\">{{'Add ShopingCart' |\n            translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete' | translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{'S.No' | translate}}</th>\n              <th>{{'Name' | translate}}</th>\n              <th>{{'Quantity' | translate}}</th>\n              <th>{{'Product' | translate}}</th>\n              <th>{{'Date' | translate}}</th>\n              <th>{{'Edit' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{(form.pageNo * 5) + i + 1}}</td>\n              <td>{{ m.name }}</td>\n              <td>{{ m.quantity }}</td>\n              <td>{{ m.product }}</td>\n              <td>{{ m.date | date:'dd-MM-yyyy' }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/ShopingCart/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate\n            }}</button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/ShopingCartlist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/shoping-cartlist/shoping-cartlist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shoping-cartlist/shoping-cartlist.component.ts ***!
  \****************************************************************/
/*! exports provided: ShopingCartlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingCartlistComponent", function() { return ShopingCartlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");






var ShopingCartlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShopingCartlistComponent, _super);
    function ShopingCartlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.SHOPPING, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.isValidQuantityInput = true; // Initialize isValidQuantityInput to true
        _this.isValidNameInput = true; // Initialize isValidAmountInput to true
        return _this;
    }
    ShopingCartlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'quantity') {
            this.isValidQuantityInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
        else if (field === 'name') {
            this.isValidNameInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
    };
    ShopingCartlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-shoping-cartlist',
            template: __webpack_require__(/*! ./shoping-cartlist.component.html */ "./src/app/shoping-cartlist/shoping-cartlist.component.html"),
            styles: [__webpack_require__(/*! ./shoping-cartlist.component.css */ "./src/app/shoping-cartlist/shoping-cartlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_5__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ShopingCartlistComponent);
    return ShopingCartlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/spinner/spinner.component.css":
/*!***********************************************!*\
  !*** ./src/app/spinner/spinner.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  spinner works!\n</p>\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/spinner/spinner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/student/student-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/student/student-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 70px;\">\n\n        <div class=\"text-center\">\n          <h2 class=\"text-primary font-weight-bold\">{{'Student List' | translate }}</h2>\n\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.enrolNo\"\n            placeholder=\"{{'Search Enrollment' | translate }}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.collegeName\"\n            placeholder=\"{{'Search College' | translate }}\">\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.email\"\n            placeholder=\"{{'Search Email' | translate }}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.phoneNo\"\n            placeholder=\"{{'Search Mobile Number' | translate }}\">\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n\n\n\n        <div class=\"col-lg-2\">\n          <button (click)=\"forward('/student')\" type=\"button\" class=\"btn btn-success\">{{'Add Student' | translate }}\n          </button>\n        </div>\n\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr align=\"center\">\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n                <th>{{'S.No' | translate }}</th>\n                <th>{{'Enrollment No' | translate }}</th>\n                <th>{{'First Name' | translate }}</th>\n                <th>{{'Last Name' | translate }}</th>\n                <th>{{'College' | translate }}</th>\n                <th>{{'DOB' | translate }}</th>\n                <th>{{'Mobile' | translate }}</th>\n                <th>{{'Email' | translate }}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td>{{m.enrolNo}}</td>\n                <td> {{ m.firstName }} </td>\n                <td> {{ m.lastName }} </td>\n                <td> {{ m.collegeName }} </td>\n                <td>{{m.dob | date : 'dd-MM-yyyy'}}</td>\n                <td> {{ m.phoneNo }} </td>\n                <td> {{ m.email }} </td>\n                <td>\n                  <a (click)=\"forward( '/student/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n              <tr> <td style=\"width: 50%;\"><button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' |\n                    translate }} </button>\n                </td>  \n                <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n                <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/studentlist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\n                <td>\n                  <button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\">{{'Next' | translate }} </button>\n                 </td>\n                </tr>\n              </table>\n          \n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-list.component.ts ***!
  \***************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var StudentListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentListComponent, _super);
    function StudentListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    StudentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentListComponent);
    return StudentListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc3R1ZGVudC9zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxuICBjb250ZW50OiBcIipcIjtcdFx0XG4gIGNvbG9yOiByZWQ7XHRcdFxuICAgfVx0XG5cbiAgIC5zdWNjZXNzQ29sb3J7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgfVxuXG4gICAuYnRuLXNwYWNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n</style>\n<div class=\"row \" style=\"padding-top: 3%; \npadding-bottom:3%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add Student' | translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update Student' | translate }}</h2>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Enrollment No' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-id-card grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"enrolNo\" [(ngModel)]=\"form.data.enrolNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Enrollment Number' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.enrolNo}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"firstN\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"lastN\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'College' | translate }} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-university grey-text\"></i> </div>\n                </div>\n\n                <select class=\"form-control\" name=\"collegeId\" [(ngModel)]=\"form.data.collegeId\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select College' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.collegeList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.collegeId}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Email' | translate }} </b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"form.data.email\" class=\"form-control\"\n                  placeholder=\"{{'Enter Email Id' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.email}} </span>\n          </div>\n          \n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob| date:'yyyy-MM-dd'\"\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"  ><b>{{'Mobile No' | translate }} </b>\n              <span class=\"required-field\" ></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" maxlength=\"10\" name=\"phoneNo\" [(ngModel)]=\"form.data.phoneNo\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phoneNo}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/studentlist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");





var StudentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](StudentComponent, _super);
    function StudentComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.STUDENT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.selected = null;
        return _this;
    }
    StudentComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        flag = flag && validator.isNotNullObject(form.enrolNo);
        flag = flag && validator.isNotNullObject(form.phoneNo);
        flag = flag && validator.isNotNullObject(form.email);
        flag = flag && validator.isNotNullObject(form.dob);
        return flag;
    };
    StudentComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.collegeId = data.collegeId;
        console.log(form.collegeId + " inside populateForm method");
        form.email = data.email;
        form.enrolNo = data.enrolNo;
        form.dob = data.dob;
        //let ndate = new Date(data.dob);
        //console.log(form.dob + 'date ------',ndate)
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.phoneNo = data.phoneNo;
    };
    StudentComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StudentComponent);
    return StudentComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/subject/subject-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/subject/subject-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%;padding-bottom: 15%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\" >\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'Subject List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\n            placeholder=\"{{'Search Subject' | translate}}\">\n\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\n            placeholder=\"{{'Search Course' | translate}}\">\n\n        </div>\n\n        \n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/subject')\" type=\"button\" class=\"btn btn-success\">{{'Add Subject' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n      \n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\" (change)=\"checkUncheckAll($event)\"/></th>\n                <th>{{'S.No.' | translate}}</th>\n                <th>{{'Name' | translate}}</th>\n                <th>{{'Course' | translate}}</th>\n               \n                <th>{{'Description' | translate}}</th>\n                <th>{{'Edit' | translate }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\">\n                <td> <input type=\"checkbox\"  #checkboxes (change)=\"checklistUpdate()\"  name=\"list_name\"  id=\"{{m.id}}\" value=\"{{isMasterSel}}\"/>\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.subjectName}} </td>\n                <td> {{ m.courseName}} </td>\n               \n                <td> {{ m.description }} </td>\n                <td>\n                  <a (click)=\"forward( '/subject/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger\"></i>\n                  </a> -->\n                </td>\n                \n              </tr>\n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n            }} </button></td>\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/subjectlist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n\n        \n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n              translate }}</button></td>\n            </tr>\n            </table>\n\n                \n            \n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/subject/subject-list.component.ts ***!
  \***************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var SubjectListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectListComponent, _super);
    function SubjectListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject-list',
            template: __webpack_require__(/*! ./subject-list.component.html */ "./src/app/subject/subject-list.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectListComponent);
    return SubjectListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/subject/subject.component.css":
/*!***********************************************!*\
  !*** ./src/app/subject/subject.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmplY3Qvc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/subject/subject.component.html":
/*!************************************************!*\
  !*** ./src/app/subject/subject.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n</style>\n\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:13%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add Subject' | translate}}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update Subject' | translate}}</h2>\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"subjectName\" [(ngModel)]=\"form.data.subjectName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Subject Name' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Description' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                </div>\n                <textarea class=\"form-control\" name=\"description\" [(ngModel)]=\"form.data.description\"\n                  placeholder=\"{{'Enter Description' | translate}}\"></textarea>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.description}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject Name' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\" style=\"cursor: pointer;\">\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.subjectName}} </span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate}}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button (click)=\"forward('/subjectlist')\" type=\"button\"\n                class=\"btn btn-warning mr-1\">{{'List' | translate}}\n              </button></div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/subject/subject.component.ts":
/*!**********************************************!*\
  !*** ./src/app/subject/subject.component.ts ***!
  \**********************************************/
/*! exports provided: SubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectComponent", function() { return SubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var SubjectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SubjectComponent, _super);
    function SubjectComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUBJECT, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SubjectComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    SubjectComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.subjectName);
        flag = flag && validator.isNotNullObject(form.description);
        flag = flag && validator.isNotNullObject(form.courseId);
        return flag;
    };
    SubjectComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.subjectName = data.subjectName;
        form.description = data.description;
        form.courseId = data.courseId;
        console.log('Populated Form', form);
    };
    SubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subject',
            template: __webpack_require__(/*! ./subject.component.html */ "./src/app/subject/subject.component.html"),
            styles: [__webpack_require__(/*! ./subject.component.css */ "./src/app/subject/subject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SubjectComponent);
    return SubjectComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/supplier/supplier.component.css":
/*!*************************************************!*\
  !*** ./src/app/supplier/supplier.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVyL3N1cHBsaWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/supplier/supplier.component.html":
/*!**************************************************!*\
  !*** ./src/app/supplier/supplier.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add Supplier' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update Supplier' | translate}}</h2>\n\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Name' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"name\" [(ngModel)]=\"form.data.name\" class=\"form-control\" placeholder=\"{{'Enter Name' | translate}}\">\n              </div>\n              <span *ngIf=\"form.inputerror.name != null\" class=\"alertRedColor\">{{form.inputerror.name}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Category' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"category\" [(ngModel)]=\"form.data.category\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Select Category' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.Slist\" [value]=\"obj.value\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.category != null\" class=\"alertRedColor\">{{form.inputerror.category}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Registration Date' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></span>\n                </div>\n                <input type=\"date\" name=\"registrationDate\" [value]=\"form.data.registrationDate | date:'yyyy-MM-dd'\"\n                  (input)=\"form.data.registrationDate=parseDate($event.target.value)\" class=\"form-control\" required>\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.registrationDate}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Payment Term' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-money-bill grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"paymentTerm\" [(ngModel)]=\"form.data.paymentTerm\" class=\"form-control\"\n                  placeholder=\"{{'Enter Payment Term' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.paymentTerm}}</span>\n            </div>\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"!validate()\"\n                class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' |\n                translate}}</button>\n              <button (click)=\"forward('/supplierlist')\" type=\"button\" class=\"btn btn-warning\">{{'List' |\n                translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/supplier/supplier.component.ts":
/*!************************************************!*\
  !*** ./src/app/supplier/supplier.component.ts ***!
  \************************************************/
/*! exports provided: SupplierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierComponent", function() { return SupplierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");





var SupplierComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SupplierComponent, _super);
    function SupplierComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.SUPPLIER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    SupplierComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.category);
        flag = flag && validator.isNotNullObject(form.registrationDate);
        flag = flag && validator.isNotNullObject(form.paymentTerm);
        return flag;
    };
    SupplierComponent.prototype.limitInput = function (event, maxLength) {
        var target = event.target;
        var value = target.value;
        if (value.length >= maxLength) {
            event.preventDefault();
        }
        else if (!/^(1|9)\d{0,9}$/.test(value + event.key)) {
            event.preventDefault();
        }
    };
    SupplierComponent.prototype.limitInputw = function (event, maxLength) {
        var target = event.target;
        var value = target.value;
        if (value.length >= maxLength) {
            event.preventDefault();
        }
        else if (!/^[a-zA-Z]*$\d{0,15}$/.test(value + event.key)) {
            event.preventDefault();
        }
    };
    SupplierComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        console.log(form.name + " inside populateForm method");
        form.category = data.category;
        form.registrationDate = data.registrationDate;
        form.paymentTerm = data.paymentTerm;
    };
    SupplierComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    SupplierComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplier',
            template: __webpack_require__(/*! ./supplier.component.html */ "./src/app/supplier/supplier.component.html"),
            styles: [__webpack_require__(/*! ./supplier.component.css */ "./src/app/supplier/supplier.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_4__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SupplierComponent);
    return SupplierComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/supplierlist/supplierlist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/supplierlist/supplierlist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cHBsaWVybGlzdC9zdXBwbGllcmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/supplierlist/supplierlist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/supplierlist/supplierlist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/1024.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n\n  .search-inputs .col-sm-2,\n  .search-inputs .col-sm-1 {\n    padding: 0 5px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{'supplier List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        \n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{ 'Search name' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n            (input)=\"validateInput($event, 'name')\">\n          <div *ngIf=\"!isValidNameInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n          \n        \n      \n\n\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.registrationDate\"\n            placeholder=\"{{'Search Registration Date' | translate}}\">\n        </div>\n       \n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.paymentTerm\"\n            placeholder=\"{{ 'Search paymentTerm' | translate }}\"\n            pattern=\"[a-zA-Z0-9\\s]*\"\n            (input)=\"validateInput($event, 'paymentTerm')\"> \n          <div *ngIf=\"!isValidPaymentTermInput\" class=\"text-danger\">\n            Please enter letters, numbers, and spaces only.\n          </div>\n        </div>\n        \n\n\n        \n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"category\" [(ngModel)]=\"form.searchParams.category\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{'Select Category' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.Slist\" [value]=\"obj.value\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/supplier')\" type=\"button\" class=\"btn btn-success\">{{'Add Supplier' |\n            translate}}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{'Delete' | translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\"\n                  (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{'S.No' | translate}}</th>\n              <th>{{'Name' | translate}}</th>\n              <th>{{'Category' | translate}}</th>\n              <th>{{'Registration Date' | translate}}</th>\n              <th>{{'Payment Term' | translate}}</th>\n              <th>{{'Edit' | translate}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{(form.pageNo * 5) + i + 1}}</td>\n              <td>{{ m.name }}</td>\n              <td>{{ m.category }}</td>\n              <td>{{ m.registrationDate | date:'dd-MM-yyyy' }}</td>\n              <td>{{ m.paymentTerm }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/supplier/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\">{{'Previous' | translate }}</button>\n          <div *ngIf=\"form.list.length == 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/supplierlist']\" (click)=\"exit()\">{{'Back' | translate}}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList == 0\" class=\"btn btn-info\">{{'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/supplierlist/supplierlist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/supplierlist/supplierlist.component.ts ***!
  \********************************************************/
/*! exports provided: SupplierlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierlistComponent", function() { return SupplierlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var SupplierlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SupplierlistComponent, _super);
    function SupplierlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.SUPPLIER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidPaymentTermInput = true; // Property to track validity of paymentTerm input
        _this.isValidNameInput = true;
        return _this;
    }
    SupplierlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'paymentTerm') {
            this.isValidPaymentTermInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
        if (field === 'name') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            if (containsNonAlphabetic) {
                console.log('Please enter letters and spaces only.');
                this.isValidNameInput = false;
            }
            else {
                this.isValidNameInput = true;
            }
        }
    };
    SupplierlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-supplierlist',
            template: __webpack_require__(/*! ./supplierlist.component.html */ "./src/app/supplierlist/supplierlist.component.html"),
            styles: [__webpack_require__(/*! ./supplierlist.component.css */ "./src/app/supplierlist/supplierlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], SupplierlistComponent);
    return SupplierlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'TimeTable List' | translate }}</h1>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.subjectName\"\n            placeholder=\"{{'Search Subject' | translate}}\">\n\n        </div>\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.courseName\"\n            placeholder=\"{{'Search Course' | translate}}\">\n\n        </div>\n\n        \n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/timetable')\" type=\"button\" class=\"btn btn-success\">{{'Add TimeTable' | translate}}\n          </button>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr>\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n\n                <th>{{'S.No.' | translate }}</th>\n                <th>{{'Semester' | translate }}</th>\n                <th>{{'ExamDate' | translate }}</th>\n                <th>{{'ExamTime' | translate }}</th>\n                <th>{{'Course' | translate }}</th>\n                <th>{{'Subject' | translate }}</th>\n                <th>{{'Description' | translate }}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n            </thead>\n            <tbody>\n              \n              <tr *ngFor=\"let m of form.list; let i = index;\">\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td> {{ m.semester }} </td>\n                <td> {{ m.examDate | date : 'dd-MM-yyyy' }} </td>\n                <td> {{ m.examTime }} </td>\n                <td> {{ m.courseName }} </td>\n                <td> {{ m.subjectName }} </td>\n                <td> {{ m.description }} </td>\n                <td>\n                  <a (click)=\"forward( '/timetable/' +  m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                  <!-- /\n                    <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                      <i class=\"fa fa-trash text-danger\"></i>\n                    </a>\n                  </td> -->\n\n              </tr>\n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n            }} </button></td>\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/timetablelist']\"  (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n\n        \n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n              translate }}</button></td>\n            </tr>\n            </table>\n\n              \n            \n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/timetable/timetable-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/timetable/timetable-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TimetableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableListComponent", function() { return TimetableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");





var TimetableListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableListComponent, _super);
    function TimetableListComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        var ppSize = 0;
        return _this;
    }
    TimetableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable-list',
            template: __webpack_require__(/*! ./timetable-list.component.html */ "./src/app/timetable/timetable-list.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TimetableListComponent);
    return TimetableListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/timetable/timetable.component.css":
/*!***************************************************!*\
  !*** ./src/app/timetable/timetable.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWV0YWJsZS90aW1ldGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timetable/timetable.component.html":
/*!****************************************************!*\
  !*** ./src/app/timetable/timetable.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad{\n background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n background-repeat: no repeat;\n background-size: 100%;\n padding-bottom: 25px\n ;\n }\n</style>\n\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%;\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Add TimeTable' | translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\">{{'Update TimeTable' | translate }}</h2>\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Course' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-file grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"courseId\" [(ngModel)]=\"form.data.courseId\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Course' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.courseList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n          \n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Subject' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-globe grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"subjectId\" [(ngModel)]=\"form.data.subjectId\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Subject' | translate }}</option>\n            \n                  <option *ngFor=\"let obj of form.preload.subjectList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.subject}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Semester' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-list-ol grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"semester\" [(ngModel)]=\"form.data.semester\" style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\"> {{'Please select' | translate}} </option>\n                  <option value=\"1 Semester\">1 Semester</option>\n                  <option value=\"2 Semester\">2 Semester</option>\n                  <option value=\"3 Semester\">3 Semester</option>\n                  <option value=\"4 Semester\">4 Semester</option>\n                  <option value=\"5 Semester\">5 Semester</option>\n                  <option value=\"6 Semester\">6 Semester</option>\n                  <option value=\"7 Semester\">7 Semester</option>\n                  <option value=\"8 Semester\">8 Semester</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.semester}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Exam Date' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"examDate\" [value]=\"form.data.examDate | date:'yyyy-MM-dd'\"\n                (input)=\"form.data.examDate=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.examDate}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Exam Time' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-clock-o grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"examTime\" [(ngModel)]=\"form.data.examTime\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select examTime' | translate }}</option>\n            \n                  <option selected disabled>{{'Please select' | translate }}</option>\n                  <option value=\"08:00 AM to 11:00 AM\">08:00 AM to 11:00 AM</option>\n                  <option value=\"12:00PM to 3:00PM\">12:00PM to 3:00PM</option>\n                  <option value=\"3:00PM to 6:00PM\">3:00PM to 6:00PM</option>\n                </select>\n              </div>\n              <span class=\"alertRedColor\"> {{form.inputerror.examTime}} </span>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span><b>{{'Description' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bars grey-text \"></i> </div>\n                </div>\n                <textarea  name=\"description\" [(ngModel)]=\"form.data.description\" class=\"form-control\"\n                  placeholder=\"{{'Enter Description' | translate }}\"></textarea>\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\n          </div>\n\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\"  (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <button  *ngIf=\"form.data.id>0\"  (click)=\"submit()\" class=\"btn btn-success mr-2\">\n              {{'Update' | translate }}</button>\n            </div>\n           \n           \n            <div class=\"pl-3 pt-2\">\n              <button (click)=\"forward('/timetablelist')\" type=\"button\" class=\"btn btn-warning mr-1\">{{'List' | translate }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/timetable/timetable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timetable/timetable.component.ts ***!
  \**************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var TimetableComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimetableComponent, _super);
    function TimetableComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.TIMETABLE, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    TimetableComponent.prototype.validate = function () {
        return this.validateForm(this.form.data);
    };
    TimetableComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.semester);
        flag = flag && validator.isNotNullObject(form.examDate);
        console.log(form.examDate);
        flag = flag && validator.isNotNullObject(form.examTime);
        flag = flag && validator.isNotNullObject(form.courseId);
        flag = flag && validator.isNotNullObject(form.subjectId);
        flag = flag && validator.isNotNullObject(form.description);
        return flag;
    };
    TimetableComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.courseId = data.courseId;
        form.subjectId = data.subjectId;
        form.semester = data.semester;
        form.examDate = data.examDate;
        form.examTime = data.examTime;
        form.description = data.description;
        console.log('Populated Form', form);
    };
    TimetableComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    TimetableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable',
            template: __webpack_require__(/*! ./timetable.component.html */ "./src/app/timetable/timetable.component.html"),
            styles: [__webpack_require__(/*! ./timetable.component.css */ "./src/app/timetable/timetable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TimetableComponent);
    return TimetableComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/changepassword.component.html":
/*!****************************************************!*\
  !*** ./src/app/user/changepassword.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n.grad{\n  background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n  background-repeat: no repeat;\n  background-size: 100%;\n  padding-bottom: 10px;\n  }\n  </style>\n<div class=\"row \" style=\"padding-top: 10%; padding-bottom: 5%;\n background: url(assets/files/wall.jpg);\n  background-attachment: fixed;\n  background-size: cover; width:auto;\n    height: auto;\">\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg grad\">\n        <form>\n          <h2  class=\"text-primary font-weight-bold\">{{'Change Password' | translate }}</h2>\n    \n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Old Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"oldPassword\" [(ngModel)]=\"form.data.oldPassword\" class=\"form-control\"\n                  placeholder=\"{{'Enter Old Password' | translate}}\">\n              </div>\n            </div>\n          </div>\n        <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\n        \n        <div style=\"padding-top:3%\">\n            <span><b>{{'New Password' | translate}}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock-alt grey-text \"></i> </div>\n                </div>\n                <input type=\"password\" name=\"newPassword\" [(ngModel)]=\"form.data.newPassword\" class=\"form-control\"\n                placeholder=\"{{'Enter New Password' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.description}}</span>\n          </div>\n          <div style=\"padding-top:3%\">\n            <span><b>Confirm Password</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-unlock grey-text \"></i> </div>\n                </div>\n                <input type=\"password\" name=\"confirmPassword\" [(ngModel)]=\"form.data.confirmPassword\" class=\"form-control\"\n                placeholder=\"{{'Confirm Password' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\">{{form.inputerror.confirmPassword}}</span>\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            <div class=\"pt-2\">\n              <button   (click)=\"changePassword()\" class=\"btn btn-success mr-2\">\n               {{'Update' | translate}} </button>\n            </div>\n            <input type=\"hidden\" name=\"loginId\" [(ngModel)]=\"form.data.confirmPassword\">\n            \n          </div>\n        </form>\n      </div>\n\n    </div>\n\n  </div>\n</div><app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/changepassword.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user/changepassword.component.ts ***!
  \**************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");






var ChangepasswordComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ChangepasswordComponent, _super);
    function ChangepasswordComponent(locator, route, httpService) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpService = httpService;
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null, loginId: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    ChangepasswordComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.oldPassword);
        flag = flag && validator.isNotNullObject(form.newPassword);
        flag = flag && validator.isNotNullObject(form.confirmPassword);
        return flag;
    };
    ChangepasswordComponent.prototype.changePassword = function () {
        var _self = this;
        this.form.data.loginId = localStorage.getItem("loginId");
        this.httpService.post("http://localhost:8084/User/changepassword", this.form.data, function (res) {
            if (res.success) {
                _self.form.list = res.result.data;
                _self.form.message = res.result.message;
            }
        });
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/user/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _http_service_service__WEBPACK_IMPORTED_MODULE_5__["HttpServiceService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/myprofile.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/myprofile.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"row \" style=\"padding-top: 3%; padding-bottom:3%; \nbackground: url(assets/files/edc.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body shadow-lg\">\n        <form name=\"myProfile\">\n          <h2 class=\"text-primary font-weight-bold\">{{'My Profile'  | translate }}</h2>\n         \n\n          <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          \n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'First Name'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Last Name'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'login Id'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.state}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Password'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password'  | translate }}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.password}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Mobile'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Alternate Mobile'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"alternateMobile\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'DOB'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\n                (input)=\"form.data.dob=parseDate($event.target.value)\"\n                class=\"form-control form-control-sm\" required />\n              </div>\n            </div>\n            <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span>\n          </div>\n          \n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Gender'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select'  | translate }}</option>\n                  <option value=\"Male\">{{'Male'  | translate }} </option>\n                  <option value=\"Female\">{{'Female'  | translate }} </option>\n                </select>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Image'  | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"file\" id=\"customFile\" name=\"imageId\"\n                  (change)=\"onFileSelect($event.target.files)\" accept=\"image/*\">\n\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\n              </div>\n            </div>\n          </div>\n\n          <div style=\"padding-top:3%\">\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\" readonly>\n\n                  <option value=\"Active\">{{'Active'  | translate }} </option>\n                  <option value=\"Inactive\">{{'Inactive'  | translate }} </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row pt-3 pl-3 pb-3\">\n            \n\n            <div class=\"pt-2\">\n              <button (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            \n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/myprofile.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/myprofile.component.ts ***!
  \*********************************************/
/*! exports provided: MyprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofileComponent", function() { return MyprofileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MyprofileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MyprofileComponent, _super);
    function MyprofileComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    MyprofileComponent.prototype.ngOnInit = function () {
    };
    MyprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myprofile',
            template: __webpack_require__(/*! ./myprofile.component.html */ "./src/app/user/myprofile.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], MyprofileComponent);
    return MyprofileComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/user/user-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/user-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<style>\n#nnn{\n  background: none;\n  border: none;\n}\n\n</style> \n\n<div class=\"content-wrapper\"\nstyle=\"\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 105vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 50px;\">\n        <!-- <div class=\"col-sm-5\"> -->\n        <div class=\"text-center\">\n          <h1 class=\"text-primary font-weight-bold\">{{'User List' | translate }}</h1>\n        </div>\n      </div>\n      <!-- <button class=\"filebtn third\">Button 3</button> -->\n      <div class=\"row p-1\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.firstName\"\n            placeholder=\"{{'Search First Name' | translate}}\">\n\n        </div>\n\n\n        <!-- <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dob\"\n            placeholder=\"{{'Search dob' | translate}}\">\n\n        </div> -->\n        \n        <!-- <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\" placeholder=\"{{'Search Email' | translate}}\">\n        </div> -->\n        <div class=\"col-sm-2\">\n\n          <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.searchParams.roleId\" aria-label=\"ngSelected\">\n            <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\n          </select>\n        </div>\n        <div class=\"col-sm-2\">\n          <!-- <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.status\" placeholder=\"{{'Search Status' | translate}}\"> -->\n        </div>\n        <div class=\"col-sm-1 ml-3\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        &nbsp;&nbsp;&nbsp;\n        <div class=\"col-lg-2 ml-4\">\n          <button (click)=\"forward('/user')\" type=\"button\" class=\"btn btn-success\">{{'Add User' | translate}}\n          </button>\n        </div>\n        \n\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n\n          <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n            <thead class=\"thead-dark text-uppercase \">\n              <tr align=\"center\">\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\"  name=\"list_name\" value=\"h1\" \n                    (change)=\"checkUncheckAll($event)\" /></th>\n                <th>{{'S.No' | translate}}</th>\n                <th>{{'Image' | translate}}</th>\n                <th>{{'First Name' | translate}}</th>\n                <th>{{'Last Name' | translate}}</th>\n                <th>{{'Login' | translate}}</th>\n                <th>{{'Status' | translate}}</th>\n                <th>{{'Role' | translate}}</th>\n                <th>{{'Phone' | translate}}</th>\n                <th>{{'DOB' | translate}}</th>\n                <th>{{'Edit' | translate}}</th>\n              </tr>\n\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" [disabled]=\"m.roleName=='Admin'\" name=\"list_name\" id=\"{{m.id}}\" value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n\n                \n                <td>\n                  <div *ngIf=\"m.imageId\"> \n                    <img src=\"http://localhost:8084/User/profilePic/{{m.id}}\" height=\"55px\" width=\"80px\">\n                  </div>\n                  <div *ngIf=\"!m.imageId\">\n                    <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\n                  </div>\n                </td>\n\n                <td> {{ m.firstName }} </td>\n                <td> {{ m.lastName }} </td>\n                <td> {{ m.loginId }} </td>\n                <td> {{ m.status }} </td>\n                <td> {{ m.roleName }} </td>\n                <td> {{ m.phone }} </td>\n                <td> {{ m.dob | date : 'dd-MM-yyyy'}} </td>\n                <td>\n\n                  <button  class=\"fa fa-edit text-primary \" id=\"nnn\" [disabled]=\"m.roleName=='Admin'\" (click)=\"forward( '/user/' +  m.id)\" style=\"\n                  cursor: pointer;\"></button>\n                  <!-- <a (click)=\"forward( '/user/' +  m.id)\" style=\"\n                    cursor: pointer;\">\n                    <i class=\"fa fa-edit text-primary\"></i>\n                  </a> -->\n                  <!-- /\n                  <a (click)=\"delete(m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-trash text-danger \"></i>\n                  </a> -->\n\n                </td>\n              </tr>\n\n\n\n\n            </tbody>\n\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\" class=\"btn btn-info\"> {{'Previous' | translate\n            }} </button></td>\n\n            <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n            <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\" [routerLink]=\"['/userlist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\n\n\n        \n            <td><button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\"> {{'Next' |\n              translate }}</button></td>\n            </tr>\n            </table>\n\n\n\n      </div>\n    </div>\n\n  </div>\n</div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-list.component.ts ***!
  \*********************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserListComponent, _super);
    function UserListComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        return _this;
    }
    UserListComponent.prototype.createImageFromBlob = function (image) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            _this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    };
    UserListComponent.prototype.getImage = function (id) {
        var _this = this;
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.form.data.id = id;
        console.log(this.form.data.id);
        this.httpClient.get('http://localhost:8080/User/profilePic/' + this.form.data.id, { responseType: 'blob' }).subscribe(function (data) {
            _this.createImageFromBlob(data);
            _this.myKey = _this.form.data.id;
        }, function (error) {
            console.log(error);
        });
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserListComponent);
    return UserListComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alertRedColor {\n    color: red;\n}\n\n\n.required-field::after { \t\t\n  content: \"*\";\t\t\n  color: red;\t\t\n   }\n\n\n.successColor{\n    color: green;\n   }\n\n\n.btn-space {\n    margin-right: 5px;\n}\n\n\n.file-btn{\n    border: black;\n}\n\n\n.third {\n    border-color: #b300b3;\n    color: #695d29;\n    box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;\n    transition: all 150ms ease-in-out;\n  }\n\n\n.third:hover {\n    box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;\n  }\n\n\n.filebtn {\n    box-sizing: border-box;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    background-color: transparent;\n    border: 2px solid #e74c3c;\n    border-radius: 0.6em;\n    color: #e74c3c;\n    cursor: pointer;\n    display: flex;\n    align-self: center;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1;\n    margin: 20px;\n    padding: 1.2em 2.8em;\n    text-decoration: none;\n    text-align: center;\n    text-transform: uppercase;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 700;\n  }\n\n\n.filebtn:hover, .filebtn:focus {\n    color: #ffffff;\n    outline: 0;\n  }\n  \n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7R0FDVDs7O0FBRUE7SUFDQyxZQUFZO0dBQ2I7OztBQUVBO0lBQ0MsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3REFBd0Q7SUFFeEQsaUNBQWlDO0VBQ25DOzs7QUFDQTtJQUNFLDBEQUEwRDtFQUM1RDs7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsd0JBQXdCO09BQ3JCLHFCQUFxQjtZQUNoQixnQkFBZ0I7SUFDeEIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFJZixhQUFhO0lBR0wsa0JBQWtCO0lBQzFCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGdCQUFnQjtFQUNsQjs7O0FBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnRSZWRDb2xvciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuXG4ucmVxdWlyZWQtZmllbGQ6OmFmdGVyIHsgXHRcdFxuICBjb250ZW50OiBcIipcIjtcdFx0XG4gIGNvbG9yOiByZWQ7XHRcdFxuICAgfVx0XG5cbiAgIC5zdWNjZXNzQ29sb3J7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgfVxuXG4gICAuYnRuLXNwYWNlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5maWxlLWJ0bntcbiAgICBib3JkZXI6IGJsYWNrO1xufVxuXG4udGhpcmQge1xuICAgIGJvcmRlci1jb2xvcjogI2IzMDBiMztcbiAgICBjb2xvcjogIzY5NWQyOTtcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICMzNDk4ZGIgaW5zZXQsIDAgMCAwIDAgIzM0OThkYjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLnRoaXJkOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwICMzNDk4ZGIgaW5zZXQsIDAgMCAxMHB4IDRweCAjMzQ5OGRiO1xuICB9XG4gIC5maWxlYnRuIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNzRjM2M7XG4gICAgYm9yZGVyLXJhZGl1czogMC42ZW07XG4gICAgY29sb3I6ICNlNzRjM2M7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEuMmVtIDIuOGVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLmZpbGVidG46aG92ZXIsIC5maWxlYnRuOmZvY3VzIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gIFxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n</style>\n\n<style type=\"text/css\">\n  .log1 {\n    padding-top: 13%;\n  }\n\n  .input-group-addon {\n    box-shadow: 9px 8px 7px #001a33;\n\n  }\n</style>\n\n<div class=\"row \" style=\"padding-top: 2%; padding-bottom:2%;\n\nbackground: url(assets/files/wall.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:100%;\n  height: auto;\">\n\n  <div class=\"col-sm-4\"></div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <div class=\"card-body input-group-addon grad \">\n        <form name=\"userForm\">\n          <h2 *ngIf=\"!form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Add User' |\n            translate }}</h2>\n          <h2 *ngIf=\"form.data.id>0\" class=\"text-primary font-weight-bold\" style=\"text-align: center;\">{{'Update User' |\n            translate }}</h2>\n\n\n          <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div *ngIf=\"form.error && form.message != null\" class=\"alert alert-danger alert-dismissible\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n            {{form.message}}\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Role Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n\n\n                <select class=\"form-control\" name=\"roleId\" [(ngModel)]=\"form.data.roleId\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Role' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.roleList\" [value]=\"obj.key\">{{obj.value}}</option>\n                </select>\n              </div>\n            </div>\n            <span *ngIf=\"form.inputerror.roleId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'role'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.roleId}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'First Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user-circle grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"fn\" [(ngModel)]=\"form.data.firstName\" class=\"form-control\"\n                  placeholder=\"{{'Enter First Name'  | translate }}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.firstName != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{'firstname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.firstName}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Last Name' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"ln\" [(ngModel)]=\"form.data.lastName\" class=\"form-control\"\n                  placeholder=\"{{'Enter Last Name'  | translate }}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.lastName != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{'lastname'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.lastName}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'login Id' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-envelope grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\"\n                  placeholder=\"{{'Enter Login Id'  | translate }}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.loginId != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'email'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.loginId}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Password' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-key grey-text\"></i> </div>\n                </div>\n                <input type=\"password\" name=\"pwd\" [(ngModel)]=\"form.data.password\" class=\"form-control\"\n                  placeholder=\"{{'Enter Password'  | translate }}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.password != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{'password'| translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.password}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Mobile' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"phone\" maxlength=\"10\" [(ngModel)]=\"form.data.phone\" class=\"form-control\"\n                  placeholder=\"{{'Enter Mobile Number' | translate}}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.phone != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'phone'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.phone}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Alternate Mobile' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-mobile grey-text\"></i> </div>\n                </div>\n                <input type=\"text\" name=\"alternateMobile\" maxlength=\"10\" [(ngModel)]=\"form.data.alternateMobile\" class=\"form-control\"\n                  placeholder=\"{{'Enter Alternate Number' | translate}}\">\n              </div>\n            </div><span *ngIf=\"form.inputerror.alternateMobile != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{'mobile'| translate}} </span></div>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.alternateMobile}} </span> -->\n\n\n            <div>\n         \n             <span class=\"pt-2\"><b>{{'DOB' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-table grey-text\"></i> </div>\n                </div>\n                <input type=\"date\" name=\"dob\" [value]=\"form.data.dob | date:'yyyy-MM-dd'\"\n                  (input)=\"form.data.dob=parseDate($event.target.value)\" class=\"form-control form-control-sm\"\n                  required />\n              </div>\n            </div>\n<span *ngIf=\"form.inputerror.dob != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'dob'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.dob}} </span> -->\n          </div>\n          <div>\n            <span class=\"pt-2\"><b>{{'Gender' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-venus grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"form.data.gender\"\n                  style=\"cursor: pointer;\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Please select' | translate }}</option>\n                  <option value=\"Male\">{{'Male' | translate }} </option>\n                  <option value=\"Female\">{{'Female' | translate }} </option>\n                </select>\n              </div>\n            </div><span *ngIf=\"form.inputerror.gender != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'gender'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.gender}} </span> -->\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Image' | translate }}</b>\n              <!-- <option [ngValue]=\"\" value=\"undefined\"></option> -->\n              <span *ngIf=\"!form.data.imageId\" class=\"required-field\"></span></span>\n            <div class=\"col-sm-12\">\n              <div *ngIf=\"form.data.imageId\">\n                <img src=\"http://localhost:8084/User/profilePic/{{form.data.id}}\" height=\"55px\" width=\"80px\">\n              </div>\n              <div *ngIf=\"!form.data.imageId\">\n                <img src=\"../../assets/files/default.jpg\" height=\"55px\" width=\"80px\">\n              </div>\n            </div>\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-picture-o grey-text\"></i> </div>\n                </div>\n                <input type=\"file\" id=\"customFile\" name=\"imageId\" (change)=\"onFileSelect($event.target.files)\"\n                  accept=\"image/*\">\n\n                <span class=\"alertRedColor\"> {{form.inputerror.image}} </span>\n              </div>\n            </div>\n          </div>\n\n          <div>\n            <span class=\"pt-2\"><b>{{'Status' | translate }}</b>\n              <span class=\"required-field\"></span></span>\n\n            <div class=\"col-sm-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-bell grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"form.data.status\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{' Select Status' | translate }}</option>\n                  <option value=\"Active\">{{'Active' | translate }} </option>\n                  <option value=\"Inactive\">{{'Inactive' | translate }} </option>\n                </select>\n              </div>\n            </div><span *ngIf=\"form.inputerror.status != null\" class=\"alertRedColor\" style=\" color: red;\"> {{'status'|\n              translate}} </span>\n            <!-- <span class=\"alertRedColor\"> {{form.inputerror.status}} </span> -->\n          </div>\n          <div class=\"row pt-2 pl-2 pb-3\">\n\n            <div class=\"col-md-3\"></div>\n\n\n            <div class=\"pt-2\">\n              <button *ngIf=\"!form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\n                {{'Save' | translate }}</button>\n            </div>\n\n            <div class=\"col-md-1\"></div>\n\n            <div class=\"pt-2\">\n              <button *ngIf=\"form.data.id>0\" (click)=\"onUpload()\" class=\"btn btn-success mr-2\">\n                {{'Update' | translate }}</button>\n            </div>\n            <div class=\"pt-2\">\n              <a class=\"btn btn-warning mr-1\" type=\"button\" [routerLink]=\"['/userlist']\"\n                  style=\"text-decoration: none; color: white;\">{{'List' | translate }}</a>\n            </div>\n          </div>\n\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var UserComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserComponent, _super);
    function UserComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USER, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.getKey = false;
        _this.selected = null;
        _this.fileToUpload = null;
        _this.userForm = null;
        return _this;
    }
    UserComponent.prototype.submit = function () {
        var _self = this;
        console.log('in submit');
        console.log(this.form);
        console.log(this.form.data);
        this.serviceLocator.httpService.post(this.api.save, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.data.id = res.result.data;
            if (_self.fileToUpload) {
                console.log('rahul');
                _self.myFile();
            }
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("----------Rahul----------.");
            }
            else {
                _self.form.error = true;
                if (res.result.inputerror) {
                    _self.form.inputerror = res.result.inputerror;
                }
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.submit1 = function () {
        var _self = this;
        console.log(this.form + "submit running start");
        console.log(this.form.data + "form data going to be submit");
        this.serviceLocator.httpService.post(this.api.search, this.form.data, function (res) {
            _self.form.message = '';
            _self.form.inputerror = {};
            _self.form.data.id = res.result.data;
            _self.myFile();
            if (res.success) {
                _self.form.message = "Data is saved";
                _self.form.data.id = res.result.data;
                console.log(_self.form.data.id);
                console.log("--------------------.");
            }
            else {
                _self.form.error = true;
                _self.form.inputerror = res.result.inputerror;
                _self.form.message = res.result.message;
            }
            _self.form.data.id = res.result.data;
            console.log('FORM', _self.form);
        });
    };
    UserComponent.prototype.onFileSelect = function (files) {
        this.fileToUpload = files.item(0);
        console.log(this.fileToUpload);
    };
    UserComponent.prototype.onUpload = function (userform) {
        this.submit();
        console.log(this.form.data.id + '---- after submit');
    };
    UserComponent.prototype.myFile = function () {
        var _this = this;
        console.log(this.form.data.id + 'after super.submit-----');
        this.onSubmitProfile(this.fileToUpload, this.userForm).subscribe(function (data) {
            console.log(_this.fileToUpload);
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.onSubmitProfile = function (fileToUpload, userform) {
        var formData = new FormData();
        var phone = null;
        formData.append('file', fileToUpload);
        console.log(this.form.data.id + 'this id number ======');
        return this.httpClient.post("http://localhost:8084/User/profilePic/" + this.form.data.id, formData);
    };
    UserComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.roleId);
        console.log(form.roleId);
        flag = flag && validator.isNotNullObject(form.firstName);
        console.log(form.firstName);
        flag = flag && validator.isNotNullObject(form.lastName);
        console.log(form.lastName);
        flag = flag && validator.isNotNullObject(form.loginId);
        console.log(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        console.log(form.password);
        flag = flag && validator.isNotNullObject(form.phone);
        console.log(form.phone);
        flag = flag && validator.isNotNullObject(form.alternateMobile);
        console.log(form.alternateMobile);
        flag = flag && validator.isNotNullObject(form.dob);
        console.log(form.dob);
        flag = flag && validator.isNotNullObject(form.gender);
        console.log(form.gender + 'gender--');
        flag = flag && validator.isNotNullObject(form.status);
        console.log(form.status + 'status---');
        return flag;
    };
    UserComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        console.log(form.id + 'populate form in usercomponent');
        form.firstName = data.firstName;
        form.lastName = data.lastName;
        form.loginId = data.loginId;
        form.password = data.password;
        form.gender = data.gender;
        console.log(form.gender + 'gender--');
        form.alternateMobile = data.alternateMobile;
        form.phone = data.phone;
        console.log(form.phone);
        form.dob = data.dob;
        form.roleId = data.roleId;
        form.status = data.status;
        form.imageId = data.imageId;
        console.log(form.status + 'status---');
    };
    UserComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    UserComponent.prototype.test = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], UserComponent);
    return UserComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n  .required-field {\n    color: red;\n  }\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add User' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update User' | translate}}</h2>\n            \n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            \n            <div class=\"form-group\">\n              <label><b>{{'Name' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"name\"   [(ngModel)]=\"form.data.name\" class=\"form-control\" placeholder=\"{{'Enter name' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.name}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Login ID' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"loginId\" [(ngModel)]=\"form.data.loginId\" class=\"form-control\" placeholder=\"{{'Enter login ID' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.loginId}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Password' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-lock grey-text\"></i></span>\n                </div>\n                <input type=\"password\" name=\"password\" [(ngModel)]=\"form.data.password\" class=\"form-control\" placeholder=\"{{'Enter password' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.password}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Date of Birth' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-calendar-alt grey-text\"></i></span>\n                </div>\n                <input type=\"date\" name=\"dateOfBirth\" [value]=\"form.data.dateOfBirth | date:'yyyy-MM-dd'\" (input)=\"form.data.dateOfBirth=parseDate($event.target.value)\" class=\"form-control\" required>\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.dateOfBirth}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Mobile' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-phone grey-text\"></i></span>\n                </div>\n                <input type=\"number\" name=\"phone\" (keypress)=\"limitInput($event, 10)\" [(ngModel)]=\"form.data.mobile\" class=\"form-control\"\n                placeholder=\"{{'Enter Mobile Number' | translate}}\"></div>\n              <span class=\"alertRedColor\">{{form.inputerror.mobile}}</span>\n            </div>\n\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' | translate}}</button>\n              <button (click)=\"forward('/userslist')\" type=\"button\" class=\"btn btn-warning\">{{'List' | translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UsersComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersComponent, _super);
    function UsersComponent(locator, route) {
        var _this = _super.call(this, locator.endpoints.USERS, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        return _this;
    }
    UsersComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.name);
        flag = flag && validator.isNotNullObject(form.loginId);
        flag = flag && validator.isNotNullObject(form.password);
        flag = flag && validator.isNotNullObject(form.dateOfBirth);
        flag = flag && validator.isNotNullObject(form.mobile);
        return flag;
    };
    UsersComponent.prototype.limitInput = function (event, maxLength) {
        var target = event.target;
        var value = target.value;
        if (value.length >= maxLength) {
            event.preventDefault();
        }
        else if (!/^(1|9)\d{0,9}$/.test(value + event.key)) {
            event.preventDefault();
        }
    };
    UsersComponent.prototype.limitInputw = function (event, maxLength) {
        var target = event.target;
        var value = target.value;
        if (value.length >= maxLength) {
            event.preventDefault();
        }
        else if (!/^[a-zA-Z]*$\d{0,15}$/.test(value + event.key)) {
            event.preventDefault();
        }
    };
    UsersComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.name = data.name;
        console.log(form.quantity + " inside populateForm method");
        form.loginId = data.loginId;
        form.password = data.password;
        form.dateOfBirth = data.dateOfBirth;
        form.mobile = data.mobile;
        //let ndate = new Date(data.dob);
        //console.log(form.dob + 'date ------',ndate)
    };
    UsersComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], UsersComponent);
    return UsersComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/userslist/userslist.component.css":
/*!***************************************************!*\
  !*** ./src/app/userslist/userslist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzbGlzdC91c2Vyc2xpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/userslist/userslist.component.html":
/*!****************************************************!*\
  !*** ./src/app/userslist/userslist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"content-wrapper\" style=\"padding-top: 3%; padding-bottom: 15%; \nbackground: url(assets/files/gettyimages-1132439283-640x640.jpg) no-repeat center center;\nbackground-attachment: fixed;\nbackground-size: cover;width:auto;\n  height: 90vh;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\" style=\"height: 70px;\">\n\n        <div class=\"text-center\">\n          <h2 class=\"text-primary font-weight-bold\">{{'User List' | translate }}</h2>\n        </div>\n      </div>\n\n      <div class=\"row p-1\">\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.name\"\n            placeholder=\"{{'Search name' | translate }}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.loginId\"\n            placeholder=\"{{'Search Login ID' | translate}}\">\n        </div>\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.dateOfBirth\"\n            placeholder=\"{{'Search Date of Birth' | translate}}\">\n        </div>\n        \n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.mobile\"\n            placeholder=\"{{ 'Search Mobile No' | translate }}\"\n            pattern=\"[a-zA-Z0-9\\s]*\"\n            (input)=\"validateInput($event, 'mobile')\"> \n          <div *ngIf=\"!isValidMobileInput\" class=\"text-danger\">\n            Please enter letters, numbers, and spaces only.\n          </div>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">\n            {{'Search' | translate }}</button>\n        </div>\n        <div class=\"col-lg-2\">\n          <button (click)=\"forward('/users')\" type=\"button\" class=\"btn btn-success\">{{'Add User' | translate }}\n          </button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">\n            {{'Delete'| translate}}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div *ngIf=\"!form.error && form.message != null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{form.message}}\n      </div>\n      <div class=\"p-1\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped table-hover\">\n            <thead class=\"thead-light text-uppercase\">\n              <tr align=\"center\">\n                <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" value=\"h1\"\n                    (change)=\"checkUncheckAll($event)\" /></th>\n                <th>{{'S.No' | translate }}</th>\n                <th>{{'Name' | translate }}</th>\n                <th>{{'Login ID' | translate }}</th>\n                <th>{{'Date of Birth' | translate}}</th>\n                <th>{{'Mobile' | translate }}</th>\n                <th>{{'edit' | translate }}</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n                <td> <input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" id=\"{{m.id}}\"\n                    value=\"{{isMasterSel}}\" />\n                </td>\n                <td> {{(form.pageNo*5)+i+ 1}} </td>\n                <td>{{m.name}}</td>\n                <td>{{m.loginId}}</td>\n                <td>{{m.dateOfBirth | date : 'dd-MM-yyyy'}}</td>\n                <td>{{m.mobile}}</td>\n                <td> \n                  <a (click)=\"forward('/users/' + m.id)\" style=\"cursor: pointer;\">\n                    <i class=\"fa fa-edit text-info\"></i>\n                  </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <table style=\"width: 100%;\">\n            <tr>\n              <td style=\"width: 50%;\"><button (click)=\"previous()\" [disabled]=\"form.pageNo == 0\"\n                  class=\"btn btn-info\">{{'Previous' | translate }} </button>\n              </td>\n              <td *ngIf=\"form.list.length!=0\" style=\"width: 50%;\"></td>\n              <td *ngIf=\"form.list.length==0\" style=\"width: 50%;\"><a class=\"btn btn-warning mr-1\"\n                  [routerLink]=\"['/userslist']\" (click)=\"exit()\">{{'Back' | translate}}</a></td>\n              <td>\n                <button (click)=\"next()\" [disabled]=\"nextList==0\" type=\"button\" class=\"btn btn-info\">{{'Next' |\n                  translate }} </button>\n              </td>\n            </tr>\n          </table>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/userslist/userslist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/userslist/userslist.component.ts ***!
  \**************************************************/
/*! exports provided: UserslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserslistComponent", function() { return UserslistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var UserslistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserslistComponent, _super);
    function UserslistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.USERS, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.myKey = "";
        _this.form = {
            error: false,
            message: null,
            preload: [],
            data: { id: null },
            inputerror: {},
            searchParams: {},
            searchMessage: null,
            list: [],
            pageNo: 0
        };
        _this.isValidMobileInput = true;
        return _this;
    }
    UserslistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'mobile') {
            this.isValidMobileInput = /^[0-9]*$/.test(value); // Check if the input contains only numbers
        }
    };
    UserslistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-userslist',
            template: __webpack_require__(/*! ./userslist.component.html */ "./src/app/userslist/userslist.component.html"),
            styles: [__webpack_require__(/*! ./userslist.component.css */ "./src/app/userslist/userslist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_2__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], UserslistComponent);
    return UserslistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_1__["BaseListCtl"]));



/***/ }),

/***/ "./src/app/utility/data-validator.ts":
/*!*******************************************!*\
  !*** ./src/app/utility/data-validator.ts ***!
  \*******************************************/
/*! exports provided: DataValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataValidator", function() { return DataValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataValidator = /** @class */ (function () {
    function DataValidator() {
    }
    DataValidator.prototype.trim = function (valueToWhite) {
        return valueToWhite.replace(/\s/g, "");
    };
    /**
     * Check is string is not empty
     * @param val
     */
    DataValidator.prototype.isNotNull = function (val) {
        var flag = true;
        try {
            if (val) {
                val = this.trim(val);
                flag = val.length > 0;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
   * Is string is empty
   * @param val
   */
    DataValidator.prototype.isNull = function (val) {
        return !this.isNotNullObject(val);
    };
    /**
     * Is not null object
     */
    DataValidator.prototype.isNotNullObject = function (val) {
        var flag = true;
        try {
            if (val) {
                flag = true;
            }
            else {
                flag = false;
            }
        }
        catch (error) {
            flag = false;
        }
        return flag;
    };
    /**
     * Is null object
     */
    DataValidator.prototype.isNullObject = function (val) {
        return !this.isNotNullObject(val);
    };
    DataValidator.prototype.isTrue = function (val) {
        var flag = true;
        if (val) {
            flag = true;
        }
        else {
            flag = false;
        }
        return flag;
    };
    /**
     *
     * @param val Convets string into number
     */
    DataValidator.prototype.toInt = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseInt(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    DataValidator.prototype.toFloat = function (val) {
        var returnVal = 0;
        if (val) {
            try {
                returnVal = parseFloat(val);
                if (isNaN(returnVal)) {
                    returnVal = 0;
                }
            }
            catch (error) {
                returnVal = 0;
            }
        }
        return returnVal;
    };
    /**
     * Create clone pobject
     *
     * @param obj
     */
    DataValidator.prototype.getClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    DataValidator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataValidator);
    return DataValidator;
}());



/***/ }),

/***/ "./src/app/wish/wish.component.css":
/*!*****************************************!*\
  !*** ./src/app/wish/wish.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpc2gvd2lzaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/wish/wish.component.html":
/*!******************************************!*\
  !*** ./src/app/wish/wish.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  .grad {\n    background-image: linear-gradient(to bottom right, rgb(32, 168, 168), rgb(219, 231, 237));\n    background-repeat: no-repeat;\n    background-size: 100%;\n    padding-bottom: 25px;\n  }\n\n  .background {\n    padding-top: 3%;\n    padding-bottom: 13%;\n    background: url('assets/files/wall.jpg') no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: 100%;\n    height: auto;\n  }\n\n  .required-field {\n    color: red;\n  }\n\n  .alertRedColor {\n    color: red;\n  }\n</style>\n\n<div class=\"container-fluid background\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-sm-8 col-md-6 col-lg-4\">\n      <div class=\"card\">\n        <div class=\"card-body shadow-lg grad\">\n          <form>\n            <h2 *ngIf=\"!form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Add Wish' | translate}}</h2>\n            <h2 *ngIf=\"form.data.id > 0\" class=\"text-primary font-weight-bold\">{{'Update WishList' | translate}}</h2>\n\n            <div *ngIf=\"form.error && form.message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n            <div *ngIf=\"!form.error && form.message\" class=\"alert alert-success alert-dismissible fade show\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n              {{form.message}}\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Product' | translate }}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <div class=\"input-group-text\"><i class=\"fa fa-user grey-text\"></i> </div>\n                </div>\n                <select class=\"form-control\" name=\"category\" [(ngModel)]=\"form.data.product\" aria-label=\"ngSelected\">\n                  <option [ngValue]=\"\" value=\"undefined\">{{'Select Product' | translate }}</option>\n                  <option *ngFor=\"let obj of form.preload.Wlist\" [value]=\"obj.value\">{{obj.value}}</option>\n                </select>\n              </div>\n              <span *ngIf=\"form.inputerror.product != null\" class=\"alertRedColor\">{{form.inputerror.product}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Date' | translate}}</b><span class=\"required-field\">*</span></label>\n              <input type=\"date\" name=\"date\" [value]=\"form.data.date | date:'yyyy-MM-dd'\" (input)=\"form.data.date=parseDate($event.target.value)\" class=\"form-control\" required>\n            </div>\n            <span *ngIf=\"form.inputerror.date != null\" class=\"alertRedColor\" style=\" color: red;\">\n              {{form.inputerror.date}} </span>\n\n            <div class=\"form-group\">\n              <label><b>{{'UserName' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-money-bill grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"UserName\" [(ngModel)]=\"form.data.userName\" class=\"form-control\"\n                  placeholder=\"{{'Enter UserName' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.userName}}</span>\n            </div>\n\n            <div class=\"form-group\">\n              <label><b>{{'Remark' | translate}}</b><span class=\"required-field\">*</span></label>\n              <div class=\"input-group\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"fa fa-money-bill grey-text\"></i></span>\n                </div>\n                <input type=\"text\" name=\"Remark\" [(ngModel)]=\"form.data.remark\" class=\"form-control\"\n                  placeholder=\"{{'Enter Remark' | translate}}\">\n              </div>\n              <span class=\"alertRedColor\">{{form.inputerror.remark}}</span>\n            </div>\n            <div class=\"form-group text-center\">\n              <button *ngIf=\"!form.data.id > 0\" (click)=\"submit()\" [disabled]=\"!validate()\" class=\"btn btn-success mr-2\">{{'Save' | translate}}</button>\n              <button *ngIf=\"form.data.id > 0\" (click)=\"submit()\" class=\"btn btn-success mr-2\">{{'Update' | translate}}</button>\n              <button (click)=\"forward('/wishlist')\" type=\"button\" class=\"btn btn-warning\">{{'List' | translate}}</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/wish/wish.component.ts":
/*!****************************************!*\
  !*** ./src/app/wish/wish.component.ts ***!
  \****************************************/
/*! exports provided: WishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishComponent", function() { return WishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ "./src/app/base.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var WishComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WishComponent, _super);
    function WishComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.WISH, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        return _this;
    }
    WishComponent.prototype.validateForm = function (form) {
        var flag = true;
        var validator = this.serviceLocator.dataValidator;
        flag = flag && validator.isNotNullObject(form.product);
        flag = flag && validator.isNotNullObject(form.date);
        flag = flag && validator.isNotNullObject(form.userName);
        flag = flag && validator.isNotNullObject(form.remark);
        return flag;
    };
    WishComponent.prototype.populateForm = function (form, data) {
        form.id = data.id;
        form.product = data.product;
        form.date = data.date;
        form.userName = data.userName;
        form.remark = data.remark;
    };
    WishComponent.prototype.parseDate = function (dateString) {
        if (dateString) {
            return new Date(dateString);
        }
        return null;
    };
    WishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wish',
            template: __webpack_require__(/*! ./wish.component.html */ "./src/app/wish/wish.component.html"),
            styles: [__webpack_require__(/*! ./wish.component.css */ "./src/app/wish/wish.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], WishComponent);
    return WishComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseCtl"]));



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0L3dpc2hsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<style>\n  #nnn {\n    background: none;\n    border: none;\n    cursor: pointer;\n  }\n\n  .panel-heading {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .search-inputs {\n    margin-top: 20px;\n  }\n\n  .search-inputs .form-control,\n  .search-inputs .btn {\n    margin-bottom: 10px;\n  }\n\n  .content-wrapper {\n    background: url(assets/files/1024.jpg) no-repeat center center;\n    background-attachment: fixed;\n    background-size: cover;\n    width: auto;\n    height: 105vh;\n    padding: 20px;\n  }\n\n  .table-responsive {\n    margin-top: 20px;\n  }\n</style>\n\n<div class=\"content-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"panel panel-primary\">\n      <div class=\"panel-heading\">\n        <h1 class=\"text-primary font-weight-bold\">{{ 'Wish List' | translate }}</h1>\n      </div>\n\n      <div class=\"row search-inputs p-1 justify-content-center\">\n        <div class=\"col-sm-2\">\n          <select class=\"form-control\" name=\"product\" [(ngModel)]=\"form.searchParams.product\">\n            <option [ngValue]=\"undefined\">{{ 'Select Product' | translate }}</option>\n            <option *ngFor=\"let obj of form.preload.Wlist\" [value]=\"obj.value\">{{ obj.value }}</option>\n          </select>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.searchParams.date\" placeholder=\"{{ 'Search Date' | translate }}\">\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.userName\" placeholder=\"{{ 'Search Username' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n            (input)=\"validateInput($event, 'userName')\">\n          <div *ngIf=\"!isValidUserNameInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n\n        <div class=\"col-sm-2\">\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"form.searchParams.remark\" placeholder=\"{{ 'Search Remark' | translate }}\" pattern=\"[A-Za-z\\s]*\"\n            (input)=\"validateInput($event, 'remark')\">\n          <div *ngIf=\"!isValidRemarkInput\" class=\"text-danger\">\n            Please enter letters and spaces only.\n          </div>\n        </div>\n\n        <div class=\"col-sm-1\">\n          <button (click)=\"submit()\" class=\"btn btn-primary\">{{ 'Search' | translate }}</button>\n        </div>\n        <div class=\"col-sm-2\">\n          <button (click)=\"forward('/wish')\" type=\"button\" class=\"btn btn-success\">{{ 'Add Wish' | translate }}</button>\n        </div>\n        <div class=\"col-sm-1\">\n          <button (click)=\"deleteMany()\" class=\"btn btn-danger\">{{ 'Delete' | translate }}</button>\n        </div>\n      </div>\n\n      <div *ngIf=\"form.error\" class=\"alert alert-danger alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n      <div *ngIf=\"!form.error && form.message !== null\" class=\"alert alert-success alert-dismissible\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        {{ form.message }}\n      </div>\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered table-hover font-weight-bold text-dark\">\n          <thead class=\"thead-dark text-uppercase\">\n            <tr align=\"center\">\n              <th><input type=\"checkbox\" [(ngModel)]=\"isMasterSel\" name=\"list_name\" (change)=\"checkUncheckAll($event)\" /></th>\n              <th>{{ 'S.No' | translate }}</th>\n              <th>{{ 'Product' | translate }}</th>\n              <th>{{ 'Date' | translate }}</th>\n              <th>{{ 'UserName' | translate }}</th>\n              <th>{{ 'Remark' | translate }}</th>\n              <th>{{ 'Edit' | translate }}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let m of form.list; let i = index\" align=\"center\">\n              <td><input type=\"checkbox\" #checkboxes (change)=\"checklistUpdate()\" name=\"list_name\" [id]=\"m.id\" /></td>\n              <td>{{ (form.pageNo * 5) + i + 1 }}</td>\n              <td>{{ m.product }}</td>\n              <td>{{ m.date | date:'dd-MM-yyyy' }}</td>\n              <td>{{ m.userName }}</td>\n              <td>{{ m.remark }}</td>\n              <td>\n                <button class=\"fa fa-edit text-primary\" id=\"nnn\" (click)=\"forward('/wish/' + m.id)\"></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n\n        <div class=\"d-flex justify-content-between mt-3\">\n          <button (click)=\"previous()\" [disabled]=\"form.pageNo === 0\" class=\"btn btn-info\">{{ 'Previous' | translate }}</button>\n          <div *ngIf=\"form.list.length === 0\">\n            <a class=\"btn btn-warning mr-1\" [routerLink]=\"['/wishlist']\" (click)=\"exit()\">{{ 'Back' | translate }}</a>\n          </div>\n          <button (click)=\"next()\" [disabled]=\"nextList === 0\" class=\"btn btn-info\">{{ 'Next' | translate }}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-list.component */ "./src/app/base-list.component.ts");
/* harmony import */ var _service_locator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-locator.service */ "./src/app/service-locator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var WishlistComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WishlistComponent, _super);
    function WishlistComponent(locator, route, httpClient) {
        var _this = _super.call(this, locator.endpoints.WISH, locator, route) || this;
        _this.locator = locator;
        _this.route = route;
        _this.httpClient = httpClient;
        _this.isValidUserNameInput = true;
        _this.isValidRemarkInput = true;
        return _this;
    }
    WishlistComponent.prototype.validateInput = function (event, field) {
        var value = event.target.value;
        if (field === 'userName') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            this.isValidUserNameInput = !containsNonAlphabetic;
        }
        if (field === 'remark') {
            var containsNonAlphabetic = /[^\sa-zA-Z]/.test(value);
            this.isValidRemarkInput = !containsNonAlphabetic;
        }
    };
    WishlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_locator_service__WEBPACK_IMPORTED_MODULE_3__["ServiceLocatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], WishlistComponent);
    return WishlistComponent;
}(_base_list_component__WEBPACK_IMPORTED_MODULE_2__["BaseListCtl"]));



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

module.exports = __webpack_require__(/*! /Users/raj/Desktop/TestModules/ORSProject10-UIFctl/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map