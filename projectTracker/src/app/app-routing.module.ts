import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path:'', component:ProjectListComponent},
  {path:'projeler', component:ProjectListComponent},
  {path:'anasayfa',component:ProjectListComponent},
  {path:'departmanEkle', component:AddDepartmentComponent},
  {path:'projeEkle', component:AddProjectComponent},
  {path:'projeler/kategori/:id', component:ProjectListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
