import { SwitchTheme } from "./components/switch-theme";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { ScrollArea } from "./components/ui/scroll-area";
import { Biohazard, MoveUpRight } from "lucide-react";
import CountUp from "react-countup";
import Lottie from "lottie-react";
import bg_animated from "@/assets/bg-animated.json";

function App() {
  return (
    <section className="h-screen">
      <ScrollArea className="h-[100%]">
        <section className="relative h-[300px] overflow-hidden">
          <div className="w-full h-full opacity-55 absolute bg-black z-2"></div>
          <Lottie
            animationData={bg_animated}
            className="absolute -z-50 w-full -translate-y-64"
          />
        </section>

        <header className="h-1/3 overflow-hidden relative">
          <div className="w-screen flex justify-center bg-muted bg-opacity-20">
            <div className="flex justify-between w-10/12">
              <div>Logo</div>
              <div>Titulo</div>
              <div>Menu</div>
            </div>
          </div>

          <div className="w-[150px] h-[150px] bg-red-500 rounded-full -top-10 -left-10 absolute blur-[110px]"></div>
          <div className="w-[300px] h-[300px] bg-red-500 rounded-full -right-20 -bottom-20 absolute blur-[250px]"></div>
        </header>

        <main className="">
          <section className="bg-muted ">
            <div>Carroussel Logos</div>
          </section>

          <section className="">
            <div className="flex flex-col justify-center gap-4 items-center">
              <h1 className="font-bold text-6xl">
                <span>Nossos</span>
                <span className="text-rose-600"> Serviços</span>
              </h1>
              <h3 className="text-muted-foreground text-xl font-medium capitalize">
                desenvolvimento full stack para inovação digital
              </h3>
            </div>
          </section>

          <section className="p-4 flex justify-center">
            <div className="grid grid-cols-3 gap-4 w-8/12">
              {new Array(6).fill(0).map((_, idx) => (
                <Card
                  key={idx}
                  className="hover:bg-muted cursor-pointer hover:scale-105 transition-all ease-in-out duration-200"
                >
                  <CardHeader className="pb-2">
                    <CardTitle>
                      <div className="flex justify-between pb-2">
                        <Biohazard />
                        <MoveUpRight size={18} className="font-black" />
                      </div>
                      <p>Titulo</p>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Descrição</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-muted flex justify-center px-2 py-4">
            <div className="flex justify-between w-8/12">
              <div className="flex flex-col gap-4 w-1/3">
                <h1 className="font-bold text-6xl">
                  <span>Porque</span>
                  <span className="text-rose-600"> nós?</span>
                </h1>
                <h3 className="text-muted-foreground text-sm font-medium">
                  Blinking lights é uma companhia de desenvolvimento de software
                  especializada em prover para nossos clientes a mais elevada
                  qualidade no desenvolvimento de serviços.
                </h3>
              </div>

              <div className="w-3/5 flex items-center gap-10">
                <div className="flex w-fit items-baseline">
                  <p className="text-rose-600 font-extrabold text-4xl w-20">
                    <CountUp end={Math.random() * 100} />+
                  </p>
                  <p className="-translate-x-3 text-xl font-bold text-muted-foreground">
                    Projetos realizados
                  </p>
                </div>

                <div className="flex items-baseline -translate-x-8">
                  <p className="text-rose-600 font-extrabold text-4xl w-20">
                    <CountUp end={Math.random() * 10000} separator="" />+
                  </p>
                  <p className="translate-x-8 text-xl font-bold text-muted-foreground">
                    Horas Trabalhadas
                  </p>
                </div>

                <div className="flex w-fit items-baseline">
                  <p className="text-rose-600 font-extrabold text-4xl w-20">
                    <CountUp end={Math.random() * 10 + 1} />+
                  </p>
                  <p className="-translate-x-7 text-xl font-bold text-muted-foreground">
                    Desenvolvedores
                  </p>
                </div>
              </div>
            </div>
          </section>

          <SwitchTheme />
        </main>
      </ScrollArea>
    </section>
  );
}

export default App;
