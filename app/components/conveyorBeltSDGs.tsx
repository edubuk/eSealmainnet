import Image from "next/image";

export default function ConveyorBeltSDGs() {
  const awardsArr = [
    "/unsdg4.jpg",
    "/unsdg5.jpg",
    "/unsdg8.jpg",
    "/unsdg17.jpg",
  ];

  return (
    <div className="relative flex flex-row max-sm:max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl overflow-hidden mt-12">
      <div className="flex flex-row animate-marquee pt-12 pb-12">
        {
          awardsArr.map((el, i) => (
            <div key={i} className="flex items-center justify-center w-56 h-48 bg-blue-700 bg-opacity-20 mx-8 border border-blue-700 border-opacity-60 rounded-xl p-8">
              <Image src={el} alt={el} width={300} height={200} className="scale-125 p-6" />
            </div>
          ))
        }
      </div>
      <div className="flex flex-row animate-marquee pt-12 pb-12">
        {
          awardsArr.map((el, i) => (
            <div key={i} className="flex items-center justify-center w-56 h-48 bg-blue-700 bg-opacity-20 mx-8 border border-blue-700 border-opacity-60 rounded-xl p-8">
              <Image src={el} alt={el} width={300} height={200} className="scale-125 p-6" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

