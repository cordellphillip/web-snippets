document.documentElement.classList.add("js");

const track = document.getElementById("track");
const slides = [...track.children];
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dots = document.getElementById("dots");

// one dot per slide
slides.forEach((slide, i) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.className = "dot";
  dot.setAttribute("aria-label", `Go to ${slide.querySelector("h2").textContent}`);
  dot.addEventListener("click", () => goTo(i));
  dots.appendChild(dot);
});

function currentIndex() {
  // the slide whose left edge is closest to the left edge of the track
  const left = track.getBoundingClientRect().left;
  let best = 0, bestDist = Infinity;
  slides.forEach((s, i) => {
    const dist = Math.abs(s.getBoundingClientRect().left - left);
    if (dist < bestDist) { best = i; bestDist = dist; }
  });
  return best;
}

function goTo(i) {
  const index = Math.max(0, Math.min(slides.length - 1, i));
  track.scrollTo({ left: slides[index].offsetLeft - track.offsetLeft });
}

function update() {
  const i = currentIndex();
  const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
  prev.disabled = i === 0;
  next.disabled = atEnd;
  [...dots.children].forEach((d, n) =>
    d.setAttribute("aria-current", String(n === (atEnd ? slides.length - 1 : i))));
}

prev.addEventListener("click", () => goTo(currentIndex() - 1));
next.addEventListener("click", () => goTo(currentIndex() + 1));
track.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
window.addEventListener("resize", update);

// arrow keys work when the track has focus
track.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") { e.preventDefault(); goTo(currentIndex() + 1); }
  if (e.key === "ArrowLeft")  { e.preventDefault(); goTo(currentIndex() - 1); }
});

update();
