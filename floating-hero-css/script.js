// Only job: let people pause the floating animation.
const button = document.querySelector('.pause');

button.addEventListener('click', () => {
  const paused = document.body.classList.toggle('is-paused');
  button.setAttribute('aria-pressed', paused);
  button.textContent = paused ? 'Play animation' : 'Pause animation';
});
