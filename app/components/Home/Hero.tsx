import Image from 'next/image';
import { COLORS } from '../../constants/colors';

const Hero = () => {
  return (
    <section className="text-center py-20 bg-white">
      <div className="flex flex-col lg:flex-row max-w-4xl mx-auto items-center">
      <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image src="/assets/1.png" alt="Book Illustration" className="mx-auto w-full lg:w-[48rem]" width={640} height={640} />
        </div> 
        <div className="lg:w-1/2 px-4">
          <p style={{ color: COLORS.primary }} className="font-semibold">Watchman Missionary Society</p>
          {/* <h1 style={{ color: COLORS.black }} className="text-3xl lg:text-5xl font-bold mt-4">Find yourself in a Great Book</h1> */}
          <p style={{ color: COLORS.black }} className="mt-4">The Watchman Missionary Society is a supporting ministry of the Seventh-day Adventist Church devoted to proclaiming the Three Angels’ Message in its most holistic sense.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4">
            <button style={{ backgroundColor: COLORS.button }} className="text-white px-6 py-2 rounded-lg">Get Started</button>
            <button 
              style={{ borderColor: COLORS.primary, color: COLORS.primary }} 
              className="border px-6 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
