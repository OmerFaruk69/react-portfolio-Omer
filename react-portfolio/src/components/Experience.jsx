import { EXPERIENCES } from "../constants"
import { useLanguage } from "./traduction"; 

const Experience = () => {
    const { language } = useLanguage();
    return (
        <div className="border b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                Experience
            </h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400"> {language === "fr" ? experience.fr.year : experience.en.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w:3/4">

                            <h6 className="mb-2 font-semibold">
                                {experience.fr.role} - <span className="text-sm text-purple-100">
                                    {language === "fr" ? experience.fr.company : experience.en.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">
                                {language === "fr" ? experience.fr.description : experience.en.description}
                            </p>
                            <ul className="mb-4 list-disc list-inside text-neutral-400 space-y-2">
                                {language === "fr" ? experience.fr.element.map((task, index) => (
                                    <li key={index}>{task}</li>
                                )) : experience.en.element.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-x-1 gap-y-0 mt-4 justify-center items-center lg:justify-start lg:items-start">

                            {language === "fr" ? experience.fr.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 mt-2 rouded bg-neutral-900 px-2 py-1  text-sm font-mediuù text-purple-800"
                                >{tech}</span>
                            )) : experience.en.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 mt-2 rouded bg-neutral-900 px-2 py-1 text-sm font-mediuù text-purple-800"
                                >{tech}</span>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
