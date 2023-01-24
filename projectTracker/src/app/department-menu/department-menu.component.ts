import { Component } from '@angular/core';
import { Department } from '../models/department';
import { departments } from '../models/mocks/departments.mock';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent {
  departments: Department[] = departments;

}
