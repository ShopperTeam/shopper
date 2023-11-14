import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-favorite-widget',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './favorite-widget.component.html',
    styles: ``,
})
export class FavoriteWidgetComponent {
    @Input({ required: true }) className = ''
}
