import "./style.css"
import Cta from "../Cta";

const Home = () => {
    return (
        <section className={'home scroll-fade'}>
            <h1 className={'main-intro hover-elm image-hover'}>
                    <span className={'reveal-box'}>
                        <span className={'reveal-content'}>A <span className={'focus-color'}>creative software developer</span></span>
                        <span className={'reveal-content'}>focused on developing</span>
                        <span className={'reveal-content'}>awesome web applications</span>
                    </span>
            </h1>
            <div className={'home-bottom'}>
                <p className={'home-about-me hover-elm'}>
                    <span className={'reveal-box'}>
                        <span className={'reveal-content'}>I love programming and implementing features that</span>
                        <span className={'reveal-content'}>creates a wow moment. </span>
                        <span className={'reveal-content'}>I am a boat in the ocean of knowledge navigating my way and</span>
                        <span className={'reveal-content'}>building creative and complex web applications for</span>
                        <span className={'reveal-content'}>innovative startups and thought leaders.</span>
                    </span>
                </p>
                <Cta/>
            </div>
        </section>
    )
}

export default Home