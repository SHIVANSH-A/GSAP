var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start: " 95% 0%",
    end: "50% 50%",
    scrub : true,
    markers  :false,
}})

tl.to("#fanta",{
    top:"110%",
    left:"-11.5%"
},'one-two')
tl.to("#slice",{
    top:"140%",
    left:"24%"
},'one-two')
tl.to("#orange",{
    width:"25%",
    top:"161%",
    right:"10%"
},'one-two')

tl.to("#leaf2",{
    top:"110%",
    right:"1%"
},'one-two')

tl.to("#leaf1",{
    rotate:"-120",
    top:"110%",
    left:"-1%"
},'one-two')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start: " 95% 0%",
    end: "50% 50%",
    scrub : true,
    markers  :false,
}})

tl2.from("#lemon",{
    rotate:"-150",
    top:"110%",
    left:"-100%"
},'two-three')

tl2.from("#pepsi",{
    rotate:'90deg' ,
    top:"110%",
    right:"140%"
},'two-three')

tl2.from("#water",{
    rotate:"150",
    top:"110%",
    right:"-100%"
},'two-three')

tl2.from("#sprite",{
    top:"110%",
    left:"140%",
    rotate:'-90deg' ,
},'two-three')
tl2.to("#slice",{
    rotate:"150",
    width:'17%',
    top:"210%",
    left:'42%'
},'two-three')

tl2.to("#fanta",{
    width:'50%',
    top:"216%",
    left:"25%",
    // rotate:'-90deg' ,
},'two-three')
