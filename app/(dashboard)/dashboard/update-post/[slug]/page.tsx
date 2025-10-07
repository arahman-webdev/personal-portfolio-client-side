"use client";

import { useEffect, useState } from "react";
import { AlertCircleIcon, ImageUpIcon, XIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { useFileUpload } from "@/hooks/use-file-upload";
import Image from "next/image";
import { toast } from "sonner";

interface Blog {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  published: boolean;
  thumbnail?: string;
}

export default function UpdatePost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  // Form states
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  // File upload
  const maxSizeMB = 5;
  const maxSize = maxSizeMB * 1024 * 1024;
  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, removeFile, getInputProps },
  ] = useFileUpload({ accept: "image/*", maxSize });
  const previewUrl = files[0]?.preview || null;

  // ✅ Fetch blog data on mount
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/post/${slug}`,
          { cache: "no-store" }
        );
        const result = await res.json();

        if (result?.data) {
          const fetchedBlog = result.data as Blog;
          setBlog(fetchedBlog);
          setTitle(fetchedBlog.title || "");
          setExcerpt(fetchedBlog.excerpt || "");
          setContent(fetchedBlog.content || "");
          setPublished(fetchedBlog.published || false);
        } else {
          toast.error("Blog not found!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast.error("Failed to fetch blog data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content) {
      toast.error("Title and content are required");
      return;
    }

    const toastId = toast.loading("Updating blog...");

    const formData = new FormData();
    formData.append("data", JSON.stringify({ title, excerpt, content, published }));

    if (files[0]?.file instanceof File) {
      formData.append("thumbnail", files[0].file);
    }

    try {
      const res = await fetch(
        `https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/post/${slug}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await res.json();
      if (data?.success) {
        toast.success(data.message || "Blog updated successfully!", { id: toastId });
      } else {
        toast.error(data?.message || "Failed to update blog", { id: toastId });
        
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-gray-600">
        Loading blog data...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-10 text-red-600">
        Blog not found!
      </div>
    );
  }

  return (
    <div className="py-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 p-8 rounded-xl shadow-xl text-white max-w-3xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-transparent bg-clip-text">
          Update Blog
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
          className={`relative border-2 border-dashed rounded-xl p-4 flex items-center justify-center transition-colors ${
            isDragging ? "border-[#8236fb] bg-[#1b0f3f]" : "border-gray-500"
          }`}
        >
          <input {...getInputProps()} className="sr-only" />

          {/* ✅ Show existing thumbnail if no new file selected */}
          {previewUrl ? (
            <div className="relative w-full h-72 rounded-xl overflow-hidden">
              <Image
                src={previewUrl}
                alt={files[0]?.file?.name || "Uploaded image"}
                fill
                className="object-cover"
              />
            </div>
          ) : blog?.thumbnail ? (
            <div className="relative w-full h-72 rounded-xl overflow-hidden">
              <Image
                src={blog.thumbnail}
                alt="Current thumbnail"
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
        <Button
          type="submit"
          className="bg-gradient-to-r from-[#8236fb] to-[#076ef4] hover:from-[#076ef4] hover:to-[#8236fb]"
        >
          Update Blog
        </Button>
      </form>
    </div>
  );
}
