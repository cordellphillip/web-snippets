# Web snippets

Small, copy-and-paste pieces for building responsive websites: a floating hero, a category carousel, a scroll reveal, a sign-up pop-up and a members-only price gate. Each one is plain HTML, CSS and a little JavaScript. There is no build step and no dependency to install.

I made these while building a mobile-first wholesale storefront. The client's code, images, prices and name are not included. Everything here is rebuilt from scratch with sample content.

**Live demos:** https://cordellphillip.github.io/web-snippets/

| Snippet | What it does | Needs JavaScript? |
| --- | --- | --- |
| [`floating-hero-css`](floating-hero-css) | Product-style images float behind a headline, using CSS only | Only for the pause button |
| [`category-carousel`](category-carousel) | Swipeable cards with buttons, dots and arrow keys | Works without it, buttons need it |
| [`scroll-reveal-text`](scroll-reveal-text) | Lines fade in one after another as a section scrolls into view | Text still shows without it |
| [`account-modal-fallback`](account-modal-fallback) | A native `<dialog>` form that falls back to a normal submit if the request fails | Works without it |
| [`members-only-pricing`](members-only-pricing) | Hide prices until a buyer is approved, plus a Shopify Liquid snippet | Demo only, Liquid does the real work |

## Using a snippet

1. Open the folder and read its README. It explains how the piece works and what to change.
2. Open `index.html` in a browser to see it running.
3. Copy the markup from `index.html`, the rules from `styles.css` and the code from `script.js` into your own project.
4. Rename the classes if they clash with yours.

You don't need to credit me, but a star helps other people find the repo.

## What every snippet follows

- **Reduced motion:** animation turns off for visitors who ask for it.
- **Keyboard and screen readers:** real buttons and labels, visible focus, sensible ARIA only where it's needed.
- **Phones first:** layouts are written for small screens and scale up.
- **No dependencies:** each folder runs on its own.
- **Works when scripts fail:** the plain version is the base, and JavaScript is an upgrade.

## Honest notes

These are common patterns. Plenty of libraries do the same things, and they may suit you better if you need more features. The point here is short, readable code you can understand in a few minutes and change freely.

The members-only pricing demo shows the idea. If you use it for real prices, also check the cart, search suggestions, structured data and any apps that print prices.

## Run everything locally

```
git clone https://github.com/cordellphillip/web-snippets.git
cd web-snippets
```

Then open any folder's `index.html`. Or open the top-level `index.html` for a page that links to all of them.

## Contributing

Found a bug or an accessibility problem? Open an issue. Small fixes are welcome as pull requests. Keep each snippet dependency-free.

## License

MIT. See `LICENSE`.

Made by [Cordell Phillip](https://github.com/cordellphillip). You can also find me on [LinkedIn](https://www.linkedin.com/in/cordell-phillip-130442187/).
