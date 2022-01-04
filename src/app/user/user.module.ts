import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user/user.component';
import {EditComponent} from './edit/edit.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CreateComponent } from './create/create.component';
import {SharedButtonModule} from "../shared-button/shared-button.module";
import {UserService} from "./user.service";
import {UserFormComponent} from "./user-form/user-form.component";
import {FormValidationDirective} from "./form-validation.directive";

const route: Routes = [
  {path: '', component: UserComponent},
  {path: 'create', component: CreateComponent},
  {path: ':id', component: EditComponent},
]

@NgModule({
  declarations: [
    UserComponent,
    EditComponent,
    CreateComponent,
    UserFormComponent,
    FormValidationDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    SharedButtonModule,
    FormsModule
  ],
  providers:[
    UserService
  ],
})
export class UserModule {
}
