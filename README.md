# Rémy Paridaens | Finale websiteversie

Dit project bevat de afgewerkte website met:
- uitgebreide FAQ
- contactformulier
- privacypagina
- Instagram-koppeling
- ondernemings- en contactgegevens

## Belangrijk vóór commerciële livegang
Voeg na je inschrijving in de KBO je ondernemingsnummer en eventueel btw-nummer toe in:
`app/site-config.ts`

## Contactformulier activeren
Het formulier is technisch voorzien, maar om echte mails te versturen moet je in Vercel of lokaal deze environment variables toevoegen:

- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASS
- CONTACT_TO (optioneel)

Daarna verzendt het formulier naar je mailbox met een bevestigingsmelding op de pagina.

## Lokale opstart
```bash
npm install
npm run dev
```

## Waar gegevens aanpassen?
Open:
`app/site-config.ts`

Daar kan je later eenvoudig aanpassen:
- adres
- e-mail
- telefoon
- Instagram
- ondernemingsnummer
- btw-nummer
- tarieven
