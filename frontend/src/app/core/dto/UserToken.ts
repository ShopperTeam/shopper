/**
 * Represents a User Token, typically used for JSON Web Tokens (JWTs).
 */
export interface UserToken {
    /**
     * The user's email.
     */
    email: string

    /**
     * The user's first name.
     */
    firstname: string
    /**
     * The user's last name.
     * */
    lastname: string

    /**
     * The "exp" field represents the expiration date of the JWT as a number (timestamp).
     */
    exp: number

    /**
     * The "iat" field represents the creation date of the JWT as a number (timestamp).
     */
    iat: number

    /**
     * The "roles" field represents the roles associated with the user.
     */
    roles: string[]

    /**
     * The "ip" field represents the user's IP address.
     */
    ip: string
}
