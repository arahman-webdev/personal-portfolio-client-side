

"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  published: boolean;
}

export default function ManageBlog() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const fetchBlogs = async () => {
    const res = await fetch(`https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/post`);
    const data = await res.json();
    setBlogs(data.data);
    console.log(data)
  
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/post/${id}`, { method: "DELETE", next:{revalidate:3600} });
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  const handleUpdate = (id: number) => {
    // redirect to update page
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
                <Button onClick={() => handleUpdate(blog.id)} size="sm">Update</Button>
                <Button onClick={() => handleDelete(blog.id)} size="sm" variant="destructive">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
