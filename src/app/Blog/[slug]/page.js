import { blogs } from "@/constant/BlogData";
import Image from "next/image";

export default async function BlogDetailsPage({ params }) {
  const blog = blogs.find((post) => post.slug === params.slug);

  if (!blog) {
    return <div className="container mx-auto p-6">Blog post not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center mb-6">
        <Image
          width={48}
          height={48}
          src={blog.author.profilePic}
          alt={blog.author.name}
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <p className="text-gray-800 font-medium">{blog.author.name}</p>
          <p className="text-sm text-gray-500">{blog.publishedDate}</p>
        </div>
      </div>
      <Image
        width={1000}
        height={500}
        src={blog.thumbnail}
        alt={blog.title}
        className="rounded-lg mb-6"
      />
      <div className="prose">
        <p>{blog.content}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Tags:</h3>
        <div className="flex gap-2 mt-2">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
