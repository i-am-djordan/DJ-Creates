fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const toggleButton = document.getElementById("menu-toggle");
    const closeButton = document.getElementById("close-menu");
    const navMenu = document.getElementById("nav-menu");
    const overlay = document.getElementById("overlay");
    const content = document.getElementById("page-content");

    toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      overlay.classList.toggle("show");
      content.classList.toggle("shifted");

    });

    closeButton.addEventListener("click", () => {
      navMenu.classList.toggle("hide");
      overlay.classList.toggle("hide");
    });

    overlay.addEventListener("click", () => {
      navMenu.classList.remove("show");
      overlay.classList.remove("show");
      content.classList.remove("shifted");
    });

  });


