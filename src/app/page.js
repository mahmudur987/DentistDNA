import Newsletter from "@/components/Common/NewsLetter/NewsLetter";
import AboutUs from "@/components/Home/AboutUs/AboutUs";
import ContactInfo from "@/components/Home/ContactInfo/ContactInfo";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Hero from "@/components/Home/Hero/Hero";

import OurServices from "@/components/Home/OurServices/OurServices";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-20">
      <Hero />
      <OurServices />
      <AboutUs />
      <ContactUs />
      <Testimonial />
      <Newsletter />
      <ContactInfo />
    </div>
  );
}
