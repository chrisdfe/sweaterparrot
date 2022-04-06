import Head from "next/head";
import React, { ReactNode } from "react";

import Navbar from "../Navbar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>sweaterparrot</title>
        <meta name="description" content="sweaterparrot" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
