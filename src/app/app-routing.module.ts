import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OsobyComponent} from "./osoby/osoby.component";
import {VztahyComponent} from "./vztahy/vztahy.component";
import {MailingListyComponent} from "./mailing-listy/mailing-listy.component";


const routes: Routes = [
  { path: '', component: OsobyComponent },
  { path: 'vztahy', component: VztahyComponent },
  { path: 'mailing-listy', component: MailingListyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
