import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FooterComponent } from '../components/footer/footer.component'
import { MegaMenuComponent } from '../components/mega-menu/mega-menu.component'
@Component({
    selector: 'app-default-layout',
    standalone: true,
    imports: [CommonModule, MegaMenuComponent, FooterComponent, RouterModule],
    template: `
        <div class="flex min-h-screen flex-col justify-between">
            <app-mega-menu></app-mega-menu>
            <router-outlet></router-outlet>
            <app-footer></app-footer>
        </div>
    `,
})
export class DefaultLayoutComponent {}
