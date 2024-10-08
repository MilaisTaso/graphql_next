import Image from 'next/image';
import Link from 'next/link';

import { LogIn } from 'lucide-react';

import { Logo } from '@/app/components/logo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <Logo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg border-2 px-6 py-10 md:w-2/5 md:gap-8 md:px-20">
          <p className="text-center text-xl md:text-3xl md:leading-normal">
            Welcome to ...
            <br />
            <strong className="text-3xl md:text-5xl">TODO-GraphQL.</strong>
            <br />
            <span className="text-lg md:text-2xl">
              This is the example for Next.js + GraphQL
            </span>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <LogIn className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screen of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screen of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
