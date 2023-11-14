import { Component } from '@angular/core'
import { FooterComponent } from '../../../shared/components/footer/footer.component'
import { MegaMenuComponent } from '../../../shared/components/mega-menu/mega-menu.component'
import { LandingComponent } from './landing/landing.component'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: true,
    imports: [MegaMenuComponent, LandingComponent, FooterComponent],
})
export class HomeComponent {}
