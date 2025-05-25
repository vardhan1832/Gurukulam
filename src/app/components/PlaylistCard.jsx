"use client";
import Link from "next/link";

export default function PlaylistCard({ playlist }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition-shadow">
      <img
        src={playlist.image || "/youtube-thumbnail.jpg"}
        alt={playlist.title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{playlist.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{playlist.description?.slice(0, 100)}...</p>
      <Link href={`/course/${playlist.id}`}>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg w-full transition-colors">
          View Course Structure
        </button>
      </Link>
    </div>
  );
}