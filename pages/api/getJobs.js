import { faker } from "@faker-js/faker";

// This is a fake api to generate fake job listings
// You might want to replace it with your real function to fetch from database.

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
      max: 6,
    })}.png`,
    description: faker.lorem.sentence(25),
  };
};

export default function handler(req, res) {
  try {
    // get count from query params. eg: ?count=10
    // Defaults to 5
    const { count = 5 } = req.query;
    // Create an Array from the createJob function
    const data = Array.from({ length: count }, createJob);
    // return the data
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=100, stale-while-revalidate=59"
    );
    res.status(200).json(data);
  } catch (err) {
    // error
    res
      .status(500)
      .json({ error: true, message: `Failed to load data: ${err}` });
  }
}
