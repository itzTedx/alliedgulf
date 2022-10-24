import React from "react";
import { motion } from "framer-motion";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  return (
    <div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <FloatingWhatsApp
          phoneNumber="97334685656"
          accountName="Allied Gulf Constructions"
          allowEsc
          allowClickAway
          notification
          notificationSound
          notificationDelay={10}
          buttonStyle={{ backgroundColor: "#1A6EA6" }}
          avatar="/apple-touch-icon.png"
        />
      </motion.div>
    </div>
  );
};

export default Whatsapp;
