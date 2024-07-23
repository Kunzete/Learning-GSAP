var InitialPath = `M 50 100 Q 800 100 1500 100`;
var FinalPath = `M 50 100 Q 800 100 1500 100`;
var string = document.querySelector("svg");
var tl = gsap.timeline();

tl.from("#nav h2",{
    y: -10,
    opacity: 0,
    duration: .5,
    delay: .5,
})

tl.from("#nav #link h3",{
    x: 50,
    opacity: 0,
    stagger: .25,
})

tl.from("#content h1",{
    opacity: 0,
    scale: 0,
    duration: .4,
    y: 30,
})

tl.from("#content h4",{
    scale: 0,
    opacity: 0,
    duration: .5,
    y: 30,
})

gsap.to("#nav",{
    backgroundColor: "#fff",
    color: "black",
    backdropFilter: "blur(5px)",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -5%",
        end: "top 10%",
        scrub: 2,
    }
})

string.addEventListener("mousemove",function(dets){
    console.log(dets.y);
    console.log(dets.x);
    InitialPath = `M 50 100 Q ${dets.x} ${dets.y / 2} 1500 100`
    gsap.to("#string svg path",{
        attr:{
            d: InitialPath
        },
        duration: .5,
        ease: "power3.out"
    })
});

string.addEventListener("mouseleave",function(){
    gsap.to("#string path",{
        attr:{
            d: FinalPath
        },
        duration: 3,
        ease: "elastic.out(1,.1)"
    })
})
