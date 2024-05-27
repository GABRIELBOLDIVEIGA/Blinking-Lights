import CountUp from "react-countup";

export const Stats = () => {
  return (
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
  );
};
