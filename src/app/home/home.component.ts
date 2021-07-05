import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contato } from '../models/contato.model';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contato: Contato = new Contato;
  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    this.contatos = this.contatoService.getAll();
  }

  saveContato(form: NgForm){
    this.contato = form.value;
    this.contato.id = (this.contato.id) ? this.contato.id : new Date().getTime().toString();
    this.contatoService.save(this.contato);
    this.contatos = this.contatoService.getAll();
    form.resetForm();
  }

  edit(contato: Contato){
    this.contato = contato;
  }

  delete(contato: Contato){
    this.contatoService.delete(contato);

    let index = this.contatos.map((item) => item.id).indexOf(contato.id);
    this.contatos.splice(index,1);
  }

}
