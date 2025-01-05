import Image from "next/image";
import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
const TeamMember = ({ teamData }) => {
  return (
    <section className="bg-base-200 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="text-lg mt-2 text-gray-600">
          Our dedicated team is here to help you achieve your goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105"
          >
            <Image
              width={500}
              height={500}
              src={member.image}
              alt={member.name}
              className="rounded-full w-52 h-52 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold">{member.name}</h2>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="mt-4 text-gray-700">{member.bio}</p>
            <div className="flex justify-center gap-4 mt-4 text-lg">
              {member.socialLinks.linkedin && (
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-700" />
                </a>
              )}
              {member.socialLinks.twitter && (
                <a
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-blue-500" />
                </a>
              )}
              {member.socialLinks.github && (
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-black" />
                </a>
              )}
              {member.socialLinks.instagram && (
                <a
                  href={member.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-pink-500" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
