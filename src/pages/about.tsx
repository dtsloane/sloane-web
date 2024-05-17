import '../app/globals.css';
import { Separator } from "@/components/ui/separator";

const About = () => {
    return (
        <div className="flex flex-col items-center p-8 md:p-32 h-screen">
            <div className="flex flex-col space-y-8 text-left max-w-lg w-full">
                {/* Header Section */}
                <header className="space-y-2">
                    <h1 className="text-lg md:text-md font-medium">About</h1>
                    <h2 className="text-sm text-muted-foreground">Designer, Builder, Founder.</h2>
                </header>
                
                {/* Body Section */}
                <section className="space-y-6">
                    <p className="text-sm text-muted-foreground">
                        <a href="mailto:me@davidsloane.xyz" className="text-sm cursor-pointer transition-opacity duration-150 hover:opacity-25">
                            me@davidsloane.xyz
                        </a>
                    </p>
                </section>
                
                {/* Timeline Section */}
                <section className="space-y-6">
                    <div className="timeline">
                        <div className="timeline-item">
                            <span className="text-sm ">2019 - 2020 </span>
                            <p className="text-sm text-muted-foreground"> - played football, painted, read a lot about economics.</p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm ">2020 - 2021 </span>
                            <p className="text-sm text-muted-foreground"> - played more football, read a lot of books, studied, started swift development again.</p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm ">2021 - 2022 </span>
                            <p className="text-sm text-muted-foreground"> - started a company, deferred my comp sci spot in college , went to work.</p>
                        </div>
                        <div className="timeline-item">
                            <span className="text-sm">2022 - now </span>
                            <p className="text-sm text-muted-foreground"> - still at work.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;
