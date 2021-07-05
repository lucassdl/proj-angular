import { ContatoService } from './../services/contato.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contato } from '../models/contato.model';
@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent implements OnInit {

  contato: Contato = new Contato;
  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.contato = form.value;
    this.contato.id = new Date().getTime().toString();
    this.contatoService.save(this.contato);
  }
}
