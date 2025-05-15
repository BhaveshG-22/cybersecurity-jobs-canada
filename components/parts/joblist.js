import Button from "@components/ui/button";
import Tag from "@components/ui/tag";
import { timeAgo } from "@utils";
import Image from "next/image";
import Card from "./card";
import cx from "clsx";

export default function Joblist(props) {
  const { alternate } = props;
  return (
    <Card>
      <div className="grid gap-3">
        <div
          className={cx(
            "flex flex-col justify-between ",
            !alternate && "md:flex-row"
          )}>
          <div className="flex items-center gap-6">
            <Image src={props.logo} alt="Logo" width={40} height={40} />

            <div>
              <h2 className="m-0 text-xl">{props.title}</h2>
              <span className="text-gray-400">{props.location}</span>
            </div>
          </div>

          <div
            className={cx(
              "hidden items-center justify-between gap-px mt-4 ",
              !alternate && "md:flex md:mt-0 md:flex-col md:items-end"
            )}>
            <span className="text-xl ">{props.salary}</span>
            <time dateTime={props.date} className="text-sm text-gray-400">
              Posted {timeAgo(props.date)}
            </time>
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-500">{props.description}</p>
        </div>
        <div
          className={cx(
            "flex flex-col justify-between gap-6",
            "items-start ",
            !alternate && "md:items-center md:flex-row"
          )}>
          <div
            className={cx(
              "flex flex-wrap items-center justify-center gap-3 mt-3 md:mt-0 md:justify-start",
              !alternate && ""
            )}>
            <Tag size="sm">{props.type}</Tag>
            <Tag size="sm">{props.category}</Tag>
            <Tag size="sm">{props.country}</Tag>
          </div>
          <div
            className={cx(
              "flex justify-between items-center w-full",
              !alternate && "md:w-auto"
            )}>
            <div
              className={cx(
                "flex flex-col items-start justify-between gap-px",
                alternate ? "" : "md:hidden"
              )}>
              <span className="text-xl ">{props.salary}</span>
              <time dateTime={props.date} className="text-sm text-gray-400">
                Posted {timeAgo(props.date)}
              </time>
            </div>
            <Button size="md">Apply</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function JoblistCompact(props) {
  return (
    <Card compact active={props.active}>
      <div className="grid gap-3">
        <div
          className={cx(
            "flex flex-col md:flex-row md:items-center  gap-3 md:justify-between "
          )}>
          <div className="flex items-center flex-1 gap-6">
            <Image src={props.logo} alt="Logo" width={40} height={40} />

            <div className="text-left">
              <h2 className="m-0 text-xl">{props.title}</h2>
              <span className="text-gray-400">{props.location}</span>
            </div>
          </div>

          <div
            className={cx(
              "flex flex-wrap items-center flex-1 gap-3 ",
              props.notags && "hidden"
            )}>
            <Tag size="sm">{props.type}</Tag>
            <Tag size="sm">{props.category}</Tag>
            <Tag size="sm">{props.country}</Tag>
          </div>

          <div className="flex items-center justify-between gap-px mr-2 md:flex-col md:items-end">
            <span className="text-xl ">{props.salary}</span>
            <time dateTime={props.date} className="text-sm text-gray-400">
              Posted {timeAgo(props.date)}
            </time>
          </div>
        </div>
      </div>
    </Card>
  );
}
