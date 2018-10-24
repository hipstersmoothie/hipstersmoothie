# rm -rf node_modules/.cache
next build
next export
touch out/.nojekyll
push-dir --dir=out --branch=gh-pages --cleanup --verbose
