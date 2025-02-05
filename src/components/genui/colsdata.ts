export type Content = {
  id: string;
  title: string;
  category?:
    | "adverts"
    | "blogs"
    | "publication"
    | "gallery"
    | "technical"
    | "student";
  author?: string;
  advertiser?: string;
  date_created?: string;
  start_date?: string;
  end_date?: string;
  materials?: string;
  status: "published" | "draft" | "hidden" | "expired" | "pending";
  published_date?: string;
  content?: string;
};

export const contents: Content[] = [
  {
    id: "67a366a6c07d312b36d570e3",
    title: "cupidatat minim",
    category: "gallery",
    author: "Thornton Clark",
    date_created: "2023-04-12T07:14:00 -01:00",
    start_date: "2023-10-28T07:44:15 -01:00",
    end_date: "2020-02-05T01:35:42 -01:00",
    advertiser: "ISOLOGIA",
    status: "published",
    published_date: "2016-10-12T03:06:26 -01:00",
    materials: "non",
    content: "aute",
  },
  {
    id: "67a366a6e72a0151115e22da",
    title: "proident incididunt",
    category: "publication",
    author: "Rivera Guy",
    date_created: "2020-08-02T02:22:03 -01:00",
    start_date: "2022-05-26T05:07:37 -01:00",
    end_date: "2022-04-29T03:41:40 -01:00",
    advertiser: "TURNLING",
    status: "hidden",
    published_date: "2018-10-24T05:53:10 -01:00",
    materials: "fugiat",
    content: "adipisicing",
  },
  {
    id: "67a366a655fea2fbaacc5e97",
    title: "ea commodo",
    category: "student",
    author: "Iris Burns",
    date_created: "2018-11-10T01:55:25 -01:00",
    start_date: "2024-08-14T08:59:17 -01:00",
    end_date: "2014-04-01T03:43:41 -01:00",
    advertiser: "DIGIGENE",
    status: "published",
    published_date: "2015-02-18T08:10:39 -01:00",
    materials: "labore",
    content: "elit",
  },
  {
    id: "67a366a6978e0a5f2c352af7",
    title: "excepteur deserunt",
    category: "adverts",
    author: "Price Dillard",
    date_created: "2015-01-20T01:57:33 -01:00",
    start_date: "2024-01-18T06:48:42 -01:00",
    end_date: "2016-12-19T11:44:36 -01:00",
    advertiser: "DOGNOSIS",
    status: "expired",
    published_date: "2021-05-19T04:24:51 -01:00",
    materials: "sint",
    content: "laboris",
  },
  {
    id: "67a366a65f43f28d2c127ce7",
    title: "incididunt ex",
    category: "adverts",
    author: "Blankenship Guzman",
    date_created: "2014-06-23T09:28:04 -01:00",
    start_date: "2023-05-11T07:04:10 -01:00",
    end_date: "2018-12-20T03:30:59 -01:00",
    advertiser: "INSURON",
    status: "pending",
    published_date: "2014-04-26T09:07:03 -01:00",
    materials: "non",
    content: "proident",
  },
  {
    id: "67a366a6afb866b66835ef8a",
    title: "adipisicing quis",
    category: "technical",
    author: "Hudson Mcmillan",
    date_created: "2015-01-05T10:59:21 -01:00",
    start_date: "2022-04-12T10:26:07 -01:00",
    end_date: "2020-11-18T08:10:58 -01:00",
    advertiser: "ZIORE",
    status: "draft",
    published_date: "2018-02-25T09:24:29 -01:00",
    materials: "cupidatat",
    content: "deserunt",
  },
  {
    id: "67a366a62a5b6676dd9ab6a3",
    title: "sunt sint",
    category: "student",
    author: "Oneill Armstrong",
    date_created: "2023-02-25T08:27:53 -01:00",
    start_date: "2023-07-23T05:16:58 -01:00",
    end_date: "2014-05-19T11:33:52 -01:00",
    advertiser: "XOGGLE",
    status: "published",
    published_date: "2019-01-21T02:37:02 -01:00",
    materials: "magna",
    content: "ea",
  },
];
