// Si la imagen local (img/xx.jpg) no existe todavía, usa una foto de stock
// libre de derechos (Picsum) como referencia visual temporal.
// En cuanto pongas tu propia foto en /img con el nombre correcto, la pisa automáticamente.
document.querySelectorAll('.photo-item').forEach(item => {
  const url = item.style.backgroundImage.slice(5, -2); // extrae la url()
  const seed = item.dataset.seed || Math.random();
  const test = new Image();
  test.onerror = () => {
    item.style.backgroundImage = `url('https://picsum.photos/seed/peaky${seed}/800/600')`;
    item.classList.add('img-stock');
  };
  test.src = url;
});
