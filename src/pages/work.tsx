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

const recognitionLinks = [
    {
        href: 'https://www.independent.ie/business/irish/30-under-30-young-guns-who-are-shooting-for-the-stars/41045671.html',
        text: "30 under 30 (independent)",
    },
    {
        href: 'https://x.com/ProductHunt/status/1699101383629443306',
        text: 'Product Hunt',
    },
    {
        href: 'https://www.businesspost.ie/connected/irish-techs-young-guns-this-years-30-under-30/',
        text: '30 under 30 (business post)',
    },
    // more links
];

const Work = () => {
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
                            <BreadcrumbPage>Work</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="mb-8">
                    <h4 className="text-lg md:text-md font-medium">Work</h4>
                    <div className="space-y-4">
                        <a href="https://cambrean.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 mt-4 transition-colors duration-150 hover:bg-gray-100 p-2 rounded-lg">
                            <img src="/Cambrean.Logo.png" alt="Cambrean Logo" className="w-7 h-7 rounded-lg transition-transform duration-300 hover:scale-110" />
                            <div className='flex-col'>
                                <span className="text-sm cursor-pointer">
                                    Cambrean
                                </span>
                                <p className='text-sm text-muted-foreground'>
                                    Generate better health insights
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='space-y-2 pt-8'>
                    <h4 className="text-md md:text-md font-medium">Recognition</h4>
                    <div className='space-y-2'>
                        {recognitionLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-sm text-slate-400 hover:text-slate-500 cursor-pointer transition-colors duration-150 hover:bg-gray-100 p-2 rounded-lg block'
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Work;
