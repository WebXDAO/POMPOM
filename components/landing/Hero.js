import {
  ChevronRightIcon,
  EmojiHappyIcon,
  StarIcon,
} from "@heroicons/react/outline";
import Emoji from "../Emoji";

const Hero = () => {
  return (
    <div className="pt-48 overflow-hidden sm:pt-12 lg:relative lg:py-48">
      <div className=" mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div className="mt-20">
            <div>
              <a href="#" className="inline-flex space-x-4">
                <span className="rounded bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-500 tracking-wide uppercase">
                  Beta
                </span>
              </a>
            </div>
            <div className="mt-6 sm:max-w-xl">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Meet Pompom
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                Proof of Meeting - Anim aute id magna aliqua ad ad non deserunt
                sunt. Qui irure qui lorem cupidatat commodo.
              </p>
              <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex bg-gradient-to-r from-logocyan to-logopink hover:bg-gradient-to-r hover:from-teal-400 hover:to-pink-500 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                  >
                    Create event
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
        <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="hidden sm:block">

            
          </div>
          <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
            <img
              className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
              src="/gray.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
