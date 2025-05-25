// src/app/components/Footer.jsx
"use client";
import { motion } from "framer-motion";

// Add default export
export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-800 text-white mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-center">
          © {new Date().getFullYear()} Gurukulam. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}