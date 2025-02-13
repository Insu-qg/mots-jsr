# My Project

Bienvenue dans **My Project**. Ce projet est conçu pour [décrire l'objectif de votre projet ici].

## Table des matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Contribuer](#contribuer)
- [Licence](#licence)

## Installation

Pour installer ce projet, suivez les étapes ci-dessous :

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-utilisateur/my_project.git
    ```
2. Accédez au répertoire du projet :
    ```bash
    cd my_project
    ```
3. Installez les dépendances :
    ```bash
    npm install
    ```

## Utilisation

Pour utiliser ce projet, exécutez la commande suivante :
```bash
npm start
```

## Contribuer

Les contributions sont les bienvenues ! Veuillez suivre les étapes ci-dessous pour contribuer :

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. Commitez vos modifications (`git commit -m 'Add some AmazingFeature'`).
4. Poussez votre branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

# mots.ts

Le fichier `mots.ts` contient des fonctions pour compter : nb mots, nb phrases, nb caractères, repetitions de mots, répétitions de lettres, répétitions de symboles.


Ce fichier exporte des fonctions pour compter divers choses dans un string.

+ /**
+  * This module contains functions to count things in strings.
+  * @module
+  */
  
  export function nbMots(str:string): number {
  // renvoie le nombre de mots d'une chaine de caractère
}

export function nbPhrases(str:string): number {
  // renvoie le nombre de phrases d'une chaine de caractère
}

export function nbLettres(str: string): number {
  // renvoie le nombre de lettres d'une chaine de caractère
}

export function nbRepetionsMots(str:string): number {
  // renvoie le nombre de répétitions de mots d'une chaine de caractère
}

export function nbRepetionsLettres(str:string): number {
  // renvoie le nombre de répétitions de lettres d'une chaine de caractère
}

export function nbRépetitionsSymbole(str: string): number {
  // renvoie le nombre de répétitions de symboles d'une chaine de caractère
}

