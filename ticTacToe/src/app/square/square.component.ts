import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [ngClass] = "{'green' : 'X', 'blue': 'O'}">{{ value }}</button>
    
    `
  ,
  styles: ['button { width: 100%; height: 100%; background-color: red; font-size: 5em !important; }']
})
export class SquareComponent  {
  @Input() value!: 'X' | 'O';
}
