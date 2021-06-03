import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-xl text-gray-800 mt-6">
        <p>Hello, I’m Pho. I’m a software engineer.</p>
        <p>
          This is my blog where I publish things related to programming and
          more.
        </p>
      </section>
      <section className="text-xl text-gray-800 pt-1">
        <h2 className="text-2xl text-gray-700 font-bold mt-8 mb-4">Blog</h2>
        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="m-0 mb-5" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-blue-500 hover:underline">{title}</a>
              </Link>
              <br />
              <small className="text-gray-500">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
