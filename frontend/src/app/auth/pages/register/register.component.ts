import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms'
import { AuthService } from '@auth/services/auth.service'
import { UserRegister } from '@core/dto/UserRegister'

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    styles: [],
})
export class RegisterComponent {
    registerForm: FormGroup = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        repeatPassword: ['', [Validators.required]],
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        phone: ['', [Validators.required]],
    })

    constructor(
        private fb: FormBuilder,
        private authService: AuthService
    ) {}

    onSubmit() {
        if (!this.registerForm.valid) {
            return
        }
        const { repeatPassword, ...userRegister } = this.registerForm.value
        this.authService.register(userRegister as UserRegister).subscribe({
            next: response => {
                if (!response) {
                    console.log('Vous êtes déja connecté')
                }
                console.log(JSON.stringify(response))
                console.log('bienvenue')
            },
            error: error => {
                console.error("Echec de l'enregistrement. Erreur : ", error)
            },
        })
    }
}
