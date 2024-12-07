export interface BlogPost {
    id: string;
    category: "Articles" | "News" | "Videos";
    title: string;
    date: string;
    imageUrl: string;
  }
  

  export interface BlogCardProps {
    post: BlogPost;
    onReadMore: (id: string) => void;
  }

  
  
  export interface PaginationProps {  
    currentPage: number;
    onPageChange: (page: number) => void;
    totalFilteredPosts: number;
  }
  
  export interface TabProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
  }
  
  export interface BlogTabsProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
  }