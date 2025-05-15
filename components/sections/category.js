import Container from "@components/container";
import Button from "@components/ui/button";

const items = [
  {
    title: "Designs & Art",
    count: "653",
  },

  {
    title: "Web development",
    count: "870",
  },
  {
    title: "Construction & Building",
    count: "385",
  },
  {
    title: "Engineering",
    count: "360",
  },
  {
    title: "Alternative Therapies",
    count: "109",
  },
  {
    title: "Computing & ICT",
    count: "288",
  },
  {
    title: "Digital Marketing",
    count: "360",
  },
  {
    title: "Education & Training",
    count: "988",
  },
  {
    title: "Financial Services",
    count: "120",
  },
];

export default function Categories() {
  return (
    <div className="py-14 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row flex-wrap gap-16">
          <div className="lg:w-80">
            <h3 className="mt-4 text-3xl font-bold">Job category</h3>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {items.map((item, index) => (
                <div key={index} className="py-6 border-b">
                  <h4 className="text-xl font-medium">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 font-regular">
                    {item.count} Open positions
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button href="#" size="lg">
                More Categories
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
