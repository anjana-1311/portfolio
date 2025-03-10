// src/components/Skills.js

import { BadgeCheckIcon, AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data.js";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <AcademicCapIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                         Education &amp; Skills Certification
                    </h1>
                    {/*<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">*/}
                    {/*    My writings include designing and implementing robust data pipelines, ensuring seamless data flow and processing. I follow best coding practices to write clean, maintainable code that adheres to industry standards.*/}
                    {/*</p>*/}
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill.title} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
                                <span className="title-font font-medium text-white">
                                  {skill.title}
                                </span>
                            </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    );
}