import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchKey: string): any[] {
    return searchKey != undefined ? value.filter(pr => pr.name.toLowerCase().includes(searchKey.toLocaleLowerCase())) :
      value;
  }

}
