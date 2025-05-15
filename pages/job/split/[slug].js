import Container from "@components/container";
import Layout from "@components/layout";
import Search from "@components/parts/search";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";
import Head from "next/head";
import { createJobs } from "@utils/data";
import { JoblistCompact } from "@components/parts/joblist";
import { Select, SelectItem } from "@components/ui/select";
import Pagination from "@components/parts/pagination";
import Link from "next/link";
import Image from "next/image";
import CoverImage from "/public/img/cover.jpg";
import CompanyLogo from "/public/img/logos/7.svg";
import { ShareIcon } from "@heroicons/react/outline";
import Highlights from "@components/parts/highlights";
import ApplyForm from "@components/parts/apply";

export default function JobPage({ jobslist }) {
  return (
    <>
      <Head>
        <title>Listing - Split Page | Jobhire Template</title>
      </Head>

      <Layout>
        <SubpageHero>
          <SubpageHero.Title>Find Your Dream Job</SubpageHero.Title>
          <div className="max-w-2xl mx-auto mt-5">
            <Search />
          </div>
        </SubpageHero>

        <Container>
          <div className="grid gap-10 mt-16 lg:grid-cols-2">
            <div className="hidden lg:block sticky top-10 self-start">
              <div className="flex justify-between">
                <span>Showing 35 results</span>
                <div className="flex gap-2">
                  <span className="text-offgreen-dark"> Sort by:</span>
                  <Select defaultValue="new" onValueChange={(value) => value}>
                    <SelectItem value="new">Newest Posts</SelectItem>
                    <SelectItem value="old">Oldest Posts</SelectItem>
                    <SelectItem value="popular">Popular Posts</SelectItem>
                  </Select>
                </div>
              </div>
              <div className="grid gap-6 mt-5 md:gap-6">
                {jobslist?.map((item, index) => (
                  <Link href={`/job/split/${item.slug}`} key={item._id}>
                    <JoblistCompact
                      minimal
                      notags
                      {...item}
                      active={index === 0}
                    />
                  </Link>
                ))}
              </div>
              <div className="flex justify-center mt-8 ">
                <Pagination />
              </div>
            </div>

            <JobDetail />
          </div>
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
      icon: "/img/icons/salary.svg",
      label: "Salary Range",
      text: "$25-$5k",
    },
  ];

  return (
    <div>
      <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden">
        <Image
          src={CoverImage}
          alt="Cover"
          fill
          className="object-cover scale-110"
        />
      </div>
      <div className="relative z-10 flex w-20 h-20 ml-10 -mt-10 bg-white shadow-2xl place-content-center rounded-2xl">
        <Image src={CompanyLogo} alt="Logo" />
      </div>
      <div className="flex mt-10 flex-col sm:flex-row justify-between">
        <div>
          <h4 className="text-xl font-semibold">Senior UI Designer</h4>
          <span className="text-gray-400">San Francisco</span>
        </div>
        <div className="flex items-center">
          <p className="mr-4">
            <span className="text-gray-400">Posted :</span> 3 days ago
          </p>
          <a
            href="#"
            className="bg-offgreen-medium hover:bg-offgreen-light transition-colors text-slate-800 py-1 px-3 text-sm sm:text-base sm:px-4 sm:py-2 flex gap-2 rounded-lg items-center">
            <span>Share</span>{" "}
            <ShareIcon className="w-4 h-4 text-offgreen-dark" />
          </a>
        </div>
      </div>
      <div>
        <Highlights data={highlights} />
      </div>
      <main className="prose md:prose-lg">
        <h3>Overview</h3>
        <p>
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
          therefore always free from repetition.
        </p>

        <h3>Job description</h3>
        <ul>
          <li>
            Suspendisse eu nibh quis risus facilisis eleifend laoreet velnulla.
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
      <div className="mt-10">
        <h3 className="text-xl font-bold ">Apply for this job</h3>
        <ApplyForm />
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
