import gsap from "gsap";
import {Circ} from "gsap/gsap-core";

export const loaderAnimation = () => {
    gsap.from('.loader-reveal-content', {
        y:"100%",
        opacity:0,
        ease: Circ.easeInOut,
        delay:0,
        duration:1
    });
    gsap.to('.loader-reveal-content', {
        y:"-100%",
        opacity:0,
        ease: Circ.easeInOut,
        delay:1.5,
        duration:1
    });
    gsap.from('.reveal-content', {
        y:"100%",
        opacity:0,
        ease: Circ.easeInOut,
        delay:2,
        duration:1
    });
    gsap.to('.loader-cover', {
        opacity:0,
        delay:2,
        duration:0.6
    })
    gsap.to('.loader-cover', {
        height:0,
        delay:3,
        duration:0
    })
}