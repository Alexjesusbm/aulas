import { Pizza } from "lucide-react";

export const metadata = {
  title: "Página de Login",
  description: "Acesse sua conta e aproveite nossos serviços.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5"/>
          <span className="font-semibold">Pizza.shop</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center p-10">{children}</div>
    </div>
  );
}
