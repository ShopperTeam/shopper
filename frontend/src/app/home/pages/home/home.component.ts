import { Component } from '@angular/core';
import { MegaMenuComponent } from "../../../shared/components/mega-menu/mega-menu.component";
import { LandingComponent } from "../../../shared/components/landing/landing.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [MegaMenuComponent, LandingComponent]
})
export class HomeComponent {

}
