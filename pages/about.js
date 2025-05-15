import Container from "@components/container";
import Layout from "@components/layout";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";
import Counter from "@components/sections/counter";
import Feature from "@components/sections/feature";
import FeatureCol from "@components/sections/feature-col";
import Testimonials from "@components/sections/testimonials";
import Head from "next/head";
import Image from "next/image";
import WorkImg from "../public/img/about-work.jpg";
import CoWorkImg from "../public/img/about-cowork.jpg";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>About | Jobhire Template</title>
      </Head>

      <Layout>
        <SubpageHero>
          <SubpageHero.Title>About</SubpageHero.Title>
          <p className="text-center text-black/60 mt-2">
            Who we are. Learn more about us.
          </p>
        </SubpageHero>

        <Container>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-20">
            <div className="relative grid grid-cols-2 gap-2">
              <div className="relative aspect-[3/4]">
                <Image
                  src={WorkImg}
                  alt="working"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="relative aspect-[3/4]">
                <Image
                  src={CoWorkImg}
                  alt="working"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              <div className="absolute w-20 h-20 left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 bg-gradient-to-b from-yellow-200 to-emerald-300 rounded-full inset-0 ring-8 ring-white/50"></div>
            </div>

            <div className="relative self-center">
              <div className="absolute w-24 h-24 opacity-30 -z-10 right-1/4 top-0    bg-gradient-to-b from-yellow-200 to-emerald-300 rounded-full   "></div>
              <h2 className="text-2xl font-medium ">Company Overview</h2>
              <p className="mt-4 text-gray-500">
                Jobhire is a platform that connects employers and candidates for
                job opportunities. It provides a user-friendly interface for
                employers to post job listings, and for candidates to search and
                apply for jobs.
              </p>
              <p className="mt-2 text-gray-500">
                The platform also offers tools for employers to manage their
                hiring process, such as applicant tracking and communication.
                Job Hire aims to streamline the job search and hiring process
                for both employers and candidates.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Counter raw />
          </div>
          <Feature />

          <FeatureCol />
          <Testimonials />
        </Container>
        <Cta />
      </Layout>
    </>
  );
}
