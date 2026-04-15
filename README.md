# Rémy Paridaens | Studiebegeleiding in wetenschappen en geschiedenis

Dit is de bijgewerkte Next.js-projectversie van de website.

## Lokale installatie

1. Open deze map in VS Code
2. Open een terminal in deze map
3. Voer uit:

```bash
npm install
npm run dev
```

4. Open daarna `http://localhost:3000`

## Online zetten via Vercel

1. Maak een nieuwe GitHub-repository
2. Upload de inhoud van deze map naar GitHub
3. Log in op Vercel
4. Kies **New Project**
5. Importeer je GitHub-repository
6. Klik op **Deploy**

## Btw-nummer toevoegen

Open `app/page.tsx` en pas deze regel aan:

```ts
const vatNumber = "";
```

Bijvoorbeeld:

```ts
const vatNumber = "BE0123.456.789";
```

Dan verschijnt het btw-nummer automatisch onderaan in de footer.
