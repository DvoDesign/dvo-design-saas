export default function Testimonials() {
  return (
    <section className="bg-ink px-6 py-20 text-paper md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-3xl font-bold tracking-tight md:max-w-md md:text-4xl">
            Отзывы клиентов появятся здесь после первых завершённых проектов
          </h2>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-yellow"
          >
            Стать первым клиентом
          </a>
        </div>
      </div>
    </section>
  );
}
