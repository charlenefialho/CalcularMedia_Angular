import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  codigoRMA : number = 123456;
  RMA_aluno : string =`RMA:${this.codigoRMA}`;
  nome: string = "Charlene Aparecida Estevam Mendes Fialho";
  


  nota1 : number = 8;
  nota2 : number = 7;
  nota3 : number = 10;
  nota4 : number = 5;
  media : number = 10;

  mat2_nota1 : number = 3
  mat2_nota2 : number = 4
  mat2_nota3 : number = 5
  mat2_noat4 : number = 6
  media2 : number = 4.5;

  mat3_nota1 : number = 3
  mat3_nota2 : number = 7
  mat3_nota3 : number = 9
  mat3_noat4 : number = 2
  media3 : number = 5.25;

  data_nascimento = '2005-03-20';
  foto : string = 'assets/image/Perfil.png';


  constructor() { }

  ngOnInit(): void {

  }

}
