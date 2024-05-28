import './style.css'
import {handleSocialLink, openResume} from "../../helpers/common";

const NavBar = () => {
    return (
        <nav className={'nav-bar'}>
            <a className={'home-icon hover-elm image-hover'}>
                <i className="ri-terminal-fill"></i>
                <p>Hello World!</p>
            </a>
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
                /
                <li className={'nav-resume hover-elm'} onClick={() => openResume()}>
                    <span className={'reveal-box'}>
                            <span className={'reveal-content'}>
                                <i className="ri-article-fill"></i>
                            </span>
                        </span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar