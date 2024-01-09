import { Component } from '@angular/core'
import { FooterComponent } from '../../../shared/components/footer/footer.component'
import { MegaMenuComponent } from '../../../shared/components/mega-menu/mega-menu.component'
import { HeroComponent } from './hero/hero.component'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [MegaMenuComponent, HeroComponent, FooterComponent],
})
export class HomeComponent {}
