document.addEventListener("DOMContentLoaded", function () {
  // Hero text fade-in effect
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(20px)";
    setTimeout(() => {
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0)";
      heroText.style.transition = "opacity 1.2s ease-out, transform 1.2s ease-out";
    }, 500);
  }

  // Dark Mode Toggle with persistence
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.innerHTML = "☀️";
      localStorage.setItem("darkMode", "enabled");
    } else {
      darkModeToggle.innerHTML = "🌙";
      localStorage.setItem("darkMode", "disabled");
    }
  });

  // Load dark mode state from localStorage
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.innerHTML = "☀️";
  }

  // Smooth scrolling for in-page navigation
  document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
