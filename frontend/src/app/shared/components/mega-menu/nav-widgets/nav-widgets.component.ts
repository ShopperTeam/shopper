import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { CartWidgetComponent } from './cart-widget/cart-widget.component'
import { FavoriteWidgetComponent } from './favorite-widget/favorite-widget.component'
import { ThemeWidgetComponent } from './theme-widget/theme-widget.component'
import { UserWidgetComponent } from './user-widget/user-widget.component'

@Component({
    selector: 'app-nav-widgets',
    standalone: true,
    imports: [
        CommonModule,
        CartWidgetComponent,
        FavoriteWidgetComponent,
        ThemeWidgetComponent,
        UserWidgetComponent,
    ],
    templateUrl: './nav-widgets.component.html',
    styles: ``,
})
export class NavWidgetsComponent {}
