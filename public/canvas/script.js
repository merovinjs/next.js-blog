window.addEventListener("load", () => {
  const h1 = document.querySelector("h1");
  console.log(h1.textContent); // selam

  const p = document.createElement("p");
  p.textContent = h1.textContent;
  document.body.appendChild(p);
});
