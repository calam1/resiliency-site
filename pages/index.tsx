import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
// import { motion } from "framer-motion";
import { useDarkToggle } from "components/DarkToggle";

type CardProps = {
  resource: string;
  owner: string;
  title: string;
  route: string;
};
const cardsInfo = [
  {
    resource: "/bible.svg",
    title: "KJV Bible",
    owner: "Arley McBlain",
    route: "arleym/kjv-markdown/01 - Genesis - KJV.md",
  },
  {
    resource: "/operating-system.svg",
    title: "Operating Systems",
    owner: "Matt Schlenker",
    route: "m4ttsch/omscs-notes-notes/operating-systems/introduction-to-operating-systems.md",
  },
];
function Card({ resource, owner, title, route }: CardProps) {
  return (
    <div className="flex flex-col m-2 border border-gray-300 dark:bg-gray-700 shadow-lg hover:shadow-2xl dark:border-gray-600 rounded-md">
      <Link href={route}>
        <a className="dark:hover:bg-indigo-900 flex-1 flex flex-row px-4 py-6">
          <Image src={resource} width="85" height="85" />
          <div className=" m-auto">
            <div className="text-3xl text-gray-900 dark:text-white">
              {title}
            </div>
          </div>
        </a>
      </Link>
      <div className="text-sm font-light p-1 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md">
        Maintainer - {}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Open-EdTech"
          className="underline text-blue-400 dark:text-blue-600"
        >
          {owner}
        </a>
      </div>
    </div>
  );
}

export default function Index() {
  const isDark = useDarkToggle()![0];
  const blackWhite = isDark ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)";
  return (
    <div className=" dark:bg-black mx-auto">
      <div className="index-customizations dark:bg-black flex flex-col w-full">
        <div className="left-justify mt-20 my-3 dark:text-white text-6xl">
          Your guide to
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Resiliency").start();
            }}
          />
        </div>

        <div className="flex flex-col index-customizations left-justify my-6 text-lg font-light dark:text-white">
          <div>Read our detailed Resiliency Reviews for our cloud Apps.</div>
        </div>
      </div>
    </div>
  );
}
