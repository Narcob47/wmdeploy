import Image from 'next/image';
import { COLORS } from '../../constants/colors';

const About = () => {
  return (
    <section className="py-16 text-center ">
      <h2 style={{ color: COLORS.black }} className="text-3xl font-semibold">About The Watchman Missionary Society</h2>
      <p style={{ color: COLORS.black }} className="mt-4 max-w-xl mx-auto">
      The society is dedicated to training and supporting missionaries to serve in the mission field, focusing on both pioneering efforts and nurturing the Church of God in various parts of Zambia and around the world.
      </p>
      <div className="mt-8 flex justify-center">
        <Image 
        width={500}
        height={500} 
        src="https://img.freepik.com/free-vector/library-interior-empty-room-reading-with-books-wooden-shelves_33099-1722.jpg?t=st=1729959284~exp=1729962884~hmac=eb1fafde0e3650c46b2c1c8405b49f560d3b0bd8c5d3494b5a5c8b120064fc59&w=740" alt="Library Illustration" />
      </div>
    </section>
  );
};

export default About;
