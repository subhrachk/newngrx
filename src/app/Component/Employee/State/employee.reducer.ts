import { createReducer, on, props } from '@ngrx/store';
import { employeetype, newemployeetype } from "../employee.component";
import { addEmployee } from "./employee.action";

export const initialState : employeetype[] =  [{id : 1, first : 'Subhranil' , last : 'Chakraborty', age : 50},
{id : 2, first : 'Esha', last :'Chakraborty', age : 19},
{id : 3, first : 'Rahul', last: 'Bose', age : 60}];

export const employeeReducer = createReducer(
    initialState,
    on(addEmployee,(state : employeetype[], action) => 
    { 
        console.log(action);
        //let newid : number = Math.max(...state.map(emp => emp.id))+1;
        //let newemp : employeetype = {id : newid , first : action.payload.first, last : action.payload.last, age : action.payload.age} ;
        let newemp : employeetype = {id : 5 , first : 'test', last : 'test', age : 40} ;
        let newstate = [...state,newemp];
        return newstate;
    })
);
