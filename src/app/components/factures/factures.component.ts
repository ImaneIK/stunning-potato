import { Component } from '@angular/core';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.css']
})
export class FacturesComponent {
      factures:any[]=[
        {id :120, datefacture :"19/09/2021",montant :1700 },
        {id :121, datefacture :"25/09/2021",montant :3000 }
      ];
}
