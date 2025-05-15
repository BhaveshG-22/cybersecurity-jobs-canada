import Image from "next/image";
import Container from "@components/container";
import CircleShape from "/public/img/circle-shape.svg";
import HeroMan from "/public/img/heroman.png";
import Search from "@components/parts/search";

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-between gap-5 pt-6 lg:flex-row">
        <div className="flex-1 w-full lg:max-w-2xl lg:-mt-6">
          <h1 className="text-2xl font-bold tracking-tight text-center md:text-3xl lg:text-4xl lg:text-start md:whitespace-pre">
            When Searching for a job <wbr />
            don’t go in blind, Research first.
          </h1>
           
          <div className="mt-8">
            <Search />
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <p className="w-full text-offgreen-dark sm:w-auto">
              Popular Searches:
            </p>
            <a href="#">
              <span className="px-3 py-1 text-sm rounded-full bg-offgreen-light text-offgreen-dark">
                Designer
              </span>
            </a>
            <a href="#">
              <span className="px-3 py-1 text-sm rounded-full bg-offgreen-light text-offgreen-dark">
                Developer
              </span>
            </a>
            <a href="#">
              <span className="px-3 py-1 text-sm rounded-full bg-offgreen-light text-offgreen-dark">
                iOS
              </span>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-[30rem] relative overflow-hidden">
          <div className="absolute w-full h-full -bottom-12 -z-10">
            <Image
              src={CircleShape}
              alt="circle shape"
              fill
              sizes="100vw"
            />
          </div>
          <div>
            <Image src={HeroMan} alt="Hero Man" sizes="100vw" />
          </div>
        </div>
      </div>
    </Container>
  );
}
