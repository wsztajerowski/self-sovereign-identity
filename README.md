# Self-sovereign identity

A talk on self-sovereign identity (SSI), told through Paweł's stories: he wants
a messenger without a server, receives an e-identity, opens an account at
ssi-Bank, shops abroad, refuses to trust a wallet he cannot vet, and proves he
is old enough to buy a drink. Along the way it covers decentralized identifiers
(DIDs), DID documents, wallets, DIDComm, verifiable credentials, the trust
triangle, selective disclosure, governance frameworks, the Trust over IP stack
and a hash-chain zero-knowledge proof of age.

| | |
|---|---|
| **Browse the deck** | <https://wsztajerowski.github.io/self-sovereign-identity/> |
| **Download the PDF** | <https://wsztajerowski.github.io/self-sovereign-identity/slides.pdf> |

## Run it locally

```bash
cd slides
npm install
npm run dev          # http://localhost:3030
```

See [`slides/README.md`](slides/README.md) for every command, the diagram
conventions and how publishing works.

## History

The deck was first written in AsciiDoc and presented with reveal.js (it was
given at KJUG in 2023). It now lives in [Slidev](https://sli.dev), with the same
tooling as [illusion-grinder](https://github.com/wsztajerowski/illusion-grinder):

* the reveal.js **moon** look is recreated in `slides/style.css`;
* the draw.io diagrams are now **Mermaid** blocks inside `slides.md`;
* the math on the zero-knowledge slides is **KaTeX**;
* the PDF is built by CI instead of being committed.

The AsciiDoc sources, the draw.io file and the old `print_pdf.py` are still in
the git history (the `master` branch is the pre-KJUG version).
