"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["DSA", "Development", "SQL", "Interview"];

export default function TabMenu({ onSelect }) {
  const [active, setActive] = useState("DSA");

  return (
    <motion.div className="flex flex-wrap gap-4 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => { setActive(tab); onSelect(tab); }}
          className={`px-6 py-2 text-lg rounded-full transition-all duration-300 ${active === tab ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-200 hover:bg-indigo-100'}`}
        >
          {tab}
        </button>
      ))}
    </motion.div>
  );
}