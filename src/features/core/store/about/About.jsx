import React from "react";
import Image from "next/image";
import aboutImage from "../../../../../public/assets/images/aboutimage.png";
import servicesImage from "../../../../../public/assets/icons/services.svg";
import servicesdolar from "../../../../../public/assets/icons/services-dolar.svg";
import servicescart from "../../../../../public/assets/icons/services-cart.svg";
import servicesmoney from "../../../../../public/assets/icons/services-money.svg";
import tomcruise from "../../../../../public/assets/images/tomcruise.png";
import emmawatson from "../../../../../public/assets/images/emmawatson.png";
import willsmith from "../../../../../public/assets/images/willsmith.png";
import twitter from "../../../../../public/assets/icons/icon-twitter.svg";
import instagram from "../../../../../public/assets/icons/icon-instagram.svg";
import linkedin from "../../../../../public/assets/icons/icon-linkedin.svg";
import delivery from "../../../../../public/assets/icons/delivery.svg";
import customerserv from "../../../../../public/assets/icons/customerserv.svg";
import guarantee from "../../../../../public/assets/icons/guarantee.svg";

function About() {
  return (
    <>
      <div className="flex">
        <div className="mt-28 flex-1 ml-12">
          <h1 className="text-4xl mb-10">Our Story</h1>
          <span className="">
            Welcome to Techno Market, your ultimate destination for exclusive
            fashion and lifestyle products. At Techno Market, we believe that
            everyone deserves to experience the latest trends and enjoy
            high-quality products, and that's why we're here to bring you the
            best of the best.
            <br />
            <br />
            Techno Market has more than 1 Million products to offer, growing at
            a very fast. Techno Market offers a diverse assotment in categories
            ranging from consumer.
          </span>
        </div>
        <div className="flex-1 mt-12 ml-16">
          <Image src={aboutImage} alt="about" width={600} height={600} />
        </div>
      </div>

      <div>
        <h1 className="text-4xl text-center mt-20 mb-20">OUR STATS</h1>
      </div>
      <div className="flex justify-center gap-40 mt-16 mb-20">
        <div className="w-48 h-48 bg-white border-2 flex flex-col justify-center items-center hover:bg-amber-800">
          <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
            <Image
              src={servicesImage}
              alt="services"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-xl font-semibold mt-2">5.5K</h2>
          <p className="text-sm font-semibold text-neutral-950 mt-2">
            Sellers active in our site
          </p>
        </div>

        <div className="w-48 h-48 bg-white border-2 flex flex-col justify-center items-center hover:bg-amber-800">
          <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
            <Image
              src={servicesdolar}
              alt="services"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-xl font-semibold mt-2">33K</h2>
          <p className="text-sm font-semibold text-neutral-950 mt-2">
            Monthly products sold
          </p>
        </div>

        <div className="w-48 h-48 bg-white border-2 flex flex-col justify-center items-center hover:bg-amber-800">
          <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
            <Image src={servicescart} alt="services" width={100} height={100} />
          </div>
          <h2 className="text-xl font-semibold mt-2">45.5K</h2>
          <p className="text-sm font-semibold text-neutral-950 mt-2 ml-4">
            Customers active in our site
          </p>
        </div>

        <div className="w-48 h-48 bg-white border-2 flex flex-col justify-center items-center hover:bg-amber-800">
          <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
            <Image
              src={servicesmoney}
              alt="services"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-xl font-semibold mt-2">25K</h2>
          <p className="text-sm font-semibold text-neutral-950 mt-2">
            Annual gross sale
          </p>
        </div>
      </div>

      <div className="mb-10">
        <h1 className="text-4xl text-center mt-20 mb-20">OUR TEAM</h1>
      </div>

      <div className="flex justify-center gap-20 mb-20">
        <div className="flex flex-col">
          <Image src={tomcruise} alt="tom" width={205} height={205} />
          <h1 className="text-2xl font-semibold mt-2 mb-1">Tom Cruise</h1>
          <p className="text-sm">Founder & Chairman</p>
          <div className="flex mt-2">
            <a href="#">
              <Image src={twitter} alt="twitter" width={30} height={30} />
            </a>
            <a href="#">
              <Image src={instagram} alt="instagram" width={30} height={30} />
            </a>
            <a href="#">
              <Image src={linkedin} alt="linkedin" width={30} height={30} />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <Image src={emmawatson} alt="emma" width={250} height={250} />
          <h1 className="text-2xl font-semibold mt-2 mb-1">Emma Watson</h1>
          <p className="text-sm">Managing Director</p>
          <div className="flex mt-2">
            <a href="#">
              <Image src={twitter} alt="twitter" width={30} height={30} />
            </a>
            <a href="#">
              <Image src={instagram} alt="instagram" width={30} height={30} />
            </a>
            <a href="#">
              <Image src={linkedin} alt="linkedin" width={30} height={30} />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <Image src={willsmith} alt="tom" width={280} height={280} />
          <h1 className="text-2xl font-semibold mt-2 mb-1">Will Smith</h1>
          <p className="text-sm">Product Designer</p>
          <div className="flex mt-2">
            <a href="#">
              <Image src={twitter} alt="twitter" width={30} height={30} />
            </a>
            <a href="#">
              <Image src={instagram} alt="instagram" width={30} height={30} />
            </a>
            <a href="#">
              <Image src={linkedin} alt="linkedin" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="mb-20">
        <h1 className="text-4xl text-center">OUR SERVICES</h1>
      </div>

      <div className="flex gap-20 justify-center mb-20 ">
        <div>
          <Image src={delivery} alt="delivery" width={100} height={100} />
          <h1 className="font-semibold">FREE AND FAST DELIVERY</h1>
          <p className="">We offer free delivery for all orders over $100</p>
        </div>
        <div>
          <Image
            src={customerserv}
            alt="customerservice"
            width={100}
            height={100}
          />
          <h1 className="font-semibold">24/7 CUSTOMER SERVICE</h1>
          <p className="">We have a 24/7 customer service team.</p>
        </div>
        <div>
          <Image src={guarantee} alt="guarantee" width={100} height={100} />
          <h1 className="font-semibold">MONEY BACK GUARANTEE</h1>
          <p className="">We offer a 30-day money-back guarantee.</p>
        </div>
      </div>
    </>
  );
}

export default About;
