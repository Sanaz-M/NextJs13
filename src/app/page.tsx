import LargeHeading from "@/ui/LargeHeading";
import Paragraph from "@/ui/Paragraph";

import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';


//Next.js has a Metadata API that can be used to define your application metadata 
//(e.g. meta and link tags inside your HTML head element) for improved SEO and web shareability.
export const metadata: Metadata = {
  title: "Similarity API",
  description: "Clone- Free & open-source text similarity API",
};


export default function Home() {
  return (
    <main className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
            Easily determine <br /> text similarity.
          </LargeHeading>

          <Paragraph className='max-w-xl lg:text-left'>
            With the Text Similarity API, you can easily determine the
            similarity between two pieces of text with a free{' '}
            <Link
              href='/login'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
              API key
            </Link>
            .
          </Paragraph>

          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/typewriter.png'
              alt='typewriter'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
