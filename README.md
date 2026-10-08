# Fjord Import demo

Responsive Norwegian business-site concept built with React, TypeScript, Tailwind and Vite.

## Development

```sh
npm ci
npm run dev
npm run lint
npm run build
```

## Contact form

Without `VITE_CONTACT_ENDPOINT`, the form validates fields locally and explicitly confirms that nothing was sent or stored. Example contact details are not clickable.

To enable delivery, copy `.env.example` to `.env.local` and set a public HTTPS endpoint that accepts multipart form data and returns a 2xx response only after accepting the inquiry. Fields: `name`, `email`, `company`, `message`, and honeypot `website`. Configure the receiving service, recipient and allowed origin before rebuilding. No secret belongs in a `VITE_` variable: these values are public in the built JavaScript.

The frontend includes required fields, pending/success/error states, duplicate-submit protection and a 15-second timeout. On failure it retains the entered information. The receiving service must enforce server-side validation, spam prevention and rate limits. Test actual inbox delivery before launch; a successful HTTP response alone does not verify email delivery.

## Customer handover

- Replace demo contact information, company copy and demo labels in Hero, Contact and Footer; use the customer's copyright/branding.
- Update page title, description and social metadata in index.html. Add canonical URL, og:url and an absolute og:image URL once the production domain and share image are known.
- Confirm rights to both supplied photos before commercial reuse; this repository contains no image-license evidence.
- Configure form delivery and appropriate privacy information before collecting real inquiries.
- Verify navigation and form on mobile, tablet and desktop, including keyboard interaction, errors and a real inbox delivery test.

The demo is intentionally not presented as a live import business. No form service or hosting subscription is provisioned by this change.
