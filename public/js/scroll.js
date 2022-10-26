//gsap scroll animation


const timeline=gsap.timeline({defaults:{duration:1}})
timeline
.from('.hero .ronakLogo',{y:'-100%',ease:'bounce'})
.from('.nav-links li',{y:'-205%',ease:'bounce',stagger:.2}, '<.1')
.from('.my-img img',{duration:2,x:'120%',ease:'power3'},'<')
.from('.social-media',{y:'200%',ease:'back',stagger:.1}, '<')
.fromTo('.download-cv',{ opacity:-1,scale:0},{duration:.5,opacity:1,scale:1}, '<.1')

