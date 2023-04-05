import { Injectable } from '@angular/core';
import { OsobyService } from './osoby.service';
import {Vztah} from "../model/vztahy.model";

@Injectable({
  providedIn: 'root'
})
export class VztahyService {
  vztahy: Vztah[] = [];

  constructor(private osobyService: OsobyService) {}

  getVztahy(): Vztah[] {
    return this.vztahy;
  }

  pridajVztah(osoba1: string, osoba2: string, typ: string) {
    const novaOsoba1 = this.osobyService.getOsoby().find(o => o.meno === osoba1);
    const novaOsoba2 = this.osobyService.getOsoby().find(o => o.meno === osoba2);
    const id = this.vztahy.length + 1;
    const novyVztah: Vztah = {
      id: id,
      osoba1Id: novaOsoba1.id,
      osoba2Id: novaOsoba2.id,
      typ: typ
    };
    this.vztahy.push(novyVztah);
  }

  zmazVztah(vztah: Vztah) {
    const index = this.vztahy.indexOf(vztah);
    if (index >= 0) {
      this.vztahy.splice(index, 1);
    }
  }
}
