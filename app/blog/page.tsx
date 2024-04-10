"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const blogPosts = [
  { title: "Post 1", slug: "post-1", author: "John Doe" },
  { title: "Post 2", slug: "post-2", author: "Jane Smith" },
  { title: "Post 3", slug: "post-3", author: "Bob Johnson" },
];

const BlogPages = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const searchRegex = new RegExp(searchQuery, "i");
    return searchRegex.test(post.title) || searchRegex.test(post.content);
  });
  return (
    <div className="container mx-auto py-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded-md py-2 px-4 w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4  bg-pink-200">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <p className="text-gray-600">Author: {post.author}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-pink-500 hover:text-pink-700"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogPages;
