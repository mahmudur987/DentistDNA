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
    images: [
      "https://i.pinimg.com/originals/fa/17/9d/fa179df85a7a7ce6cc2e5041febbb81a.jpg",
      "https://uicookies.com/wp-content/uploads/2019/03/breed2-free-portfolio-website-templates-1000x750.jpg",
      "https://storage.googleapis.com/webdesignledger.pub.network/WDL/Portfolios_Featured_Image_06.jpg",
    ],
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
      "Custom website design with 5 pages",
      "Advanced SEO setup",
      "Blog integration",
      "E-commerce capabilities (if needed)",
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
    images: [
      "https://justajax.com/webdev/data/upload/2018/08/webdesigner-portfolio-template.jpg",
      "https://i.pinimg.com/originals/f8/40/a0/f840a004c39ce4af59d77a2ece16cda5.png",
      "https://colorlib.com/wp/wp-content/uploads/sites/2/squarespace-portfolio-website-builder.jpg",
    ],
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
      "Custom website design with unlimited pages",
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
      { feature: "Support", value: "6 months" },
    ],
    targetAudience: "Enterprises, large organizations, high-end clients",
    images: [
      "https://cdn.dribbble.com/users/2478573/screenshots/11199542/media/ea774e63432d019731441bd1dd096f8f.jpg",
      "https://s3-alpha.figma.com/hub/file/2353911789/6080c697-f497-4583-9371-db5caafdd934-cover.png",
      "https://s3-alpha.figma.com/hub/file/2817581526/ecd39a76-4f95-42b7-9198-65b41e0a06c6-cover.png",
    ],
    backgroundColor: "#dee2e6",
  },
];
export const portfolioPackages = serviceData.filter(
  (pkg) => pkg.mainCategory.slug === "portfolio"
);
