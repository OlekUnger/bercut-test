import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { IVacation, VacationTypeEnum } from './interfaces/vacation.interface';
import { VacationModel } from './models/vacation.model';
import { VacationService } from './services/vacation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'bercut-test';
  public vacationMap: VacationModel[] = [];
  public months: IMonth[] = [];
  public year: string = '2020';
  public popupId: number;

  constructor(private vacationService: VacationService) {}

  public ngOnInit() {
    this.vacationService.getVacations().subscribe(res => {
      this.vacationMap = res;
    });
    this.months = this.getCalendar();
  }

  public showPopup(id: number) {
    this.popupId = id;
  }

  // формируем календарь
  public getCalendar(year: string = this.year) {
    const months = [];
    moment.localeData('ru').months().forEach((i, ind) => {
      const index = moment().locale('ru').month(ind).format("MM");
      const days = moment(`${year}-${index}`, "YYYY-MM").daysInMonth();
      months.push({index, name: i, days});
    });
    return months;
  }

  // получаем цвет ячейки
  public setStyle(v: VacationModel, day: number, type: string) {
    const vacations = v.vacations.filter(a => Number(a.type_id) === VacationTypeEnum[type]);

    let color = '';
    vacations.forEach(i => {
      if (Number(day) >= Number(i.dayofyear) && Number(day) <= Number(i.dayofyear) + Number(i.length)) {
        color =  i.status_color;
      }
    });

    return color;
  }

  // период отпусков для popup
  public getVacationPeriods(v: IVacation[]) {
    const vacations = v.filter(a => Number(a.type_id) === VacationTypeEnum.Fact);
    const periods = [];
    vacations.forEach(i => {
      periods.push(i.length);
    });
    return periods;
  }


  public setTodayStyle(day: number) {
    return day === moment().dayOfYear();
  }

  public getDayOfYear(month, day) {
    return  (Date.UTC(Number(this.year), month - 1, day) - Date.UTC(Number(this.year), 0, 1)) / 86400000 + 1;
  }
}

export interface IMonth {
  index: string;
  name: string;
  days: number;
}
