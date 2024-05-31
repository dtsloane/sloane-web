import { Separator } from "@/components/ui/separator"
import { Novatrix } from "uvcanvas"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from 'next/link';
import Image from 'next/legacy/image';
import './globals.css';

export default function Home() {
  return (
    <div className="flex flex-row items-start justify-center p-8 md:p-32 h-screen">
      <div className="flex flex-col items-start space-y-4 w-full md:w-auto text-left">
        <h4 className="text-lg md:text-md font-medium leading-none">David Sloane</h4>
        <p className="text-sm text-muted-foreground">Designer, Founder.</p>
        <div className="pt-8 space-y-2">
          <Link href="/about" passHref>
            <p className="cursor-pointer pt-2 text-sm text-muted-foreground transition-opacity duration-150 hover:opacity-25">
              about
            </p>
          </Link>
          <Link href="/design" passHref>
            <p className="cursor-pointer pt-2 text-sm text-muted-foreground transition-opacity duration-150 hover:opacity-25">
              design
            </p>
          </Link>
          <Link href="/work" passHref>
            <p className="cursor-pointer pt-2 text-sm text-muted-foreground transition-opacity duration-150 hover:opacity-25">
              work
            </p>
          </Link>
        </div>
      </div>
      <div className="ml-4 md:ml-64 mt-0 flex-shrink-0 w-[100px] h-[100px] border-2 border-slate-300 relative">
        <Image
          src="/BW-david.profile  copy.jpeg"
          alt="Profile Picture"
          layout="fill"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
