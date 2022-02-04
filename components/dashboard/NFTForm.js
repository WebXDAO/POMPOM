import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { PROVIDER_DESCRIPTION_CLASSNAME } from "web3modal";
import { useWeb3React } from "@web3-react/core";
import { create as ipfsHttpClient } from "ipfs-http-client";
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");
import Web3 from "web3";
import { POMPOMABI } from "./../../abis/pompomabi";
import { POMContractAddress } from "../../POMAddress";
export default function NFTForm() {

  const userStore = useSelector(selectUser);

  // Usestate
  const [eventName, setEventName] = useState("");
  const [guestWallet, setguestWallet] = useState("");

  // todo: update the date creation to get only the date
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { active, account } = useWeb3React();
  const createData = async (event) => {
    event.preventDefault(); // prevent page reload
    console.log({
      eventName: event.target.eventName.value,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      startTime: event.target.startTime.value,
      endTime: event.target.endTime.value,
      guestWallet: event.target.guestWallet.value,
    });
    const data = JSON.stringify({
      eventName: event.target.eventName.value,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      startTime: event.target.startTime.value,
      endTime: event.target.endTime.value,
      guestWallet: event.target.guestWallet.value,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
      console.log(url);
      createPOM(url, account);
      // Add Form logics here
    } catch (e) {
      // throw error
      console.log("Error uploading file: ", error);
    }
  };
  const createPOM = async (url, account) => {
    const web3 = new Web3(window.ethereum);
    const POMInstance = new web3.eth.Contract(
      POMPOMABI,
      POMContractAddress
    );
    //work on this
    const receipt = await POMInstance.methods.createPOM(guestWallet, url).send({ account });
    return receipt;
  };

  // WIP for mongodb if ipfs struggle
  const registerEvent = async (event) => {
    event.preventDefault(); // prevent page reload

    const res = await fetch("/api/register", {
      body: JSON.stringify({
        name: event.target.eventName.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <>
      <div className="p-8">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Mint your POM ✨
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  To make your event live, type your event informations in this
                  form to mint int!
                </p>
                <p className="mt-1 text-sm text-gray-800 font-semibold">
                  No gas gee required
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form method="POST" onSubmit={createData}>
                <div className="shadow-lg overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label
                          htmlFor="eventName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Event name
                        </label>
                        <input
                          type="text"
                          name="eventName"
                          id="eventName"
                          autoComplete="eventName"
                          className="mt-1 focus:ring-logopink focus:border-logopink block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(name) => setEventName(name)}
                          required
                        />
                      </div>

                      {/* Date picker */}
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Start
                        </label>
                        <DatePicker
                          selected={startDate}
                          className="mt-1 focus:ring-logopink focus:border-logopink block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          End Date
                        </label>
                        <DatePicker
                          selected={endDate}
                          className="mt-1 focus:ring-logopink focus:border-logopink block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(date) => setEndDate(date)}
                        />
                      </div>

                      {/* Time picker */}
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          From
                        </label>
                        <input
                          type="time"
                          name="startTime"
                          id="startTime"
                          autoComplete="startTime"
                          className="mt-1 focus:ring-logopink focus:border-logopink block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          To
                        </label>
                        <input
                          type="time"
                          name="endTime"
                          id="endTime"
                          placeholder="endTime"
                          autoComplete="endTime"
                          className="mt-1 focus:ring-logopink focus:border-logopink block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                      </div>

                        {/* Address sender */}

                      
                        <div className="col-span-6">
                        <label
                          htmlFor="eventName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Guest Wallet
                        </label>
                        <input
                          type="text"
                          name="guestWallet"
                          id="guestWallet"
                          autoComplete="guestWallet"
                          className="mt-1 focus:ring-logopink focus:border-logopink block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          onChange={(guestwalletAddr) => setguestWallet(guestwalletAddr)}
                          required
                        />
                      </div>


                   

                      {/* 3 columns exemple :  */}
                      {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="mt-1 focus:ring-logopink focus:border-logopink block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="region"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <input
                            type="text"
                            name="region"
                            id="region"
                            autoComplete="address-level1"
                            className="mt-1 focus:ring-logopink focus:border-logopink block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="postal-code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal code
                          </label>
                          <input
                            type="text"
                            name="postal-code"
                            id="postal-code"
                            autoComplete="postal-code"
                            className="mt-1 focus:ring-logopink focus:border-logopink block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div> */}
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      // onClick={createData}
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-logocyan to-logopink hover:bg-gradient-to-r hover:from-teal-400 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    >
                      Mint your event 🍭
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
