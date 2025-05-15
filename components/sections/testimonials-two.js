import Container from "@components/container";
import Image from "next/image";

export default function TestimonialsTwo(props) {
  const testimonials = [
    {
      name: "Daniyel Martin",
      job: "Developer",
      review:
        "I was impressed by the quality of this job board website template. We were able to lauch a full stack web application with this front-end template within days. I only had to manage backend. Highly recommended. You can purchase it without any question.",
    },
    {
      name: "Martin Flyon",
      job: "Marketer",
      review:
        "This template is so far the best one I have found for job board. It's built with Next.js and TailwindCSS. It has lot of additional pages to quickly create a job board website. You must purchase this template to build a website quickly. ",
    },
  ];
  return (
    <Container>
      <h2 className="mt-20 mb-4 text-3xl font-bold ">
        Client Reviews
      </h2>
      <div className="grid items-center gap-8 mt-8 lg:gap-28 lg:grid-cols-2">
        {testimonials.map((item, index) => (
          <Testimonial key={index} {...item} />
        ))}
      </div>
    </Container>
  );
}

export function Testimonial(props) {
  const { name, job, review } = props;
  return (
    <div>
      <p className="text-lg leading-8 text-slate-600">{review}</p>
      <div className="pt-6 mt-6 border-t border-gray-100 ">
        <p className="text-lg font-medium text-gray-800">{name}</p>
        <p className="text-offgreen-dark">{job}</p>
      </div>
    </div>
  );
}
