import Lottie from "lottie-react";
import bg_animated from "@/assets/bg-animated.json";
import { SwitchTheme } from "../switch-theme";

export const Header = () => {
  return (
    <section className="relative h-[300px] overflow-hidden ">
      <div className="w-full h-full opacity-55 absolute bg-black z-2"></div>
      <Lottie
        animationData={bg_animated}
        className="absolute -z-50 w-full -translate-y-44"
      />

      <div className="absolute w-screen flex justify-center text-primary-foreground bg-black bg-opacity-50 border-b-[1px] border-muted-foreground">
        <div className="flex h-20 items-end pb-6 justify-between w-10/12">
          <h1 className="text-4xl font-bold">
            <span className="text-rose-600">Blincking</span>{" "}
            <span className="dark:text-primary">Ligths</span>
          </h1>
        </div>
        <SwitchTheme className="absolute top-4 right-4 sr-only" />
      </div>
    </section>
  );
};
