import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  standalone: true,

imports: [CommonModule],

  templateUrl: './clientes-component.html',
  styleUrl: './clientes-component.css'
})
export class ClientesComponent {
  clientes = [
    { id: 1, nome: 'Ana Gabriela', email: 'ana.2512@email.com' },
    { id: 2, nome: 'Igor Bruno', email: 'bruno.2502@email.com' },
    { id: 3, nome: 'Luiz Emanuel', email: 'luiz.1210@email.com' },
    { id: 4, nome: 'yasmin', email: 'yasmin.7231@email.com' }
  ];
}


