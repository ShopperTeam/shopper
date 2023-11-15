import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-nav-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nav-list.component.html',
    styles: ``,
})
export class NavListComponent {
    menuItems = [
        { type: 'link', label: 'Promo', url: '#' },
        {
            type: 'button',
            label: 'New',
            id: 'mega-menu-icons-dropdown-button',
        },
        { type: 'link', label: 'Brand', url: '#' },
    ]
}
