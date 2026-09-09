/* =========================================================
   VIDUTHALAI
   HEROES ENGINE
   VANILLA JS
   NO GSAP
   ---------------------------------------------------------
   • 12 Heroes
   • Show All Heroes
   • Hero Detail Experience
   • URL based hero opening
   • Browser Back / Forward
   • Global Authentication
   • Username Display
   • Logout
   • Mobile Menu
   • Navbar Hide / Show
   • Scroll Reveal
   • Custom Cursor
   • Card Tilt
   • Parallax
   • Reduced Motion
========================================================= */

"use strict";


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       HERO DATA
    ====================================================== */

    const heroes = {

        gandhi: {

            number: "01",

            name: "Mahatma Gandhi",

            years: "1869 — 1948",

            born:
                "02 OCTOBER 1869 · PORBANDAR, GUJARAT",

            known:
                "NON-VIOLENT RESISTANCE",

            legacy:
                "SATYAGRAHA",

            role:
                "Leader of India's mass non-violent independence movement.",

            description:
                "Mohandas Karamchand Gandhi became one of the most influential leaders of India's struggle for independence. He led major movements including Non-Cooperation, Civil Disobedience and Quit India. The Salt March to Dandi became one of the defining moments of India's freedom struggle.",

            image:
                "../images//gandhiji.jpeg"

        },


        bhagat: {

            number: "02",

            name: "Bhagat Singh",

            years: "1907 — 1931",

            born:
                "28 SEPTEMBER 1907 · BANGA, PUNJAB",

            known:
                "REVOLUTIONARY RESISTANCE",

            legacy:
                "COURAGE & SACRIFICE",

            role:
                "Revolutionary whose ideas and sacrifice became symbols of resistance.",

            description:
                "Bhagat Singh became one of the most remembered revolutionary figures of India's freedom struggle. His political writings, fearless actions and willingness to sacrifice his life made him an enduring symbol of resistance to British colonial rule. He was executed by the British in 1931 at the age of 23.",

            image:
                "../images//bhagatsingh.jpeg"

        },


        bose: {

            number: "03",

            name: "Subhas Chandra Bose",

            years: "1897 — 1945",

            born:
                "23 JANUARY 1897 · CUTTACK, ODISHA",

            known:
                "INDIAN NATIONAL ARMY",

            legacy:
                "AZAD HIND",

            role:
                "Nationalist leader associated with the Indian National Army and Azad Hind movement.",

            description:
                "Subhas Chandra Bose was a prominent nationalist leader who pursued an armed struggle against British rule. He became closely associated with the Indian National Army and the Azad Hind movement, leaving a powerful legacy in India's freedom story.",

            image:
                "../images//subashchandrabose.jpg"

        },


        rani: {

            number: "04",

            name: "Rani Lakshmibai",

            years: "1828 — 1858",

            born:
                "19 NOVEMBER 1828 · VARANASI",

            known:
                "REVOLT OF 1857",

            legacy:
                "QUEEN OF JHANSI",

            role:
                "Queen of Jhansi who led armed resistance during the 1857 revolt.",

            description:
                "Rani Lakshmibai became one of the most celebrated figures of the 1857 uprising against the British East India Company. As the Queen of Jhansi, she led her forces in armed resistance and died fighting on the battlefield in 1858.",

            image:
                "../images//rani-lakshmi-bai-1.jpeg"

        },


        nehru: {

            number: "05",

            name: "Jawaharlal Nehru",

            years: "1889 — 1964",

            born:
                "14 NOVEMBER 1889 · ALLAHABAD",

            known:
                "INDIAN NATIONAL CONGRESS",

            legacy:
                "FIRST PRIME MINISTER",

            role:
                "Key Congress leader who became independent India's first Prime Minister.",

            description:
                "Jawaharlal Nehru was one of the central leaders of India's independence movement. He participated in major campaigns against British rule and was imprisoned numerous times. After independence, he became India's first Prime Minister.",

            image:
                "../images//jawaharlal-nehru.jpeg"

        },


        patel: {

            number: "06",

            name: "Sardar Vallabhbhai Patel",

            years: "1875 — 1950",

            born:
                "31 OCTOBER 1875 · NADIAD, GUJARAT",

            known:
                "BARDOLI SATYAGRAHA",

            legacy:
                "IRON MAN OF INDIA",

            role:
                "Nationalist leader known for Bardoli Satyagraha and India's political integration.",

            description:
                "Sardar Vallabhbhai Patel played an important role in India's freedom movement and became a prominent leader of the Indian National Congress. His leadership during the Bardoli Satyagraha earned him widespread recognition. After independence, he played a major role in integrating India's princely states.",

            image:
                "../images//sardar-vallabhbhai-patel.jpeg"

        },


        azad: {

            number: "07",

            name: "Chandrashekhar Azad",

            years: "1906 — 1931",

            born:
                "23 JULY 1906 · BHABHRA, MADHYA PRADESH",

            known:
                "REVOLUTIONARY MOVEMENT",

            legacy:
                "AZAD — NEVER CAPTURED",

            role:
                "Revolutionary leader who became a major figure in the Hindustan Socialist Republican Association.",

            description:
                "Chandrashekhar Azad was a prominent revolutionary who dedicated himself to India's struggle against British rule. He vowed that he would never be captured alive. Surrounded by British police at Alfred Park in Allahabad in 1931, he died rather than surrender.",

            image:
                "../images//chandra-shekar-azad.jpeg"

        },


        sarojini: {

            number: "08",

            name: "Sarojini Naidu",

            years: "1879 — 1949",

            born:
                "13 FEBRUARY 1879 · HYDERABAD",

            known:
                "SALT SATYAGRAHA",

            legacy:
                "NIGHTINGALE OF INDIA",

            role:
                "Poet, political leader and freedom fighter who played a major role in the national movement.",

            description:
                "Sarojini Naidu combined poetry, public leadership and political activism in India's freedom struggle. She participated in the Salt Satyagraha and continued the movement after Gandhi's arrest. She also became the first Indian woman president of the Indian National Congress.",

            image:
                "../images//sarojini-naidu.jpeg"

        },


        shastri: {

            number: "09",

            name: "Lal Bahadur Shastri",

            years: "1904 — 1966",

            born:
                "02 OCTOBER 1904 · MUGHALSARAI, UTTAR PRADESH",

            known:
                "QUIT INDIA MOVEMENT",

            legacy:
                "JAI JAWAN JAI KISAN",

            role:
                "Freedom fighter who later became India's second Prime Minister.",

            description:
                "Lal Bahadur Shastri participated in India's freedom movement, including the Non-Cooperation and Quit India movements. He was imprisoned multiple times during the struggle. After independence, he rose to become India's second Prime Minister.",

            image:
                "../images//lal-bahadur-shastri.jpeg"

        },


        tilak: {

            number: "10",

            name: "Bal Gangadhar Tilak",

            years: "1856 — 1920",

            born:
                "23 JULY 1856 · RATNAGIRI, MAHARASHTRA",

            known:
                "SWARAJ MOVEMENT",

            legacy:
                "SWARAJ IS MY BIRTHRIGHT",

            role:
                "Early nationalist leader who demanded self-rule and inspired mass political resistance.",

            description:
                "Bal Gangadhar Tilak was one of the earliest leaders to transform Indian nationalism into a mass political movement. His famous call for Swaraj inspired generations of Indians. The British imprisoned him in Mandalay, Burma, where he spent six years.",

            image:
                "../images//bal-gangadhar-tilak.jpeg"

        },


        khudiram: {

            number: "11",

            name: "Khudiram Bose",

            years: "1889 — 1908",

            born:
                "03 DECEMBER 1889 · MIDNAPORE, BENGAL",

            known:
                "REVOLUTIONARY RESISTANCE",

            legacy:
                "YOUNG MARTYR",

            role:
                "Young revolutionary who became one of the youngest martyrs of India's freedom struggle.",

            description:
                "Khudiram Bose joined the revolutionary movement at a very young age. He was arrested following an attempt to attack a British judge and was executed by the British in 1908 at the age of 18. His youth and courage made him an enduring symbol of revolutionary sacrifice.",

            image:
                "../images//khudiram-bose.jpeg"

        },


        voc: {

            number: "12",

            name: "V.O. Chidambaram Pillai",

            years: "1872 — 1936",

            born:
                "05 SEPTEMBER 1872 · OTTAPIDARAM, TAMIL NADU",

            known:
                "SWADESHI MOVEMENT",

            legacy:
                "KAPPALOTTIYA TAMIZHAN",

            role:
                "Tamil nationalist who challenged British economic control through the Swadeshi Steam Navigation Company.",

            description:
                "V.O. Chidambaram Pillai was a lawyer, nationalist and entrepreneur who challenged the British shipping monopoly by founding the Swadeshi Steam Navigation Company. He was sentenced to imprisonment and subjected to hard labour, becoming an important symbol of Tamil resistance during the freedom struggle.",

            image:
                "../images//vo-chidambaram-pillai.jpeg"

        }

    };


    /* =====================================================
       DOM ELEMENTS
    ====================================================== */

    const loader =
        document.querySelector(".page-loader");

    const navbar =
        document.querySelector(".viduthalai-navbar");

    const menuButton =
        document.getElementById("mobileMenuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const heroDirectory =
        document.getElementById("heroDirectory");

    const heroesIntro =
        document.getElementById("heroesIntro");

    const heroesList =
        document.querySelector(".heroes-list");

    const heroDetail =
        document.getElementById("heroDetail");

    const detailBack =
        document.getElementById("detailBack");

    const detailBackground =
        document.getElementById("detailBackground");

    const detailNumber =
        document.getElementById("detailNumber");

    const detailYears =
        document.getElementById("detailYears");

    const detailName =
        document.getElementById("detailName");

    const detailRole =
        document.getElementById("detailRole");

    const detailDescription =
        document.getElementById("detailDescription");

    const detailBorn =
        document.getElementById("detailBorn");

    const detailKnown =
        document.getElementById("detailKnown");

    const detailLegacy =
        document.getElementById("detailLegacy");

    const detailSideYear =
        document.getElementById("detailSideYear");

    const detailSideYearEnd =
        document.getElementById("detailSideYearEnd");

    const detailAction =
        document.getElementById("detailAction");

    const currentYear =
        document.getElementById("currentYear");


    /* =====================================================
       GLOBAL AUTHENTICATION
    ====================================================== */

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


    /* =====================================================
       UPDATE AUTH NAVBAR
    ====================================================== */

    function updateAuthUI() {

        const loggedIn =
            localStorage.getItem("viduthalaiLoggedIn") === "true";


        const username =
            localStorage.getItem("viduthalaiCurrentUser") ||
            localStorage.getItem("viduthalaiUsername") ||
            "User";


        if (loggedIn) {

            if (authLoggedOut) {

                authLoggedOut.style.display =
                    "none";

            }


            if (authLoggedIn) {

                authLoggedIn.style.display =
                    "flex";

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

                authLoggedOut.style.display =
                    "flex";

            }


            if (authLoggedIn) {

                authLoggedIn.style.display =
                    "none";

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


    /* =====================================================
       LOGOUT
    ====================================================== */

    const logoutButton =
        document.getElementById("logoutButton");

    const mobileLogoutButton =
        document.getElementById("mobileLogoutButton");


    function logoutUser() {

        localStorage.removeItem(
            "viduthalaiLoggedIn"
        );

        localStorage.removeItem(
            "viduthalaiCurrentUser"
        );

        localStorage.removeItem(
            "viduthalaiUsername"
        );


        if (mobileMenu) {

            mobileMenu.classList.remove(
                "open"
            );

        }


        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }


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
       KEEP AUTH STATE UPDATED
    ====================================================== */

    window.addEventListener(
        "storage",
        event => {

            if (
                event.key === "viduthalaiLoggedIn" ||
                event.key === "viduthalaiCurrentUser" ||
                event.key === "viduthalaiUsername"
            ) {

                updateAuthUI();

            }

        }
    );


    /* =====================================================
       SAFETY CHECK
    ====================================================== */

    if (
        !heroDirectory ||
        !heroesList ||
        !heroDetail
    ) {

        console.error(
            "VIDUTHALAI: Required Heroes elements are missing."
        );

        return;

    }


    /* =====================================================
       GENERATE HEROES 04 — 12
    ====================================================== */

    const heroKeys =
        Object.keys(heroes);


    heroKeys
        .slice(3)
        .forEach((heroKey, index) => {

            const hero =
                heroes[heroKey];


            const card =
                document.createElement("article");


            card.className =
                "hero-profile-card";


            card.dataset.hero =
                heroKey;


            if (index >= 3) {

                card.style.display =
                    "none";

            }


            card.innerHTML = `

                <button
                    class="hero-card-trigger"
                    type="button"
                    aria-label="View ${hero.name}"
                >

                    <div class="profile-image">

                        <img
                            src="${hero.image}"
                            alt="${hero.name}"
                            loading="lazy"
                        >

                        <div
                            class="profile-image-overlay"
                        ></div>

                        <span class="profile-number">
                            ${hero.number}
                        </span>

                        <span
                            class="profile-open"
                            aria-hidden="true"
                        >
                            ↗
                        </span>

                    </div>

                    <div class="profile-info">

                        <span>
                            ${hero.years}
                        </span>

                        <h3>
                            ${hero.name}
                        </h3>

                        <p>
                            ${hero.role}
                        </p>

                        <div class="profile-link">

                            <span>
                                EXPLORE HERO
                            </span>

                            <i>
                                →
                            </i>

                        </div>

                    </div>

                </button>

            `;


            heroesList.appendChild(
                card
            );

        });


    /* =====================================================
       SHOW ALL HEROES
    ====================================================== */

    const showAllButton =
        document.createElement("button");


    showAllButton.type =
        "button";


    showAllButton.className =
        "show-all-heroes";


    showAllButton.innerHTML = `
        <span>SHOW ALL HEROES</span>
        <i>↓</i>
    `;


    if (heroesList.parentElement) {

        heroesList.parentElement.appendChild(
            showAllButton
        );

    }


    showAllButton.addEventListener(
        "click",
        () => {

            const allCards =
                heroesList.querySelectorAll(
                    ".hero-profile-card"
                );


            allCards.forEach(
                card => {

                    card.style.display =
                        "";

                }
            );


            showAllButton.classList.add(
                "hidden"
            );

        }
    );


    /* =====================================================
       LOADER
    ====================================================== */

    document.body.classList.add(
        "no-scroll"
    );


    window.addEventListener(
        "load",
        () => {

            setTimeout(
                () => {

                    if (loader) {

                        loader.classList.add(
                            "loaded"
                        );

                    }


                    document.body.classList.remove(
                        "no-scroll"
                    );

                },
                1000
            );

        }
    );


    /* =====================================================
       CURRENT YEAR
    ====================================================== */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       NAVBAR
    ====================================================== */

    let lastScroll =
        window.scrollY;


    window.addEventListener(
        "scroll",
        () => {

            const currentScroll =
                window.scrollY;


            if (navbar) {

                if (currentScroll > 50) {

                    navbar.classList.add(
                        "scrolled"
                    );

                } else {

                    navbar.classList.remove(
                        "scrolled"
                    );

                }


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

    if (
        menuButton &&
        mobileMenu
    ) {

        menuButton.addEventListener(
            "click",
            () => {

                const isOpen =
                    mobileMenu.classList.toggle(
                        "open"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(
                link => {

                    link.addEventListener(
                        "click",
                        () => {

                            mobileMenu.classList.remove(
                                "open"
                            );


                            menuButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }
                    );

                }
            );

    }


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

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

                        }
                    );

                },
                {
                    threshold:
                        0.12,

                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
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
                (mouseX - ringX) * 0.13;


            ringY +=
                (mouseY - ringY) * 0.13;


            cursorRing.style.left =
                `${ringX}px`;


            cursorRing.style.top =
                `${ringY}px`;


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        function updateCursorTargets() {

            const hoverElements =
                document.querySelectorAll(
                    "a, button, .hero-card-trigger"
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


        updateCursorTargets();

    }


    /* =====================================================
       SHOW HERO DETAIL
    ====================================================== */

    function showHero(
        heroKey,
        updateUrl = true
    ) {

        const hero =
            heroes[heroKey];


        if (!hero) {

            console.warn(
                "Unknown hero:",
                heroKey
            );

            return;

        }


        /* ---------------------------------------------
           UPDATE DETAIL CONTENT
        --------------------------------------------- */

        if (detailBackground) {

            detailBackground.src =
                hero.image;

            detailBackground.alt =
                hero.name;

        }


        if (detailNumber) {

            detailNumber.textContent =
                hero.number;

        }


        if (detailYears) {

            detailYears.textContent =
                hero.years;

        }


        if (detailName) {

            detailName.textContent =
                hero.name;

        }


        if (detailRole) {

            detailRole.textContent =
                hero.role;

        }


        if (detailDescription) {

            detailDescription.textContent =
                hero.description;

        }


        if (detailBorn) {

            detailBorn.textContent =
                hero.born;

        }


        if (detailKnown) {

            detailKnown.textContent =
                hero.known;

        }


        if (detailLegacy) {

            detailLegacy.textContent =
                hero.legacy;

        }


        /* ---------------------------------------------
           SIDE YEAR
        --------------------------------------------- */

        const years =
            hero.years.split("—");


        if (detailSideYear) {

            detailSideYear.textContent =
                years[0].trim();

        }


        if (detailSideYearEnd) {

            detailSideYearEnd.textContent =
                years[1]
                    ? years[1].trim()
                    : "";

        }


        /* ---------------------------------------------
           HERO ACTION
        --------------------------------------------- */

        if (detailAction) {

            detailAction.removeAttribute(
                "href"
            );


            detailAction.textContent =
                "HERO ARCHIVE";


            detailAction.style.pointerEvents =
                "none";


            detailAction.style.cursor =
                "default";

        }


        /* ---------------------------------------------
           HIDE LANDING + DIRECTORY
        --------------------------------------------- */

        if (heroesIntro) {

            heroesIntro.hidden =
                true;

        }


        if (heroDirectory) {

            heroDirectory.hidden =
                true;

        }


        /* ---------------------------------------------
           ACTIVATE DETAIL
        --------------------------------------------- */

        heroDetail.classList.add(
            "active"
        );


        heroDetail.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "hero-detail-open"
        );


        /* ---------------------------------------------
           UPDATE URL
        --------------------------------------------- */

        if (updateUrl) {

            const url =
                new URL(
                    window.location.href
                );


            url.searchParams.set(
                "hero",
                heroKey
            );


            history.pushState(
                {
                    page: "heroes",
                    hero: heroKey
                },
                "",
                url
            );

        }


        /* ---------------------------------------------
           SCROLL TO DETAIL
        --------------------------------------------- */

        setTimeout(
            () => {

                heroDetail.scrollIntoView({
                    behavior:
                        "smooth",

                    block:
                        "start"

                });

            },
            50
        );


        /* ---------------------------------------------
           RESTART IMAGE ANIMATION
        --------------------------------------------- */

        if (detailBackground) {

            detailBackground.style.animation =
                "none";


            void detailBackground.offsetWidth;


            detailBackground.style.animation =
                "detailImageIn 1.4s ease forwards";

        }

    }


    /* =====================================================
       CLOSE HERO DETAIL
       SINGLE SOURCE OF TRUTH
    ====================================================== */

    function hideHero(
        updateUrl = true
    ) {

        /* ---------------------------------------------
           CLOSE DETAIL
        --------------------------------------------- */

        heroDetail.classList.remove(
            "active"
        );


        heroDetail.setAttribute(
            "aria-hidden",
            "true"
        );


        /* ---------------------------------------------
           SHOW LANDING + DIRECTORY
        --------------------------------------------- */

        if (heroesIntro) {

            heroesIntro.hidden =
                false;

        }


        if (heroDirectory) {

            heroDirectory.hidden =
                false;

        }


        /* ---------------------------------------------
           REMOVE BODY DETAIL STATE
        --------------------------------------------- */

        document.body.classList.remove(
            "hero-detail-open"
        );


        /* ---------------------------------------------
           CLOSE MOBILE MENU
        --------------------------------------------- */

        if (mobileMenu) {

            mobileMenu.classList.remove(
                "open"
            );

        }


        if (menuButton) {

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        /* ---------------------------------------------
           UPDATE URL
        --------------------------------------------- */

        if (updateUrl) {

            const url =
                new URL(
                    window.location.href
                );


            if (
                url.searchParams.has("hero")
            ) {

                url.searchParams.delete(
                    "hero"
                );


                history.replaceState(
                    {
                        page: "heroes"
                    },
                    "",
                    url
                );

            }

        }


        /* ---------------------------------------------
           SCROLL BACK TO DIRECTORY
        --------------------------------------------- */

        setTimeout(
            () => {

                if (heroDirectory) {

                    heroDirectory.scrollIntoView({
                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }

            },
            50
        );

    }


    /* =====================================================
       CARD CLICK
    ====================================================== */

    document.addEventListener(
        "click",
        event => {

            const trigger =
                event.target.closest(
                    ".hero-card-trigger"
                );


            if (!trigger) {

                return;

            }


            const card =
                trigger.closest(
                    ".hero-profile-card"
                );


            if (!card) {

                return;

            }


            const heroKey =
                card.dataset.hero;


            if (
                heroKey &&
                heroes[heroKey]
            ) {

                showHero(
                    heroKey,
                    true
                );

            }

        }
    );


    /* =====================================================
       BACK TO HEROES
       ONE AND ONLY ONE HANDLER
    ====================================================== */

    if (detailBack) {

        detailBack.addEventListener(
            "click",
            event => {

                /* -----------------------------------------
                   STOP LINK / BUTTON DEFAULT ACTION
                ----------------------------------------- */

                event.preventDefault();


                /* -----------------------------------------
                   CLOSE HERO DETAIL

                   IMPORTANT:
                   hideHero() handles EVERYTHING.
                ----------------------------------------- */

                hideHero(
                    true
                );

            }
        );

    }


    /* =====================================================
       BROWSER BACK / FORWARD
    ====================================================== */

    window.addEventListener(
        "popstate",
        () => {

            const params =
                new URLSearchParams(
                    window.location.search
                );


            const heroKey =
                params.get("hero");


            /* ---------------------------------------------
               URL CONTAINS A HERO
            --------------------------------------------- */

            if (
                heroKey &&
                heroes[heroKey]
            ) {

                showHero(
                    heroKey,
                    false
                );

            }


            /* ---------------------------------------------
               URL DOES NOT CONTAIN A HERO
            --------------------------------------------- */

            else {

                hideHero(
                    false
                );

            }

        }
    );


    /* =====================================================
       INITIAL HISTORY STATE
       Keeps Heroes page state clean.
    ====================================================== */

    if (
        !window.location.search
    ) {

        history.replaceState(
            {
                page: "heroes"
            },
            "",
            window.location.href
        );

    }


    /* =====================================================
       DIRECT HERO URL
       Example:

       heroes.html?hero=gandhi
    ====================================================== */

    const params =
        new URLSearchParams(
            window.location.search
        );


    const initialHero =
        params.get("hero");


    if (
        initialHero &&
        heroes[initialHero]
    ) {

        setTimeout(
            () => {

                showHero(
                    initialHero,
                    false
                );

            },
            500
        );

    }


    /* =====================================================
       IMAGE PRELOAD
    ====================================================== */

    Object.values(heroes)
        .forEach(
            hero => {

                const image =
                    new Image();


                image.src =
                    hero.image;

            }
        );


    /* =====================================================
       HERO INTRO PARALLAX
    ====================================================== */

    const introBackground =
        document.querySelector(
            ".heroes-intro-background img"
        );


    if (
        introBackground &&
        window.innerWidth > 900
    ) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;


                if (
                    scroll <=
                    window.innerHeight
                ) {

                    introBackground.style.transform =
                        `scale(1.02)
                         translateY(${scroll * 0.06}px)`;

                }

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       HERO CARD TILT
    ====================================================== */

    if (
        window.innerWidth > 900
    ) {

        const heroCards =
            document.querySelectorAll(
                ".hero-profile-card"
            );


        heroCards.forEach(
            card => {

                const trigger =
                    card.querySelector(
                        ".hero-card-trigger"
                    );


                if (!trigger) {

                    return;

                }


                trigger.addEventListener(
                    "mousemove",
                    event => {

                        const rect =
                            trigger.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const rotateY =
                            ((x / rect.width) - 0.5) * 3;


                        const rotateX =
                            ((y / rect.height) - 0.5) * -3;


                        trigger.style.transform =
                            `
                            perspective(1000px)
                            rotateX(${rotateX}deg)
                            rotateY(${rotateY}deg)
                            translateY(-8px)
                            `;

                    }
                );


                trigger.addEventListener(
                    "mouseleave",
                    () => {

                        trigger.style.transform =
                            "";

                    }
                );

            }
        );

    }


    /* =====================================================
       KEYBOARD ESC
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                heroDetail.classList.contains(
                    "active"
                )
            ) {

                hideHero(
                    true
                );

            }

        }
    );


    /* =====================================================
       REDUCED MOTION
    ====================================================== */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (
        reducedMotion.matches
    ) {

        document
            .querySelectorAll("*")
            .forEach(
                element => {

                    element.style.animationDuration =
                        "0.01ms";


                    element.style.animationIterationCount =
                        "1";


                    element.style.scrollBehavior =
                        "auto";

                }
            );

    }


    /* =====================================================
       CONSOLE
    ====================================================== */

    console.log(
        "%cVIDUTHALAI — HERO ARCHIVE",
        "font-size:20px;font-weight:bold;color:#d4a94f;"
    );


    console.log(
        "%c12 heroes loaded successfully.",
        "font-size:11px;color:#eee8dc;"
    );


    console.log(
        "%cGlobal authentication enabled.",
        "font-size:11px;color:#d4a94f;"
    );


});