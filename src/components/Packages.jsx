import React from "react";
import { Check } from "lucide-react";

const Badge = ({ children }) => (
  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-md shadow">
    {children}
  </span>
);

const Button = ({ children }) => (
  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded-md">
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow-md p-4 ${className || ""}`}>{children}</div>
);

const CardHeader = ({ title, price, originalPrice }) => (
  <div className="text-center pb-4">
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <div className="mt-2">
      <span className="text-2xl font-bold text-gray-900">{price}</span>
      {originalPrice && (
        <span className="text-sm text-gray-500 line-through ml-2">{originalPrice}</span>
      )}
    </div>
  </div>
);

const CardContent = ({ children }) => <div className="space-y-4">{children}</div>;

const CardFooter = ({ children }) => <div className="mt-4">{children}</div>;

export default function Packages() {
  const packageList = [
    {
      name: "Basic Solar (mini)",
      price: "₦570,000",
      originalPrice: "₦600,000",
      isPopular: false,
      features: [
        "1kva Inverter",
        "100 watt Battery",
        "100w solar Panels",
        "Wiring and Installation",
        "1 Year warranty",
      ],
      details: ["Fan", "Light", "Smart Pump"],
      warranty: ["Free Home Delivery", "1 year warranty"],
    },
    {
      name: "Standard",
      price: "₦1,200,000",
      originalPrice: null,
      isPopular: false,
      features: [
        "2.5 kva sine wave inverter",
        "200AH gel battery",
        "300w high cut solar Panels",
        "MPPT Solar charge controller",
        "Wiring and Installation",
      ],
      details: ["Fan", "Light", "Smart Pump", "Air Conditioner"],
      warranty: ["Free Home Delivery", "2 year warranty"],
    },
    {
      name: "Advance",
      price: "₦1,300,000",
      originalPrice: "₦1,500,000",
      isPopular: true,
      features: [
        "3.5 kva Inverter",
        "200AH gel battery",
        "300w high cut solar Panels",
        "Wiring and Installation",
        "MPPT Solar charge controller",
      ],
      details: ["Fan", "Light", "Gadgets", "Smart Pump", "Fridge", "Air Conditioner"],
      warranty: ["Free Home Delivery", "2 year warranty"],
    },
    {
      name: "Classic",
      price: "₦2,300,000",
      originalPrice: "₦2,500,000",
      isPopular: false,
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
      isPopular: false,
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

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Packages and Pricing</h2>
        <p className="text-gray-600">We have packages designed for efficiency and saving money.</p>
      </div>

      <div
        className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {packageList.map((pkg, index) => (
          <Card key={index} className="relative flex-shrink-0 w-80">
            {pkg.isPopular && <Badge>POPULAR</Badge>}

            <CardHeader
              title={pkg.name}
              price={pkg.price}
              originalPrice={pkg.originalPrice}
            />

            <CardContent>
              {/* Features */}
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

              {/* What it Powers */}
              <div>
                <p className="text-sm font-medium text-gray-900 mb-2">What it Powers:</p>
                <ul className="space-y-1">
                  {pkg.details.map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Check className="h-3 w-3 text-green-500 mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warranty */}
              <div>
                <ul className="space-y-1">
                  {pkg.warranty.map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Check className="h-3 w-3 text-green-500 mr-2" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter>
              <Button>Buy</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
