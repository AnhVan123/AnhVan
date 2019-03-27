import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pipePhone'
})
export class PipePhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    value = '(+84)' + value.replace(/-/g, ''); // xoa bo ky tu '-'
    return value;
  }

}
