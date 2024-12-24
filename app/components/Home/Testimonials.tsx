import { COLORS } from '../../constants/colors';

const Testimonials = () => {
  return (
    <section className="py-16 text-center bg-gray-50">
      <h2 style={{ color: COLORS.black }} className="text-3xl font-semibold">What People Say about the Redex Book</h2>
      <p style={{ color: COLORS.black }} className="text-gray-500 mt-4 max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="mt-8">
        <img src="https://img.freepik.com/premium-psd/3d-customer-feedback-review-testimonial-design-social-media-instagram-post-template-with-mockup_125322-328.jpg" alt="Testimonials Illustration" className="mx-auto w-[20rem]" />
      </div>
    </section>
  );
};

export default Testimonials;
