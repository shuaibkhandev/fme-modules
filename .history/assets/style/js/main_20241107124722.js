const top_list_item = document.querySelectorAll(".list_item");

top_list_item.forEach(item => {
  item.addEventListener("click", function() {
    top_list_item.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});


const srch_btn = document.querySelector(".search_desk");
const header = document.querySelector(".header");
const srch_field = document.querySelector(".search_field_head");
const navigation = document.querySelector(".navigation");
search_overlay

srch_btn.addEventListener("click", function() {
  this.classList.add("hidden_icons");
  header.classList.add("search_active");
  navigation.classList.add("hide_nav_main");
  srch_field.style.display = "block";
  console.log("123");
});