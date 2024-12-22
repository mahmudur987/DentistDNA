import Image from "next/image";
import React from "react";

const Testimonial = () => {
  const testimonialData = {
    title: "What Our Clients Say",
    description:
      "Our clients love the results we deliver. Here are some of their experiences working with Dentist DNA.",
    testimonials: [
      {
        name: "Dr. Emily Carter",
        role: "Dentist & Clinic Owner",
        feedback:
          "Dentist DNA transformed our online presence. Their tailored website and marketing solutions brought us more patients than ever before!",
        image:
          "https://images.unsplash.com/photo-1667133295308-9ef24f71952e?q=80&w=1657&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Dr. James Moore",
        role: "Orthodontist",
        feedback:
          "Their SEO services skyrocketed our website rankings. I highly recommend Dentist DNA for any dental practice looking to grow.",
        image:
          "https://plus.unsplash.com/premium_photo-1672922646298-3afc6c6397c9?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Dr. Sarah Johnson",
        role: "Pediatric Dentist",
        feedback:
          "From social media to email campaigns, Dentist DNA has been a game-changer for my practice. Their team is professional and results-driven.",
        image:
          "https://media.istockphoto.com/id/1816783392/photo/happy-tablet-and-portrait-of-woman-dentist-with-confidence-in-her-office-doing-research-at.jpg?s=2048x2048&w=is&k=20&c=nbN0at0TcD0q0eHAzn8GC4jK4l3MCcHXa4yyIE3FQDA=",
      },
    ],
  };

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary relative">
            {testimonialData.title}
          </h2>
          <p className="text-lg mt-4">{testimonialData.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center opacity-0 animate-fadeInWithDelay transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover shadow-md"
                width={96}
                height={96}
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="mt-4 text-gray-700">{`"${testimonial.feedback}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
