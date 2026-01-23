import './style.css'

const Cta = ({title = "Let's Talk"}) => {
    return (
        <a href={'mailto:contact@mharrismalik.com'} className={'cta hover-elm'}>
            <h5>
                <span className={'reveal-box'}>
                    <span className={'reveal-content'}>{title}</span>
                </span>
            </h5>
        </a>
    )
}

export default Cta