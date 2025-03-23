import Newsletter from "@/components/Common/NewsLetter/NewsLetter";
import AboutUs from "@/components/Home/AboutUs/AboutUs";
import ContactInfo from "@/components/Home/ContactInfo/ContactInfo";
import ContactUs from "@/components/Home/ContactUs/ContactUs";
import Hero from "@/components/Home/Hero/Hero";

import OurServices from "@/components/Home/OurServices/OurServices";
import Testimonial from "@/components/Home/Testimonial/Testimonial";

export default function Home() {
  return (
    <div className=" flex flex-col gap-20 ">
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
