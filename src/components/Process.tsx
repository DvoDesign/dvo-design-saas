const steps = [
  {
    n: "1",
    title: "Бриф и погружение",
    text: "Разбираем бизнес, аудиторию и то, что уже пробовали. Формулируем задачу так, чтобы её можно было решить дизайном.",
  },
  {
    n: "2",
    title: "Концепция",
    text: "Предлагаем 1–2 направления с обоснованием, а не десяток вариантов на выбор. Меньше решений — быстрее старт.",
  },
  {
    n: "3",
    title: "Дизайн",
    text: "Доводим выбранное направление до финальных экранов или гайдлайна бренда, показывая прогресс на созвонах.",
  },
  {
    n: "4",
    title: "Разработка",
    text: "Собираем сайт или интерфейс в код, тестируем на реальных данных и устройствах.",
  },
  {
    n: "5",
    title: "Запуск и передача",
    text: "Отдаём исходники, макеты и короткую документацию — дальше вы можете вести проект своей командой.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 font-display text-3xl font-bold tracking-tight md:text-4xl">
          Как строим работу
        </h2>

        <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
          {steps.map((step) => (
            <div
              key={step.n}
              className="grid gap-3 py-7 md:grid-cols-[3rem_1fr_2fr] md:items-baseline md:gap-8"
            >
              <span className="font-display text-2xl font-bold text-violet">
                {step.n}
              </span>
              <h3 className="font-display text-lg font-bold">{step.title}</h3>
              <p className="text-sm text-ink-soft md:max-w-md">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
