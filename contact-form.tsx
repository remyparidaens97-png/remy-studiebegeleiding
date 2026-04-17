"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      naam: String(formData.get("naam") || ""),
      email: String(formData.get("email") || ""),
      telefoon: String(formData.get("telefoon") || ""),
      leerjaar: String(formData.get("leerjaar") || ""),
      vak: String(formData.get("vak") || ""),
      bericht: String(formData.get("bericht") || ""),
      akkoord: formData.get("akkoord") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Er liep iets mis bij het verzenden van het formulier.");
      }

      setStatus("success");
      setMessage("Bedankt. Je bericht werd verzonden. Er wordt zo snel mogelijk contact opgenomen.");
      form.reset();
    } catch (error) {
      const fallback =
        error instanceof Error
          ? error.message
          : "Er liep iets mis bij het verzenden van het formulier.";
      setStatus("error");
      setMessage(fallback);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label>
        Naam
        <input type="text" name="naam" required />
      </label>

      <label>
        E-mail
        <input type="email" name="email" required />
      </label>

      <label>
        Telefoonnummer
        <input type="tel" name="telefoon" />
      </label>

      <label>
        Leerjaar
        <input type="text" name="leerjaar" required />
      </label>

      <label>
        Vak
        <input type="text" name="vak" required />
      </label>

      <label>
        Bericht
        <textarea name="bericht" rows={6} required />
      </label>

      <label className="checkbox-row">
        <input type="checkbox" name="akkoord" required />
        <span>Ik ga akkoord met de verwerking van mijn gegevens volgens de privacyverklaring.</span>
      </label>

      <button type="submit" className="button button-solid" disabled={status === "loading"}>
        {status === "loading" ? "Verzenden..." : "Verzenden"}
      </button>

      {message ? (
        <p className={status === "success" ? "form-message success" : "form-message error"}>{message}</p>
      ) : null}
    </form>
  );
}
