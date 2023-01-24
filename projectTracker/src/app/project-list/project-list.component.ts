import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../models/mocks/projects.mock';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  searchKey: string;
  allProjects: Project[];
  projects:Project[];

  constructor(private projectsService: ProjectService, private activeRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    //aslında en ideal filtreleme rest api'den yapılmalı; yani tıklanan departmanın id'si api'ye gönderilmeli ve api filtrelemeli 

    this.projectsService.getProjects().subscribe(data => {
      this.allProjects = data;
      this.activeRoute.params.subscribe(data => {
        console.log(data['id']);
        this.projects = data['id'] != undefined ? this.allProjects.filter(p=>p.departmentId == data['id']) 
                                                : this.allProjects;
      });
      


    });
  }


}
