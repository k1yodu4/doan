import Link from 'next/link';
import { BaoShopLogo} from '@/components/icons';
export default function MainHeader() {
  return (
    <div className="bg-[#0046be] text-white">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-4 px-4">
        <Link href="/" className="shrink-0">
          <BaoShopLogo className="h-auto w-16" />
        </Link>
        {/* Search bar */}
        <div className="flex flex-1 items-center">
          <div className="flex w-full overflow-hidden rounded-md bg-white">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm, thương hiệu và nhiều hơn nữa"
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
              <span>Tài khoản</span>
              <span className="font-semibold">Đăng nhập</span>
            </div>
          </Link>

          <Link href="/cart" aria-label="Cart" className="hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="img"
              aria-label="Cart Icon"
              fill="white"
              height={24}
              width={24}
            >
              <path d="M9 22.5c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3M9 18c-.83 0-1.5.67-1.5 1.5S8.17 21 9 21s1.5-.67 1.5-1.5S9.83 18 9 18m10 4.5c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m0-4.5c-.83 0-1.5.67-1.5 1.5S18.17 21 19 21s1.5-.67 1.5-1.5S19.83 18 19 18" />
              <path d="M18.75 18h-11c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25h11.2c.12 0 .22-.08.24-.2l1.28-5.78c.08-.37-.01-.76-.25-1.05S19.64 6 19.26 6H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14.26c.84 0 1.62.38 2.14 1.03.53.65.72 1.5.54 2.32l-1.28 5.78c-.18.81-.88 1.37-1.71 1.37H7.75c-.41 0-.75.34-.75.75s.34.75.75.75h11c.41 0 .75.34.75.75s-.34.75-.75.75" />
              <path d="M7.25 15c-.34 0-.64-.23-.73-.57L3.9 3.95A1.25 1.25 0 0 0 2.69 3h-.94C1.34 3 1 2.66 1 2.25s.34-.75.75-.75h.94c1.26 0 2.36.86 2.67 2.08l2.62 10.49a.748.748 0 0 1-.73.93" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}