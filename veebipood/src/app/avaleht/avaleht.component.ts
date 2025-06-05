import { Component } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  imports: [],
  templateUrl: './avaleht.component.html',
  styleUrl: './avaleht.component.css'
})
export class AvalehtComponent {
 kogus =0;
 sonum = "muuda kogust!"
 laigitud =false;

 nulli(){
  this.kogus=0;
  this.sonum = "kogus nullitud!"; 
 } 

 vahenda(){
  this.kogus = this.kogus -1;
  this.sonum = "kogus vähendatud!"
 }

 suurenda(){
   this.kogus = this.kogus +1;
  this.sonum = "kogus suurendatud!"
 }


}
