window.addEventListener("load", () => {
  const windows = document.querySelectorAll(".window");

  windows.forEach((window) => {
    let isDragging = false;
    let startX, startY, initialX, initialY;

    window.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialX = parseInt(window.style.left, 10) || 0;
      initialY = parseInt(window.style.top, 10) || 0;

      window.style.zIndex = 1000;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;

      const currentX = e.clientX;
      const currentY = e.clientY;

      const deltaX = currentX - startX;
      const deltaY = currentY - startY;

      window.style.left = `${initialX + deltaX}px`;
      window.style.top = `${initialY + deltaY}px`;
    });

    window.addEventListener("mouseup", () => {
      isDragging = false;
    });

    window.addEventListener("mouseleave", () => {
      isDragging = false;
    });
  });

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  windows.forEach((window) => {
    const randomX = Math.random() * (viewportWidth - window.offsetWidth);
    const randomY = Math.random() * (viewportHeight - window.offsetHeight);

    window.style.position = "absolute";
    window.style.left = `${randomX}px`;
    window.style.top = `${randomY}px`;
  });
});
