export default function Mark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="14" fill="#12382f" />
      <path
        d="M8 32c6-10 10-14 16-14s10 4 16 14"
        fill="none"
        stroke="#8fd0c6"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M12 27c5-7 8-10 12-10s7 3 12 10"
        fill="none"
        stroke="#f3f1eb"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="24" cy="16" r="2.2" fill="#c45c32" />
    </svg>
  );
}
