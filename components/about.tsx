"use client";

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  
  const { ref } = useSectionInView ("About", 0.75); 
  
  return (
    <motion.section
    ref = {ref} 
    className="mb-28 max-w-[45rem] 
    text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity : 0, y : 100 }}
    animate = {{ opacity : 1, y : 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        With a foundation in <span className="font-bold">Computer Science</span> 
        and a rich five-year tenure as a Solution Architect, 
        I’ve turned my passion for technology into a career focused on building innovative solutions. 
        I specialize in <span className="font-bold">Python, JavaScript, and SQL</span>, 
        bringing ideas to life through code.
        </p>

        <p className="mb-3">
            <span className="font-underline">I am driven</span> by the thrill of creating and enhancing functionalities, 
            constantly seeking to bridge the gap between data analysis and actionable insights. 
            My current focus lies in the dynamic fields of 
            <span className="font-bold"> Machine Learning and Artificial Intelligence</span>.
        </p>

        <p className="mb-3">
            <span className="italic">Beyond the screen</span>, 
            I’m a globe-trotter, culinary explorer, and a fan of hands-on crafts like crochet and painting. 
            These diverse interests fuel my creativity and broaden my perspective, enriching my professional and personal life.
        </p>

        <p className="mb-3">
            Whether coding or exploring, I am always on a quest to learn and grow, 
            embracing new challenges and opportunities to innovate.
        </p>

    </motion.section>
  )
}
