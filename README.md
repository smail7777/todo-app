Todo App - Application de Gestion de Taches

Une application web moderne de gestion de taches construite avec Node.js, Express.js, MongoDB et une interface utilisateur moderne.

Fonctionnalites

- Gestion complete des taches : Creer, lire, modifier et supprimer des todos
- Statut des taches : Marquer les taches comme terminees ou en cours
- Persistance des donnees : Stockage avec MongoDB
- Interface moderne : Interface utilisateur responsive et intuitive
- Tests automatises : Suite de tests avec Jest
- Containerisation : Support Docker pour un deploiement facile
- Design responsive : Compatible mobile et desktop

Technologies Utilisees

Backend
- Node.js - Runtime JavaScript
- Express.js - Framework web
- MongoDB - Base de donnees NoSQL
- Mongoose - ODM pour MongoDB
- EJS - Moteur de templates

Frontend
- HTML5/CSS3 - Structure et style
- JavaScript - Interactivite cote client
- Tailwind CSS - Framework CSS utilitaire

Outils de Developpement
- Jest - Framework de tests
- Supertest - Tests d'API
- Docker - Containerisation
- ESLint - Linting du code
- Prettier - Formatage du code

Prerequis

Avant de commencer, assurez-vous d'avoir installe :

- Node.js (version 18 ou superieure)
- MongoDB (version 6 ou superieure)
- Docker (optionnel, pour la containerisation)
- Git

Installation

1. Cloner le repository

git clone https://github.com/smail7777/todo-app.git
cd todo-app

2. Installer les dependances

npm install

3. Configuration de l'environnement

Creez un fichier .env a la racine du projet :

MONGODB_URI=mongodb://localhost:27017/todoapp
DB_NAME=todoapp
PORT=3000
NODE_ENV=development
JWT_SECRET=votre_secret_jwt_ici

4. Demarrer MongoDB

Option A : MongoDB local
mongod

Option B : Avec Docker
docker-compose up -d mongodb

5. Initialiser la base de donnees

npm run seed

6. Demarrer l'application

npm run dev

L'application sera accessible sur http://localhost:3000

Deploiement avec Docker

Demarrer tous les services

docker-compose up --build

En arriere-plan
docker-compose up -d --build

Arreter les services

docker-compose down

Structure du Projet

todo-app/
├── __tests__/              Tests automatises
├── app/                    Application Next.js
├── components/             Composants reutilisables
├── config/                 Configuration de l'application
│   └── database.js         Configuration MongoDB
├── controllers/            Controleurs MVC
│   └── todoController.js   Logique metier des todos
├── hooks/                  Hooks personnalises
├── lib/                    Utilitaires et helpers
├── models/                 Modeles de donnees
│   └── todoModel.js        Modele Todo
├── mongo/                  Scripts MongoDB
│   └── seed/               Donnees de test
├── public/                 Fichiers statiques
│   ├── css/                Feuilles de style
│   ├── js/                 Scripts cote client
│   └── images/             Images et assets
├── routes/                 Routes Express
│   └── todoRoutes.js       Routes des todos
├── styles/                 Styles globaux
├── views/                  Templates EJS
│   ├── layouts/            Layouts principaux
│   └── todos/              Vues des todos
├── .env.example            Exemple de configuration
├── .gitignore              Fichiers ignores par Git
├── app.js                  Point d'entree de l'application
├── docker-compose.yml      Configuration Docker
├── jest.config.js          Configuration des tests
├── package.json            Dependances et scripts
└── README.md               Documentation

Tests

Executer tous les tests
npm test

Tests en mode watch
npm run test:watch

Couverture de code
npm run test:coverage

Tests specifiques
npm test -- controllers
npm test -- models
npm test -- routes

API Documentation

Endpoints principaux

Todos

Methode | Endpoint | Description
GET | /todos | Recuperer tous les todos
GET | /todos/:id | Recuperer un todo specifique
POST | /todos | Creer un nouveau todo
PUT | /todos/:id | Mettre a jour un todo
DELETE | /todos/:id | Supprimer un todo
PATCH | /todos/:id/toggle | Basculer le statut d'un todo

Exemple de requete

POST /todos
Content-Type: application/json

{
  "title": "Apprendre Node.js",
  "description": "Etudier les concepts avances de Node.js",
  "completed": false
}

Scripts NPM

Developpement
npm run dev          Demarrer en mode developpement avec nodemon
npm start            Demarrer en mode production

Tests
npm test             Executer tous les tests
npm run test:watch   Tests en mode watch
npm run test:coverage Rapport de couverture

Base de donnees
npm run seed         Initialiser la base avec des donnees de test
npm run db:reset     Reinitialiser la base de donnees

Linting et formatage
npm run lint         Verifier le code avec ESLint
npm run lint:fix     Corriger automatiquement les erreurs
npm run format       Formater le code avec Prettier

Docker
npm run docker:build Construire l'image Docker
npm run docker:up    Demarrer avec Docker Compose
npm run docker:down  Arreter les conteneurs Docker

Fonctionnalites Avancees

Validation des Donnees
- Validation cote serveur avec Mongoose
- Validation cote client avec JavaScript
- Messages d'erreur personnalises

Gestion des Erreurs
- Middleware de gestion d'erreurs centralise
- Logging des erreurs
- Pages d'erreur personnalisees

Securite
- Protection CSRF
- Validation et sanitisation des entrees
- Headers de securite avec Helmet

Performance
- Mise en cache des requetes frequentes
- Compression des reponses
- Optimisation des requetes MongoDB

Deploiement

Deploiement sur Heroku

1. Preparer l'application
heroku create votre-todo-app
heroku addons:create mongolab:sandbox

2. Configurer les variables d'environnement
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=votre_secret_production

3. Deployer
git push heroku main

Deploiement sur Vercel

npm i -g vercel
vercel --prod

Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

1. Fork le projet
2. Creer une branche pour votre fonctionnalite (git checkout -b feature/AmazingFeature)
3. Commiter vos changements (git commit -m 'Add some AmazingFeature')
4. Pousser vers la branche (git push origin feature/AmazingFeature)
5. Ouvrir une Pull Request

Guidelines de Contribution

- Suivre les conventions de nommage existantes
- Ecrire des tests pour les nouvelles fonctionnalites
- Mettre a jour la documentation si necessaire
- Respecter le style de code (ESLint + Prettier)

Signaler des Bugs

Si vous trouvez un bug, veuillez creer une issue avec :

- Description claire du probleme
- Etapes pour reproduire le bug
- Comportement attendu vs comportement actuel
- Environnement (OS, version Node.js, etc.)
- Captures d'ecran si applicable

Changelog

Version 1.0.0 (2024-01-XX)
- Fonctionnalites CRUD completes pour les todos
- Interface utilisateur moderne et responsive
- Suite de tests complete
- Support Docker
- Documentation complete

Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de details.

Auteur

Smail - smail7777 (https://github.com/smail7777)

Remerciements

- Express.js pour le framework web
- MongoDB pour la base de donnees
- Jest pour les tests
- Tailwind CSS pour le styling
- La communaute open source pour l'inspiration

Support

Si vous avez des questions ou besoin d'aide :

- Email : smail.oubih.70@edu.uiz.ac.ma
- Issues : GitHub Issues (https://github.com/smail7777/todo-app/issues)
- Discussions : GitHub Discussions (https://github.com/smail7777/todo-app/discussions)

---

Made by Smail Oubih and Ahmed Ouarrali (https://github.com/smail7777)
