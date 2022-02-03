import Navbar from "../components/dashboard/Navbar";
import Head from "next/head";
import { connect } from "react-redux";
import { Router, useRouter } from "next/router";
import store from "../store/store";

/**
 * Info: DashboardLayout contain Navbar components
 * @returns 
 */
 const DashboardLayout = ({ children, props }) => {
   const router = useRouter();

  // redirect user if no wallet address
  if (!props.state.isAuthenticated) router.push('/')
  return (
    <div className="bg-white min-h-full">
      <Head>
        <title>PomPom - Dashboard</title>
      </Head>
      <Navbar></Navbar>

      <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            {children}
            {/* /End replace */}
          </div>
        </main>
    </div>
  );
}

const mapStateToProps = function () {
  const state = store.getState();
  return { props: { state: state.user } };
};

export default connect(mapStateToProps)(DashboardLayout);