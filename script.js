// Burger menu functionality
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('nav-active');
    }
});

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Carousel functionality
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scrollAmount = 0;
const destinationCards = document.querySelectorAll('.destination-card');
const cardWidth = destinationCards[0].offsetWidth; // Get the width of a single card
const visibleCards = Math.floor(carousel.clientWidth / cardWidth); // Calculate how many cards are visible
const scrollMax = (destinationCards.length - visibleCards) * cardWidth; // Calculate maximum scroll

nextBtn.addEventListener('click', () => {
    scrollAmount += cardWidth; // Scroll by one card width
    if (scrollAmount >= scrollMax) {
        scrollAmount = scrollMax; // Stop at the last card
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

prevBtn.addEventListener('click', () => {
    scrollAmount -= cardWidth; // Scroll back by one card width
    if (scrollAmount < 0) {
        scrollAmount = 0; // Don't go past the first card
    }
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
});

// Blogs section loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("Blogs section loaded!");
});

// Popup functionality
const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const signupPopup = document.getElementById('signupPopup');
const loginPopup = document.getElementById('loginPopup');
const closeSignup = document.getElementById('closeSignup');
const closeLogin = document.getElementById('closeLogin');

signupBtn.addEventListener('click', () => {
    signupPopup.style.display = 'flex';
    loginPopup.style.display = 'none';
});

loginBtn.addEventListener('click', () => {
    loginPopup.style.display = 'flex';
    signupPopup.style.display = 'none';
});

closeSignup.addEventListener('click', () => {
    signupPopup.style.display = 'none';
});

closeLogin.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === signupPopup) {
        signupPopup.style.display = 'none';
    }
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
});

// Login form submission
const loginForm = document.querySelector('#loginPopup form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    loginPopup.style.display = 'none';
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
const ackMessage = document.getElementById('ackMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    ackMessage.style.display = 'block';
    contactForm.reset();
});

// Read More buttons functionality
const readMoreButtons = document.querySelectorAll('.read-more-btn');
readMoreButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('data-target');
        const additionalInfo = document.getElementById(target);
        if (additionalInfo.style.display === "none" || additionalInfo.style.display === "") {
            additionalInfo.style.display = "block";
            this.textContent = "Read Less";
        } else {
            additionalInfo.style.display = "none";
            this.textContent = "Read More";
        }
    });
});

// Booking confirmation popup functionality
function showBookingPopup() {
    document.getElementById('bookingPopup').style.display = 'block';
}

function closeBookingPopup() {
    document.getElementById('bookingPopup').style.display = 'none';
}

document.querySelectorAll('.book-now').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        showBookingPopup();
    });
});

document.getElementById('closeBookingPopup').addEventListener('click', closeBookingPopup);
document.getElementById('okBtn').addEventListener('click', closeBookingPopup);

window.onclick = function(event) {
    if (event.target == document.getElementById('bookingPopup')) {
        closeBookingPopup();
    }
};

// Thank you popup functionality
function showThankYouPopup() {
    document.getElementById('thankYouPopup').style.display = 'block';
}

function closeThankYouPopup() {
    document.getElementById('thankYouPopup').style.display = 'none';
    location.reload(); // Refresh the page
}

document.querySelector('.booking-card form').addEventListener('submit', function(event) {
    event.preventDefault();
    showThankYouPopup();
});

document.getElementById('closeThankYouPopup').addEventListener('click', closeThankYouPopup);
document.getElementById('okThankYouBtn').addEventListener('click', closeThankYouPopup);

window.onclick = function(event) {
    if (event.target == document.getElementById('thankYouPopup')) {
        closeThankYouPopup();
    }
};
