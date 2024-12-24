// data/aboutUs.js
import img1 from "../Assets/images/Home/img (7).jpg";
import img2 from "../Assets/images/Home/img (3).jpg";
import img3 from "../Assets/images/Home/img (4).jpg";

// data/aboutUs.js
const aboutUsData = {
  title: "About Dentist DNA",
  description:
    "Dentist DNA specializes in delivering cutting-edge IT solutions tailored for the dental industry. Our team is dedicated to providing services that empower dental practices to thrive in the digital world. We believe that the right technology can transform patient experiences and help businesses grow beyond expectations.",
  sections: [
    {
      heading: "Our Story",
      description:
        "Dentist DNA was founded with a simple yet powerful vision: to bridge the gap between modern technology and dental practices. With years of experience in IT and an understanding of the dental industry's unique challenges, we have built a company that truly understands our clients' needs.",
      image: img1,
    },
    {
      heading: "Our Vision and Mission",
      description:
        "Our vision is to become the most trusted partner for dental practices worldwide, helping them adopt digital tools and strategies that drive success. Our mission is to offer innovative and customized IT solutions that simplify operations, enhance patient experiences, and improve the bottom line.",
      image: img2,
    },
    {
      heading: "Why Choose Us?",
      description:
        "At Dentist DNA, we focus on providing comprehensive IT services designed for dental professionals. From website development to digital marketing, our solutions are tailored to meet your specific needs. Our team is committed to quality, innovation, and excellence.",
      image: img3,
    },
    {
      heading: "What We Offer",
      description:
        "We offer a full range of IT services, including website development, application development, SEO, video production, digital marketing, social media management, and more. Our solutions are designed to increase your online visibility and bring more patients to your practice.",
      video: {
        thumbnail:
          "https://plus.unsplash.com/premium_photo-1668130718429-7abf7b186f2f?q=80&w=1642&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.youtube.com/watch?v=example_video_id", // Replace with your video URL
      },
    },
  ],
};

export default aboutUsData;
