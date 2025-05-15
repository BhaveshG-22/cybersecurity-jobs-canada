import Layout from "@components/layout";
import ApplyForm from "@components/parts/apply";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";
import Head from "next/head";

export default function JobApply() {
  return (
    <>
      <Head>
        <title>Apply Job | Jobhire Template</title>
      </Head>

      <Layout>
        <SubpageHero>
          <SubpageHero.Title>Job Application</SubpageHero.Title>
          <SubpageHero.SubTitle>
            Global Communications Associate
          </SubpageHero.SubTitle>
        </SubpageHero>

        <div className="max-w-3xl mx-auto mt-16 px-5">
          <ApplyForm />
        </div>
        <Cta />
      </Layout>
    </>
  );
}
