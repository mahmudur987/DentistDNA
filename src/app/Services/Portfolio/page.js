// pages/portfolio/page.js
import { PlaceHolder } from "@/components/Common/Navbar/Navbar";
import { portfolioPackages } from "@/constant/PortFoolioPackages";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-5xl font-bold text-center mb-10">
        Our Portfolio Packages
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {portfolioPackages.map((pkg) => (
          <div key={pkg.id} className="card bg-base-100 w-96 shadow-xl mx-auto">
            <figure className="w-full h-96">
              <Image
                width={500}
                height={500}
                src={pkg.images[0] ?? PlaceHolder}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {pkg.packageName}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{pkg.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/Services/Portfolio/${pkg.slug}`}>
                  <button className="btn btn-primary w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
