import {
  AppWindow,
  BarChart2,
  MoveUpRight,
  Palette,
  Search,
  Settings,
  Smartphone,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const cards = [
  {
    icon: <Palette />,
    title: "UI/UX Design",
    description:
      "Desenvolvemos experiencias não apenas interfaces. Nosso UI/UX traz seu produto digital a vida.",
    link: "#",
  },
  {
    icon: <Smartphone />,
    title: "IOS & Android",
    description:
      "Nos construímos aplicativos Android e iOS de conforme a necessidade do seu negócio.",
    link: "",
  },
  {
    icon: <AppWindow />,
    title: "Desktop",
    description:
      "Nosso aplicativo para Windows permite seu sistema funcione sem conexão com a internet.",
    link: "",
  },
  {
    icon: <Search />,
    title: "SEO",
    description:
      "Oferecemos excelentes estratégias de SEO para que sua marca tenha destaque nos sistemas de busca.",
    link: "",
  },
  {
    icon: <BarChart2 />,
    title: "Soluções personalizadas",
    description:
      "Nos construímos suas estratégia em software que otimiza a desempenho da sua empresa.",
    link: "",
  },
  {
    icon: <Settings />,
    title: "Suporte",
    description:
      "Nossa equipe de suporte está disponível para os clientes mesmo após o projeto ser concluído.",
    link: "",
  },
];

export const CardsServicos = () => {
  return (
    <div className="grid grid-cols-3 gap-4 w-8/12">
      {cards.map((card) => (
        <Card
          key={card.title}
          className="hover:bg-muted cursor-pointer hover:scale-105 transition-all ease-in-out duration-200"
        >
          <CardHeader className="pb-2">
            <CardTitle>
              <div className="flex justify-between pb-2">
                <p className="text-rose-600">{card.icon}</p>
                <MoveUpRight size={18} className="font-black" />
              </div>
              <p className="font-semibold">{card.title}</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{card.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
