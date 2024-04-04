import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'absolute'
})
export class AbsolutePipe implements PipeTransform {

  transform(num: any, args?: any): any {
    return Math.abs(num);
  }

}
