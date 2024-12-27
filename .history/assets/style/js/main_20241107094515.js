const currencyDivs = document.querySelectorAll(".list_item");

currencyDivs.forEach(div => {
  div.addEventListener("click", function() {
    currencyDivs.forEach(div => div.classList.remove("active"));
    this.classList.add("active");
  });
});


coonsy 