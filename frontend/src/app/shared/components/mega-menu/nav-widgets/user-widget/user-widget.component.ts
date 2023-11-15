import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthService } from '@auth/services/auth.service'
import { UserToken } from '@core/dto/UserToken'
import { DropDownUserComponent } from './drop-down-user.component'

@Component({
    selector: 'app-user-widget',
    standalone: true,
    imports: [
        CommonModule,
        DropDownUserComponent,
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './user-widget.component.html',
    styles: [],
})
export class UserWidgetComponent implements OnInit {
    @Input({ required: true }) className = ''

    public isLoggedIn = true
    user: UserToken | null = null

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.isLoggedIn$.subscribe(isLoggedIn => {
            this.isLoggedIn = isLoggedIn
        })
        this.authService.user$.subscribe(user => {
            this.user = user
        })
    }

    logout() {
        this.authService.logout()
    }
}
