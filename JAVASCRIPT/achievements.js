/* =========================================================
   VIDUTHALAI — ACHIEVEMENTS
   PREMIUM CINEMATIC ARCHIVE
   VANILLA JAVASCRIPT
   NO GSAP
========================================================= */

"use strict";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const pageLoader =
        document.getElementById("pageLoader");

    const navbar =
        document.getElementById("navbar");

    const mobileMenuButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const achievementGrid =
        document.getElementById("achievementGrid");

    const emptyState =
        document.getElementById("emptyState");

    const visibleCount =
        document.getElementById("visibleCount");

    const footerYear =
        document.getElementById("footerYear");

    const cursorDot =
        document.getElementById("cursorDot");

    const cursorRing =
        document.getElementById("cursorRing");



    /* =====================================================
       ACHIEVEMENT DATA
    ===================================================== */

    const achievements = [

        {
            id: "republic-1950",
            year: "1950",
            category: "nation-building",
            categoryLabel: "NATION BUILDING",
            title: "Republic of India",
            image: "../images//achievements/republic-1950.avif",
            description:
                "India became a sovereign democratic republic and adopted its Constitution on 26 January 1950."
        },

        {
            id: "green-revolution",
            year: "1960s",
            category: "agriculture",
            categoryLabel: "AGRICULTURE",
            title: "The Green Revolution",
            image: "../images//achievements/green-revolution.jpg",
            description:
                "Scientific farming, improved seeds and modern agricultural methods transformed India's food production."
        },

        {
            id: "white-revolution",
            year: "1970s",
            category: "dairy-development",
            categoryLabel: "DAIRY DEVELOPMENT",
            title: "The White Revolution",
            image: "../images//achievements/white-revolution.jpeg",
            description:
                "Operation Flood helped transform India into one of the world's leading milk-producing nations."
        },

        {
            id: "pokhran-1974",
            year: "1974",
            category: "nuclear-science",
            categoryLabel: "NUCLEAR SCIENCE",
            title: "Pokhran-I",
            image: "../images//achievements/pokhran-1974.jpg",
            description:
                "India demonstrated its growing capabilities in nuclear science with its first nuclear test at Pokhran."
        },

        {
            id: "aryabhata",
            year: "1975",
            category: "space-science",
            categoryLabel: "SPACE SCIENCE",
            title: "Aryabhata",
            image: "../images//achievements/aryabhata.jpeg",
            description:
                "India launched Aryabhata, its first satellite, marking a major milestone in the country's space journey."
        },

        {
            id: "insat",
            year: "1983",
            category: "space-communication",
            categoryLabel: "SPACE & COMMUNICATION",
            title: "INSAT",
            image: "../images//achievements/insat.webp",
            description:
                "The INSAT system strengthened communication, broadcasting, meteorology and satellite services across India."
        },

        {
            id: "pokhran-1998",
            year: "1998",
            category: "strategic-science",
            categoryLabel: "STRATEGIC SCIENCE",
            title: "Pokhran-II",
            image: "../images//achievements/pokhran-1998.jpg",
            description:
                "A series of nuclear tests at Pokhran demonstrated India's advanced strategic and scientific capabilities."
        },

        {
            id: "it-revolution",
            year: "1990s",
            category: "technology",
            categoryLabel: "TECHNOLOGY",
            title: "India's IT Revolution",
            image: "../images//achievements/it-revolution.avif",
            description:
                "The growth of India's information technology sector connected the country to the global digital economy."
        },

        {
            id: "chandrayaan-1",
            year: "2008",
            category: "lunar-exploration",
            categoryLabel: "LUNAR EXPLORATION",
            title: "Chandrayaan-1",
            image: "../images//achievements/chandrayaan-1.jpeg",
            description:
                "India's first lunar mission expanded scientific understanding of the Moon and helped identify evidence of water molecules."
        },

        {
            id: "mars-orbiter",
            year: "2013",
            category: "planetary-exploration",
            categoryLabel: "PLANETARY EXPLORATION",
            title: "Mars Orbiter Mission",
            image: "../images//achievements/mars-orbitter.jpeg",
            description:
                "India successfully entered Mars orbit with the Mars Orbiter Mission, demonstrating remarkable deep-space capability."
        },

        {
            id: "chandrayaan-3",
            year: "2023",
            category: "lunar-exploration",
            categoryLabel: "LUNAR EXPLORATION",
            title: "Chandrayaan-3",
            image: "../images//achievements/chandrayaan-3.jpeg",
            description:
                "Chandrayaan-3 achieved a historic soft landing on the Moon, demonstrating India's precision landing capabilities."
        },

        {
            id: "aditya-l1",
            year: "2023",
            category: "solar-science",
            categoryLabel: "SOLAR SCIENCE",
            title: "Aditya-L1",
            image: "../images//achievements/aditya-l1.jpeg",
            description:
                "India's first dedicated solar mission began studying the Sun and its influence on space weather."
        }

    ];



    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    if (footerYear) {
        footerYear.textContent =
            new Date().getFullYear();
    }



    /* =====================================================
       PAGE LOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (pageLoader) {
                pageLoader.classList.add("loaded");
            }

        }, 550);

    });



    /* =====================================================
       AUTH
    ===================================================== */

    const authLoggedOut =
        document.getElementById("authLoggedOut");

    const authLoggedIn =
        document.getElementById("authLoggedIn");

    const navbarUsername =
        document.getElementById("navbarUsername");

    const mobileAuthLoggedOut =
        document.getElementById("mobileAuthLoggedOut");

    const mobileAuthLoggedIn =
        document.getElementById("mobileAuthLoggedIn");

    const mobileNavbarUsername =
        document.getElementById("mobileNavbarUsername");

    const logoutButton =
        document.getElementById("logoutButton");

    const mobileLogoutButton =
        document.getElementById("mobileLogoutButton");


    function updateAuthUI() {

        const loggedIn =
            localStorage.getItem("viduthalaiLoggedIn") === "true";

        const username =
            localStorage.getItem("viduthalaiCurrentUser") ||
            localStorage.getItem("viduthalaiUsername") ||
            "USER";


        if (loggedIn) {

            if (authLoggedOut) {
                authLoggedOut.style.display = "none";
            }

            if (authLoggedIn) {
                authLoggedIn.style.display = "flex";
            }

            if (navbarUsername) {
                navbarUsername.textContent =
                    username;
            }

            if (mobileAuthLoggedOut) {
                mobileAuthLoggedOut.style.display =
                    "none";
            }

            if (mobileAuthLoggedIn) {
                mobileAuthLoggedIn.style.display =
                    "flex";
            }

            if (mobileNavbarUsername) {
                mobileNavbarUsername.textContent =
                    username;
            }

        } else {

            if (authLoggedOut) {
                authLoggedOut.style.display = "flex";
            }

            if (authLoggedIn) {
                authLoggedIn.style.display = "none";
            }

            if (mobileAuthLoggedOut) {
                mobileAuthLoggedOut.style.display =
                    "flex";
            }

            if (mobileAuthLoggedIn) {
                mobileAuthLoggedIn.style.display =
                    "none";
            }

        }

    }


    updateAuthUI();



    function logout() {

        localStorage.removeItem(
            "viduthalaiLoggedIn"
        );

        localStorage.removeItem(
            "viduthalaiCurrentUser"
        );

        localStorage.removeItem(
            "viduthalaiUsername"
        );

        updateAuthUI();

        window.location.reload();

    }


    if (logoutButton) {
        logoutButton.addEventListener(
            "click",
            logout
        );
    }


    if (mobileLogoutButton) {
        mobileLogoutButton.addEventListener(
            "click",
            logout
        );
    }



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function toggleMobileMenu() {

        if (!mobileMenuButton || !mobileMenu) {
            return;
        }

        const open =
            mobileMenu.classList.toggle("open");

        mobileMenuButton.classList.toggle(
            "open",
            open
        );

        document.body.classList.toggle(
            "menu-open",
            open
        );

    }


    if (mobileMenuButton) {

        mobileMenuButton.addEventListener(
            "click",
            toggleMobileMenu
        );

    }


    document
        .querySelectorAll(".mobile-nav-link")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );

                    mobileMenuButton.classList.remove(
                        "open"
                    );

                    document.body.classList.remove(
                        "menu-open"
                    );

                }
            );

        });



    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    let lastScrollY = window.scrollY;

    window.addEventListener(
        "scroll",
        () => {

            const currentY =
                window.scrollY;


            if (navbar) {

                if (currentY > 30) {
                    navbar.classList.add(
                        "scrolled"
                    );
                } else {
                    navbar.classList.remove(
                        "scrolled"
                    );
                }


                if (
                    currentY > lastScrollY &&
                    currentY > 180
                ) {

                    navbar.classList.add(
                        "nav-hidden"
                    );

                } else {

                    navbar.classList.remove(
                        "nav-hidden"
                    );

                }

            }


            lastScrollY = currentY;

        },
        {
            passive: true
        }
    );



    /* =====================================================
       CREATE CARD
    ===================================================== */

    function createAchievementCard(
        achievement,
        index
    ) {

        const card =
            document.createElement("article");

        card.className =
            "achievement-card";

        card.dataset.category =
            achievement.category;

        card.dataset.id =
            achievement.id;


        const number =
            String(index + 1)
                .padStart(2, "0");


        card.innerHTML = `

            <div class="achievement-card-image">

                <img
                    src="${achievement.image}"
                    alt="${achievement.title}"
                    loading="lazy"
                >

                <div class="card-image-overlay"></div>

                <div class="achievement-year">
                    ${achievement.year}
                </div>

                <div class="achievement-number">
                    ${number}
                </div>

            </div>


            <div class="achievement-card-body">

                <div class="achievement-category">
                    ${achievement.categoryLabel}
                </div>

                <h3 class="achievement-title">
                    ${achievement.title}
                </h3>

                <p class="achievement-excerpt">
                    ${achievement.description}
                </p>


                <div class="achievement-card-footer">

                    <a
                        href="indian_achievements.html?achievement=${encodeURIComponent(achievement.id)}"
                        class="achievement-explore"
                    >

                        EXPLORE MILESTONE

                        <i class="bi bi-arrow-right"></i>

                    </a>

                    <span class="achievement-index">
                        ${number} / 12
                    </span>

                </div>

            </div>

        `;


        return card;

    }



    /* =====================================================
       REVEAL OBSERVER
    ===================================================== */

    let revealObserver;


    function setupRevealObserver() {

        if (
            !("IntersectionObserver" in window)
        ) {

            document
                .querySelectorAll(".achievement-card")
                .forEach(card => {

                    card.classList.add(
                        "revealed"
                    );

                });

            return;

        }


        revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: .12
                }
            );


        document
            .querySelectorAll(".achievement-card")
            .forEach(card => {

                revealObserver.observe(
                    card
                );

            });

    }



    /* =====================================================
       RENDER
    ===================================================== */

    function renderAchievements(
        filter = "all"
    ) {

        if (!achievementGrid) {
            return;
        }


        achievementGrid.innerHTML = "";


        const filtered =
            filter === "all"
                ? achievements
                : achievements.filter(
                    achievement =>
                        achievement.category === filter
                );


        if (visibleCount) {

            visibleCount.textContent =
                filtered.length;

        }


        if (
            filtered.length === 0
        ) {

            achievementGrid.style.display =
                "none";

            if (emptyState) {
                emptyState.hidden = false;
            }

            return;

        }


        achievementGrid.style.display =
            "grid";

        if (emptyState) {
            emptyState.hidden = true;
        }


        filtered.forEach(
            (achievement, index) => {

                const card =
                    createAchievementCard(
                        achievement,
                        achievements.indexOf(
                            achievement
                        )
                    );

                achievementGrid.appendChild(
                    card
                );

            }
        );


        setupRevealObserver();

        setupCardInteractions();

    }



    /* =====================================================
       FILTERS
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(
            ".filter-button"
        );


    function activateFilter(
        filter
    ) {

        filterButtons.forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.dataset.filter === filter
                );

            }
        );


        renderAchievements(
            filter
        );


        if (
            history.replaceState
        ) {

            history.replaceState(
                null,
                "",
                filter === "all"
                    ? window.location.pathname
                    : `${window.location.pathname}#${filter}`
            );

        }

    }


    filterButtons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    activateFilter(
                        button.dataset.filter
                    );

                }
            );

        }
    );



    /* =====================================================
       RESTORE FILTER FROM HASH
    ===================================================== */

    function restoreHashFilter() {

        const hash =
            window.location.hash
                .replace("#", "")
                .trim();


        const valid =
            Array.from(
                filterButtons
            ).some(
                button =>
                    button.dataset.filter === hash
            );


        if (valid) {

            activateFilter(hash);

        } else {

            renderAchievements("all");

        }

    }


    restoreHashFilter();



    /* =====================================================
       CARD INTERACTIONS
    ===================================================== */

    function setupCardInteractions() {

        const cards =
            document.querySelectorAll(
                ".achievement-card"
            );


        cards.forEach(card => {


            card.addEventListener(
                "mousemove",
                event => {

                    if (
                        window.innerWidth < 900
                    ) {
                        return;
                    }


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateX =
                        ((y / rect.height) - .5) * -3;


                    const rotateY =
                        ((x / rect.width) - .5) * 3;


                    card.style.transform =
                        `translateY(-5px) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    if (
                        card.classList.contains(
                            "revealed"
                        )
                    ) {

                        card.style.transform =
                            "";

                    }

                }
            );

        });

    }



    /* =====================================================
       MAGNETIC LINKS
    ===================================================== */

    const magneticElements =
        document.querySelectorAll(
            ".signup-button, .hero-scroll, .back-top, .achievement-explore"
        );


    magneticElements.forEach(element => {

        element.addEventListener(
            "mousemove",
            event => {

                if (
                    window.innerWidth < 900
                ) {
                    return;
                }


                const rect =
                    element.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                element.style.transform =
                    `translate(${x * .08}px, ${y * .08}px)`;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                element.style.transform =
                    "";

            }
        );

    });



    /* =====================================================
       CUSTOM CURSOR
    ===================================================== */

    if (
        cursorDot &&
        cursorRing &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
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
                (mouseX - ringX) * .14;

            ringY +=
                (mouseY - ringY) * .14;


            cursorRing.style.left =
                `${ringX}px`;

            cursorRing.style.top =
                `${ringY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        document
            .querySelectorAll(
                "a, button, .achievement-card"
            )
            .forEach(element => {

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

            });

    }



    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    const heroImage =
        document.getElementById(
            "heroImage"
        );


    if (heroImage) {

        let ticking = false;


        window.addEventListener(
            "scroll",
            () => {

                if (ticking) {
                    return;
                }

                ticking = true;


                requestAnimationFrame(
                    () => {

                        const scroll =
                            window.scrollY;


                        if (
                            scroll <
                            window.innerHeight
                        ) {

                            heroImage.style.transform =
                                `scale(1.04) translateY(${scroll * .035}px)`;

                        }


                        ticking = false;

                    }
                );

            },
            {
                passive: true
            }
        );

    }



    /* =====================================================
       SMOOTH ANCHORS
    ===================================================== */

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
                        !targetId ||
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


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        });



    /* =====================================================
       KEYBOARD ACCESS
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                mobileMenu &&
                mobileMenu.classList.contains(
                    "open"
                )
            ) {

                mobileMenu.classList.remove(
                    "open"
                );

                mobileMenuButton.classList.remove(
                    "open"
                );

                document.body.classList.remove(
                    "menu-open"
                );

            }

        }
    );



    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (reducedMotion) {

        document
            .querySelectorAll(
                ".achievement-card"
            )
            .forEach(card => {

                card.style.transition =
                    "none";

            });

    }



    /* =====================================================
       FINAL INITIALIZATION
    ===================================================== */

    updateAuthUI();

});