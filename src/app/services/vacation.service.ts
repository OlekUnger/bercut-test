import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VacationModel } from '../models/vacation.model';
import { VacationResponseModel } from '../models/vacation.response.model';

@Injectable({providedIn: 'root'})
export class VacationService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  public getVacations(): Observable<VacationModel[]> {
    return this.http.get<VacationResponseModel>(`${this.baseUrl}/vacations`)
      .pipe(map(res => {
        return res.result.empls.map(empl => {
          const vacations = res.result.dates.filter(i => i.empl_id === empl.empl_id);
          return new VacationModel(empl, vacations);
        });
      }));
  }
}
