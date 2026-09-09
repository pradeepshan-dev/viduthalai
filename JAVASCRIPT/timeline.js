/* =========================================================
   VIDUTHALAI — TIMELINE
   ---------------------------------------------------------
   NO GSAP
   NO SCROLLTRIGGER
   VANILLA JAVASCRIPT ONLY

   FEATURES
   • Cinematic page loader
   • Centered navbar behaviour
   • Mobile navigation
   • Scroll reveal
   • Timeline gold line
   • Image parallax
   • Image overlap
   • Active timeline marker
   • Filters
   • Story navigation
   • Authentication
========================================================= */

"use strict";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;


        initLoader();

        initNavbar();

        initMobileMenu();

        initHeroReveal(
            reducedMotion
        );

        initScrollReveal(
            reducedMotion
        );

        initTimelineLine(
            reducedMotion
        );

        initImageParallax(
            reducedMotion
        );

        initActiveEvents(
            reducedMotion
        );

        initFilters(
            reducedMotion
        );

        initStoryButtons();

        initImageHover();

        initHeroScroll();

        initAuth();

        initFooter();

    }
);


/* =========================================================
   PAGE LOADER
========================================================= */

function initLoader() {

    const loader =
        document.getElementById(
            "pageLoader"
        );

    if (!loader) return;


    document.body.classList.add(
        "no-scroll"
    );


    let finished = false;


    const finish = () => {

        if (finished) return;

        finished = true;


        setTimeout(
            () => {

                loader.classList.add(
                    "loaded"
                );

                document.body.classList.remove(
                    "no-scroll"
                );

                revealHero();

            },
            1700
        );

    };


    if (
        document.readyState ===
        "complete"
    ) {

        finish();

    } else {

        window.addEventListener(
            "load",
            finish,
            {
                once: true
            }
        );

    }


    /*
       Safety fallback.
       Even if an image/network request
       takes too long, the page will open.
    */

    setTimeout(
        () => {

            if (!finished) {

                loader.classList.add(
                    "loaded"
                );

                document.body.classList.remove(
                    "no-scroll"
                );

                revealHero();

                finished = true;

            }

        },
        4500
    );

}


/* =========================================================
   HERO REVEAL
========================================================= */

function revealHero() {

    const heroContent =
        document.querySelector(
            ".timeline-hero-content"
        );

    const gate =
        document.querySelector(
            ".timeline-gate"
        );

    const glow =
        document.querySelector(
            ".gate-glow"
        );


    if (heroContent) {

        requestAnimationFrame(
            () => {

                heroContent.classList.add(
                    "visible"
                );

            }
        );

    }


    if (gate) {

        setTimeout(
            () => {

                gate.classList.add(
                    "visible"
                );

            },
            180
        );

    }


    if (glow) {

        setTimeout(
            () => {

                glow.classList.add(
                    "visible"
                );

            },
            350
        );

    }

}


/* =========================================================
   HERO REVEAL — REDUCED MOTION
========================================================= */

function initHeroReveal(
    reducedMotion
) {

    if (!reducedMotion) return;

    const heroContent =
        document.querySelector(
            ".timeline-hero-content"
        );

    const gate =
        document.querySelector(
            ".timeline-gate"
        );

    const glow =
        document.querySelector(
            ".gate-glow"
        );


    heroContent?.classList.add(
        "visible"
    );

    gate?.classList.add(
        "visible"
    );

    glow?.classList.add(
        "visible"
    );

}


/* =========================================================
   NAVBAR
========================================================= */

