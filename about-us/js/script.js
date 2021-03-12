function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// Burger menu

let menuBtn = document.querySelectorAll(".menu");
let menuLine = document.querySelectorAll(".menu-line");
let nav = document.querySelectorAll(".nav-list");

function toggleMenu() {
    nav.forEach(b => b.classList.toggle("active"));
    menuLine.forEach(b => b.classList.toggle("active"));
}

menuBtn.forEach(b=>b.addEventListener("click", toggleMenu));

// /Burger menu

// header-dropdowns
function dropdownOpen(item, content, icon) {
  item.addEventListener('click', e => {
    e.preventDefault()

    if (content.style.display === 'block') {
      content.style.display = 'none'
    } else {
      content.style.display = 'block'
    }

    if (icon.style.color === 'rgb(38, 50, 56)') {
      icon.style.color = '#a0a0a0'
    } else {
      icon.style.color = '#263238'
    }
  })
}

const profile = document.querySelector('.profile-username');
const profileContent = document.querySelector('.profile-content');

dropdownOpen(profile, profileContent)

const notifications = document.querySelector('.fa-bell');
const notificationsContent = document.querySelector('.notifications-content');

dropdownOpen(notifications, notificationsContent, notifications)

const messages = document.querySelector('.fa-envelope');
const messagesContent = document.querySelector('.messages-content');

dropdownOpen(messages, messagesContent, messages)

const cart = document.querySelector('.fa-shopping-cart');
const cartContent = document.querySelector('.cart-content');

dropdownOpen(cart, cartContent, cart)
// /header-dropdowns

// tabs
function openTab(evt, cityName) {
  let tabContent = document.querySelectorAll('.tab-content')
  tabContent.forEach(c => {
    c.style.display = 'none'
  })

  let tabLinks = document.querySelectorAll(".tab-toggle");
  tabLinks.forEach(link => {
    link.className = link.className.replace(" tab-toggle--active", "");
  })

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " tab-toggle--active";
}
// /tabs