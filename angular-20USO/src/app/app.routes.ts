import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ClientesComponent } from './clientes/clientes-component';

export const appRoutes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: '**', redirectTo: '' }
];




