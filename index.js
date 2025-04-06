fetch("https://pleasing-expression-production.up.railway.app/api/hello?name=Cloudflare")
  .then(res => res.json())
  .then(data => {
    document.body.innerHTML = `<h1>${data.greeting}</h1>`;
  });
