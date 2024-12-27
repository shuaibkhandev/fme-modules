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

overlay.addEventListener("click", function() {
  srch_btn.classList.remove("hidden_icons");
  header.classList.remove("search_active");
  navigation.classList.remove("hide_nav_main");
  srch_field.style.display = "none";
  overlay.style.display = "none";
});

const searchInput = document.getElementById("search")
const suggestionsList = document.querySelector("search-suggestions");

searchInput.addEventListener("input", function () {
    const inputValue = this.value.toLowerCase();
    suggestionsList.innerHTML = ""; // Clear previous suggestions
    
    // Filter and display suggestions
    if (inputValue) {
        const filteredSuggestions = suggestions.filter(item =>
            item.toLowerCase().includes(inputValue)
        );
        
        if (filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(item => {
                const suggestionItem = document.createElement("li");
                suggestionItem.textContent = item;
                suggestionItem.addEventListener("click", function () {
                    searchInput.value = item;
                    suggestionsList.style.display = "none"; // Hide suggestions on selection
                });
                suggestionsList.appendChild(suggestionItem);
            });
            suggestionsList.style.display = "block";
        } else {
            suggestionsList.style.display = "none"; // Hide if no matches
        }
    } else {
        suggestionsList.style.display = "none"; // Hide if input is empty
    }
});

// Hide suggestions when clicking outside the search area
document.addEventListener("click", function (event) {
    if (!searchInput.contains(event.target)) {
        suggestionsList.style.display = "none";
    }
});