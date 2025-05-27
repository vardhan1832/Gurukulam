"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";

export default function CodeEditor({ question }) {
  const [isOpen, setIsOpen] = useState(true);
  const [code, setCode] = useState("// Write your code here");

  return (
    <div className="mt-6 border rounded-lg overflow-hidden">
      <div className="bg-gray-800 p-3 flex justify-between items-center">
        <h3 className="text-white font-medium">{question}</h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white"
        >
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      {isOpen && (
        <Editor
          height="300px"
          defaultLanguage="javascript"
          defaultValue={code}
          theme="vs-dark"
          onChange={(value) => setCode(value)}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            roundedSelection: false,
            scrollBeyondLastLine: false,
          }}
        />
      )}
    </div>
  );
}