import store from "../store/store";
import { ethers } from "ethers";
import {
  setError,
  setIsAuthenticated,
  setWalletAddress,
} from "../store/userSlice";
import { uuid } from "uuidv4";
import { connect } from "react-redux";
import { getEllipsisTxt } from "../helpers/formatters";

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

const Account = ({ props }) => {

  // show wallet address if user is authenticated
  if (props.state.isAuthenticated) {
    return (
      <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
        <span className="px-4 text-sm text-black font-bold">
          {getEllipsisTxt(props.state.walletAddress, 6)}
        </span>

        {/* We can add add Blockies here 
        rq: https://github.com/stephensprinkle-zz/react-blockies */}
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      </div>
    );
  } 

  // show error if no Metamask wallet plugin
  if (props.state.error != null) {
    return (
      <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
        <span className="px-4 text-sm text-black font-bold">
         { props.state.error }
        </span>

        {/* We can add add Blockies here 
        rq: https://github.com/stephensprinkle-zz/react-blockies */}
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>
      </div>
    );
  }
  
  // show login button if user is not authenticated
  else {
    return (
      <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
        <a
          onClick={login}
          href="#"
          className="ml-6 inline-flex items-center px-4 py-2  text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          Connect Wallet
        </a>
      </div>
    );
  }
};

const mapStateToProps = function () {
  const state = store.getState();
  return { props: { state: state.user } };
};

export default connect(mapStateToProps)(Account);
