import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OsobyComponent } from './osoby/osoby.component';
import { VztahyComponent } from './vztahy/vztahy.component';
import { MailingListyComponent } from './mailing-listy/mailing-listy.component';

const routes: Routes = [
  { path: '', redirectTo: '/osoby', pathMatch: 'full' },
  { path: 'osoby', component: OsobyComponent },
  { path: 'vztahy', component: VztahyComponent },
  { path: 'mailing-listy', component: MailingListyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    OsobyComponent,
    VztahyComponent,
    MailingListyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
