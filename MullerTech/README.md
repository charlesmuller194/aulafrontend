# Müller Tech & Innovation — Landing Page

Site institucional da **Müller Tech & Innovation (Müller TI)**, construído como
atividade dos guias de *Landing Page* (Desenvolvimento Web — Segundo BI).

Layout-base do Figma re-tematizado para uma identidade própria: **tema escuro +
verde esmeralda**, tipografia Space Grotesk + Inter e conteúdo institucional.

## 🛠️ Stack

- **React 19** + **TypeScript**
- **Vite** (build/dev server)
- CSS puro com **variáveis** e **classes utilitárias** (sem framework de CSS)
- Ícones e logo em **SVG inline** (sem dependências externas)

## 🚀 Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção
npm run preview  # pré-visualiza o build
```

## 📁 Estrutura

```
src/
├── main.tsx              # ponto de entrada (importa index.css + utility.css)
├── pages/
│   └── Home.tsx          # monta todas as seções
├── components/
│   ├── Header.tsx        # nav sticky + menu mobile (useState/useEffect)
│   ├── Hero.tsx
│   ├── Solutions.tsx     # usa o componente Card
│   ├── Card.tsx
│   ├── Testimonials.tsx  # carrossel; usa TestimonialCard
│   ├── TestimonialCard.tsx
│   ├── Pricing.tsx       # usa PricingCard
│   ├── PricingCard.tsx
│   ├── Contact.tsx       # formulário com validação + estado de sucesso
│   ├── Footer.tsx
│   ├── Logo.tsx
│   └── icons.tsx         # biblioteca de ícones SVG
└── styles/
    ├── index.css         # reset + tokens (tema dark/verde)
    ├── utility.css       # classes utilitárias (.container, .flex, ...)
    └── *.css             # um arquivo por seção/componente
```

## ✨ Seções

Header · Hero · Soluções · Depoimentos · Planos · Contato · Footer

## 📧 Backend do formulário (Netlify Functions)

O formulário de contato envia um `POST` para `/api/send-email`, que é
redirecionado pelo `netlify.toml` até a function
`netlify/functions/send-email.ts`. Ela valida os dados e envia o e-mail via
**SMTP (nodemailer)**, com as credenciais protegidas em variáveis de ambiente.

```
projeto/
├── netlify.toml                    # na RAIZ do repositório (base = "MullerTech")
└── MullerTech/
    ├── netlify/functions/send-email.ts
    ├── .env                        # credenciais (NÃO commitar)
    └── .env.example                # template (commitar)
```

### Rodando localmente com e-mail

1. Copie `.env.example` para `.env` e preencha as credenciais SMTP.
   - Para testar sem provedor real, crie uma conta grátis em
     [ethereal.email](https://ethereal.email) (os e-mails ficam num painel, não
     são entregues de verdade).
   - Para envio real, use Gmail com **Senha de App** (requer verificação em 2
     etapas) em `smtp.gmail.com`.
2. Suba tudo junto (Vite + functions) com o Netlify CLI:

   ```bash
   npx netlify dev      # http://localhost:8888
   ```

   > Com `npm run dev` (Vite puro, porta 5173) o site abre, mas o endpoint
   > `/api/send-email` **não existe** — use `netlify dev` para testar o envio.

## 🚀 Deploy na Netlify

1. Faça push do repositório para o GitHub.
2. Em [netlify.com](https://netlify.com): **Add new site → Import from GitHub**
   e selecione o repositório. O `netlify.toml` na raiz já configura o build
   (`base = "MullerTech"`, `publish = dist`, functions).
3. Em **Site configuration → Environment variables**, cadastre as mesmas
   variáveis do `.env` com os valores de **produção** (incluindo
   `ALLOWED_ORIGIN` = URL final do site).
4. Cada `git push` dispara um novo deploy automaticamente.

## 🤖 reCAPTCHA (anti-bot)

O formulário usa **reCAPTCHA v2 Checkbox** (`react-google-recaptcha`). O token
gerado pelo widget é enviado junto com a mensagem e **validado no servidor**
pela function (Google `siteverify`) antes de enviar o e-mail — proteção real,
não só visual.

- Frontend: `VITE_RECAPTCHA_SITE_KEY` (chave pública, embutida no build).
- Backend: `RECAPTCHA_SECRET` (chave secreta, usada na function).
- Sem `RECAPTCHA_SECRET` configurado, a function apenas registra um aviso e não
  bloqueia (útil em ambientes ainda sem chave).

### Gerando as chaves de produção

1. Acesse [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin),
   crie um site **reCAPTCHA v2 → "Não sou um robô" (caixa de seleção)**.
2. Em domínios, adicione `mullertech.netlify.app` e `localhost`.
3. Copie a **site key** e a **secret key**.
4. Local: coloque no `.env`. Produção: cadastre como env vars na Netlify.

> O `.env` já vem com as **chaves de teste do Google** (sempre passam) para
> rodar localmente. Troque pelas reais antes de publicar.

## 🚀 Deploy — variáveis na Netlify

No painel da Netlify (**Site configuration → Environment variables**), cadastre
todas as variáveis do `.env` com valores de **produção**:

`SMTP_HOST` · `SMTP_PORT` · `SMTP_SECURE` · `SMTP_USER` · `SMTP_PASS` ·
`CONTACT_EMAIL` · `ALLOWED_ORIGIN` (= `https://mullertech.netlify.app`) ·
`VITE_RECAPTCHA_SITE_KEY` · `RECAPTCHA_SECRET`

Depois faça um novo deploy (ou `git push`) para o build pegar as variáveis.
