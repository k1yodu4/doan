// components/icons/BaoShopLogo.tsx
type Props = {
  className?: string;
};

export default function BaoShopLogo({ className = 'h-auto w-20' }: Props) {
  return (
    <div className={`flex flex-col leading-none ${className}`}>
      <svg
        aria-label="bao"
        className="block h-auto w-full"
        viewBox="0 0 200 76"
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
      <svg
        aria-label="shop with watermelon"
        className="mt-0.5 block h-auto w-full"
        viewBox="0 0 300 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* S */}
        <path
          d="M28 0 C46 0 56 7 56 16 H44 C44 12 38 10 30 10 C22 10 18 13 18 17 C18 21 22 23 32 25 C50 29 58 34 58 45 C58 54 48 58 32 58 C14 58 4 51 4 42 H16 C16 46 22 48 30 48 C38 48 44 46 44 41 C44 37 38 35 28 33 C12 30 4 25 4 15 C4 6 12 0 28 0 Z"
          fill="currentColor"
        />
        {/* H */}
        <path d="M70 -2 H82 V20 H94 V-2 H106 V56 H94 V30 H82 V56 H70 Z" fill="currentColor" />
        {/* O */}
        <g transform="translate(107, -2)">
          {/* Vỏ xanh — bán kính 48 */}
          <path d="M0 48 A48 48 0 0 1 96 48 Z" fill="#2e7d32" />

          {/* Ruột đỏ — bán kính 44 */}
          <path d="M8 48 A44 44 0 0 1 88 48 Z" fill="#ef4444" />

          {/* Hạt — to hơn, dời ra xa */}
          <ellipse cx="28" cy="38" rx="3" ry="4.5" fill="#1a1a1a" transform="rotate(-20 28 38)" />
          <ellipse cx="48" cy="30" rx="3" ry="4.5" fill="#1a1a1a" />
          <ellipse cx="68" cy="38" rx="3" ry="4.5" fill="#1a1a1a" transform="rotate(20 68 38)" />
          <ellipse cx="38" cy="44" rx="3" ry="4.5" fill="#1a1a1a" transform="rotate(-10 38 44)" />
          <ellipse cx="58" cy="44" rx="3" ry="4.5" fill="#1a1a1a" transform="rotate(10 58 44)" />
        </g>
        {/* P */}
        <path
          d="M190 -2 H214 C228 -2 236 6 236 18 C236 30 228 38 214 38 H202 V56 H190 Z M202 8 V28 H212 C220 28 224 24 224 18 C224 12 220 8 212 8 Z"
          fill="currentColor"
        />
        
      </svg>
    </div>
  );
}