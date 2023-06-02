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
gsap.registerPlugin(ScrollTrigger);
gsap.to("footer", {
    x: "-7.5%", 
    scrollTrigger: {
        trigger: "footer",
        scrub: 3,
        end: "top 40%",
    }
})

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

function preloader() {
    let preloadTl = gsap.timeline();

    preloadTl.fromTo("#preloader img", {
        scale: 0.5,
        position: "absolute"
    }, {
        scale: 5,
        duration: 1,
        ease: "back.inOut(1.7)",
    });

    preloadTl.to("#preloader img", {
        scale: 0,
        duration: 0.6,
        ease: "back.in(1)",
    });

    preloadTl.to(".balls", {
        width: "30vw",
        height: "30vw",
        visibility: "visible",
        scale: 4,
        duration: 0.7,
        stagger: 0.2,
    });
    preloadTl.to("#whiteBall", {
        width: "30vw",
        height: "30vw",
        opacity: 0,
        scale: 4,
        duration: 0.7,
    });

    preloadTl.to("#preloader", {
        duration: 1,
        opacity: 0,
    }, "<");
    preloadTl.to("#preloader", {
        duration: 2,
        display: "none",
    }, "<");

    preloadTl.from("nav", {
        duration: 0.5,
        ease: "power3.inOut",
        opacity: 0,
    }, ">-1.7");

    preloadTl.fromTo("#contact-page", {
        duration: 0.5,
        ease: "power3.inOut",
        opacity: 0
    }, {
        opacity: 1
    });


}
preloader();

let standardBlack = "#212121";
let standardWhite = "#fff";
let standardGray = "#555555";

function darkModeClicked() {
    let toggleState = true;
    const toggleAnimation = gsap.timeline({ paused: true });
    toggleAnimation
      .to("#darkModeToggle", { x: "100%", duration: 0.3, ease: "linear" });
    darkModeBtn.addEventListener("click", () => {
      if (toggleState) {
        toggleAnimation.restart();
        gsap.to("body", {backgroundColor: standardBlack})
        gsap.to(".navbar", {backgroundColor: standardBlack})
        gsap.to("#toggler a", {color: standardWhite})
        gsap.to("p", {color: standardWhite})
        gsap.to("p", {color: standardWhite})
        gsap.to("h1", {color: standardWhite})
        gsap.to("h2:not(.logo)", {color: standardWhite})
    } else {
        toggleAnimation.reverse();
        gsap.to("body", {backgroundColor: standardWhite})
        gsap.to(".navbar", {backgroundColor: standardWhite})
        gsap.to("#toggler a", {color: standardBlack})
        gsap.to("p", {color: standardGray})
        gsap.to("h1", {color: standardBlack})
        gsap.to("h2:not(.logo)", {color: standardBlack})
      }
      toggleState = !toggleState;
    });
}
  darkModeClicked();

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
