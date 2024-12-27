const currencyDivs = document.getElementsByClassName("currency");

for (let i = 0; i < currencyDivs.length; i++) {
  currencyDivs[i].addEventListener("click", function() {
    currencyDivs[i].classList.toggle("opened");
  });
}
