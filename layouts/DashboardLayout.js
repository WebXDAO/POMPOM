import Navbar from "../components/dashboard/Navbar";
import Head from "next/head";

/**
 * Info: DashboardLayout contain Navbar components
 * @returns 
 */
export default function DashboardLayout({ children }) {
  return (
    <div className="bg-white">
      <Head>
        <title>PomPom - Dashboard</title>
      </Head>
      <Navbar></Navbar>

      <main>{children}</main>
    </div>
  );
}
