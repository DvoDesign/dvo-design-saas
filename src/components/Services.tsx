const services = [
  {
    title: "Фирменный стиль",
    text: "Логотип, палитра, типографика и правила их использования — система, которую можно передать любому подрядчику без потери качества.",
    tone: "bg-violet text-paper",
  },
  {
    title: "Сайты и лендинги",
    text: "Промо-сайты и посадочные страницы для B2B: от структуры и текста до готовой вёрстки на Next.js.",
    tone: "bg-paper-dim text-ink",
  },
  {
    title: "UI/UX продуктов",
    text: "Интерфейсы веб-сервисов и внутренних инструментов — от карты экранов до кликабельного прототипа.",
    tone: "bg-coral text-paper",
  },
  {
    title: "Фронтенд-разработка",
    text: "Сборка дизайна в рабочий код: React, Next.js, адаптивная вёрстка и интеграция с CMS.",
    tone: "bg-ink text-paper",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-lg">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Чем мы занимаемся
          </h2>
          <p className="mt-4 text-ink-soft">
            Берём проект целиком или подключаемся на одном участке — бренд,
            сайт или интерфейс продукта.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`rounded-[28px] p-8 ${service.tone} ${
                i % 2 === 1 ? "sm:mt-8" : ""
              }`}
            >
              <h3 className="font-display text-xl font-bold">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed opacity-90">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
