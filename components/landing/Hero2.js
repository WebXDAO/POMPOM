import { ethers } from "ethers";
import Link from "next/link";
import { connect } from "react-redux";
import store from "../../store/store";
import { setError, setIsAuthenticated, setWalletAddress } from "../../store/userSlice";


async function login() {
  if (!window.ethereum) {
    // setLoginState("No Metamask wallet... Please install it.");
    store.dispatch(setIsAuthenticated(false));
    store.dispatch(setError("No Metamask wallet... Please install it."));
    return;
  }

  // Prompt user for account connections
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const walletAddr = await signer.getAddress();

  // Set address state to userStore
  store.dispatch(setWalletAddress(walletAddr));
  store.dispatch(setIsAuthenticated(true));

  // Ask signature if first time user
  if (!signer._isSigner) {
    // security: we would need to fetch a backend to get a generated random uuid
    // const signatureNumbers = fetch(our_api_url:api_port/get_nonce)

    // clientside hack :
    const signatureNumbers = uuid();

    // Ask for signature
    const signature = await signer.signMessage(
      "Welcome to PomPom - uuid: " + signatureNumbers
    );
  }
}

function Hero2({ props }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative py-24 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32 lg:mb-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <div>
                  <a href="#" className="inline-flex space-x-4">
                    <span className="rounded bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-500 tracking-wide uppercase">
                      Beta
                    </span>
                  </a>
                </div>
                <span className="mt-4 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-5xl">
                  <span className="block text-black ">Meet Pompom</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                POMPOM - a Proof Of Meeting recording service 
                hosted on polygon blockchain that helps users 
                to register their worth mentioning meeting records
              </p>

              {/* Show if not authenticated */}
              {!props.state.isAuthenticated && (
                <div className="mt-6">
                  <button
                    onClick={login}
                    className="inline-flex bg-gradient-to-r from-logocyan to-logopink hover:bg-gradient-to-r hover:from-teal-400 hover:to-pink-500 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                  >
                    Connect wallet
                  </button>
                </div>
              )}

              {/* Show if authenticated */}
              {props.state.isAuthenticated && (
                <div className="mt-6">
                  <Link href="/dashboard">
                    <a className="inline-flex bg-gradient-to-r from-logocyan to-logopink hover:bg-gradient-to-r hover:from-teal-400 hover:to-pink-500 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white">
                      Create event
                    </a>
                  </Link>
                </div>
              )}
            </div>

            {/* Shape */}
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <button
                  type="button"
                  className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-logopink"
                >
                  <span className="sr-only">Watch pompom presentation</span>
                  <img className="w-full" src="/gray.png" alt="" />
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 w-20 bg-clip-path "
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx={42}
                        cy={42}
                        r={42}
                        fill="white"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = function () {
  const state = store.getState();
  return { props: { state: state.user } };
};

export default connect(mapStateToProps)(Hero2);
