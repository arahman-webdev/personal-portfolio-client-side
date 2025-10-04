"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface ImageUploadProps {
  onFileSelect: (file: File | null) => void;
}

export default function ImageUpload({ onFileSelect }: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      onFileSelect(file);
    }
  };

  const removeImage = () => {
    setPreviewUrl(null);
    onFileSelect(null);
  };

  return (
    <div className="relative flex flex-col gap-2">
      {previewUrl ? (
        <div className="relative w-full h-52 border rounded-xl overflow-hidden">
          <Image
            src={previewUrl}
            alt="Preview"
            fill
            className="object-cover"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-1 hover:bg-black/80"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <label className="border-dashed border-2 border-gray-300 rounded-xl flex flex-col items-center justify-center py-10 cursor-pointer hover:bg-gray-50">
          <p className="text-sm text-gray-600">Click to upload or drag an image</p>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
}
