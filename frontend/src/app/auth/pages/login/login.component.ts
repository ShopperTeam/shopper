import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { UserLogin } from '@core/dto/UserLogin'
import { AuthService } from './../../services/auth.service'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, RouterLink, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styles: [],
})
export class LoginComponent {
    loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: [
            '',
            [
                Validators.required,
                // Validators.minLength(8),
                // Validators.maxLength(40),
                // CustomValidators.password(),
            ],
        ],
    })

    constructor(
        private fb: FormBuilder,
        private authService: AuthService
    ) {}

    onSubmit() {
        if (!this.loginForm.valid) return
        const userLogin: UserLogin = this.loginForm.value as UserLogin
        this.authService.login(userLogin).subscribe({
            next: response => {
                if (!response) {
                    throw new Error('Vous êtes déjà connecté.')
                }
                console.log('Bienvenue.')
            },
            error: error => {
                console.error(JSON.stringify(error))
            },
        })
    }
}
