import Container from "@components/container";
import Image from "next/image";
import Artwork from "../../public/img/icons/art.svg";

const checkitems = [
  "100% Verified Jobs",
  "One profile Unlimited job Opening",
  "Get Personalized Job Recommendations",
  "Find Your Perfect Job Match",
];

export default function Feature(props) {
  return (
    <Container>
      <div className="grid gap-8 pb-10 mb-10 lg:grid-cols-2 place-items-center lg:place-items-end">
        <div>
          <Image src={Artwork} alt="Art" />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-bold">Grow your career</h2>
          <p className="max-w-md leading-7 text-slate-500 ">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged
          </p>
          <div className="flex flex-wrap max-w-xl gap-5 mt-10">
            {checkitems.map((item, index) => (
              <span
                className="w-full relative xl:max-w-[17rem] xl:first:max-w-[14rem] xl:last:max-w-[16rem] px-5 mr-5 md:mr-0 lg:w-2/5 xl:w-auto  md:px-4 xl:px-10 py-4 font-semibold lg:text-center rounded-lg bg-offgreen-light"
                key={index}>
                {item}
                <span className="absolute p-2 border border-black rounded-full bg-emerald-300 -top-3 -right-3">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_278)">
                      <path
                        d="M0 6.91474L4.45177 11.375L13 2.83523L11.7728 1.62496L4.45177 8.93746L1.21024 5.69595L0 6.91474Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_278">
                        <rect width="13" height="13" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
