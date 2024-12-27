const currencyDivs = document.querySelectorAll(".currency");

currencyDivs.forEach(div => {
  div.addEventListener("click", function() {
    currencyDivs.forEach(div => div.classList.remove("active"));
    this.classList.add("active");
  });
});
