var tl = gsap.timeline({scrollTrigger:{
    trigger: ".about",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#can",{
    top: "95%",
    left: "12%",
    rotate: "30deg"
}, 'lemon')
tl.to("#lemon",{
    top:"160%",
    left: "23%"
}, 'lemon')
tl.to("#orange7up",{
    width: "25%",
    top:"160%",
    right: "10%",
    rotate: "-15deg"
}, 'lemon')
tl.to("#cherry",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'lemon')
tl.to("#mango",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'lemon')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".product",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

// tl2.to("#lemon",{
//     width:"28%",
//     left: "42%",
//     top: "214%"
// }, 'can')
tl2.to("#orange7up",{
    width:"25%",
    left: "35%",
    top: "270%"
}, 'can')
tl2.to("#can",{
    width:"27%",
    top: "218%",
    left: "35%",
    rotate: "0deg"
}, 'can')

