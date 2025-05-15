import * as Slider from "@radix-ui/react-slider";
import cx from "clsx";
import { useState } from "react";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

const jobTypes = [
  {
    name: "fulltime",
    value: "Full Time",
    count: 362,
  },
  {
    name: "parttime",
    value: "Part Time",
    count: 154,
  },
  {
    name: "freelance",
    value: "Freelance",
    count: 78,
  },
  {
    name: "contract",
    value: "Contract",
    count: 15,
  },
  {
    name: "internship",
    value: "Internship",
    count: 39,
  },
];

const expLevels = [
  {
    name: "trainee",
    value: "Trainee",
    count: 362,
  },
  {
    name: "junior",
    value: "Junior",
    count: 154,
  },
  {
    name: "middle",
    value: "Middle",
    count: 78,
  },
  {
    name: "senior",
    value: "Senior",
    count: 15,
  },
  {
    name: "director",
    value: "Director",
    count: 39,
  },
];

export default function ListingSidebar() {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <div className=" lg:hidden">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center justify-start w-full gap-2 px-3 py-3 text-gray-700 border rounded-md border-offgreen-medium">
          <AdjustmentsIcon className="w-6 h-6" /> <span>Filters</span>
          <ChevronDownIcon
            className={cx(
              "w-4 h-4 ml-auto transition",
              showFilter && "rotate-180"
            )}
          />
        </button>
      </div>
      <div
        className={cx(
          "lg:grid md:grid-cols-3 lg:grid-cols-1 mt-8 lg:mt-0 gap-10 max-w-xs md:max-w-full ",
          showFilter ? "grid" : "hidden"
        )}>
        <div>
          <CheckboxGroup title="Employment Type" data={jobTypes} />{" "}
        </div>
        <div>
          <RangeSlider />
        </div>
        <div>
          <CheckboxGroup title="Experience Level" data={expLevels} />
        </div>
      </div>
    </div>
  );
}

function CheckboxGroup({ data, title }) {
  return (
    <div>
      <h3 className="text-xl font-medium ">{title}</h3>
      <ul className="grid gap-3 mt-6">
        {data.map((item, index) => (
          <li className="text-gray-500" key={index}>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name={item.name}
                className="w-5 h-5 border-gray-300 rounded form-checkbox text-emerald-500 focus:border-offgreen-dark focus:ring focus:ring-offset-0 focus:ring-offgreen-light focus:ring-opacity-50 "
              />
              <div>
                {item.value}
                <span className="ml-1 text-sm text-gray-400">
                  ( {item.count})
                </span>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RangeSlider() {
  const [values, setValues] = useState([1200, 8000]);
  return (
    <div>
      <h3 className="text-xl font-medium">Salary</h3>
      <Slider.Root
        defaultValue={values}
        min={100}
        max={10000}
        step={100}
        onValueChange={(newvalue) => setValues(newvalue)}
        className="relative flex items-center w-full h-5 mt-4 touch-none">
        <Slider.Track className="relative w-full h-1 rounded-full bg-offgreen-medium grow ">
          <Slider.Range className="absolute h-full rounded-full bg-emerald-300 " />
        </Slider.Track>
        <Slider.Thumb
          className={cx(
            "block h-4 w-4 rounded-full bg-white border-[3px] border-emerald-300",
            "focus:outline-none focus-visible:ring focus-visible:ring-emerald-100 focus-visible:ring-opacity-75"
          )}
        />
        <Slider.Thumb
          className={cx(
            "block h-4 w-4 rounded-full bg-white border-[3px] border-emerald-300",
            "focus:outline-none focus-visible:ring focus-visible:ring-emerald-100 focus-visible:ring-opacity-75"
          )}
        />
      </Slider.Root>
      <div className="flex justify-between mt-1">
        <span className="text-sm text-gray-500">
          ${values.at(0)}{" "}
        </span>
        <span className="text-sm text-gray-500">
          ${values.at(-1)}
        </span>
      </div>
    </div>
  );
}
