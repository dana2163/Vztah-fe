import { Component, OnInit } from '@angular/core';
import { Vztah } from '../common/models/vztah.model';
import { Osoba } from '../common/models/osoba.model';
import { VztahyService } from '../common/service/vztahy.service';

interface OsobaInfo {
  id: number;
  meno: string;
  priezvisko: string;
}

@Component({
  selector: 'app-vztahy',
  templateUrl: './vztahy.component.html',
  styleUrls: ['./vztahy.component.css']
})
export class VztahyComponent implements OnInit {
  vztahy: Vztah[];
  osoby: OsobaInfo[];

  constructor(private vztahyService: VztahyService) {}

  ngOnInit() {
    this.vztahy = this.vztahyService.getVztahy();
    this.osoby = this.vztahyService.getOsoby().map((osoba: Osoba) => ({
      id: osoba.id,
      meno: osoba.meno,
      priezvisko: osoba.priezvisko,
    }));
  }

  pridajVztah(osoba1: string, osoba2: string, typ: string) {
    this.vztahyService.pridajVztah(osoba1, osoba2, typ);
  }

  zmazVztah(vztah: Vztah) {
    this.vztahyService.zmazVztah(vztah);
  }
}
