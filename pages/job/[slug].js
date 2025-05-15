import Container from "@components/container";
import Layout from "@components/layout";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";
import Head from "next/head";
import { createJobs } from "@utils/data";
import Jobhead from "@components/parts/jobhead";
import Image from "next/image";
import CoverImage from "/public/img/cover.jpg";
import JobImage from "/public/img/happyjob.png";
import Highlights from "@components/parts/highlights";
import FeatureCol from "@components/sections/feature-col";
import Button from "@components/ui/button";

export default function JobPage() {
  const jobData = {
    _id: "df455bc004",
    slug: "global-communications-associate",
    title: "Global Communications Associate",
    company: "Ziemann and SonsGroup",
    location: "Maple Grove",
    country: "Hong Kong",
    salary: "$5k - $9k",
    type: "Full-time",
    date: "2022-12-26T05:54:30.717Z",
    category: "Analyst",
    logo: "/img/logos/7.png",
    description:
      "Fugit deserunt neque hic laudantium quam facilis beatae minus unde voluptatem voluptatibus ut possimus enim impedit facere enim labore magnam assumenda aperiam excepturi amet vero.",
  };

  return (
    <>
      <Head>
        <title>Listing Default | Jobhire Template</title>
      </Head>

      <Layout>
        <SubpageHero>
          <Jobhead {...jobData} />
        </SubpageHero>

        <Container>
          <JobDetail />
        </Container>
        <Cta />
      </Layout>
    </>
  );
}

function JobDetail() {
  const highlights = [
    {
      icon: "/img/icons/user.svg",
      label: "Experience",
      text: "Min 3+ Years",
    },
    {
      icon: "/img/icons/handshake.svg",
      label: "Job Tyoe",
      text: "Full Time Job",
    },
    {
      icon: "/img/icons/globe.svg",
      label: "Location",
      text: "San Fransisco",
    },
    {
      icon: "/img/icons/medal.svg",
      label: "Qualification",
      text: "Bachelor Degree",
    },
    {
      icon: "/img/icons/briefcase.svg",
      label: "Career Level",
      text: "Intermediate",
    },
  ];

  return (
    <div>
      <div className="border-b border-offgreen-medium">
        <Highlights data={highlights} />
      </div>

      <div className="my-10">
        <h3 className="font-bold text-2xl">Overview</h3>
        <p className="text-lg max-w-screen-lg mt-3">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="relative w-full aspect-[4/2] rounded-3xl overflow-hidden md:col-span-2">
          <Image
            src={CoverImage}
            alt="Cover"
            fill
            className="object-cover scale-110"
          />
        </div>
        <div className="relative w-full aspect-video md:aspect-auto rounded-3xl overflow-hidden">
          <Image
            src={CoverImage}
            alt="Cover"
            fill
            className="object-cover scale-150"
          />
        </div>
      </div>

      <FeatureCol />
      <div className="flex flex-col md:flex-row gap-12 mt-24 items-center">
        <div>
          <Image src={JobImage} width="469" height="515" />
        </div>

        <div>
          <main className="prose md:prose-lg flex-1">
            <h3>Job description</h3>
            <ul>
              <li>
                Suspendisse eu nibh quis risus facilisis eleifend laoreet
                velnulla.
              </li>
              <li>Sed tincidunt elit dictum vulputate.</li>
              <li>Curabitur velmiid lorem feugiat rhoncus.</li>
              <li>Duis congue estetex ultrices sed blandit lacus iaculis.</li>
              <li>
                Donec blandit velit nec velit congue, in pretium lorem vehicula.
              </li>
              <li>Vestibulum sodales erat eget massa eleifend iaculis.</li>
              <li>Donec vitae eros quis tellus venenatis ullamcorper.</li>
            </ul>
          </main>
          <Button href="/job/apply" className="mt-5">
            Apply For this Job
          </Button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const fakeJobs = createJobs(6);
  return {
    props: { jobslist: fakeJobs },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // can also be true or 'blocking'
  };
}
