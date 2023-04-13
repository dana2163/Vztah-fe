import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
//import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // Príklad trasy pre domovskú stránku
  {
    path: '',
    component: HomeComponent
  },
  // Príklad trasy pre stránku "O aplikácii"
  //{
    //path: 'about',
    //component: AboutComponent
  //},
  // Pridajte ďalšie trasy podľa vašich potrieb
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
