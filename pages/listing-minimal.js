import Container from "@components/container";
import Layout from "@components/layout";
import Search from "@components/parts/search";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";
import Head from "next/head";
import { JoblistCompact } from "@components/parts/joblist";
import { Select, SelectItem } from "@components/ui/select";
import Pagination from "@components/parts/pagination";
import Link from "next/link";
import { createJobs } from "@utils/data";

export default function Listing({ jobslist }) {
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
          <div className="flex flex-col flex-wrap gap-8 mt-16 lg:gap-16 md:flex-row">
            <div className="w-full">
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
                {jobslist?.map((item) => (
                  <Link href={`/job/split/${item.slug}`} key={item._id}>
                    <JoblistCompact minimal {...item} />
                  </Link>
                ))}
              </div>
              <div className="flex justify-center mt-8 ">
                <Pagination />
              </div>
            </div>
          </div>
        </Container>
        <Cta />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const jobs = await createJobs(10);
  return {
    props: { jobslist: jobs },
  };
}
