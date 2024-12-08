import * as React from "react";
import { BlogCardProps } from "@/types";

/**
 * BlogCard Component
 * @description Renders a card view for a blog post with its title, category, date, and an image.
 * Provides an option to navigate to the blog's detailed view via the "Read more" button.
 *
 * @param {BlogCardProps} props - The properties passed to the BlogCard component.
 * @returns {JSX.Element} The rendered BlogCard component.
 */
const BlogCard: React.FC<BlogCardProps> = ({ post, onReadMore }) => {
  /**
   * Handles keyboard navigation for the "Read more" button.
   * Triggers the `onReadMore` callback when the "Enter" or "Space" key is pressed.
   *
   * @param {React.KeyboardEvent} event - The keyboard event object.
   */
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      onReadMore(post.id);
    }
  };

  // Define background and text colors for different categories
  const categoryColors: Record<
    "Articles" | "News" | "Videos",
    { bg: string; text: string }
  > = {
    Articles: {
      bg: "bg-lime-300",
      text: "text-black",
    },
    News: {
      bg: "bg-[#1A379A]",
      text: "text-white",
    },
    Videos: {
      bg: "bg-[#2E8E4A]",
      text: "text-white",
    },
  };

  // Fallback color settings for undefined categories
  const categoryColor = categoryColors[post.category] || {
    bg: "bg-gray-300",
    text: "text-black",
  };

  return (
    <div className="min-w-[500px] gap-6 h-auto pr-4 rounded-lg border border-gray-300 justify-start items-center flex flex-row">
      {/* Blog post image */}
      <div className="w-[253px] h-full">
        <img
          loading="lazy"
          src={post.imageUrl}
          alt={`Image for ${post.title}`}
          className="h-full object-cover rounded-tl-lg rounded-bl-lg"
        />
      </div>

      {/* Blog post content */}
      <div className="flex-col flex-1 justify-start items-start gap-4 inline-flex pt-6 pb-6">
        {/* Blog post category */}
        <span
          className={`inline-block py-1 text-sm leading-tight ${categoryColor.bg} ${categoryColor.text} rounded text-neutral-900 p-2`}
        >
          {post.category}
        </span>

        {/* Blog post title */}
        <h2 className="mt-4 text-xl font-semibold leading-6 text-neutral-800">
          {post.title}
        </h2>

        {/* Blog post date */}
        <time className="mt-4 text-sm leading-snug text-neutral-600">
          {post.date}
        </time>

        {/* Read more button */}
        <button
          onClick={() => onReadMore(post.id)}
          onKeyPress={handleKeyPress}
          className="mt-4 text-base font-semibold text-blue-900 text-left hover:underline focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
          aria-label={`Read more about ${post.title} in ${post.category}`}
        >
          Read more&gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
