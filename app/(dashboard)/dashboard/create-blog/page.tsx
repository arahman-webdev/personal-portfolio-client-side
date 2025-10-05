"use client";

import { useState } from "react";
import { AlertCircleIcon, ImageUpIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFileUpload } from "@/hooks/use-file-upload";
import Image from "next/image";
import { toast } from "sonner";

export default function CreateBlogForm() {
  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024;

  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, removeFile, getInputProps },
  ] = useFileUpload({ accept: "image/*", maxSize });

  const previewUrl = files[0]?.preview || null;

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
     const toastId = toast.loading("Creating tour....");
    e.preventDefault();
    if (!title || !content) return;

    const formData = new FormData();
    formData.append("data", JSON.stringify({ title, excerpt, content, published }));
    if (files[0]?.file instanceof File) {
      formData.append("thumbnail", files[0].file);
    }

    try {
      const res = await fetch("https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/post", { method: "POST", body: formData });
      const data = await res.json();
      console.log(data);
      // Optionally reset form here
      if(data?.data?.id){
        toast.success(`${data?.message}`, {id:toastId})
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="py-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-8  rounded-xl shadow-xl text-white max-w-3xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-transparent bg-clip-text">
          Create Blog
        </h1>

        {/* Title */}
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-black"
        />

        {/* Excerpt */}
        <Input
          placeholder="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="text-black"
        />

        {/* Content */}
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="resize-none border p-3 rounded text-black min-h-[150px]"
        />

        {/* Publish Toggle */}
        <label className="flex items-center gap-2 text-blue-900/90">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="accent-[#8236fb]"
          />
          Publish
        </label>

        {/* Image Upload */}
        <div
          role="button"
          onClick={openFileDialog}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          data-dragging={isDragging || undefined}
          className={`relative border-2 border-dashed rounded-xl p-4 flex items-center justify-center transition-colors ${isDragging ? "border-[#8236fb] bg-[#1b0f3f]" : "border-gray-500"
            }`}
        >
          <input {...getInputProps()} className="sr-only" />

          {previewUrl ? (
            <div className="relative w-full h-72 rounded-xl overflow-hidden">
              <Image
                src={previewUrl}
                alt={files[0]?.file?.name || "Uploaded image"}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center gap-2 py-16">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/30 bg-white/10">
                <ImageUpIcon className="w-5 h-5 text-white/80" />
              </div>
              <p className="text-blue-900 font-medium">Drop image here or click to browse</p>
              <p className="text-blue-900/60 text-xs">Max size: {maxSizeMB}MB</p>
            </div>
          )}

          {previewUrl && (
            <button
              type="button"
              onClick={() => removeFile(files[0].id)}
              className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80"
            >
              <XIcon className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* File Errors */}
        {errors.length > 0 && (
          <div className="flex items-center gap-2 text-destructive text-xs">
            <AlertCircleIcon className="w-3 h-3" />
            <span>{errors[0]}</span>
          </div>
        )}

        {/* Submit */}
        <Button type="submit" className="bg-gradient-to-r from-[#8236fb] to-[#076ef4] hover:from-[#076ef4] hover:to-[#8236fb]">
          Create Blog
        </Button>
      </form>
    </div>
  );
}
