import { Injectable } from '@angular/core';
import { OsobyService } from './osoby.service';

@Injectable({
  providedIn: 'root'
})
export class MailingListyService {
  constructor(private osobyService: OsobyService) {}

  getRodiciaEmaily(): string[] {
    const rodicia = this.osobyService.getOsobyByTyp('rodič');
    return rodicia.map(o => o.meno.replace(/\s/g, '.') + '@skola.edu');
  }

  getUciteliaEmaily(): string[] {
    const ucitelia = this.osobyService.getOsobyByTyp('učiteľ');
    return ucitelia.map(o => o.meno.replace(/\s/g, '.') + '@skola.edu');
  }

}
