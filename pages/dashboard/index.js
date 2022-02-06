import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Menu from "../../components/dashboard/Menu";
import NFTForm from "../../components/dashboard/NFTForm";
import DashboardLayout from "../../layouts/DashboardLayout";
import { selectUser } from "../../store/userSlice";
import { inLine } from "../../contractFunction/POMInline";
import { Confirm } from "../../contractFunction/confirmPOM";
function Index() {
  const [poms, setpoms] = useState([]);
  useEffect(() => {
    inLinePOM();
  }, []);
  const inLinePOM = async () => {
    const items = await inLine();
    setpoms(items);
  };
  const confirmPOM = async (pom) => {
    await Confirm(pom);
  };
  return (
    <DashboardLayout>
      <div className="py-10">
        <Menu />

        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="flex flex-col overflow-auto">
              <h2 className="text-2xl font-semibold text-center mt-4">
                You are the guest here
              </h2>

              {/* POM Loop */}
              <div className="m-10">
                {poms.map((pom, i) => (
                  <div
                    key={i}
                    className="mt-6 relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cyan-500"
                  >
                    <div className="flex-1 min-w-0">
                      <span className=" inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900">
                        Event Name: {pom.eventName}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Start Date: {pom.startDate}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        End Date: {pom.endDate}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Start Time: {pom.startTime}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        End Time: {pom.endTime}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Host: {pom.host}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Guest: {pom.guest}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Token ID: {pom.tokenId}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center px-2.5 py-3 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-logocyan to-logopink hover:bg-gradient-to-r hover:from-teal-400 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      onClick={() => confirmPOM(pom.tokenId)}
                    >
                      Confirm POM
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </DashboardLayout>
  );
}
export default Index;
