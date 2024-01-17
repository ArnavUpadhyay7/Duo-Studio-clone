function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locoScroll()

// function cursorEffect(){
    var main = document.querySelector("#main")
    var crsr = document.querySelector("#cursor")
    document.addEventListener("mousemove",(dets)=>{
        gsap.to(crsr,{
            x : dets.x,
            y: dets.y
        })
    })
    document.addEventListener("mouseenter",function(){
        gsap.to(crsr,{
            scale: 1,
            opacity: 1
        }) 
    })
    document.addEventListener("mouseleave",function(){
        gsap.to(crsr,{
            scale: 0,
            opacity: 0
        }) 
    })
// }
// cursorEffect()

// gsap.from("#page1 h1,h2",{
//     y: 10,
//     rotate: 10,
//     duration: 0.8,
//     opacity: 0,
//     delay: 0.5
// })

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        //markers: true,
        start: "top 30%",
        end: "top 0",
        scrub: 3 
    }
})
tl.to("#page1 h1",{
    x: -100,
},"anim")
tl.to("#page1 h2",{
    x: 100
},"anim")
tl.to("#page1 video",{
    width: "90%"
},"anim")
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1 h1",
        scroller: "#main",
        // markers: true,
        start: "top -100%",
        end: "top -130%",
        scrub: 3 
    }
})
tl2.to("#main",{
    backgroundColor: "white",
})
var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top -100%",
        end: "top -130%",
        scrub: 3 
    }
})
tl3.to("#page3-part1 img",{
    x: 140, 
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top -20%",
        end: "top -30%",
        scrub: 3
    }
})
tl3.to("#page3-part1 video",{
    x: -140, 
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top -10%",
        end: "top -30%",
        scrub: 3
    }
})
tl3.to("#page3-part2-left",{
    x: 220, 
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top -20%",
        end: "top -30%",
        scrub: 3
    }
})
tl3.to("#page3-part2-right",{
    x: -230, 
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top -10%",
        end: "top -30%",
        scrub: 3
    }
})
var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        // markers: true,
        start: "top -150%",
        end: "top -170%",
        scrub: 3 
    }
})
tl4.to("#main",{
    backgroundColor: "#000",
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.height = "300px"
        crsr.style.width = "350px"
        crsr.style.backgroundImage = `URL(${att})`
        crsr.style.borderRadius = "5%"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.height = "20px"
        crsr.style.width = "20px"
        crsr.style.backgroundImage = `none`
        crsr.style.borderRadius = "50%"
    })
}) 
// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(e){
//     e.addEventListener("mouseenter",function(){
//         purple.style.opacity = 1,
//         purple.style.display = "block"
//     })
//     e.addEventListener("mouseleave",function(){
//         purple.style.opacity = 0,
//         purple.style.display = "none"
//     })
// })