import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

export default function Home() {
  const userStore = useSelector(selectUser);

  return (
    <div className="h-screen">
      <Head>
        <title>PomPom - Proof of Meeting</title>
        <meta name="description" content="PomPom - Proof of Meeting" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      <Navbar></Navbar>

      <main className="">

        {/* 
          Landing page
        */}

        {userStore.walletAddress != null && (
          <div className="grid place-items-center h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
            <span className="text-2xl animate-bounce">🍭 {userStore.walletAddress}</span>
          </div>
        )}
      </main>
    </div>
  );
}
