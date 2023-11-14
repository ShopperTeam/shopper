import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component'
import { CartWidgetComponent } from './cart-widget/cart-widget.component'
import { FavoriteWidgetComponent } from './favorite-widget/favorite-widget.component'
import { NavUserComponent } from './user-widget/nav-user-widget.component'

@Component({
    selector: 'app-nav-widgets',
    standalone: true,
    imports: [
        CommonModule,
        CartWidgetComponent,
        FavoriteWidgetComponent,
        ThemeSwitcherComponent,
        NavUserComponent,
    ],
    templateUrl: './nav-widgets.component.html',
    styles: ``,
})
export class NavWidgetsComponent {}
