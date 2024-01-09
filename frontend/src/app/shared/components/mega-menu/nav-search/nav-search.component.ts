import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
    selector: 'app-nav-search',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './nav-search.component.html',
    styles: ``,
})
export class NavSearchComponent {
    search() {
        //TODO: Implement search
        alert('Method not implemented.')
    }
}
