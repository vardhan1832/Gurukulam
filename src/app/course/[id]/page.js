"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebaseConfig";
import QuizTask from "../../components/QuizTask";

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    async function fetchCourse() {
      const docSnap = await getDoc(doc(db, "courses", id));
      if (docSnap.exists()) {
        const data = docSnap.data();
        setCourse(data);

        // Track view history
        const user = auth.currentUser;
        if (user) {
          const historyRef = doc(db, "users", user.uid, "history", id);
          await setDoc(historyRef, {
            title: data.title,
            image: data.image,
            watchedAt: new Date().toISOString(),
          });
        }
      }
    }
    fetchCourse();
  }, [id]);

  if (!course) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-xl mb-6" />
      <p className="text-lg text-gray-700 mb-6">{course.description}</p>
      
      <iframe
        className="w-full aspect-video rounded-xl mb-6"
        src={`https://www.youtube.com/embed/${course.videoIds[currentVideoIndex]}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="flex justify-between mb-6">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          disabled={currentVideoIndex === 0}
          onClick={() => setCurrentVideoIndex(i => i - 1)}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={currentVideoIndex === course.videoIds.length - 1}
          onClick={() => setCurrentVideoIndex(i => i + 1)}
        >
          Next
        </button>
      </div>

      <button
        className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        onClick={async () => {
          const user = auth.currentUser;
          if (user && course) {
            const ref = doc(db, "users", user.uid, "completed", id);
            await setDoc(ref, {
              title: course.title,
              image: course.image,
              completedAt: new Date().toISOString(),
            });
            alert("Marked as completed!");
          }
        }}
      >
        Mark as Completed
      </button>

      <QuizTask quiz={course.quiz} tasks={course.tasks} />
    </div>
  );
}