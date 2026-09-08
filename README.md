# DvoDesign — сайт студии (черновик)

Next.js 16 + Tailwind CSS 4, TypeScript. Дизайн финальный по подходу, контент — плейсхолдер.

## Запуск

```
npm install
npm run dev
```

Открыть http://localhost:3000

## Что нужно заменить перед публикацией

- `src/components/Contact.tsx` — реальная почта, город/контакты (помечено `TODO`)
- `src/components/Pricing.tsx` — реальные цены и сроки (помечено `TODO`)
- `src/components/Work.tsx` — реальные кейсы вместо плейсхолдеров «Скоро»
- `src/components/Testimonials.tsx` — реальные отзывы клиентов, когда появятся

## Шрифты

Bricolage Grotesque и Public Sans подключены через `<link>` на Google Fonts в
`src/app/layout.tsx` (а не через `next/font/google`) — так надёжнее без
предположений о доступе к сети на этапе сборки. Если хотите самохостинг
шрифтов и оптимизацию через `next/font`, верните `Bricolage_Grotesque` и
`Public_Sans` из `next/font/google` в `layout.tsx` и уберите `<link>`-теги.

## Структура

- `src/app/layout.tsx` — шрифты, метаданные
- `src/app/globals.css` — цветовые токены (фиолетовый/коралловый/жёлтый) и типографика
- `src/components/` — Header, Hero, Services, Work, Process, Testimonials, Pricing, Faq, Contact, Footer
