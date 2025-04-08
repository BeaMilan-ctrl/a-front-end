const btn = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");
const result = document.getElementById("searchResult");

btn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value) {
    result.textContent = `Você buscou por: "${value}"`;
  } else {
    result.textContent = "";
  }
});
