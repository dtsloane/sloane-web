import '../app/globals.css';
import { Separator } from "@/components/ui/separator";

const About = () => {
    return (
        <div className="flex-col p-32 h-screen">
            <div className="space-y-2">
                <h4 className="text-md font-medium">About</h4>
                <p className="text-sm text-muted-foreground">
                  Born in Cork, Ireland. My childhood consisted of kicking a football, jailbreaking iPhones and drawing.  
                </p>
            </div>
            <Separator className='w-5 mt-8'/>
            <div className='mt-8 space-y-2'>
                <p className='text-sm text-muted-foreground'>
                    <a href='mailto:me@davidsloane.xyz' className='text-sm cursor-pointer transition-opacity duration-150 hover:opacity-25'>
                        me@davidsloane.xyz
                    </a>
                </p>
            </div>
        </div>
    );
}

export default About;
