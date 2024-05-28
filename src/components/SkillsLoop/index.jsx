import './style.css'

const SkillsLoop = () => {
    return (
        <div className={'skill-icons'}>
            <div className={'skill-container hover-elm text-scroll-reveal'}>
                <i className="devicon-npm-original-wordmark"></i>
                <i className="devicon-express-original"></i>
                <i className="devicon-javascript-plain"></i>
                {/*<i className="devicon-typescript-plain"></i>*/}
                <i className="ri-reactjs-fill"></i>
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-html5-plain"></i>
                <i className="devicon-laravel-original"></i>
                <i className="devicon-php-plain"></i>
            </div>
        </div>
    )
}

export default SkillsLoop