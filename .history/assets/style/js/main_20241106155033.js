const myDiv = document.getElementById("myDiv");

// Add a click event listener to the div
myDiv.addEventListener("click", function() {
  // Toggle the 'opened' class on the div
  myDiv.classList.toggle("opened");
});