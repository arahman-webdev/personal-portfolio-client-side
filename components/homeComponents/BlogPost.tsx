import BlogCard from "./BlogCard";


const BlogPost = () => {
    return (
        <div className="max-w-7xl mx-auto lg:container px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogCard />
                <BlogCard />
                
            </div>
        </div>
    );
};

export default BlogPost;