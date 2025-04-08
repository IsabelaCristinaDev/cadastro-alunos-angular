import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { InfoProjetoComponent } from './info-projeto/info-projeto.component';
import { ListaComponent } from './lista.component';

export const routes: Routes = [
  { path: '', redirectTo: 'formulario', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'info', component: InfoProjetoComponent },
  { path: 'lista', component: ListaComponent }
];
