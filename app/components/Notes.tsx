"use client";

import { translations } from "../texts";

type Lang = "es" | "en";

interface NotesProps {
  items?: string[];
  lang?: Lang;
}

export default function Notes({ items = [], lang = "es" }: NotesProps) {
  const t = translations[lang];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {lang === "en" ? "Notes" : "Notas"}
      </h2>

      <ul className="notes-list">
        {items.map((note, i) => {
          const translated = t.notes[note] ?? note;
          return <li key={i}>{translated}</li>;
        })}
      </ul>
    </div>
  );
}
