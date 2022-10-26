//gsap scroll animation



// ===========hero animation===========
const timeline1=gsap.timeline({defaults:{duration:1}})
timeline1
.from('.hero .ronakLogo',{y:'-100',ease:'bounce'})
.from('.nav-links li',{y:'-205%',ease:'bounce',stagger:.2}, '<.1')
.from('.my-img img',{duration:2,x:'120%',ease:'power3'},'<')
.from('.social-media',{y:'200%',ease:'back',stagger:.1}, '<')
.fromTo('.download-cv',{ opacity:-1,scale:0},{duration:.5,opacity:1,scale:1}, '<.1')
.from('.hero-detail h1',{y:-100},'<')
.from('.hero-detail p',{x:-210},'<')

// =============scroll-animation============
gsap.registerPlugin(ScrollTrigger);

// =========about-animation===========
gsap.timeline({
    scrollTrigger:{
        trigger:".about",
        start: 'top top',
        end: 'bottom',
        scrub:1,
        pin:true
    }
})
.from(".about-section-box",{x:innerWidth*1,ease:'ease'})
// .from(".about-section-box img",{x:innerWidth*1,ease:'ease'})


// =========skills-animation===========

gsap.timeline({
    scrollTrigger:{
        trigger:".skills",
        start: 'top top',
        end: 'bottom',
        scrub:1,
        pin:true
    }
})
.from(".skill-box",{x:innerWidth*-1,stagger:.1,ease:'ease'})


// =========project-animation===========

gsap.timeline({
    scrollTrigger:{
        trigger:".projects",
        start: 'top top',
        end: 'bottom',
        scrub:1,
        pin:true
    }
})
.from(".swiper",{y:innerHeight*-1,ease:'ease'})

// =========contact-animation===========

gsap.timeline({
    scrollTrigger:{
        trigger:".contact",
        start: 'top top',
        end: 'bottom',
        scrub:1,
        pin:true
    }
})
.from(".contact-info",{y:innerHeight*-1,ease:'ease'})
.from(".contact-content form",{y:innerHeight*1,ease:'ease'})
.from(".contact-content img",{y:innerHeight*-1,ease:'ease'})

