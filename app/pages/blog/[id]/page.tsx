// pages/tourist-season.tsx
import Head from 'next/head';
import Header from '../../../components/Header';
import { COLORS } from '../../../constants/colors';
import Image from 'next/image';
import Footer from '@/app/components/Footer';

export default function BlogDetails() {
  return (
    <>
      <Head>
        <title>Preparing for the Summer Tourist Season</title>
        <meta name="description" content="Tips and insights for preparing for the upcoming summer tourist season." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <Image
            src="/beach-photo.jpg"
            alt="Beach scene"
            width={80}
            height={64}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 style={{ color: COLORS.primary }} className="text-3xl font-bold  mb-4">Preparing for the Summer Tourist Season</h1>
            <p className="text-gray-600 text-sm mb-4">
              <span className="text-blue-700 font-semibold">Travel Industry Insights</span> | June 12, 2024
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Just like clockwork, summer is descending on tourist spots across the globe! As destinations shine their
              sand or street corners in preparation for the influx, the importance of staying prepared cannot be
              overstated.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Top tips to stand out for the 2024 tourist season ahead</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Being ready goes beyond just having brochures at hand. It means ensuring your offerings cater to the
              demands of the post-pandemic traveler who is not just looking for vacations but unique and safe
              experiences.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">What are people traveling for in 2024?</h2>
            <p className="text-gray-700 leading-relaxed">
              Travelers in 2024 prioritize outdoor destinations, unique stays, and personalized service. By staying
              ahead of the curve with these demands, businesses can ensure they make the most of this lucrative
              season.
            </p>
          </div>
        </article>
      </main>
      <Footer/>
    </>
  );
}
