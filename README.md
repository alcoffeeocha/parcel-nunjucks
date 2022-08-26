# parcel-nunjucks
## docs
- [parcel](https://parceljs.org/docs/)
- [nunjucks](https://mozilla.github.io/nunjucks/templating.html)

## steps
### install yarn (optional, alternative to npm)
[steps](https://yarnpkg.com/getting-started/install)
### install dependencies
```
yarn
```
### convert nunjucks to html
```
yarn build:html
```
### start the development server
```
yarn dev
```
### build for production
```
yarn build
```
### start coding from /app/src/templates/ 
no need to touch /app/src/html/

### if something went wrong
try `rm -rf .parcel-cache` and re-run previous command

## helpers
- "Nunjucks VSCode Extension Pack" by douglaszaltron
- add into settings.json   
  ```
  "emmet.includeLanguages": {
    "nunjucks": "html",`
    "njk": "html"
  }
  ```