import { Injectable } from '@angular/core';
import {Osoba} from "../model/osoby.model";

@Injectable({
  providedIn: 'root'
})
export class OsobyService {
  osoby: Osoba[] = []

  constructor() {
  }

  getOsoby(): Osoba[] {
    return this.osoby;
  }

  getOsobaById(id: number): Osoba {
    return this.osoby.find(o => o.id === id);
  }

  getOsobyByTyp(typ: string): Osoba[] {
    return this.osoby.filter(o => o.typ === typ);

  }
}
