const top_list_item = document.querySelectorAll(".list_item");

top_list_item.forEach(item => {
  item.addEventListener("click", function() {
    top_list_item.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});


const srch_btn = document.querySelector(".search_desk");
const header = document.querySelector(".header");

srch_btn.addEventListener("click", function() {
  this.classList.add("hidden_icons");
  header.classList.add("hidden_icons");
  console.log("123");
});