'use client';
import DropDownIcon from '@/components/icons/DropDownIcon';
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
      <div className="mx-auto flex h-14 max-w-[1600px] items-center gap-6 px-4 py-3 md:gap-6 md:px-8 text-sm">
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
                <DropDownIcon className="h-3 w-3.5 text-[#fbfbfb]" />
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
                <DropDownIcon className="h-5 w-5" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}