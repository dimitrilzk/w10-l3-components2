import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RubricaPage } from './rubrica/rubrica.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'rubrica'

  },
  {
    path: 'rubrica',
    component: RubricaPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
