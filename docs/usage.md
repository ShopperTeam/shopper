# Utilisation




## Les `User` disponibles :

- `ROLE_USER`

```bash
    {
        "email": "user1@site.com",
        "password": "pass"
    }
```

- `ROLE_ADMIN`

```bash
    {
        "email": "admin1@site.com",
        "password": "pass"
    }
```






## Générer un token JWT 


### Méthode ( 1 ) : Utiliser PostMan

-   https://www.postman.com/

-  Envoyer une nouvelle requête POST à `http://127.0.0.1:8000/api/login` :


    ![](assets/images/generer-token-jwt.png)



## Méthode ( 2 ) : Utiliser l'interface `http://127.0.0.1:8000/api`

- Clicker sur `Login Check`

    ![](assets/images/login-check-010.png)



- Clicker sur `Try it out`

    ![](assets/images/login-check-020.png)


- Insérer l'objet JSON contenant le email et le mot de passe et executez :
    ```bash
        {
            "email": "user1@site.com",
            "password": "pass"
        }
    ```
    ![](assets/images/login-check-030.png)



- Recupérer le token (le string entre les guillemets)
    ![](assets/images/login-check-040.png)






## Utiliser un token dans une reqête sécurisée

### Méthode ( 1 ) : Utiliser PostMan pour une seul requête

![](assets/images/requete-postman-avec-token-jwt.png)

### Méthode ( 2 ) : Lors du développement et pour faire des tests sur l'interface API, donner authorisation à toutes les requêtes

- Click sur le bouton `Authorize`

    ![](assets/images/authorisation-avec-apiplatform-010.png)

    ![](assets/images/authorisation-avec-apiplatform-020.png)


- Taper le string `Bearer` et un `espace` et coller le token
- Click sur le bouton `Autorize`

    ![](assets/images/authorisation-avec-apiplatform-030.png)



