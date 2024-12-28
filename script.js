function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function disableRightClick(event) {
    if (event.button == 2) {
        alert("Right-click is disabled on this image.");
        return false;
    }
}