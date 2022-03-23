import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const Layout = ({ children }) => {
  return (
    <>
      <main className='min-h-scren bg-black font-serif'>
        <Header />
        <section>{children}</section>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
