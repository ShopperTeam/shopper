import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component'

@Component({
    selector: 'app-mega-menu',
    standalone: true,
    templateUrl: './mega-menu.component.html',
    imports: [
        CommonModule,
        ThemeSwitcherComponent,
        RouterLink,
        RouterLinkActive,
    ],
})
export class MegaMenuComponent {}
