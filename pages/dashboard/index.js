import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DashboardLayout from "../../layouts/DashboardLayout";
import { selectUser } from "../../store/userSlice";

function Index() {
  const userStore = useSelector(selectUser);

  return (
    <DashboardLayout>

      {/* Temporary component.... You would need to add dashboard here !  */}
      {userStore.walletAddress != null && (
        <div className="grid place-items-center h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
          <span className="text-2xl animate-bounce">
            🍭 {userStore.walletAddress}
          </span>
        </div>
      )}

    </DashboardLayout>
  );
}
export default Index;
