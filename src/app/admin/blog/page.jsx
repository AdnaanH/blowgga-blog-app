import AddBlog from "@/components/AddBlog";

const BlogPage = async () => {

    return ( 
        <div className="flex flex-col px-16 py-6">
            <h1>Blog Page</h1> 
            <div className="grid grid-cols-3">
                <AddBlog />
            </div>
        </div>
    );
}
 
export default BlogPage;