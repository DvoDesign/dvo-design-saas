const faqs = [
  {
    q: "С какими проектами вы работаете?",
    a: "С B2B SaaS-платформами: от проектирования архитектуры до fullstack-разработки и UI. Берём проект целиком или подключаемся на одном этапе.",
  },
  {
    q: "У нас уже есть часть кода — можно продолжить с вами?",
    a: "Да. Сначала разбираем текущую архитектуру, отмечаем узкие места и дальше либо развиваем её, либо предлагаем рефакторинг под рост нагрузки.",
  },
  {
    q: "На чём вы разрабатываете?",
    a: "Frontend на React и Next.js, backend на Node.js, база данных и деплой — весь стек внутри одной команды, без передачи между подрядчиками.",
  },
  {
    q: "Что мы получаем в конце проекта?",
    a: "Код в вашем репозитории, документацию по архитектуре и API, а также базу для дальнейшего развития продукта своей командой.",
  },
  {
    q: "Как начать?",
    a: "Напишите пару слов о задаче через форму или на почту — назначим короткий созвон и обсудим объём, стек и сроки.",
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
