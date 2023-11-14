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
    @Input({ required: true }) className = ''
}
