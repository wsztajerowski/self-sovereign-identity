# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single Slidev presentation, "Self-sovereign identity", in `slides/`. There is no code to build
besides the deck. It was ported from AsciiDoc/reveal.js; the old sources are only in git history.

## Commands

```bash
cd slides
npm install
npm run dev      # Development server, http://localhost:3030
npm run build    # Build static site into slides/dist/
npm run export   # Export to slides/slides.pdf
npm run shots    # One PNG per slide into slides/.shots/ (git-ignored)
python3 tools/slidelist.py slides.md   # slide numbers for --range
```

`npm run shots` is the visual-verification loop. Always run it after editing `slides.md`,
`style.css` or `setup/mermaid.ts`, and look at the PNGs — overflow and Mermaid sizing are only
visible there. Narrow it with `-- --range N-M`.

## Conventions

- **Look:** the reveal.js *moon* theme, recreated in `slides/style.css` (Solarized base03
  background, League Gothic uppercase headings, Lato body, every slide centred). Keep new slides
  in that style rather than adding a second one.
- **Title-only slides** use `layout: section`; the first slide uses `layout: cover` with
  `class: title-slide`.
- **Images** go in `slides/src/resources/` and are placed with
  `<img class="figure" src="/src/resources/…">` (`wide` / `full` modifiers for bigger ones).
- **Diagrams are Mermaid**, not images. Size each with `{scale: …}` on the fence; colours come
  from `slides/setup/mermaid.ts`. Emoji stand in for icons.
- **Math is KaTeX** (`$…$`).
- **Speaker notes** are the HTML comment at the end of a slide.
- **Untitled slides** need a `title:` in their frontmatter, or the Slidev menu shows "undefined".
- The content is a faithful port of the talk as given; its spelling (e.g. "exaples", "Verifable",
  "Soudness", "comunicator") is kept as it was presented unless the author asks to fix it.

## Publishing

`.github/workflows/publish-slides.yml` builds the deck with `--base /self-sovereign-identity/`
and the PDF, and deploys both to GitHub Pages on every push to `main` touching `slides/`. The base
must match the repo name. The PDF is never committed.
