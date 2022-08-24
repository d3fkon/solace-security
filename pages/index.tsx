import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Solace Guardian Dashboard</title>
        <meta name="description" content="Solace Guardian Dashboard" />
        <link rel="icon" href="/solace-icon.png" />
      </Head>
      <div className="flex items-start md:items-center justify-center h-full">
        <h1 className="text-4xl">home</h1>
      </div>
    </>
  );
};

export default Home;
