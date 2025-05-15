import Container from "@components/container";
import Image from "next/image";

const items = [
  {
    title: "We Take Pride In Our Work",
    icon: "/img/icons/work.svg",
    description:
      "Opposed to using Content here it look like readable English. Many desktop publishing.",
  },
  {
    title: "Exceeding Industry Standards",
    icon: "/img/icons/review.svg",
    description:
      "Opposed to using Content here it look like readable English. Many desktop publishing.",
  },
  {
    title: "Access to Free Lunch",
    icon: "/img/icons/food.svg",
    description:
      "Opposed to using Content here it look like readable English. Many desktop publishing.",
  },
];

export default function FeatureCol() {
  return (
    <Container className="mt-14">
      <div>
        <h2 className="text-3xl font-bold text-center">Why work with us</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-offgreen-medium mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-col text-center gap-2 md:px-5">
            <Image src={item.icon} width={60} height={60} />
            <h3 className="text-xl font-medium mt-2  ">{item.title}</h3>
            <p className="text-gray-600 max-w-md">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
