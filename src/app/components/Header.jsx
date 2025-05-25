"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className="bg-indigo-700 text-white px-6 py-4 flex justify-between items-center shadow-xl sticky top-0 z-50">
      <Link href="/" className="text-2xl font-extrabold tracking-tight">Gurukulam</Link>
      <nav className="space-x-6 text-lg">
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/login">Login</Link>
      </nav>
    </motion.header>
  );
}