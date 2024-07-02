import { Blog } from "@/lib/models";
import { connectDB } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectDB();

    const blogs = await Blog.find();
    return NextResponse.json(blogs);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};