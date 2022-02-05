import Link from "next/link";
import Menu from "../../components/dashboard/Menu";
import DashboardLayout from "../../layouts/DashboardLayout";
import { created } from "../../contractFunction/POMCreated";
import { useEffect,useState } from "react";

const myPom = () => {
  const [poms, setpoms] = useState([])
  useEffect(() => {
    createdPOMs()
  }, [])
  const createdPOMs = async () => {
    const items = await created();
    setpoms(items)
  };
    return (
        <DashboardLayout>
        <div className="py-10">
          <Menu />
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <div className="flex flex-col overflow-auto">
                      <h2 className="text-2xl font-semibold text-center mt-4">Proof of your meetings</h2>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 m-10">
                        {poms.map((i) => (
                            <div
                                key={i}
                                className="cursor-pointer relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                            >
                                <div className="flex-shrink-0">
                                    {/* <img className="h-10 w-10 rounded-full" src={repos.owner.avatar_url} alt="" /> */}
                                </div>
                                <div className="flex-1 min-w-0">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-sm font-medium text-gray-900">{i.eventName}</p>
                                        <p className="text-sm text-gray-500 truncate">{i.startDate}</p>
                                </div>
                                <button
                                    type="button"
                                    className="cursor-auto inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                >
                                    Preview
                                </button>
                            </div>
                        ))}
                      </div>
                    </div>
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </DashboardLayout>
    );
}

export default myPom;