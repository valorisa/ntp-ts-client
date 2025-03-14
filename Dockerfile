# Étape 1: Utiliser une image de base Node.js sur Alpine Linux (version 22)
FROM node:22-alpine AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Copier le fichier .npmrc dans le conteneur
COPY .npmrc ./

# Installer les outils nécessaires à la compilation (dépendances système)
RUN apk add --no-cache python3 make g++

# Mettre à jour npm vers la dernière version stable
RUN npm install -g npm@10

# Configurer des timeouts plus longs pour npm
RUN npm config set fetch-retry-mintimeout 60000 && \
    npm config set fetch-retry-maxtimeout 300000 && \
    npm config set registry https://registry.npmjs.org/

# Nettoyer le cache npm
RUN npm cache clean --force

# Installer les dépendances npm
RUN npm install --verbose

# Copier les fichiers source dans le conteneur
COPY . .

# Compiler le projet TypeScript
RUN npm run build

# Supprimer les dépendances de développement pour réduire la taille de l'image finale (facultatif)
RUN npm prune --production

# Étape 2: Créer une image de production légère
FROM node:22-alpine

# Définir le répertoire de travail dans le conteneur de production
WORKDIR /app

# Copier uniquement les fichiers compilés depuis l'étape de construction
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json .

# Exposer le port si nécessaire (ajuster selon votre application)
EXPOSE 3000

# Démarrer l'application
CMD ["npm", "start"]
