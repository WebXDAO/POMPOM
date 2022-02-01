import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Index() {
  const router = useRouter();

  // useEffect(() => {
  //   //redirect to homepage if user is not authenticated
  //   if (!isAuthenticated) router.replace("/");
  // }, [isAuthenticated]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <Head>
        <title>PomPom - Dashboard</title>
      </Head>

      <div className="bg-red-500">Dashboard</div>
    </div>
  );
}
export default Index;
