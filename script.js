function teamCardInfiniteScroll() {
    gsap.to("#first-event-card-box", {
        x: "-100%",
        ease: "linear",
        duration: 15,
        repeat: -1,
    })
    gsap.to("#second-event-card-box", {
        x: "-100%",
        ease: "linear",
        duration: 15,
        repeat: -1,
    })
}

teamCardInfiniteScroll()


gsap.registerEffect({
    name: "scrollTo",
    effect: (targets, config) => {
        return gsap.to(window, {
            duration: 2,
            ease: "power4.inOut",
            scrollTo: { y: config.y, offsetY: config.offsetY }});
}});

function pulseAnimation(){
    let circles = document.querySelectorAll("[class ^= \"circle\"]");
    circles.forEach(e => {
        e.animate([
            {transform: "scale(500)", offset : 0.9},
            {opacity: 0},
        ],
        {
            duration: 500,
            easing: "ease-out"
        }
        )
    })
}

// jQuery
$(document).ready(() => {
    $("#nav-link-team").on("click", () => {
        gsap.effects.scrollTo(window, {y: "#team", offsetY: "-10",})
    });
    
    $("#nav-link-events").on("click", () => {
        gsap.effects.scrollTo(window, {y: "#latest-event", offsetY: "70",})
    });

    $("#nav-link-faq").on("click", () => {
        gsap.effects.scrollTo(window, {y: "#faq", offsetY: "0",})
    });

    $("#latest-event .card").on("click", () => {
            pulseAnimation();
        });
    
    $("#nav-link-contact").on("click", () => {
        gsap.to("#contact-page", {
            y: "0%",
            ease: "power4.inOut",
            duration: 1,
        })
    })

    $("#cancel-icon").on("click", () => {
        gsap.to("#contact-page", {
            y: "-100%",
            ease: "power4.inOut",
            duration: 1,
        })
    })

});