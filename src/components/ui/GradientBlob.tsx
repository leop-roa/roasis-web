interface GradientBlobProps {
  className?: string;
}

export default function GradientBlob({ className = "" }: GradientBlobProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-emerald-100 blur-3xl ${className}`}
    />
  );
}
