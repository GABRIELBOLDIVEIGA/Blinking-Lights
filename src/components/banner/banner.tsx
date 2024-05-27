import react from "@/assets/react.svg";
import nestjs from "@/assets/nestjs.svg";
import ts from "@/assets/ts.svg";
import js from "@/assets/js.svg";
import mongodb from "@/assets/mongodb.svg";
import mysql from "@/assets/mysql.svg";
import postgres from "@/assets/postgres.svg";
import docker from "@/assets/docker.svg";
import tauri from "@/assets/tauri.svg";
import vite from "@/assets/vite.svg";
import tailwind from "@/assets/tailwind.svg";
import nodejs from "@/assets/nodejs.svg";
import github from "@/assets/github.svg";

const icons = [
  {
    icon: react,
    title: "react",
  },
  {
    icon: nestjs,
    title: "nestjs",
  },
  {
    icon: ts,
    title: "typescript",
  },
  {
    icon: js,
    title: "javascript",
  },
  {
    icon: mongodb,
    title: "mongodb",
  },
  {
    icon: mysql,
    title: "mysql",
  },
  {
    icon: postgres,
    title: "postgres",
  },
  {
    icon: docker,
    title: "docker",
  },
  {
    icon: tauri,
    title: "tauri",
  },
  {
    icon: vite,
    title: "vite",
  },
  {
    icon: tailwind,
    title: "tailwind",
  },
  {
    icon: nodejs,
    title: "nodejs",
  },
  {
    icon: github,
    title: "github",
  },
];

export const Banner = () => {
  return (
    <div className="h-20 py-4 dark:bg-primary-foreground  w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul className=" flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {icons.map((icon) => (
          <li key={icon.title}>
            <img src={`${icon.icon}`} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {icons.map((icon) => (
          <li key={icon.title}>
            <img src={`${icon.icon}`} />
          </li>
        ))}
      </ul>
      <ul
        className=" flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {icons.map((icon) => (
          <li key={icon.title}>
            <img src={`${icon.icon}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};
