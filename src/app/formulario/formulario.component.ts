import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoService } from '../service/aluno.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  nome = '';

  constructor(private alunoService: AlunoService) {}

  salvar() {
    this.alunoService.adicionarAluno(this.nome);
    this.nome = '';
  }
}
