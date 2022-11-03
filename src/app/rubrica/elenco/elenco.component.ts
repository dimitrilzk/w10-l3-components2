import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent implements OnInit {

  @Input() contactList?: Contact[];
  @Output() deleteContact = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  removeContact(contact: Contact): void {
    this.deleteContact.emit(contact);
  }

}
