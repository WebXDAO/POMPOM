import Menu from "../../components/dashboard/Menu";
import NFTForm from "../../components/dashboard/NFTForm";
import DashboardLayout from "../../layouts/DashboardLayout";

const create = () => {
    return (
        <DashboardLayout>
        <div className="py-10">
        <Menu />

          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              {/* Replace with your content */}
              <NFTForm></NFTForm>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </DashboardLayout>
    );
}

export default create;