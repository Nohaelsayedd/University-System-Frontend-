import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCardComponent } from './student-management/components/student-card/student-card.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StudentListComponent } from './student-management/components/student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentFormComponent } from './student-management/components/student-form/student-form.component';
import { StudentFormReactiveComponent } from './student-management/components/student-form-reactive/student-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentCardComponent,
    HeaderComponent,
    FooterComponent,
    StudentListComponent,
    HomeComponent,
    StudentFormComponent,
    StudentFormReactiveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
