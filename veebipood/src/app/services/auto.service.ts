import { Injectable } from '@angular/core';

// Service-i ainuke mõte ongi olla constructori sulgude sees
// kui Service pole üheski constructoris terves projektis, on 
// tegemist kasutamata service-ga

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  autod = ["Ferrari","BMW","Audi","Mercedes","Lamborhini","Tesla","Aston Martin","Ford","Renault","Volvo","Subaru"];

  constructor() { }
}
