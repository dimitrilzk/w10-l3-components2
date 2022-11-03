import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {

  contatti = [
    {
    id: 1,
    nome: "Mario",
    cognome: "Rossi",
    cellulare: 3471315321,
    citta: "Milano"
  }
]

  constructor() { }

  ngOnInit(): void {
  }

}
