/* =========================================================
   VIDUTHALAI
   PAGE ACCESS GUARD
========================================================= */

"use strict";


(function () {

    const isLoggedIn =
        localStorage.getItem(
            "viduthalaiLoggedIn"
        ) === "true";


    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    /* =====================================================
       PUBLIC PAGES
    ====================================================== */

    const publicPages = [

        "",
        "index.html",
        "home.html",
        "auth.html"

    ];


    /* =====================================================
       PROTECTED PAGES
    ====================================================== */

    const protectedPages = [

        "heroes.html",
        "hero.html",

        "timeline.html",

        "chapter.html",

        "achievements.html",

        "indian_achievements.html",

        "leaders.html"

    ];


    /* =====================================================
       NOT LOGGED IN
    ====================================================== */

    if (
        !isLoggedIn &&
        protectedPages.includes(currentPage)
    ) {

        window.location.replace(
            "home.html"
        );

        return;

    }


})();