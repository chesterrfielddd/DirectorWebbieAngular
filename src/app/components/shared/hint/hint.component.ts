import { Component, HostListener } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-hint',
  imports: [NgStyle],
  templateUrl: './hint.component.html',
  styleUrl: './hint.component.scss'
})
export class HintComponent {
  posX = 10;
  posY = 10;
  
  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.posX = event.clientX + 10;
    this.posY = event.clientY + 10;
    console.log(this.posX, this.posY);
  }
  
  @HostListener('window:click')
  onClick() {
    console.log('Переход на другую страницу');
  }
}
