import Container from "@components/container";
import Layout from "@components/layout";
import SearchLong from "@components/parts/search-long";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";
import Head from "next/head";
import { createEmployers } from "@utils/data";
import Employerlist from "@components/parts/emplist";
import { Select, SelectItem } from "@components/ui/select";
import Pagination from "@components/parts/pagination";

export default function EmployerListing({ employerslist }) {
  return (
    <>
      <Head>
        <title>Employers | Jobhire Template</title>
      </Head>

      <Layout>
        <SubpageHero>
          <SubpageHero.Title>Employers</SubpageHero.Title>
          <div className="max-w-screen-lg mx-auto  mt-5">
            <SearchLong />
          </div>
        </SubpageHero>

        <Container>
          <div className=" mt-16 w-full">
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
            <div className="grid gap-6 mt-5 md:gap-10 md:grid-cols-2">
              {employerslist?.map((item) => (
                <Employerlist alternate {...item} key={item._id} />
              ))}
            </div>
            <div className="flex justify-center mt-8 ">
              <Pagination />
            </div>
          </div>
        </Container>
        <Cta />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const fakeEmployers = createEmployers(6);
  return {
    props: { employerslist: fakeEmployers },
  };
}
