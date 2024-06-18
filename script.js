document.addEventListener('DOMContentLoaded', function () {
    let navbar = document.querySelector('.header .navbar');
    let menuBtn = document.querySelector('#menu-btn');
    let navClose = document.querySelector('#nav-close');

    menuBtn.addEventListener('click', function () {
        navbar.classList.add('active');
    });

    navClose.addEventListener('click', function () {
        navbar.classList.remove('active');
    });

    let searchForm = document.querySelector('.search-form');
    let searchBtn = document.querySelector('#search-btn');
    let closeSearch = document.querySelector('#close-search');

    searchBtn.addEventListener('click', function () {
        searchForm.classList.add('active');
    });

    closeSearch.addEventListener('click', function () {
        searchForm.classList.remove('active');
    });
});

window.onscroll = () => {
    navbar.classList.remove('active');

    if (window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload = () => {
    if (window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".clients-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

document.addEventListener("DOMContentLoaded", function() {
    let loadMoreBtn = document.querySelector('.packages .load-more .btn');
    let currentItem = 3;
  
    loadMoreBtn.addEventListener('click', () => {
      let boxes = [...document.querySelectorAll('.packages .box-container .box')];
  
      for (var i = currentItem; i < currentItem + 3 && i < boxes.length; i++){
        boxes[i].style.display = 'inline-block';
      }
  
      currentItem += 3;
      if (currentItem >= boxes.length){
        loadMoreBtn.style.display = 'none';
      }
    });
});