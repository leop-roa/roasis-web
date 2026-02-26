import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900">404</h1>
        <p className="mt-4 text-gray-500">Page not found.</p>
        <Link
          href="/"
          className="mt-6 inline-block text-sm font-medium text-emerald-600 hover:text-emerald-700"
        >
          Go home &rarr;
        </Link>
      </div>
    </section>
  );
}
