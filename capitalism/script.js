document.querySelectorAll(".product").forEach((product) => {
  const randomRotation = Math.floor(Math.random() * 20) - 10;
  const randomRotationHover = Math.floor(Math.random() * 20) - 10;
  product.style.setProperty("--random-rotation", randomRotation);
  product.style.setProperty("--random-rotation-hover", randomRotationHover);
});
