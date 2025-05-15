import Container from "@components/container";
import cx from "clsx";
import Image from "next/image";

const counter = [
  {
    icon: "/img/icons/user.svg",
    count: 35000,
    text: "daily active users",
  },
  {
    icon: "/img/icons/thumb.svg",
    count: 69000,
    text: "open job positions",
  },
  {
    icon: "/img/icons/reading.svg",
    count: 68500,
    text: "stories shared",
  },
];

export default function Counter(props) {
  return (
    <Container>
      <div
        className={cx(
          props?.raw
            ? "py-14"
            : "px-16 mt-24 border border-black shadow-2xl shadow-gray-300/50 rounded-xl py-7"
        )}>
        <div className="grid gap-14 md:grid-cols-3">
          {counter.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-5 text-center md:text-start lg:flex-row">
              <Image src={item.icon} width={80} height={80} alt="icon" />
              <div className="">
                <h2 className="text-3xl font-bold">{item.count}+</h2>
                <p className="mt-1 text-lg font-semibold leading-none">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
