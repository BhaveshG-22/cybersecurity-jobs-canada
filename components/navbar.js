import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "clsx";
import { Menu, Transition, Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Container from "@components/container";
import LogoImg from "../public/img/logo.svg";
import LogoDark from "../public/img/logo-dark.svg";

const navigation = [
  { title: "Find Jobs", path: "/listing" },
  { title: "Employers", path: "/employers" },
  { title: "Pricing", path: "/pricing" },
  { title: "Blog", path: "/blog" },
  { title: "Contact", path: "/contact" },
  {
    title: "Pages",
    path: "#",
    children: [
      { title: "Home Two", path: "/home-two" },
      { title: "Home Three", path: "/home-three" },
      { title: "Listing Default", path: "/listing" },
      { title: "Listing Two Column", path: "/listing-two" },
      { title: "Listing Minimal", path: "/listing-minimal" },
      { title: "Job Details", path: "/job/details" },
      { title: "Job Split View", path: "/job/split/details" },
      { title: "Job Application", path: "/job/apply" },
      { title: "About us", path: "/about" },
    ],
  },
];

export default function Navbar({ style }) {
  const inverted = style === "invert";
  return (
    <div
      className={cx(
        "border-b ",
        inverted ? "border-white/20" : "border-offgreen-medium"
      )}>
      <Container>
        <nav className="relative flex flex-wrap items-center justify-between py-6 mx-auto lg:justify-between">
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            {inverted ? <LogoAlt /> : <Logo />}
            {/* Mobile Menu  */}
            <MobileMenu inverted={inverted} />
          </div>

          {/* Desktop Menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
              <NavItems navigation={navigation} inverted={inverted} />
            </ul>
            <ActionButtons inverted={inverted} />
          </div>
        </nav>
      </Container>
    </div>
  );
}

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 text-2xl font-medium">
      {/* <Image src={LogoImg} alt="logo" /> */}
      Cyber Security Jobs Canada
    </Link>
  );
};

const LogoAlt = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 text-2xl font-medium">
      <Image src={LogoDark} alt="logo" />
    </Link>
  );
};

const Hamburger = ({ open, inverted }) => {
  return (
    <Disclosure.Button
      aria-label="Toggle Menu"
      className={cx(
        "px-2 py-1 ml-auto  rounded-md lg:hidden hover:text-green-500 focus:text-green-500 focus:outline-none ",
        inverted ? "text-gray-200" : "text-gray-900"
      )}>
      <svg
        className="w-6 h-6 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        {open && (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
        )}
        {!open && (
          <path
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        )}
      </svg>
    </Disclosure.Button>
  );
};

const MobileMenu = ({ inverted }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Hamburger open={open} inverted={inverted} />

          <Disclosure.Panel className="flex flex-col w-full my-5 lg:hidden">
            <>
              <NavItems
                navigation={navigation}
                mobile={true}
                inverted={inverted}
              />
              <ActionButtons mobile={true} inverted={inverted} />
            </>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const ActionButtons = ({ mobile, inverted }) => {
  return (
    <div
      className={cx(mobile ? "flex gap-3 mt-2" : "hidden mx-3 gap-3 lg:flex")}>
      <Link
        href="#"
        className={cx(
          "px-5 py-1.5 border rounded-full",
          inverted
            ? "text-white border-zinc-200 hover:border-white"
            : " text-black border-black hover:border-gray-500"
        )}>
        Login
      </Link>
      <Link
        href="#"
        className="px-5 py-1.5 text-black bg-yellow-200 border border-yellow-200 hover:border-black rounded-full ">
        Post a Job
      </Link>
    </div>
  );
};

const NavItems = (props) => {
  return (
    <>
      {props.navigation.map((item, index) => {
        return (
          <div key={index}>
            {item.children && item.children.length > 0 ? (
              <DropdownMenu
                menu={item}
                items={item.children}
                mobile={props.mobile}
                inverted={props.inverted}
              />
            ) : (
              <MenuItem
                item={item}
                mobile={props.mobile}
                inverted={props.inverted}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

const MenuItem = ({ item, mobile, inverted }) => {
  return (
    <Link
      href={item?.path ? item.path : "#"}
      className={cx(
        "  rounded-md outline-none  transition-all focus-visible:ring-1    focus:outline-none",
        inverted
          ? "text-zinc-100  hover:text-yellow-200 focus:text-yellow-200 ring-yellow-200"
          : "text-gray-900  hover:text-green-500 focus:text-green-500 ring-green-500",
        mobile ? "w-full block px-4 py-2 -ml-4" : "inline-block px-4 py-2"
      )}>
      {item.title}
    </Link>
  );
};

const DropdownMenu = ({ menu, items, mobile, inverted }) => {
  return (
    <Menu as="div" className="relative text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={cx(
              "flex items-center gap-x-1 transition-all rounded-md outline-none focus:outline-none focus-visible:ring-1    ",
              inverted
                ? "focus-visible:text-yellow-200 focus:text-yellow-200 ring-yellow-200"
                : "focus-visible:text-green-500",
              open
                ? inverted
                  ? "text-yellow-200"
                  : "text-green-500 "
                : inverted
                ? "text-zinc-100 hover:text-yellow-200"
                : "text-gray-700 hover:text-green-500",
              mobile ? "w-full px-4 py-2 -ml-4" : "inline-block px-4 py-2"
            )}>
            <span>{menu.title}</span>
            <ChevronDownIcon className="w-4 h-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95">
            <Menu.Items
              className={cx(
                "z-20 lg:w-56 origin-top-left  rounded-md  lg:absolute lg:right-0  focus:outline-none",
                !mobile && "bg-white shadow-lg  dark:bg-gray-800"
              )}>
              <div className={cx(!mobile && "py-3")}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={index}>
                    {({ active }) => (
                      <Link
                        href={item?.path ? item.path : "#"}
                        className={cx(
                          "flex space-x-2 lg:space-x-4 items-center px-5 py-2",
                          inverted
                            ? mobile
                              ? active
                                ? "text-yellow-200"
                                : "text-zinc-100"
                              : active
                              ? "text-green-500"
                              : "text-gray-700"
                            : active
                            ? "text-green-500"
                            : "text-gray-700"
                        )}>
                        <span> {item.title}</span>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
