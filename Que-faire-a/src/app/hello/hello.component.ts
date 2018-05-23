import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  etudiant = { 'nom': 'Forestier', 'age': 23, 'saved': false };
  etudiants = [{ 'nom': 'Forestier' }, { 'nom': 'Depoilly' }, { 'nom': 'Leblond' }, { 'nom': 'Dertin' }];
  constructor() { }

  ngOnInit() {
  }

  getEtudiant(): void {
    this.etudiant.nom = 'defaut';
  }
  saveEtudiant() {
    this.etudiant.saved = true;
  }
}
