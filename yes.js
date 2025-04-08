function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter(text, element, delay = 50) {
  for (let char of text) {
    element.textContent += char;
    await sleep(delay);
  }
}

async function main() {
  const greetingElement = document.getElementById("g2E");
  const cursor = document.getElementById("cursor");

  //const response = await fetch("https://pleasing-expression-production.up.railway.app/");
  const response = await fetch("https://shy-marsha-potter-2060b27e.koyeb.app/h");
  const data = await response.json();
  
  await typeWriter(data.msg, greetingElement);

  // Blink cursor twice, then hide
  await sleep(1400); // roughly 2 blinks
  cursor.style.display = "none";
}

main();
