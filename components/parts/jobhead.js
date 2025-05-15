import { timeAgo } from "@utils";
import Image from "next/image";
import cx from "clsx";

export default function Jobhead(props) {
  return (
    <div>
      <div className="grid gap-3">
        <div
          className={cx(
            "flex flex-col md:flex-row md:items-center  gap-3 md:justify-between "
          )}>
          <div className="flex flex-col md:flex-row   items-center flex-1 gap-6">
            <div className="w-24 h-24 bg-white rounded-2xl  grid place-items-center">
              <Image src={props.logo} alt="Logo" width={60} height={60} />
            </div>

            <div className="md:text-left">
              <h2 className="m-0 text-3xl font-bold tracking-tight">
                {props.title}
              </h2>
              <div className="text-offgreen-dark text-lg mt-1">
                {props.location} | {props.category} | {props.type}
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col md:first-letter:flex-row justify-between gap-px mr-2 md:flex-col md:items-end">
            <span className="text-2xl font-medium">{props.salary}</span>
            <time dateTime={props.date} className="text-offgreen-dark">
              Posted {timeAgo(props.date)}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
