// components/icons/BaoShopLogo.tsx
type Props = {
  className?: string;
};

export default function BaoShopLogo({ className = 'h-auto w-20' }: Props) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      {/* Dòng 1: BAO */}
      <svg
        aria-label="bao"
        className="block h-auto w-full"
        viewBox="0 0 220 80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 6 H30 C40 6 46 12 46 20 C46 26 42 30 36 32 C44 34 50 39 50 47 C50 56 42 62 30 62 H8 Z M20 16 V30 H28 C34 30 36 27 36 23 C36 19 34 16 28 16 Z M20 40 V54 H30 C36 54 38 51 38 47 C38 43 36 40 30 40 Z"
          fill="currentColor"
        />
        <path
          d="M60 62 L78 6 H92 L110 62 H98 L94 48 H76 L72 62 Z M79 38 H91 L85 16 Z"
          fill="currentColor"
        />
        <path
          d="M140 6 C160 6 173 18 173 34 C173 50 160 62 140 62 C120 62 107 50 107 34 C107 18 120 6 140 6 Z M140 16 C128 16 119 24 119 34 C119 44 128 52 140 52 C152 52 161 44 161 34 C161 24 152 16 140 16 Z"
          fill="currentColor"
        />
      </svg>

      {/* Dòng 2: SHOP */}
      <svg
        aria-label="shop"
        className="block h-auto w-full"
        viewBox="0 0 300 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 6 C46 6 56 13 56 22 H44 C44 18 38 16 30 16 C22 16 18 19 18 23 C18 27 22 29 32 31 C50 35 58 40 58 51 C58 60 48 64 32 64 C14 64 4 57 4 48 H16 C16 52 22 54 30 54 C38 54 44 52 44 47 C44 43 38 41 28 39 C12 36 4 31 4 21 C4 12 12 6 28 6 Z"
          fill="currentColor"
          transform="translate(0,-6)"
        />
        <path d="M70 4 H82 V26 H94 V4 H106 V62 H94 V36 H82 V62 H70 Z" fill="currentColor" />
        <path
          d="M140 4 C160 4 173 16 173 32 C173 48 160 62 140 62 C120 62 107 48 107 32 C107 16 120 4 140 4 Z M140 14 C128 14 119 22 119 32 C119 42 128 52 140 52 C152 52 161 42 161 32 C161 22 152 14 140 14 Z"
          fill="currentColor"
        />
        <path
          d="M190 4 H214 C228 4 236 12 236 24 C236 36 228 44 214 44 H202 V62 H190 Z M202 14 V34 H212 C220 34 224 30 224 24 C224 18 220 14 212 14 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}