const top_list_item = document.querySelectorAll(".list_item");

top_list_item.forEach(div => {
  div.addEventListener("click", function() {
    top_list_item.forEach(div => div.classList.remove("active"));
    this.classList.add("active");
  });
});


const srch_btn = document.getElementsByClassName(".block search_desk");

srch_btn.addEventListener("click", function() {

});