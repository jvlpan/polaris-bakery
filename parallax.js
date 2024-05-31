const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show');
            }
        });
    }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline();

timeline.to(".cloud-left-large", {
    scrollTrigger: {
        trigger: ".content-sections",
        start: "top top",
        end: "bottom",
        scrub: 1,
    },
    left: 0,
    bottom: "55%"
});

timeline.to(".cloud-right-large", {
    scrollTrigger: {
        trigger: ".content-sections",
        start: "top top",
        end: "bottom",
        scrub: 1,
    },
    right: 0,
    bottom: "45%"
});

timeline.to(".cloud-left-small", {
    scrollTrigger: {
        trigger: ".menu-section",
        start: "top top",
        end: "bottom",
        scrub: 1,
    },
    left: 0,
    bottom: "79%"
});

timeline.to(".cloud-right-small", {
    scrollTrigger: {
        trigger: ".specials-section",
        start: "top top",
        end: "bottom",
        scrub: 1,
    },
    right: 0,
    bottom: "80%"
});

timeline.to(".cloud-top-small", {
    scrollTrigger: {
        trigger: ".specials-section",
        start: "top top",
        end: "bottom",
        scrub: 1,
    },
    right: "60%",
    top: "15%"
});

timeline.to(".cloud-top-large", {
    scrollTrigger: {
        trigger: ".content-sections",
        start: "top top",
        end: "bottom",
        scrub: 1,
    },
    right: "30%",
    top: "15%"
});

timeline.to(".svg-graphic-background-day", {
    scrollTrigger: {
        trigger: ".content-sections",
        start: "top top",
        end: "bottom",
        scrub: true,
    },
    opacity: 0
});

timeline.to(".svg-graphic-background-night", {
    scrollTrigger: {
        trigger: ".content-sections",
        start: "top top",
        end: "bottom",
        scrub: true,
    },
    opacity: 1
});

timeline.from(".polaris-building", {
    scale: 0.8,
    opacity: 0,
    scrollTrigger: {
        trigger: ".polaris-building",
        start: 'bottom 85%',
        end: 'bottom 80%',
        scrub: 1,
        // markers: true
    },
});
