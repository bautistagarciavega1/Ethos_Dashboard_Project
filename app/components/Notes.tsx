"use client";

type Lang = "es" | "en";

interface NotesProps {
  items?: string[];
  lang?: Lang;
}

export default function Notes({ items, lang = "es" }: NotesProps) {
  const notes = Array.isArray(items) ? items : [];

  const title = lang === "en" ? "Notes" : "Notas";

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <ul className="notes-list">
        {notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </div>
  );
}
