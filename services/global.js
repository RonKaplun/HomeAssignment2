function toggleMenu() {
    const navMenu = document.querySelector("nav ul");
    navMenu.classList.toggle("open");
  }
  

  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark ? "on" : "off");
  }

  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "on") {
      document.body.classList.add("dark-mode");
    }
  });
  