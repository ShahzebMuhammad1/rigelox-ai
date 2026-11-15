
// Mobile navigation toggle
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

const menuButton = document.createElement("button");
menuButton.textContent = "☰";
menuButton.classList.add("menu-toggle");
menuButton.setAttribute("aria-label", "Toggle navigation");

navbar.insertBefore(menuButton, navLinks);

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after selecting a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Reveal service cards as they enter the screen
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(card => {
    observer.observe(card);
});

/* ===== JAVASCRIPT INTERACTIONS ===== */

.menu-toggle {
    display: none;
    background: transparent;
    color: white;
    border: none;
    font-size: 28px;
    cursor: pointer;
}

.service-card {
    opacity: 0;
    transform: translateY(25px);
    transition: opacity 0.6s ease, transform 0.6s ease,
                border-color 0.3s ease, box-shadow 0.3s ease;
}

.service-card.visible {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width: 768px) {
    .menu-toggle {
        display: block;
    }

    .navbar {
        position: relative;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
        text-align: center;
        padding: 20px 0;
    }

    .nav-links.active {
        display: flex;
    }
}
