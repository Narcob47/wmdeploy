import { COLORS } from '../../constants/colors';

const Topics = () => {
  return (
    <section className="py-16 text-center">
      <h2 style={{ color: COLORS.black }} className="text-3xl font-semibold">What our Books are about</h2>
      <p style={{ color: COLORS.black }} className=" mt-4 max-w-xl mx-auto"></p>
      <div className="mt-8 grid grid-cols-2 gap-4 max-w-xl mx-auto">
        {['Holistic Ministry', 'Service', 'Health and Wellness', 'Education', 'Family Values', 'Diligent Study', 'SOP', 'Pioneers' ].map((topic, i) => (
          <div key={i} className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            <span style={{ color: COLORS.black }} className="">{topic}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topics;
