import { Component } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  imports: [],
  templateUrl: './ostukorv.component.html',
  styleUrl: './ostukorv.component.css'
})
export class OstukorvComponent {
  tooted = ["coca","sprite","fanta","red bull"];

  kustuta(index: number){
    this.tooted.splice(index,1);
  }
  arvutakogusumma() {
    let summa = 0;
    this.tooted.forEach(toode => summa = summa + toode.length);
    return summa;
  }

}
