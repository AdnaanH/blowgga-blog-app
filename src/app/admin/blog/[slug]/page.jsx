import AuthorDetails from "@/components/AuthorDetails";
import { getBlog } from "@/lib/data";
import { Suspense } from "react";

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`);
  
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
  
    return res.json();
  };

const SingleBlog = async ({ params }) => {
    const { slug } = params;

    const blog = await getData(slug);

    console.log('Fetched blog:', blog);

    if (!blog) {
        return (
            <div className="flex flex-col">
                <h1 className="text-5xl font-bold mb-4">Blog Not Found</h1>
                <p>We could not find the blog you are looking for.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col">
            <h1 className="text-5xl font-bold mb-4">Single Blog</h1>
            <h3>{blog.title}</h3>
            <p>{blog.desc}</p>
            {blog.createdAt && (
                <small className="font-bold mt-2">{new Date(blog.createdAt).toString().slice(4, 16)}</small>
            )}
            {/*blog && (
                <Suspense fallback={<div>Loading author details...</div>}>
                    <AuthorDetails userId={blog.userId} />
                </Suspense>
            )*/}
        </div>
    );
};

export default SingleBlog;
