'use client';

import { useEffect, useRef, useState } from 'react';
import MainHeader from './MainHeader';
import SubNav from './SubNav';

export default function Header() {
  const [showSubNav, setShowSubNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Ở gần đầu trang → luôn hiện
      if (currentY < 10) {
        setShowSubNav(true);
      } else if (currentY > lastScrollY.current) {
        // Scroll xuống → ẩn
        setShowSubNav(false);
      } else {
        // Scroll lên → hiện
        setShowSubNav(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Thanh xanh đậm: luôn hiển thị */}
      <MainHeader />

      {/* Thanh xanh nhạt: ẩn/hiện theo scroll */}
      <SubNav visible={showSubNav} />
    </header>
  );
}