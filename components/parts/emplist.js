import Button from "@components/ui/button";
import Image from "next/image";
import Card from "./card";
import { StarIcon } from "@heroicons/react/solid";

export default function Employerlist(props) {
  return (
    <Card>
      <div className="grid gap-3 h-full">
        <div className="flex justify-between items-start min-w-0">
          <div className="flex items-center gap-6 min-w-0 ">
            <Image
              src={props.logo}
              alt="Logo"
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            <div className="min-w-0">
              <h2 className="m-0 text-xl whitespace-nowrap overflow-hidden text-ellipsis mr-5">
                {props.company}
              </h2>
              <span className="text-gray-400">
                {props.location} &bull; {props.category}
              </span>
            </div>
          </div>

          {props.featured && (
            <span className="bg-offgreen-light flex items-center gap-1 text-sm text-offgreen-dark px-2 sm:px-5 py-2 rounded-full shrink-0 pointer-events-none">
              <StarIcon className="w-4 h-4" />
              <span className="hidden sm:block"> Featured</span>
            </span>
          )}
        </div>
        <div>
          <p className="sm:text-lg text-gray-500">{props.description}</p>
        </div>
        <div className="flex mt-auto">
          <Button size="md">Open Jobs - {props.openjobs}</Button>
        </div>
      </div>
    </Card>
  );
}
