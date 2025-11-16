import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  standalone: true,
})
export class ObjectKeysPipe implements PipeTransform {
  transform(value: any): any[] {
    return value ? Object.keys(value) : [];
  }
}
