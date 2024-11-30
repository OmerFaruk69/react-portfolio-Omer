import {SiMysql, SiMicrosoftsqlserver, SiTalend, SiMicrosoftazure, SiGrafana} from "react-icons/si";

import { FaRegSnowflake} from "react-icons/fa6";
import { SiPython, SiPowerbi, SiJavascript } from 'react-icons/si';

import { SiGitlab, SiJenkins, SiDocker } from 'react-icons/si';

import {SiMongodb} from "react-icons/si"

import {BiLogoPostgresql} from "react-icons/bi"
import { animate, motion } from "framer-motion"
import { useLanguage } from "./traduction";


const iconVariants = (duration) => ({
    initial : { y :-10},
    animate :{
        y :[10,-10],
        transition:{
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType : "reverse"
        }
    }
})


const Technologies = () => {
    const { language } = useLanguage();
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
         whileInView={{opacity : 1 , y:0}}
         initial ={{y:-100,opacity:0}}
         transition={{duration : 1.5}}
        className="my-20 text-center text-4xl"> {language === "fr" ? "Base de donnée " : "Database "}</motion.h1>
        <motion.div 
        whileInView={{opacity : 1 , x:0}}
        initial ={{x:-100,opacity:0}}
        transition={{duration : 1.5}}

        className="flex flex-wrap items-center justify-center gap-4">
             <motion.div 
             variants={iconVariants(4)}
             initial = "initial"
              animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <BiLogoPostgresql className="text-5xl sm:text-6xl lg:text-7xl text-sky-700"/>
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">PostgreSQL</span>
            </motion.div>

            <motion.div 
             variants={iconVariants(5)}
             initial = "initial"
              animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <FaRegSnowflake className="text-5xl sm:text-6xl lg:text-7xl" style={{ color: "#00A9E0" }} />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Snowflake</span>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial = "initial"
             animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiMysql  className="text-5xl sm:text-6xl lg:text-7xl" style={{ color: "#00618D" }}/>
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">MySQL</span>

            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial = "initial"
             animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiMicrosoftsqlserver className="text-5xl sm:text-6xl lg:text-7xl" style={{ color: "#CC2927"}}/>
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">SQL Server</span>
            </motion.div>
            <motion.div 
             variants={iconVariants(5)}
             initial = "initial"
              animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiMongodb className="text-5xl sm:text-6xl lg:text-7xl text-green-500"/>
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">MongoDB </span>

            </motion.div>
        </motion.div>
        <motion.h1 
         whileInView={{opacity : 1 , y:0}}
         initial ={{y:-100,opacity:0}}
         transition={{duration : 1.5}}
        className="my-20 text-center text-4xl">{language === "fr" ? "Langage de programmation " : "Programming language "} </motion.h1>

<motion.div 
        whileInView={{opacity : 1 , x:0}}
        initial ={{x:-100,opacity:0}}
        transition={{duration : 1.5}}

        className="flex flex-wrap items-center justify-center gap-4">
             <motion.div 
             variants={iconVariants(4)}
             initial = "initial"
              animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiPython className="text-5xl sm:text-6xl lg:text-7xl text-sky-700" style={{ color: "#3776AB" }}/>
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Python</span>
            </motion.div>
            

            <motion.div 
            variants={iconVariants(2.5)}
            initial = "initial"
             animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiJavascript  className="text-5xl sm:text-6xl lg:text-7xl" style={{ color: "#F7DF1E" }}/>
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Javascript</span>

            </motion.div>
            <motion.div 
             variants={iconVariants(5)}
             initial = "initial"
              animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiPowerbi className="text-5xl sm:text-6xl lg:text-7xl text-green-500" style={{ color: "#F2C811" }}/>
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">DAX </span>
            </motion.div>
        </motion.div>
        <motion.h1 
         whileInView={{opacity : 1 , y:0}}
         initial ={{y:-100,opacity:0}}
         transition={{duration : 1.5}}
        className="my-20 text-center text-4xl">ETL</motion.h1>

<motion.div 
        whileInView={{opacity : 1 , x:0}}
        initial ={{x:-100,opacity:0}}
        transition={{duration : 1.5}}

        className="flex flex-wrap items-center justify-center gap-4">
             <motion.div 
             variants={iconVariants(4)}
             initial = "initial"
              animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiTalend className="text-5xl sm:text-6xl lg:text-7xl text-sky-700" style={{ color: "#0A5D81" }}/>
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Talend</span>
            </motion.div>
            <motion.div 
             variants={iconVariants(5)}
             initial = "initial"
              animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiMicrosoftazure className="text-5xl sm:text-6xl lg:text-7xl" style={{ color: "#0078D4" }} />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Azure DataFactory</span>
            </motion.div>
         
        </motion.div>

        <motion.h1 
         whileInView={{opacity : 1 , y:0}}
         initial ={{y:-100,opacity:0}}
         transition={{duration : 1.5}}
        className="my-20 text-center text-4xl">{language === "fr" ? "DevOps et Automatisation " : " DevOps and Automation "}</motion.h1>

<motion.div 
        whileInView={{opacity : 1 , x:0}}
        initial ={{x:-100,opacity:0}}
        transition={{duration : 1.5}}

        className="flex flex-wrap items-center justify-center gap-4">
             <motion.div 
             variants={iconVariants(4)}
             initial = "initial"
              animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiGitlab className="text-5xl sm:text-6xl lg:text-7xl text-sky-700" style={{ color: "#FC6D26" }}/>
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Gitlab</span>
            </motion.div>
             <motion.div 
             variants={iconVariants(5)}
             initial = "initial"
              animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiDocker className="text-5xl sm:text-6xl lg:text-7xl" style={{ color: "#2496ED" }} />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Docker</span>
            </motion.div>
            <motion.div 
             variants={iconVariants(5)}
             initial = "initial"
              animate = "animate"
            className="relative rounded-2xl border-4 border-neutral-800 p-4 group">
                <SiJenkins className="text-5xl sm:text-6xl lg:text-7xl" style={{ color: "#F06A00" }} />
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 text-sm text-white bg-neutral-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Jenkins</span>
            </motion.div>
         
        </motion.div>
        
    </div>
    
    
  )
}

export default Technologies
