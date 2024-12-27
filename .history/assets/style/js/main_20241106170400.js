const currencyDivs = document.getElementsByClassName("currency");

for (let i = 0; i < currencyDivs.length; i++) {
  currencyDivs[i].addEventListener("click", function() {
    // Toggle the 'opened' class on the clicked div
    currencyDivs[i].classList.toggle("opened");
  });
}
