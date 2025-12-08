interface NotesProps {
  items: string[];
  lang: "es" | "en";
  translations: Record<string, string>;
}

export default function Notes({ items, translations }: NotesProps) {
  return (
    <div>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          marginBottom: "12px",
          marginTop: "-6px",
        }}
      >
        Notes
      </h2>

      <ul className="space-y-3">
        {items.map((note, i) => {
          const translated = translations[note] ?? note;

          return (
            <li
              key={i}
              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm"
            >
              {/* ICONO ELEGANTE */}
              <span className="text-blue-600 text-lg mt-0.5">•</span>

              {/* TEXTO */}
              <span className="text-gray-700 leading-snug">{translated}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
