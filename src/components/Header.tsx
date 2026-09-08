const links = [
  { href: "#work", label: "Работы" },
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "Вопросы" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
            <span className="absolute h-8 w-8 rotate-6 rounded-lg bg-violet" />
            <span className="absolute h-8 w-8 -rotate-6 rounded-lg bg-coral opacity-80" />
            <span className="relative text-sm font-bold text-paper">D</span>
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            DvoDesign
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-violet-deep"
        >
          Обсудить проект
        </a>
      </div>
    </header>
  );
}
