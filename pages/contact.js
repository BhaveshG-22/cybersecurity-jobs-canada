import Layout from "@components/layout";
import ContactForm from "@components/parts/contact";
import Cta from "@components/sections/cta";
import SubpageHero from "@components/sections/subpagehero";
import Head from "next/head";

export default function JobApply() {
  return (
    <>
      <Head>
        <title>Contact | Jobhire Template</title>
      </Head>

      <Layout>
        <SubpageHero>
          <SubpageHero.Title>Contact</SubpageHero.Title>
          <SubpageHero.SubTitle>
            Send us a message or get in touch.
          </SubpageHero.SubTitle>
        </SubpageHero>

        <div className="max-w-3xl mx-auto mt-16 px-5">
          <ContactForm />
        </div>
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9368.867626869589!2d-122.06500171346609!3d37.38732897912603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1676466102500!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="border-0 w-full h-96  md:h-[30rem]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <Cta nomargin />
      </Layout>
    </>
  );
}
