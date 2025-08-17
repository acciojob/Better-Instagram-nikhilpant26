//your code here
let draggedElement = null;

const imageDivs = document.querySelectorAll('.image');

imageDivs.forEach(div => {
  div.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow drop
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement && draggedElement !== e.target) {
      // Swap background images
      // Read computed background images
      const draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
      const targetBg = window.getComputedStyle(e.target).backgroundImage;

      // Swap
      draggedElement.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;
    }
  });
});
