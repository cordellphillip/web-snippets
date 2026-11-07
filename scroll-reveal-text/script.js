document.documentElement.classList.add("js");

const items = document.querySelectorAll(".reveal");

// number the items so each one waits a little longer than the last
items.forEach((el, i) => el.style.setProperty("--i", i));

// older browsers: just show everything
if (!("IntersectionObserver" in window)) {
  items.forEach(el => el.classList.add("is-in"));
} else {
  const io = new IntersectionObserver((entries, observer) => {
    // reveal when the panel is on screen, then stop watching
    if (entries.some(e => e.isIntersecting)) {
      items.forEach(el => el.classList.add("is-in"));
      observer.disconnect();
    }
  }, { threshold: 0.35 });

  io.observe(document.getElementById("panel"));
}
