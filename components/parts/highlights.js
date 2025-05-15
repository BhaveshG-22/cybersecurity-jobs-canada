import cx from "clsx";
import Image from "next/image";

export default function Highlights(props) {
  const { data } = props;
  return (
    <div className="py-8">
      <div className="flex gap-10 md:gap-5 flex-wrap items-center  justify-around md:justify-between">
        {data.map((item, index) => (
          <div
            key={index}
            className="items-center gap-2 md:gap-5 text-center md:text-start flex flex-col md:flex-row ">
            <Image src={item.icon} width={40} height={40} alt="icon" />
            <div className="">
              <span className="text-sm text-offgreen-dark">{item.label}</span>
              <p className="mt-1 font-semibold leading-none">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
