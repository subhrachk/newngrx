import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './Component/Employee/employee.component';
import { NewemployeeComponent } from './Component/Employee/NewEmployee/newemployee.component';
import { FormsModule } from '@angular/forms';
import { employeeReducer } from './Component/Employee/State/employee.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    NewemployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({'employees' : employeeReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
