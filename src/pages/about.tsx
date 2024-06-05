import '../app/globals.css';
import { Separator } from "@/components/ui/separator";

const About: React.FC = () => {
    return (
        <div className="flex flex-row items-start justify-center p-8 md:p-32 min-h-screen">
            <div className="flex flex-col space-y-8 text-left max-w-lg w-full">
                {/* Header Section */}
                <header className="space-y-2">
                    <h1 className="text-lg md:text-md font-medium">About</h1>
                    <h2 className="text-sm text-muted-foreground">Designer, Builder, Founder.</h2>
                </header>
                
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
                            <p className="text-sm text-muted-foreground"> - jailbroke my green 📱iPhone 5c and spent years down rabbit holes.  </p>
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

                {/* Body Section */}
                <section className="space-y-8">
                    <p className="text-sm text-muted-foreground">
                        <a href="mailto:me@davidsloane.xyz" className="text-sm cursor-pointer transition-opacity duration-150 hover:opacity-25">
                            me@davidsloane.xyz
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default About;
