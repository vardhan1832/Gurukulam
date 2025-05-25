"use client";
import AuthForm from "../components/AuthForm";

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center">
      <AuthForm isLogin={false} />
    </div>
  );
}