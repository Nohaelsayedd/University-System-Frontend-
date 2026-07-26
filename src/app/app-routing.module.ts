import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-management/components/student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { StudentFormComponent } from './student-management/components/student-form/student-form.component';
import { StudentFormReactiveComponent } from './student-management/components/student-form-reactive/student-form-reactive.component';

const routes: Routes = [
  {path: 'students' , component: StudentListComponent},
  {path: '', component: HomeComponent },
  {path:'students/add', component: StudentFormComponent},
  {path:'students/edit/:id', component: StudentFormComponent},
  {path: 'students/add/reactive', component: StudentFormReactiveComponent},
  {path: 'students/edit/reactive/:id', component: StudentFormReactiveComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
