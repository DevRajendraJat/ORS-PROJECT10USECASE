
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from "./course/course.component";
import { SubjectComponent } from "./subject/subject.component"
import { Subject, from } from 'rxjs';
import { RoleListComponent } from './role/role-list.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MyprofileComponent } from './user/myprofile.component';
import { OrderComponent } from './order/order.component';
import { JobComponent } from './job/job.component';
import { JobListComponent } from './job/job-list.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClientComponent } from './client/client.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ShopingCartlistComponent } from './shoping-cartlist/shoping-cartlist.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { PatientComponent } from './patient/patient.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { LeadComponent } from './lead/lead.component';
import { WishComponent } from './wish/wish.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LeadlistComponent } from './leadlist/leadlist.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PrescriptionlistComponent } from './prescriptionlist/prescriptionlist.component';
import { UsersComponent } from './users/users.component';
import { UserslistComponent } from './userslist/userslist.component';
import { FollowupComponent } from './followup/followup.component';
import { FollowuplistComponent } from './followuplist/followuplist.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierlistComponent } from './supplierlist/supplierlist.component';
import { RouteComponent } from './route/route.component';
import { RoutelistComponent } from './routelist/routelist.component';
import { TransportationComponent } from './transportation/transportation.component';
import { TransportationlistComponent } from './transportationlist/transportationlist.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'loader',
        component: LoaderComponent

    },
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'login/:userparams',
        component: LoginComponent
    },

    {
        path: 'spinner',
        component: SpinnerComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'message',
        component: MessageComponent,

    },
    {
        path: 'message/:id',
        component: MessageComponent
    },
    {
        path: 'messagelist',
        component: MessageListComponent

    },
    {
        path: 'marksheet',
        component: MarksheetComponent

    },
    {
        path: 'marksheet/:id',
        component: MarksheetComponent

    },
    {
        path: 'marksheetlist',
        component: MarksheetListComponent

    },
    {
        path: 'marksheetmeritlist',
        component: MarksheetmeritListComponent

    },
    {
        path: 'getmarksheet',
        component: GetmarksheetComponent

    },
    {
        path: 'college',
        component: CollegeComponent

    },
    {
        path: 'college/:id',
        component: CollegeComponent

    },
    {
        path: 'collegelist',
        component: CollegeListComponent

    },
    {
        path: 'student',
        component: StudentComponent

    },
    {
        path: 'student/:id',
        component: StudentComponent

    },
    {
        path: 'studentlist',
        component: StudentListComponent

    },
    {
        path: 'user',
        component: UserComponent

    },
    {
        path: 'user/:id',
        component: UserComponent

    },
    {
        path: 'userlist',
        component: UserListComponent

    },
    {
        path: 'role',
        component: RoleComponent

    },
    {
        path: 'rolelist',
        component: RoleListComponent

    },
    {
        path: 'role/:id',
        component: RoleComponent

    },
    {
        path: 'course',
        component: CourseComponent

    },



    {
        path: 'supplier',
        component: SupplierComponent

    },
    {
        path: 'supplier/:id',
        component: SupplierComponent

    },
    {
        path: 'supplierlist',
        component: SupplierlistComponent

    },

    {
        path: 'route',
        component: RouteComponent

    },
    {
        path: 'route/:id',
        component: RouteComponent

    },
    {
        path: 'routelist',
        component: RoutelistComponent

    },

    {
        path: 'courselist',
        component: CourseListComponent

    },

    {
        path: 'followup',
        component: FollowupComponent

    },
    {
        path: 'followup/:id',
        component: FollowupComponent

    },
    {
        path: 'followuplist',
        component: FollowuplistComponent

    },


    {
        path: 'course/:id',
        component: CourseComponent

    },
    {

        path: 'faculty',
        component: FacultyComponent

    },
    {
        path: 'facultylist',
        component: FacultyListComponent

    },
    {
        path: 'faculty/:id',
        component: FacultyComponent

    },
    {
        path: 'timetable',
        component: TimetableComponent


    },
    {
        path: 'timetablelist',
        component: TimetableListComponent

    },
    {
        path: 'timetable/:id',
        component: TimetableComponent

    },
    {
        path: 'subject',
        component: SubjectComponent

    },
    {
        path: 'subjectlist',
        component: SubjectListComponent

    },
    {
        path: 'order',
        component: OrderComponent

    },
    {
        path: 'order/:id',
        component: OrderComponent

    },
    {
        path: 'orderlist',
        component: OrderlistComponent

    },
    {
        path: 'employee',
        component: EmployeeComponent

    },
    {
        path: 'employee/:id',
        component: EmployeeComponent

    },
    {
        path: 'employeelist',
        component: EmployeelistComponent

    },


    {
        path: 'ShopingCart',
        component: ShopingCartComponent

    },

    {
        path: 'ShopingCartlist',
        component: ShopingCartlistComponent

    },
    {
        path: 'ShopingCart/:id',
        component: ShopingCartComponent

    },

    {
        path: 'job',
        component: JobComponent

    },
    {
        path: 'job/:id',
        component: JobComponent

    },
    {
        path: 'joblist',
        component: JobListComponent

    },
    {
        path: 'client',
        component: ClientComponent

    },
    {
        path: 'client/:id',
        component: ClientComponent

    },
    {
        path: 'clientlist',
        component: ClientlistComponent

    },


    {
        path: 'users',
        component: UsersComponent

    },
    {
        path: 'users/:id',
        component: UsersComponent

    },
    {
        path: 'userslist',
        component: UserslistComponent

    },




    {
        path: 'prescription',
        component: PrescriptionComponent

    },
    {
        path: 'prescription/:id',
        component: PrescriptionComponent

    },
    {
        path: 'prescriptionlist',
        component: PrescriptionlistComponent

    },



    {
        path: 'job',
        component: JobComponent

    },
    {
        path: 'job/:id',
        component: JobComponent

    },
    {
        path: 'joblist',
        component: JobListComponent

    },
    {
        path: 'lead',
        component: LeadComponent

    },
    {
        path: 'lead/:id',
        component: LeadComponent

    },


    {
        path: 'transportation',
        component: TransportationComponent

    },
    {
        path: 'transportation/:id',
        component: TransportationComponent

    },
    {
        path: 'transportationlist',
        component: TransportationlistComponent

    },

    {
        path: 'leadlist',
        component: LeadlistComponent

    },
    {
        path: 'patient',
        component: PatientComponent

    },
    {
        path: 'patient/:id',
        component: PatientComponent

    },
    {
        path: 'patientlist',
        component: PatientlistComponent

    },

    {
        path: 'shoping',
        component: ShopingCartComponent

    },
    {
        path: 'shoping/:id',
        component: ShopingCartComponent

    },
    {
        path: 'shopinglist',
        component: ShopingCartlistComponent

    },


    {
        path: 'wish',
        component: WishComponent

    },
    {
        path: 'wish/:id',
        component: WishComponent

    },
    {
        path: 'wishlist',
        component: WishlistComponent

    },



    {
        path: 'subject/:id',
        component: SubjectComponent

    },
    {
        path: 'myprofile',
        component: MyprofileComponent
    },
    {
        path: 'file',
        component: FileComponent
    },
    {
        path: 'changepassword',
        component: ChangepasswordComponent


    },



];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})


export class AppRoutingModule { }