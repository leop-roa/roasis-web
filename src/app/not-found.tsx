export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900">404</h1>
          <p className="mt-4 text-gray-500">
            Page not found.
            <span className="mx-2 text-gray-300">|</span>
            <span lang="ko">페이지를 찾을 수 없습니다.</span>
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="/en"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              English &rarr;
            </a>
            <a
              href="/ko"
              className="text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              한국어 &rarr;
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
