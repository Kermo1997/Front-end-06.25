import { Component } from '@angular/core';
import { endWith } from 'rxjs';

@Component({
  selector: 'app-autod',
  imports: [],
  templateUrl: './autod.component.html',
  styleUrl: './autod.component.css'
})
export class AutodComponent {
  autod = ["Ferrari","BMW","Audi","Mercedes","Lamborhini","Tesla","Aston Martin","Ford","Renault","Volvo","Subaru"];
  sorteeriAZ(){

  this.autod.sort ((a,b) => a.localeCompare(b)); 

  }
  sorteeriZA(){
    this.autod.sort ((a,b) => b.localeCompare(a)); 

  }
  sorteeriTahedkasv () {
  this.autod.sort((a, b) => a.length - b.length);
  }
  sorteeriTahedkah() {
    this.autod.sort((a, b) => b.length - a.length);
  }
 sorteeriKolmasTahtAZ () {
  this.autod.sort ((a,b) => a[2].localeCompare(b[2])); 
  // this.autod.sort ((a,b) => a.at(2).localeCompare(b.at(2))); 
  // this.autod.sort ((a,b) => a.charAt(2).localeCompare(b.charAt(2))); 
 }
 filtreeriIgaloppevad () {
  this.autod = this.autod.filter(auto => auto.endsWith("i"));

 }
 filtreeri6Tahelised () {
    this.autod = this.autod.filter(auto => auto.length === 6);

 }
filtreeriKuni7Tahelised () {
    this.autod = this.autod.filter(auto => auto.length <= 7);

}
filtreerikellelLyhendEs () {
  this.autod = this.autod.filter(auto => auto.includes("es"));
}
filtreeriTeineTahtE () {
    this.autod = this.autod.filter(auto => auto[1] === "e");

}
reset () {
this.autod =  [
  "Ferrari","BMW","Audi","Mercedes","Lamborhini","Tesla","Aston Martin","Ford","Renault","Volvo","Subaru"
]
}
}
