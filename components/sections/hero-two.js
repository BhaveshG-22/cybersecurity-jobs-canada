import Image from "next/image";
import Container from "@components/container";
import HeroTwo from "/public/img/hero-two.jpg";
import Search from "@components/parts/search";
import Navbar from "@components/navbar";

export default function Herotwo() {
  return (
    <div className="relative overflow-hidden after:bg-black/50 after:absolute after:inset-0 after:-z-10">
      <div className="absolute inset-0 -z-20">
        <Image
          src={HeroTwo}
          alt="Hero Image"
          className="object-cover pointer-events-none"
          fill
          sizes="100vw" />
      </div>
      <Container>
        <Navbar style="invert" />
        <div className="flex flex-col items-center justify-center gap-5 pt-32 pb-44 lg:flex-row">
          <div className="flex-1 w-full lg:max-w-2xl">
            <h1 className="text-2xl font-bold tracking-tight text-center text-white md:text-3xl lg:text-4xl md:whitespace-pre">
              When Searching for a job <wbr />
              don’t go in blind, Research first.
            </h1>
            <div className="mt-8">
              <Search />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
