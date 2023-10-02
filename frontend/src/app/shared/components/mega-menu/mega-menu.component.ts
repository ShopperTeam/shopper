import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from "./theme-switcher/theme-switcher.component";

@Component({
    selector: 'app-mega-menu',
    standalone: true,
    templateUrl: './mega-menu.component.html',
    imports: [CommonModule, ThemeSwitcherComponent]
})
export class MegaMenuComponent {

}
