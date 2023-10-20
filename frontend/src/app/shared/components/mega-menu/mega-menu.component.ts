import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  templateUrl: './mega-menu.component.html',
  imports: [CommonModule, ThemeSwitcherComponent, RouterLink, RouterLinkActive],
})
export class MegaMenuComponent {}
