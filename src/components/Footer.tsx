export default function Footer() {
  return (
    <footer className="border-t border-ink/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-ink-soft md:flex-row">
        <span>© {new Date().getFullYear()} DvoDesign</span>
        <div className="flex gap-6">
          <a href="#work" className="hover:text-ink">
            Работы
          </a>
          <a href="#services" className="hover:text-ink">
            Услуги
          </a>
          <a href="#contact" className="hover:text-ink">
            Контакты
          </a>
        </div>
      </div>
    </footer>
  );
}
