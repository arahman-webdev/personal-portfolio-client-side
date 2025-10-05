
import { IPost } from "@/types";
import BlogCard from "./BlogCard";
import SectionHeading from "@/sharedComponents/SectionHeading";


const BlogPost = async() => {

    const data = await fetch('http://localhost:5000/api/v1/post',{
        next:{
            revalidate: 60
        }
    })


   const {data:posts} = await data.json()

   console.log("from post",posts)

    return (
        <div className="bg-gradient-to-r from-gray-50 to-white">
           
        <div className="max-w-7xl mx-auto lg:container px-12 py-16">
             <SectionHeading title="My Blog" subTitle="Check the latest news about our company in our blog." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                posts.slice(0,3).map((post:IPost)=><BlogCard key={post.id} post={post}  />)
              }  
              
            </div>
        </div>
        </div>
    );
};

export default BlogPost;