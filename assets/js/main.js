// Top list links
const top_list_item = document.querySelectorAll(".list_item");

top_list_item.forEach((item) => {
  item.addEventListener("click", function () {
    top_list_item.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

// footer menu for responsive
const footer_title = document.querySelectorAll(".foot_title");
const footer_list = document.querySelectorAll(".foot_list");

footer_title.forEach((item, index) => {
  item.addEventListener("click", function () {
    // Check if the clicked item is already active
    const isActive = this.classList.contains("active");

    // Remove 'active' class from all titles
    footer_title.forEach((item) => item.classList.remove("active"));

    // Hide all footer lists
    footer_list.forEach((list) => (list.style.display = "none"));

    // If the clicked item was not active, add 'active' class and show the corresponding list
    if (!isActive) {
      this.classList.add("active");
      footer_list[index].style.display = "block";
    }
    // If the clicked item was active, it will now have no active class and the list remains hidden
  });
});


// script for support Center Faq (accordion)
const acc = document.querySelectorAll(".accordion");

acc.forEach((question) => {
  question.addEventListener("click", function () {
   const attribute =  this.getAttribute("aria-expanded") === "true";

   acc.forEach((item)=>{
    if(item != this){
      
      item.setAttribute("aria-expanded", "false");
      const otherIcon = item.querySelector("img");
      const otherPanel = item.nextElementSibling;
      otherPanel.style.maxHeight = null;
      otherPanel.classList.remove("open");
      otherIcon.src = "../assets/images/down icon.png";
      
    }
   })
   
   this.setAttribute("aria-expanded", !attribute);
   
    var panel = this.nextElementSibling;
    const icon = this.querySelector('img');
    

    if (panel.classList.contains("open")) {
      panel.style.maxHeight = null;
      panel.classList.remove("open");
      icon.src = "../assets/images/down icon.png"
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("open");
      icon.src = "../assets/images/up icon.png"
    }
  });
});





$(document).ready(function () {
  $(".review_carousel").slick({
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:
      '<button type="button" class="slick-prev slick-arrow">Previous</button>',
    nextArrow:
      '<button type="button" class="slick-next slick-arrow">Next</button>',
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
