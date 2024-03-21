"use client"
import Image from 'next/image';
import Link from "next/link";

export default function Ceta() {
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
            <Link href="/">
              <li className="bg-blue-700 dark:bg-blue-700 hover:bg-white hover:text-blue-700 rounded-xl  duration-200 ease-in-out transition-delay-100 p-4 lg:ml-5">
                Home
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex flex-col pb-12 max-sm:pt-12 sm:pt-12 max-md:pt-12 md:pt-10 max-lg:pt-10 lg:pt-40 max-xl:pt-40 xl:pt-40 items-center justify-center">
        <h1 className="text-center font-bold max-sm:text-4xl sm:text-4xl max-md:text-5xl md:text-5xl max-lg:text-6xl lg:text-6xl max-xl:text-6xl xl:text-7xl max-2xl:text-7xl 2xl:text-8xl">
          CETA Program
        </h1>
        <div className="px-4 flex flex-col items-center justify-center text-white  max-w-5xl">
          <h2 className="max-lg:pt-10 lg:pt-20 font-bold text-center max-sm:text-xl sm:text-2xl max-md:text-2xl md:text-3xl max-lg:text:3xl">
            Certified Emerging Technologies Analyst
          </h2>
          <p className="px-4 max-sm:pb-8 sm:pb-10 md:pb-12 lg:pb-16 max-w-5xl max-lg:pt-12 lg:pt-24 text-left max-sm:text-sm sm:text-lg max-md:text-lg md:text-xl max-lg:text:xl lg:text-2xl">
            Edubuk&apos;s CETA Program offers combined and standalone courses in the following highly <span className="inline-block">in-demand</span> Emerging Technologies:
          </p>

          <div className="max-sm:w-auto max-w-xl text-left rounded-xl backdrop-blur-xl bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 bg-opacity-5">
            <ul className="list-disc p-6 ml-6 list-outside leading-loose max-sm:text-sm sm:text-lg md:text-xl lg:text-2xl">
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Blockchain & Distributed Ledger Technology (Web3, NFTs, Asset Tokenization)</li>
              <li>Cybersecurity</li>
              <li>Cloud Computing</li>
              <li>Data Science</li>
              <li>Robotics & Drones</li>
              <li>Internet of Things (IoT) & Internet of Behavior (IoB)</li>
              <li>Augmented Reality (AR), Virtual Reality (VR), Mixed Reality (MR) & Metaverse</li>
              <li>3D Printing</li>
            </ul>
          </div>

          <div className="max-md:pb-4 md:pb-8 max-w-5xl max-lg:pt-6 flex flex-col items-center justify-center lg:pt-4 text-left max-sm:text-sm sm:text-lg max-md:text-lg md:text-xl lg:text-2xl">
            <p className="px-4 max-sm:pb-8 sm:pb-10 md:pb-12 lg:pb-16 max-w-5xl max-md:pt-6 md:pt-12 text-center max-sm:text-sm sm:text-lg max-md:text-lg md:text-xl max-lg:text:xl lg:text-2xl">
              Our Comprehensive Certified Emerging Technologies Analyst (CETA) Program is carefully designed across three progressive levels:
            </p>

            <div className="max-sm:w-auto max-w-xl text-left rounded-xl backdrop-blur-xl bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 bg-opacity-5">
              <ul className="list-disc p-6 ml-6 list-outside leading-loose">
                <li>Fundamental (Level 1)</li>
                <li>Intermediate (Level 2)</li>
                <li>Expert (Level 3)</li>
              </ul>
            </div>
          </div>

          <div id="cetavideo" className="scroll-mt-24 max-md:pt-6 md:pt-12 pb-8 flex flex-col justify-center items-center">
            <h2 className="pt-6 pb-12 md:pb-12 font-bold text-center max-sm:text-xl sm:text-2xl max-md:text-2xl md:text-3xl max-lg:text:3xl lg:text-4xl max-xl:text-4xl xl:text-5xl max-2xl:text-5xl 2xl:text-5xl">
              CETA Program Video
            </h2>
            <iframe className="max-sm:w-auto max-sm:h-full" width={640} height={360}
              src="https://www.youtube.com/embed/9NVqhfgZBtE?autoplay=0&color=#1E88E5&origin=http://edubukeseal.vercel.app"
            ></iframe>
          </div>

          <p className="max-w-5xl max-sm:pt-4 sm:pt-8 md:pt-12 lg:pt-24 text-justify font-semibold max-sm:text-sm sm:text-lg max-md:text-lg md:text-xl max-lg:text:xl lg:text-2xl">
            One of the key highlights of the CETA Certification is its accessibility to learners (age 15 years to 60 years+) from all academic backgrounds.
            You don&apos;t need any prior coding or computer science experience to participate and excel in this program.
            Our primary focus lies in empowering learners with no-code and low-code modules, enabling them to harness the power of emerging technologies without getting bogged down in complex programming.
            Our curriculum includes modules on no-code based groundbreaking generative AI applications such as ChatGPT (Text to Text, AI), MidJourney (Text to Image AI), Synthesia, and Wave.Video (Text to Video AI), WIX (Text to Website, AI).
          </p>
        </div>
      </div>

      <div className="max-sm:pb-10 sm:pb-14 md:pb-16 lg:pb-20 flex flex-col lg:flex-row lg:max-w-5xl lg:w-full lg:justify-evenly lg:mb-0 lg:text-center lg:items-center max-lg:items-center max-lg:justify-between">
        <Link
          href="https://edubuk.co.in/"
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white"
          target='_blank'
          rel="noopener noreferrer"
        >
          <h2 className={`max-sm:text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none">
              Enroll For CETA Program
            </span>
          </h2>
        </Link>

        <Link
          href="https://edubuk.co.in/"
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white max-lg:mt-5"
          target='_blank'
          rel="noopener noreferrer"
        >
          <h2 className={`max-sm:text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none">
              Recruit CETA Professionals
            </span>
          </h2>
        </Link>
      </div>

      <div className="max-sm:pb-10 sm:pb-14 md:pb-16 lg:pb-20 flex flex-col lg:flex-row lg:max-w-5xl lg:w-full lg:justify-evenly lg:mb-0 lg:text-center lg:items-center max-lg:items-center max-lg:justify-between">
        <Link
          href="/eseal"
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white"
          rel="noopener noreferrer"
        >
          <h2 className={`max-sm:text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold`}>
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
          href="/verify"
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white max-lg:mt-5"
          rel="noopener noreferrer"
        >
          <h2 className={`max-sm:text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold`}>
            <span className="inline-block transition-transform group-hover:-translate-y-0.5 motion-reduce:transform-none">
              Verify Certificates
            </span>
            {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>
    </main>
  );
}

