import { Check, CircleHelp, MoveRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export const Percos = () => {
  return (
    <div className="container">
      <section className=" flex flex-col items-center  py-8 ">
        <div className=" text-center">
          <p className="text-3xl lg:text-6xl sm:text-2xl font-bold tracking-wider sm:tracking-normal text-center pb-8 leading-tight ">
            Encontre o plano perfeito para seu negócio
          </p>
        </div>
        <div className="grid sm:grid-cols-2  md:grid-cols-3 place-content-center gap-6 ">
          <Card className="hover:shadow-2xl shadow-xl hover:scale-105 transition-all duration-200 hover:border-2 hover:border-primary">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-wide">
                Plus
              </CardTitle>

              <CardTitle>
                <span className="pr-2 font-normal text-base">R$</span>
                <span className="text-2xl font-bold tracking-wide">5,00</span>
                <span className="pl-1 font-normal text-base">/mês</span>
              </CardTitle>
              <CardDescription>
                O pontapé inicial definitivo do projeto.
              </CardDescription>
            </CardHeader>
            <CardContent >
              <ul className="space-y-3 min-h-[160px] flex flex-col justify-between">
                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>
                  <p>Vendas ILIMITADAS</p>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>
                  <p>Controle de estoque</p>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>
                  <p>Uma organização</p>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>
                  <p>1 usuário</p>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full  flex justify-between">
                <div className="w-4"></div>
                <p>Assine já</p>
                <MoveRight size={18} />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-2xl shadow-xl hover:scale-105 transition-all duration-200 hover:border-2 hover:border-primary">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-wide">
                Pro
              </CardTitle>

              <CardTitle>
                <span className="pr-2 font-normal text-base">R$</span>
                <span className="text-2xl font-bold tracking-wide">50,00</span>
                <span className="pl-1 font-normal text-base">/mês</span>
              </CardTitle>
              <CardDescription>
                O plano que te ajuda a continuar crescendo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 min-h-[160px] flex flex-col justify-between">
                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>
                  <p>Backup diário</p>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>
                  <p>Banco de dados ILIMITADO</p>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>

                  <div className="flex gap-2">
                    <p>Relatórios</p>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <CircleHelp size={14} className="cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Arquivo csv para download.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>

                  <div className="flex gap-2">
                    <p>3 usuários</p>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <CircleHelp size={14} className="cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Permite diferentes níveis de acesso.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full  flex justify-between">
                <div className="w-4"></div>
                <p>Assine já</p>

                <MoveRight size={18} />
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-2xl shadow-xl hover:scale-105 transition-all duration-200 hover:border-2 hover:border-primary">
            <CardHeader>
              <CardTitle className="text-3xl font-bold tracking-wide">
                Enterprise
              </CardTitle>

              <CardTitle>
                <span className="text-2xl font-bold tracking-wide">
                  Personalizado
                </span>
              </CardTitle>
              <CardDescription>
                Aplicação perfeita para o seu negócio.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 min-h-[160px] flex flex-col justify-between">
                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>

                  <div className="flex gap-2">
                    <p>Soluções de pagamento</p>
                  </div>
                </li>

                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>
                  <p>Suporte 24/7</p>
                </li>
                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>
                  <p>Servidor dedicado</p>
                </li>

                <li className="flex gap-4 items-center">
                  <div className="bg-primary text-primary-foreground flex justify-center items-center rounded-full w-5 h-5">
                    <Check size={14} />
                  </div>

                  <div className="flex gap-2">
                    <p>Usuários ILIMITADOS</p>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <CircleHelp size={14} className="cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Permite diferentes níveis de acesso.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full  flex justify-between">
                <div className="w-4"></div>
                <p>Entre em contato</p>

                <MoveRight size={18} />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>

  );
};
