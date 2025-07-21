import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Check } from "lucide-react";

import TV from "../assets/tv.svg";
import Fan from "../assets/fan.svg";
import Light from "../assets/light.svg";
import Gadget from "../assets/gadget.svg";
import SmartPump from "../assets/smartpump.svg";
import Fridge from "../assets/refrigerator-svgrepo-com 1.svg";
import AirCondition from "../assets/air-conditioning-svgrepo-com 1.svg";
import MarkActive from "../assets/mark-active.svg";

const Button = ({ children }) => (
  <button className="w-full bg-[#fcb139] hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md">
    {children}
  </button>
);

const Badge = () => (
  <div className="absolute top-2 right-3 -translate-y-1/2 z-20">
    <span className="text-white inline-flex items-center gap-1 bg-[#fcb139] text-xs font-semibold px-3 py-1 rounded-full shadow">
      <span className="text-sm text-white">★</span> Popular
    </span>
  </div>
);

const Card = ({ children, className }) => (
  <div
    className={`relative overflow-visible bg-white rounded-xl shadow-md pt-10 p-4 flex flex-col justify-between min-h-[540px] w-full ${
      className || ""
    }`}
  >
    {children}
  </div>
);

const CardHeader = ({ title }) => (
  <div className="text-left pb-4">
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
  </div>
);

const CardContent = ({ children }) => (
  <div className="space-y-4 flex-1">{children}</div>
);

const CardFooter = ({ price, originalPrice, showDiscount, warranty, children }) => (
  <div className="mt-4">
    <div className="mb-3">
      <ul className="space-y-1">
        {warranty.map((item, i) => (
          <li key={i} className="flex items-center text-sm">
            <img src={MarkActive} alt="mark active" className="h-4 w-4 mr-2" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="mb-3 text-left">
      <span className="text-2xl font-bold text-gray-900">{price}</span>
      {originalPrice && (
        <>
          <span className="text-sm text-gray-500 line-through ml-2">{originalPrice}</span>
          {showDiscount && (
            <span className="text-sm text-red-500 font-semibold ml-2">
              {price === "₦865,000" ? "13% off" : "18% off"}
            </span>
          )}
        </>
      )}
    </div>

    {children}
  </div>
);

export default function Packages3() {
  const icons = {
    TV,
    Fan,
    Light,
    Gadget,
    Gadgets: Gadget,
    "Smart Pump": SmartPump,
    Fridge,
    "Air Conditioner": AirCondition,
  };

  const packageList = [
    {
      name: "Business Basic",
      price: "₦1,200,000",
      features: [
        "5kva Inverter",
        "4x 200Ah gel batteries",
        "2000w solar panels",
        "MPPT Solar charge controller",
        "Wiring and Installation",
      ],
      details: ["TV", "Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Delivery", "2 year warranty"],
    },
    {
      name: "Business Standard",
      price: "₦2,500,000",
      features: [
        "10kva Inverter",
        "8x 200Ah gel batteries",
        "4000w solar panels",
        "MPPT Solar charge controller",
        "Wiring and Installation",
      ],
      details: ["TV", "Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Delivery", "3 year warranty"],
    },
    {
      name: "Business Premium",
      price: "₦4,800,000",
      features: [
        "15kva Inverter",
        "12x 200Ah gel batteries",
        "6000w solar panels",
        "MPPT Solar charge controller",
        "Wiring and Installation",
      ],
      details: ["TV", "Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Delivery", "5 year warranty"],
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const isBusiness = location.pathname === "/packages3";
  const isPackages = location.pathname === "/packages";
  const isReserved = location.pathname === "/packages2";

  const handleTabClick = (type) => {
    if (type === "home") {
      navigate("/packages");
    } else if (type === "business") {
      navigate("/packages3");
    } else if (type === "reserved") {
      navigate("/packages2");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 mt-24 pt-2">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 mt-8">Packages and Pricing</h2>
        <p className="text-gray-600">We have packages designed for efficiency and saving money.</p>
        <div className="mt-8 flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto">
          <button
            onClick={() => handleTabClick("home")}
            className={`${
              isPackages
                ? "bg-[#fcb139] text-white"
                : "bg-[#f3f3f3] text-black lg:hover:bg-yellow-500"
            } text-sm sm:text-base font-medium py-2 px-3 rounded-md whitespace-nowrap`}
          >
            Wiibi Home
          </button>

          <button
            onClick={() => handleTabClick("business")}
            className={`${
              isBusiness
                ? "bg-[#fcb139] text-white"
                : "bg-[#f3f3f3] text-black lg:hover:bg-yellow-500"
            } text-sm sm:text-base font-medium py-2 px-3 rounded-md whitespace-nowrap`}
          >
            Wiibi Business
          </button>

          <button
            onClick={() => handleTabClick("reserved")}
            className={`${
              isReserved
                ? "bg-[#fcb139] text-white"
                : "bg-[#f3f3f3] text-black lg:hover:bg-yellow-500"
            } text-sm sm:text-base font-medium py-2 px-3 rounded-md whitespace-nowrap`}
          >
            Wiibi Reserved
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packageList.map((pkg, index) => {
          const isPremium = pkg.name === "Business Premium";
          const showDiscount = index === 1;

          return (
            <Card
              key={index}
              className={isPremium ? "border border-yellow-400" : ""}
            >
              {isPremium && <Badge />}
              <CardHeader title={pkg.name} />

              <CardContent>
                <div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-4">To Power:</p>
                  <ul className="space-y-1">
                    {pkg.details.map((item, i) => (
                      <li key={i} className="flex items-center text-sm">
                        {icons[item] ? (
                          <img src={icons[item]} alt={item} className="h-4 w-4 mr-2" />
                        ) : (
                          <Check className="h-3 w-3 text-green-500 mr-2" />
                        )}
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter
                price={pkg.price}
                originalPrice={pkg.originalPrice}
                showDiscount={showDiscount}
                warranty={pkg.warranty}
              >
                <Button>Buy</Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}