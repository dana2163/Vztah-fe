import { Component, OnInit } from '@angular/core';
import {Osoba} from "../common/model/osoby.model";
import {OsobyService} from "../common/service/osoby.service";

@Component({
  selector: 'app-osoby',
  template: ''

})
export class OsobyComponent implements OnInit {
  osoby: Osoba[]; // pole objektov typu Osoba
  meno: string; // meno novej osoby
  typ: string; // typ novej osoby

  constructor(private osobyService: OsobyService) {}

  ngOnInit() {
    // Pri inicializácii komponentu získame existujúce osoby z OsobyService
    this.osoby = this.osobyService.getOsoby();
  }

  pridajOsobu() {
    // Použijeme metódu pridajOsobu z OsobyService na pridanie novej osoby
    this.osobyService.pridajOsobu(this.meno, this.typ);

  }
}
