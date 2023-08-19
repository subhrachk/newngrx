import { Component } from "@angular/core";
//import { EmployeeService } from './employee.service';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";


export type employeetype = {
    id: number, first : string, last : string , age : number
}

export type newemployeetype = {
    first : string, last : string , age : number
}

@Component({
    selector : 'app-employee',
    templateUrl : './employee.component.html',
    styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {

    employees$ : Observable<employeetype[]> = new Observable();
    // employees : employeetype[] =  [{id : 1, first : 'Subhranil' , last : 'Chakraborty', age : 50},
    // {id : 2, first : 'Esha', last :'Chakraborty', age : 19},
    // {id : 3, first : 'Rahul', last: 'Bose', age : 60}];

    constructor(
        //private employeeService : EmployeeService,
        private store : Store<{employees : employeetype[]}>
        ) {
            //console.log(store.select(asy'employees'));
            //store.select('employees').subscribe(emp => console.log(emp));
            this.employees$ = store.select('employees');
    //this.employees = employeeService.employees;
    }


    // createnewEmployee(e : any) {
    //     let newid : number = Math.max(...this.employees.map(emp => emp.id))+1;
    //     let newemp : employeetype = {id : newid , first : e.firstname, last : e.lastname, age : e.age} ;
    //     this.employees.push(newemp);
    // }

}