import { URLS } from "../aliases";

export const getNews = async () => {
  const news = [
    {
      id: 1,
      title: "First Tittle",
      body: "Test of first news vitae sequi sint nihil reprehenderit dolor",
      author: "Leanne Graham",
    },
    {
      id: 2,
      title: "Second Tittle",
      body: "Test of Second news vitae sequi sint nihil reprehenderit dolor",
      author: "Ervin Howell",
    },
    {
      id: 3,
      title: "Third Tittle",
      body: "Test of Third news vitae sequi sint nihil reprehenderit dolor",
      author: "Clementine Bauch",
    },
    {
      id: 4,
      title: "Forth Tittle",
      body: "Test of Forth news vitae sequi sint nihil reprehenderit dolor",
      author: "Patricia Lebsack",
    },
  ];

  return new Promise((res) => {
    setTimeout(() => {
      res(news);
    }, 700);
  });
};

export const getPosts = async () => {
  const postPromice = await fetch(`${URLS.POSTS}?_limit=10`);
  const posts = await postPromice.json();

  return posts;
};
