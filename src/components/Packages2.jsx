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
  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md">
    {children}
  </button>
);

const Badge = () => (
  <div className="absolute top-2 right-3 -translate-y-1/2 z-20">
    <span className="text-white inline-flex items-center gap-1 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full shadow">
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
            // Show 18% off for first package, 13% off for the third package (index 2)
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

export default function Packages2() {
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
      name: "Back Up Power 1.0",
      price: "₦350,000",
      features: [
        "1kva Inverter",
        "1x 220Ah wet battery",
        "Wiring and Installation",
      ],
      details: ["TV", "Fan", "Light", "Smart Pump"],
      warranty: ["Free Home Delivery", "1 year warranty"],
    },
    {
      name: "Back Up Power 2.0",
      price: "₦545,000",
      features: [
        "2.5 kva sine wave inverter",
        "200AH gel battery",
        "300w high cut solar Panels",
        "MPPT Solar charge controller",
        "Wiring and Installation",
      ],
      details: ["TV", "Fan", "Light", "Smart Pump", "Air Conditioner"],
      warranty: ["Free Home Delivery", "2 year warranty"],
    },
    {
      name: "Back Up 2.1",
      price: "₦865,000",
      features: [
        "3.5 kva Inverter",
        "200AH gel battery",
        "300w high cut solar Panels",
        "Wiring and Installation",
        "MPPT Solar charge controller",
      ],
      details: ["TV", "Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Home Delivery", "2 year warranty"],
    },
    {
      name: "Back Up Power 3.0",
      price: "₦650,000",
      features: [
        "5 kva Inverter",
        "4x 200 wet battery",
        "3300w solar Panels",
        "MPPT Solar charge controller",
        "Wiring and Installation"
      ],
      details: ["TV", "Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Home Delivery", "3 year warranty"],
    },
    {
      name: "Back Up Power 3.1",
      price: "₦980,000",
      features: [
        "2.5 kva Inverter",
        "4x 200 watt battery",
        "Battery Pack",
        "Wiring and Installation",
        "Free Home Delivery",
      ],
      details: ["TV", "Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Home Delivery", "3 year warranty"],
    },
    {
      name: "Back Up Power 4.0",
      price: "₦950,000",
      features: [
        "1 kva Inverter",
        "1x 200Ah watt battery",
        "Wiring and Installation",
        "Free Home Delivery",
      ],
      details: ["TV", "Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Home Delivery", "3 year warranty"],
    },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  // Track if the path is /packages or /packages2 for active button styles
  const isReserved = location.pathname === "/packages2";
  const isPackages = location.pathname === "/packages";

  const handleTabClick = (type) => {
    if (type === "home") {
      navigate("/packages");
    } else if (type === "reserved") {
      navigate("/packages2");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 mt-24 pt-2">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Packages and Pricing</h2>
        <p className="text-gray-600">We have packages designed for efficiency and saving money.</p>

        <div className="mt-4 flex flex-wrap gap-4">
          <button
            onClick={() => handleTabClick("home")}
            className={`${
              isPackages
                ? "bg-yellow-400 text-white"
                : "bg-[#f3f3f3] text-black hover:bg-yellow-500"
            } font-medium py-2 px-4 rounded-md`}
          >
            Wiibi Home
          </button>
          <button
            className="bg-[#f3f3f3] text-black hover:bg-yellow-500 font-medium py-2 px-4 rounded-md"
          >
            Wiibi Business
          </button>
          <button
            onClick={() => handleTabClick("reserved")}
            className={`${
              isReserved
                ? "bg-yellow-400 text-white"
                : "bg-[#f3f3f3] text-black hover:bg-yellow-500"
            } font-medium py-2 px-4 rounded-md`}
          >
            Wiibi Reserved
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 relative"
        style={{
          overflowY: "visible",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {packageList.map((pkg, index) => {
          const isAdvance = pkg.name === "Advance";
          // Only first package (index 0) shows 18% off, third package (index 2) shows 13% off
          const showDiscount = index === 0 || index === 2;

          return (
            <Card
              key={index}
              className={`relative flex-shrink-0 w-80 ${
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
