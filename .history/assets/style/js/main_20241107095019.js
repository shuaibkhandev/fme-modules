const top_list_item = document.querySelectorAll(".list_item");

top_list_item.forEach(div => {
  div.addEventListener("click", function() {
    top_list_item.forEach(div => div.classList.remove("active"));
    this.classList.add("active");
  });
});


const srch_btn = document.querySelectorAll(".search_desk");

srch_btn.addEventListener("click", function() {
  this.classList.add("hidden_icons");
});