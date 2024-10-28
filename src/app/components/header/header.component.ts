import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  sections: string[] = ['Home', 'Projetos', 'Transparencia', 'Direcao', 'Blog'];
  isMenuOpen = false;
  state: boolean = false; 
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleState() {
    this.state = !this.state;
  }
}
