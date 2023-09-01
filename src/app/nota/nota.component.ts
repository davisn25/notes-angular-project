import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent {
  @Input() nota = {
    titulo: "aaaaaa",
    conteudo: "",
    tipo: "type"
  }
  tamanhoNota():string {
    if(this.nota.conteudo.length >= 150) {
      return 'nota-g';
    } else {
      return 'nota-p';
    }
  }
}
