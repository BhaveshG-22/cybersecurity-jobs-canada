import Container from "@components/container";
import Image from "next/image";
import ClientsImg from "../../public/img/clients.png";
import Avatar from "../../public/img/avatar.png";

export default function Testimonials(props) {
  const testimonial = {
    name: "Daniyel Martin",
    job: "Developer",
    avatar: Avatar,
    review:
      "I was impressed by the quality of this job board website template. We were able to lauch a full stack web application with this front-end template within days. I only had to manage backend. Highly recommended. You can purchase it without any question.",
  };
  return (
    <Container>
      <div className="grid items-center gap-8 mt-32 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold">Client Reviews</h2>
          <Testimonial {...testimonial} />
        </div>
        <div className="place-self-center">
          <Image src={ClientsImg} alt="Clients" className="w-full max-w-lg" />
        </div>
      </div>
    </Container>
  );
}

export function Testimonial(props) {
  const { name, job, avatar, review } = props;
  return (
    <div>
      <p className="max-w-lg leading-7 text-slate-500">{review}</p>
      <div className="flex items-center max-w-lg gap-6 pt-6 mt-12 border-t border-gray-200 ">
        <Image src={avatar} alt="Avatar" className="rounded-full w-14" />
        <div>
          <p>{name}</p>
          <p className="text-green-500">{job}</p>
        </div>
      </div>
    </div>
  );
}
