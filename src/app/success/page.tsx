import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { mensagem: string };
}) {
  return (
    <section
      id="success"
      className="relative w-full h-svh pt-3 pb-12 flex-col justify-center items-center gap-5 inline-flex px-4"
    >
      <h1 className="text-4xl font-bold mb-4">Mensagem Enviada com Sucesso!</h1>
      <p className="mb-8">
        Obrigado por entrar em contato. Recebemos sua mensagem!
      </p>
      <Button asChild>
        <Link href="/">Voltar para a Página Inicial</Link>
      </Button>
    </section>
  );
}
