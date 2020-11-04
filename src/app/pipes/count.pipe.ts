import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'count'})
export class CountPipe implements PipeTransform {
  transform(value): any {
    const res = [];
    for (let i = 1; i < value; i++) {
      res.push(i);
    }
    return res;
  }
}
