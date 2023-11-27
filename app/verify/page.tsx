"use client"
import Image from 'next/image';
import Link from "next/link";
import Verifier from './verifier';

export default function Verify() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 subpixel-antialiased">
      <div className="top-0 left-0 z-10 w-full items-center justify-evenly font-sans font-bold text-sm lg:flex lg:fixed lg:backdrop-blur-2xl lg:w-screen lg:bg-zinc-800/30 h-24">
        <p className="fixed left-0 top-0 flex w-full justify-center max-lg:bg-zinc-800/30 pb-2 pt-2 dark:from-inherit lg:static lg:w-auto max-lg:backdrop-blur-2xl">
          <Link href="/">
            <Image
              src="/Edubuk-Logo.png"
              alt="Edubuk Logo"
              width={70}
              height={70}
              priority
            />
          </Link>
        </p>
        <div>
        </div>
        <div>
        </div>
        <div className="fixed left-0 bottom-0 flex w-full justify-center max-lg:bg-zinc-800/30 pb-2 pt-2 max-lg:backdrop-blur-2xl max-lg:dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto">
          <ul className="w-full pb-0 text-sm flex justify-evenly">
            <Link href="/about">
              <li className="bg-blue-700 dark:bg-blue-700 hover:bg-white hover:text-blue-700 rounded-xl  duration-200 ease-in-out transition-delay-100 p-4">
                About
              </li>
            </Link>
            <Link href="/eseal">
              <li className="bg-blue-700 dark:bg-blue-700 hover:bg-white hover:text-blue-700 rounded-xl duration-200 ease-in-out transition-delay-100 p-4 lg:ml-5">
                eSeal
              </li>
            </Link>
            <Link href="/verify">
              <li className="bg-blue-700 dark:bg-blue-700 hover:bg-white hover:text-blue-700 rounded-xl  duration-200 ease-in-out transition-delay-100 p-4 lg:ml-5">
                Verify
              </li>
            </Link>
            <Link href="/ceta">
              <li className="bg-blue-700 dark:bg-blue-700 hover:bg-white hover:text-blue-700 rounded-xl  duration-200 ease-in-out transition-delay-100 p-4 lg:ml-5">
                CETA
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex flex-col pb-12 max-sm:pt-12 sm:pt-12 max-md:pt-12 md:pt-10 max-lg:pt-10 lg:pt-40 max-xl:pt-40 xl:pt-44 items-center justify-center">
        <h1 className="text-center font-bold max-sm:text-5xl sm:text-5xl max-md:text-6xl md:text-6xl max-lg:text-7xl lg:text-7xl max-xl:text-8xl xl:text-8xl max-2xl:text-8xl 2xl:text-9xl">
          Verify Certificates
        </h1>
        <div className="px-4 flex flex-col items-center justify-center text-white text-left max-w-5xl">
          <h2 className="max-lg:pt-10 lg:pt-20 font-normal text-center max-sm:text-2xl sm:text-3xl max-md:text-3xl md:text-4xl max-lg:text:4xl">
            Verify Certificates & Transcripts on the Blockchain in a transparent &{' '}<span className="inline-block">tamper-proof</span>{' '}manner
          </h2>
        </div>
        <div id="verifier" className="relative flex items-center justify-center my-12 max-w-5xl mx-4 text-xl text-white font-semibold text-justify max-sm:pt-6 sm:pt-12 md:pt-12">
          <div className="relative bg-transparent backdrop-blur-3xl bg-opacity-100 border border-zinc-700 p-4 rounded-xl">
            <div className="text-center max-sm:text-xl sm:text-2xl md:text-3xl">
              <h1 className="font-extrabold text-4xl">Verifier</h1>
            </div>
            <Verifier />
          </div>
        </div>
      </div>

      <div className="mb-32 flex flex-col lg:flex-row-reverse lg:max-w-5xl lg:w-full lg:justify-evenly lg:mb-0 lg:text-center lg:items-center max-lg:items-center max-lg:justify-between">
        <Link
          href="/eseal"
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white"
          rel="noopener noreferrer"
        >
          <h2 className={`text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none">
              eSeal Certificates
            </span>
            {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link
          href="/"
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white max-lg:mt-5"
          rel="noopener noreferrer"
        >
          <h2 className={`text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transform-none">
              &lt;-
            </span>
            {' '}
            <span className="inline-block transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none">
              Back To Home
            </span>
          </h2>
        </Link>
      </div>
    </main>
  );
}

