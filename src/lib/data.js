import { Blog, User } from "./models"
import { connectDB } from "./util"
import { unstable_noStore as noStore } from "next/cache"
import axios from "axios";

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

export const getNews = async () => {
    try {
        console.log("NEWS_API_KEY:", NEWS_API_KEY);
        console.log("NEWS_API_URL:", NEWS_API_URL);

        if (!NEWS_API_KEY) {
            throw new Error("NEWS_API_KEY is not defined. Check your .env.local file.");
        }

        const response = await axios.get(NEWS_API_URL);
        console.log("API Response:", response.data);
        return response.data.articles.slice(0, 6); // Get only the latest 6 news articles
    } catch (err) {
        console.error("Error in getNews:", err);
        throw new Error("Failed to fetch news");
    }
};



export const getBlogs = async () => {
    try {
        await connectDB(); 
        const blogs = await Blog.find();
        return blogs;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch blogs");
    }
}

export const getBlog = async (slug) => {
    try {
        await connectDB(); 
        const blog = await Blog.findOne({ slug });
        return blog;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch blog!");
    }
}

export const getUser = async (id) => {
  noStore()
    try {
        await connectDB(); 
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
}

export const getUsers = async () => {
    try {
        await connectDB(); 
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
}
