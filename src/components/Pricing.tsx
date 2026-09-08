// TODO(DvoDesign): заменить price и срок на реальные значения перед публикацией.
const tiers = [
  {
    name: "Лендинг",
    price: "по запросу",
    duration: "1–2 недели",
    features: [
      "Структура и текст страницы",
      "Дизайн под ваш бренд или с нуля",
      "Вёрстка и базовая аналитика",
    ],
    tone: "border border-ink/15",
  },
  {
    name: "Фирменный стиль",
    price: "по запросу",
    duration: "2–4 недели",
    features: [
      "Логотип и палитра",
      "Типографика и гайдлайн",
      "Шаблоны для соцсетей и презентаций",
    ],
    tone: "bg-violet text-paper",
    featured: true,
  },
  {
    name: "Сайт + интерфейс",
    price: "по запросу",
    duration: "4–8 недель",
    features: [
      "Многостраничный сайт на Next.js",
      "Интерфейс личного кабинета или сервиса",
      "Передача исходников и документации",
    ],
    tone: "border border-ink/15",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-lg">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Форматы работы
          </h2>
          <p className="mt-4 text-ink-soft">
            Точная стоимость зависит от объёма и сроков — ориентиры ниже,
            финальную оценку даём после брифа.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-[28px] p-8 ${tier.tone} ${
                tier.featured ? "md:-translate-y-3" : ""
              }`}
            >
              <h3 className="font-display text-xl font-bold">{tier.name}</h3>
              <p
                className={`mt-2 text-sm ${
                  tier.featured ? "text-paper/75" : "text-ink-soft"
                }`}
              >
                {tier.duration}
              </p>
              <p className="mt-6 font-display text-2xl font-bold">
                {tier.price}
              </p>
              <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        tier.featured ? "bg-yellow" : "bg-violet"
                      }`}
                    />
                    <span className={tier.featured ? "text-paper/90" : "text-ink-soft"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  tier.featured
                    ? "bg-paper text-ink hover:bg-yellow"
                    : "bg-ink text-paper hover:bg-violet-deep"
                }`}
              >
                Обсудить
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
