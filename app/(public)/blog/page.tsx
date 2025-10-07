import BlogCard from "@/app/components/homeComponents/BlogCard";
import PageSection from "@/app/sharedComponents/PageSection";
import SectionHeading from "@/app/sharedComponents/SectionHeading";
import { IPost } from "@/types";


export const metadata = {
  title: "Blog | Abdur Rahman Portfolio",
  description: "Check out the latest news, tutorials, and insights from Abdur Rahman.",
  keywords: ["blog", "developer", "tutorials", "news", "Abdur Rahman"],
  robots: "index, follow",
};



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