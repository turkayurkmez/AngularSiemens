import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department';
import { departments } from '../models/mocks/departments.mock';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent implements OnInit {
  departments: Department[];

  constructor(private departmentService: DepartmentService) {

  }
  ngOnInit(): void {
      this.departmentService.url;
      this.departmentService.getDepartments()
                            .subscribe(data => this.departments = data);
  }



}
