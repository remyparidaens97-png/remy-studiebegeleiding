import Link from "next/link";
import { siteConfig } from "../site-config";

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <div className="container privacy-wrap">
        <p className="back-link"><Link href="/">← Terug naar de website</Link></p>
        <h1>Privacyverklaring</h1>

        <p>
          Deze privacyverklaring legt uit hoe persoonsgegevens worden verwerkt in het kader van de studiebegeleiding
          aangeboden via {siteConfig.shortName}.
        </p>

        <section>
          <h2>1. Verantwoordelijke voor de verwerking</h2>
          <p>{siteConfig.shortName}</p>
          <p>{siteConfig.address}</p>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.phone}</p>
        </section>

        <section>
          <h2>2. Welke gegevens worden verwerkt?</h2>
          <p>
            Via het contactformulier en eventuele intakeformulieren worden enkel de gegevens verwerkt die nodig zijn om
            een aanvraag te behandelen en begeleiding correct op te starten, zoals naam, e-mailadres, telefoonnummer,
            leerjaar, vak en de inhoud van de hulpvraag.
          </p>
        </section>

        <section>
          <h2>3. Waarom worden deze gegevens verwerkt?</h2>
          <p>De gegevens worden uitsluitend gebruikt om:</p>
          <ul>
            <li>contact op te nemen naar aanleiding van een aanvraag;</li>
            <li>de hulpvraag inhoudelijk te beoordelen;</li>
            <li>begeleiding praktisch en inhoudelijk te organiseren;</li>
            <li>de administratie van een begeleidingstraject correct op te volgen.</li>
          </ul>
        </section>

        <section>
          <h2>4. Rechtsgrond</h2>
          <p>
            De verwerking gebeurt op basis van toestemming waar relevant, en daarnaast voor de noodzakelijke verwerking
            in het kader van precontractueel contact en de uitvoering van de begeleiding.
          </p>
        </section>

        <section>
          <h2>5. Bewaartermijn</h2>
          <p>
            Gegevens worden enkel bewaard zolang dat nodig is voor het volledige traject en de redelijke administratieve
            opvolging ervan. Nadien worden gegevens niet langer bewaard dan nodig.
          </p>
        </section>

        <section>
          <h2>6. Delen van gegevens</h2>
          <p>
            Gegevens worden niet gedeeld met derden, behalve wanneer dat wettelijk verplicht is of strikt noodzakelijk
            is voor een correcte administratieve of technische verwerking.
          </p>
        </section>

        <section>
          <h2>7. Cookies en analytics</h2>
          <p>
            Op deze website worden op dit moment geen analytics of trackingtools gebruikt buiten wat technisch
            noodzakelijk is voor het functioneren van de website. Daarom is er momenteel geen uitgebreide cookiebanner
            voorzien.
          </p>
        </section>

        <section>
          <h2>8. Rechten</h2>
          <p>
            Betrokkenen hebben het recht op inzage, verbetering, verwijdering, beperking van verwerking, bezwaar en,
            waar van toepassing, gegevensoverdraagbaarheid. Vragen hierover kunnen gericht worden aan {siteConfig.email}.
          </p>
        </section>

        <section>
          <h2>9. Klacht indienen</h2>
          <p>
            Wie meent dat persoonsgegevens niet correct worden verwerkt, kan contact opnemen via bovenstaand e-mailadres
            en heeft daarnaast het recht om klacht in te dienen bij de Gegevensbeschermingsautoriteit.
          </p>
        </section>
      </div>
    </main>
  );
}
