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

      <div className="flex flex-col mb-12">
        <Link
          href="https://docs.google.com/spreadsheets/d/1WmeD0Kx45gBSkNOlhdLZTRjoYYbLdcjkHVZP1h2iVO4/edit?usp=sharing"
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white"
          target='_blank'
          rel="noopener noreferrer"
        >
          <h2 className={`text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none">
              Certificate Issuer Lookup
            </span>
            {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>

      <div className="my-12 pb-8">
        <div className="max-sm:w-auto max-w-5xl text-left rounded-xl backdrop-blur-xl bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 bg-opacity-5 flex flex-col">
          <h1 className="text-center font-bold py-4 max-sm:text-lg sm:text-xl md:text-2xl lg:text-3xl px-4">
            How Does Verifier Works?
          </h1>
          <ul className="list-disc px-6 mx-6 my-6 list-outside leading-loose max-sm:text-sm sm:text-lg md:text-xl lg:text-2xl">
            <li>The Certifying Authority registers the authorized certificate on eSealer.</li>
            <li>The eSealer calculates a hash value using a Secure Hashing Algorithm (Cryptography) and send it to Edubuk's smart contract <Link href="https://ccdscan.io/?dcount=1&dentity=contract&dcontractAddressIndex=9387&dcontractAddressSubIndex=0" className="text-sky-400 font-semibold hover:text-emerald-400" target="_blank">(indexed 9387)</Link> on the mainnet of Concordium blockchain to store the record.</li>
            <li>The Verifier takes a Certificate file, calculates it's hash value and send it to Edubuk's smart contract on the mainnet of Concordium blockchain, which takes this filehash and searches for that hash value.</li>
            <li>If the hash value is matched with a value stored with the Edubuk's Smart Contract on the mainnet of Concordium blockchain, then a verified record result is shown in green color.</li>
            <li>But if the certificate is either tampered or forged: whose record is not present on the Concordium blockchain, will get an error in red color.</li>
            <li>If a certificate record is shown to be Verified, you can also lookup for the exact Institute/College/University who was the official "Certifying Authority" by mapping the address of "Certificate Issuer Account" using the "Certificate Issuer Lookup" button, provided above.</li>
          </ul>
        </div>
      </div>


      <div className="mb-32 pb-12 flex flex-col lg:flex-row-reverse lg:max-w-5xl lg:w-full lg:justify-evenly lg:mb-0 lg:text-center lg:items-center max-lg:items-center max-lg:justify-between">
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
    </main >
  );
}

