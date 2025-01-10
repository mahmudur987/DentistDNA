const ourOffers = [
  "Timely Delivery",
  "Customized Solutions",
  "Expert Consultation",
  "24/7 Support",
  "Scalable Solutions",
  "SEO Optimization",
  "User-Friendly Designs",
  "Affordable Pricing",
  "High-Quality Standards",
  "Post-Launch Support",
];
const imageLinks = [
  "https://i.ibb.co.com/ZBH9PSS/sample-1.jpg",
  "https://i.ibb.co.com/gFqyw1r/sample-1.png",
  "https://i.ibb.co.com/7ygD9fz/sample-1.webp",
  "https://i.ibb.co.com/zJb7Vg2/sample-2.jpg",
  "https://i.ibb.co.com/jkrBRzP/sample-2.png",
  "https://i.ibb.co.com/z5RmW4Z/sample-2.webp",
  "https://i.ibb.co.com/8zt9Hwy/sample-3.jpg",
  "https://i.ibb.co.com/6487CLb/sample-3.png",
  "https://i.ibb.co.com/b3nHb9v/sample-4.jpg",
  "https://i.ibb.co.com/GPdmDQZ/sample-5.jpg",
  "https://i.ibb.co.com/k8zq0xM/sample-6.jpg",
  "https://i.ibb.co.com/qWTPGdW/sample-7.jpg",
  "https://i.ibb.co.com/BjsVKgV/sample-10.jpg",
  "https://i.ibb.co.com/s6YQrLb/sample-11.jpg",
  "https://i.ibb.co.com/KNH2zny/sample-12.jpg",
];

export const serviceData = [
  {
    id: 1,
    mainCategory: { id: 1, slug: "portfolio", name: "Portfolio" },
    slug: "starter-package",
    packageName: "Starter Portfolio Package",
    title: "Starter Portfolio Package",
    description:
      "Perfect for individuals or small businesses starting out. This package covers the essentials for creating a professional online portfolio.",
    price: 199, // Price in USD
    duration: "2 weeks", // Estimated completion time
    whatWeOffer: ourOffers,
    includedServices: [
      "Basic website design with HTML and CSS",
      "Responsive layout for mobile and desktop",
      "Portfolio showcase section",
      "Basic SEO setup",
      "Basic hosting and domain registration",
      "3 page portfolio (Home, About/Blog, Portfolio)",
    ],
    additionalServices: [
      {
        service: "Additional page design",
        cost: 50,
      },
      {
        service: "Logo design",
        cost: 75,
      },
    ],
    features: [
      { feature: "Revisions", value: "2 revisions" },
      { feature: "Support", value: "1 month" },
    ],
    targetAudience: "Freelancers, small business owners",
    images: imageLinks,
    backgroundColor: "#f8f9fa", // Optional styling
  },
  {
    id: 2,
    mainCategory: { id: 1, slug: "portfolio", name: "Portfolio" },

    slug: "professional-package",
    packageName: "Professional Portfolio Package",
    title: "Professional Portfolio Package",
    description:
      "Ideal for businesses and professionals looking for a comprehensive portfolio solution.",
    price: 499,
    duration: "4 weeks",
    whatWeOffer: ourOffers,
    includedServices: [
      "Custom website design with 5 pages  html css javascript",
      "small backend integration for blogs, portfolio,images and videos",
      "Responsive layout for mobile and desktop",
      "Portfolio showcase section",
      "Basic SEO setup",
      " hosting and domain registration",
      "Performance optimization",
    ],
    additionalServices: [
      {
        service: "Content writing (per page)",
        cost: 100,
      },
      {
        service: "Custom graphic design",
        cost: 150,
      },
    ],
    features: [
      { feature: "Revisions", value: "Unlimited during project phase" },
      { feature: "Support", value: "3 months" },
    ],
    targetAudience:
      "Professional consultants, agencies, medium-sized businesses",
    images: imageLinks,
    backgroundColor: "#e9ecef",
  },
  {
    id: 3,
    mainCategory: { id: 1, slug: "portfolio", name: "Portfolio" },

    slug: "enterprise-package",
    packageName: "Enterprise Portfolio Package",
    title: "Enterprise Portfolio Package",
    description:
      "A premium package for large businesses and organizations that require advanced portfolio solutions.",
    price: 999,
    duration: "6 weeks",
    whatWeOffer: ourOffers,
    includedServices: [
      "Custom website design with frontend and backend integration",
      "Integration with advanced tools and APIs",
      "Comprehensive SEO and analytics setup",
      "Multilingual support",
      "High-performance hosting and optimization",
    ],
    additionalServices: [
      {
        service: "Custom integration with CRM",
        cost: 300,
      },
      {
        service: "Ongoing maintenance (monthly)",
        cost: 200,
      },
    ],
    features: [
      { feature: "Revisions", value: "Unlimited during project phase" },
      { feature: "Support", value: "18 months" },
    ],
    targetAudience: "Enterprises, large organizations, high-end clients",
    images: imageLinks,
    backgroundColor: "#dee2e6",
  },
];
export const portfolioPackages = serviceData.filter(
  (pkg) => pkg.mainCategory.slug === "portfolio"
);
