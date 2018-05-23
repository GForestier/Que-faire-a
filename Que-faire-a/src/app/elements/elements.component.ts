import { Component, OnInit } from '@angular/core';
import { Bar } from '../_models';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  /*bars = [{ 'nom': 'Delirium', 'adresse': '19 Allée Baco, Nantes', 'horaires': '10:30–02:00' },
  { 'nom': 'John-Mc-Byrne', 'adresse': '21 Rue des Petites Écuries,  Nantes', 'horaires': '16:00–02:00' },
  { 'nom': 'Pioche', 'adresse': '10 Rue de Bel air, Nantes', 'horaires': '17:00–01:00' },
  { 'nom': 'Le labo', 'adresse': '19 rue Leon Blum Nantes', 'horaires': '18:00–02:00' }];
  */
 edit = false;
  bar = new Bar();
  bars = [new Bar('Estaminet', 'rue Auber, Lille', '00:00-12:00'), new Bar('Appart Cafe', 'rue Nationale', '12:00-00:00')];

  constructor() { }

  ngOnInit() {
  }
  addBar() {
    this.bars.push(this.bar);
    this.bar = new Bar();
  }
  editBar(id: number) {
    this.bar = this.getBarById(id);
    this.edit = true;
  }
  getBarById(id: number): Bar {
    /*for (let i = 0; i < this.bars.length; i++) {
      if (this.bars[i].id === id) {
        return this.bars[i];
      }
    }
    return null;*/
    return this.bars.filter(a => a.id === id)[0];
  }
  editOver() {
    this.edit = false;
    this.bar = new Bar();
  }
}
