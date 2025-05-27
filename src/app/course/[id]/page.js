"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import CourseVideoList from "../../components/CourseVideoList";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    async function fetchCourse() {
      const docSnap = await getDoc(doc(db, "courses", id));
      if (docSnap.exists()) setCourse(docSnap.data());
    }
    fetchCourse();
  }, [id]);

  if (!course) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {course.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8">{course.description}</p>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Course Content
            </h2>
            <CourseVideoList videos={course.videoIds} courseId={id} />
          </div>
        </div>
      </main>
    </div>
  );
}