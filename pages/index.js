import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import LandingLayout from "../layouts/LandingLayout";

// demo

import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  TrashIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import Hero from "../components/landing/Hero";
import Intro from "../components/landing/Intro";
import Features from "../components/landing/Features";
import Hero2 from "../components/landing/Hero2";
import Features2 from "../components/landing/Intro";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Info: LandingLayout contain Navbar and Footer components
 * @returns 
 */
export default function Home() {
  return (
    <LandingLayout>
      {/* You can try both Heros components.. i don't know which is better */}
      {/* <Hero></Hero> */}
      <Hero2></Hero2>

      <Intro></Intro>

      <Features></Features>

      {/* Timeline ? */}
    </LandingLayout>
  );
}
