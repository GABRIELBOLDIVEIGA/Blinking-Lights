import { ScrollArea } from "./components/ui/scroll-area";
import { Header } from "./components/header/header";
import { Banner } from "./components/banner/banner";
import { CardsServicos } from "./components/cards-servicos/cards-servicos";
import { Stats } from "./components/stats/stats";
import { Percos } from "./components/precos/precos";

function App() {
  return (
    <section className="h-screen">
      <ScrollArea className="h-[100%]">
        <Header />
        <main>
          <section className=" w-screen text-center overflow-hidden">
            <Banner />
          </section>
          <section className="py-10">
            <div className=" container">
              <div className="flex flex-col justify-center gap-4 items-center">
                <h1 className="font-bold text-6xl ">
                  <span>Nossos</span>
                  <span className="text-rose-600"> Serviços</span>
                </h1>
                <h3 className="text-muted-foreground text-xl font-medium capitalize">
                  desenvolvimento full stack para inovação digital
                </h3>
              </div>
            </div>
          </section>

          <section className="p-4 flex justify-center">
            <CardsServicos />
          </section>

          <section>
            <Stats />
          </section>

          <section>
            <Percos />
          </section>

        </main>
      </ScrollArea>
    </section>
  );
}

export default App;
