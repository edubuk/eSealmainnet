import Image from "next/image";

export default function ConveyorBeltAwards() {
  const awardsArr = [
    "/mit-logo.png",
    "/harvard.jpg",
    "/the-hindu.jpeg",
    "/timesnext.png",
    "/data-bazaar.jpg",
    "/cnn.png",
    "/India-emblem.jpg",
    "/taim.png",
    "/iitkgp.png",
    "/iimcalcutta.png",
    "/iitb.png",
    "/telangana.jpg",
    "/startup-india.png",
    "/nasscom.png",
    "/te-delhi.png",
    "/te-mumbai.png",
    "/moneycontrol.png",
    "/raisemoney.png",
    "/idfc.png",
    "/seedstars.jpg",
    "/inc42.png",
    "/bse.png",
    "/digi.png",
    "/dubaiexpo.png",
    "/cnbc.png",
    "/forbes-india-logo.jpg"
  ];

  return (
    <div className="relative flex flex-row max-sm:max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl overflow-hidden max-sm:mt-4 sm:mt-6 md:mt-8 lg:mt-12">
      <div className="flex flex-row animate-marquee max-sm:py-4 sm:py-6 md:py-8 lg:py-12">
        {
          awardsArr.map((el, i) => (
            <div key={i} className="flex items-center justify-center w-56 h-48 bg-blue-700 bg-opacity-20 mx-8 border border-blue-700 border-opacity-60 rounded-xl p-8">
              <Image src={el} alt={el} width={500} height={400} className="scale-150 p-6" />
            </div>
          ))
        }
      </div>
      <div className="flex flex-row animate-marquee max-sm:py-4 sm:py-6 md:py-8 lg:py-12">
        {
          awardsArr.map((el, i) => (
            <div key={i} className="flex items-center justify-center w-56 h-48 bg-blue-700 bg-opacity-20 mx-8 border border-blue-700 border-opacity-60 rounded-xl p-8">
              <Image src={el} alt={el} width={500} height={400} className="scale-150 p-6" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

