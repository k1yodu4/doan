// components/icons/SearchIcon.tsx
type Props = {
  className?: string;
};

export default function SearchIcon({ className = 'h-5 w-5' }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      className={`fill-current ${className}`}
    >
      <path d="M10 18.5c-4.69 0-8.5-3.81-8.5-8.5S5.31 1.5 10 1.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5M10 3c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7" />
      <path d="M21.25 22c-.18 0-.36-.07-.51-.2l-6-5.5a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05l6 5.5c.31.28.33.75.05 1.06a.71.71 0 0 1-.55.25" />
    </svg>
  );
}