function initNavbar() {

    const navbar =
        document.querySelector(
            ".viduthalai-navbar"
        );

    if (!navbar) return;


    let lastScroll =
        window.scrollY;


    let ticking =
        false;


    function update() {

        const currentScroll =
            window.scrollY;


        /*
           Glass state
        */

        if (
            currentScroll > 60
        ) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }


        /*
           Hide navbar when scrolling down.
           Never hide while mobile menu is open.
        */

        const mobileMenu =
            document.getElementById(
                "mobileMenu"
            );


        const menuOpen =
            mobileMenu?.classList.contains(
                "open"
            );


        if (
            !menuOpen &&
            currentScroll >
                lastScroll &&
            currentScroll >
                180
        ) {

            navbar.style.transform =
                "translateY(-110%)";

        } else {

            navbar.style.transform =
                "translateY(0)";

        }


        lastScroll =
            currentScroll;


        ticking =
            false;

    }


    function requestUpdate() {

        if (ticking) return;

        ticking = true;

        requestAnimationFrame(
            update
        );

    }


    window.addEventListener(
        "scroll",
        requestUpdate,
        {
            passive: true
        }
    );


    update();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

    const button =
        document.getElementById(
            "mobileMenuButton"
        );

    const menu =
        document.getElementById(
            "mobileMenu"
        );


    if (!button || !menu)
        return;


    button.addEventListener(
        "click",
        () => {

            const open =
                menu.classList.toggle(
                    "open"
                );

            button.classList.toggle(
                "open",
                open
            );

            button.setAttribute(
                "aria-expanded",
                String(open)
            );


            if (open) {

                document.body.classList.add(
                    "no-scroll"
                );

            } else {

                document.body.classList.remove(
                    "no-scroll"
                );

            }

        }
    );


    menu.querySelectorAll(
        "a"
    ).forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    menu.classList.remove(
                        "open"
                    );

                    button.classList.remove(
                        "open"
                    );

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    document.body.classList.remove(
                        "no-scroll"
                    );

                }
            );

        }
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function initScrollReveal(
    reducedMotion
) {

    const events =
        document.querySelectorAll(
            ".timeline-event"
        );


    if (!events.length)
        return;


    if (reducedMotion) {

        events.forEach(
            event => {

                event.classList.add(
                    "is-visible"
                );

            }
        );

        return;

    }


    if (
        !("IntersectionObserver"
            in window)
    ) {

        events.forEach(
            event => {

                event.classList.add(
                    "is-visible"
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) return;


                        entry.target.classList.add(
                            "is-visible"
                        );


                        observer.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: .12,

                rootMargin:
                    "0px 0px -60px 0px"
            }
        );


    events.forEach(
        event => {

            observer.observe(
                event
            );

        }
    );

}


/* =========================================================
   TIMELINE GOLD LINE
========================================================= */

function initTimelineLine(
    reducedMotion
) {

    const line =
        document.querySelector(
            ".timeline-line"
        );

    const wrapper =
        document.querySelector(
            ".timeline-wrapper"
        );


    if (!line || !wrapper)
        return;


    if (reducedMotion) {

        line.style.transform =
            "translateX(-50%) scaleY(1)";

        return;

    }


    let ticking = false;


    function updateLine() {

        const rect =
            wrapper.getBoundingClientRect();


        const viewport =
            window.innerHeight;


        const start =
            viewport * .70;


        const distance =
            rect.height +
            viewport * .35;


        const progress =
            Math.max(
                0,
                Math.min(
                    1,
                    (start - rect.top) /
                    distance
                )
            );


        line.style.transform =
            `translateX(-50%) scaleY(${progress})`;


        ticking = false;

    }


    function requestUpdate() {

        if (ticking)
            return;


        ticking = true;


        requestAnimationFrame(
            updateLine
        );

    }


    window.addEventListener(
        "scroll",
        requestUpdate,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        requestUpdate
    );


    updateLine();

}


/* =========================================================
   IMAGE PARALLAX + OVERLAP
========================================================= */

function initImageParallax(
    reducedMotion
) {

    const wrappers =
        document.querySelectorAll(
            ".timeline-image-wrap"
        );


    if (
        reducedMotion ||
        !wrappers.length
    ) {

        wrappers.forEach(
            wrapper => {

                wrapper.style.setProperty(
                    "--image-y",
                    "0px"
                );

            }
        );

        return;

    }


    /*
       Disable heavy parallax on small
       screens. The old image design
       remains untouched there.
    */

    if (
        window.innerWidth <= 991
    ) {

        wrappers.forEach(
            wrapper => {

                wrapper.style.setProperty(
                    "--image-y",
                    "0px"
                );

            }
        );

        return;

    }


    let ticking = false;


    function updateParallax() {

        const viewportHeight =
            window.innerHeight;


        wrappers.forEach(
            wrapper => {

                const rect =
                    wrapper.getBoundingClientRect();


                /*
                   Only calculate when image
                   is reasonably close to viewport.
                */

                if (
                    rect.bottom < -250 ||
                    rect.top >
                        viewportHeight + 250
                ) {

                    return;

                }


                const center =
                    rect.top +
                    rect.height / 2;


                const viewportCenter =
                    viewportHeight / 2;


                const distance =
                    center -
                    viewportCenter;


                /*
                   Small controlled movement.

                   Never moves enough to destroy
                   the original image composition.
                */

                let shift =
                    distance * -0.075;


                shift =
                    Math.max(
                        -34,
                        Math.min(
                            34,
                            shift
                        )
                    );


                wrapper.style.setProperty(
                    "--image-y",
                    `${shift}px`
                );

            }
        );


        ticking = false;

    }


    function requestUpdate() {

        if (ticking)
            return;


        ticking = true;


        requestAnimationFrame(
            updateParallax
        );

    }


    window.addEventListener(
        "scroll",
        requestUpdate,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        requestUpdate
    );


    updateParallax();

}


/* =========================================================
   ACTIVE EVENT
========================================================= */

function initActiveEvents(
    reducedMotion
) {

    const events =
        document.querySelectorAll(
            ".timeline-event"
        );


    if (
        reducedMotion ||
        !events.length
    )
        return;


    if (
        !("IntersectionObserver"
            in window)
    )
        return;


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            events.forEach(
                                event => {

                                    event.classList.remove(
                                        "is-active"
                                    );

                                }
                            );


                            entry.target.classList.add(
                                "is-active"
                            );

                        }

                    }
                );

            },
            {
                threshold: .55
            }
        );


    events.forEach(
        event => {

            observer.observe(
                event
            );

        }
    );

}


