import { sendMail } from "@/lib/send-mail";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método não permitido." });
  }

  try {
    const { name, email, phone, message, recaptchaToken } = req.body;

    const mailText = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;

    // Validação do reCAPTCHA v3
    const secretKey = process.env.NEXT_SECRET_RECAPTCHA_SITE_KEY;
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
      { method: "POST" }
    );
    const recaptchaData = await recaptchaResponse.json();

    console.log({ recaptchaData });

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return res
        .status(400)
        .json({ message: "Falha na verificação do reCAPTCHA." });
    }

    const resp = await sendMail({
      email: email || "",
      subject: `Contato Novo Cliente - ${name}`,
      text: mailText,
    });

    if (resp?.messageId)
      res.status(200).json({ message: "Email enviado com sucesso!" });
    else res.status(500).json({ message: "Erro ao enviar o email." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao processar a requisição." });
  }
}
