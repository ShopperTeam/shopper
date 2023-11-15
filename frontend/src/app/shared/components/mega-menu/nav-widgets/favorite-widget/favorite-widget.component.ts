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
    handleClick() {
        // TODO : Implement favorite widget
        alert('Method not implemented.')
    }
    @Input({ required: true }) className = ''
}
