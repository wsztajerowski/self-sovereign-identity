# slides — the Slidev presentation

"Self-sovereign identity" — built with [Slidev](https://sli.dev).

Everything lives in a single deck, `slides.md`. The reveal.js moon look is in
`style.css`, the Mermaid colours in `setup/mermaid.ts`, the slide number in
`global-bottom.vue`, and images under `src/resources/`.

## Prerequisites

Node.js 18+ and npm.

```bash
cd slides
npm install
```

## Commands

### `npm run dev` — while you are writing

```bash
npm run dev          # http://localhost:3030
```

Hot-reloads on every save. Also the only way to reach
`http://localhost:3030/presenter` (presenter view with the speaker notes) and
`http://localhost:3030/overview`.

**Use it to write, not to check** — that is what `npm run shots` is for.

### `npm run shots` — after every edit

```bash
npm run shots                      # all 47 slides into .shots/
npm run shots -- --range 19-24     # just a few
npm run shots -- --with-clicks     # one image per click step
```

One PNG per slide in `.shots/`. Content that looks fine in the Markdown
routinely overflows the frame, and Mermaid diagrams in particular only show
their real size in the image.

### `python3 tools/slidelist.py slides.md` — before `--range`

Prints every slide with its position, the number `--range` takes, its line in
`slides.md` and its heading. Run it after adding or removing slides.

### `npm run export` — the downloadable PDF

```bash
npm run export                     # slides.pdf, one page per slide
```

Playwright's Chromium is downloaded on first `npm install`.

### `npm run build` — for hosting

```bash
npm run build        # static site into slides/dist/
```

## Diagrams are Mermaid

The five diagrams that used to be exported from draw.io (both DIDComm slides,
issuing credentials, verifying credentials and the credentials flow) are
` ```mermaid ` blocks in `slides.md`. Edit the text and the slide redraws.

* **Size them with `{scale: …}`** on the fence line
  (` ```mermaid {scale: 1.9} `). Mermaid draws at its natural size, so each
  diagram carries its own scale, tuned so it fills the slide without clipping
  the heading. After changing a diagram, run `npm run shots -- --range N` and
  adjust.
* **Colours come from `setup/mermaid.ts`** (the moon palette); don't style
  individual nodes.
* **People, wallets and buildings are emoji** in the node labels (👨 👩 🔐 🏛️
  🏦 ⛓️) — Mermaid cannot use the draw.io clip-art. CI installs a colour emoji
  font before exporting the PDF so they don't print as empty boxes.
* **Node order is layout.** Dagre ranks nodes by the order edges are declared,
  and `a ~~~ b` is an invisible edge that only pulls `b` next to `a`. The
  credentials-flow diagram uses both to keep its labels from overlapping.

The remaining images are third-party figures (W3C, ToIP, the SSI book) kept as
PNG/JPEG.

## Publishing

Pushing to `main` with changes under `slides/` triggers
[`.github/workflows/publish-slides.yml`](../.github/workflows/publish-slides.yml),
which builds the deck and the PDF and deploys both to GitHub Pages:

| URL | What |
|---|---|
| <https://wsztajerowski.github.io/self-sovereign-identity/> | the deck, navigable in a browser |
| <https://wsztajerowski.github.io/self-sovereign-identity/slides.pdf> | the PDF, for download |

The PDF is built in CI rather than committed, and `*.pdf` is git-ignored.

**The base path breaks this quietly.** A project Pages site is served from
`/self-sovereign-identity/`, so the workflow builds with
`--base /self-sovereign-identity/`. Rename the repo and every asset 404s until
that flag matches.

## Deck structure

| Section | Covers |
|---|---|
| Digital identity models | Centralized, federated and decentralized identity |
| What is SSI? | The definition, "bring your own identity" |
| Paweł wants a communicator without a server | DIDs, DID documents, wallets, DIDComm |
| Paweł receives an e-identity | Verifiable credentials, issuing them |
| Paweł goes to ssi-Bank | Trust triangle, verifying credentials, selective disclosure, the full flow |
| Paweł goes shopping in Brasil | Governance frameworks |
| Paweł doesn't trust Chinese wallets | The Trust over IP stack |
| Paweł wants to buy a drink | Zero-knowledge proofs, age verification with hash chains |
| Thank you / Sources | |
