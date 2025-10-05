import BlogCard from "@/components/homeComponents/BlogCard";
import PageSection from "@/sharedComponents/PageSection";
import SectionHeading from "@/sharedComponents/SectionHeading";
import { IPost } from "@/types";


const BlogPage = async () => {
    const data = await fetch('https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/post', {
        next: {
            revalidate: 60
        }
    })


    const { data: posts } = await data.json()

    return (
        <div className="">
            <PageSection activeLink="blog" />

            <div className="max-w-7xl mx-auto lg:container px-12 py-16">
                <SectionHeading title="My Blog" subTitle="Check the latest news about our company in our blog." />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        posts.map((post: IPost) => <BlogCard key={post.id} post={post} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default BlogPage;