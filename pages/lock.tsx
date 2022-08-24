import type { NextPage } from "next";
import Head from "next/head";

const Lock: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lock a wallet</title>
        <meta name="description" content="Solace Guardian Dashboard" />
        <link rel="icon" href="/solace-icon.png" />
      </Head>
      <div className="flex items-start md:items-center justify-center h-full">
        <h1 className="text-4xl">lock</h1>
      </div>
    </>
  );
};

export default Lock;
