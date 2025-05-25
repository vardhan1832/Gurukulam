"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TabMenu from "./components/TabMenu";
import PlaylistCard from "./components/PlaylistCard";
import { getCoursesByCategory } from "../lib/getCourses";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("DSA");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCoursesByCategory(selectedTab).then(setCourses);
  }, [selectedTab]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Your Personalized Learning Hub</h1>
        <TabMenu onSelect={setSelectedTab} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <PlaylistCard key={course.id} playlist={course} />
          ))}
        </div>
      </main>
    </div>
  );
}