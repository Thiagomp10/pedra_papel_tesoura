import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-jogo',
  templateUrl: './jogo.page.html',
  styleUrls: ['./jogo.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule]
})
export class JogoPage {
  escolhaNumero: string = '';
  escolhaPC: number = 0;
  resultado: string = '';
  placarHumano: number = 0;
  placarPc: number = 0;
  empate: number = 0;
  jogar() {

    if (this.escolhaNumero === '') {
      alert('Escolha Pedra, Papel ou Tesoura para começar');
      return;
    }

    this.escolhaPC = Math.floor(Math.random() * 3) + 1;
    const jogador = parseInt(this.escolhaNumero);

    if( jogador == this.escolhaPC){
      this.resultado = 'Empate';
      this.empate++
    }else if(
      (jogador === 1 && this.escolhaPC === 3) ||
      (jogador === 2 && this.escolhaPC === 1) ||
      (jogador === 3 && this.escolhaPC === 2)
    ){
       this.resultado = 'Você ganhou!';
       this.placarHumano++
    }else {
      this.resultado = 'Você perdeu!';
      this.placarPc++
    }
  }

  mostrarNomeEscolha(escolhaNumero: string): string {
    switch (escolhaNumero) {
      case '1': return 'Pedra';
      case '2': return 'Papel';
      case '3': return 'Tesoura';
      default: return 'Nada selecionado';
    }
  }

  mostrarNomeEscolhaPc(escolhaPC: string): string {
    switch (escolhaPC) {
      case '1': return 'Pedra';
      case '2': return 'Papel';
      case '3': return 'Tesoura';
      default: return 'Nada selecionado';
    }
  }

  
}
