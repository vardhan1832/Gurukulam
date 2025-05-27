"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg"
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              Gurukulam
            </motion.span>
          </Link>
          <div className="flex space-x-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/dashboard"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/login"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Login
              </Link>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}