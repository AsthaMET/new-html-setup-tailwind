window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY >= 50) {
    nav.classList.add("active_nav");
  } else {
    nav.classList.remove("active_nav");
  }
});
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    const showItem = (index) => {
        items[currentItem].classList.remove('opacity-100');
        items[currentItem].classList.add('opacity-0');
        items[currentItem].setAttribute('aria-hidden', 'true');
        
        currentItem = (index + items.length) % items.length;
        
        items[currentItem].classList.remove('opacity-0');
        items[currentItem].classList.add('opacity-100');
        items[currentItem].removeAttribute('aria-hidden');
    };

    document.querySelector('.prev').addEventListener('click', () => {
        showItem(currentItem - 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        showItem(currentItem + 1);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            showItem(currentItem - 1);
        } else if (e.key === 'ArrowRight') {
            showItem(currentItem + 1);
        }
    });

    items[currentItem].classList.add('opacity-100');
    items[currentItem].classList.remove('opacity-0');
    items[currentItem].removeAttribute('aria-hidden');
});
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const clipAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#clip",
            start: "top center",
            end: "+=500 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
        },
    });

    clipAnimation.to(".mask-clip-path", {
        clipPath: "inset(0 0 0 0)",
        ease: "power2.out"
    });
});
