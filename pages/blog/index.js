import Head from "next/head";
import Container from "@components/container";
import Layout from "@components/layout";
import PostList from "@components/parts/postlist";
import { getAllPosts } from "@lib/posts";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>Blog | Jobhire Template</title>
      </Head>
      <Layout>
        <SubpageHero>
          <SubpageHero.Title>Our Blog</SubpageHero.Title>
          <SubpageHero.SubTitle>
            Updates from our team, latest job trends and more.
          </SubpageHero.SubTitle>
        </SubpageHero>

        <Container>
          <div className="grid gap-10 mt-16">
            {allPosts &&
              allPosts.map((item, index) => (
                <PostList key={index} post={item.data} priority={index === 0} />
              ))}
          </div>
        </Container>
        <Cta />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};
