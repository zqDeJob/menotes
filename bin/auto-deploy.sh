npm run docs:build
cd docs/.vitepress/dist

git add -A
git commit -m "auto construct blog"

git push -f origin