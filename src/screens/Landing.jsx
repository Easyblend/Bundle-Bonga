import React, { useEffect, useState } from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";

import Blog from "../components/Sections/Blog";

import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

import { auth } from "../FirebaseConfigure";
import { signInAnonymously } from "firebase/auth";

export default function Landing() {
  const [UID, setUID] = useState();
  const signIn = () => {
    signInAnonymously(auth)
      .then((user) => {
        setUID(user.user.uid);
      })
      .catch((error) => alert(error.code));
  };

  useEffect(signIn, []);
  return (
    <>
      <TopNavbar />
      <Header />

      <Blog />

      <Contact />
      <Footer />
    </>
  );
}
