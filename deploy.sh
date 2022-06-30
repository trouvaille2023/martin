

git add deploy

git commit -m "deploy" && git push


git push origin --delete gh-pages

git branch -d gh-pages

git checkout -b gh-pages

git subtree push --prefix deploy  origin gh-pages

git checkout main

git subtree add --prefix deploy gh-pages

git subtree add --prefix  deploy origin main --squash

git subtree pull --prefix deploy origin main --squash

git subtree add --prefix=sub/libpng libpng master --squash

#git subtree add   --prefix=<prefix> <commit>
#git subtree add   --prefix=<prefix> <repository> <ref>
#git subtree pull  --prefix=<prefix> <repository> <ref>
#git subtree push  --prefix=<prefix> <repository> <ref>
#git subtree merge --prefix=<prefix> <commit>
#git subtree split --prefix=<prefix> [OPTIONS] [<commit>]
