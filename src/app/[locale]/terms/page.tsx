import LegalDocumentPage from "@/components/legal/LegalDocumentPage";
import { getLegalDocument } from "@/lib/legal-content";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <LegalDocumentPage document={getLegalDocument(locale, "terms")} />;
}
