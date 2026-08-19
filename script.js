/* =====================================================
   THREADSCOPE - RESPONSIVE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const navActions = document.querySelector(".nav-actions");

if (menuButton && navLinks && navActions) {

    menuButton.addEventListener("click", () => {

        const menuIsOpen =
            navLinks.classList.contains("mobile-open");

        if (menuIsOpen) {

            navLinks.classList.remove("mobile-open");
            navActions.classList.remove("mobile-open");

            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");

        } else {

            navLinks.classList.add("mobile-open");
            navActions.classList.add("mobile-open");

            menuButton.textContent = "×";
            menuButton.setAttribute("aria-expanded", "true");

        }

    });

}


/* =====================================================
   GENERATE DIRECTION BUTTON
===================================================== */

const generateButton =
    document.getElementById("generateButton");

const workspace =
    document.querySelector(".workspace");


if (generateButton) {

    generateButton.addEventListener("click", () => {

        generateButton.innerHTML = "Generating...";
        generateButton.disabled = true;

        if (workspace) {
            workspace.classList.add("generating");
        }


        setTimeout(() => {

            if (workspace) {
                workspace.classList.add("generated");
            }

            generateButton.innerHTML =
                "Direction generated ✓";

        }, 700);


        setTimeout(() => {

            generateButton.innerHTML =
                'Generate direction <span>→</span>';

            generateButton.disabled = false;

            if (workspace) {
                workspace.classList.remove("generating");
            }

        }, 2500);

    });

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".step-card, .feature-item, .workspace"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

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
                threshold: 0.15
            }
        );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

} else {

    /* Older browser fallback */

    revealElements.forEach((element) => {

        element.classList.add("revealed");

    });

}


/* =====================================================
   EASTER EGG
===================================================== */

/*
    Type:

    T H R E A D

    anywhere on the page.
*/

let secretCode = "";

document.addEventListener("keydown", (event) => {

    secretCode += event.key.toLowerCase();

    /* Keep only the last 20 characters */
    if (secretCode.length > 20) {

        secretCode =
            secretCode.slice(-20);

    }


    if (secretCode.endsWith("thread")) {

        document.body.classList.add(
            "secret-mode"
        );


        setTimeout(() => {

            document.body.classList.remove(
                "secret-mode"
            );

        }, 2500);


        secretCode = "";

    }

});


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

const mobileLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove(
                "mobile-open"
            );

        }

        if (navActions) {

            navActions.classList.remove(
                "mobile-open"
            );

        }

        if (menuButton) {

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});


/* =====================================================
   CLOSE MOBILE MENU WHEN WINDOW BECOMES DESKTOP
===================================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        if (navLinks) {
            navLinks.classList.remove("mobile-open");
        }

        if (navActions) {
            navActions.classList.remove("mobile-open");
        }

        if (menuButton) {

            menuButton.textContent = "☰";

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});
const generateBtn = document.getElementById("generateBtn");

if (generateBtn) {
    generateBtn.addEventListener("click", function () {
        generateBtn.textContent = "Generating...";
        generateBtn.disabled = true;

        setTimeout(function () {
            generateBtn.textContent = "Direction generated ✓";
            
            setTimeout(function () {
                generateBtn.textContent = "Generate direction →";
                generateBtn.disabled = false;
            }, 2000);

        }, 1200);
    });
}
let secretCode = "";

document.addEventListener("keydown", function (event) {
    secretCode += event.key.toUpperCase();

    if (secretCode.length > 6) {
        secretCode = secretCode.slice(-6);
    }

    if (secretCode === "THREAD") {
        alert("🧵 You found the ThreadScope secret.");

        secretCode = "";
    }
});