/* =========================================================
   FILTERS
========================================================= */

function initFilters(
    reducedMotion
) {

    const buttons =
        document.querySelectorAll(
            ".timeline-filter"
        );

    const events =
        document.querySelectorAll(
            ".timeline-event"
        );

    const counter =
        document.getElementById(
            "eventCount"
        );


    if (
        !buttons.length ||
        !events.length
    )
        return;


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const filter =
                        button.dataset.filter ||
                        "all";


                    buttons.forEach(
                        btn => {

                            const active =
                                btn === button;


                            btn.classList.toggle(
                                "active",
                                active
                            );


                            btn.setAttribute(
                                "aria-selected",
                                String(active)
                            );

                        }
                    );


                    let visible =
                        0;


                    events.forEach(
                        event => {

                            const category =
                                event.dataset.category ||
                                "";


                            const shouldShow =
                                filter === "all" ||
                                category === filter;


                            if (
                                shouldShow
                            ) {

                                visible++;


                                showEvent(
                                    event,
                                    reducedMotion
                                );

                            } else {

                                hideEvent(
                                    event,
                                    reducedMotion
                                );

                            }

                        }
                    );


                    if (counter) {

                        counter.textContent =
                            visible;

                    }


                    /*
                       Recalculate effects
                       after layout changes.
                    */

                    setTimeout(
                        () => {

                            window.dispatchEvent(
                                new Event(
                                    "scroll"
                                )
                            );

                        },
                        350
                    );

                }
            );

        }
    );

}


/* =========================================================
   SHOW EVENT
========================================================= */

function showEvent(
    event,
    reducedMotion
) {

    event.classList.remove(
        "hidden"
    );

    event.classList.remove(
        "filter-hide"
    );


    if (reducedMotion) {

        event.classList.add(
            "is-visible"
        );

        return;

    }


    event.classList.remove(
        "is-visible"
    );


    void event.offsetHeight;


    event.classList.add(
        "filter-show"
    );


    requestAnimationFrame(
        () => {

            event.classList.remove(
                "filter-show"
            );

            event.classList.add(
                "is-visible"
            );

        }
    );

}


/* =========================================================
   HIDE EVENT
========================================================= */

function hideEvent(
    event,
    reducedMotion
) {

    if (reducedMotion) {

        event.classList.add(
            "hidden"
        );

        return;

    }


    event.classList.remove(
        "is-visible"
    );

    event.classList.add(
        "filter-hide"
    );


    setTimeout(
        () => {

            event.classList.add(
                "hidden"
            );

            event.classList.remove(
                "filter-hide"
            );

        },
        260
    );

}


/* =========================================================
   STORY BUTTONS
========================================================= */

