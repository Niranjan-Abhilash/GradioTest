// Sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Typewriter effect
async function typeWriterEffect(element, text, delay = 100) {
  for (let i = 0; i <= text.length; i++) {
    element.textContent = text.slice(0, i);
    await sleep(delay);
  }
}

// Fetch and display with typewriter
async function fetchGreeting() {
  const res = await fetch("https://pleasing-expression-production.up.railway.app/");
  const data = await res.json();
  const greetingEl = document.getElementById("greeting");
  await sleep(1000); // Optional wait before typing
  typeWriterEffect(greetingEl, data.message, 60); // Adjust speed here
}

fetchGreeting();
