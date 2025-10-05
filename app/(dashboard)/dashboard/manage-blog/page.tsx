"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
} from "@/components/ui/alert-dialog";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  published: boolean;
}

export default function ManageBlog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/post`
      );
      const data = await res.json();
      setBlogs(data.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
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
        { method: "DELETE", next: { revalidate: 3600 } }
      );
      setBlogs((prev) => prev.filter((b) => b.id !== selectedBlogId));
      setSelectedBlogId(null);
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Failed to delete blog:", error);
    }
  };

  const handleUpdate = (id: number) => {
    window.location.href = `/dashboard/update-blog/${id}`;
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Manage Blogs</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Excerpt</TableHead>
            <TableHead>Published</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell>{blog.title}</TableCell>
              <TableCell>{blog.excerpt}</TableCell>
              <TableCell>{blog.published ? "Yes" : "No"}</TableCell>
              <TableCell className="flex gap-2">
                <Button onClick={() => handleUpdate(blog.id)} size="sm">
                  Update
                </Button>

                {/* Delete button with AlertDialog */}
                <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <Button
                      onClick={() => {
                        setSelectedBlogId(blog.id);
                        setIsDialogOpen(true);
                      }}
                      size="sm"
                      variant="destructive"
                    >
                      Delete
                    </Button>
                  </AlertDialogTrigger>

                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete this blog? This action
                        cannot be undone.
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
  );
}
