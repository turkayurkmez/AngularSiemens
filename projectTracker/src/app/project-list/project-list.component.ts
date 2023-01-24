import { Component } from '@angular/core';
import { projects } from '../models/mocks/projects.mock';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  searchKey: string;
  projects:Project[]  = projects;
}
