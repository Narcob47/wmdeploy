"use client"
import Header from './components/Header';
import Hero from './components/Home/Hero';
import About from './components/Home/About';
import NewArrivals from './components/Home/NewArrivals';
import Testimonials from './components/Home/Testimonials';
import Topics from './components/Home/Topics';
import Footer from './components/Footer';
import ContactUs from './components/Home/Contactus';

const Home = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <NewArrivals />
      <Testimonials />
      <Topics />
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default Home;
