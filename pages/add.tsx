import type { NextPage } from "next";
import Head from "next/head";
import ComingSoon from "../components/ComingSoon";

const Add: NextPage = () => {
  return (
    <>
      <Head>
        <title>Add Guardian</title>
        <meta name="description" content="Solace Guardian Dashboard" />
        <link rel="icon" href="/solace-icon.png" />
      </Head>
      <div className="flex items-start justify-center h-full md:items-center">
        <ComingSoon />
      </div>
    </>
  );
};

export default Add;
