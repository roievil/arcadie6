import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import bannner1 from "../public/images/accueil/arcadieBanner1.png";
import bannner2 from "../public/images/accueil/arcadieBanner2.png";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <div
      className="flex flex-col flex-grow px-6 bg-cover bg-bottom overflow-y-scroll"
      style={{
        height: "80vh",
        backgroundImage: "url('./images/accueil/arcadieBannerFond.png')",
      }}
    >
      <div
        className="flex-grow p-4 relative flex flex-col justify-center items-center"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <div className="absolute inset-0"></div>
        <div className="flex flex-col justify-center items-center md:flex-row md:space-x-3">
          <div className="mb-6 md:w-1/2 md:mb-0">
            <Image
              src={bannner1}
              alt="Photo"
              width="500"
              height="500"
              priority
              className="max-w-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <Image
              src={bannner2}
              alt="Photo"
              width="500"
              height="500"
              priority
              className="max-w-full object-cover"
            />
          </div>
        </div>
        <div className="grid gap-6 my-3 md:grid-cols-2 relative z-10">
          {services.map((service) => (
            <div
              className="border-2 col-span-2 p-2 bg-zinc-200 rounded-lg dark:bg-dark-200 md:col-span-1 hover:border-gray-600"
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
