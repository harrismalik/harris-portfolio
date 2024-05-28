import "./style.css"
import Cta from "../Cta";
import {handleSocialLink, openResume} from "../../helpers/common";

const Footer = () => {
    return (
        <div className={'footer-wrapper'}>
            <div className={'work-cta'}>
                <div className={'colab-icon'}>
                    <i className="ri-shake-hands-fill"></i>
                </div>
                <div className={'colab-text'}>
                    <h1>Let's work together to make <br/> something awesome</h1>
                </div>
                <div className={'colab-cta'}>
                    <Cta title={'Email'}/>
                    <a onClick={openResume} className={'cta hover-elm'}>
                        <h5>Resume</h5>
                    </a>
                </div>
            </div>
            <div className={'footer-bottom'}>
                <p>© 2024 All rights reserved</p>
                <ul className={'nav-menu hover-elm'}>
                    <li onClick={() => handleSocialLink('linkedin')}>
                    <span className={'reveal-box'}>
                            <span className={'reveal-content'}>
                                <i className="ri-linkedin-fill hover-elm"></i>
                            </span>
                    </span>
                    </li>
                    /
                    <li onClick={() => handleSocialLink('instagram')}>
                    <span className={'reveal-box'}>
                            <span className={'reveal-content'}>
                                <i className="ri-instagram-line hover-elm"></i>
                            </span>
                        </span>
                    </li>
                    /
                    <li onClick={() => handleSocialLink('github')}>
                    <span className={'reveal-box'}>
                            <span className={'reveal-content'}>
                                <i className="ri-github-line hover-elm"></i>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer