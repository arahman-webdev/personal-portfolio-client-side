"use client";

import { useEffect, useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2, Trash2, Pencil } from "lucide-react";

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  published: boolean;
}

export default function ManageBlog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/post`
      );
      const data = await res.json();
      setBlogs(data.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const confirmDelete = async () => {
    if (!selectedBlogId) return;
    try {
      await fetch(
        `https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/post/${selectedBlogId}`,
        { method: "DELETE" }
      );
      setBlogs((prev) => prev.filter((b) => b.id !== selectedBlogId));
      setSelectedBlogId(null);
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f6f8ff] to-[#e8ecff] py-12 px-4 sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-6 sm:p-10 overflow-hidden"
      >
        {/* Title Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#8236fb] to-[#076ef4] text-transparent bg-clip-text">
            Manage Blogs
          </h1>
          <Link
            href="/dashboard/create-blog"
            className="mt-4 sm:mt-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-[#8236fb] to-[#076ef4] hover:from-[#6d2ce2] hover:to-[#0657c4] transition-all duration-300 shadow-md"
          >
            + Create New
          </Link>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center py-10">
            <Loader2 className="animate-spin w-8 h-8 text-[#8236fb]" />
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-lg">
            No blogs found. Start by creating one!
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <Table>
              <TableHeader className="bg-gradient-to-r from-[#8236fb]/10 to-[#076ef4]/10">
                <TableRow>
                  <TableHead className="text-left">Title</TableHead>
                  <TableHead className="hidden sm:table-cell text-left">Excerpt</TableHead>
                  <TableHead className="text-center">Published</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow key={blog.id} className="hover:bg-gray-50 transition">
                    <TableCell className="font-medium">{blog.title}</TableCell>
                    <TableCell className="hidden sm:table-cell text-gray-600">
                      {blog.excerpt.length > 80
                        ? blog.excerpt.slice(0, 80) + "..."
                        : blog.excerpt}
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          blog.published
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </TableCell>
                    <TableCell className="text-center flex justify-center gap-3">
                      <Link
                        href={`/dashboard/update-post/${blog.id}`}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-[#8236fb] border border-[#8236fb]/30 hover:bg-gradient-to-r hover:from-[#8236fb] hover:to-[#076ef4] hover:text-white transition-all duration-300"
                      >
                        <Pencil className="w-4 h-4" />
                        Edit
                      </Link>

                      {/* Delete Button */}
                      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <AlertDialogTrigger asChild>
                          <Button
                            onClick={() => {
                              setSelectedBlogId(blog.id);
                              setIsDialogOpen(true);
                            }}
                            size="sm"
                            variant="destructive"
                            className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </Button>
                        </AlertDialogTrigger>

                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this blog? This action cannot
                              be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={confirmDelete}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </motion.div>
    </section>
  );
}
