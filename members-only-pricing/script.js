// Fake catalog for the demo. A real store would get this from Shopify.
const products = [
  { name: "Sample product one",   pack: "Case of 12",  price: "12.00", tile: "#d9e8c8" },
  { name: "Sample product two",   pack: "Case of 24",  price: "18.50", tile: "#f2d9c4" },
  { name: "Sample product three", pack: "Box of 6",    price: "7.25",  tile: "#d4dff2" },
  { name: "Sample product four",  pack: "Case of 10",  price: "31.00", tile: "#eddcf0" },
  { name: "Sample product five",  pack: "Pack of 20",  price: "9.75",  tile: "#f5ecc2" },
  { name: "Sample product six",   pack: "Case of 8",   price: "22.40", tile: "#cfeee6" }
];

const lockIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
  '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';

const grid = document.getElementById("grid");
const switchEl = document.getElementById("approved");

function render(approved) {
  grid.innerHTML = products.map(p => `
    <li class="card" style="--tile:${p.tile}">
      <div class="tile" role="img" aria-label="${p.name} placeholder image"></div>
      <h2>${p.name}</h2>
      <p class="pack">${p.pack}</p>
      <div class="price-slot">
        ${approved
          ? `<span class="price">$${p.price}</span>`
          : `<span class="lock">${lockIcon} Members only</span>`}
      </div>
      <button class="buy" ${approved ? "" : "disabled"}>
        ${approved ? "Add to cart" : "Log in to order"}
      </button>
    </li>`).join("");
}

switchEl.addEventListener("change", () => render(switchEl.checked));
render(false);
