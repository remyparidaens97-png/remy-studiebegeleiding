import Link from "next/link";
import { siteConfig } from "./site-config";
import { ContactForm } from "@/components/contact-form";

const faqItems = [
  {
    q: "Voor wie is de begeleiding bedoeld?",
    a: "De begeleiding is bedoeld voor leerlingen uit het secundair onderwijs die nood hebben aan extra uitleg, meer structuur of een gerichte voorbereiding op toetsen en examens.",
  },
  {
    q: "Voor welke leerjaren werk ik?",
    a: "Ik richt mij vooral op leerlingen uit de 2e en 3e graad secundair onderwijs. Afhankelijk van het vak en de hulpvraag kan samen bekeken worden wat haalbaar en zinvol is.",
  },
  {
    q: "Voor welke richtingen is de begeleiding geschikt?",
    a: "De begeleiding is vooral relevant voor leerlingen in richtingen waar wetenschappen, STEM of geschiedenis een belangrijke plaats innemen. Ook leerlingen uit andere richtingen kunnen uiteraard contact opnemen als de hulpvraag aansluit.",
  },
  {
    q: "Gaat het om online of fysieke begeleiding?",
    a: "Beide zijn mogelijk. Samen wordt bekeken welke vorm het meest praktisch en efficiënt is voor de leerling en de hulpvraag.",
  },
  {
    q: "Hoe verloopt een eerste kennismaking?",
    a: "Een eerste kennismaking dient om de hulpvraag, het leerjaar, het vak en de praktische verwachtingen kort af te stemmen. Zo kan snel beoordeeld worden welke begeleiding het best past.",
  },
  {
    q: "Hoe lang duurt een sessie?",
    a: "Een standaard sessie duurt 60 minuten. In functie van het traject of de nood kan later bekeken worden of een andere formule wenselijk is.",
  },
  {
    q: "Hoeveel kost een sessie?",
    a: `Een kennismakingsgesprek is ${siteConfig.prices.kennismaking}. Een online sessie kost ${siteConfig.prices.online} en een fysieke sessie ${siteConfig.prices.fysiek}.`,
  },
  {
    q: "Hoe snel kan een leerling starten?",
    a: "Dat hangt af van de beschikbaarheid en de urgentie van de hulpvraag. Bij toetsen, examens of herexamens wordt uiteraard geprobeerd zo snel mogelijk een haalbare oplossing te vinden.",
  },
  {
    q: "Help ik ook bij examens en herexamens?",
    a: "Ja. Gerichte examenvoorbereiding, remediëring en ondersteuning bij herexamens behoren uitdrukkelijk tot de mogelijkheden.",
  },
  {
    q: "Werk ik met trajecten of losse sessies?",
    a: "Beide zijn mogelijk. Sommige leerlingen hebben voldoende aan een losse sessie, terwijl anderen meer baat hebben bij een kort traject met opvolging.",
  },
  {
    q: "Wat als een afspraak geannuleerd moet worden?",
    a: `Annuleren kan ${siteConfig.prices.annulatie}. Bij latere annulatie of afwezigheid kan de sessie aangerekend worden, behalve bij uitzonderlijke omstandigheden.`,
  },
  {
    q: "Krijgen ouders terugkoppeling?",
    a: "Wanneer dat wenselijk is, kan in overleg een korte terugkoppeling worden gegeven over de voortgang, de aanpak en eventuele aandachtspunten.",
  },
  {
    q: "Welke informatie geef ik best door voor een eerste afspraak?",
    a: "Bezorg bij voorkeur het leerjaar, het vak, een korte omschrijving van de hulpvraag en eventuele data van toetsen, examens of herexamens. Hoe duidelijker de beginsituatie, hoe gerichter de begeleiding kan starten.",
  },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="faq-item">
      <summary>{q}</summary>
      <p>{a}</p>
    </details>
  );
}

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-title">{siteConfig.shortName}</div>
            <div className="brand-subtitle">Studiebegeleiding in wetenschappen en geschiedenis</div>
          </div>
          <nav className="nav">
            <a href="#aanbod">Aanbod</a>
            <a href="#voor-wie">Voor wie</a>
            <a href="#werkwijze">Werkwijze</a>
            <a href="#tarieven">Tarieven</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="nav-instagram" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="pill">Professionele studiebegeleiding in bijberoep</div>
            <h1>Rust, structuur en gerichte ondersteuning voor leerlingen in het secundair onderwijs.</h1>
            <p className="hero-copy">
              Ik begeleid vooral leerlingen uit de 2e en 3e graad secundair bij biologie, fysica, STEM-vakken en geschiedenis.
              De focus ligt op inzicht, studieaanpak, vaardigheden en een gerichte voorbereiding op toetsen, examens en herexamens.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-solid">Neem contact op</a>
              <a href="#tarieven" className="button button-outline">Bekijk tarieven</a>
            </div>
            <div className="hero-tags">
              <span>2e en 3e graad secundair</span>
              <span>Beschikbaar op werkdagen, tijdens schoolvakanties en in het weekend</span>
              <span>Online en fysiek mogelijk</span>
            </div>
          </div>

          <div className="feature-card">
            <h3>Waarom deze aanpak werkt</h3>
            <ul className="check-list">
              <li>Heldere uitleg met focus op inzicht, niet alleen op memoriseren.</li>
              <li>Aandacht voor studieaanpak, planning en examenvoorbereiding.</li>
              <li>Ondersteuning bij wetenschappelijke én historische vaardigheden.</li>
              <li>Professionele start via kennismaking, intake en duidelijke afspraken.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="aanbod" className="section">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Aanbod</p>
            <h2>Geen losse hulp zonder structuur, maar een duidelijke begeleiding.</h2>
            <p className="section-copy">
              De begeleiding is opgebouwd rond een rustige start, duidelijke afspraken en een traject dat past bij de leerling.
            </p>
          </div>
          <div className="grid grid-4">
            <article className="card">
              <p className="card-subtitle">Korte eerste afstemming</p>
              <h3>Kennismaking</h3>
              <p>Een eerste kennismakingsgesprek is gratis en dient om de hulpvraag en verwachtingen helder af te stemmen.</p>
            </article>
            <article className="card">
              <p className="card-subtitle">Professionele start</p>
              <h3>Intake en analyse</h3>
              <p>We bekijken waar het moeilijk loopt, welke doelen realistisch zijn en welke aanpak de meeste meerwaarde biedt.</p>
            </article>
            <article className="card">
              <p className="card-subtitle">1-op-1 ondersteuning</p>
              <h3>Individuele begeleiding</h3>
              <p>Gerichte ondersteuning op maat van de leerling, met aandacht voor leerstof, inzicht, structuur en vaardigheden.</p>
            </article>
            <article className="card">
              <p className="card-subtitle">Meer rust en overzicht</p>
              <h3>Examenvoorbereiding</h3>
              <p>Doelgerichte voorbereiding op toetsen, examens en herexamens, met remediëring waar nodig.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="voor-wie" className="section section-muted">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Voor wie</p>
            <h2>Gericht op leerlingen die vooruit willen, met meer houvast en minder chaos.</h2>
            <p className="section-copy">
              De begeleiding is vooral bedoeld voor leerlingen uit de 2e en 3e graad secundair onderwijs, met een sterke focus op wetenschappen en geschiedenis.
              Geschiedenis blijft in het aanbod aanwezig, maar de kern van het profiel ligt duidelijk in wetenschappen en studieaanpak.
            </p>
          </div>
          <div className="grid grid-3">
            <article className="card">
              <h3>2e en 3e graad secundair</h3>
              <p>Voor leerlingen die nood hebben aan meer duidelijkheid, structuur en gerichte ondersteuning in hun vakken.</p>
            </article>
            <article className="card">
              <h3>Doorstroom en dubbele finaliteit</h3>
              <p>In functie van het vak, de richting en de hulpvraag wordt samen bekeken welke aanpak het best past.</p>
            </article>
            <article className="card">
              <h3>Toetsen, examens en herexamens</h3>
              <p>Ook leerlingen die gericht willen remediëren of sterker aan een evaluatieperiode willen beginnen, kunnen terecht.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="werkwijze" className="section">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Mijn aanpak</p>
            <h2>Duidelijk, professioneel en afgestemd op de leerling.</h2>
            <p className="section-copy">
              Goede studiebegeleiding is meer dan leerstof opnieuw uitleggen. Ze helpt leerlingen ook om beter te leren plannen,
              efficiënter te studeren en met meer vertrouwen aan evaluaties te beginnen.
            </p>
          </div>
          <div className="grid grid-5">
            <article className="card compact">
              <h3>1. Eerste contact</h3>
              <p>Een korte verkenning van het leerjaar, het vak, de hulpvraag en de praktische context.</p>
            </article>
            <article className="card compact">
              <h3>2. Kennismaking</h3>
              <p>We bekijken of de begeleiding inhoudelijk en praktisch een goede match is.</p>
            </article>
            <article className="card compact">
              <h3>3. Intake</h3>
              <p>De beginsituatie wordt helder gemaakt en de doelen van de begeleiding worden concreet afgestemd.</p>
            </article>
            <article className="card compact">
              <h3>4. Begeleiding</h3>
              <p>Elke sessie is gestructureerd, rustig en gericht op vooruitgang in leerstof, aanpak en zelfvertrouwen.</p>
            </article>
            <article className="card compact">
              <h3>5. Opvolging</h3>
              <p>Waar nodig wordt bijgestuurd, zodat de begeleiding praktisch en doelgericht blijft.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="tarieven" className="section section-muted">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Tarieven</p>
            <h2>Heldere prijzen voor een professionele begeleiding.</h2>
            <p className="section-copy">
              Alle vermelde prijzen zijn totaalprijzen zoals gecommuniceerd op de website. Eventuele verdere trajecten of intakeformules gebeuren in overleg.
            </p>
          </div>
          <div className="grid grid-4">
            <article className="card price-card">
              <div className="price">{siteConfig.prices.kennismaking}</div>
              <h3>Kennismakingsgesprek</h3>
              <p>Korte eerste afstemming van de hulpvraag en de praktische verwachtingen.</p>
            </article>
            <article className="card price-card">
              <div className="price">{siteConfig.prices.online}</div>
              <h3>Online sessie</h3>
              <p>Individuele online begeleidingssessie van 60 minuten.</p>
            </article>
            <article className="card price-card">
              <div className="price">{siteConfig.prices.fysiek}</div>
              <h3>Fysieke sessie</h3>
              <p>Individuele fysieke begeleidingssessie van 60 minuten.</p>
            </article>
            <article className="card price-card">
              <div className="price">24 uur</div>
              <h3>Annulatie</h3>
              <p>{siteConfig.prices.annulatie}.</p>
            </article>
          </div>
          <p className="note">Trajecten, intakeformules en examenbegeleiding kunnen in overleg worden vastgelegd.</p>
        </div>
      </section>

      <section id="faq" className="section">
        <div className="container faq-wrap">
          <div className="section-title">
            <p className="eyebrow">Veelgestelde vragen</p>
            <h2>Praktische vragen vooraf beantwoord.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-muted">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="section-title">
                <p className="eyebrow">Contact</p>
                <h2>Interesse in begeleiding?</h2>
                <p className="section-copy">
                  Stuur gerust een bericht met het leerjaar, het vak, de hulpvraag en eventuele data van toetsen, examens of herexamens.
                  Daarna bekijken we samen of een kennismaking of intake zinvol is.
                </p>
              </div>

              <div className="contact-card">
                <h3>Contactgegevens</h3>
                <p><strong>E-mail:</strong> {siteConfig.email}</p>
                <p><strong>Telefoon:</strong> {siteConfig.phone}</p>
                <p><strong>Adres:</strong> {siteConfig.address}</p>
                <p><strong>Bereikbaarheid:</strong> {siteConfig.availability}</p>
              </div>

              <div className="contact-card">
                <h3>Volg op Instagram</h3>
                <p>Updates, tips en extra zichtbaarheid van het aanbod vind je ook via Instagram.</p>
                <p>
                  <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="inline-link">
                    @{siteConfig.instagramHandle}
                  </a>
                </p>
              </div>
            </div>

            <div className="form-card">
              <h3>Contactformulier</h3>
              <p className="form-intro">
                Vul hieronder je gegevens in. Je ontvangt na verzending een bevestigingsboodschap op de pagina.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-title">{siteConfig.brandName}</div>
            <div>{siteConfig.address}</div>
            <div>{siteConfig.email}</div>
            <div>{siteConfig.phone}</div>
          </div>
          <div>
            <div className="footer-title">Online</div>
            <div><a href={siteConfig.websiteUrl}>{siteConfig.website}</a></div>
            <div><a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">@{siteConfig.instagramHandle}</a></div>
            <div><Link href="/privacy">Privacyverklaring</Link></div>
          </div>
          <div>
            <div className="footer-title">Praktisch</div>
            <div>Werkdagen, vakanties en weekends</div>
            <div>Online en fysiek mogelijk</div>
            {siteConfig.businessNumber ? <div>Ondernemingsnummer: {siteConfig.businessNumber}</div> : null}
            {siteConfig.vatNumber ? <div>Btw-nummer: {siteConfig.vatNumber}</div> : null}
          </div>
        </div>
        <div className="container footer-bottom">© {year} {siteConfig.shortName}</div>
      </footer>
    </main>
  );
}
