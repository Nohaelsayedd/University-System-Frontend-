import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-management/components/student-list/student-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'students' , component: StudentListComponent},
  {path: '', component: HomeComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
