# Rémy Paridaens | Website met werkend contactformulier via Resend

Deze versie gebruikt **Resend** om formulierberichten te versturen.
Dat is betrouwbaarder op Vercel dan klassieke SMTP via Hotmail/Outlook.

## Wat moet je doen?

### 1. Maak een Resend-account
Ga naar resend.com en maak een account aan.

### 2. Verifieer je domein
Voeg je domein `remyparidaens.be` toe in Resend en doorloop de DNS-verificatie.

### 3. Maak een API key
Maak in Resend een API key aan.

### 4. Voeg in Vercel deze environment variables toe
- RESEND_API_KEY
- RESEND_FROM
- CONTACT_TO

Aanbevolen waarden:
- RESEND_FROM = Website <contact@remyparidaens.be>
- CONTACT_TO = remy.paridaens@hotmail.be

### 5. Redeploy je project
Na het toevoegen of wijzigen van environment variables moet je opnieuw deployen.

## Belangrijk
Je ondernemingsnummer en btw-nummer kan je later toevoegen in:
`app/site-config.ts`

## Lokale opstart
```bash
npm install
npm run dev
```
