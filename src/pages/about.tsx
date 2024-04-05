import 'tailwindcss/tailwind.css';

export default function About() {
    return (
        <div className="flex p-32 h-screen space-y-2">
            <div className="space-y-2">
                <h4 className="text-md font-medium">About</h4>
                <p className="text-sm text-muted-foreground">
                Born in Cork, Ireland in '02. 
                </p>
            </div>
        </div>
    );
}
