import { Blog } from "@/lib/models";
import { connectDB } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
  const {slug} = params
    
  try {
    connectDB();

    const blog = await Blog.findOne({slug});
    return NextResponse.json(blog);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const DELETE = async (request, {params}) => {
  const {slug} = params
    
  try {
    connectDB();

    await Blog.deleteOne({slug});
    return NextResponse.json("Blog Deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete blog");
  }
};