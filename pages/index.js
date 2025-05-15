import Layout from "@components/layout";
import Counter from "@components/sections/counter";
import Cta from "@components/sections/cta";
import Feature from "@components/sections/feature";
import FeaturedCat from "@components/sections/featuredcat";
import Hero from "@components/sections/hero";
import News from "@components/sections/news";
import Recentjobs from "@components/sections/recentjobs";
import Testimonials from "@components/sections/testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobhire Template</title>
      </Head>

      <Layout>
        <Hero />
        <FeaturedCat />
        <Recentjobs />
        <Feature />
        <Counter />
        <Testimonials />
        <News />
        {/* <Cta /> */}
      </Layout>
    </>
  );
}
