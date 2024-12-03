"use client";
import Image from "next/image";
import "./OurClients.css";

const OurClients = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Our Clients
        </h2>
        <div className="overflow-hidden">
          {/* Marquee from Left to Right */}
          <div className="whitespace-nowrap animate-marquee-left mb-20">
            <div className="inline-block mx-8 ">
              <Image
                src="https://picsum.photos/200"
                alt="Client 1"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 2"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 3"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 4"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 5"
                width={150}
                height={150}
              />
            </div>
            {/* Repeat for continuous scrolling */}
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 1"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 2"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 3"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 4"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 5"
                width={150}
                height={150}
              />
            </div>
          </div>

          {/* Marquee from Right to Left */}
          <div className="whitespace-nowrap animate-marquee-right">
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 1"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 2"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 3"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 4"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 5"
                width={150}
                height={150}
              />
            </div>
            {/* Repeat for continuous scrolling */}
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 1"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 2"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 3"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 4"
                width={150}
                height={150}
              />
            </div>
            <div className="inline-block mx-8">
              <Image
                src="https://picsum.photos/200"
                alt="Client 5"
                width={150}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
