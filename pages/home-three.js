import Layout from "@components/layout";
import Counter from "@components/sections/counter";
import Cta from "@components/sections/cta";
import HeroThree from "@components/sections/hero-three";
import News from "@components/sections/news";
import Head from "next/head";
import Categories from "@components/sections/category";
import FeaturedJob from "@components/sections/featuredjob";
import TestimonialsTwo from "@components/sections/testimonials-two";
import LocationSearch from "@components/sections/location-search";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobhire Template</title>
      </Head>

      <Layout>
        <HeroThree />
        <Categories />
        <FeaturedJob />
        <TestimonialsTwo />
        <Counter />
        <LocationSearch />

        <News />
        <Cta />
      </Layout>
    </>
  );
}
