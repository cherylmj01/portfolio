import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from "next/image";

export default function Projects() {
  return (
    <section className="py-8">
        <SectionHeading>My projects</SectionHeading>
        <div className="space-y-4">
           {
           projectsData.map((project, index) => (
            <React.Fragment key={index}>
                <Project {...project} />
            </React.Fragment>
           ))} 
        </div>
    </section>
  )
}

type ProjectProps =  typeof projectsData[number];
// This is how we can make properties optional in TypeScript
// type ProjectData = typeof projectsData[number];
// type ProjectProps = Omit<ProjectData, 'demoLink' | 'sourceLink'> & {
//     demoLink?: string;
//     sourceLink?: string;
// };

function Project({
    title,
    description,
    tags,
    demoLink,
    sourceLink,
    imageUrl
}:ProjectProps) {
    return (
        <section 
        className="bg-gray-100 max-w-[42rem] border-black/5 rounded-lg 
        overflow-hidden sm:pr-8"
        >
            <h3 
            className="text-2xl font-semibold">
                {title}
            </h3>
            <p className="mt-2 leading-relaxed text-gray-700">
                {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2">
                {tags.map((tag, index)=> (
                    <li 
                    className="bg-black/[0.7] px-3 
                    py-1 text-[0.7rem] uppercase
                    tracking-wider text-white rounded-full" 
                    key={index}>{tag}</li>
                ))}
            </ul>
            <a href={demoLink}>Live Demo</a>
            <a href={sourceLink}>View Source</a>
            <div>
            <Image 
            src={imageUrl} 
            alt="Project I worked on"
            quality = {95}
            className= "absolute" />
            </div>
            </section>
    );
}
