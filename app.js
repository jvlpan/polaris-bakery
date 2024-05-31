let currentImageIndex = 1;
const maxValue = 3;
let animating = false;

function enableCreditsOverlay() {
    document.getElementById("credits-overlay").style.display = "flex";
}

function disableCreditsOverlay() {
    document.getElementById("credits-overlay").style.display = "none";
}

function getCurrentImageIndex(value) {
    if (value < maxValue) {
        return `${value}`;
    }
    return value;
}
function animate() {
    if (!animating) {
        return;
    }
    requestAnimationFrame(() => {
        setTimeout(() => {
            animate();
        }, 200)
    });
    const croissant = document.getElementById('polaris-croissant-icon');
    croissant.src = `./images/polaris-croissant-${getCurrentImageIndex(currentImageIndex)}.svg`;
    const cookies = document.getElementById('polaris-cookies-icon');
    cookies.src = `./images/polaris-cookies-${getCurrentImageIndex(currentImageIndex)}.svg`;
    const coffee = document.getElementById('polaris-coffee-icon');
    coffee.src = `./images/polaris-coffee-${getCurrentImageIndex(currentImageIndex)}.svg`;
    if (currentImageIndex < maxValue) {
        currentImageIndex++;
    }
    else {
        currentImageIndex = 1;
    }
}

function checkScreenSize(screenSizeThreshold) {
    if (window.innerWidth > screenSizeThreshold && !animating) {
        animating = true;
        animate();
    } else if (window.innerWidth <= screenSizeThreshold && animating) {
        animating = false;
    }
}
const screenSizeThreshold = 768;
checkScreenSize(screenSizeThreshold)


let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
    checkScreenSize(screenSizeThreshold);
});

const navCheck = document.getElementById("nav-check");
const navLinks = document.querySelector(".nav-links-parent");
const navbar = document.querySelector(".navbar");
function handleNavChange() {
    if (navCheck.checked) {
        navLinks.style.opacity = "1";
        navLinks.style.top = "0";
        navbar.style.backgroundColor = "#100728"
    } else {
        navLinks.style.opacity = "0";
        navLinks.style.top = "-40rem";
        navbar.style.backgroundColor = "rgba(16, 7, 40, 0.85)";
    }
}

navCheck.checked = false;
navCheck.addEventListener("change", handleNavChange);