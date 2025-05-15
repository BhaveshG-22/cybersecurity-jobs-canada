import Container from "@components/container";
import Layout from "@components/layout";
import Head from "next/head";

export default function Test() {
  return (
    <>
      <Head>
        <title>Blank Page - Jobhire Template</title>
      </Head>

      <Layout>
        <Container>
          <div className="flex justify-center items-center min-h-screen">
            This is a blank page. You can duplicate this page to create a new
            one.
          </div>
        </Container>
      </Layout>
    </>
  );
}
