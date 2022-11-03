import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newContact: Contact = new Contact();

  @Output() addContact = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  createContact() {
    this.addContact.emit(this.newContact);
    this.newContact = new Contact();
  }

}
