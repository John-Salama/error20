import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-purple-50 text-gray-900 font-inter">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
