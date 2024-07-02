import { addBlog, deleteBlog } from "@/lib/action";

const AddBlog = () => {
    return ( 
        <div className="grid">
            <form action={addBlog}>
                <input type="text" placeholder="title" name="title"/>
                <input type="text" placeholder="desc" name="desc"/>
                <input type="text" placeholder="slug" name="slug"/>
                <input type="text" placeholder="userId" name="userId"/>
                <input type="text" placeholder="category" name="category"/>
                <button>Create</button>
            </form>
            <form action={deleteBlog}>
                <input type="text" placeholder="blogId" name="id" />
                <button>Delete</button>
            </form>

        </div>
     );
}
 
export default AddBlog;