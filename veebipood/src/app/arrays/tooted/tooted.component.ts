import { Component } from '@angular/core';

@Component({
  selector: 'app-tooted',
  imports: [],
  templateUrl: './tooted.component.html',
  styleUrl: './tooted.component.css'
})
export class TootedComponent {
tooted = [ "Coca", "Fanta", "Sprite", "Vichy", "Red Bull", "Aura", "Monster Energy","Super Monkey","Jaffa","Kohvi"];

sorteeriAZ() {
  this.tooted.sort ((a,b) => a.localeCompare(b)); 
}

  sorteeriZA(){
    this.tooted.sort ((a,b) => b.localeCompare(a)); 

  }
  sorteeriTahedkasv () {
  this.tooted.sort((a, b) => a.length - b.length);
  }
  sorteeriTahedkah() {
    this.tooted.sort((a, b) => b.length - a.length);
  }
 sorteeriTeineTahtAZ () {
  this.tooted.sort ((a,b) => a[1].localeCompare(b[1])); 
 }

filtreeri6Tahelised () {
  this.tooted = this.tooted.filter(auto => auto.length <= 6);

 }
 filtreeriT2pselt6tahelised () {
    this.tooted = this.tooted.filter(auto => auto.length === 6);
 }
filtreeriAL6ppevad () {
     this.tooted = this.tooted.filter(auto => auto.endsWith("a"));
}
filtreeriYgal6ppevad () {
  this.tooted = this.tooted.filter(auto => auto.endsWith("y"));
}
filtreeriPaarisArv () {
  this.tooted = this.tooted.filter (tootaja => tootaja.length % 2 === 0) ;
}


 reset () {
this.tooted =  [
  "Coca", "Fanta", "Sprite", "Vichy", "Red Bull", "Aura", "Monster Energy","Super Monkey","Jaffa","Kohvi"
]
}
}