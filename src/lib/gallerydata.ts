export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  date: string;
  imageUrl: string;
  galleryContent: {
    subtitle: string;
    content: string;
  };
}

// Example gallery items
export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    category: "Events",
    title: "ICAN Award & Dinner",
    date: "22, October 2024",
    imageUrl: "/gallery1.jpg",
    galleryContent: {
      subtitle: "A Night to Remember",
      content:
        "The ICAN Award & Dinner was a night filled with celebration and recognition of outstanding achievements...",
    },
  },
  {
    id: "2",
    category: "Workshops",
    title: "Financial Literacy Workshop",
    date: "15, November 2024",
    imageUrl: "/gallery2.jpg",
    galleryContent: {
      subtitle: "Empowering Financial Knowledge",
      content:
        "Our Financial Literacy Workshop provided valuable insights and practical tips on managing personal finances...",
    },
  },
  // Add more gallery items as needed
];
