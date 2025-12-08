interface NotesProps {
  items: string[];
  lang: "es" | "en";
  translations: Record<string, string>;
}

export default function Notes({ items, translations }: NotesProps) {
  return (
    <ul className="notes-list">
      {items.map((note, i) => {
        const translated = translations[note] ?? note;
        return <li key={i}>{translated}</li>;
      })}
    </ul>
  );
}
