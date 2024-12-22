import React from "react";

const ContactInfo = () => {
  const contactData = {
    title: "Get in Touch",
    description:
      "We'd love to hear from you! Reach out to us with any questions, feedback, or inquiries.",
    details: [
      {
        type: "Address",
        value: "123 Dental Street, Smile City, SC 29000",
        icon: "📍", // Replace with a better icon or SVG
      },
      {
        type: "Phone",
        value: "+1 800 555 6789",
        icon: "📞",
      },
      {
        type: "Email",
        value: "contact@dentistdna.com",
        icon: "✉️",
      },
      {
        type: "Social",
        value: [
          {
            platform: "Facebook",
            link: "https://facebook.com/DentistDNA",
            icon: "🌐",
          },
          {
            platform: "Twitter",
            link: "https://twitter.com/DentistDNA",
            icon: "🐦",
          },
          {
            platform: "LinkedIn",
            link: "https://linkedin.com/company/DentistDNA",
            icon: "🔗",
          },
          {
            platform: "Instagram",
            link: "https://instagram.com/DentistDNA",
            icon: "📸",
          },
          { platform: "Telegram", link: "https://t.me/DentistDNA", icon: "✈️" },
          {
            platform: "Discord",
            link: "https://discord.gg/DentistDNA",
            icon: "🎮",
          },
          {
            platform: "Slack",
            link: "https://slack.com/DentistDNA",
            icon: "💼",
          },
          {
            platform: "WhatsApp",
            link: "https://wa.me/1234567890",
            icon: "💬",
          },
        ],
        icon: "🌍",
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">
            {contactData.title}
          </h2>
          <p className="text-lg mt-4">{contactData.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {contactData.details.map((detail, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-md p-6 opacity-0 animate-fadeInWithDelay transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text-4xl text-primary mr-4">{detail.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {detail.type}
                </h3>
                {detail.type === "Social" ? (
                  <div className="flex flex-wrap gap-4 mt-2">
                    {detail.value.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg shadow-md hover:bg-blue-200 transition-all duration-300"
                      >
                        <span className="text-xl">{social.icon}</span>
                        <span className="text-blue-600 hover:underline">
                          {social.platform}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700">{detail.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
