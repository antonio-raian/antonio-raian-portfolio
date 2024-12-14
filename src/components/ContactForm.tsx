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
import { useReCaptcha } from "next-recaptcha-v3";
import { useState } from "react";

export function ContactForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { executeRecaptcha } = useReCaptcha();

  const service = searchParams.get("service");
  const [status, setStatus] = useState<string | null>(null);

  const formContactSchema = z
    .object({
      name: z.string().min(2, {
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
      message: z.string().min(10, {
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
      name: "",
      email: "",
      phone: "",
      message: servicesMensages[service as string] || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formContactSchema>) => {
    try {
      const recaptchaToken = await executeRecaptcha("contact_form");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, recaptchaToken }),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        form.reset();

        return router.push("/success");
      } else {
        const result = await response.text();
        console.error(result);
        setStatus("Erro ao enviar mensagem.");
      }
    } catch (error) {
      setStatus("Erro inesperado. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <section className="container w-full py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Entre em Contato</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
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
            name="message"
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
      {status && <p>{status}</p>}
    </section>
  );
}
