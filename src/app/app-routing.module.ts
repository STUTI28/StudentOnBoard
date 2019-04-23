import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStudentComponent } from './list-student/list-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'list-stusent', component: ListStudentComponent },
  { path: 'onboard-student/:id', component: AddStudentComponent },
  { path: '', component: ListStudentComponent }
];
export const appRoutin = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule { }

