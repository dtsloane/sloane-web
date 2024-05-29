import '../app/globals.css';
import { Separator } from "@/components/ui/separator";

const Work = () => {
    return (
        <div className="flex flex-col items-center p-8 md:p-32 min-h-screen">
            <div className="flex flex-col space-y-8 text-left max-w-lg w-full">
                <div className="space-y-2">
                    <h4 className="text-lg md:text-md font-medium">Work</h4>
                    <div className="space-y-4"> {/* Adjusted spacing here */}
                        <div className="flex items-center space-x-2 mt-4"> {/* Added mt-4 to this div for spacing */}
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
            </div>
        </div>
    );
}

export default Work;
