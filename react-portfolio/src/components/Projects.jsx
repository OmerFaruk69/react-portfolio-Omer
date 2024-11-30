import {PROJECTS} from "../constants"
import { useLanguage } from "./traduction"; 

const Projects = () => {
    const { language } = useLanguage();
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-10 sm:my-20 text-center text-4xl"> {language === "fr" ? "Projet Personnel" : "Personal Project"} </h1>
            <div>
                {PROJECTS.map((project , index) => (
                    <div key = {index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full w-4/4 lg:w-1/4">
                        <img 
                            src={project.fr.image}
                            width={150}
                            height={150}
                            alt={project.title}
                            className="mb-6 rounded mx-auto w-3/4 lg:w-2/4"
                        />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{language === "fr" ? project.fr.title : project.en.title } </h6>
                            <p className="mb-4 text-neutral-400">{language === "fr" ? project.fr.description : project.en.description }</p> 
                            <div className="flex flex-wrap gap-x-1 gap-y-0 mt-4 justify-center items-center lg:justify-start lg:items-start">
                            {project.fr.technologies.map((tech , index) => (
                                <span
                                key={index} className="mr-2 rouded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"> 
                                {tech}
                                </span>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
