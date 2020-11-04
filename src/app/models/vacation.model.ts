import { IEmployee } from '../interfaces/employee.interface';
import { IVacation } from '../interfaces/vacation.interface';


export class VacationModel {
 employee: IEmployee;
 vacations: IVacation[];
 asd: any[] = [];

 constructor(empl: IEmployee, dates: IVacation[]) {
   this.employee = empl;
   this.vacations = dates;
 }


}
