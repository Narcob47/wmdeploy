"use client"
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
import { RootState } from '../../../redux/store';
import { fetchNewsDetails } from '../../../redux/newsSlice';
import { useDispatch } from '../../../redux/hooks'; // Import the custom hook
import Head from 'next/head';
import Header from '../../../components/Header';
// import { COLORS } from '../../../constants/colors';
import Image from 'next/image';
import Footer from '@/app/components/Footer';

const BlogDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const article = useSelector((state: RootState) =>
    state.news.news.find((news) => news.id === Number(id))
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchNewsDetails(Number(id)));
    }
  }, [dispatch, id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name="description" content={article.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            width={80}
            height={64}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-black">{article.title}</h1>
            <p className="text-gray-700 mt-4">{article.content}</p>
            <p className="text-gray-500 mt-4">By {article.author} on {new Date(article.published_date).toLocaleDateString()}</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
