"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../../firebase/firebaseConfig";
import QuizTask from "../../../../components/QuizTask";
import CodeEditor from "../../../../components/CodeEditor";

export default function TaskPage() {
  const { id, videoId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    async function fetchTask() {
      const docSnap = await getDoc(doc(db, "courses", id, "tasks", videoId));
      if (docSnap.exists()) setTask(docSnap.data());
    }
    fetchTask();
  }, [id, videoId]);

  if (!task) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <iframe
            className="w-full aspect-video rounded-xl mb-8 shadow-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>

          <div className="space-y-8">
            <QuizTask quiz={task.quiz} tasks={task.tasks} />
            
            {task.quiz.map((question, index) => (
              <CodeEditor
                key={index}
                question={`Problem ${index + 1}: ${question}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}