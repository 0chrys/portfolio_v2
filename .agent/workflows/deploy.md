---
description: Comment déployer le portfolio sur Vercel
---

# Guide de Déploiement Vercel 🚀

Le projet est déjà optimisé pour Next.js et le build de production a été validé. Suivez ces étapes pour mettre votre site en ligne :

### 1. Préparer le dépôt Git
Si ce n'est pas déjà fait, initialisez un dépôt Git et poussez votre code sur GitHub, GitLab ou Bitbucket.
```bash
git init
git add .
git commit -m "Initial commit: Portfolio V2 Hybrid"
# Créez un dépôt sur GitHub puis :
git remote add origin <votre-url-repo>
git push -u origin main
```

### 2. Connecter à Vercel
1. Rendez-vous sur [vercel.com](https://vercel.com) et connectez-vous.
2. Cliquez sur **"Add New"** > **"Project"**.
3. Importez votre dépôt Git.
4. Vercel détectera automatiquement **Next.js**.

### 3. Configuration & Déploiement
// turbo
1. Laissez les paramètres par défaut (Vercel gère le `npm run build` tout seul).
2. Si vous avez des variables d'environnement (ex: pour un formulaire de contact futur), ajoutez-les dans la section **Environment Variables**.
3. Cliquez sur **"Deploy"**.

**Félicitations !** Votre site sera accessible via une URL type `portfolio-v2.vercel.app`. 🎉

### 4. Mises à jour
À chaque fois que vous ferez un `git push` sur votre branche principale, Vercel redéploiera automatiquement la nouvelle version.
