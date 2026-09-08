const faqs = [
  {
    q: "С какими проектами вы работаете?",
    a: "С фирменным стилем, промо-сайтами, лендингами и интерфейсами продуктов для B2B-компаний. Берём проект целиком или подключаемся на одном этапе.",
  },
  {
    q: "Нужен ли у нас уже готовый бренд?",
    a: "Нет. Можем начать с нуля — с логотипа и палитры — или работать поверх того, что уже есть, если это не требует полного пересмотра.",
  },
  {
    q: "На чём вы разрабатываете сайты?",
    a: "Чаще всего на Next.js — это даёт быструю загрузку и удобную работу с контентом. При необходимости собираем и на других стеках.",
  },
  {
    q: "Что мы получаем в конце проекта?",
    a: "Исходники дизайна, код сайта или интерфейса в вашем репозитории и короткую документацию, чтобы дальше вести проект самостоятельно.",
  },
  {
    q: "Как начать?",
    a: "Напишите пару слов о задаче через форму или на почту — назначим короткий созвон и обсудим объём и сроки.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-paper-dim px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-10 font-display text-3xl font-bold tracking-tight md:text-4xl">
          Частые вопросы
        </h2>

        <div className="flex flex-col divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold">
                {item.q}
                <span className="shrink-0 text-xl text-violet transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
