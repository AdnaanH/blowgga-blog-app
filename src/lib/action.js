"use server"
import { revalidatePath } from "next/cache"
import { Blog, User } from "./models"
import { connectDB } from "./util"
import { signIn, signOut } from "./auth"
import bcrypt from 'bcrypt'

export const addBlog = async (formData) => {
    const { title, desc, slug, category, userId } = Object.fromEntries(formData)

    try {
        connectDB()
        const newBlog = Blog({
            title,
            desc,
            slug,
            category,
            userId,
        })

        await newBlog.save()
        console.log("Saved to db")
        revalidatePath("/blog")
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong" }
    }
}

export const deleteBlog = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        connectDB()

        await Blog.findByIdAndDelete(id)
        console.log("Deleted from db")
        revalidatePath("/blog")
    } catch (err) {
        console.log(err)
        return { error: "Something went wrong" }
    }
}

export const handleGitHubLogin = async () => {
    await signIn("github")
}

export const handleLogout = async () => {
    await signOut()
}

export const registerUser = async (previousState, formData) => {
    const {username, email, password, img, passwordRepeat} = Object.fromEntries(formData)

    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" }
    }

    try {
        connectDB()
        
        const user = await User.findOne({username})
        if (user) {
            return { error: "Username already exists"}
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
        })
        await newUser.save()
        console.log("User saved to db")

        return {success: true}
    } catch (err) {
        console.log(err)
        return {error: "Something went wrong"}
    }
}

export const login = async (previousState, formData) => {
    const {username, password} = Object.fromEntries(formData)

    try {
        await signIn("credentials", {username, password})
    } catch (err) {
        console.log(err)
        
        if (err.message.includes("CredentialsSignIn")) {
            return {error:"Invalid username or passwords"}
        }

        throw err
    }
}