import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";
import { useThemeStore } from "@/store/useThemeStore";
import { useEffect } from "react";

interface IProps {
  className?: string;
}

export const SwitchTheme = ({ className }: IProps) => {
  const theme = useThemeStore((store) => store.theme);
  const setTheme = useThemeStore((store) => store.setTheme);

  useEffect(() => {
    setTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Switch
      className={cn("", className)}
      checked={theme === "dark"}
      onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};
