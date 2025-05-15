import Image from "next/image";
import Link from "next/link";
import DateTime from "./datetime";

export default function PostList({ post, priority }) {
  return (
    <div className="border rounded-2xl">
      <Link href={`/blog/${post.slug}`}>
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative self-stretch aspect-[3/2] w-full md:max-w-xs lg:max-w-md ">
            <Image
              src={post.coverImage}
              className="self-stretch object-cover w-full h-full rounded-2xl"
              alt="Thumbnail"
              priority={priority}
              width={500}
              height={300}
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          <div className="flex-1 px-10 py-10">
            <span className="text-sm font-semibold text-green-500 uppercase">
              <DateTime date={post.date} />
            </span>
            <h2 className="mt-2 text-2xl font-bold ">{post.title}</h2>
            <p className="mt-2 text-gray-700">{post.excerpt}</p>
            <span
              href={`/blog/${post.slug}`}
              className="relative inline-flex mt-4 before:absolute before:w-full before:bg-yellow-200 before:-z-10 before:h-2 before:bottom-1">
              Read More
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
