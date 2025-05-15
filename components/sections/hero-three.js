import Image from "next/image";
import Container from "@components/container";
import HeroImg from "/public/img/hero-three.jpg";
import Search from "@components/parts/search";

export default function HeroThree() {
  return (
    <div className="flex flex-col justify-center relative overflow-hidden border-b py-12 md:py-16 lg:py-24 lg:min-h-[calc(100vh-20rem)]">
      <Container>
        <h1 className="text-2xl font-bold tracking-tight text-center whitespace-pre md:max-w-xl md:text-3xl lg:text-4xl md:text-start">
          Join us and explore <wbr />
          Thousands of jobs
        </h1>
        <div className="max-w-3xl mt-6">
          <Search />
        </div>
      </Container>
      <div className="absolute top-0 right-0 hidden w-1/2 h-full pointer-events-none -z-10 lg:block">
        <Image
          src={HeroImg}
          alt="Hero Three"
          className="object-cover object-top"
          fill
          sizes="100vw" />
      </div>
      <div className="absolute bg-yellow-200 rounded-full opacity-50 lg:opacity-100 left-5 -z-10 lg:-bottom-20 w-44 h-44 lg:left-1/2 lg:-translate-x-[610px] aspect-square bg-gradient-to-b from-yellow-200 to-emerald-300/60">
        <div className="absolute inset-0 m-4 bg-white rounded-full top-6 left-6"></div>
      </div>
    </div>
  );
}
