import { faker } from "@faker-js/faker";

const createJob = () => {
  const jobtitle = faker.name.jobTitle();
  const slug = jobtitle
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
  return {
    _id: faker.datatype.hexadecimal({
      prefix: "",
      length: 10,
      case: "lower",
    }),
    slug: slug,
    title: jobtitle,
    company: faker.company.name() + faker.company.companySuffix(),
    location: faker.address.cityName(),
    country: faker.address.country(),
    salary: `${faker.commerce.price(2, 5, 0, "$")}k - ${faker.commerce.price(
      5,
      9,
      0,
      "$"
    )}k`,
    type: faker.helpers.arrayElement(["Full-time", "Part-time", "Contract"]),
    date: faker.date.recent(10).toISOString(),
    category: faker.name.jobType(),
    logo: `/img/logos/${faker.datatype.number({
      min: 1,
      max: 7,
    })}.png`,
    description: faker.lorem.sentence(25),
  };
};

const createEmployer = () => {
  return {
    _id: faker.datatype.hexadecimal({
      prefix: "",
      length: 10,
      case: "lower",
    }),
    company: faker.company.name() + faker.company.companySuffix(),
    location: faker.address.cityName(),
    featured: faker.datatype.boolean(),
    category: faker.name.jobType(),
    openjobs: faker.datatype.number({ min: 2, max: 20 }),
    logo: `/img/logos/${faker.datatype.number({
      min: 1,
      max: 7,
    })}.png`,
    description: faker.lorem.sentence(25),
  };
};

export const createJobs = (count = 5) => {
  return Array.from({ length: count }, createJob);
};

export const createEmployers = (count = 6) => {
  return Array.from({ length: count }, createEmployer);
};
