import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "../../site-config";

type ContactPayload = {
  naam: string;
  email: string;
  telefoon?: string;
  leerjaar: string;
  vak: string;
  bericht: string;
  akkoord: boolean;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (!body.naam || !body.email || !body.leerjaar || !body.vak || !body.bericht || !body.akkoord) {
      return NextResponse.json(
        { message: "Vul alle verplichte velden in en bevestig de privacyverklaring." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || siteConfig.email;

    if (!host || !user || !pass) {
      return NextResponse.json(
        {
          message:
            "Het formulier is technisch nog niet volledig geconfigureerd. Contacteer voorlopig rechtstreeks via e-mail.",
        },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `Nieuwe aanvraag via website - ${body.naam}`;
    const text = [
      `Naam: ${body.naam}`,
      `E-mail: ${body.email}`,
      `Telefoonnummer: ${body.telefoon || "-"}`,
      `Leerjaar: ${body.leerjaar}`,
      `Vak: ${body.vak}`,
      "",
      "Bericht:",
      body.bericht,
    ].join("\n");

    await transporter.sendMail({
      from: `Websiteformulier <${user}>`,
      replyTo: body.email,
      to,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Er liep iets mis bij het verzenden van het formulier." },
      { status: 500 },
    );
  }
}
