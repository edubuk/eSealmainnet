"use client"
import Image from 'next/image';
import Link from 'next/link';
import ConveyorBeltAwards from './components/conveyorBeltAwards';
import ConveyorBeltCollab from './components/conveyorBeltCollab';
import ConveyorBeltAccelerator from './components/conveyorBeltAccelerator';
import ConveyorBeltSDGs from './components/conveyorBeltSDGs';
import ConveyorBeltTestimonials from './components/conveyorBeltTestimonials';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between subpixel-antialiased">
      <div className="top-0 left-0 z-10 w-full items-center justify-evenly font-sans font-bold text-sm lg:flex lg:fixed lg:backdrop-blur-2xl lg:w-screen lg:bg-zinc-800/30 h-24">
        <p className="fixed left-0 top-0 flex w-full justify-center max-lg:bg-zinc-800/30 pb-2 pt-2 dark:from-inherit lg:static lg:w-auto max-lg:backdrop-blur-2xl">
          <Link
            href="/"
          >
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
          EDUBUK
        </h1>
        <p className="text-center justify-center max-sm:px-6 pt-12 text-white lg:text-3xl max-lg:text-3xl max-sm:text-xl sm:text-xl max-md:text-2xl md:text-2xl max-w-5xl">
          Skilling Youth in Emerging Technologies using no-code AI driven apps powered by Edubuk&apos;s CETA Certification on the Blockchain
        </p>
        <h2 className="font-bold max-sm:pt-8 text-center max-lg:pt-12 lg:pt-12 xl:pt-12 max-sm:text-4xl sm:text-4xl max-md:5xl md:text-5xl max-lg:text-6xl lg:text-6xl max-xl:text-7xl xl:text-7xl max-2xl:text-8xl 2xl:text-8xl">
          eSeal dApp
        </h2>
        <h2 className="max-lg:pt-4 max-sm:px-6 lg:pt-8 text-center max-sm:text-3xl sm:text-3xl max-md:4xl md:text-4xl max-lg:text-5xl lg:text-5xl max-xl:text-6xl xl:text-6xl max-2xl:text-7xl 2xl:text-7xl">
          Powered By <span className="font-bold">Concordium Blockchain</span>
        </h2>
        <p className="text-center justify-center max-sm:pt-8 max-md:pt-16 md:pt-16 max-lg:pt-24 lg:pt-18 text-white lg:text-3xl max-lg:text-3xl max-sm:text-xl sm:text-xl max-md:text-2xl md:text-2xl max-w-5xl max-lg:px-16">
          Record and Verify Certificates and Transcripts on the Blockchain in a transparent and <span className="inline-block">tamper-proof</span>{' '}manner
        </p>
      </div>

      <div className="max-sm:pt-0 sm:pt-4 max-md:pt-4 md:pt-4 max-lg:pt-4 max-lg:pb-14 lg:pt-2 lg:pb-18 flex flex-col lg:flex-row lg:max-w-5xl lg:w-full lg:justify-evenly lg:mb-0 lg:text-center lg:items-center max-lg:items-center max-lg:justify-between">
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
          href="/verify"
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white max-lg:mt-5"
          rel="noopener noreferrer"
        >
          <h2 className={`text-2xl font-semibold`}>
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

      <div id="learner" className="flex text-center flex-col pb-6 max-sm:px-6 max-sm:pt-2 sm:pt-4 max-md:pt-4 md:pt-6 max-lg:pt-6 lg:pt-20 xl:pt-28 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-3xl sm:text-3xl max-md:4xl md:text-4xl max-lg:text-5xl lg:text-5xl max-xl:text-6xl xl:text-6xl max-2xl:text-7xl 2xl:text-7xl">
          Learner&apos;s Edubuk Profile
        </h2>
        <h2 className="text-center pt-2 font-semibold max-sm:text-3xl sm:text-3xl max-md:4xl md:text-4xl max-lg:text-5xl lg:text-5xl max-xl:text-6xl xl:text-6xl max-2xl:text-7xl 2xl:text-7xl">
          On The Blockchain
        </h2>

        <Image
          src="/learner.png"
          className="max-sm:pt-10 sm:pt-10 max-sm:px-8 sm:px-12"
          alt="Learner's Edubuk Profile on Blockchain"
          width={700}
          height={80}
        />
      </div>

      <div id="collaborators" className="flex text-center flex-col max-sm:pt-16 sm:pt-16 max-md:pt-16 md:pt-20 max-lg:pt-28 lg:pt-28 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-3xl sm:text-3xl max-md:4xl md:text-4xl max-lg:text-5xl lg:text-5xl max-xl:text-6xl xl:text-6xl max-2xl:text-7xl 2xl:text-7xl">
          Our Collaborators & Supporters
        </h2>

        <ConveyorBeltCollab />
      </div>

      <div id="accelerator" className="flex text-center flex-col max-sm:pt-16 sm:pt-16 max-md:pt-16 md:pt-20 max-lg:pt-28 lg:pt-28 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-3xl sm:text-3xl max-md:4xl md:text-4xl max-lg:text-5xl lg:text-5xl max-xl:text-6xl xl:text-6xl max-2xl:text-7xl 2xl:text-7xl">
          Completed Accelerator Programs
        </h2>

        <ConveyorBeltAccelerator />
      </div>

      <div id="awards" className="flex text-justify flex-col max-sm:pt-16 sm:pt-16 max-md:pt-16 md:pt-20 max-lg:pt-28 lg:pt-28 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-3xl sm:text-3xl max-md:4xl md:text-4xl max-lg:text-5xl lg:text-5xl max-xl:text-6xl xl:text-6xl max-2xl:text-7xl 2xl:text-7xl">
          Awards & Recognition
        </h2>

        <p className="w-4/5 max-sm:pt-8 sm:pt-12 lg:pt-16 lg:px-14 max-w-5xl max-sm:text-xl sm:text-xl max-md:text-2xl md:text-2xl">
          Edubuk&apos;s patent published model is globally award winning and recognized by various reputed organizations including G20 Summit in Indonesia (2022).
          Best Edtech Startup Jury’s choice out of 100 Startups, CNN, Financial Times, MIT University, Harvard University in the US, World Economic Forum (Davos, Jan 2023), AWS Edstart, IIT Bombay, IIT Kharagpur, IIM Calcutta, Polygon Blockchain, Cardano Blockchain, The HINDU, CNBC, MoneyControl, RaiseMoney, IDFC-First Bank, Inc. 42, NASSCOM, State Government of Telangana (India), Dubai Expo 2020, TiE Delhi, TiE Mumbai, Data Innovation Bazaar, Telangana AI-Mission, Bombay Stock Exchange&apos;s Impact Startups, TimesNext, European Digital University, among many others.
        </p>

        <ConveyorBeltAwards />
      </div>

      <div id="testimonials" className="backdrop-grayscale w-full flex text-center flex-col max-sm:pt-16 sm:pt-10 max-md:pt-16 md:pt-20 max-lg:pt-28 lg:pt-28 items-center justify-center pb-12">
        <h2 className="text-center font-semibold max-sm:text-3xl sm:text-3xl max-md:4xl md:text-4xl max-lg:text-5xl lg:text-5xl max-xl:text-6xl xl:text-6xl max-2xl:text-7xl 2xl:text-7xl">
          Testimonials
        </h2>

        <ConveyorBeltTestimonials />
      </div>

      <div id="unsdgs" className="flex text-center flex-col max-sm:pt-16 sm:pt-10 max-md:pt-16 md:pt-20 max-lg:pt-28 lg:pt-28 items-center justify-center backdrop-hue-rotate-60 w-full">
        <h2 className="text-center font-semibold max-sm:text-3xl sm:text-3xl max-md:4xl md:text-4xl max-lg:text-5xl lg:text-5xl max-xl:text-6xl xl:text-6xl max-2xl:text-7xl 2xl:text-7xl">
          UN SDG&apos;s Compliance
        </h2>

        <Image
          src="/unlogo.png"
          className="max-md:pt-12 max-lg:pt-16 max-sm:px-8 sm:pt-12"
          alt="United Nations"
          width={400}
          height={80}
        />

        <h2 className="max-sm:pt-8 sm:pt-10 max-md:pt-16 md:pt-24 max-lg:pt-24 lg:pt-28 text-center max-sm:text-xl sm:text-xl max-md:2xl md:text-2xl max-lg:text-3xl lg:text-3xl max-lg:px-12 lg:max-w-5xl lg:px-12 xl:px-0">
          Edubuk is committed and aligned towards United Nation&apos;s Sustainable Development Goals (UN SDGs)
        </h2>

        <ConveyorBeltSDGs />
      </div>
    </main>
  )
}
