import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { CartWidgetComponent } from './cart-widget/cart-widget.component'
import { FavoriteWidgetComponent } from './favorite-widget/favorite-widget.component'
import { ThemeWidgetComponent } from './theme-widget/theme-widget.component'
import { NavUserComponent } from './user-widget/nav-user-widget.component'

@Component({
    selector: 'app-nav-widgets',
    standalone: true,
    imports: [
        CommonModule,
        CartWidgetComponent,
        FavoriteWidgetComponent,
        ThemeWidgetComponent,
        NavUserComponent,
    ],
    templateUrl: './nav-widgets.component.html',
    styles: ``,
})
export class NavWidgetsComponent {}
