import Link from "next/link";
import Heading from "../../components/dashboard/Heading";
import Menu from "../../components/dashboard/Menu";
import DashboardLayout from "../../layouts/DashboardLayout";

const newPage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="py-10">
          <Menu />
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

              {/* Replace with your content */}
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
              </div>
              {/* /End replace */}
              
            </div>
          </main>
        </div>
      </DashboardLayout>
    </>
  );
};

export default newPage;
