document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links with Crazy Animation
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
                
                // Crazy Flashing Effect on Target Section
                targetSection.style.animation = "flash 0.5s ease-in-out 3";
                setTimeout(() => targetSection.style.animation = "none", 1500);
            }
        });
    });

    // WhatsApp and Direct Call Clickable Feature with Animation
    const whatsappLink = document.querySelector("#contact a[href*='wa.me']");
    const phoneLink = document.querySelector("#contact a[href*='tel']");

    whatsappLink.addEventListener("click", function () {
        window.open(this.href, "_blank");
    });

    phoneLink.addEventListener("click", function () {
        window.location.href = this.href;
    });

    // Menu Hover Effect with Unique Transformations
    const menuCategories = document.querySelectorAll(".menu-category");
    
    menuCategories.forEach(category => {
        category.addEventListener("mouseenter", function () {
            this.style.transform = "rotate(5deg) scale(1.1)";
            this.style.transition = "transform 0.4s ease-in-out";
            this.style.boxShadow = "0px 0px 20px rgba(255, 0, 0, 0.5)";
        });

        category.addEventListener("mouseleave", function () {
            this.style.transform = "rotate(0deg) scale(1)";
            this.style.boxShadow = "none";
        });
    });

    // Floating Food Images Effect
    const floatingImages = document.querySelectorAll(".menu-category img");

    floatingImages.forEach(img => {
        img.style.position = "relative";
        let direction = 1;
        setInterval(() => {
            img.style.top = `${direction * 5}px`;
            direction *= -1;
        }, 700);
    });

    // Fun Logo Bounce Effect on Load
    const logo = document.querySelector(".logo img");
    if (logo) {
        logo.style.animation = "bounce 1s infinite alternate";
    }

    // CSS Animations (Injected into Page for Crazy Effects)
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes flash {
            0% { background-color: rgba(255, 255, 0, 0.3); }
            50% { background-color: rgba(255, 0, 0, 0.3); }
            100% { background-color: rgba(0, 255, 0, 0.3); }
        }
        @keyframes bounce {
            from { transform: translateY(0px); }
            to { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
});