import Container from "@components/container";
import Layout from "@components/layout";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";
import Button from "@components/ui/button";
import cx from "clsx";
import Head from "next/head";
import { useState } from "react";

const pricing = [
  {
    name: "Basic",
    price: {
      monthly: "$19",
      annual: "$16",
    },
    popular: false,
    features: [
      "All Basic Features",
      "Post upto 3 Jobs",
      "Employer Dashboard",
      "Basic Integrations",
      "Invite 3 Team Members",
      "Email Support",
    ],
    button: {
      text: "Get Started",
      link: "/",
    },
  },
  {
    name: "Advanced",
    price: {
      monthly: "$49",
      annual: "$39",
    },
    popular: true,
    features: [
      "All Advanced Features",
      "Post upto 20 Jobs",
      "Custom domains",
      "Unlimited Collaborators",
      "Advanced Integrations",
      "Priority Support",
    ],
    button: {
      text: "Get Started",
      link: "#",
    },
  },
  {
    name: "Enterprise",
    price: {
      monthly: "$149",
      annual: "$129",
    },
    popular: false,
    features: [
      "All Andvanced Features",
      "Unlimited Custom domains",
      "99.99% Uptime SLA",
      "SAML & SSO Integration",
      "Dedicated Account Manager",
      "24/7 Phone Support",
    ],
    button: {
      text: "Contact us",
      link: "/contact",
    },
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  return (
    <>
      <Head>
        <title>Pricing | Jobhire Template</title>
      </Head>

      <Layout>
        <SubpageHero>
          <SubpageHero.Title>Pricing</SubpageHero.Title>
          <p className="text-center text-black/60 mt-2">
            Simple, Transparent & Honest Pricing.
          </p>

          <div className="flex justify-center mt-5 sm:hidden">
            <span
              className={cx(
                "  font-bold text-sm bg-yellow-200 text-yellow-900 px-2 rounded-full py-1",
                !annual && "opacity-50"
              )}>
              Save 20%
            </span>
          </div>
        </SubpageHero>

        <Container>
          <div>
            <div className="flex justify-center gap-3 mt-10 sm:mt-16">
              <span className={annual ? "text-gray-400" : "text-gray-800"}>
                Monthly <span className="hidden sm:inline">Billing</span>
              </span>
              <div className="relative">
                <input
                  type="checkbox"
                  className="peer sr-only opacity-0"
                  onChange={() => setAnnual(!annual)}
                  checked={annual}
                  id="toggle"
                />
                <label
                  htmlFor="toggle"
                  className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500">
                  <span className="sr-only">Enable</span>
                </label>
              </div>
              <span className={annual ? "text-gray-800" : "text-gray-400"}>
                Annual <span className="hidden sm:inline">Billing</span>
              </span>

              <span
                className={cx(
                  "hidden sm:block font-bold text-sm bg-yellow-200 text-yellow-900 px-2 rounded-full py-1",
                  !annual && "opacity-50"
                )}>
                Save 20%
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-8 sm:mt-12">
            {pricing.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col w-full order-first lg:order-none border-2 border-[#D8DEE9] border-opacity-50 py-5 px-6 rounded-md">
                  <div>
                    <h4 className="text-lg inline-flex relative after:absolute after:w-full after:h-2 after:bg-yellow-200 after:-z-10 after:bottom-1.5 after:scale-x-105">
                      {item.name}
                    </h4>

                    <p className="mt-3 ">
                      <span className="text-4xl font-bold text-black md:text-4xl">
                        {annual ? item.price.annual : item.price.monthly}
                      </span>
                      <span className="">/mo</span>
                    </p>
                  </div>
                  <ul className="grid mt-8 text-left gap-y-4">
                    {item.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-gray-800">
                        <svg
                          className="w-6 h-6 text-offgreen-dark"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <circle
                            cx="12"
                            cy="12"
                            r="9"
                            fill="currentColor"
                            fillOpacity=".16"></circle>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.75 12a8.25 8.25 0 0 1 11.916-7.393.75.75 0 1 0 .668-1.343A9.713 9.713 0 0 0 12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c0-.366-.02-.727-.06-1.082a.75.75 0 1 0-1.49.164A8.25 8.25 0 1 1 3.75 12Zm17.78-6.47a.75.75 0 0 0-1.06-1.06L12 12.94l-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l9-9Z"
                            fill="currentColor"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex mt-8">
                    <Button>Choose this Plan</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <p className="text-sm text-gray-500">
              We promise 100% price honesty. No hidden charges.
            </p>
          </div>
        </Container>
        <Cta />
      </Layout>
    </>
  );
}
