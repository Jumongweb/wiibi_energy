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
    className={`relative overflow-visible bg-white rounded-xl shadow-md pt-10 p-4 flex flex-col justify-between min-h-[540px] ${
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

const CardFooter = ({ price, originalPrice, showDiscount, discountPercent, children }) => (
  <div className="mt-4">
    <div className="mb-3 text-left">
      <span className="text-2xl font-bold text-gray-900">{price}</span>
      {originalPrice && (
        <>
          <span className="text-sm text-gray-500 line-through ml-2">{originalPrice}</span>
          {showDiscount && discountPercent && (
            <span className="text-sm text-red-500 font-semibold ml-2">{discountPercent}% off</span>
          )}
        </>
      )}
    </div>
    {children}
  </div>
);

export default function WiibiHome() {
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
      name: "Basic Solar (mini)",
      price: "₦570,000",
      originalPrice: "₦700,000",
      features: [
        "1kva Inverter",
        "1220 wet Battery",
        "500w solar Panels",
        "Wiring and Installation",
      ],
      details: ["TV", "Fan", "Light", "Smart Pump"],
      warranty: ["Free Home Delivery", "1 year warranty"],
    },
    {
      name: "Standard",
      price: "₦1,200,000",
      originalPrice: null,
      features: [
        "2.5 pure sine wave inverter",
        "2x 220AH wet battery",
        "1650 Half cut solar Panels",
        "MPPT Solar Panel",
        "Wiring and Installation",
      ],
      details: ["TV", "Fan", "Light", "Smart Pump", "Air Conditioner"],
      warranty: ["Free Home Delivery", "2 year warranty"],
    },
    {
      name: "Advance",
      price: "₦1,300,000",
      originalPrice: "₦1,500,000",
      features: [
        "3.5 kva Inverter",
        "4x 200AH wet battery",
        "3300w high cut solar Panels",
        "Wiring and Installation",
      ],
      details: ["TV", "Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Home Delivery", "2 year warranty"],
    },
    {
      name: "Classic",
      price: "₦2,300,000",
      originalPrice: "₦2,500,000",
      features: [
        "5 kva Inverter",
        "2x 200AH gel battery",
        "500w high cut solar Panels",
        "Wiring and Installation",
        "MPPT Solar charge controller",
      ],
      details: ["Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Home Delivery", "3 year warranty"],
    },
    {
      name: "Advance",
      price: "₦1,300,000",
      originalPrice: "₦1,500,000",
      features: [
        "3.5 kva Inverter",
        "4x 200 watt battery",
        "300w high cut solar Panels",
        "Wiring and Installation",
        "MPPT Solar charge controller",
      ],
      details: ["Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Home Delivery", "3 year warranty"],
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const isReserved = location.pathname === "/packages2";
  const isBusiness = location.pathname === "/packages3";
  const isHome = location.pathname === "/packages";

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

        {/* Tabs */}
        <div className="mt-8 flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto">
          <button
            onClick={() => handleTabClick("home")}
            className={`${
              isHome
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

      {/* Cards - Stacked layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packageList.map((pkg, index) => {
          const isAdvance = pkg.name === "Advance";
          const showDiscount = index === 0 || index === 2;
          const discountPercent = index === 0 ? 18 : index === 2 ? 13 : null;

          return (
            <Card
              key={index}
              className={`relative w-full ${
                isAdvance ? "border border-yellow-400" : ""
              }`}
            >
              {isAdvance && <Badge />}

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
                  <p className="text-sm font-medium text-gray-900 mb-2">To Powers:</p>
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

                <div>
                  <ul className="space-y-1">
                    {pkg.warranty.map((item, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <img src={MarkActive} alt="mark active" className="h-4 w-4 mr-2" />
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
                discountPercent={discountPercent}
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
