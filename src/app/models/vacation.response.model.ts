import { IEmployee } from '../interfaces/employee.interface';
import { IVacation } from '../interfaces/vacation.interface';

export interface VacationResponseModel {
    code: number;
    message: string;
    result: {
      dates: IVacation[];
      empls: IEmployee[];
    };

}
