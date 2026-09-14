import Link from 'next/link';
import { BaoShopLogo} from '@/components/icons';
export default function MainHeader() {
  return (
    <div className="bg-[#0046be] text-white">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <BaoShopLogo className="h-auto w-16" />
        </Link>

        {/* Search bar */}
        <div className="flex flex-1 items-center">
          <div className="flex w-full max-w-3xl overflow-hidden rounded-md bg-white">
            <input
              type="text"
              placeholder="Search Best Buy"
              className="flex-1 px-4 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-500"
            />
            <button
              aria-label="Search"
              className="flex items-center justify-center bg-white px-3 text-gray-700 hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side: store / account / cart */}
        <div className="flex shrink-0 items-center gap-6">
          <Link href="/stores" className="flex items-center gap-2 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="img"
              className="h-6 w-6 fill-current text-white"
            >
              <path d="M19.5 22H4.25C3.01 22 2 20.99 2 19.75v-10c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41.34.75.75.75H19.5c.55 0 1-.45 1-1v-8.25c0-.41-.34-.75-.75-.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3C20.99 9 22 10.01 22 11.25v8.25a2.5 2.5 0 0 1-2.5 2.5" />
              <path d="M16.25 14.5h-8.5c-.41 0-.75.34-.75.75v6c0 .41.34.75.75.75s.75-.34.75-.75V16h2.75v5.25c0 .41.34.75.75.75s.75-.34.75-.75V16h2.75v5.25c0 .41.34.75.75.75s.75-.34.75-.75v-6c0-.41-.34-.75-.75-.75M15.75 12.5H5.25a.75.75 0 0 1-.53-.22l-3-3a.75.75 0 0 1-.22-.53v-3.5c0-.2.08-.39.22-.53l3-3a.75.75 0 0 1 .53-.22h10.5c.96 0 1.75.79 1.75 1.75v7.5c0 .96-.79 1.75-1.75 1.75M5.56 11h10.19c.14 0 .25-.11.25-.25v-7.5c0-.14-.11-.25-.25-.25H5.56L3 5.56v2.88z" />
              <path d="M6 7c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1" />
            </svg>
            <div className="flex flex-col text-xs leading-tight">
              <span>Your store</span>
              <span className="font-semibold">Aiea</span>
            </div>
          </Link>

          <Link href="/account" className="flex items-center gap-2 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="img"
              className="leading-icon"
              fill="white"
              width={24}
              height={24}
              style={{ flex: "0 0 auto" }}
            >
              <path d="M12 23C5.93 23 1 18.07 1 12S5.93 1 12 1s11 4.93 11 11-4.93 11-11 11m0-20.5c-5.24 0-9.5 4.26-9.5 9.5s4.26 9.5 9.5 9.5 9.5-4.26 9.5-9.5-4.26-9.5-9.5-9.5" />
              <path d="M15.93 11.64c.35-.64.57-1.37.57-2.15 0-2.48-2.02-4.5-4.5-4.5s-4.5 2.02-4.5 4.5c0 .78.22 1.51.57 2.15-2.2 1.03-3.57 3.14-3.57 5.61v2.44c0 .2.08.38.21.53C4.83 20.33 7.49 23 12 23c4.5 0 7.17-2.67 7.29-2.78a.74.74 0 0 0 .21-.53v-2.44c0-2.47-1.37-4.58-3.57-5.61M12 6.49c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m6 12.87c-.66.56-2.81 2.14-6 2.14s-5.34-1.58-6-2.14v-2.11c0-1.97 1.16-3.65 2.98-4.38.5.48 1.46 1.13 3.02 1.13s2.52-.65 3.01-1.13c1.83.73 2.99 2.4 2.99 4.38z" />
            </svg>

            <div className="flex flex-col text-xs leading-tight">
              <span>Account</span>
              <span className="font-semibold">Sign in</span>
            </div>
          </Link>

          <Link href="/cart" aria-label="Cart" className="hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l2.4 12.4a2 2 0 002 1.6h7.7a2 2 0 002-1.6L21 7H6"
              />
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="17" cy="20" r="1.5" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}