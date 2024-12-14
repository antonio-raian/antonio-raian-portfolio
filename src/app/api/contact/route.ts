import { sendMail } from "@/lib/send-mail";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, recaptchaToken } = await req.json();

    const mailText = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;

    // Validação do reCAPTCHA v3
    const secretKey = process.env.NEXT_SECRET_RECAPTCHA_SITE_KEY;
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
      { method: "POST", body: "" }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return new Response("E_RECAPTCHA: Falha na verificação do reCAPTCHA.", {
        status: 400,
      });
    }

    const resp = await sendMail({
      email: email || "",
      subject: `Contato Novo Cliente - ${name}`,
      text: mailText,
    });

    if (resp?.messageId)
      return Response.json({
        message: "Email enviado com sucesso!",
      });

    Response.error();
  } catch (error) {
    console.error({ error });

    new Response(`E_CONTACT: Erro ao enviar o email.`, {
      status: 500,
    });
  }
}
