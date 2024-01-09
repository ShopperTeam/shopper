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
        <div
            class="flex min-h-screen flex-col justify-start bg-purple-50 font-sans text-gun-959 dark:bg-gun-black dark:text-gun-50">
            <app-mega-menu></app-mega-menu>
            <main class="dark:bg-teal-959 grow ">
                <router-outlet></router-outlet>
            </main>
            <app-footer></app-footer>
        </div>
    `,
})
export class DefaultLayoutComponent {}
