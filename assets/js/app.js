window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
});

const form = document.getElementById("netlifyForm");
const btn = document.getElementById("submitBtn");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  btn.disabled = true;
  statusEl.textContent = "Sending...";

  const formData = new FormData(form);

  try {
    await fetch("/", {
      method: "POST",
      headers: { "Accept": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData)
    });

    form.reset();
    statusEl.textContent = "Submitted! Thank you.";
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Failed to send.";
  } finally {
    btn.disabled = false;
  }
});
