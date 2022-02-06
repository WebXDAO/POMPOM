import Link from "next/link";
import Menu from "../../components/dashboard/Menu";
import DashboardLayout from "../../layouts/DashboardLayout";
import { created } from "../../contractFunction/POMCreated";
import { useEffect, useState } from "react";

const MyPom = () => {
  const [poms, setpoms] = useState([]);
  useEffect(() => {
    createdPOMs();
  }, []);
  const createdPOMs = async () => {
    const items = await created();
    setpoms(items);
  };

  const goToExplorer = (tokenId) => { 
    window.open(`https://mumbai.polygonscan.com/token/0xeadbddb4eb5559650691be99824c91015fc39256?a=${tokenId}`);
  }

  return (
    <DashboardLayout>
      <div className="py-10">
        <Menu />
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-center m-4">
              Proof of your meetings
            </h2>
            <div className="-10">
              {poms.map((i) => (
                <div
                  key={i}
                  className="mt-6 relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500"
                >
                    <div className="flex-1 min-w-0">
                      <span className=" inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">
                        Event Name: {i.eventName}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Start Date: {i.startDate}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        End Date: {i.endDate}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Start Time: {i.startTime}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        End Time: {i.endTime}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Host: {i.host}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Guest: {i.guest}
                      </p>
                    </div>
                  <button
                    onClick={() => goToExplorer(i.tokenId)}
                    type="button"
                    className="inline-flex items-center px-2.5 py-3 text-xs font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-logocyan to-logopink hover:bg-gradient-to-r hover:from-teal-400 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    Show on explorer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
};

export default MyPom;
