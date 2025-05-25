"use client";
export default function QuizTask({ quiz = [], tasks = [] }) {
  return (
    <div className="space-y-6">
      {quiz.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Quiz Questions</h2>
          <ul className="space-y-3">
            {quiz.map((q, i) => (
              <li key={i} className="bg-gray-50 p-4 rounded-lg">
                <span className="font-medium">Q{i + 1}:</span> {q}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tasks.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Practice Tasks</h2>
          <ul className="space-y-3">
            {tasks.map((task, i) => (
              <li key={i} className="bg-gray-50 p-4 rounded-lg flex items-start">
                <span className="mr-2">▹</span>
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}