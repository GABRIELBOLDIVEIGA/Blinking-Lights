import CountUp from "react-countup";

export const Stats = () => {
  return (
    <div className="container ">
      <section className="bg-muted px-4 py-4 ">
        <div className="grid sm:grid-cols-3 gap-8 ">
          <div className="flex justify-center sm:justify-between">
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <h1 className="font-bold text-6xl sm:text-3xl">
                <span>Porque</span>
                <span className="text-rose-600"> nós?</span>
              </h1>
              <h3 className="text-muted-foreground text-sm font-medium sm:font-normal tracking-wider leading-8">
                Blinking lights é uma companhia de desenvolvimento de software
                especializada em prover para nossos clientes a mais elevada
                qualidade no desenvolvimento de serviços.
              </h3>
            </div>
          </div>
          <div className="col-span-2 grid  md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-evenly  ">
            <div className="flex items-center justify-center overflow-hidden w-fit">
              <p className="text-rose-600 font-extrabold text-4xl">
                <CountUp end={Math.random() * 100} />
                <span>+</span>
              </p>
              <p className=" bg-muted text-white rounded-full font-bold">
                Projetos realizados
              </p>
            </div>
            <div className="flex items-center justify-center overflow-hidden w-fit">
              <p className="text-rose-600 font-extrabold text-4xl">
                <CountUp end={Math.random() * 100} />
                <span>+</span>
              </p>
              <p className="  bg-muted text-white rounded-full font-bold">
                Horas Trabalhadas
              </p>
            </div>
            <div className="flex items-center justify-center overflow-hidden w-fit ">
              <p className="text-rose-600 font-extrabold text-4xl">
                <CountUp end={Math.random() * 100} />
                <span>+</span>
              </p>
              <p className="  bg-muted text-white rounded-full font-bold">
                Desenvolvedores
              </p>
            </div>
          </div>
        </div>

      </section >
    </div >

  );
};
