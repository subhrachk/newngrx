import { Injectable } from "@angular/core";
import { employeetype, newemployeetype } from "./employee.component";

@Injectable({providedIn:'root'})

export class EmployeeService {

    employees : employeetype[] =  [{id : 1, first : 'Subhranil' , last : 'Chakraborty', age : 50},
    {id : 2, first : 'Esha', last :'Chakraborty', age : 19},
    {id : 3, first : 'Rahul', last: 'Bose', age : 60}];

    addEmployee(e : newemployeetype) {
        let newid : number = Math.max(...this.employees.map(emp => emp.id))+1;
        let newemp : employeetype = {id : newid , first : e.first, last : e.last, age : e.age} ;
        this.employees.push(newemp);
        
    }
}