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
  document.getElementById("cursor").style.display = "none";
  const greetingElement = document.getElementById("greeting");
  const cursor = document.getElementById("cursor");
  const loader = document.getElementById("loader");

  try {
    const response = await fetch("https://shy-marsha-potter-2060b27e.koyeb.app/");
    const data = await response.json();

    // Hide loader once data is ready
    loader.style.display = "none";
    document.getElementById("cursor").style.display = "block";

    // Display message with typing animation
    await typeWriter(data.msg, greetingElement);

    // Blink cursor twice, then hide
    await sleep(1400);
    cursor.style.display = "none";
  } catch (error) {
    console.error("Error fetching data:", error);
    loader.textContent = "Failed to load message 😢";
  }
}

main();
