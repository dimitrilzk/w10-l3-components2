import { Component, OnInit } from '@angular/core';
import { Contact } from '../classes/contact';

@Component({
  templateUrl: './rubrica.page.html',
  styleUrls: ['./rubrica.page.css']
})
export class RubricaPage implements OnInit {

  listaContatti: Contact[] = [{
    nome: 'Edoardo',
    cognome: 'Rossi',
    cellulare: '3471415359',
    citta: 'Milano'
  }]

  constructor() { }

  ngOnInit(): void {
  }
  onRemoveContact(contact: Contact) {
    // this.listaContatti = this.listaContatti.filter(c => c.cellulare !== contact.cellulare);
    let index = this.listaContatti.findIndex(c => c.cellulare === contact.cellulare);
    this.listaContatti.splice(index, 1);
  }
  onCreateContact(contact: Contact) {
    this.listaContatti.push(contact);

  }

}
