import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { startWith } from 'rxjs';
import { endWith } from 'rxjs';


@Component({
  selector: 'app-tootajad',
  imports: [],
  templateUrl: './tootajad.component.html',
  styleUrl: './tootajad.component.css'
})
export class TootajadComponent {
  tootajad = ["Liis Mari","Mihkel","Anu","Rasmus","Kairi Leen","Tarmo","Eliisabet","Jaan Aru","Heleri","Sander"];
   sorteeriAZ(){

  this.tootajad.sort ((a,b) => a.localeCompare(b)); 

  }
  sorteeriZA(){
    this.tootajad.sort ((a,b) => b.localeCompare(a)); 

  }
  sorteeriTahedkasv () {
  this.tootajad.sort((a, b) => a.length - b.length);
  }
  sorteeriTahedkah() {
    this.tootajad.sort((a, b) => b.length - a.length);
  }
 sorteeriTeineTahtAZ () {
  this.tootajad.sort ((a,b) => a[1].localeCompare(b[1])); 

 }
 filtreeriT2pselt3 () {
 this.tootajad = this.tootajad.filter(tootaja => tootaja.length === 3);

 }
 filtreeriRohkemKui5 (){
this.tootajad = this.tootajad.filter(tootaja => tootaja.length > 5);
 }
 filtreeriAi (){
this.tootajad = this.tootajad.filter(tootaja => tootaja.includes("ai"));
 }
 filtreeri4T2hti () {
this.tootajad = this.tootajad.filter(tootaja => tootaja[3] === "i");
 }
filtreeriMalgavad () {
this.tootajad = this.tootajad.filter(tootaja => tootaja.startsWith("M"));
}
filtreeriPaarisarvT2hti () {
this.tootajad = this.tootajad.filter (tootaja => tootaja.length % 2 === 0) ;

}
filtreeriIgal6ppevad (){
this.tootajad = this.tootajad.filter(tootaja => tootaja.endsWith("i"));
}
filtreeriV2hemalt5t2helised () {
this.tootajad = this.tootajad.filter(tootaja => tootaja.length >= 5);
}
filtreeriT2pselt6t2helised () {
this.tootajad = this.tootajad.filter(tootaja => tootaja.length === 6);
}
filtreeriANsisaldavat () {
this.tootajad = this.tootajad.filter(tootaja => tootaja.includes("an"));

}
filtreeri3T2htOni () {
this.tootajad = this.tootajad.filter(tootaja => tootaja[2] === "i");
}

 reset () {
this.tootajad =  
["Liis Mari","Mihkel","Anu","Rasmus","Kairi Leen","Tarmo","Eliisabet","Jaan Aru","Heleri","Sander"];
}

}
