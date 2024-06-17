import '../app/globals.css';
import { Separator } from "@/components/ui/separator";
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
    //  more links 
];

const Work = () => {
    return (
        <div className="flex flex-col items-center p-8 md:p-32 min-h-screen">
            <div className="flex flex-col space-y-8 text-left max-w-lg w-full">
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
                        <div className="flex items-center space-x-2 mt-4">
                            <img src="/Cambrean.Logo.png" alt="Cambrean Logo" className="w-6 h-6 rounded transition-transform duration-300 hover:scale-110" />
                            <a href="https://cambrean.com" target="_blank" rel="noopener noreferrer" className="text-sm cursor-pointer transition-opacity duration-150 hover:opacity-25">
                                Cambrean
                            </a>
                            <p className='text-sm text-muted-foreground'>
                                Generate better health insights 
                            </p>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h4 className="text-md md:text-md font-medium">Recognition</h4>
                    <div className='space-y-2'>
                        {recognitionLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-sm text-slate-400 cursor-pointer transition-opacity duration-150 hover:opacity-25 block'
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
