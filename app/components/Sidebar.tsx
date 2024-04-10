import React from "react";
import Link from "next/link";

const recentPosts = [
  { title: "Recent Post 1", slug: "recent-post-1" },
  { title: "Recent Post 2", slug: "recent-post-2" },
  { title: "Recent Post 3", slug: "recent-post-3" },
];

export default function Sidebar() {
  return (
    <aside className="bg-pink-100 p-4 rounded-md">
      <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
      <ul className="space-y-2">
        {recentPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-pink-500 hover:text-pink-700"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
