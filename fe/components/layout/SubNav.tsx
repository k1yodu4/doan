'use client';

import Link from 'next/link';

type SubNavProps = {
  visible: boolean;
};

const navItems = [
  { label: 'Shop', href: '/shop', hasDropdown: true },
  { label: 'Deals', href: '/deals', hasDropdown: true },
  { label: 'Support & Services', href: '/support', hasDropdown: true },
  { label: 'Discover', href: '/discover', hasDropdown: true },
];

const linkItems = [
  { label: 'Fall Football', href: '/fall-football' },
  { label: 'Top Deals', href: '/top-deals' },
  { label: 'Deal of the Day', href: '/deal-of-the-day' },
  { label: 'Gift Ideas', href: '/gift-ideas' },
  { label: 'My Best Buy Memberships', href: '/memberships' },
  { label: 'Credit Cards', href: '/credit-cards' },
  { label: 'Gift Cards', href: '/gift-cards' },
  { label: 'Trade-In', href: '/trade-in' },
  { label: 'More', href: '/more', hasDropdown: true },
];

export default function SubNav({ visible }: SubNavProps) {
  return (
    <div
      className={`overflow-hidden bg-[#003399] text-white transition-all duration-300 ease-in-out ${
        visible ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-6 px-4 text-sm">
        {/* Left: pill buttons */}
        <div className="flex shrink-0 items-center gap-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 rounded-full border border-white/60 px-4 py-1.5 font-semibold transition hover:bg-white/10"
            >
              {item.label}
              {item.hasDropdown && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="img"
                  fill="currentColor"
                  className="block h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="m12.71 16.29 5.59-5.59c.63-.63.18-1.71-.71-1.71H6.41c-.89 0-1.34 1.08-.71 1.71l5.59 5.59c.39.39 1.02.39 1.41 0Z"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* Right: plain links */}
        <div className="flex flex-1 items-center justify-end gap-5 overflow-hidden">
          {linkItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 whitespace-nowrap transition hover:underline"
            >
              {item.label}
              {item.hasDropdown && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="img"
                  fill="currentColor"
                  className="block h-3 w-3"
                >
                  <path
                    fillRule="evenodd"
                    d="m12.71 16.29 5.59-5.59c.63-.63.18-1.71-.71-1.71H6.41c-.89 0-1.34 1.08-.71 1.71l5.59 5.59c.39.39 1.02.39 1.41 0Z"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}