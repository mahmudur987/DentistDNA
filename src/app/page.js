import AboutUs from "@/components/Home/AboutUs/AboutUs";
import ContactInfo from "@/components/Home/ContactInfo/ContactInfo";
import Hero from "@/components/Home/Hero/Hero";
import OurServices from "@/components/Home/OurServices/OurServices";
import Testimonial from "@/components/Home/Testimonial/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <OurServices />
      <AboutUs />
      <Testimonial />
      <ContactInfo />
    </div>
  );
}
