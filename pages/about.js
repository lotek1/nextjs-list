import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>LotekOne List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <div>
          <Image
            src="/lotekbanner.jpg"
            alt="logo lotekone"
            width={960}
            height={580}
          />
        </div>
      </div>
    </>
  );
};

export default About;
