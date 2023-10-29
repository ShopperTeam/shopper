import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FooterComponent } from './../shared/components/footer/footer.component'
import { MegaMenuComponent } from './../shared/components/mega-menu/mega-menu.component'
import { HomeRoutingModule } from './home-routing.module'
@Component({
    selector: 'app-home-layout',
    standalone: true,
    imports: [
        CommonModule,
        MegaMenuComponent,
        FooterComponent,
        HomeRoutingModule,
    ],
    template: `
        <div class="flex min-h-screen flex-col justify-between">
            <app-mega-menu></app-mega-menu>
            <router-outlet></router-outlet>
            <app-footer></app-footer>
        </div>
    `,
})
export class HomeLayoutComponent {}
