// components/SignInBanner.tsx
import Link from 'next/link';
import BannerWrapper from '@/components/BannerWrapper';
import { UserIcon } from '@/components/icons';

export default function SignInBanner() {
  return (
    <BannerWrapper>
      <section className="bg-white">
        <div className="flex flex-col items-start gap-6 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-8">
          {/* Cột trái: icon + text */}
          <div className="flex items-start gap-4">
            <UserIcon className="h-8 w-8 shrink-0 text-[#393c42]"/>
            <div className="font-sans text-xl text-gray-800">
              <p className="leading-snug">
                Sign in for free shipping*, recommendations, easy order
                tracking and more.
              </p>
              <p className="mt-1 text-xs text-gray-500">
                *Exclusions apply.{' '}
                <Link
                  href="/learn-more"
                  className="text-blue-600 hover:underline"
                >
                  Learn more
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Cột phải: 2 nút */}
          <div className="flex w-full shrink-0 items-center gap-3 md:w-auto">
            <Link
              href="/signin"
              className="flex-1 rounded-md bg-[#0046be] px-6 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#003399] md:flex-none"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="flex-1 rounded-md border border-gray-300 bg-white px-6 py-2.5 text-center text-sm font-semibold text-gray-800 transition hover:bg-gray-50 md:flex-none"
            >
              Create an account
            </Link>
          </div>
        </div>
      </section>
    </BannerWrapper>
  );
}