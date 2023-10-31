import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { Token } from '@core/dto/Token'
import { UserLogin } from '@core/dto/UserLogin'
import { UserRegister } from '@core/dto/UserRegister'
import { UserToken } from '@core/dto/UserToken'
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs'
import { environment } from 'src/environments/environment.development'

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private url = `${environment.baseUrl}/api`
    private token: Token | null = null
    private user: UserToken | null = null
    private redirectUrl: string | null = null

    private isLoggedInSubject: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(false)
    public isLoggedIn$: Observable<boolean> =
        this.isLoggedInSubject.asObservable()

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {
        this.token = this.getToken()
        if (!this.isLoggedInSubject.value) return
        this.user = this.getUserFromToken()
    }

    getUserFromToken(): UserToken | null {
        if (!this.isLoggedIn()) return null
        const token = this.getStoredToken()
        if (!token) return null
        const userData = JSON.parse(atob(token.split('.')[1])) as UserToken
        return userData
    }
    getStoredToken() {
        return localStorage.getItem('token')
    }
    getToken(): Token | null {
        const token = this.getStoredToken()

        if (!token) {
            this.isLoggedInSubject.next(false)
            return null
        }
        this.isLoggedInSubject.next(true)
        return { token }
    }

    hasTokenExpired(): boolean {
        this.withAuth()
        return this.user!.exp < Date.now() / 1000
    }

    setToken(token: Token) {
        this.isLoggedInSubject.next(true)
        localStorage.setItem('token', token.token)
    }

    isLoggedIn(): boolean {
        return this.isLoggedInSubject.getValue()
    }
    register(userRegister: UserRegister): Observable<Token | null> {
        if (this.isLoggedIn()) {
            // observable vide
            return of(null)
        }

        // const httpOptions = {
        //     headers: new HttpHeaders({
        //         'Content-Type': 'application/json',
        //         accept: 'application/json',
        //     }),
        // }
        const request = this.httpClient.post<any>(
            `${this.url}/register`,
            userRegister
        )
        return request
        // return request.pipe(
        //     tap(token => {
        //         this.handleLoginSucess(token)
        //     }),
        //     catchError(error => {
        //         throw new Error("L'inscription a échoué : ", error)
        //     })
        // )
    }

    login(userLogin: UserLogin): Observable<Token | null> {
        if (this.isLoggedIn()) {
            // observable vide
            return of(null)
        }

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                accept: 'application/json',
            }),
        }

        const request = this.httpClient.post<Token>(
            `${this.url}/login`,
            userLogin,
            httpOptions
        )

        return request.pipe(
            tap(token => {
                this.handleLoginSucess(token)
            }),
            catchError(error => {
                throw new Error('La connexion a échoué : ', error)
            })
        )
    }

    logout() {
        this.token = null
        this.user = null
        localStorage.removeItem('token')
        this.isLoggedInSubject.next(false)
        this.router.navigate(['/'])
    }

    withAuth() {
        if (!this.token || !this.user)
            throw new Error(
                'The method should not be called on an unauthenticated user.'
            )
    }

    handleLoginSucess(token: Token): void {
        this.setToken(token)

        if (this.redirectUrl) {
            this.router.navigate([this.redirectUrl])
            this.redirectUrl = null
        } else {
            this.router.navigate(['/'])
        }
    }
}
