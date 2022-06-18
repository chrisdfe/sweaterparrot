import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import Navbar from "../Navbar";
import Footer from '../Footer';


import theme from '../../../../lib/theme/theme'

import GlobalStyles from '../../../../lib/theme/GlobalStyles';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar />

        {children}

        <Footer />
      </>
    </ThemeProvider>
  );
};

export default Layout;
