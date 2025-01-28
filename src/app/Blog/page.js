import HTMLViewer from "@/components/Blog/HTMLViewer";
import { blogs } from "@/constant/BlogData";
import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  return (
    <div className="container mx-auto p-6">
      {/* <HTMLViewer /> */}

      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg p-4">
            <Image
              width={500}
              height={500}
              src={blog.thumbnail}
              alt={blog.title}
              className="rounded-md mb-3"
            />
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: blog.excerpt }}
              className="text-gray-600"
            ></p>
            <Link
              href={`/Blog/${blog.slug}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
