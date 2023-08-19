import { createAction, props } from "@ngrx/store";
import { employeetype, newemployeetype } from "../employee.component";

export const addEmployee = createAction('[Employee Component] AddEmployee', props<{props : newemployeetype}>());