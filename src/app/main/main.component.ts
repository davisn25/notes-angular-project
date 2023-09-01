import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  listaNotas = [
    {
      titulo: "",
      conteudo: "deu certo",
      tipo: "tipo2"
    },
    {
      titulo: "AAAAAA",
      conteudo: "deu errado",
      tipo: "tipo1"
    }
  ];
}
