import Container from "@components/container";
import Button from "@components/ui/button";
import {
  OfficeBuildingIcon,
  CashIcon,
  BriefcaseIcon,
} from "@heroicons/react/solid";
import { timeAgo } from "@utils";

const items = [
  {
    title: "Graphic Designer",
    company: "Acme Digital Pvt ltd",
    salary: "$30 - $40 per hour",
    type: "Full time",
    date: "2022-11-15T12:20:22.948Z",
  },
  {
    title: "Software Developer",
    company: "Globex Corporation",
    salary: "$35 - $60 per hour",
    type: "Full time",
    date: "2022-11-14T13:20:22.948Z",
  },
  {
    title: "Product Consultant",
    company: "Soylent Corp",
    salary: "$3780 per month",
    type: "Full time",
    date: "2022-11-13T13:20:22.948Z",
  },
];

export default function FeaturedJob() {
  return (
    <div className="bg-offgreen-medium py-14 lg:py-20">
      <Container>
        <div>
          <h2 className="text-3xl font-bold text-center ">
            Featured Job Listing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {items.map((item) => (
            <div className="bg-white p-8 lg:py-12 lg:px-14 rounded-xl   transition-all  border border-transparent hover:shadow-lg hover:shadow-offgreen-dark/20   hover:border-offgreen-dark ">
              <h3 className="text-xl font-semibold mb-7">
                {item.title}
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1.5">
                  <OfficeBuildingIcon className="w-5 h-5 text-offgreen-medium" />
                  <span className="  text-gray-600">
                    {item.company}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CashIcon className="w-5 h-5 text-offgreen-medium" />
                  <span className="  text-gray-600">
                    {item.salary}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BriefcaseIcon className="w-5 h-5 text-offgreen-medium" />
                  <span className="  text-gray-600">{item.type}</span>
                </div>
              </div>
              <div className="text-offgreen-dark text-sm  mt-8">
                <span> Posted {timeAgo(item.date)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button href="#" size="lg">
            Browse Jobs
          </Button>
        </div>
      </Container>
    </div>
  );
}
