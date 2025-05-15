import Container from "@components/container";
import Button from "@components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

// Your Jobs Array here
// const jobs = [{ ... }];
// Sample data at the end of this page

export default function Recentjobs() {
  const [filter, setFilter] = useState("");

  const filtered = !filter
    ? jobs.slice(0, 6)
    : jobs.filter((job) => job.filter.includes(filter));

  return (
    <div className="my-16">
      <Container>
        <div className="flex flex-col justify-between gap-3 md:flex-row">
          <h2 className="text-2xl font-bold md:text-3xl">
            Recent Available Jobs
          </h2>
          <div className="flex gap-x-5 md:gap-x-10">
            <button
              className={clsx(
                filter === "contract" &&
                  "relative  font-bold after:bg-yellow-200 after:h-1 after:w-full after:absolute after:left-0 after:bottom-2.5 after:z-0"
              )}
              onClick={() => setFilter("contract")}>
              <span className="relative z-10"> Contract</span>
            </button>
            <button
              className={clsx(
                filter === "remote" &&
                  "relative  font-bold after:bg-yellow-200 after:h-1 after:w-full after:absolute after:left-0 after:bottom-2.5 after:z-0"
              )}
              onClick={() => setFilter("remote")}>
              <span className="relative z-10"> Remote</span>
            </button>
            <button
              className={clsx(
                !filter &&
                  "relative  font-bold after:bg-yellow-200 after:h-1 after:w-full after:absolute after:left-0 after:bottom-2.5 after:z-0"
              )}
              onClick={() => setFilter("")}>
              <span className="relative z-10">Popular</span>
            </button>
          </div>
        </div>
        <div className="grid gap-5 my-16 md:grid-cols-2 lg:grid-cols-1">
          {filtered.map((job) => {
            return (
              <div
                className="flex flex-col justify-between gap-3 px-6 py-6 border border-gray-200 lg:flex-row group hover:border-black rounded-xl"
                key={job.id}>
                <div className="flex flex-col items-center flex-1 gap-5 lg:flex-row">
                  <div className="shrink-0">
                    <img src={job.image} className="w-8" alt="Logo" />
                  </div>
                  <div className="flex-1 text-center lg:text-start">
                    <h3 className="text-lg font-semibold">
                      {job.title}
                    </h3>
                    <h4 className="text-green-500">{job.company}</h4>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-1 gap-5 lg:justify-start">
                  <span className="text-gray-500 lg:flex-1">
                    {job.type}
                  </span>

                  <div className="flex items-center gap-2 lg:flex-1">
                    <svg
                      width="14"
                      height="16"
                      className="inline-block m-0"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 0C3.62266 0 0.875 2.74766 0.875 6.125C0.875 7.20606 1.16062 8.26891 1.70097 9.19859C1.82694 9.41534 1.96775 9.62656 2.11956 9.82641L6.73387 16H7.26609L11.8804 9.82644C12.0322 9.62656 12.173 9.41537 12.299 9.19862C12.8394 8.26891 13.125 7.20606 13.125 6.125C13.125 2.74766 10.3773 0 7 0ZM7 8.15625C5.87997 8.15625 4.96875 7.24503 4.96875 6.125C4.96875 5.00497 5.87997 4.09375 7 4.09375C8.12003 4.09375 9.03125 5.00497 9.03125 6.125C9.03125 7.24503 8.12003 8.15625 7 8.15625Z"
                        fill="#779793"
                      />
                    </svg>
                    <span className="text-gray-500">
                      {job.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between flex-1 gap-3 lg:gap-8 lg:flex-row lg:justify-end ">
                  <p className="text-gray-500">{job.budget}</p>
                  <Link
                    href="#"
                    className="px-6 py-2 font-semibold duration-150 transform border border-black rounded-full group-hover:bg-yellow-300 group-hover:border-transparent">
                    Apply
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mt-8">
          <Button href="#" size="lg">
            Browse more Jobs
          </Button>
        </div>
      </Container>
    </div>
  );
}

const jobs = [
  {
    id: 1,
    title: "Web Developer",
    company: "The Simpsons",
    image: "/img/logos/1.png",
    filter: "contract",
    type: "Contract",
    location: "San Francisco",
    budget: "$1500-$3600",
  },
  {
    id: 2,
    title: "Graphic Designer",
    company: "Acme Corporation",
    image: "/img/logos/2.png",
    filter: "remote",
    type: "Remote",
    location: "Herzegovina",
    budget: "$800-$2000",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Soylent Corp",
    image: "/img/logos/3.png",
    filter: "contract",
    type: "Contract",
    location: "Luxembourg",
    budget: "$1250-$3000",
  },
  {
    id: 4,
    title: "Content Writer",
    company: "Umbrella Corporation",
    image: "/img/logos/4.png",
    filter: "remote",
    type: "Remote",
    location: "New York, NY",
    budget: "$3500-$4600",
  },
  {
    id: 5,
    title: "Product Designer",
    company: "Massive Dynamic",
    image: "/img/logos/5.png",
    filter: "remote",
    type: "Remote",
    location: "Silicon Valley",
    budget: "$2000-$3600",
  },
  {
    id: 6,
    title: "SEO Specialist",
    company: "Capital Partners",
    image: "/img/logos/6.png",
    filter: "remote",
    type: "Remote",
    location: "Bay Area",
    budget: "$3500-$4500",
  },
  {
    id: 7,
    title: "Web Developer",
    company: "The Simpsons",
    image: "/img/logos/1.png",
    filter: "remote",
    type: "Remote",
    location: "Bolivia",
    budget: "$1500-$3600",
  },
  {
    id: 8,
    title: "Product Designer",
    company: "Massive Dynamic",
    image: "/img/logos/5.png",
    filter: "contract",
    type: "Contract",
    location: "Silicon Valley",
    budget: "$2000-$3600",
  },
  {
    id: 9,
    title: "Graphic Designer",
    company: "Acme Corporation",
    image: "/img/logos/2.png",
    filter: "contract",
    type: "Contract",
    location: "Herzegovina",
    budget: "$800-$2000",
  },
  {
    id: 10,
    title: "Full Stack Developer",
    company: "Capital Partners",
    image: "/img/logos/6.png",
    filter: "contract",
    type: "Contract",
    location: "Bolivia",
    budget: "$1500-$3600",
  },
];
