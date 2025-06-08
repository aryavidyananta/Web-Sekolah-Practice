
import React from "react";
import Footer from './Homepage/footer';
import Navbar from "./Homepage/navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;