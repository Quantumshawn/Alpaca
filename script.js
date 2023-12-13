document.addEventListener('DOMContentLoaded', function () {

    // Image slideshow for the gallery section
    let currentSlide = 0;
    const slides = document.querySelectorAll('.gallery-slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        if (index < 0) {
            currentSlide = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        slides[currentSlide].style.display = 'block';
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Form validation for the contact form
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (validateInput(nameInput) && validateEmail(emailInput) && validateInput(messageInput)) {
            // Form is valid - You can add code to submit the form or display a success message
            console.log('Form submitted successfully!');
        }
    });

    function validateInput(input) {
        const value = input.value.trim();

        if (value === '') {
            alert('Please fill in all fields.');
            return false;
        }

        return true;
    }

    function validateEmail(emailInput) {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }

    // Smooth scroll effect for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });

    // Initial slideshow display
    showSlide(currentSlide);

    // Automatic slideshow
    setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    // Your code goes here
});

// scripts/script.js

document.addEventListener('DOMContentLoaded', function () {

    let currentSlide = 0;
    const slides = document.querySelectorAll('.gallery-slide');

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        slides[currentSlide].style.display = 'block';
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    setInterval(nextSlide, 5000);
});
