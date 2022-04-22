import Head from "next/head";
import React, { ReactNode } from "react";

import Navbar from "../Navbar";
import Footer from '../Footer';

import GlobalStyles from './globals.styles';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
