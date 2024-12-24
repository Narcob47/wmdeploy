"use client";
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchNews } from '../../redux/newsSlice';
import { useDispatch } from '../../redux/hooks'; // Import the custom hook
import Header from '../../components/Header';
import Link from 'next/link';
import Image from 'next/image';

interface Article {
  id: number;
  title: string;
  heading: string;
  content: string;
  image: string;
  published_date: string;
  author: string;
}

interface ArticlesProps {
  articles: Article[];
}

const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  return (
    <section className="w-full max-w-6xl mb-8">
      <h2 className="text-lg font-bold mb-4">Articles</h2>
      <div className="grid gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`blog/${article.id}`}>
            <div className="flex items-start p-4 bg-white rounded shadow">
              <Image
                src={article.image}
                alt={article.title}
                width={96}
                height={96}
                className="w-24 h-24 object-cover rounded mr-4"
              />
              <div>
                <h3 className="text-md font-bold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  {article.author}
                </p>
                <p className="text-sm text-gray-600 mb-2">{new Date(article.published_date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-500">
                  {article.heading}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const Blog = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: RootState) => state.news.news);
  const newsStatus = useSelector((state: RootState) => state.news.status);
  const newsError = useSelector((state: RootState) => state.news.error);

  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(fetchNews());
    }
  }, [dispatch, newsStatus]);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-8 bg-gray-50 text-gray-900">
        {newsStatus === 'loading' && <p>Loading...</p>}
        {newsStatus === 'failed' && <p>Error: {newsError}</p>}
        {newsStatus === 'succeeded' && <Articles articles={news.map(n => ({
          ...n,
          heading: n.title,
          published_date: n.date as string,
          author: n.author as string
        }))} />}
      </div>
    </>
  );
};

export default Blog;
