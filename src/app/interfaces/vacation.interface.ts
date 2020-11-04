export interface IVacation {
  dayofyear: number;
  edate: string;
  empl_id: number;
  hg_year: string;
  length: number;
  sdate: string;
  status_color: string;
  status_id: number;
  status_name: string;
  tab_no: string;
  type_id: number;
  type_name: string;
}

export enum VacationStatusEnum {
  Approved = 2,
  EmplApproved = 1
}

export enum VacationTypeEnum {
  Plan = 1,
  Fact = 10
}
