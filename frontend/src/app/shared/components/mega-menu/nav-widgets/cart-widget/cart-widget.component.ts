import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-cart-widget',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cart-widget.component.html',
    styles: ``,
})
export class CartWidgetComponent {
    handleClick() {
        // TODO : Implement cart widget
        alert('Method not implemented.')
    }
    @Input({ required: true }) className = ''
}
