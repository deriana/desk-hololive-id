import "./header.css"
import HeaderLogo from './components/assets/header-logo.png'

function Header() {
    return (
        <header>
            <a href="https://www.youtube.com/channel/UCJFZiqLMntJufDCHc6bQixg/videos" target="blank">
                <img src={HeaderLogo} alt="hololive-logo" ></img>
            </a>
        </header>
    )
}

export default Header   