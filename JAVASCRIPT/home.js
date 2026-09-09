/* =========================================================
   VIDUTHALAI
   CINEMATIC HOME ENGINE
   VANILLA JS
   NO GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

/* =====================================================
   AUTHENTICATION NAVBAR
====================================================== */

const isLoggedIn =
    localStorage.getItem("viduthalaiLoggedIn") === "true";


const navbarUsername =
    document.getElementById("navbarUsername");

const mobileNavbarUsername =
    document.getElementById("mobileNavbarUsername");


const authLoggedOut =
    document.getElementById("authLoggedOut");

const authLoggedIn =
    document.getElementById("authLoggedIn");


const mobileAuthLoggedOut =
    document.getElementById("mobileAuthLoggedOut");

const mobileAuthLoggedIn =
    document.getElementById("mobileAuthLoggedIn");


/* =====================================================
   GET USERNAME
====================================================== */

/*
    Your signup/login system should store the username
    using:

    localStorage.setItem(
        "viduthalaiUsername",
        username
    );
*/
const savedUsername =
    localStorage.getItem("viduthalaiCurrentUser");
    
/* =====================================================
   UPDATE NAVBAR
====================================================== */

if (isLoggedIn) {

    /* DESKTOP */

    if (authLoggedOut) {
        authLoggedOut.style.display = "none";
    }

    if (authLoggedIn) {
        authLoggedIn.style.display = "flex";
    }


    /* USERNAME */

    if (navbarUsername) {

        navbarUsername.textContent =
        savedUsername;

    }


    /* MOBILE */

    if (mobileAuthLoggedOut) {
        mobileAuthLoggedOut.style.display = "none";
    }

    if (mobileAuthLoggedIn) {
        mobileAuthLoggedIn.style.display = "flex";
    }


    if (mobileNavbarUsername) {

       mobileNavbarUsername.textContent =
       savedUsername;

    }

} else {

    /* DESKTOP */

    if (authLoggedOut) {
        authLoggedOut.style.display = "flex";
    }

    if (authLoggedIn) {
        authLoggedIn.style.display = "none";
    }


    /* MOBILE */

    if (mobileAuthLoggedOut) {
        mobileAuthLoggedOut.style.display = "flex";
    }

    if (mobileAuthLoggedIn) {
        mobileAuthLoggedIn.style.display = "none";
    }

}


/* =====================================================
   LOGOUT
====================================================== */

const logoutButton =
    document.getElementById("logoutButton");


const mobileLogoutButton =
    document.getElementById(
        "mobileLogoutButton"
    );


function logoutUser() {

    /*
        Remove authentication state.
    */

    localStorage.removeItem(
        "viduthalaiLoggedIn"
    );


    /*
        Remove stored username.
    */

    localStorage.removeItem(
        "viduthalaiUsername"
    );


    /*
        Return user to Home.
    */

    window.location.replace(
        "home.html"
    );

}


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        logoutUser
    );

}


if (mobileLogoutButton) {

    mobileLogoutButton.addEventListener(
        "click",
        logoutUser
    );

}



    /* =====================================================
       PAGE LOADER
    ====================================================== */

    const loader =
        document.querySelector(".page-loader");


    document.body.classList.add("no-scroll");


    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("loaded");

            document.body.classList.remove("no-scroll");

        }, 1200);

    });



    /* =====================================================
       CURRENT YEAR
    ====================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       NAVBAR
    ====================================================== */

    const navbar =
        document.querySelector(".viduthalai-navbar");


    let lastScroll =
        window.scrollY;


    window.addEventListener(
        "scroll",
        () => {

            const currentScroll =
                window.scrollY;


            if (currentScroll > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }


            /*
                Hide navbar while scrolling down.
                Show it again when scrolling up.
            */

            if (
                currentScroll > lastScroll &&
                currentScroll > 180
            ) {

                navbar.style.transform =
                    "translateY(-100%)";

            } else {

                navbar.style.transform =
                    "translateY(0)";

            }


            lastScroll =
                currentScroll;

        },
        {
            passive: true
        }
    );



    /* =====================================================
       MOBILE MENU
    ====================================================== */

    const menuButton =
        document.getElementById(
            "mobileMenuButton"
        );


    const mobileMenu =
        document.getElementById(
            "mobileMenu"
        );


    if (menuButton && mobileMenu) {

        menuButton.addEventListener(
            "click",
            () => {

                mobileMenu.classList.toggle(
                    "open"
                );

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "open"
                        );

                    }
                );

            });

    }



    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );



    /* =====================================================
       COUNTER ANIMATION
    ====================================================== */

    const counters =
        document.querySelectorAll(
            ".counter"
        );


    const counterObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const counter =
                        entry.target;


                    const target =
                        Number(
                            counter.dataset.target
                        );


                    let current = 0;

                    const duration = 1600;

                    const start =
                        performance.now();


                    function updateCounter(
                        timestamp
                    ) {

                        const progress =
                            Math.min(
                                (timestamp - start)
                                / duration,
                                1
                            );


                        const eased =
                            1 -
                            Math.pow(
                                1 - progress,
                                3
                            );


                        current =
                            Math.floor(
                                eased * target
                            );


                        counter.textContent =
                            current + "+";


                        if (
                            progress < 1
                        ) {

                            requestAnimationFrame(
                                updateCounter
                            );

                        } else {

                            counter.textContent =
                                target + "+";

                        }

                    }


                    requestAnimationFrame(
                        updateCounter
                    );


                    counterObserver.unobserve(
                        counter
                    );

                });

            },
            {
                threshold: .6
            }
        );


    counters.forEach(
        counter => {

            counterObserver.observe(
                counter
            );

        }
    );



    /* =====================================================
       HERO PARALLAX
    ====================================================== */

    const hero =
        document.querySelector(
            ".cinematic-hero"
        );


    const heroImage =
        document.querySelector(
            ".hero-background img"
        );


    const heroGlow =
        document.querySelector(
            ".hero-glow"
        );


    if (
        hero &&
        heroImage
    ) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;


                if (
                    scroll <= window.innerHeight
                ) {

                    heroImage.style.transform =
                        `scale(1.02)
                         translateY(${scroll * .08}px)`;


                    if (heroGlow) {

                        heroGlow.style.transform =
                            `translateY(${scroll * .04}px)`;

                    }

                }

            },
            {
                passive: true
            }
        );

    }



    /* =====================================================
       HERO MOUSE MOVEMENT
    ====================================================== */

    const heroArt =
        document.querySelector(
            ".hero-art"
        );


    if (
        heroArt &&
        window.innerWidth > 900
    ) {

        hero.addEventListener(
            "mousemove",
            event => {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width
                    - .5;


                const y =
                    (event.clientY - rect.top)
                    / rect.height
                    - .5;


                heroArt.style.transform =
                    `
                    translate(
                        ${x * 12}px,
                        ${y * 12}px
                    )
                    `;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroArt.style.transform =
                    "translate(0,0)";

            }
        );

    }



    /* =====================================================
       TIMELINE ACTIVE DOT
    ====================================================== */

    const timelineItems =
        document.querySelectorAll(
            ".timeline-item"
        );


    const timelineObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("timeline-active");

                    }

                });

            },
            {
                threshold: .5
            }
        );


    timelineItems.forEach(
        item => {

            timelineObserver.observe(
                item
            );

        }
    );



    /* =====================================================
       MAGNETIC BUTTONS
    ====================================================== */

    const magneticButtons =
        document.querySelectorAll(
            ".magnetic"
        );


    if (
        window.innerWidth > 900
    ) {

        magneticButtons.forEach(
            button => {

                button.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            button.getBoundingClientRect();


                        const x =
                            event.clientX
                            - rect.left
                            - rect.width / 2;


                        const y =
                            event.clientY
                            - rect.top
                            - rect.height / 2;


                        button.style.transform =
                            `
                            translate(
                                ${x * .12}px,
                                ${y * .12}px
                            )
                            `;

                    }
                );


                button.addEventListener(
                    "mouseleave",
                    () => {

                        button.style.transform =
                            "translate(0,0)";

                    }
                );

            }
        );

    }



    /* =====================================================
       CUSTOM CURSOR
    ====================================================== */

    const cursorDot =
        document.querySelector(
            ".cursor-dot"
        );


    const cursorRing =
        document.querySelector(
            ".cursor-ring"
        );


    if (
        cursorDot &&
        cursorRing &&
        window.innerWidth > 900
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;


                cursorDot.style.left =
                    `${mouseX}px`;

                cursorDot.style.top =
                    `${mouseY}px`;

            }
        );


        function animateCursor() {

            ringX +=
                (mouseX - ringX)
                * .13;


            ringY +=
                (mouseY - ringY)
                * .13;


            cursorRing.style.left =
                `${ringX}px`;


            cursorRing.style.top =
                `${ringY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        const hoverElements =
            document.querySelectorAll(
                "a, button, .hero-card, .timeline-card"
            );


        hoverElements.forEach(
            element => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        cursorRing.classList.add(
                            "hover"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        cursorRing.classList.remove(
                            "hover"
                        );

                    }
                );

            }
        );

    }



    /* =====================================================
       IMAGE LOAD EFFECT
    ====================================================== */

    const images/ =
        document.querySelectorAll(
            "img"
        );


    images/.forEach(
        image => {

            image.addEventListener(
                "load",
                () => {

                    image.classList.add(
                        "image-loaded"
                    );

                }
            );

        }
    );



    /* =====================================================
       SMOOTH ANCHOR SCROLL
    ====================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const navbarHeight =
                        navbar
                            ? navbar.offsetHeight
                            : 0;


                    const position =
                        target.offsetTop
                        - navbarHeight;


                    window.scrollTo({

                        top: position,

                        behavior: "smooth"

                    });

                }
            );

        });



    /* =====================================================
       TILT EFFECT ON HERO CARDS
    ====================================================== */

    const heroCards =
        document.querySelectorAll(
            ".hero-card"
        );


    if (
        window.innerWidth > 900
    ) {

        heroCards.forEach(
            card => {

                card.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX
                            - rect.left;


                        const y =
                            event.clientY
                            - rect.top;


                        const rotateY =
                            ((x / rect.width)
                            - .5) * 4;


                        const rotateX =
                            ((y / rect.height)
                            - .5) * -4;


                        card.style.transform =
                            `
                            perspective(1000px)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                            translateY(-8px)
                            `;

                    }
                );


                card.addEventListener(
                    "mouseleave",
                    () => {

                        card.style.transform =
                            "";

                    }
                );

            }
        );

    }



    /* =====================================================
       REDUCED MOTION
    ====================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (
        prefersReducedMotion.matches
    ) {

        document
            .querySelectorAll(
                "*"
            )
            .forEach(element => {

                element.style.animationDuration =
                    "0.01ms";

                element.style.animationIterationCount =
                    "1";

                element.style.scrollBehavior =
                    "auto";

            });

    }



    /* =====================================================
       CONSOLE
    ====================================================== */

    console.log(
        "%cVIDUTHALAI",
        "font-size:24px;font-weight:bold;color:#d4a94f;"
    );

    console.log(
        "%cIndia's story of freedom.",
        "font-size:12px;color:#eee8dc;"
    );

});