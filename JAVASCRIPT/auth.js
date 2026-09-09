/* =========================================================
   VIDUTHALAI
   AUTHENTICATION ENGINE

   LOGIN
   SIGNUP
   USER NAVIGATION
   LOGOUT
========================================================= */

"use strict";


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       STORAGE KEYS
    ====================================================== */

    const USER_KEY =
        "viduthalaiUser";

    const LOGIN_KEY =
        "viduthalaiLoggedIn";


    /* =====================================================
       ELEMENTS
    ====================================================== */

    const loginTab =
        document.getElementById("loginTab");

    const signupTab =
        document.getElementById("signupTab");

    const loginForm =
        document.getElementById("loginForm");

    const signupForm =
        document.getElementById("signupForm");

    const authTitle =
        document.getElementById("authTitle");

    const authSubtitle =
        document.getElementById("authSubtitle");

    const authMessage =
        document.getElementById("authMessage");


    /* =====================================================
       AUTH STATE
    ====================================================== */

    function isLoggedIn() {

        return (
            localStorage.getItem(LOGIN_KEY)
            === "true"
        );

    }


    /* =====================================================
       MESSAGE
    ====================================================== */

    function showMessage(
        message,
        type = "error"
    ) {

        if (!authMessage) return;

        authMessage.textContent =
            message;

        authMessage.className =
            "auth-message " + type;

    }


    /* =====================================================
       LOGIN TAB
    ====================================================== */

    function showLogin() {

        if (!loginForm || !signupForm)
            return;


        loginForm.classList.remove(
            "hidden"
        );

        signupForm.classList.add(
            "hidden"
        );


        loginTab?.classList.add(
            "active"
        );

        signupTab?.classList.remove(
            "active"
        );


        if (authTitle) {

            authTitle.textContent =
                "Welcome back.";

        }


        if (authSubtitle) {

            authSubtitle.textContent =
                "Enter your details to continue your journey.";

        }


        showMessage("");

    }


    /* =====================================================
       SIGNUP TAB
    ====================================================== */

    function showSignup() {

        if (!loginForm || !signupForm)
            return;


        loginForm.classList.add(
            "hidden"
        );

        signupForm.classList.remove(
            "hidden"
        );


        loginTab?.classList.remove(
            "active"
        );

        signupTab?.classList.add(
            "active"
        );


        if (authTitle) {

            authTitle.textContent =
                "Begin the journey.";

        }


        if (authSubtitle) {

            authSubtitle.textContent =
                "Create your account and explore the story of freedom.";

        }


        showMessage("");

    }


    loginTab?.addEventListener(
        "click",
        showLogin
    );


    signupTab?.addEventListener(
        "click",
        showSignup
    );


    /* =====================================================
       SIGNUP
    ====================================================== */

    signupForm?.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const name =
                document
                    .getElementById("signupName")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("signupEmail")
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById("signupPassword")
                    .value;


            const confirmPassword =
                document
                    .getElementById("signupConfirm")
                    .value;


            /* VALIDATION */

            if (!name) {

                showMessage(
                    "Please enter your name."
                );

                return;

            }


            if (!email) {

                showMessage(
                    "Please enter your email."
                );

                return;

            }


            if (password.length < 6) {

                showMessage(
                    "Password must contain at least 6 characters."
                );

                return;

            }


            if (
                password !==
                confirmPassword
            ) {

                showMessage(
                    "Passwords do not match."
                );

                return;

            }


            /* EXISTING USER */

            const existingUser =
                JSON.parse(
                    localStorage.getItem(
                        USER_KEY
                    )
                );


            if (
                existingUser &&
                existingUser.email === email
            ) {

                showMessage(
                    "This email is already registered."
                );

                return;

            }


            /* CREATE USER */

            const user = {

                name: name,

                email: email,

                password: password

            };


            localStorage.setItem(
                USER_KEY,
                JSON.stringify(user)
            );


            /* LOGIN */

            localStorage.setItem(
                LOGIN_KEY,
                "true"
            );


            /* STORE DISPLAY NAME */

            localStorage.setItem(
                "viduthalaiCurrentUser",
                name
            );


            showMessage(
                "Welcome to Viduthalai, " +
                name + ".",
                "success"
            );


            /* GO HOME */

            setTimeout(() => {

                window.location.href =
                    "home.html";

            }, 700);

        }
    );


    /* =====================================================
       LOGIN
    ====================================================== */

    loginForm?.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById("loginPassword")
                    .value;


            const storedUser =
                JSON.parse(
                    localStorage.getItem(
                        USER_KEY
                    )
                );


            /* NO USER */

            if (!storedUser) {

                showMessage(
                    "No account found. Please sign up first."
                );

                return;

            }


            /* EMAIL */

            if (
                storedUser.email !==
                email
            ) {

                showMessage(
                    "Incorrect email address."
                );

                return;

            }


            /* PASSWORD */

            if (
                storedUser.password !==
                password
            ) {

                showMessage(
                    "Incorrect password."
                );

                return;

            }


            /* LOGIN */

            localStorage.setItem(
                LOGIN_KEY,
                "true"
            );


            localStorage.setItem(
                "viduthalaiCurrentUser",
                storedUser.name
            );


            showMessage(
                "Welcome back, " +
                storedUser.name + ".",
                "success"
            );


            setTimeout(() => {

                window.location.href =
                    "home.html";

            }, 700);

        }
    );


    /* =====================================================
       UPDATE NAVBAR
    ====================================================== */

    function updateNavbar() {

        const loginLink =
            document.getElementById(
                "loginLink"
            );

        const userMenu =
            document.getElementById(
                "userMenu"
            );

        const userName =
            document.getElementById(
                "userName"
            );

        const dropdownUserName =
            document.getElementById(
                "dropdownUserName"
            );


        if (
            !loginLink ||
            !userMenu
        ) {

            return;

        }


        if (isLoggedIn()) {

            const name =
                localStorage.getItem(
                    "viduthalaiCurrentUser"
                ) || "USER";


            /* HIDE LOGIN */

            loginLink.style.display =
                "none";


            /* SHOW USER */

            userMenu.style.display =
                "block";


            if (userName) {

                userName.textContent =
                    name;

            }


            if (dropdownUserName) {

                dropdownUserName.textContent =
                    name;

            }

        } else {

            /* SHOW LOGIN */

            loginLink.style.display =
                "block";


            /* HIDE USER */

            userMenu.style.display =
                "none";

        }

    }


    updateNavbar();


    /* =====================================================
       USER DROPDOWN
    ====================================================== */

    const userMenu =
        document.getElementById(
            "userMenu"
        );

    const userName =
        document.getElementById(
            "userName"
        );


    userName?.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            userMenu?.classList.toggle(
                "open"
            );

        }
    );


    document.addEventListener(
        "click",
        () => {

            userMenu?.classList.remove(
                "open"
            );

        }
    );


    /* =====================================================
       LOGOUT
    ====================================================== */

    const logoutBtn =
        document.getElementById(
            "logoutBtn"
        );


    logoutBtn?.addEventListener(
        "click",
        () => {


            localStorage.removeItem(
                LOGIN_KEY
            );


            localStorage.removeItem(
                "viduthalaiCurrentUser"
            );


            /* CLOSE MENU */

            userMenu?.classList.remove(
                "open"
            );


            /* REFRESH PAGE */

            window.location.href =
                "home.html";

        }
    );

});