interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-150 hover:border-emerald-200 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
