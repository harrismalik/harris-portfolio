import '../App.css';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger"
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import {loaderAnimation} from "./LoaderAnimation/animation";
import LoaderAnimation from "./LoaderAnimation";
import NavBar from "./NavBar";
import Home from "./Home";
import SkillsLoop from "./SkillsLoop";
import Footer from "./Footer";

function MainContainer() {
    const cursor = useRef()
    useLayoutEffect(() => {
        const handleMouseEnter = (event) => {
            cursor.current.classList.add('hover-state')
            if(event.target.classList.contains('image-hover')) {
                cursor.current.classList.add('image-hover-state')
            }
            if(event.target.classList.contains('nav-resume')) {
                cursor.current.innerText = '[resume]'
                cursor.current.classList.add('text-hover-state')
            }
        };
        const handleMouseLeave = (event) => {
            cursor.current.classList.remove('hover-state')
            cursor.current.classList.remove('image-hover-state')
            cursor.current.innerText = ''
            cursor.current.classList.remove('text-hover-state')
        };

        const hoveredElements = document.querySelectorAll('.hover-elm');
        hoveredElements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });
        return () => {
            hoveredElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        }
    },[])

    const cursorHandler = e => {
        cursor.current.style.left = e.pageX-10+'px';
        cursor.current.style.top = e.pageY+-10+'px';
        gsap.to({},{
            repeat:-1,
            onRepeat: function () {
                gsap.set(cursor,{
                    css: {
                        left:e.pageX-10+'px'
                    }
                })
            }
        })
    }
    useEffect(() => {
        const ctx = gsap.context(() => {
            loaderAnimation()
            gsap.registerPlugin(ScrollTrigger)
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger:'.scroll-fade',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                    markers: false
                }
            })
            tl.from('.scroll-fade',{
                opacity:1
            })
            tl.to('.scroll-fade',{
                opacity:0
            })
        })
        return () => ctx.revert()
    },[])
    return (
        <div className={'main'} onMouseMove={cursorHandler}>
            <div className={'cursor'} ref={cursor}></div>
            <LoaderAnimation/>
            <div className={'bg'}></div>
            <div id={'main-container'}>
                <NavBar/>
                <Home/>
            </div>
            <SkillsLoop/>
            <div className={'mini-about-section scroll-main-heading'}>
                <h2 className={'text-scroll-reveal'}>
                    <span className={'hover-elm'}>
                        I believe in collaborative effort of right people have<br/>
                        a potential to create something awesome. Always looking forward<br/>
                        to get in touch with ambitious people with amazing goals.
                    </span>
                </h2>
            </div>
            <section id={'history'}>
                <div className={'history-item-heading history-item hover-elm'}>
                    <h2><i className="ri-file-history-line"></i> Work History</h2>
                </div>
                <div className={'history-item hover-elm'}>
                        <div className={'history-item-content'}>
                            <div className={'history-item-detail'}>
                                <h2>[2023 - 2024] [Software Engineer II]</h2>
                                <h4>(Asfar Group)</h4>
                            </div>
                        </div>
                        <div className={'history-item-mask'}></div>
                </div>
                <div className={'history-item hover-elm'}>
                    <div className={'history-item-content'}>
                        <div className={'history-item-detail'}>
                            <h2>[2021 - 2023] [Software Engineer I - II]</h2>
                            <h4>(Uforia Infotech)</h4>
                        </div>
                    </div>
                    <div className={'history-item-mask'}></div>
                </div>
                <div className={'history-item hover-elm'}>
                    <div className={'history-item-content'}>
                        <div className={'history-item-detail'}>
                            <h2>[2020-2021] [Web Developer]</h2>
                            <h4>(AtOptimize)</h4>
                        </div>
                    </div>
                    <div className={'history-item-mask'}></div>
                </div>
                <div className={'history-item hover-elm'}>
                    <div className={'history-item-content'}>
                        <div className={'history-item-detail'}>
                            <h2>[2020] [Full Stack - Intern]</h2>
                            <h4>(Zaf Technologies)</h4>
                        </div>
                    </div>
                    <div className={'history-item-mask'}></div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
export default MainContainer;
