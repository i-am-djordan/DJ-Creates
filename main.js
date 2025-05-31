fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const toggleButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const overlay = document.getElementById("overlay");
    const content = document.getElementById("page-content");

    // Move sidebarLinks selection and event attachment after header is loaded
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            content.classList.remove('shifted');
            overlay.classList.remove('show');
        });
    });

    toggleButton.addEventListener("click", () => {
      navMenu.classList.toggle("show");
      overlay.classList.toggle("show");
      content.classList.toggle("shifted");
    });

    overlay.addEventListener("click", () => {
      navMenu.classList.remove("show");
      overlay.classList.remove("show");
      content.classList.remove("shifted");
    });

  });


