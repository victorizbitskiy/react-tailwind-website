import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Card from "@/components/Card";
import devme from "../public/assets/devme.png";
import Image from "next/image";
import design from "../public/assets/design.png";
import code from "../public/assets/code.png";
import consulting from "../public/assets/consulting.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Izbitskiy Portfolio</title>
        <meta name="description" content="Victor Izbitskiy Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyme</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-500 font-medium md:text-6xl">
              Victor Izbitskiy
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              Freelancer providing services for programming and design content
              needs. Join me down below and let`s get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-5 py-3 text-gray-600">
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={devme}
              fill="true"
              style={{ objectFit: "cover" }}
              alt="devme"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I`ve done remote work for
              <span className="text-teal-500"> agencies</span> consulted for{" "}
              <span className="text-teal-500"> startups</span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand desing?
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <Card
              image={design}
              description="Creating elegant design suited for your needs following core design theory."
            />
            <Card
              image={consulting}
              description="Creating elegant design suited for your needs following core design theory."
            />
            <Card
              image={code}
              description="Creating elegant design suited for your needs following core design theory."
            />
          </div>
        </section>
      </main>
    </>
  );
}
