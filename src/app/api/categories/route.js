import { Category } from "@/lib/models";
import { connectDB } from "@/lib/util";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectDB();

    const categories = await Category.find();
    return NextResponse.json(categories);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};