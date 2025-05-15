import Container from "@components/container";
import Image from "next/image";
import Link from "next/link";
import LogoDark from "../public/img/logo-dark.svg";

export default function Footer() {
  return (
    <footer className="pt-16 bg-slate-900">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-9">
          <div className="lg:col-span-2">
            <Logo />

            <div className="mt-12">
              <p className="text-white">
                <span className="opacity-60">Email: </span>
                <a
                  href="mailto:support@jobhire.com"
                  className=" text-emerald-500">
                  support@jobhire.com
                </a>
              </p>
              <p className="mt-2 text-white">
                <span className="opacity-60">Call: </span>
                <a href="tel:+18521234567" className="text-white ">
                  +1 (852) 1234 567
                </a>
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex p-2 mr-2 border rounded-full border-white/50 text-white/70">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.58202 15.9403V9.07818H11.8844L12.2299 6.40309H9.58202V4.69543C9.58202 3.92117 9.79614 3.39352 10.9077 3.39352L12.3231 3.39294V1.00024C12.0783 0.968434 11.2381 0.895508 10.2602 0.895508C8.21815 0.895508 6.82014 2.14194 6.82014 4.43049V6.40309H4.51074V9.07818H6.82014V15.9403H9.58202Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex p-2 mr-2 border rounded-full border-white/50 text-white/70">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.3183 5.07024C17.7165 5.33101 17.0947 5.51155 16.4327 5.59179C17.1147 5.19059 17.6363 4.54868 17.877 3.76635C17.2351 4.14749 16.533 4.40826 15.7908 4.56874C15.189 3.92683 14.3264 3.52563 13.3836 3.52563C11.5582 3.52563 10.0938 5.01006 10.0938 6.81543C10.0938 7.07621 10.1139 7.31693 10.1741 7.55764C7.44593 7.43729 5.03876 6.11334 3.41391 4.12743C2.25045 6.21364 3.55433 7.93878 4.4169 8.52051C3.89535 8.52051 3.37379 8.36003 2.93248 8.11932C2.93248 9.74416 4.07589 11.0882 5.56031 11.3891C5.23935 11.4894 4.5172 11.5495 4.07589 11.4492C4.49714 12.7531 5.72079 13.716 7.14503 13.736C6.02168 14.6187 4.37678 15.3208 2.27051 15.1001C3.73487 16.0429 5.46001 16.5845 7.32557 16.5845C13.3836 16.5845 16.6734 11.5696 16.6734 7.23669C16.6734 7.09627 16.6734 6.95585 16.6534 6.81543C17.3354 6.31394 17.8971 5.73221 18.3183 5.07024Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex p-2 mr-2 border rounded-full border-white/50 text-white/70">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.5605 0.148926H3.97843C2.16851 0.148926 0.687378 1.62942 0.687378 3.43998V10.0221C0.687378 11.832 2.16851 13.3131 3.97843 13.3131H10.5605C12.3705 13.3131 13.8516 11.832 13.8516 10.0221V3.43998C13.8516 1.62942 12.3705 0.148926 10.5605 0.148926ZM7.26948 9.47347C5.7546 9.47347 4.52689 8.24524 4.52689 6.73103C4.52689 5.21615 5.7546 3.98843 7.26948 3.98843C8.78369 3.98843 10.0121 5.21615 10.0121 6.73103C10.0121 8.24524 8.78369 9.47347 7.26948 9.47347ZM10.8348 3.98843C10.38 3.98843 10.0121 3.61999 10.0121 3.16567C10.0121 2.71135 10.38 2.34291 10.8348 2.34291C11.2897 2.34291 11.6576 2.71135 11.6576 3.16567C11.6576 3.61999 11.2897 3.98843 10.8348 3.98843Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-white">For Candidates</h4>
            <ul className="mt-6 text-sm text-white opacity-60">
              {candidateMenu.map((item, index) => (
                <li className="leading-8" key={index}>
                  <a
                    href={item.slug}
                    className="duration-150 transform hover:text-green-500">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold text-white ">
              For For Employers
            </h4>
            <ul className="mt-6 text-sm text-white opacity-60">
              {employerMenu.map((item, index) => (
                <li className="leading-8" key={index}>
                  <a
                    href={item.slug}
                    className="duration-150 transform hover:text-green-500">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="max-w-md mb-6 text-white/60">
              Subscribe to our newsletter and never miss latest job alert and
              news
            </p>
            <form action="#">
              <div className="relative flex max-w-md">
                <input
                  type="text"
                  className="w-full py-3 pl-8 -mr-12 text-white bg-transparent border rounded-full"
                  placeholder="Email Address"
                />
                <button
                  href="#"
                  className="absolute inset-y-0 right-0 max-w-xs px-10 py-3 font-semibold align-middle duration-150 transform bg-yellow-300 rounded-full hover:bg-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-8 border-t border-gray-800 mt-14 lg:flex-row">
          <p className="text-xs text-white/60">
            {new Date().getFullYear()} Jobhire. All Right Reserved. Made by{" "}
            <a href="https://web3templates.com" target="_blank" rel="noopener">
              Web3Templates
            </a>
          </p>
          <div className="flex gap-2 text-xs text-white/60">
            <Link href="#">Privacy</Link> <span>&middot;</span>{" "}
            <Link href="#">Terms</Link>{" "}
          </div>
        </div>
      </Container>
    </footer>
  );
}

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 text-2xl font-medium">
      <Image src={LogoDark} alt="logo" />
    </Link>
  );
};

const candidateMenu = [
  {
    title: "Browse all Jobs",
    slug: "#",
  },
  {
    title: "Candidate Dashboard",
    slug: "#",
  },

  {
    title: "Latest News",
    slug: "#",
  },
  {
    title: "Job Alerts",
    slug: "#",
  },
  {
    title: "My Bookmarks",
    slug: "#",
  },
];

const employerMenu = [
  {
    title: "Browse Candidates",
    slug: "#",
  },
  {
    title: "Employer Dashboard",
    slug: "#",
  },
  {
    title: "Submit a Job",
    slug: "#",
  },
  {
    title: "Pricing & Plans",
    slug: "#",
  },
];
