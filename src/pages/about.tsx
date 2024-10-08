"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { motion } from 'framer-motion';
import '../app/globals.css';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";


const About: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <motion.div 
            className={`flex flex-row items-start justify-center p-8 md:p-32 min-h-screen ${isLoaded ? 'no-blur' : 'blur-effect'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div 
                className={`flex flex-col space-y-8 text-left max-w-lg w-full ${isLoaded ? 'no-blur' : 'blur-effect'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Back</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>About</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="mb-2">
                    <h4 className="text-lg md:text-md font-medium">Timeline</h4>
                </div>

                {/* Timeline Section */}
                <section className="space-y-6">
                    <div className="timeline space-y-6">
                        <div className="timeline-item">
                            <span className="text-sm">2002 </span>
                            <p className="text-sm text-muted-foreground"> - 🚼 birth.</p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm">2011 - 2012 </span>
                            <p className="text-sm text-muted-foreground"> - jailbroke my iPod touch.</p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm">2013 - 2014 </span>
                            <p className="text-sm text-muted-foreground"> - jailbroke my green 📱iPhone 5c & started hacking around.  </p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm">2014 - 2015 </span>
                            <p className="text-sm text-muted-foreground"> - started building a YouTube channel on Jailbreaking, Google Adsense was my first employer.</p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm">2015 - 2016 </span>
                            <p className="text-sm text-muted-foreground"> - learned photoshop, 🎥 final cut pro, audio / film and slowly gravitated toward design 🖼️.</p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm">2019 - 2020 </span>
                            <p className="text-sm text-muted-foreground"> - played football, painted & studied economics.</p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm">2020 - 2021 </span>
                            <p className="text-sm text-muted-foreground"> - played more football ⚽️, read a lot of books, studied, wrote exams & started swift development again.</p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm">2021 - 2022 </span>
                            <p className="text-sm text-muted-foreground"> - started a company, deferred my computer science spot in college 🎓, went to work.</p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm">2022 - now </span>
                            <p className="text-sm text-muted-foreground"> - still at work.</p>
                        </div>
                    </div>
                </section>

                
            </motion.div>
        </motion.div>
    );
}

export default About;
