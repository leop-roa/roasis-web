import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { getLegalDocument } from "@/lib/legal-content";

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <LegalDocumentPage document={getLegalDocument(locale, "cookies")} />;
}
