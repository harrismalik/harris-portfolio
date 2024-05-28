import './style.css'

const Cta = ({title = "Let's Talk"}) => {
    return (
        <a href={'mailto:harrismalik4647@gmail.com'} className={'cta hover-elm'}>
            <h5>
                <span className={'reveal-box'}>
                    <span className={'reveal-content'}>{title}</span>
                </span>
            </h5>
        </a>
    )
}

export default Cta