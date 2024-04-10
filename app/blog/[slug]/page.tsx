import Sidebar from "../../components/Sidebar";
import React from "react";

const blogPost = {
  title: "Post 1",
  slug: "post-1",
  author: "John Doe",
  content: "This is the content of the blog post.",
};

const DynamicRoute: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
        <div className="md:col-span-3 ">
          <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
          <p className="text-gray-600 mb-4">Author: {blogPost.author}</p>
          <div className="prose">{blogPost.content}</div>
          {/* Comments section */}
        </div>
        <div className="md:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
export default DynamicRoute;
