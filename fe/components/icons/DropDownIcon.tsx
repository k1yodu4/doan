type Props = {
  className?: string;
};

export default function DropDownIcon({ className = 'h-4 w-4' }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="m12.71 16.29 5.59-5.59c.63-.63.18-1.71-.71-1.71H6.41c-.89 0-1.34 1.08-.71 1.71l5.59 5.59c.39.39 1.02.39 1.41 0Z"
      />
    </svg>
  );
}