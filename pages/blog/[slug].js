import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@components/container";
import Layout from "@components/layout";
import { getPostBySlug, getPostSlugs } from "@lib/posts";
import markdownToHtml from "@lib/mdtohtml";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";
import DateTime from "@components/parts/datetime";
import Image from "next/image";
import Link from "next/link";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Head>
        <title>{post.title} | Jobhire Template</title>
        <meta property="og:image" content="" />
      </Head>
      <SubpageHero>
        <div className="max-w-4xl mx-auto">
          <span className="text-sm font-semibold text-green-500 uppercase">
            <DateTime date={post.date} />
          </span>
          <h1 className="mt-3 text-2xl font-bold lg:text-4xl">{post.title}</h1>
        </div>
      </SubpageHero>
      <Container>
        <article className="mt-16">
          <div className="relative max-w-5xl mx-auto aspect-video ">
            <Image
              src={post.coverImage}
              className="object-cover w-full h-full rounded-2xl"
              alt="Thumbnail"
              priority={true}
              width={500}
              height={300}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="max-w-2xl mx-auto prose mt-14">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          <div className="flex justify-center mt-10">
            <Link
              href="/blog"
              className="px-5 py-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300">
              ← Back to Blog
            </Link>
          </div>
        </article>
      </Container>
      <Cta />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");
  return {
    props: {
      post: {
        ...post.data,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getPostSlugs();
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post,
        },
      };
    }),
    fallback: false,
  };
}
