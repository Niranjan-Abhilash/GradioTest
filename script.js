function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWriter(text, element, cursor, delay = 50) {
  cursor.style.display = "inline"; // Show the cursor when typing starts
  for (let char of text) {
    element.textContent += char;
    await sleep(delay);
  }
}

async function main() {
  const greetingElement = document.getElementById("greeting");
  const cursor = document.getElementById("cursor");
  const loader = document.getElementById("loader");

  cursor.style.display = "none"; // Hide the cursor initially

  try {
    const response = await fetch("https://shy-marsha-potter-2060b27e.koyeb.app/");
    const data = await response.json();

    loader.style.display = "none"; // Hide loader once ready
    await typeWriter(data.msg, greetingElement, cursor); // Type message

    await sleep(1400); // Let cursor blink briefly
    cursor.style.display = "none"; // Then hide cursor
  } catch (error) {
    console.error("Error fetching data:", error);
    loader.innerHTML = "❌ Failed to load message";
  }
}

main();
