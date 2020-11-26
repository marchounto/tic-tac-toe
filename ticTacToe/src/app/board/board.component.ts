import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares!: any[]
  XisNext!:boolean;
  winner!: string;

  constructor() { }

  ngOnInit(): void {
    this.startGame();
  }

  startGame(){
    this.squares = Array(9).fill(null);
    this.winner = "";
    this.XisNext = true;
  }

  get player(){
    if (this.XisNext){
      return 'X'
    }
    else {
      return 'O'
    }
  }

  makeMove(index:number){
    if (!this.squares[index]){
      this.squares.splice(index, 1,this.player);
      this.XisNext = !this.XisNext;
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
