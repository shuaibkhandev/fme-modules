const currencyDivs = document.querySelectorAll(".currency");

currencyDivs.forEach(div => {
  div.addEventListener("click", function() {
    // Remove 'active' class from all divs
    currencyDivs.forEach(div => div.classList.remove("active"));
    
    // Add 'active' class to the clicked div
    this.classList.add("active");
  });
});
