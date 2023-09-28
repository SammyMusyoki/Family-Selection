import React from "react";
import { motion } from "framer-motion";

const Notification = ({ children, className }) => {
  return (
    <React.Fragment>
      <motion.div
        layout
        initial={{ y: -15, scale: 0.95 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={`p-2 flex items-start rounded text-base font-medium shadow-lg pointer-events-auto ${className}`}
      >
        {children}
      </motion.div>
    </React.Fragment>
  );
};

export default Notification;
