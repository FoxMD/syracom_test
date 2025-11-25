(function () {
  const weekdayEl = document.getElementById("weekday");
  const dateEl = document.getElementById("date");
  const toggleBtn = document.getElementById("toggleThemeBtn");

  // Set today's date & weekday
  const now = new Date();
  const weekdayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  if (weekdayEl) weekdayEl.textContent = weekdayNames[now.getDay()];

  if (dateEl) {
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    dateEl.textContent = `${yyyy}-${mm}-${dd}`;
  }

  // Theme toggle
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
    });
  }
})();
