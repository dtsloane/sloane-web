import '../app/globals.css';
import { Separator } from "@/components/ui/separator";

const Work = () => {
    return (
        <div className="flex flex-col items-center p-8 md:p-32 h-screen">
            <div className="flex flex-col space-y-8 text-left max-w-lg w-full">
                <div className="space-y-2">
                    <h4 className="text-lg md:text-md font-medium">Work</h4>
                    <p className="text-sm space-y-2">
                        <a href="https://cambrean.com" target="_blank" rel="noopener noreferrer" className="text-sm cursor-pointer transition-opacity duration-150 hover:opacity-25">
                            Cambrean
                        </a>
                    </p>
                    <p className='text-sm text-muted-foreground'>
                        Generate better health insights 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Work;
