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
const overlay = document.querySelector(".search_overlay");

srch_btn.addEventListener("click", function(event) {
  event.stopPropagation();
  this.classList.add("hidden_icons");
  header.classList.add("search_active");
  navigation.classList.add("hide_nav_main");
  srch_field.style.display = "block";
  overlay.style.display = "block";
});

document.addEventListener("click", function(event) {
  if (!srch_btn.contains(event.target) &&
      !header.contains(event.target) &&
      !srch_field.contains(event.target) &&
      !overlay.contains(event.target)) {
    
    // Remove added classes and reset display styles
    srch_btn.classList.remove("hidden_icons");
    header.classList.remove("search_active");
    navigation.classList.remove("hide_nav_main");
    srch_field.style.display = "none";
    overlay.style.display = "none";
  }
});