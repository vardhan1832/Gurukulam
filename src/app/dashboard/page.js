"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        // Fetch history
        const historySnap = await getDocs(collection(db, "users", u.uid, "history"));
        setHistory(historySnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        
        // Fetch completed courses
        const completedSnap = await getDocs(collection(db, "users", u.uid, "completed"));
        setCompleted(completedSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome {user?.email}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recently Watched Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {history.map(h => (
              <div key={h.id} className="bg-white p-4 rounded-lg shadow">
                <img src={h.image} className="w-full h-32 object-cover rounded mb-2" />
                <p className="font-medium">{h.title}</p>
                <p className="text-sm text-gray-500">{new Date(h.watchedAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Completed Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {completed.map(c => (
              <div key={c.id} className="bg-white p-4 rounded-lg shadow">
                <img src={c.image} className="w-full h-32 object-cover rounded mb-2" />
                <p className="font-medium">{c.title}</p>
                <p className="text-sm text-gray-500">Completed on {new Date(c.completedAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}