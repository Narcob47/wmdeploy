import React from "react";
import AboutHeader from "../../components/About/AboutHeader";
import WhoWeAre from "../../components/About/WhoWeAre";
import WhatWeDo from "../../components/About/WhatWeDo";
import Vision from "../../components/About/Vision";
// import WhyChooseUs from "../../components/About/WhyChooseUs";
// import AboutFooter from "../../components/About/AboutFooter";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const About = () => {
  return (
    <div className="">
        <Header/>
        <AboutHeader />
        <WhoWeAre />
        <WhatWeDo />
        <Vision />
        {/* <WhyChooseUs /> */}
        <Footer/>
    </div>
  );
};

export default About;
