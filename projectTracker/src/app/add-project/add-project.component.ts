import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, from, of } from 'rxjs';
import { Department } from '../models/department';
import { Project } from '../models/project';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  // items = of(1,2,3,4)
  // another = from([1,2,3,5]);
  // subject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  // test(){
  //   //this.items.subscribe(data=> console.log(data));

  //   this.subject.subscribe(x=>console.log(x));

  //   this.subject.next(19);
  //   this.subject.next(21);
  //   this.subject.next(13);

  constructor(private builder: FormBuilder, private departmentService: DepartmentService) {

  }


  addProjectForm: FormGroup;
  departments: Department[];
  project: Project;

  ngOnInit(): void {
    this.addProjectForm = this.builder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      departmentId: ['', Validators.required]
    });

    this.departmentService.getDepartments().subscribe(data => this.departments = data);
  }

  checkNameIsEmpty(): boolean | undefined {
    return this.addProjectForm.get('name')?.hasError('required') &&
      this.addProjectForm.get('name')?.dirty;
  }

  checkNameIsMinLengthThree(): boolean | undefined {
    return this.addProjectForm.get('name')?.hasError('minlength');
  }

  checkDescriptionIsEmpty(): boolean | undefined {
    return this.addProjectForm.get('description')?.hasError('required') &&
      this.addProjectForm.get('description')?.dirty;
  }

  checkDepartmentIsEmpty(): boolean | undefined {
    return this.addProjectForm.get('departmentId')?.hasError('required') &&
      this.addProjectForm.get('departmentId')?.touched;
  }

  addProject(){
    if (this.addProjectForm.valid) {
      this.project = this.addProjectForm.value;
      console.log('Proje eklendi',this.project);
    }
  }

}

