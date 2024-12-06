"use client"

import * as React from 'react';
import { BlogCard } from '@/components/BlogCard';
import { BlogTabs } from '@/components/BlogTabs';
import { Pagination } from '@/components/Pagination';
import { blogPosts } from '@/lib/data';

const BlogList: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleReadMore = (id: string) => {
    console.log(`Reading more about post ${id}`);
  };

  const filteredPosts = React.useMemo(() => {
    return activeTab
      ? blogPosts.filter((post) => post.category === activeTab)
      : blogPosts;
  }, [activeTab]);

  const postsPerPage = 6;
  const totalFilteredPosts = filteredPosts.length;

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <main className="flex flex-col gap-12 px-4 md:px-40 py-20 bg-white">
      <h1 className="text-3xl font-bold text-blue-900">
        All Blog Posts
      </h1>

      <BlogTabs activeTab={activeTab} onTabChange={handleTabChange} />

      <section 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        aria-label="Blog posts"
      >
        {paginatedPosts.map((post) => (
          <BlogCard key={post.id} post={post} onReadMore={handleReadMore} />
        ))}
      </section>
      <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        totalFilteredPosts={totalFilteredPosts}
      />
    </main>
  );
};

export default BlogList;

