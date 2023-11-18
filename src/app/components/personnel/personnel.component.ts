import { Component } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent {


  personnels = [ 
    {id :120, nom :"Ibrahimi",age :27 },
    {id :154, nom :"Zeroual",age :30 }
  ]
  id:number=0;
  nom:string='';
  age:number=0;


  updateid:number=0;
  updatenom:string='';
  updateage:number=0;
  
  addPersonnel(){

    const p = {
      id:this.id,
      nom:this.nom,
      age:this.age
    }

    this.personnels.push(p);
  }


  updatePersonnel() {
    const index: number = this.personnels.findIndex((p) => p.id == this.updateid);
    console.log(index);
    if (index !== -1) {
      this.personnels[index].nom = this.updatenom;
      this.personnels[index].age = this.updateage;
      // console.log('Updated tasks array:', this.personnels);
    }
  }
  
}
