
import PageSection from "@/sharedComponents/PageSection"
import { IPost } from "@/types"
import Image from "next/image";


export async function generateStaticParams() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
        const { data: posts } = await res.json();

        return (
            posts?.map((post: IPost) => ({
                slug: String(post.id),
            })) || []
        );
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}


const PostDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params



    const res = await fetch(`https://abdurrahman-dev-portfolio-backend.vercel.app/api/v1/post/${slug}`, {
        next: { revalidate: 120 }
    })

    const data = await res.json()

    const { data: blog } = data

    console.log(blog)

    console.log(res, slug)

    if(!blog){
        <div><p>Blog not found</p></div>
    }



    return (
        <div>
            <PageSection activeLink="DETAILPAGE" />
            <div className="py-30 px-4 max-w-7xl mx-auto">
                <h2 className="text-center text-4xl">Detail</h2>
                <div className="max-w-5xl mx-auto py-7 px-5 space-y-5">
                    {/* Responsive image container */}
                    <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden shadow-md">
                        <Image
                            src={blog?.thumbnail || "/fallback.jpg"} // ✅ fallback for safety
                            alt={blog?.title || "Post thumbnail"}
                            fill // ✅ makes it responsive to parent container size
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
                        {blog?.title}
                    </h1>

                    {/* Optional content area */}
                    {blog?.content && (
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                            {blog.content}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostDetailPage;