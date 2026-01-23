import "./style.css"
import Cta from "../Cta";

const Home = () => {
    return (
        <section className={'home scroll-fade'}>
            <h1 className={'main-intro hover-elm image-hover'}>
                    <span className={'reveal-box'}>
                        <span className={'reveal-content'}>I Build <span className={'focus-color'}>AI-Powered Products</span></span>
                        <span className={'reveal-content'}>That Solve Real Problems</span>
                    </span>
            </h1>
            <div className={'home-bottom'}>
                <p className={'home-about-me hover-elm'}>
                    <span className={'reveal-box'}>
                        <span className={'reveal-content'}>Full-Stack Engineer turning complex ideas into</span>
                        <span className={'reveal-content'}>production-ready AI applications.</span>
                        <span className={'reveal-content'}>From intelligent automation to Voice AI,</span>
                        <span className={'reveal-content'}>I ship products that deliver results.</span>
                    </span>
                </p>
                <Cta/>
            </div>
        </section>
    )
}

export default Home