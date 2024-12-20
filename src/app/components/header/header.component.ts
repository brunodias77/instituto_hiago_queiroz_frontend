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
  sections: { title: string; path: string }[] = [
    { title: 'Home', path: '/' },
    { title: 'Projetos', path: '/' },
    { title: 'Transparencia', path: '/' },
    { title: 'Direcao', path: '/' },
    { title: 'Blog', path: '/blog' },
  ];
  isMenuOpen = false;
  state: boolean = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  toggleState() {
    this.state = !this.state;
  }
}
