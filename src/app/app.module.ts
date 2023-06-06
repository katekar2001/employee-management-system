import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { HttpClientModule } from '@angular/common/http';
import { AddemployeeComponent } from './addemployee/addemployee.component'
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShowdataComponent,
    AddemployeeComponent,
    DeleteemployeeComponent,
    UpdateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
