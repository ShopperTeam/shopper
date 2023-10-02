import { Component } from '@angular/core';
import { MegaMenuComponent } from "../../../shared/components/mega-menu/mega-menu.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [MegaMenuComponent]
})
export class HomeComponent {

}
