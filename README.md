# HOW TO PUSH TO GITHUB PAGES
```
npm install
npm run build
touch out/.nojekyll
git add -A
git commit -m "Déploiement sur GitHub Pages" --allow-empty
git subtree push --prefix out origin gh-pages
```
