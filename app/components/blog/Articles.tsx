import React from 'react';

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
          <div
            key={article.id}
            className="flex items-start p-4 bg-white rounded shadow"
          >
            <img
              src={article.image}
              alt={article.title}
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
        ))}
      </div>
    </section>
  );
};

export default Articles;