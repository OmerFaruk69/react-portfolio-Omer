import aboutImg from "../assets/about2.jpg"
import { ABOUT_TEXT } from "../constants"
import { useLanguage } from "./traduction";


import { motion } from "framer-motion"


const About = () => {
    const { language } = useLanguage();
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
            {language === "fr" ? "À propos de " : "About "}
                <span className="text-neutral-500"> {language === "fr" ? "moi " : "me"}</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{opacity : 1 , x:0}}
                initial ={{x:-100,opacity:0}}
                transition={{duration : 0.5}}
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity : 1 , x:0}}
                initial ={{x:100,opacity:0}}
                transition={{duration : 0.5}}
                className="w-full lg:w-1/3">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-20 maxw-xl py-6">{language === "fr" ? ABOUT_TEXT.fr : ABOUT_TEXT.en}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
