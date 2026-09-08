const services = [
  {
    title: "Архитектура продукта",
    text: "Проектируем структуру системы до первой строчки кода: модели данных, границы сервисов, точки роста — чтобы продукт не пришлось переписывать через год.",
    tone: "bg-violet text-paper",
  },
  {
    title: "B2B SaaS платформы",
    text: "Личные кабинеты, биллинг, роли и права доступа, интеграции с внешними API — весь функционал, который нужен рабочему B2B-сервису.",
    tone: "bg-paper-dim text-ink",
  },
  {
    title: "UI/UX продуктов",
    text: "Интерфейсы сложных рабочих панелей и внутренних инструментов — от карты экранов до кликабельного прототипа.",
    tone: "bg-coral text-paper",
  },
  {
    title: "Fullstack-разработка",
    text: "Frontend на React и Next.js, backend на Node.js, база данных и деплой — берём продукт от прототипа до продакшена.",
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
            Строим B2B SaaS-продукты целиком — от архитектуры и бренда до
            рабочего кода в продакшене.
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
