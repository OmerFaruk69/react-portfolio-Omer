import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
import { SiGitlab } from "react-icons/si";  // Icône pour GitLab


const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
           
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/omer-faruk-kiziltoprak-59b7a6174/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/OmerFaruk69" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://gitlab.com/ofkiziltoprak" target="_blank" rel="noopener noreferrer">
                <SiGitlab />
            </a>
        </div>
    </nav>
}

export default Navbar
