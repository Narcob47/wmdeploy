import Image from 'next/image';
import { COLORS } from '../../constants/colors';


const Hero = () => {
  return (
    <section className="text-center py-20 bg-white">
      <div className="flex max-w-4xl mx-auto">
        <div>
        <p style={{ color: COLORS.primary }} className="font-semibold">Analysis, Research, Problem Solving</p>
        <h1 style={{ color: COLORS.black }} className="text-5xl font-bold mt-4">Find yourself in a Great Book</h1>
        <p style={{ color: COLORS.black }} className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus risus vel rutrum.</p>
        <div className="mt-8 flex justify-center space-x-4">
        <button style={{ backgroundColor: COLORS.button }} className="text-white px-6 py-2 rounded-lg">Get Started</button>
        <button 
          style={{ borderColor: COLORS.primary, color: COLORS.primary }} 
          className="border px-6 py-2 rounded-lg">
          Learn More
        </button>
        </div>
        </div>
        <div className="">
          <Image src="/assets/1.png" alt="Book Illustration" className="mx-auto w-[48rem] " width={640} height={640} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
