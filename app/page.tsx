import Image from "next/image";
import { Outfit, Afacad_Flux } from "next/font/google";
import handBook from "../public/Images/HandBook.png";
import Books from "../public/Images/Books.png";
import Update from "../public/Images/update.png";

const afacad_Flux = Afacad_Flux({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${outfit.className}`}>
      <div className="px-5 py-3">
        <div className="bg-[#8EB486] h-96 w-full md:p-10 p-5 rounded-2xl flex">
          <div className="flex-2">
            <h1 className=" md:text-3xl md:leading-relaxed text-xl">
              <span className="font-bold">
                "Unlock the doors to{" "}
                <span className="text-black">endless knowledge</span>."
              </span>
              <br />
              <span className="italic">
                Empower your{" "}
                <span className="text-black font-semibold">
                  learning journey
                </span>{" "}
                with every book you explore.
              </span>
              <br />
              "Discover a{" "}
              <span className="text-black font-bold">world of inspiration</span>
              , where every page sparks
              <span className="text-black"> growth</span> and curiosity."
              <br />
              <span className="font-medium">
                "Dive into <span className="text-black">new adventures</span>{" "}
                and unlock limitless possibilities."
              </span>
              <br />
              <span className="text-lg text-gray-700">
                "Every book holds a{" "}
                <span className="text-black font-semibold">story</span>, a
                lesson, and a path to{" "}
                <span className="font-bold">knowledge</span>."
              </span>
            </h1>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="mt-5">
        <div className="w-full p-6 rounded-2xl flex flex-wrap gap-x-12 justify-center">
          <div className="p-10 rounded-2xl w-96">
            <div className="flex justify-center mt-2 mb-10">
              <Image src={Books} width={300} height={240} alt="book" />
            </div>
            <h1 className="text-black text-3xl">Extensive Collection</h1>
            <p className="text-black text-xl">
              A wide range of books spanning all genres and topics to suit every
              reader's interest.
            </p>
          </div>
          <div className="p-10 rounded-2xl w-96">
            <div className="flex justify-center mb-2">
              <Image src={Update} width={180} height={180} alt="book" />
            </div>
            <h1 className="text-black text-3xl">Regular Updates</h1>
            <p className="text-black text-xl">
              Continuously refreshed with the latest releases, popular titles,
              and timeless classics.
            </p>
          </div>
          <div className="rounded-2xl p-10 w-96">
            <div className="flex justify-center mb-2">
              <Image src={handBook} width={180} height={180} alt="book" />
            </div>
            <h1 className="text-black text-3xl">Accessible Formats</h1>
            <p className="text-black text-xl">
              Convenient access to both physical copies and digital options for
              seamless reading.
            </p>
          </div>
        </div>
      </div>
      <div className="px-5 py-3">
        <div className="bg-black w-full p-10 rounded-2xl ">
          <div className="flex justify-center w-full">
            <h1 className="text-4xl font text-center mb-10">Popular Books</h1>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="bg-[#F0F0F0] p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                The Great Adventure
              </h3>
              <p className="text-gray-600 text-base mb-3">
                A thrilling journey of discovery, filled with challenges and
                mysteries.
              </p>
              <p className="text-gray-500 mb-3">Author: John Doe</p>
              <p className="text-gray-500 mb-3">Genre: Adventure, Mystery</p>
              <a href="#" className="text-blue-600 font-semibold">
                Read More
              </a>
            </div>

            <div className="bg-[#F0F0F0] p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Wisdom Beyond Time
              </h3>
              <p className="text-gray-600 text-base mb-3">
                Timeless knowledge that will guide you through every stage of
                life.
              </p>
              <p className="text-gray-500 mb-3">Author: Jane Smith</p>
              <p className="text-gray-500 mb-3">Genre: Philosophy, Self-Help</p>
              <a href="#" className="text-blue-600 font-semibold">
                Read More
              </a>
            </div>
            <div className="bg-[#F0F0F0] p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                The Secret of Success
              </h3>
              <p className="text-gray-600 text-base mb-3">
                Unlock the hidden strategies that lead to lasting success and
                fulfillment.
              </p>
              <p className="text-gray-500 mb-3">Author: Michael Lee</p>
              <p className="text-gray-500 mb-3">Genre: Business, Motivation</p>
              <a href="#" className="text-blue-600 font-semibold">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
