"use client";
import { portfolioPackages } from "@/constant/PortFoolioPackages";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaBackward } from "react-icons/fa";
const PackageDetailsPage = ({ params }) => {
  const packageDetails = portfolioPackages.find(
    (pkg) => pkg.slug === params.slug
  );

  if (!packageDetails) {
    return <p className="text-center mt-20">Package not found.</p>;
  }

  const {
    packageName,
    description,
    price,
    duration,
    whatWeOffer,
    includes,
    additionalServices,
    features,
    images,
  } = packageDetails;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="container mx-auto p-6 bg-gray-100">
      <div className="flex items-center gap-4">
        <Link href="/Services/Portfolio">
          {" "}
          <FaBackward />{" "}
        </Link>
        <h1 className="text-4xl font-bold ">{packageName}</h1>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="min-h-screen bg-gray-100 py-10 flex flex-col lg:flex-row">
        <div className=" lg:w-1/2 mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="  bg-black p-8 rounded-lg ">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="p-2 h-[700px] ">
                  <figure className="h-full">
                    <Image
                      width={500}
                      height={700}
                      src={image}
                      alt={packageName}
                      className="w-full h-[700px] object-fill rounded-lg shadow-md"
                    />
                  </figure>
                </div>
              ))}
            </Slider>
          </div>
          <p className="font-bold text-lg p-2">Price: ${price}</p>
        </div>

        <div className=" lg:w-1/2 mx-auto bg-white rounded-lg shadow-lg p-6">
          <p className="font-bold text-lg mb-2">Duration: {duration}</p>
          <p className="mb-4">What We Offer: {whatWeOffer}</p>
          <h2 className="text-2xl font-semibold mb-3">Included Services</h2>
          <ul className="list-disc list-inside mb-6">
            {includes.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-3">Additional Services</h2>
          <ul className="list-disc list-inside mb-6">
            {additionalServices.map((service, index) => (
              <li key={index}>
                {service.service} - ${service.cost}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-3">Features</h2>
          <ul className="list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index}>
                {feature.feature}: {feature.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PackageDetailsPage;
