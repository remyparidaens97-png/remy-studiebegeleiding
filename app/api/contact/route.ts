import { NextResponse } from "next/server";
import { Resend } from "resend";
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

    const apiKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO || siteConfig.email;
    const fromAddress = process.env.RESEND_FROM || "Website <contact@remyparidaens.be>";

    if (!apiKey) {
      return NextResponse.json(
        {
          message:
            "Het formulier is technisch nog niet volledig geconfigureerd. Contacteer voorlopig rechtstreeks via e-mail.",
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

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

    const html = `
      <h2>Nieuwe aanvraag via website</h2>
      <p><strong>Naam:</strong> ${body.naam}</p>
      <p><strong>E-mail:</strong> ${body.email}</p>
      <p><strong>Telefoonnummer:</strong> ${body.telefoon || "-"}</p>
      <p><strong>Leerjaar:</strong> ${body.leerjaar}</p>
      <p><strong>Vak:</strong> ${body.vak}</p>
      <p><strong>Bericht:</strong></p>
      <p>${body.bericht.replace(/\n/g, "<br />")}</p>
    `;

    const response = await resend.emails.send({
      from: fromAddress,
      to: [contactTo],
      replyTo: body.email,
      subject: `Nieuwe aanvraag via website - ${body.naam}`,
      text,
      html,
    });

    if (response.error) {
      return NextResponse.json(
        { message: "Er liep iets mis bij het verzenden van het formulier." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Er liep iets mis bij het verzenden van het formulier." },
      { status: 500 },
    );
  }
}
