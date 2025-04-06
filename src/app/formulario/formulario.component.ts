import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  nome = '';
  listas: string[] = [];

  salvar() {
    if (this.nome.trim()) {
      this.listas.push(this.nome.trim());
      this.nome = '';
    }
  }
}
