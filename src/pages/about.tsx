import '../app/globals.css';
import { Separator } from "@/components/ui/separator";

const About = () => {
    return (
        <div className="flex flex-col items-center p-8 md:p-32 h-screen">
            <div className="flex flex-col space-y-8 text-left max-w-lg w-full">
                <div className="space-y-2">
                    <h4 className="text-lg md:text-md font-medium">About</h4>
                    <p className="text-sm text-muted-foreground">
                      Designer, Builder, Founder. 
                      Was alright at kicking a football around too. 
                    </p>
                </div>
                <Separator className='w-full' />
                <div className='space-y-2'>
                    <p className='text-sm text-muted-foreground'>
                        <a href='mailto:me@davidsloane.xyz' className='text-sm cursor-pointer transition-opacity duration-150 hover:opacity-25'>
                            me@davidsloane.xyz
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
