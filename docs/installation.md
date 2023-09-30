# Guide d'Installation

Bienvenue dans le guide d'installation du projet

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre système :

- **MySQL**: Assurez-vous d'avoir un serveur MySQL en cours d'exécution.
- **PHP**: Installez PHP avec une version 8.2.0 ou supérieure.
- **Composer**: Installez Composer.
- **Symfony-cli**: Installer également l'outil de developpement de Symfony de préférence :
- Windows command :
```
scoop install symfony-cli
```
- MacOS/Linux command : 
```
brew install symfony-cli/tap/symfony-cli
```

## Étapes d'Installation

### **Clonage du Projet** :
   - Clonez le projet à partir du référentiel GitHub vers votre répertoire local et puis accédez au répertoire du projet :

   ```bash
   git clone https://github.com/ShopperTeam/shopper.git
   cd shopper
   ```

### **Installation du BACKEND** :

1   **Installation des Dépendances** :

-   Accédez au répertoire **backend** et exécutez la commande suivante pour installer les dépendances PHP et via Composer :
    ```bash
        cd backend
        composer install
    ```
    <i>**Remarque**: Symfony-cli fournit également un outil pour vérifier si votre ordinateur répond à toutes les exigences:</i>
    ```bash
        symfony check:requirements
    ```
2  **Configuration de l'Environnement** :

-   Utilisez la commande suivante pour configurer l'environnement avant l'installation :
    ```bash
        symfony console app:config-env
    ```
3  **Installation de l'Application** :

-   Une fois la configuration terminée, exécutez la commande d'installation pour créer la base de données, installer les migrations et les données de test :
    ```bash
        symfony console app:install
    ```
4  **Lancement du Serveur de Développement** :

-   Pour lancer l'application avec les outils de développement, exécutez la commande suivante :
    ```bash
        symfony console app:start
    ```

-   Cela lancera le serveur de développement Symfony, démarrera les processus npm et vous pourrez accéder à l'application via http://localhost:8000.

5  **Visualisation des API disponibles** :

-   http://localhost:8000/api


### **Installation du FRONTEND** : 

1   **Installation des Dépendances** :

-   Accédez au répertoire du projet et exécutez la commande suivante pour installer les dépendances PHP et via Composer :
    ```bash
        cd frontend
        npm install
    ```
2  **Configuration de l'Environnement** :

-   Faites une copie du fichier **.env.example**, renommez le nouveau fichier en **.env.local**, puis remplissez les variables qui s'y trouvent avec vos propres variables d'environnement.

## Conclusion

Félicitations ! Vous avez installé avec succès l'application et vous êtes prêt à commencer le développement.
