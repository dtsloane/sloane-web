import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="space-y-1">
        <h4 className="text-md font-medium leading-none">David Sloane</h4>
        <p className="text-sm text-muted-foreground">
        Designer, Founder. 
        </p>
      </div>
      <Separator className="my-4 max-w-36" />
      <div className="flex h-5 space-x-4 text-sm">
      <div>Work</div>
      <Separator orientation="vertical" />
      <div>Notes</div>
    </div>
  </div>
  );
}


