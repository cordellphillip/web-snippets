const dlg = document.getElementById("dlg");
const form = document.getElementById("form");
const status = document.getElementById("status");
const sendBtn = document.getElementById("send");
const failBox = document.getElementById("fail");

document.getElementById("open").addEventListener("click", () => dlg.showModal());
document.getElementById("close").addEventListener("click", () => dlg.close());

// clicking the dark area outside the card closes it
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

// Stand-in for a real endpoint so the demo works offline.
// Replace this with a fetch() to your own form handler.
function fakeSend(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (failBox.checked ? reject(new Error("failed")) : resolve(data)), 600);
  });
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  sendBtn.disabled = true;
  status.className = "status";
  status.textContent = "Sending...";

  try {
    await fakeSend(new FormData(form));
    status.className = "status ok";
    status.textContent = "Sent. We'll be in touch.";
    form.reset();
  } catch (err) {
    // The scripted request failed. Submit the form the old-fashioned way
    // so the browser posts it to the form's own action.
    status.className = "status error";
    status.textContent = "That didn't go through. Sending it another way...";
    // form.submit() skips this handler, so it can't loop
    setTimeout(() => form.submit(), 900);
  } finally {
    sendBtn.disabled = false;
  }
});
