# GoA Community Directory

Live website: https://austenjs.github.io/goagetcap5/

A responsive, searchable directory of 16 GoA members and their LinkedIn profiles.

## Maintenance

- `index.html` contains the layout, styles, member names, and profile links. No build tools or dependencies are required.
- `members/` and four files in `static/media/` supply the live portraits. Private Drive storage and a replacement thumbnail service are prepared; deployment and photo-history cleanup await authorization.
- `service-worker.js` retires the previous React offline cache for returning visitors. Keep this file until the cache transition is complete.
- `robots.txt` contains crawler directives.

GitHub Pages publishes `gh-pages`. The `master` branch is kept aligned with the maintained website instead of obsolete React source and unrelated demo pages.

Portraits displayed publicly can be saved by visitors. Deleting files does not erase earlier Git commits.
