const placeholders = [
  { tag: "Фирменный стиль", rotate: "-rotate-2", tone: "bg-violet" },
  { tag: "B2B-платформа", rotate: "rotate-1", tone: "bg-coral" },
  { tag: "Лендинг", rotate: "-rotate-1", tone: "bg-yellow" },
  { tag: "Продуктовый UI", rotate: "rotate-2", tone: "bg-ink" },
];

export default function Work() {
  return (
    <section id="work" className="bg-paper-dim px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Работы
          </h2>
          <p className="max-w-sm text-sm text-ink-soft">
            Раздел собирается — сюда встанут кейсы с разбором задачи, решения
            и результата, как только проекты будут готовы к показу.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {placeholders.map((item) => (
            <div key={item.tag} className={`group ${item.rotate}`}>
              <div
                className={`flex aspect-[4/5] flex-col justify-between rounded-3xl p-6 ${item.tone} text-paper transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[1.02]`}
              >
                <span className="text-xs font-semibold opacity-70">
                  Скоро
                </span>
                <span className="font-display text-lg font-bold leading-snug">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
