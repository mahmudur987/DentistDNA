"use client";
import { portfolioPackages } from "@/constant/PortFoolioPackages";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaBackward } from "react-icons/fa";
import { use } from "react";
const PackageDetailsPage = ({ params }) => {
  // Unwrap the params promise
  const resolvedParams = use(params);
  const packageDetails = portfolioPackages.find(
    (pkg) => pkg.slug === resolvedParams.slug
  );

  if (!packageDetails) {
    return <p className="text-center mt-20">Package not found.</p>;
  }

  const {
    packageName,
    description,
    price,
    duration,
    includedServices,
    additionalServices,
    whatWeOffer,
    features,
    images = [],
  } = packageDetails;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(images);

  return (
    <section className="container mx-auto p-6 bg-gray-100">
      <div className="flex items-center gap-4">
        <Link href="/Services/Portfolio">
          <FaBackward className="hover:scale-110 transition-transform" />
        </Link>
        <h1 className=" text-xl lg:text-4xl font-bold">{packageName}</h1>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className=" bg-gray-100 py-10 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="bg-black p-8 rounded-lg w-[80vw]  md:w-full">
            <Slider {...settings}>
              {images.length > 0 ? (
                images.map((image, index) => (
                  <div key={index} className=" my-auto bg-red-400">
                    <figure className="h-[400px] lg:h-[700px] relative">
                      <Image
                        width={1000}
                        height={1000}
                        src={image}
                        alt={`${packageName} - Slide ${index + 1}`}
                        className="object-cover rounded-lg shadow-md h-[400px] lg:h-[700px]"
                      />
                    </figure>
                  </div>
                ))
              ) : (
                <div className="p-2 h-[700px] flex items-center justify-center">
                  <p className="text-white">No images available</p>
                </div>
              )}
            </Slider>
          </div>
          <p className="font-bold text-lg p-2">Price: ${price}</p>
        </div>

        <div className="lg:w-1/2 mx-auto bg-white rounded-lg shadow-lg p-6 flex flex-col gap-5">
          <p className="font-bold text-lg mb-2">Duration: {duration}</p>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Included Services</h2>
            <ul className="list-disc list-inside mb-6">
              {includedServices?.length > 0 ? (
                includedServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))
              ) : (
                <li>No services included</li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Additional Services</h2>
            <ul className="list-disc list-inside mb-6">
              {additionalServices?.length > 0 ? (
                additionalServices.map((service, index) => (
                  <li key={index}>
                    {service.service} - ${service.cost}
                  </li>
                ))
              ) : (
                <li>No additional services</li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Features</h2>
            <ul className="list-disc list-inside">
              {features?.length > 0 ? (
                features.map((feature, index) => (
                  <li key={index}>
                    {feature.feature}: {feature.value}
                  </li>
                ))
              ) : (
                <li>No features listed</li>
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Company Offered</h2>
            <ul className="list-disc list-inside">
              {whatWeOffer?.length > 0 ? (
                whatWeOffer.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))
              ) : (
                <li>No features listed</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageDetailsPage;
