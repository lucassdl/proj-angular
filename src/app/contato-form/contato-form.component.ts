import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ContatoService } from './../services/contato.service';
import { Contato } from '../models/contato.model';
@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {

  @Input() contato: Contato = new Contato;
  @Output() saveContato = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: NgForm){
    this.saveContato.emit(form);
  }
}
