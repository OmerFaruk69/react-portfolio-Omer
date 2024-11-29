import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { SiGitlab } from "react-icons/si";  
import { useLanguage } from "./traduction"; // Assure-toi que le chemin est correct



const Navbar = () => {
    const { toggleLanguage, language } = useLanguage();
    return <nav className="mb-20 flex items-center justify-between py-6">
         <button
        onClick={toggleLanguage}
        className="px-4 py-2 rounded bg-neutral-700 hover:bg-neutral-600"
      >
        {language === "fr" ? "EN" : "FR"}
      </button>
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
