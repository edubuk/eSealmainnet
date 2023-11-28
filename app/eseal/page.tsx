"use client"
import Image from 'next/image';
import Link from "next/link";
import Sealer from './sealer';
import { TESTNET, WithWalletConnector } from '@concordium/react-components';

export default function Eseal() {
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

      <div className="flex flex-col max-sm:pb-6 sm:pb-8 md:pb-10 lg:pb-12 max-sm:pt-12 sm:pt-12 max-md:pt-12 md:pt-10 max-lg:pt-10 lg:pt-40 max-xl:pt-40 xl:pt-44 items-center justify-center">
        <h1 className="text-center font-bold max-sm:text-4xl sm:text-4xl max-md:text-5xl md:text-5xl max-lg:text-6xl lg:text-6xl max-xl:text-6xl xl:text-7xl max-2xl:text-7xl 2xl:text-8xl">
          eSeal Certificates
        </h1>
        <div className="px-4 flex flex-col items-center justify-center text-white text-left max-w-5xl">
          <h2 className="max-lg:pt-10 lg:pt-20 font-normal text-center max-sm:text-lg sm:text-xl max-md:text-xl md:text-2xl max-lg:text:2xl lg:text-2xl">
            Record Your Certificates & Transcripts on the Blockchain in a transparent & <br />tamper-proof manner.
          </h2>
        </div>
        <div id="esealer" className="relative flex items-center justify-center max-sm:my-6 sm:my-8 md:my-10 lg:my-12 max-w-5xl mx-4 text-xl text-white font-semibold text-justify max-sm:pt-6 sm:pt-12 md:pt-12">
          <div className="relative bg-transparent backdrop-blur-3xl bg-opacity-100 border border-zinc-700 p-4 rounded-xl">
            <div className="text-center max-sm:text-xl sm:text-2xl md:text-3xl">
              <h1 className="font-extrabold max-sm:text-2xl sm:text-3xl md:text-4xl">eSealer</h1>
            </div>
            <WithWalletConnector network={TESTNET}>{(props) => <Sealer {...props} />}</WithWalletConnector>
          </div>
        </div>
      </div>

      <div className="max-sm:pb-10 sm:pb-14 md:pb-16 lg:pb-20 flex flex-col lg:flex-row-reverse lg:max-w-5xl lg:w-full lg:justify-evenly lg:mb-0 lg:text-center lg:items-center max-lg:items-center max-lg:justify-between">
        <Link
          href="/verify"
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white max-lg:mt-5"
          rel="noopener noreferrer"
        >
          <h2 className={`max-sm:text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none">
              Verify Certificates
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
          <h2 className={`max-sm:text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:-translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transform-none">
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

