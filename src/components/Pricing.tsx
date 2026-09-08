// TODO(DvoDesign): заменить price и срок на реальные значения перед публикацией.
const tiers = [
  {
    name: "MVP-платформа",
    price: "по запросу",
    duration: "4–6 недель",
    features: [
      "Архитектура данных и API",
      "Личный кабинет с ролями доступа",
      "Frontend + backend на одном стеке",
    ],
    tone: "border border-ink/15",
  },
  {
    name: "B2B SaaS",
    price: "по запросу",
    duration: "8–14 недель",
    features: [
      "Проектирование архитектуры под рост нагрузки",
      "Биллинг, интеграции с внешними API",
      "Fullstack-разработка и деплой в продакшен",
    ],
    tone: "bg-violet text-paper",
    featured: true,
  },
  {
    name: "Развитие продукта",
    price: "по запросу",
    duration: "от 4 недель / месяц",
    features: [
      "Новые модули поверх существующей архитектуры",
      "Рефакторинг узких мест под нагрузку",
      "Постоянная команда fullstack-разработки",
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
