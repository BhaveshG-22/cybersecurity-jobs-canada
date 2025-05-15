import Container from "@components/container";
import Button from "@components/ui/button";
import Image from "next/image";

// Your News Array here
// const news = [{ ... }];
// Sample data at the end of this page

export default function News() {
  return (
    <Container>
      <div className="mt-28">
        <div className="text-center ">
          <h2 className="text-3xl font-bold">Latest News</h2>
        </div>
        <div className="grid mt-10 gap-14 md:grid-cols-3">
          {news.map((item, index) => (
            <div key={index}>
              <a href={item.slug || "#"}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    className="object-cover mx-auto rounded-2xl"
                    alt="Thumbnail"
                    fill
                    sizes="100vw" />
                </div>
                <div className="mt-5">
                  <span className="text-sm font-semibold text-green-500 uppercase">
                    {item.date}
                  </span>
                  <p className="mt-2 text-lg font-medium text-gray-800">
                    {item.title}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button href="#" size="lg">
            View our Blog
          </Button>
        </div>
      </div>
    </Container>
  );
}

const news = [
  {
    title:
      "Top American Companies that Promote Gender Diversity in the Workplace",
    date: "23 September, 2022",
    image: "/img/blog/news1.jpg",
    slug: "#",
  },
  {
    title: "How to Identify Diversity & Inclusivity at Workplace?",
    date: "17 August, 2022",
    image: "/img/blog/news2.jpg",
    slug: "#",
  },
  {
    title:
      "The Rise of Remote Jobs & How to Write a Resume to Get a Perfect Remote Job?",
    date: "19 July, 2022",
    image: "/img/blog/news3.jpg",
    slug: "#",
  },
];
