"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter, useSearchParams } from "next/navigation";
import { servicesMensages } from "@/mocks/professional";
import { applyPhoneMask } from "@/lib/utils";
import { sendMail } from "@/lib/send-mail";

export function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const formContactSchema = z
    .object({
      nome: z.string().min(2, {
        message: "O nome deve ter pelo menos 2 caracteres.",
      }),
      email: z
        .string()
        .email({
          message: "Email inválido.",
        })
        .optional()
        .or(z.string().length(0)),
      phone: z
        .string()
        .regex(/^\(\d{2}\) \d{3} \d{3} \d{3}$/, "Formato inválido")
        .optional()
        .or(z.string().length(0)),
      mensagem: z.string().min(10, {
        message: "A mensagem deve ter pelo menos 10 caracteres.",
      }),
    })
    .refine((data) => data.email || data.phone, {
      message: "Preencha pelo menos o Email ou o Telefone.",
      path: ["email"],
    });

  const form = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      nome: "",
      email: "",
      phone: "",
      mensagem: servicesMensages[service as string] || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formContactSchema>) => {
    try {
      const text = `Nome: ${values.nome}\nE-mail: ${values.email}\nTelefone: ${values.phone}\nMensagem: ${values.mensagem}`;

      const resp = await sendMail({
        email: values.email || "",
        subject: `Contato Novo Cliente - ${values.nome} - ${service}`,
        text,
      });

      if (resp?.messageId) {
        return router.push("/success");
      }
      console.error(resp);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Formulário enviado");
    }
  };

  return (
    <section className="container w-full py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>Nome</FormLabel>
                  <FormMessage className="text-xs" />
                </div>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} className="w-full" />
                </FormControl>
                <FormDescription>Digite seu nome.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>E-mail</FormLabel>
                  <FormMessage className="text-xs" />
                </div>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    {...field}
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>Digite seu e-mail de contato.</FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>Telefone</FormLabel>
                  <FormMessage className="text-xs" />
                </div>
                <FormControl>
                  <Input
                    {...field}
                    onChange={(e) => {
                      const masked = applyPhoneMask(e.target.value);
                      field.onChange(masked);
                    }}
                    placeholder="(99) 999 999 999"
                    className="w-full"
                  />
                </FormControl>
                <FormDescription>
                  Digite seu telefone de contato.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between items-center">
                  <FormLabel>Mensagem</FormLabel>
                  <FormMessage className="text-xs w-1/2 text-end" />
                </div>
                <FormControl>
                  <Textarea
                    placeholder="Sua mensagem"
                    {...field}
                    className="w-full border text-sm"
                  />
                </FormControl>
                <FormDescription>
                  Digite sua mensagem. Mínimo de 10 caracteres.
                </FormDescription>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Enviar Mensagem
          </Button>
        </form>
      </Form>
    </section>
  );
}
