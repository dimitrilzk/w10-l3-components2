import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/classes/contact';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {

  @Input() contact: Contact = new Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
