import { Component, OnInit } from '@angular/core';
import { OsobyService } from '../common/service/osoby.service';

@Component({
  selector: 'app-mailing-listy',
  templateUrl: './mailing-listy.component.html',
  styleUrls: ['./mailing-listy.component.css']
})
export class MailingListyComponent implements OnInit {
  rocniky: any[]; // pole ročníkov
  rodicia: any[]; // pole rodičov
  ucitelia: any[]; // pole učiteľov

  constructor(private osobyService: OsobyService) {}

  ngOnInit() {
    // Inicializujeme pole ročníkov s id a názvom
    this.rocniky = [
      { id: 1, nazov: '1. ročník' },
      { id: 2, nazov: '2. ročník' },
      { id: 3, nazov: '3. ročník' },
      { id: 4, nazov: '4. ročník' },
      { id: 5, nazov: '5. ročník' },
      { id: 6, nazov: '6. ročník' },
    ];

    // Získame zoznam rodičov a učiteľov pomocou služby OsobyService
    this.rodicia = this.osobyService.getOsobyByTyp('rodič');
    this.ucitelia = this.osobyService.getOsobyByTyp('učiteľ');
  }
}
