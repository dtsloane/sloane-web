import { Separator } from "@/components/ui/separator"
import { Novatrix } from "uvcanvas"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from 'next/link';
import Image from 'next/image';
import profilepic from 'public/profile.pic-2.png'

export default function Home() {
  return (
    <div className="flex p-32 h-screen">
      <div className="flex-column justify-end items-start">
        <div className="absolute top-32 right-32 w-[100px] h-[100px]">
          <Image
            src="/profile.pic-2.png" // Make sure 'profilePic' is correctly imported and named
            alt="Profile Picture"
            layout="fill" // This makes the image fill the container
            style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
          />
        </div>
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
    </div>
  );
}
