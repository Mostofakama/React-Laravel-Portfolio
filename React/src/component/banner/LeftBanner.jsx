import { ArrowLongRightIcon,DocumentDuplicateIcon } from "@heroicons/react/20/solid"

import AdvancedTypewriter from "./Typewrite"
import TButton from "../core/TButton";

function LeftBanner() {
    const description = ["Designer", "Developer", "Creator"];

  return (
<div className="overflow-hidden h-screen">
      <div className="mx-0 sm:mx-8 md:mx-20 flex flex-col justify-center items-center md:items-start h-full">
        <div className="text-white px-4 sm:px-6 md:px-12 w-full z-10 text-center md:text-left">
          <h2 className="text-lg sm:text-xl leading-[1.2] font-extrabold uppercase">
            Hi, I'm a Freelancer
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold my-4">
            <AdvancedTypewriter texts={description} speed={150} />
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed tracking-wide opacity-80">
            I'm a software engineer specializing in scalable web apps. Explore my
            blog, project portfolio, and online resume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <TButton
              Type="link"
              className="w-full sm:w-auto py-3 px-6 rounded-lg text-lg hover:bg-green-600 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
              Icon={<ArrowLongRightIcon className="w-5 h-5" />}
              To="#"
            >
              View Portfolio
            </TButton>
            <a
              href="#resume"
              className="w-full sm:w-auto inline-block bg-gray-800 text-white py-3 px-6 rounded-lg text-lg hover:bg-gray-700 transform transition-all duration-500 hover:scale-105 hover:shadow-xl text-center"
            >
              <DocumentDuplicateIcon className="w-5 h-5 inline-block mr-2" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBanner