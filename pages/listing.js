import Container from "@components/container";
import Layout from "@components/layout";
import ListingSidebar from "@components/parts/listing-sidebar";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";
import Head from "next/head";
import { createJobs } from "@utils/data";
import Joblist from "@components/parts/joblist";
import { Select, SelectItem } from "@components/ui/select";
import Pagination from "@components/parts/pagination";
import SearchLong from "@components/parts/search-long";

export default function Listing({ jobslist }) {
  return (
    <>
      <Head>
        <title>Listing - Default | Jobhire Template</title>
      </Head>

      <Layout>
        <SubpageHero>
          <SubpageHero.Title>Find Your Dream Job</SubpageHero.Title>
          <div className="max-w-screen-lg mx-auto  mt-5">
            <SearchLong />
          </div>
        </SubpageHero>

        <Container>
          <div className="flex flex-col flex-wrap gap-8 mt-16 lg:gap-16 md:flex-row">
            <div className="w-full lg:w-52">
              <ListingSidebar />
            </div>
            <div className="flex-1 w-full">
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
              <div className="grid gap-6 mt-5 md:gap-10">
                {jobslist?.map((item) => (
                  <Joblist {...item} key={item._id} />
                ))}
              </div>
              <div className="flex justify-center mt-8 lg:justify-end">
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
  const fakeJobs = createJobs(5);
  return {
    props: { jobslist: fakeJobs },
  };
}
