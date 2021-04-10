import Footer from "component/Footer";
import Header from "component/Header";
import Sidebar from "component/Sidebar";
import { AppContext } from "context/context";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { fadeIn } from "animation";
const Layout = ({ children, backgroundColor }) => {
  const { isSidebarOpen } = useContext(AppContext);
  return (
    <React.Fragment>
      <motion.main
        variants={fadeIn}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Header backgroundColor={backgroundColor} />
        {isSidebarOpen && <Sidebar />}
        {children}
        <Footer />
      </motion.main>
    </React.Fragment>
  );
};

export default Layout;
