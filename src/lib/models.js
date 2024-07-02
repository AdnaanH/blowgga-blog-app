import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        default: () => new mongoose.Types.ObjectId().toString() 
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },
    password: {
        type: String,
        min: 8
    },
    img: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
);

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    images: {
        type: Array,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',  
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true });

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
},
{ timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);
export const Category = mongoose.models?.Category || mongoose.model("Category", categorySchema);
