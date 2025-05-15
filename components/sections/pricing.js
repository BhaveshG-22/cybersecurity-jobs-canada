import Container from "@components/container";
import { CheckIcon } from "@heroicons/react/solid";

const plans = [
  {
    name: "Standard Plan",
    price: "$5.00",
    billing: "/year",
    features: [
      "One month membership",
      "10 Resume posting",
      "15 Messages",
      "10 Email collections",
    ],
    button: {
      text: "Choose this Plan",
      href: "#",
    },
  },
  {
    name: "Gold Plan",
    price: "$12.00",
    billing: "/year",
    features: [
      "One month membership",
      "50 Resume posting",
      "100 Messages",
      "200 Email collections",
    ],
    button: {
      text: "Choose this Plan",
      href: "#",
    },
  },
  {
    name: "Platinum Plan",
    price: "$25.00",
    billing: "/year",
    features: [
      "One month membership",
      "Unlimited Resume posting",
      "Unlimited Messages",
      "Unlimited Email collections",
    ],
    button: {
      text: "Choose this Plan",
      href: "#",
    },
  },
];

export default function Pricing(props) {
  return (
    <Container>
      <div className="mt-24">
        <h3 className="text-3xl font-bold tracking-tight text-center md:text-start">
          Pricing Plans
        </h3>
        <div className="grid gap-8 mt-12 gap-y-16 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Plan key={index} plan={plan} />
          ))}
        </div>
      </div>
    </Container>
  );
}

function Plan({ plan }) {
  return (
    <div className="">
      <h5 className="text-lg font-semibold text-center md:text-start">
        {plan.name}
      </h5>
      <h2 className="mt-4 text-4xl font-bold text-center text-emerald-400 md:text-start">
        {plan.price} <span className="text-sm">{plan.billing}</span>
      </h2>
      <ul className="grid gap-3 mt-6">
        {plan?.features.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-2 text-gray-400 md:justify-start">
            <CheckIcon className="w-4 h-4" /> <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-8 md:justify-start">
        <a
          href={plan.button.href || "#"}
          className="px-10 py-3 font-medium duration-150 transform bg-yellow-300 border border-transparent rounded-full hover:border-current hover:bg-white">
          {plan.button.text || "Choose this Plan"}
        </a>
      </div>
    </div>
  );
}
