import { translations } from "@/app/texts";

interface NotesProps {
  items: string[];
  lang: "es" | "en";
}

export default function Notes({ items, lang }: NotesProps) {
  const t = translations[lang];

  return (
    <ul className="notes-list">
      {items.map((note, i) => {
        // TypeScript safe lookup
        const translated = t.notes[note as keyof typeof t.notes] ?? note;

        return <li key={i}>{translated}</li>;
      })}
    </ul>
  );
}
