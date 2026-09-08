// TODO(DvoDesign): заменить почту, телефон и город на реальные контакты.
export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Расскажите о задаче
          </h2>
          <p className="mt-4 max-w-sm text-ink-soft">
            Пары предложений достаточно, чтобы понять объём. Ответим в
            течение одного рабочего дня.
          </p>

          <dl className="mt-10 flex flex-col gap-4 text-sm">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-ink-soft">Почта</dt>
              <dd className="font-semibold">hello@dvodesign.studio</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-ink-soft">Город</dt>
              <dd className="font-semibold">Валенсия, ES · удалённо</dd>
            </div>
          </dl>
        </div>

        <form className="flex flex-col gap-4 rounded-[28px] bg-paper-dim p-8">
          <label className="flex flex-col gap-1.5 text-sm">
            Имя
            <input
              type="text"
              name="name"
              className="rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-violet"
              placeholder="Как к вам обращаться"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            Почта
            <input
              type="email"
              name="email"
              className="rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-violet"
              placeholder="you@company.com"
            />
          </label>
          <label className="flex flex-col gap-1.5 text-sm">
            О проекте
            <textarea
              name="message"
              rows={4}
              className="rounded-xl border border-ink/15 bg-paper px-4 py-3 outline-none focus:border-violet"
              placeholder="Что нужно сделать и к какому сроку"
            />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-full bg-violet px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-violet-deep"
          >
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}
