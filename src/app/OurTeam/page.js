import TeamMember from "@/components/OurTeam/TeamMember";
import React from "react";

import img1 from "../../Assets/images/OurTeam/Md Mahmudur rahman.png";
import img2 from "../../Assets/images/OurTeam/kazi.jpeg";
import img3 from "../../Assets/images/OurTeam/polash.jpg";
import img4 from "../../Assets/images/OurTeam/mamun.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Md Mahmudur Rahman",
    role: "Web Developer",
    bio: "An experienced web developer specializing in creating scalable, user-friendly web applications using modern technologies.",
    image: img1,
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    id: 2,
    name: "Kazi Fazle Ealahy",
    role: "Content Writer",
    bio: "A passionate content writer with expertise in crafting engaging and SEO-optimized content to captivate audiences.",
    image: img2,
    socialLinks: {
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
    },
  },
  {
    id: 3,
    name: "Monoar Hossain Palash ",
    role: "Digital Marketing Expert",
    bio: "Skilled in developing and executing effective digital marketing campaigns that drive business growth and customer engagement.",
    image: img3,
    socialLinks: {
      linkedin: "https://linkedin.com/in/alicebrown",
      instagram: "https://instagram.com/alicebrown",
    },
  },
  {
    id: 4,
    name: "Md. Mamun Hossain",
    role: "SEO Expert",
    bio: "Dedicated SEO specialist with a track record of boosting website rankings and increasing organic traffic.",
    image: img4,
    socialLinks: {
      linkedin: "https://linkedin.com/in/bobwhite",
      twitter: "https://twitter.com/bobwhite",
    },
  },
];

const OurTeamPage = () => {
  return <TeamMember teamData={teamMembers} />;
};

export default OurTeamPage;
