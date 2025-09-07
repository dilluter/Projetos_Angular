import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
})
export class HelloComponent {
  nome: string;
  clientes: Cliente[];

  constructor() {
    this.nome = 'Igor Bruno';

    let cliente1 = new Cliente('Igor', 21);
    let cliente2 = new Cliente('Ana', 20);

    this.clientes = [cliente1, cliente2];
  }
}

class Cliente {
  constructor(
    public nome: string,
    public idade: number
  ) {}
}

