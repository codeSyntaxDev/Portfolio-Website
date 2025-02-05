function toggleMobileMenu(){
    document.getElementById('menu').classList.toggle("active");
}

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check user preference from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙 ";
  }
});
