function addBorderBottomAfterScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      gsap.to("nav", {borderBottom: "2px solid #D9D9D9", duration: 0.4})
    } else {
        gsap.to("nav", {borderBottom: "2px solid white", duration: 0.4})
    }
}
window.onscroll = function() {addBorderBottomAfterScroll()};

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

// let preloadTl = gsap.timeline();

// preloadTl.fromTo("#preloader img", {
//     scale: 0.5,
//     position: "absolute"
// }, {
//     scale: 5,
//     duration: 1, 
//     ease: "back.inOut(1.7)",
// })

// preloadTl.to("#preloader img", {
//     scale: 0,
//     duration: 0.6, 
//     ease: "back.in(1)",
// })

// preloadTl.to("#preloader", {
//     duration: 0.6, 
//     ease: "back.in(1)",
//     display: "none",
//     opacity: 0,
// })

// preloadTl.fromTo(".donuts", {
//     width: "1vw",
//     height: "1vw",
//     background: "radial-gradient(circle, transparent 30%, #ea4335 30%)",
//     margin: 0,
//     borderRadius: "50%",
//     visibility: "hidden",
//     stagger: 1,
// }, {
//     visibility: "visible",
//     scale: 4,
//     duration: 0.7,
//     width: "30vw",
//     height: "30vw",
//     background: "radial-gradient(circle, transparent 0%, #ea4335 0%)",
    
// })

// preloadTl.fromTo("#donut2", {
//     width: "1vw",
//     height: "1vw",
//     background: "radial-gradient(circle, transparent 30%, #0a9d58 30%)",
//     margin: 0,
//     borderRadius: "50%",
//     visibility: "hidden"
// }, {
//     visibility: "visible",
//     scale: 4,
//     duration: 0.7,
//     width: "30vw",
//     height: "30vw",
//     background: "radial-gradient(circle, transparent 0%, #0a9d58 0%)",
    
// })

// preloadTl.fromTo("#donut3", {
//     width: "1vw",
//     height: "1vw",
//     background: "radial-gradient(circle, transparent 30%, #4284f3 30%)",
//     margin: 0,
//     borderRadius: "50%",
//     visibility: "hidden"
// }, {
//     visibility: "visible",
//     scale: 4,
//     duration: 0.7,
//     width: "30vw",
//     height: "30vw",
//     background: "radial-gradient(circle, transparent 0%, #4284f3 0%)",
    
// })

// preloadTl.fromTo("#donut4", {
//     width: "1vw",
//     height: "1vw",
//     background: "radial-gradient(circle, transparent 30%, #fabc05 30%)",
//     margin: 0,
//     borderRadius: "50%",
//     visibility: "hidden"
// }, {
//     visibility: "visible",
//     scale: 4,
//     duration: 0.7,
//     width: "30vw",
//     height: "30vw",
//     background: "radial-gradient(circle, transparent 0%, #fabc05 0%)",
// })

// preloadTl.to(".donuts", {
//     duration: 3,
//     opacity: 0,
// })
// preloadTl.set("#preloader", {
//     position: "static",
//     zIndex: 0,
//     display: "none",
// })

// preloadTl.set("#preloader", {
// })

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