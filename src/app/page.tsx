import { Separator } from "@/components/ui/separator"
import { Novatrix } from "uvcanvas"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex p-32 h-screen">
      <div className="space-y-2">
        <h4 className="text-md font-medium leading-none">David Sloane</h4>
        <p className="text-sm text-muted-foreground">
          Designer, Founder.
        </p>
        <div className="pt-8">
          <Link href="/about" passHref>
            <p className="cursor-pointer pt-2 text-sm text-muted-foreground transition-opacity duration-150 hover:opacity-25">
              about
            </p>
          </Link>
          <Link href="/about" passHref>
            <p className="cursor-pointer pt-2 text-sm text-muted-foreground transition-opacity duration-150 hover:opacity-25">
              design
            </p>
          </Link>
          <Link href="/about" passHref>
            <p className="cursor-pointer pt-2 text-sm text-muted-foreground transition-opacity duration-150 hover:opacity-25">
              work
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
