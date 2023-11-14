import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-logo',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './logo.component.html',
    styles: ``,
})
export class LogoComponent {
    @Input({ required: true }) className = ''
}
