# Kebab 05-800 Pruszków

Static multi-page website (PL / EN / UK). No framework; no build needed to run it.
Live: https://abulfaiz.github.io/kebab-05-800/

## Files
    index.html offers.html menu.html about.html contact.html   the 5 pages
    404.html robots.txt sitemap.xml favicon.svg                 SEO / hosting helpers
    assets/style.css      styling
    assets/config.js      YOUR ordering links (LINKS) and current promotions (OFFERS)
    assets/menu-data.js   menu items and prices (+ EN/UK category and description translations)
    assets/site.js        language switcher, menu/offers rendering, page titles per language
    images/               web-ready WebP images; images/source = original photos; images/thumb = menu thumbnails
    tools/build.py        regenerates the pages + static Polish menu/offers for search engines
    tools/optimize_images.py  makes WebP images from images/source

## Everyday edits
- Ordering links: `assets/config.js` -> `LINKS` (empty links are hidden automatically).
- Offers: `assets/config.js` -> `OFFERS` (delete an entry to remove it).
- Prices / dishes: `assets/menu-data.js`; dish-name translations are `NT` at the top of `assets/site.js`.
- After editing menu or offers, run `python3 tools/build.py` (needs Node.js) to refresh the static copy used by Google.
- Photos: save to `images/source/` using the names in `images/IMAGES.txt`, run `python3 tools/optimize_images.py`, commit the new WebP files.
- Own domain later: change `BASE` in `tools/build.py`, run it, and commit.

## Run locally
    python3 -m http.server 8000     # then open http://localhost:8000

## Publish
GitHub -> Settings -> Pages -> Branch `main`, folder `/ (root)`. Put these files at the top level of the repository.
