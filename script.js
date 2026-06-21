// AOS scroll animation initialize
AOS.init({
    duration: 900,
    once: true,
    offset: 100
});

// Typed.js typing animation
var typed = new Typed(".typed-text", {
    strings: [
        "Aspiring Software Developer",
        "Python Learner",
        "Problem Solver",
        "Fresher Developer"
    ],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1200,
    loop: true
});