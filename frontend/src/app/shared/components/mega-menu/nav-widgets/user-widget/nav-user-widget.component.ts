import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { AuthService } from '@auth/services/auth.service'
import { DropDownUserComponent } from './drop-down-user.component'

@Component({
    selector: 'app-nav-user-widget',
    standalone: true,
    imports: [
        CommonModule,
        DropDownUserComponent,
        RouterLink,
        RouterLinkActive,
    ],
    templateUrl: './nav-user-widget.component.html',
    styles: [],
})
export class NavUserComponent implements OnInit {
    @Input({ required: true }) className = ''

    public isLoggedIn = true

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.isLoggedIn$.subscribe(isLoggedIn => {
            this.isLoggedIn = isLoggedIn
        })
    }

    logout() {
        this.authService.logout()
    }
}
