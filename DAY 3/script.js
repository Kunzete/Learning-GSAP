var tl = gsap.timeline();
var cursor = document.querySelector("#cursor");
var imgDiv = document.querySelector("#imgDiv")

tl.from("#nav #logo #h2", {
    y: -20,
    opacity: 0,
    delay: .7,
    duration: .5,
})

tl.from("#nav #link h3", {
    x: 500,
    opacity: 0,
    stagger: .4
})

tl.from(imgDiv,{
    opacity: 0,
    duration: 1
})


gsap.to("#nav",{
    opacity: 0,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -20%",
        end: "top -100%",
        scrub: 2
    }
})

window.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        y: dets.y - 10,
        x: dets.x - 10,
        duration: .3,
    })
})

imgDiv.addEventListener("mouseenter", function (dets) {
    gsap.to(cursor, {
        backgroundColor: "transparent",
        backdropFilter: "invert(1)",
        scale: 2,
    })
})

imgDiv.addEventListener("mouseleave", function (dets) {
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff",
        backdropFilter: "invert(0)",
    })
})

gsap.to("#page2 h1",{
    transform: "translateX(-75%)",
    scrollTrigger:{
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})

gsap.from("#page3 h1",{
    opacity: 0,
    scale: 0,
    y: -20,
    stagger: 1,
    duration: 4,
    scrollTrigger:{
        trigger: "#page3",
        scroller: "body",
        start: "top 30%",
        end: "top 60%",
        scrub: 3
    }
})