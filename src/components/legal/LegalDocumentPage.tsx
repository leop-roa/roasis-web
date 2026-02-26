import type { LegalDocument } from "@/lib/legal-content";

type Props = {
  document: LegalDocument;
};

export default function LegalDocumentPage({ document }: Props) {
  return (
    <section className="px-6 pb-24 pt-36 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <header className="pb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-gray-500">{document.kicker}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {document.title}
          </h1>
          <p className="mt-3 text-sm text-gray-500">{document.lastUpdatedLabel}</p>
          <div className="mt-6 space-y-3 text-sm leading-7 text-gray-600 sm:text-base">
            {document.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <nav aria-label={document.contentsLabel} className="border-t border-b border-gray-200 py-6">
          <h2 className="text-sm font-medium text-gray-900">{document.contentsLabel}</h2>
          <ol className="mt-3 space-y-2 text-sm text-gray-600">
            {document.sections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="hover:text-gray-900">
                  {index + 1}. {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mt-8">
          {document.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className={`scroll-mt-28 py-7 ${index > 0 ? "border-t border-gray-200" : ""}`}
            >
              <h2 className="text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
                {section.title}
              </h2>

              {section.paragraphs && (
                <div className="mt-4 space-y-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}

              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600 sm:text-base">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>

        <footer className="border-t border-gray-200 pt-8 text-sm text-gray-600">
          <h2 className="font-medium text-gray-900">{document.contactTitle}</h2>
          <p className="mt-3">{document.contact.company}</p>
          <p>{document.contact.website}</p>
          <p>
            <a href={`mailto:${document.contact.email}`} className="underline underline-offset-2">
              {document.contact.email}
            </a>
          </p>
          <p className="mt-6 text-xs leading-5 text-gray-500">{document.notice}</p>
        </footer>
      </div>
    </section>
  );
}
