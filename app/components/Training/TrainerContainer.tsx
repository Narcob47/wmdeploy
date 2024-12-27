"use client"
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchTrainings } from "../../redux/trainingSlice";
import { useDispatch } from "../../redux/hooks";
import Image from "next/image";

interface Training {
  id: number;
  title: string;
  category: string;
  image: string;
  url: string;
  timestamp: string;
}

const TrainerContainer: React.FC = () => {
  const dispatch = useDispatch();
  const trainings = useSelector((state: RootState) => state.training.trainings);
  const status = useSelector((state: RootState) => state.training.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTrainings());
    }
  }, [dispatch, status]);

  const categorizedVideos = trainings.reduce((acc: { [key: string]: Training[] }, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});

  return (
    <div className="p-8">
      <h1 className="text-black text-4xl font-bold mb-6">Training Videos</h1>
      {Object.keys(categorizedVideos).map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-black text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categorizedVideos[category].map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <Image
                  src={video.image}
                  alt={video.title}
                  width={400}
                  height={225}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-black text-lg font-medium mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-500">{video.timestamp}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrainerContainer;
