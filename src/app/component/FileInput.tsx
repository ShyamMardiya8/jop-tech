// src/components/FileInput.tsx
import React, { useRef, useState } from "react";
import { FileText } from "lucide-react"; // Optional: use heroicons or any other icon

const FileInput = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
    } else {
      setFileName(null);
      alert("Only PDF files are allowed.");
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div
      onClick={handleClick}
      className="w-full max-w-md mx-auto p-6 border-2 border-dashed border-indigo-300 rounded-xl text-center cursor-pointer bg-indigo-50 hover:bg-indigo-100 transition-colors"
    >
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept="application/pdf"
        className="hidden"
      />

      <div className="flex flex-col items-center justify-center space-y-3">
        <FileText className="w-12 h-12 text-indigo-400" />
        <p className="text-indigo-600 text-sm font-medium">Click to upload a PDF</p>
        <p className="text-xs text-indigo-400">Only PDF files. Max size: 10MB.</p>

        {fileName && (
          <div className="mt-3 flex items-center space-x-2 text-sm text-green-700 font-medium">
            <FileText className="w-5 h-5" />
            <span>Selected: {fileName}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInput;
