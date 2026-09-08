// 📖 Docs: obsidian/frontend/design-system.md

export interface TagChipProps {
  children: React.ReactNode;
  tone?: "dark" | "light";
}

/** Pill-shaped tag, used on dark portfolio cards. */
export const TagChip = ({ children, tone = "light" }: TagChipProps) => {
  const styles =
    tone === "light"
      ? "border-white/25 text-white"
      : "border-line text-foreground";

  return (
    <span
      className={`inline-flex rounded-pill border px-4 py-2 text-sm ${styles}`}
    >
      {children}
    </span>
  );
};
