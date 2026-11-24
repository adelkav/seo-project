// Небольшой скрипт: добавляет текущий год в подпись проекта при загрузке страницы.
document.addEventListener("DOMContentLoaded", function () {
  const year = new Date().getFullYear();
  document.querySelectorAll("footer span:last-child").forEach(function (item) {
    item.textContent = "Учебный проект · " + year;
  });
});
