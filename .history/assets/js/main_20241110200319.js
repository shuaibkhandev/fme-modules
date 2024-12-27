// Top list links
const top_list_item = document.querySelectorAll(".list_item");

top_list_item.forEach(item => {
  item.addEventListener("click", function () {
    top_list_item.forEach(item => item.classList.remove("active"));
    this.classList.add("active");
  });
});


// Search
const srch_btn = document.querySelector(".search_desk");
const header = document.querySelector(".header");
const srch_field = document.querySelector(".search_field_head");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".search_overlay");

srch_btn.addEventListener("click", function (event) {
  event.stopPropagation();
  this.classList.add("hidden_icons");
  header.classList.add("search_active");
  navigation.classList.add("hide_nav_main");
  srch_field.style.display = "block";
  overlay.style.display = "block";
});

overlay.addEventListener("click", function () {
  srch_btn.classList.remove("hidden_icons");
  header.classList.remove("search_active");
  navigation.classList.remove("hide_nav_main");
  srch_field.style.display = "none";
  overlay.style.display = "none";
});

const searchInput = document.getElementById("search");
const suggestionsList = document.getElementById("suggestions");
const suggestionItems = Array.from(suggestionsList.getElementsByTagName("li")); // Array of all <li> elements

searchInput.addEventListener("input", function () {
  const inputValue = this.value.toLowerCase();

  if (inputValue) {
    suggestionItems.forEach(item => {
      if (item.textContent.toLowerCase().includes(inputValue)) {
        item.style.display = "block"; // Show matching items
      } else {
        item.style.display = "none"; // Hide non-matching items
      }
    });
    suggestionsList.style.display = "block"; // Show suggestions list
  } else {
    suggestionsList.style.display = "none"; // Hide list when input is empty
  }
});

// Hide suggestions when clicking outside the search area
document.addEventListener("click", function (event) {
  if (!searchInput.contains(event.target)) {
    suggestionsList.style.display = "none";
  }
});

// footer menu for responsive
const footer_title = document.querySelectorAll(".foot_title");
const footer_list = document.querySelectorAll(".foot_list");

footer_title.forEach((item, index) => {
  item.addEventListener("click", function () {
    // Check if the clicked item is already active
    const isActive = this.classList.contains("active");

    // Remove 'active' class from all titles
    footer_title.forEach(item => item.classList.remove("active"));
    
    // Hide all footer lists
    footer_list.forEach(list => list.style.display = "none");

    // If the clicked item was not active, add 'active' class and show the corresponding list
    if (!isActive) {
      this.classList.add("active");
      footer_list[index].style.display = "block";
    }
    // If the clicked item was active, it will now have no active class and the list remains hidden
  });
});



$(document).ready(function(){
  $('.review_carousel').slick({ 
      arrows : true,
      dots:false,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: false,
      centerMode: true,
      centerPadding: '60px',
  });
});
