import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { Autenticacao } from 'src/app/autenticacao.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private autenticacao:Autenticacao){}
  ngOnInit(): void {
      
  }

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)

  })

  async deletar(){
    try {
    await this.autenticacao.DeletarUsuarioBD(this.formulario.value.email);
    console.log('deletado');
    await this.autenticacao.desativarConta();
    } catch (error) {
    console.error(error);
    }
    }
    sair(){
      
      this.autenticacao.sair()
    }
}
