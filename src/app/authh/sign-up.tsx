"use client";

import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

import { useForm } from "react-hook-form";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>(); /* Register = registrar campos no formulário. handleSubmit = Lidar com submit com o formulario e lida com evitar propagação comum, redirecionamento., formState: {informações importantes sobre o formulário} */

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data);

      throw new Error();

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Enviamos um link de autenticação para seu e-mail", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data),
        }
      });
    } catch {
      toast.error("Credenciais invalidas.");
    }
  }

  return (
    <div className="p-8">
      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas no painel do parceiro
          </p>
        </div>
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email"> Seu e-mail</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>

          <Button disabled={isSubmitting} className="w-full" type="submit">
            Acessar painel
          </Button>
        </form>
      </div>
      <Toaster richColors />
    </div>
  );
}
