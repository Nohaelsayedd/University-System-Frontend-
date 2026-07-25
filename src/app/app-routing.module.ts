import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-management/components/student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './student-management/components/add-student/add-student.component';

const routes: Routes = [
  {path: 'students' , component: StudentListComponent},
  {path: '', component: HomeComponent },
  {path:'students/add', component: AddStudentComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
