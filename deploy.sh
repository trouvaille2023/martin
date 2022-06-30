

git add deploy

git commit -m "deploy" && git push


git push origin --delete gh-pages

git branch -d gh-pages

git checkout -b gh-pages

git subtree push --prefix deploy  origin gh-pages

git checkout main
