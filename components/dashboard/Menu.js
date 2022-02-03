import Head from "next/head";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <header className="flex">

        <button className="lg:flex lg:items-center lg:justify-end xl:col-span-4">
          <Link href="/dashboard">
            <a
              href="#"
              className="ml-6 inline-flex items-center px-4 py-2 text-baseline font-medium rounded-md shadow-sm text-white  bg-gradient-to-r from-logocyan to-logopink hover:bg-gradient-to-r hover:from-teal-400 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              In Line
            </a>
          </Link>
        </button>

        <button className="lg:flex lg:items-center lg:justify-end xl:col-span-4">
          <Link href="/dashboard/myPom">
            <a
              href="#"
              className="ml-6 inline-flex items-center px-4 py-2 text-baseline font-medium rounded-md shadow-sm text-white  bg-gradient-to-r from-logocyan to-logopink hover:bg-gradient-to-r hover:from-teal-400 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              My POM
            </a>
          </Link>
        </button>


        <button className="lg:flex lg:items-center lg:justify-start xl:col-span-4">
          <Link href="/dashboard/create">
            <a
              href="#"
              className="ml-6 inline-flex items-center px-4 py-2 text-baseline font-medium rounded-md shadow-sm text-white  bg-gradient-to-r from-logocyan to-logopink hover:bg-gradient-to-r hover:from-teal-400 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              🍭 Create a POM
            </a>
          </Link>
        </button>
      </header>
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center">
        </div>
      </div>
    </>
  );
};

export default Menu;
