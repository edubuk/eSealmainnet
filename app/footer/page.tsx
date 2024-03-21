import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import {
  FaFacebookSquare,
  FaTelegramPlane
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-center backdrop-hue-rotate-60 max-sm:h-full subpixel-antialiased">
      <div className=" w-full max-sm:pt-40 max-sm:pb-20 sm:pb-24 sm:pt-36 md:pt-36  max-md:pb-24 md:pb-24 max-lg:pb-28 lg:pb-8 xl:pb-8 xl:pt-56">
        <div className="max-sm:px-4 max-sm:flex-col flex flex-row justify-evenly items-center w-full">
          <div className="font-semibold max-md:text-2xl md:text-3xl z-10">
            Follow us on Social Media
          </div>
          <div className="max-sm:pt-6 max-sm:px-4 font-semibold text-3xl z-10 flex flex-row text-gray-500 space-x-5 max-sm:space-x-3 ">
            <Link
              href="https://www.linkedin.com/in/edubuk-ai-driven-decentralized-skilling-ecosystem-on-blockchain/"
              target="_blank"
            >
              <FaLinkedin className="text-[#0a66c2] subpixel-antialiased" />
            </Link>
            <Link
              href="https://t.me/+boPh8H_HpNljZDZl"
              target="_blank"
            >
              <FaTelegramPlane className="text-[#27A7E7] subpixel-antialiased" />
            </Link>
            <Link
              href="https://www.instagram.com/edubuk_/"
              target="_blank"
            >
              <FaInstagram className="text-[#E1306C] subpixel-antialiased" />
            </Link>
            <Link
              href="https://twitter.com/edubuktrust"
              target="_blank"
            >
              <FaXTwitter className="text-white subpixel-antialiased" />
            </Link>
            <Link
              href="https://www.facebook.com/edubuk.trst/"
              target="_blank"
            >
              <FaFacebookSquare className="text-[#1877F2] subpixel-antialiased" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC4g4MH4F_JTbd1tqNS5pq1g/videos"
              target="_blank"
            >
              <FaYoutube className="text-[#FF0000] subpixel-antialiased" />
            </Link>
          </div>
        </div>

        <div className=" max-sm:px-4 font-semibold z-10 max-sm:pt-8 max-lg:pt-12 lg:pt-12 xl:pt-16 text-lg">
          <div className="max-sm:pt-4 sm:pt-12 flex sm:flex-row max-sm:flex-col sm:px-8 items-center justify-between mx-auto max-w-5xl text-left max-sm:text-center">
            <div className="max-sm:flex-col sm:flex-row">
              <p className="">
                <Link href="/#learner">
                  Learner&apos;s Profile
                </Link>
              </p>
              <p className="pt-2">
                <Link href="/#collaborators">
                  Our Collaborators
                </Link>
              </p>
            </div>
            <div className="max-sm:flex-col sm:flex-row sm:text-right">
              <p className="pt-2">
                <Link href="/#accelerator">
                  Accelerator Programs
                </Link>
              </p>
              <p className="pt-2">
                <Link href="/#awards">
                  Awards & Recognition
                </Link>
              </p>
            </div>
          </div>
          <div className="pt-2 flex flex-row max-sm:flex-col sm:px-8 items-center justify-between mx-auto max-w-5xl text-left max-sm:text-center max-sm:pb-2 sm:pb-4 md:pb-8">
            <div className="max-sm:flex-col sm:flex-row">
              <p className="">
                <Link href="/#testimonials">
                  Testimonials
                </Link>
              </p>
              <p className="pt-2">
                <Link href="/#unsdgs">
                  UN SDG&apos;s Compliance
                </Link>
              </p>
            </div>
            <div className="max-sm:flex-col sm:flex-row sm:text-right">
              <p className="pt-2">
                <Link href="/about#cofounders">
                  Meet Our Co-Founders
                </Link>
              </p>
              <p className="pt-2">
                <Link href="/ceta">
                  Know more about CETA Program
                </Link>
              </p>
            </div>
          </div>
          <div className="border-b border-zinc-900 border-opacity-40"></div>
          <div className="max-sm:pt-2 sm:pt-4 md:pt-8 flex flex-row max-sm:flex-col sm:px-8 items-center justify-between mx-auto max-w-5xl text-left">
            <p>Visit us at</p>
            <p className="text-gray-400">
              <Link href="https://www.edubuk.io" target="_blank">
                www.edubuk.io
              </Link>
            </p>
          </div>
          <div className="max-sm:pt-2 pt-4 flex flex-row max-sm:flex-col sm:px-8 items-center justify-between mx-auto max-w-5xl text-left">
            <p>Reach us at</p>
            <p className="text-gray-400 font-normal">
              <a href="mailto:support@edubuk.com" target="_blank" rel=" noopener noreferrer">
                support@edubuk.com
              </a>
            </p>
          </div>
          <div className="max-sm:pt-2 pt-4 flex flex-row max-sm:flex-col sm:px-8 items-center justify-between mx-auto max-w-5xl text-left md:pb-8 max-sm:pb-2 sm:pb-4 md:pb-8">
            <p>
              <Link href="/eseal">
                eSeal Certificates
              </Link>
            </p>
            <p>
              <Link href="/verify">
                Verify Certificates
              </Link>
            </p>
          </div>
          <div className="border-b border-zinc-900 border-opacity-40"></div>
          <p className="max-sm:pt-2 sm:pt-4 md:pt-4 lg:pt-8">
            All Rights Reserved with Edubuk
          </p>
        </div>
      </div>
    </footer>
  );
}