function initStoryButtons() {

    const buttons =
        document.querySelectorAll(
            ".story-button"
        );


    buttons.forEach(
        button => {

            const chapter =
                button.dataset.event;


            if (!chapter)
                return;


            button.addEventListener(
                "click",
                () => {

                    button.classList.add(
                        "button-pressed"
                    );


                    setTimeout(
                        () => {

                            window.location.href =
                                `chapter.html?chapter=${encodeURIComponent(chapter)}`;

                        },
                        150
                    );

                }
            );

        }
    );


    /*
       Clicking image also opens chapter.
    */

    const images =
        document.querySelectorAll(
            ".timeline-image-wrap"
        );


    images.forEach(
        wrapper => {

            const event =
                wrapper.closest(
                    ".timeline-event"
                );


            if (!event)
                return;


            const chapter =
                event.dataset.year;


            if (!chapter)
                return;


            wrapper.setAttribute(
                "role",
                "link"
            );


            wrapper.setAttribute(
                "tabindex",
                "0"
            );


            const openStory =
                () => {

                    window.location.href =
                        `chapter.html?chapter=${encodeURIComponent(chapter)}`;

                };


            wrapper.addEventListener(
                "click",
                openStory
            );


            wrapper.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        openStory();

                    }

                }
            );

        }
    );

}


/* =========================================================
   IMAGE HOVER
========================================================= */

function initImageHover() {

    const wrappers =
        document.querySelectorAll(
            ".timeline-image-wrap"
        );


    wrappers.forEach(
        wrapper => {

            const image =
                wrapper.querySelector(
                    "img"
                );


            if (!image)
                return;


            wrapper.addEventListener(
                "mouseenter",
                () => {

                    image.style.filter =
                        "saturate(1) contrast(1.06) brightness(.98)";

                }
            );


            wrapper.addEventListener(
                "mouseleave",
                () => {

                    image.style.filter =
                        "";

                }
            );

        }
    );

}


/* =========================================================
   HERO SCROLL
========================================================= */

function initHeroScroll() {

    const button =
        document.querySelector(
            ".hero-scroll"
        );


    if (!button)
        return;


    button.addEventListener(
        "click",
        () => {

            const target =
                document.querySelector(
                    ".timeline-intro"
                );


            if (!target)
                return;


            const reduced =
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches;


            target.scrollIntoView(
                {
                    behavior:
                        reduced
                            ? "auto"
                            : "smooth",

                    block:
                        "start"
                }
            );

        }
    );

}


/* =========================================================
   AUTH
========================================================= */

function initAuth() {

    const authLoggedOut =
        document.getElementById(
            "authLoggedOut"
        );

    const authLoggedIn =
        document.getElementById(
            "authLoggedIn"
        );

    const mobileLoggedOut =
        document.getElementById(
            "mobileAuthLoggedOut"
        );

    const mobileLoggedIn =
        document.getElementById(
            "mobileAuthLoggedIn"
        );

    const username =
        document.getElementById(
            "navbarUsername"
        );

    const mobileUsername =
        document.getElementById(
            "mobileNavbarUsername"
        );

    const logout =
        document.getElementById(
            "logoutButton"
        );

    const mobileLogout =
        document.getElementById(
            "mobileLogoutButton"
        );


    const isLoggedIn =
        localStorage.getItem(
            "viduthalaiLoggedIn"
        ) === "true";


    const currentUser =
        localStorage.getItem(
            "viduthalaiCurrentUser"
        ) ||
        localStorage.getItem(
            "viduthalaiUsername"
        ) ||
        "User";


    if (isLoggedIn) {

        if (authLoggedOut)
            authLoggedOut.style.display =
                "none";


        if (authLoggedIn)
            authLoggedIn.style.display =
                "flex";


        if (mobileLoggedOut)
            mobileLoggedOut.style.display =
                "none";


        if (mobileLoggedIn)
            mobileLoggedIn.style.display =
                "flex";


        if (username)
            username.textContent =
                currentUser;


        if (mobileUsername)
            mobileUsername.textContent =
                currentUser;

    } else {

        if (authLoggedOut)
            authLoggedOut.style.display =
                "flex";


        if (authLoggedIn)
            authLoggedIn.style.display =
                "none";


        if (mobileLoggedOut)
            mobileLoggedOut.style.display =
                "flex";


        if (mobileLoggedIn)
            mobileLoggedIn.style.display =
                "none";

    }


    function performLogout() {

        localStorage.removeItem(
            "viduthalaiLoggedIn"
        );

        localStorage.removeItem(
            "viduthalaiCurrentUser"
        );

        localStorage.removeItem(
            "viduthalaiUsername"
        );


        window.location.replace(
            "home.html"
        );

    }


    logout?.addEventListener(
        "click",
        performLogout
    );


    mobileLogout?.addEventListener(
        "click",
        performLogout
    );

}


/* =========================================================
   FOOTER
========================================================= */

function initFooter() {

    const year =
        document.getElementById(
            "currentYear"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

}