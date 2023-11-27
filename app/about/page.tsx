import Image from 'next/image';
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 subpixel-antialiased">
      <div className="top-0 left-0 z-10 w-full items-center justify-evenly font-sans font-bold text-sm lg:flex lg:fixed lg:backdrop-blur-2xl lg:w-screen lg:bg-zinc-800/30 h-24">
        <p className="fixed left-0 top-0 flex w-full justify-center max-lg:bg-zinc-800/30 pb-2 pt-2 dark:from-inherit lg:static lg:w-auto max-lg:backdrop-blur-2xl">
          <Link href="/">
            <Image
              src="/Edubuk-Logo.png"
              className=""
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
            <Link href="/">
              <li className="bg-blue-700 dark:bg-blue-700 hover:bg-white hover:text-blue-700 rounded-xl  duration-200 ease-in-out transition-delay-100 p-4">
                Home
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

      <div className="flex flex-col pb-12 max-sm:pt-12 sm:pt-12 max-md:pt-12 md:pt-10 max-lg:pt-10 lg:pt-40 max-xl:pt-40 xl:pt-40 items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-center font-bold max-sm:text-5xl sm:text-5xl max-md:text-6xl md:text-6xl max-lg:text-7xl lg:text-7xl max-xl:text-8xl xl:text-8xl max-2xl:text-8xl 2xl:text-9xl">
            About Edubuk
          </h1>
        </div>
        <div className="relative flex flex-col items-center justify-center p-4 text-white text-left lg:m-8 md:m-6 sm:m-4 max-sm:m-1">
          <div className="font-normal">
            <p className="pt-12 text-center max-sm:text-lg sm:text-xl max-md:text-xl md:text-2xl max-lg:text:2xl lg:text-3xl max-xl:text-3xl xl:text-4xl max-2xl:text-4xl 2xl:text-5xl">
              Edubuk is Your Gateway to the<br />
              Exciting World of Emerging Technological Skills<br />
              Built Securely Using AI and Blockchain!
            </p>
          </div>

          <p className="max-w-5xl max-sm:pt-6 max-lg:pt-12 lg:pt-24 text-center max-sm:text-lg sm:text-xl max-md:text-xl md:text-2xl max-lg:text:2xl lg:text-3xl max-xl:text-3xl xl:text-4xl max-2xl:text-4xl 2xl:text-5xl">
            Our mission is to upskill, reskill and certify learners with cutting-edge knowledge they need to thrive in the ever-evolving career paths of the 21st century driven by these emerging technologies.
          </p>

          <div className="max-md:pb-12 md:pb-24 max-w-5xl max-sm:pt-8 max-lg:pt-12 flex flex-col items-center justify-center lg:pt-24 text-left max-sm:text-lg sm:text-xl max-md:text-xl md:text-2xl lg:text-3xl">
            <p className=" text-justify">
              At Edubuk, we believe in recognizing your achievements in a way that stands out during your employment interviews and while you work in MNCs professionally.
              We provide a reliable and secure system that records your achievements and creates completely verified CVs, known as the Edubuk Profile, all stored on the Blockchain for transparency and reliability.
            </p>
          </div>

          <div className="max-w-xl  text-left rounded-xl backdrop-blur-xl bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
            <Link
              href="https://www.edubuk.io"
              target="_blank"
              className="font-bold max-sm:text-2xl sm:text-3xl max-md:text-3xl md:text-4xl max-lg:text-4xl lg:text-5xl max-xl:text-5xl"
            >
              <p className="p-6">
                Know More About Us
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:max-w-5xl lg:w-full lg:justify-evenly lg:mb-0 lg:text-center lg:items-center max-lg:items-center max-lg:justify-between">
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
          className="group rounded-xl border border-blue-700 transition-colors duration-200 ease-in-out transition-delay-100 bg-blue-700 px-5 py-4 hover:border-white hover:bg-white hover:text-blue-700 hover:dark:border-white hover:dark:bg-white max-md:mt-5 max-md:ml-0 max-lg:ml-5 lg:ml-0"
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


      <div id="cofounders" className="relative pb-12 max-sm:pt-6 max-md:pt-12 md:pt-24">
        <div className="font-bold flex flex-col items-center justify-center  text-white text-center ">
          <h1 className="pt-24 pb-12 text-center max-sm:text-3xl sm:text-4xl max-md:text-4xl md:text-5xl max-lg:text:5xl lg:text-6xl max-xl:text-6xl xl:text-7xl max-2xl:text-7xl 2xl:text-7xl">
            Meet Our Co-Founders
          </h1>

          <div className="text-center max-sm:pt-6 pt-12 max-w-lg">
            <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 p-4 rounded-xl">
              <Image
                className="rounded-xl w-full pointer-events-none flex place-items-center"
                src="/shivani.jpeg"
                alt="CEO Shivani"
                width={400}
                height={400}
              />
              <h1 className="text-center text-4xl pt-2">
                Shivani Mehrotra
              </h1>
              <h2 className="text-center text-2xl pt-2">
                Co-Founder & CEO
              </h2>
              <p className="text-justify pt-4 text-xl font-normal">
                University Topper, UCG NET Qualified Professor in Economics and Management, Top 30 Young Indian Awardee with more than 10 years of experience in education industry. Appointed as National Vice President of Emerging Technologies Wing in WICCI (Women’s Indian Chamber of Commerce and Industry). Microsoft Certified Innovative Educator for Emerging Technologies Skilling.
              </p>
            </div>
          </div>
          <div className="text-center pt-24 max-w-lg">
            <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 p-4 rounded-xl">
              <Image
                className="rounded-xl w-full pointer-events-none flex place-items-center"
                src="/apoorva.jpeg"
                alt="CTO Apoorva"
                width={400}
                height={400}
              />
              <h1 className="text-center text-4xl pt-2">
                Apoorva Bajaj
              </h1>
              <h2 className="text-center text-2xl pt-2">
                Co-Founder & CTO
              </h2>
              <p className="text-justify pt-4 text-xl font-normal">
                Engineer from IIT and MBA from IIM (2 best institutes in India for Engineering and MBA), Gold Medallist, a CFA Charterholder (all 3 levels cleared in first attempt) with 10+ years of work experience in the Financial Markets (Hedge Funds and Investment Management) working with MNCs like Goldman Sachs, JP Morgan, DE Shaw and GlobalData&apos;s quant hedge fund clients. Completed training from ISB (Indian School of Business) Hyderabad, IBM and Google on various courses in Emerging Technologies. Sought-after global consultant and trainer in emerging technologies skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

