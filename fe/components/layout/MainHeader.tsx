import Link from 'next/link';
import { BaoShopLogo, CartIcon, UserIcon, SearchIcon} from '@/components/icons';
export default function MainHeader() {
  return (
    <div className="bg-[#0046be] text-white">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-4 px-8 py-4 md:gap-6 md:px-8">
        <Link href="/" className="shrink-0">
          <BaoShopLogo className="h-auto w-16" />
        </Link>
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
              <SearchIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-6">
          <Link href="/account" className="flex items-center gap-2 hover:underline">
            <UserIcon className="h-7 w-7" />
            <div className="flex flex-col text-xs leading-tight">
              <span>Tài khoản</span>
              <span className="font-semibold">Đăng nhập</span>
            </div>
          </Link>
          <Link href="/cart" aria-label="Cart" className="hover:opacity-80">
            <CartIcon className="h-7 w-7" />
          </Link>
        </div>
      </div>
    </div>
  );
}