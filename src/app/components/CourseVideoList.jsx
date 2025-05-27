"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CourseVideoList({ videos, courseId }) {
  return (
    <div className="space-y-4">
      {videos.map((videoId, index) => (
        <motion.div
          key={videoId}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={`/course/${courseId}/tasks/${videoId}`}
            className="block bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-medium">{index + 1}</span>
              </div>
              <span className="text-gray-700">Video Lesson {index + 1}</span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
