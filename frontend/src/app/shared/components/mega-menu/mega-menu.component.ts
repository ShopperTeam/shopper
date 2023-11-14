import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { NavListComponent } from './nav-list/nav-list.component'
import { NavLogoComponent } from './nav-logo/nav-logo.component'
import { NavSearchComponent } from './nav-search/nav-search.component'
import { NavWidgetsComponent } from './nav-widgets/nav-widgets.component'

@Component({
    selector: 'app-mega-menu',
    standalone: true,
    templateUrl: './mega-menu.component.html',
    imports: [
        CommonModule,
        NavSearchComponent,
        NavLogoComponent,
        NavListComponent,
        NavWidgetsComponent,
        RouterLink,
        RouterLinkActive,
    ],
})
export class MegaMenuComponent {}
