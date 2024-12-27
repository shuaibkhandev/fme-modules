const top_list_item = document.querySelectorAll(".list_item");

currencyDivs.forEach(div => {
  div.addEventListener("click", function() {
    currencyDivs.forEach(div => div.classList.remove("active"));
    this.classList.add("active");
  });
});


const srch_btn = document.getElementsByClassName(".block search_desk"); 