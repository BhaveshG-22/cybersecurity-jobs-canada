import Layout from "@components/layout";
import Counter from "@components/sections/counter";
import Cta from "@components/sections/cta";
import Feature from "@components/sections/feature";
import PopularCat from "@components/sections/popularcat";
import Herotwo from "@components/sections/hero-two";
import News from "@components/sections/news";
import Recentjobs from "@components/sections/recentjobs";
import Testimonials from "@components/sections/testimonials";
import Head from "next/head";
import Pricing from "@components/sections/pricing";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobhire Template</title>
      </Head>

      <Layout navbar={false}>
        <Herotwo />
        <Recentjobs />
        <PopularCat />
        <Pricing />
        <Counter />
        <Testimonials />
        <Feature />

        <News />
        <Cta />
      </Layout>
    </>
  );
}
