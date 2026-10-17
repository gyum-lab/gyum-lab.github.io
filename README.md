# gyum-lab.github.io

Source of the personal academic homepage of **Gyumin Kim** (M.S.–Ph.D. student, SeDA Lab, UNIST).

**Site:** <https://gyum-lab.github.io>

It is a single-page Jekyll site built on the Academic 4.7.0 template. GitHub Actions builds the site and deploys it to GitHub Pages on every push to `qmin`.

## Editing content

Almost everything on the page lives in two data files, so most edits never touch `index.html`.

| What | File |
|---|---|
| News, research interests, education, experience, teaching, awards, skills | `_data/cv.yml` |
| Publications | `_data/publications.yml` |
| Greeting and bio paragraphs, contact info, profile links | `index.html` (the `#about` section) |
| Profile photo | `images/profile.jpg` (square) |
| Styles | `css/custom.css` (do not edit `css/academic.css`) |
| Tab icon | `favicon.svg` |

### Publication fields

```yaml
- title: "Paper title"
  authors: "Gyumin Kim and Heechun Park"   # "Gyumin Kim" is bolded automatically
  venue: "Full venue name, year"
  short: "ICCAD 2026"                      # shown in bold on the page
  type: conference                         # journal | conference
  first_author: true                       # optional
  note: Accepted                           # optional; shown as "🎉 Accepted"
  award: Best Paper Award                  # optional; shown in red with 🏆
  doi: 10.xxxx/xxxxx                       # optional; real DOIs only
  image: images/papers/xxx.jpg             # optional; representative figure (left thumbnail)
```

Keep entries newest first. Once a conference has taken place, remove `note: Accepted`. Add `doi` once the paper has a DOI.

## CV (PDF)

- Source: `cv/src/cv.tex`, written to be maintained in Overleaf. Upload the file and compile it with **pdfLaTeX**.
- Published file: `cv/Gyumin_Kim_CV.pdf`. The profile's **CV** link opens it, and the ⬇ icon next to it downloads it.

To update the CV, edit it in Overleaf, download the compiled PDF, and replace `cv/Gyumin_Kim_CV.pdf` with it. The CV has no hyperlinks on purpose.

To compile locally instead:

```bash
latexmk -pdf -outdir=/tmp/cvbuild cv/src/cv.tex
cp /tmp/cvbuild/cv.pdf cv/Gyumin_Kim_CV.pdf
```

## Local preview

The site uses only Jekyll's built-in features, so any Jekyll 3.10+/4.x works. For example:

```bash
jekyll build --destination /tmp/site
python3 -m http.server 8000 --directory /tmp/site
```

## Deploy

1. Commit and push to the `qmin` branch (the default and only branch).
2. `.github/workflows/deploy.yml` builds the site with `actions/jekyll-build-pages` and publishes it with `actions/deploy-pages`. A deploy takes about a minute.
3. Pages is configured with **Source: GitHub Actions**, so there is no `gh-pages` branch.

The repository must stay **public**: on the GitHub Free plan, a private repository cannot serve Pages.

## License and credits

- Layout and `css/academic.css` are adapted from [chojw/chojw.github.io](https://github.com/chojw/chojw.github.io), licensed under the Apache License 2.0 (see `LICENSE` and `NOTICE`).
- `css/academic.css` bundles [Source Themes Academic](https://github.com/gcushen/hugo-academic) v4.7.0 and [Bootstrap](https://getbootstrap.com/) v4.4.1, both under the MIT License.
- Page content, the photo and the CV are © Gyumin Kim.
