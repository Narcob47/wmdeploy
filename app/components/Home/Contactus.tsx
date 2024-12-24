import { COLORS } from '../../constants/colors';

const ContactUs = () => {
  return (
    <section className="py-16 text-center bg-red-100 rounded-lg mx-4">
      <h2 className="text-3xl font-semibold mb-4 text-black">Let’s Work On Something Cool Together</h2>
      <button style={{ borderColor: COLORS.primary, color: COLORS.primary }} className="border-2 text-white px-6 py-2 rounded-md">Join us</button>
    </section>
  );
};

export default ContactUs;
