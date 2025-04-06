// fetch("https://pleasing-expression-production.up.railway.app/")
//   .then(res => res.json())
//   .then(data => {
//     document.body.innerHTML = `<h1>${data.greeting}</h1>`;
//   });

fetch("https://pleasing-expression-production.up.railway.app/")
  .then(res => res.json())
  .then(data => {
    console.log(data.message);
    await sleep(2000);
    document.getElementById("greeting").textContent = data.message;
  });
