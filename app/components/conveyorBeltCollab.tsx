import Image from "next/image";

export default function ConveyorBeltCollab() {
  const awardsArr = [
    "/concordium.png",
    "/polygon.jpg",
    "/IEE logo OG.png",
    "/atlantis_uni.jpg",
    "/aws_edstart.jpg",
    "/wef.jpg",
    "/class_bazaar.png",
    "/galgotias.jpg",
    "/ms_partner.png",
    "/mount_litera.png",
    "/pan_world.png",
    "/pgclg.jpg",
    "/jbiet.png",
    "/glbajaj.png",
    "/unometa.png",
    "/simats.png",
    "/cmr.jpg",
    "/fabNewlogo.jpg",
    "/datapoint-logo.png",
    "/Tutor-ABC-Logo.png",
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

