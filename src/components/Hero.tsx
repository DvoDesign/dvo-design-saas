export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-6 text-sm font-medium text-ink-soft">
            Студия дизайна · Валенсия и удалённо
          </p>
          <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight md:text-6xl">
            Бренд, который{" "}
            <span className="relative inline-block">
              <span className="relative z-10">замечают</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-4 -rotate-1 bg-yellow/70 md:h-5" />
            </span>{" "}
            раньше, чем дочитывают название.
          </h1>
          <p className="mt-6 max-w-md text-lg text-ink-soft">
            DvoDesign собирает фирменный стиль, сайт и интерфейс продукта в
            одну систему — для B2B-компаний, которым нужно выглядеть так же
            хорошо, как они работают.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-violet px-7 py-3.5 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-violet-deep"
            >
              Начать проект
            </a>
            <a
              href="#work"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
            >
              Смотреть работы
            </a>
          </div>
        </div>

        <div className="relative mx-auto h-[340px] w-full max-w-sm md:h-[420px]">
          <div className="absolute left-0 top-4 h-40 w-40 rotate-[-8deg] rounded-3xl bg-coral md:h-48 md:w-48" />
          <div className="absolute right-2 top-0 h-28 w-28 rotate-[12deg] rounded-2xl bg-yellow md:h-32 md:w-32" />
          <div className="absolute bottom-6 left-8 h-36 w-52 rotate-[4deg] rounded-3xl bg-violet md:h-40 md:w-60" />
          <div className="absolute bottom-0 right-0 h-24 w-24 rotate-[-6deg] rounded-full border-4 border-ink/80" />
          <div className="absolute left-1/2 top-1/2 flex h-28 w-44 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] flex-col justify-between rounded-2xl bg-paper p-4 shadow-[0_20px_50px_-15px_rgba(21,18,31,0.35)] md:h-32 md:w-52">
            <span className="font-display text-xs font-bold uppercase tracking-wide text-ink-soft">
              Aa
            </span>
            <div className="flex gap-1.5">
              <span className="h-4 w-4 rounded-full bg-violet" />
              <span className="h-4 w-4 rounded-full bg-coral" />
              <span className="h-4 w-4 rounded-full bg-yellow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
