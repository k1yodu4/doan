import Link from 'next/link';

export default function MainHeader() {
  return (
    <div className="bg-[#0046be] text-white">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-4 px-4">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight">BEST</span>
            <span className="text-xl font-extrabold tracking-tight">
              BUY
              <span className="ml-0.5 inline-block h-2 w-2 rounded-full bg-yellow-400" />
            </span>
          </div>
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
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9l1-5h16l1 5M4 9v10h16V9M9 13h6"
              />
            </svg>
            <div className="flex flex-col text-xs leading-tight">
              <span>Your store</span>
              <span className="font-semibold">Aiea</span>
            </div>
          </Link>

          <Link href="/account" className="flex items-center gap-2 hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="8" r="4" />
              <path strokeLinecap="round" d="M4 21c0-4 4-6 8-6s8 2 8 6" />
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