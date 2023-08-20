import { Component, EventEmitter, Output } from "@angular/core";
import { employeetype, newemployeetype } from "../employee.component";
import { NgForm } from "@angular/forms";
import { EmployeeService } from '../employee.service';
import { Store } from "@ngrx/store";
import { addEmployee } from "../State/employee.action";


@Component({
    selector: 'app-new-employee',
    templateUrl: './newemployee.component.html',
    styleUrls: ['./newemployee.component.css']
})

export class NewemployeeComponent {
//@Output()  onCreateNewEmployee = new EventEmitter<newemployeetype>();

    first: string = '';
    last: string = '';
    age: number = 0;

    constructor(
        //private employeeService : EmployeeService,
        private store : Store<{employees : employeetype[]}>
        ) {

    }

    createEmployee(e:NgForm) {
        this.store.dispatch(addEmployee({payload : {first : e.value.firstname, last : e.value.lastname, age : e.value.age}}));
       //this.onCreateNewEmployee.emit(e.value);
       //this.employeeService.addEmployee({first : e.value.firstname, last : e.value.lastname, age : e.value.age});
       this.first = '';
       this.last = '';
       this.age = 0;
    }

}