// 📖 Docs: obsidian/frontend/design-system.md

export interface EyebrowProps {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}

/** Small uppercase-adjacent label with a leading dot, used above headings. */
export const Eyebrow = ({
  children,
  tone = "dark",
  className = "",
}: EyebrowProps) => {
  const textColor =
    tone === "light" ? "text-white/70" : "text-[#111]/70";
  const dotColor = tone === "light" ? "bg-white/60" : "bg-[#111]/50";

  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-medium ${textColor} ${className}`}
    >
      <span className={`size-1.5 rounded-full ${dotColor}`} aria-hidden="true" />
      {children}
    </span>
  );
};
