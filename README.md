# Tangente Slack Bot

Tangente est un bot pour la messagerie en direct Slack de Digital Cover. Il a pour objectif d'ajouter quelques fonctionnalités afin d'aider l'équipe dans son quotidien. Il a été développé avec le framework [Bolt Js](https://slack.dev/bolt-js/concepts).

## Fonctionnalités

- Page d'accueil customisée

### Commandes

- `/ping` : commande de débug pour vérifier le délai de requête

## Prérequis

- Node.js (12 ou supérieure)
- Une application Slack qui possède les permissions indiquées ci-dessous
- Un espace de travail pour inviter le bot

## Permissions

## Installation

- Récupérer le projet
- Installer les dépendances
```sh
npm install
```
- Dupliquer le fichier .env et le nommer .env.local
```sh
cp .env .env.local
```
- Remplir les variables avec les identifiants de votre application
- Lancer le bot
```sh
node index.js
```