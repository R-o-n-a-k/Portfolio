//gsap scroll animation



// ===========hero animation===========
const timeline1=gsap.timeline({defaults:{duration:1}})
timeline1
.from('.hero .ronakLogo',{y:'-100%',ease:'bounce'},'<')
.from('.nav-links li',{y:'-44',ease:'bounce',stagger:.2}, '<.1')
.from('.my-img img',{duration:2,rotation:90,x:'120%',ease:'power3'},'<')
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
        start: 'top 90%',
        end: 'top 20%'
    }
})
.from(".about-section-box",{x:innerWidth*1,ease:'ease'})



// =========skills-animation===========

gsap.timeline({
    scrollTrigger:{
        trigger:".skills",
        start: 'top 90%',
        end: 'top 20%'
    }
})
.from(".skill-box",{y:innerHeight*1,ease:'ease',stagger:.1})


// =========project-animation===========

gsap.timeline({
    scrollTrigger:{
        trigger:".projects",
        start: 'top 90%',
        end: 'top 20%'
    }
})
.from(".swiper",{y:innerHeight*-1,ease:'ease'})

// =========contact-animation===========

gsap.timeline({
    scrollTrigger:{
        trigger:".contact",
        start: 'top 90%',
        end: 'top 20%'
    }
})
.from(".contact-info",{y:innerHeight*-1,ease:'ease'})
.from(".contact-content form",{y:innerHeight*1,ease:'ease'},'<')
.from(".contact-content img",{y:innerHeight*-1,ease:'ease'},'<')

