# Indus Valley Foods — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS website for Indus Valley
Foods, a Karachi-based rice and Himalayan pink salt exporter.

## Project structure

```
indus-valley-foods/
├── app/
│   ├── layout.tsx          # fonts, global metadata
│   ├── page.tsx             # homepage (assembles all sections)
│   ├── globals.css
│   └── catalog/
│       ├── layout.tsx       # catalog page metadata
│       └── page.tsx         # full product catalog page
├── components/
│   ├── Navbar.tsx            # sticky glass navbar + mobile menu
│   ├── Hero.tsx
│   ├── ProductShowcase.tsx   # rice + salt cards
│   ├── TrustBar.tsx
│   ├── ContactSection.tsx    # wraps RFQForm
│   ├── RFQForm.tsx           # sends inquiry via WhatsApp or Email
│   ├── Footer.tsx
│   └── FloatingContact.tsx   # floating WhatsApp / Call / Email button
├── lib/
│   └── constants.ts          # ⭐ edit phone/email/company info here only
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

To change the WhatsApp number, email, or owner name anywhere on the site,
edit **`lib/constants.ts`** only — every component reads from that one file.

---

## 1. Laptop par chalane ka tareeka (local setup)

### Zaroori software (pehle install karein)

1. **Node.js** (version 18.18 ya usse upar) — [nodejs.org](https://nodejs.org)
   se LTS version download karein aur install karein.
   - Terminal mein check karein: `node -v` (18.18+ dikhna chahiye)
2. **Code editor** — [VS Code](https://code.visualstudio.com) free hai, wahi
   use kar sakte hain.

### Steps

1. Is poore `indus-valley-foods` folder ko apne laptop par kahin bhi copy
   kar lein (jaise Desktop par).

2. Terminal / Command Prompt kholein aur us folder mein jayein:

   ```bash
   cd path/to/indus-valley-foods
   ```

3. Sab dependencies install karein (ye ek dafa karna hai, internet chahiye):

   ```bash
   npm install
   ```

   Ye process 1-3 minute lega. Iske baad ek `node_modules` folder ban jayega
   — usko touch mat karein.

4. Development server start karein:

   ```bash
   npm run dev
   ```

5. Browser kholein aur jayein:

   ```
   http://localhost:3000
   ```

   Aapki website yahan live dikhegi. Jab bhi aap kisi file mein change
   karenge (jaise phone number ya text), browser khud-ba-khud refresh ho
   jayega.

6. Server band karne ke liye terminal mein `Ctrl + C` dabayein.

### Common issues

- **`npm: command not found`** → Node.js sahi se install nahi hua, dobara
  install karein aur terminal restart karein.
- **Port 3000 already in use** → Koi aur app us port pe chal raha hai;
  `npm run dev -- -p 3001` se doosre port par chalayein.
- **Colors ya layout bigda hua dikhe** → `npm install` dobara chalayein,
  phir `npm run dev`.

---

## 2. Content update karna (bina developer ke)

- **Phone / WhatsApp / Email / Owner name** → `lib/constants.ts` file kholein,
  values change karein, save karein — poori site update ho jayegi.
- **Rice/Salt varieties, specs, packaging** → `components/ProductShowcase.tsx`
  aur `app/catalog/page.tsx` mein text edit karein.
- **Hero heading/subtext** → `components/Hero.tsx`.

---

## 3. Domain khareed kar live karna (deployment)

Sabse aasan aur free tareeka **Vercel** hai (jo khud Next.js banane wali
company hai) — koi server manage nahi karna padta.

### Step A — Domain khareedna

Kisi bhi registrar se domain khareedein, jaise:
- Namecheap
- GoDaddy
- Google Domains / Squarespace Domains
- Pakistan mein: PKNIC (agar `.pk` chahiye)

### Step B — Code ko GitHub par upload karna

1. [github.com](https://github.com) par free account banayein.
2. Naya repository banayein (e.g. `indus-valley-foods`).
3. Terminal mein apne project folder ke andar:

   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/indus-valley-foods.git
   git push -u origin main
   ```

### Step C — Vercel par deploy karna

1. [vercel.com](https://vercel.com) par jayein, GitHub account se sign up
   karein (free).
2. "Add New Project" par click karein, apni `indus-valley-foods` repository
   select karein.
3. Vercel khud detect kar lega ke ye Next.js project hai — bas "Deploy"
   dabayein. 2 minute mein live ho jayegi (temporary `.vercel.app` link par).

### Step D — Apna domain connect karna

1. Vercel project ke "Settings → Domains" mein jayein.
2. Apna khareeda hua domain type karein (e.g. `indusvalleyfoods.com`).
3. Vercel aapko kuch DNS records (A record / CNAME) dega.
4. Apne domain registrar (Namecheap/GoDaddy) ki website par jayein, DNS
   settings mein wahi records add kar dein.
5. 10 minute se 24 ghante ke andar domain live ho jayega, poori tarah free
   SSL (https) ke saath.

Is poore process mein koi cost nahi hai sirf domain ke ilawa (jo roughly
$10-15/year hota hai). Hosting khud Vercel free tier par ho jati hai.

---

## Notes

- Ye site fully static/serverless hai — koi database ya backend server
  nahi chahiye.
- RFQ form WhatsApp aur Email dono par directly bhej deta hai (koi
  third-party form service ki zaroorat nahi).
- Agar aage chal kar contact form ko email inbox mein automatically save
  karwana ho (jaise Google Sheet ya CRM mein), tab ek chhota backend
  integration add kiya ja sakta hai — filhal ke liye ye setup kaafi hai.
