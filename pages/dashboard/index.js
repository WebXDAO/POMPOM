import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import Menu from "../../components/dashboard/Menu";
import NFTForm from "../../components/dashboard/NFTForm";
import DashboardLayout from "../../layouts/DashboardLayout";
import { selectUser } from "../../store/userSlice";
import { inLine } from "../../contractFunction/POMInline";
import { Confirm } from "../../contractFunction/confirmPOM";
function Index() {
  const [poms, setpoms] = useState([])
  useEffect(() => {
    inLinePOM()
  }, [])
  const inLinePOM = async () => {
    const items = await inLine();
    setpoms(items)
  };
  const ConfirmPOM = async (pom) => {
    await Confirm(pom)
  }
  return (
    <DashboardLayout>
        <div className="py-10">
        <Menu />

          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg" />
                    <div className="flex flex-col overflow-auto">
                      <h2 className="text-2xl font-semibold text-center mt-4">You are the guest here</h2>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 m-10">
                        {poms.map((pom,i) => (
                            <div
                                key={i}
                                className="cursor-pointer relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                            >
                                <div className="flex-shrink-0">
                                    {/* <img className="h-10 w-10 rounded-full" src={repos.owner.avatar_url} alt="" /> */}
                                </div>
                                <div className="flex-1 min-w-0">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-sm font-medium text-gray-900">Event Name: {pom.eventName}</p>
                                        <p className="text-sm text-gray-500 truncate">Start Date: {pom.startDate}</p>
                                        <p className="text-sm text-gray-500 truncate">End Date: {pom.endDate}</p>
                                        <p className="text-sm text-gray-500 truncate">Start Time: {pom.startTime}</p>
                                        <p className="text-sm text-gray-500 truncate">End Time: {pom.endTime}</p>
                                        <p className="text-sm text-gray-500 truncate">Host: {pom.host}</p>
                                        <p className="text-sm text-gray-500 truncate">Guest: {pom.guest}</p>
                                        <p className="text-sm text-gray-500 truncate">Token ID: {pom.tokenId}</p>
                                </div>
                                <button 
                                    type="button"
                                    className="cursor-auto inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                    onClick={() => ConfirmPOM(pom.tokenId)}
                                >
                                    Confirm POM
                                </button>
                            </div>
                        ))}
                      </div>
                    </div>
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </DashboardLayout>
   
  );
}
export default Index;
