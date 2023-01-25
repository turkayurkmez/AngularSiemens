import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department';
import { DepartmentObject } from '../models/departmentObject';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  constructor(private departmentService: DepartmentService) {

  }
  //interface yerine; concrete (interface'i implemente etmiş bir nesne) kullandık. 
  department: Department = {} as Department;

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.department = form.value;
      console.log(this.department);
      this.departmentService.addDepartment(this.department).subscribe(data => {
        console.log(data + 'sended...');
        location = location;
        //Bu hile yerine, redux (ngrx) kullanarak; store üzerine bir add_department action'ı çalıştırılır
        //ve reducer'ın observable koleksiyona yeni bir eleman eklemesi (push()) sağlanabilir.
      });

    }
    else {
      console.log('form denetimi başarısız');
    }
  }

}
