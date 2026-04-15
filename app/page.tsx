export default function Page() {
  const year = new Date().getFullYear();
  const siteName = "Rémy Paridaens | Studiebegeleiding in wetenschappen en geschiedenis";
  const vatNumber = "";

  const subjects = [
    {
      title: "Biologie",
      text: "Heldere uitleg, inzicht in processen en gerichte ondersteuning bij toetsen, taken en examens.",
    },
    {
      title: "Fysica",
      text: "Focus op inzicht, redeneren, formules leren gebruiken en stap voor stap leren oplossen.",
    },
    {
      title: "STEM-vakken",
      text: "Ondersteuning bij wetenschappelijke vakken, studieaanpak, planning en examenvoorbereiding.",
    },
    {
      title: "Geschiedenis",
      text: "Extra expertise in historische vaardigheden, bronanalyse, argumentatie, verbanden leggen en helder formuleren.",
    },
  ];

  const offerings = [
    {
      title: "Kennismaking",
      subtitle: "Korte eerste afstemming",
      text: "Een kort kennismakingsgesprek om de hulpvraag scherp te krijgen en te bekijken welke begeleiding het best past.",
    },
    {
      title: "Intake en diagnose",
      subtitle: "Professionele start",
      text: "We bekijken waar het moeilijk loopt, welke doelen realistisch zijn en welke aanpak het meeste effect heeft.",
    },
    {
      title: "Individuele begeleiding",
      subtitle: "1-op-1 ondersteuning",
      text: "Gerichte uitleg, inoefening en opvolging op maat van de leerling, met aandacht voor inzicht en structuur.",
    },
    {
      title: "Examenvoorbereiding",
      subtitle: "Meer rust en overzicht",
      text: "Gerichte ondersteuning bij remediëring, planning en voorbereiding op toetsen en examens.",
    },
  ];

  const process = [
    ["1. Eerste contact", "Een korte verkenning van de hulpvraag, het leerjaar, het vak en de praktische context."],
    ["2. Kennismaking", "We bekijken of de begeleiding inhoudelijk en praktisch een goede match is."],
    ["3. Intake", "We analyseren de beginsituatie en spreken duidelijke doelen en verwachtingen af."],
    ["4. Begeleiding", "Elke sessie is gestructureerd, doelgericht en afgestemd op de leerling."],
    ["5. Opvolging", "We bekijken wat al sterker loopt en welke volgende stap nodig is."],
  ];

  const conditions = [
    "De begeleiding is een inspanningsverbintenis, geen resultaatsverbintenis.",
    "De leerling blijft zelf verantwoordelijk voor inzet, aanwezigheid en verwerking van het materiaal.",
    "Een sessie is pas definitief na bevestiging van het tijdstip en de praktische afspraak.",
    "Annuleren kan kosteloos tot 24 uur op voorhand. Bij latere annulatie of no-show wordt de sessie aangerekend, behalve bij uitzonderlijke omstandigheden.",
    "Lesmateriaal of toetsen worden bij voorkeur vooraf doorgestuurd.",
    "De begeleiding is gericht op uitleg, inoefening, structuur en remediëring. Schooltaken of evaluaties worden niet overgenomen.",
    "Om deontologische redenen begeleid ik geen leerlingen die ik zelf lesgeef, evalueer of opvolg.",
  ];

  const faqs = [
    {
      q: "Voor wie is de begeleiding bedoeld?",
      a: "Vooral voor leerlingen uit de 2e en 3e graad secundair die ondersteuning zoeken bij biologie, fysica, STEM-vakken of geschiedenis.",
    },
    {
      q: "Is de begeleiding online of fysiek?",
      a: "Beide zijn mogelijk. Ik werk hybride, afhankelijk van de hulpvraag, de afstand en wat voor de leerling het meest werkbaar is.",
    },
    {
      q: "Waar ligt de nadruk van de begeleiding?",
      a: "De begeleiding focust niet alleen op leerstofuitleg, maar ook op inzicht, studieaanpak, vaardigheden, structuur en gerichte examenvoorbereiding.",
    },
    {
      q: "Is deze begeleiding alleen bedoeld voor leerlingen met achterstand?",
      a: "Nee. De begeleiding is geschikt voor leerlingen met achterstand, maar ook voor leerlingen die efficiënter willen studeren of zich sterker willen voorbereiden op toetsen en examens.",
    },
    {
      q: "Hoe verloopt de betaling?",
      a: "De praktische afspraken rond betaling worden bij de intake of bevestiging van een sessie duidelijk vastgelegd.",
    },
  ];

  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-title">Rémy Paridaens</div>
            <div className="brand-subtitle">Studiebegeleiding in wetenschappen en geschiedenis</div>
          </div>
          <nav className="nav">
            <a href="#aanbod">Aanbod</a>
            <a href="#vakken">Vakken</a>
            <a href="#werkwijze">Werkwijze</a>
            <a href="#tarieven">Tarieven</a>
            <a href="#voorwaarden">Voorwaarden</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="pill">Professionele studiebegeleiding in bijberoep</div>
            <h1>Rust, structuur en gerichte ondersteuning voor leerlingen in het secundair onderwijs.</h1>
            <p className="hero-copy">
              Ik begeleid vooral leerlingen uit de 2e en 3e graad secundair bij biologie, fysica,
              STEM-vakken en geschiedenis. De nadruk ligt op inzicht, vaardigheden,
              studieaanpak en een duidelijke voorbereiding op toetsen en examens.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="button button-solid">Neem contact op</a>
              <a href="#tarieven" className="button button-outline">Bekijk tarieven</a>
            </div>
            <div className="hero-tags">
              <span>2e en 3e graad secundair</span>
              <span>Hybride begeleiding</span>
              <span>Duidelijke afspraken</span>
            </div>
          </div>

          <div className="feature-card">
            <h3>Waarom deze aanpak werkt</h3>
            <ul className="check-list">
              <li>Heldere uitleg met focus op inzicht in plaats van enkel memoriseren.</li>
              <li>Aandacht voor studieaanpak, planning en examenvoorbereiding.</li>
              <li>Sterke ondersteuning bij wetenschappelijke én historische vaardigheden.</li>
              <li>Professionele start via kennismaking, intake en duidelijke verwachtingen.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="aanbod" className="section">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Aanbod</p>
            <h2>Geen losse hulp zonder structuur, maar een duidelijke begeleiding.</h2>
            <p className="section-copy">De begeleiding is opgebouwd rond een rustige start, heldere afspraken en een traject dat past bij de leerling.</p>
          </div>
          <div className="grid grid-4">
            {offerings.map((item) => (
              <article className="card" key={item.title}>
                <p className="card-subtitle">{item.subtitle}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="vakken" className="section section-muted">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Vakken</p>
            <h2>Inzicht, vaardigheden en gerichte ondersteuning per vak.</h2>
            <p className="section-copy">De begeleiding combineert inhoudelijke uitleg met methodiek, denkvaardigheden en voorbereiding op evaluaties.</p>
          </div>
          <div className="grid grid-4">
            {subjects.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="werkwijze" className="section">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Werkwijze</p>
            <h2>Duidelijk, professioneel en afgestemd op de leerling.</h2>
          </div>
          <div className="grid grid-5">
            {process.map(([title, text]) => (
              <article className="card compact" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tarieven" className="section section-muted">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Tarieven</p>
            <h2>Heldere prijzen voor een professionele begeleiding.</h2>
          </div>
          <div className="grid grid-4">
            {[
              ["Kennismakingsgesprek", "Gratis", "Korte verkenning van de hulpvraag en praktische afstemming."],
              ["Online sessie", "€35", "Individuele online begeleidingssessie van 60 minuten."],
              ["Fysieke sessie", "€40", "Individuele fysieke begeleidingssessie van 60 minuten."],
              ["Annulatie", "24 uur", "Kosteloos annuleren tot 24 uur op voorhand."],
            ].map(([title, price, text]) => (
              <article className="card price-card" key={title}>
                <div className="price">{price}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="note">Intake, trajecten en examenbegeleiding kunnen in overleg worden vastgelegd.</p>
        </div>
      </section>

      <section id="voorwaarden" className="section">
        <div className="container two-col">
          <div>
            <div className="section-title">
              <p className="eyebrow">Voorwaarden en privacy</p>
              <h2>Transparantie geeft vertrouwen.</h2>
            </div>
            <article className="card">
              <h3>Belangrijkste afspraken</h3>
              <ul className="check-list">
                {conditions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <article className="card">
            <h3>Privacy</h3>
            <p>Enkel persoonsgegevens die nodig zijn voor contact, planning, begeleiding en administratieve opvolging worden verwerkt.</p>
            <p>Gegevens worden niet gedeeld met derden, behalve wanneer dat wettelijk verplicht is of nodig is voor een correcte administratieve verwerking.</p>
            <p>Ouders en leerlingen kunnen steeds contact opnemen voor vragen over persoonsgegevens, correctie of verwijdering, binnen de grenzen van de toepasselijke regelgeving.</p>
          </article>
        </div>
      </section>

      <section id="faq" className="section section-muted">
        <div className="container faq-wrap">
          <div className="section-title">
            <p className="eyebrow">Veelgestelde vragen</p>
            <h2>Praktische vragen vooraf beantwoord.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="contact-panel">
            <div>
              <p className="eyebrow eyebrow-dark">Contact</p>
              <h2>Interesse in begeleiding?</h2>
              <p className="contact-copy">
                Stuur gerust een bericht met het leerjaar, het vak, de hulpvraag en eventuele toets- of examendata.
                Daarna bekijken we samen of een kennismaking of intake zinvol is.
              </p>
              <div className="hero-actions">
                <a href="mailto:remy.paridaens@hotmail.be" className="button button-light">Mail sturen</a>
                <a href="tel:+32473476893" className="button button-ghost">Bel of sms</a>
              </div>
            </div>

            <div className="contact-cards">
              <article className="contact-card">
                <span className="contact-label">E-mail</span>
                <strong>remy.paridaens@hotmail.be</strong>
              </article>
              <article className="contact-card">
                <span className="contact-label">Telefoon</span>
                <strong>04 73 47 68 93</strong>
              </article>
              <article className="contact-card">
                <span className="contact-label">Vorm</span>
                <strong>Hybride begeleiding</strong>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>© {year} {siteName}</div>
          <div>{vatNumber ? `Btw-nummer: ${vatNumber}` : ""}</div>
        </div>
      </footer>
    </main>
  );
}
