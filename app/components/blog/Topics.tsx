interface TopicsProps {
    topics: string[];
  }
  
  const Topics: React.FC<TopicsProps> = ({ topics }) => {
    return (
      <section className="w-full max-w-6xl">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 mb-4 border rounded"
        />
        <div className="flex gap-2 mb-8">
          {topics.map((topic, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              {topic}
            </button>
          ))}
        </div>
      </section>
    );
  };
  
  export default Topics;
  