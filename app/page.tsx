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
        <h1 className="text-center font-bold max-sm:text-4xl sm:text-4xl max-md:text-5xl md:text-5xl max-lg:text-6xl lg:text-6xl max-xl:text-6xl xl:text-7xl max-2xl:text-7xl 2xl:text-8xl">
          EDUBUK
        </h1>
        <p className="text-center justify-center max-sm:px-6 pt-8 text-white lg:text-2xl max-lg:text-2xl max-sm:text-lg sm:text-lg max-md:text-xl md:text-xl max-w-5xl">
          Digitally Record & Verify Educational Transcripts and Work-Experience Certificates on Blockchain making Background Verification Process Significantly Cheaper & Faster
        </p>
        <div className="relative flex flex-col">
          <h2 className="font-bold max-sm:pt-6 text-center max-lg:pt-12 lg:pt-12 max-sm:text-3xl sm:text-3xl max-md:4xl md:text-4xl max-lg:text-5xl lg:text-5xl max-xl:text-5xl xl:text-6xl max-2xl:text-6xl 2xl:text-7xl">
            eSeal dApp
          </h2>
          <div className="max-lg:pt-4 max-sm:px-6 lg:pt-8 text-center max-sm:text-3xl sm:text-3xl max-md:4xl md:text-4xl max-lg:text-5xl lg:text-5xl max-xl:text-6xl xl:text-6xl max-2xl:text-7xl 2xl:text-7xl">
            <Link href="https://concordium.com" target='_blank'>
              <Image
                src="/concordium-light.svg"
                alt="Concordium"
                layout='responsive'
                width={768}
                height={300}
                priority
                className="max-w-xl mx-auto px-12 lg:px-16"
              />
            </Link>
          </div>
        </div>
        <p className="text-center justify-center max-sm:pt-4 max-md:pt-8 md:pt-12 max-lg:pt-12 lg:pt-12 text-white lg:text-2xl max-lg:text-2xl max-sm:text-lg sm:text-lg max-md:text-xl md:text-xl max-w-5xl max-lg:px-16">
          Collaborated and MoU signed with World’s 4th Largest NACES (National Association of Credential Evaluation Services) Member: IEE (International Educational Evaluation) in the US. <Link href="https://myiee.org/university/edubuk" className="text-sky-400 font-semibold hover:text-emerald-400" target="_blank">Click Here to Know More.</Link> 
        </p>
      </div>

      <div className="flex flex-col md:flex-row lg:max-w-5xl lg:w-full lg:justify-evenly lg:text-center lg:items-center max-lg:items-center max-lg:justify-between max-sm:pb-8 sm:pb-10 md:pb-12 lg:pb-14">
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
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white max-md:mt-5 max-md:ml-0 max-lg:ml-5 lg:ml-0"
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

      <div id="learner" className="flex text-center flex-col pb-6 max-sm:px-6 max-sm:pt-2 sm:pt-4 max-md:pt-4 md:pt-6 max-lg:pt-6 lg:pt-20 xl:pt-28 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-2xl sm:text-2xl max-md:2xl md:text-3xl max-lg:text-4xl lg:text-4xl max-xl:text-5xl xl:text-5xl max-2xl:text-6xl 2xl:text-6xl">
          Learner&apos;s Edubuk Profile
        </h2>
        <h2 className="text-center font-semibold max-sm:text-2xl sm:text-2xl max-md:2xl md:text-3xl max-lg:text-4xl lg:text-4xl max-xl:text-5xl xl:text-5xl max-2xl:text-6xl 2xl:text-6xl">
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

      <div id="learner" className="flex text-center flex-col pb-6 max-sm:px-6 max-sm:pt-2 sm:pt-4 max-md:pt-4 md:pt-6 max-lg:pt-6 lg:pt-20 xl:pt-28 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-2xl sm:text-2xl max-md:2xl md:text-3xl max-lg:text-4xl lg:text-4xl max-xl:text-5xl xl:text-5xl max-2xl:text-6xl 2xl:text-6xl">
          Edubuk: Winner, G20 Conference, Indonesia 2022: 
        </h2>
        <h2 className="text-center justify-center max-sm:pt-4 max-md:pt-8 md:pt-12 max-lg:pt-12 lg:pt-12 text-white lg:text-2xl max-lg:text-2xl max-sm:text-lg sm:text-lg max-md:text-xl md:text-xl max-w-5xl max-lg:px-16">
          Best Startup, Jury's Choice
        </h2>

        <Image
          src="/G20 Award.jpg"
          className="max-sm:pt-10 sm:pt-10 max-sm:px-8 sm:px-12"
          alt="Edubuk and IEE Flyer"
          width={395}
          height={591}
        />
      </div>

      <div id="collaborators" className="flex text-center flex-col max-sm:pt-4 sm:pt-6 max-md:pt-6 md:pt-8 max-lg:pt-8 lg:pt-12 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-2xl sm:text-2xl max-md:2xl md:text-3xl max-lg:text-4xl lg:text-4xl max-xl:text-5xl xl:text-5xl max-2xl:text-6xl 2xl:text-6xl">
          Our Collaborators & Supporters
        </h2>

        <ConveyorBeltCollab />
      </div>

      <div id="collaborators" className="flex text-center flex-col max-sm:pt-4 sm:pt-6 max-md:pt-6 md:pt-8 max-lg:pt-8 lg:pt-12 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-2xl sm:text-2xl max-md:2xl md:text-3xl max-lg:text-4xl lg:text-4xl max-xl:text-5xl xl:text-5xl max-2xl:text-6xl 2xl:text-6xl">
          Completed Accelerator Programs
        </h2>

        <ConveyorBeltAccelerator />
      </div>

      <div id="collaborators" className="flex text-center flex-col max-sm:pt-4 sm:pt-6 max-md:pt-6 md:pt-8 max-lg:pt-8 lg:pt-12 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-2xl sm:text-2xl max-md:2xl md:text-3xl max-lg:text-4xl lg:text-4xl max-xl:text-5xl xl:text-5xl max-2xl:text-6xl 2xl:text-6xl">
          Awards & Recognition
        </h2>

        <p className="w-4/5 max-sm:pt-8 sm:pt-12 lg:pt-16 lg:px-14 max-w-5xl max-sm:text-lg sm:text-xl max-md:text-xl md:text-2xl">
          Edubuk&apos;s patent published model is globally award winning and recognized by various reputed organizations including G20 Summit in Indonesia (2022).
          Best Edtech Startup Jury’s choice out of 100 Startups, CNN, Financial Times, MIT University, Harvard University in the US, World Economic Forum (Davos, Jan 2023), AWS Edstart, IIT Bombay, IIT Kharagpur, IIM Calcutta, Polygon Blockchain, Cardano Blockchain, The HINDU, CNBC, MoneyControl, RaiseMoney, IDFC-First Bank, Inc. 42, NASSCOM, State Government of Telangana (India), Dubai Expo 2020, TiE Delhi, TiE Mumbai, Data Innovation Bazaar, Telangana AI-Mission, Bombay Stock Exchange&apos;s Impact Startups, TimesNext, European Digital University, among many others.
        </p>

        <ConveyorBeltAwards />
      </div>

      <div id="collaborators" className="flex text-center flex-col max-sm:pt-4 sm:pt-6 max-md:pt-6 md:pt-8 max-lg:pt-8 lg:pt-12 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-2xl sm:text-2xl max-md:2xl md:text-3xl max-lg:text-4xl lg:text-4xl max-xl:text-5xl xl:text-5xl max-2xl:text-6xl 2xl:text-6xl">
          Testimonials
        </h2>

        <ConveyorBeltTestimonials />
      </div>

      <div id="collaborators" className="flex text-center flex-col max-sm:pt-8 sm:pt-8 max-md:pt-10 md:pt-12 max-lg:pt-14 lg:pt-16 items-center justify-center">
        <h2 className="text-center font-semibold max-sm:text-2xl sm:text-2xl max-md:2xl md:text-3xl max-lg:text-4xl lg:text-4xl max-xl:text-5xl xl:text-5xl max-2xl:text-6xl 2xl:text-6xl">
          Edubuk and IEE, MoU Signed for Collaboration 
        </h2>

        <Image
          src="/MoU Signing_Final_9.jpg"
          className="max-sm:mt-6 sm:mt-8 md:mt-10 lg:mt-12 max-sm:mb-4 sm:mb-6 md:mb-8 lg:mb-12 max-sm:px-8 md:max-w-2xl"
          alt="IEE and Edubuk MoU Signing"
          width={2774}
          height={2430}
          priority
        />

        <h2 className="w-4/5 max-sm:pt-4 sm:pt-6 md:pt-8 lg:pt-12 lg:px-14 max-w-5xl max-sm:text-xl sm:text-xl max-md:text-2xl md:text-2xl">
          Edubuk is committed and aligned towards United Nation&apos;s Sustainable Development Goals (UN SDGs)
        </h2>

        <ConveyorBeltSDGs />
      </div>
    </main>
  )
}
