import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import request from "axios";
import { getSortedPostsData } from "../lib/posts";
import { useEffect } from "react";

export default function Home({ allPostsData }) {
  useEffect(() => {
    init();
    async function init() {
      const { data } = await request.get("/api/user?doc=nleM06BVRxY7iOIiN3qV");
    }
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        This is happening in real time
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
