"use client";

import { use } from "react";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import { shuffleArray } from "@/lib/utils";
import Getin from "@/components/Getin";
import { handleReadMore } from "@/lib/utils";

export default function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  const { id } = use(params);

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  // Find and shuffle related blogs
  const relatedBlogs = shuffleArray(
    blogPosts.filter((p) => p.category === post.category && p.id !== id)
  ).slice(0, 2);

  return (
    <main className="flex  flex-col items-center  bg-white max-md:px-5 mt-16  2xl:container mx-auto">
      {/**first section */}
      <section className="px-40 py-20 border-b-2 border-gray-200 ">
        <article className="flex flex-col max-w-full  ">
          <div
            className="flex justify-center items-center px-2 w-8 h-8 bg-blue-900 min-h-[32px] rounded-[999px] cursor-pointer"
            onClick={() => router.back()}
          >
            <FaArrowLeft className="fill-white h-6 w-6" />
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-[50px] text-neutral-800 max-md:max-w-full">
            {post.title}
          </h1>

          <time className="mt-4 text-base font-semibold text-stone-500 max-md:max-w-full">
            {post.date}
          </time>

          <Image
            loading="lazy"
            width={100}
            height={100}
            src={post.imageUrl}
            className="object-cover mt-12 max-w-full rounded-2xl aspect-[2.27] w-full max-md:mt-10"
            alt={post.title}
          />

          <section className="flex flex-col items-start mt-12 max-w-full text-base leading-6 text-neutral-800  max-md:mt-10 mx-auto">
            <h2 className="text-xl font-semibold mb-4">
              {post.blogContent.subtitle}
            </h2>
            <p>{post.blogContent.content}</p>
          </section>
        </article>
      </section>

      {/**second section */}

      <section className=" mr-auto px-40 ">
        <Getin
          heading={"LEAVE A COMMENT"}
          phoneNumber={false}
          className={"max-w-[633px]"}
        />
      </section>

      {/**third section */}
      <section className="flex flex-col gap-12 px-40 py-20 bg-[#E0F5E6]">
        <h2 className="text-3xl font-bold text-blue-900">Related Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedBlogs.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onReadMore={() => handleReadMore(router, post.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
